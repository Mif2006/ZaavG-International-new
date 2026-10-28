import { createFileRoute } from "@tanstack/react-router";

async function handler(request: Request) {
  try {
    const url = new URL(request.url);
    const totalIdr = Number(url.searchParams.get("totalIdr"));

    if (!Number.isFinite(totalIdr) || totalIdr <= 0) {
      return new Response(JSON.stringify({ error: "Invalid cart total" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const rateResponse = await fetch(
      "https://api.frankfurter.dev/v2/rate/idr/usd",
      { headers: { Accept: "application/json" } }
    );

    if (!rateResponse.ok) {
      throw new Error("Unable to retrieve the current USD exchange rate.");
    }

    const rateData = await rateResponse.json();
    const usdPerIdr = Number(rateData?.rate);

    if (!Number.isFinite(usdPerIdr) || usdPerIdr <= 0) {
      throw new Error("Invalid USD exchange rate received from Frankfurter.");
    }

    // The PayPal order rounds each line item to cents, so this quote is an
    // estimate based on the cart total. The authoritative amount is calculated
    // again by /api/paypal/create-order from the individual cart items.
    const totalUsd = (totalIdr * usdPerIdr).toFixed(2);

    return new Response(
      JSON.stringify({
        totalIdr,
        totalUsd,
        exchangeRate: usdPerIdr,
        exchangeRateDate: rateData?.date || null,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("PayPal Quote Error:", error);
    return new Response(
      JSON.stringify({ error: error?.message || "Failed to get exchange rate" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export const Route = createFileRoute("/api/paypal/quote")({
  server: {
    handlers: {
      GET: ({ request }) => handler(request),
    },
  },
});
