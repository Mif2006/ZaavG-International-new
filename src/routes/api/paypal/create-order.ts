import { createFileRoute } from "@tanstack/react-router";
import { CheckoutPaymentIntent, ApiError } from "@paypal/paypal-server-sdk";
import { ordersController } from "../../../lib/utils"

async function handler(request: Request) {
  try {
    const body = await request.json();
    const { cart, totalIdr, customerDetails, orderNotes, deliveryMethod } = body;

    // Keep this aligned with DELIVERY_FEE_IDR in checkout.tsx. The server
    // computes the fee itself rather than trusting a client-supplied amount.
    const SHIPPING_FEE_IDR = 415000;
    const shippingFeeIdr = deliveryMethod === "delivery" ? SHIPPING_FEE_IDR : 0;

    if (!Array.isArray(cart) || cart.length === 0) {
      return new Response(JSON.stringify({ error: "Cart is empty" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const requestedTotalIdr = Number(totalIdr);
    if (!Number.isFinite(requestedTotalIdr) || requestedTotalIdr <= 0) {
      return new Response(JSON.stringify({ error: "Invalid cart total" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // PayPal charges in USD while the storefront's source-of-truth price is IDR.
    // Fetch the current IDR -> USD mid-market rate server-side so the browser
    // cannot change the amount that is sent to PayPal. Frankfurter publishes
    // the latest working-day rate and requires no API key.
    const rateResponse = await fetch(
      "https://api.frankfurter.dev/v2/rate/idr/usd",
      { headers: { Accept: "application/json" } }
    );

    if (!rateResponse.ok) {
      throw new Error("Unable to retrieve the current USD exchange rate. Please try again.");
    }

    const rateData = await rateResponse.json();
    const usdPerIdr = Number(rateData?.rate);

    if (!Number.isFinite(usdPerIdr) || usdPerIdr <= 0) {
      throw new Error("Invalid USD exchange rate received from Frankfurter.");
    }

    // Keep the inverse available for logging/diagnostics and the response metadata.
    const idrPerUsd = 1 / usdPerIdr;

    // Build the PayPal line items from the exact cart currently being checked out.
    // The rounded cents are summed so PayPal's item_total always exactly matches
    // the purchase-unit total.
    const normalizedItems = cart.map((item: any) => {
      const priceIdr = Number(item.priceIdr);
      const quantity = Number(item.quantity);

      if (!Number.isFinite(priceIdr) || priceIdr <= 0) {
        throw new Error(`Invalid price for cart item ${item.id || "unknown"}`);
      }
      if (!Number.isInteger(quantity) || quantity < 1) {
        throw new Error(`Invalid quantity for cart item ${item.id || "unknown"}`);
      }

      const unitAmountCents = Math.round((priceIdr / idrPerUsd) * 100);
      if (unitAmountCents < 1) {
        throw new Error(`Cart item ${item.id || "unknown"} is below PayPal's minimum USD cent value`);
      }

      return {
        id: String(item.id),
        name: String(item.name || item.id || "Item").slice(0, 127),
        quantity,
        unitAmountCents,
        lineTotalIdr: priceIdr * quantity,
      };
    });

    const productSubtotalIdr = normalizedItems.reduce(
      (sum: number, item: any) => sum + item.lineTotalIdr,
      0
    );
    const calculatedTotalIdr = productSubtotalIdr + shippingFeeIdr;

    // The checkout total includes delivery for delivery orders. Validate the
    // product subtotal and server-calculated shipping fee together.
    if (Math.round(calculatedTotalIdr) !== Math.round(requestedTotalIdr)) {
      return new Response(JSON.stringify({
        error: "Cart total changed. Please refresh the cart and try again.",
      }), {
        status: 409,
        headers: { "Content-Type": "application/json" },
      });
    }

    const itemTotalCents = normalizedItems.reduce(
      (sum: number, item: any) => sum + item.unitAmountCents * item.quantity,
      0
    );
    const shippingCents = Math.round((shippingFeeIdr / idrPerUsd) * 100);
    const orderTotalCents = itemTotalCents + shippingCents;
    const itemTotalUsd = (itemTotalCents / 100).toFixed(2);
    const shippingUsd = (shippingCents / 100).toFixed(2);
    const calculatedUsd = (orderTotalCents / 100).toFixed(2);

    const paypalItems = normalizedItems.map((item: any) => ({
      name: item.name,
      sku: item.id,
      quantity: String(item.quantity),
      unitAmount: {
        currencyCode: "USD",
        value: (item.unitAmountCents / 100).toFixed(2),
      },
      category: "PHYSICAL_GOODS",
    }));

    const purchaseUnit: any = {
      referenceId: `ORDER-${Date.now()}`,
      description: orderNotes ? String(orderNotes).slice(0, 127) : undefined,
      amount: {
        currencyCode: "USD",
        value: calculatedUsd,
        breakdown: {
          itemTotal: {
            currencyCode: "USD",
            value: itemTotalUsd,
          },
          ...(shippingCents > 0
            ? {
                shipping: {
                  currencyCode: "USD",
                  value: shippingUsd,
                },
              }
            : {}),
        },
      },
      items: paypalItems,
    };

    if (deliveryMethod === "delivery" && customerDetails?.shipping_address?.country_code) {
      const countryCode = String(customerDetails.shipping_address.country_code).toUpperCase();
      if (/^[A-Z]{2}$/.test(countryCode)) {
        purchaseUnit.shipping = {
          name: {
            fullName: `${customerDetails.first_name || ""} ${customerDetails.last_name || ""}`.trim(),
          },
          address: {
            addressLine1: String(customerDetails.shipping_address.address || "").slice(0, 300),
            adminArea2: String(customerDetails.shipping_address.city || "").slice(0, 120),
            adminArea1: String(customerDetails.shipping_address.province || "").slice(0, 120),
            postalCode: String(customerDetails.shipping_address.postal_code || "").slice(0, 60),
            countryCode,
          },
        };
      }
    }

    const collect = {
      body: {
        intent: CheckoutPaymentIntent.Capture,
        purchaseUnits: [purchaseUnit],
        payer: customerDetails?.email || customerDetails?.first_name || customerDetails?.last_name
          ? {
              name: {
                givenName: customerDetails?.first_name,
                surname: customerDetails?.last_name,
              },
              emailAddress: customerDetails?.email,
            }
          : undefined,
        applicationContext: {
          userAction: "PAY_NOW",
          shippingPreference: deliveryMethod === "delivery" ? "SET_PROVIDED_ADDRESS" : "NO_SHIPPING",
        },
      },
      prefer: "return=representation",
    };

    const { body: responseBody, statusCode } = await ordersController.createOrder(collect);

    let parsedResponse: any;
    try {
      parsedResponse = JSON.parse(responseBody as string);
    } catch {
      parsedResponse = {};
    }

    const responsePayload = {
      ...parsedResponse,
      totalIdr: requestedTotalIdr,
      productSubtotalIdr,
      shippingFeeIdr,
      totalUsd: calculatedUsd,
      productSubtotalUsd: itemTotalUsd,
      shippingUsd,
      exchangeRate: usdPerIdr,
      exchangeRateDate: rateData?.date || null,
      idrPerUsd,
    };

    return new Response(JSON.stringify(responsePayload), {
      status: statusCode,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("PayPal Create Order Error:", error);
    const errorMessage = error instanceof ApiError ? error.message : error?.message || "Failed to create PayPal order";

    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export const Route = createFileRoute("/api/paypal/create-order")({
  server: {
    handlers: {
      POST: ({ request }) => handler(request),
    },
  },
});