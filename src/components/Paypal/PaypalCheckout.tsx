import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import type { CartItem } from "@/lib/cart-store";

interface PayPalCustomerDetails {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  shipping_address?: {
    address: string;
    city: string;
    province: string;
    postal_code: string;
    country_code: string;
  };
}

interface PayPalCheckoutProps {
  items: CartItem[];
  totalIdr: number;
  customerDetails: PayPalCustomerDetails;
  orderNotes?: string;
  deliveryMethod?: "pickup" | "delivery";
  disabled?: boolean;
  onBeforeCreate?: () => boolean | void;
  onSuccess?: (result: any) => void;
}

export function PayPalCheckout({
  items,
  totalIdr,
  customerDetails,
  orderNotes,
  deliveryMethod,
  disabled = false,
  onBeforeCreate,
  onSuccess,
}: PayPalCheckoutProps) {
  const [status, setStatus] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const paypalOptions = {
    "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID || "",
    currency: "USD",
    intent: "capture",
    components: "buttons,funding-eligibility",
  } as const;

  const createOrder = async () => {
    const validationResult = onBeforeCreate?.();

    if (validationResult === false) {
      throw new Error("Please complete the required checkout fields.");
    }

    setIsLoading(true);
    setStatus("Creating PayPal order...");

    try {
      const res = await fetch("/api/paypal/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cart: items.map((item) => ({
            id: item.id,
            name: item.size ? `${item.title} (${item.size})` : item.title,
            priceIdr: item.price,
            quantity: item.quantity,
          })),
          totalIdr,
          customerDetails,
          orderNotes: orderNotes?.trim() || "",
          deliveryMethod: deliveryMethod || "pickup",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.id) {
        throw new Error(data.error || "Failed to create PayPal order");
      }

      const conversionText = data.totalUsd
        ? ` USD ${data.totalUsd}`
        : "";
      setStatus(`PayPal order ready${conversionText}. Awaiting approval...`);
      return data.id;
    } catch (err: any) {
      setStatus(`Create Order Error: ${err.message}`);
      setIsLoading(false);
      throw err;
    }
  };

  const captureOrder = async (data: { orderID: string }, actions: any) => {
    setStatus("Payment approved. Capturing funds...");

    try {
      const res = await fetch("/api/paypal/capture-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderID: data.orderID }),
      });

      const orderData = await res.json();
      const errorDetail = orderData?.details?.[0];

      if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
        setStatus(
          "Payment instrument declined. Please try another card or payment method."
        );
        return actions.restart();
      }

      if (!res.ok || errorDetail) {
        throw new Error(
          errorDetail?.description || orderData.error || "Capture failed"
        );
      }

      const capture =
        orderData.purchase_units?.[0]?.payments?.captures?.[0];

      setStatus(
        `Payment successful. Transaction ID: ${capture?.id || data.orderID}`
      );

      onSuccess?.(orderData);
    } catch (err: any) {
      setStatus(`Capture Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/60">
          PayPal
        </p>
        <p className="text-xs leading-relaxed text-black/50">
          Pay with your PayPal account or use a credit/debit card through PayPal.
        </p>
      </div>

      <PayPalScriptProvider options={paypalOptions}>
        <div className="space-y-3">
          <PayPalButtons
            fundingSource="paypal"
            style={{
              layout: "vertical",
              color: "gold",
              shape: "rect",
              label: "paypal",
            }}
            disabled={disabled || isLoading}
            createOrder={createOrder}
            onApprove={captureOrder}
            onCancel={() => {
              setIsLoading(false);
              setStatus("Checkout cancelled by user.");
            }}
            onError={(err) => {
              setIsLoading(false);
              setStatus(`PayPal SDK Error: ${String(err)}`);
              console.error("PayPal SDK Error:", err);
            }}
          />

          <div className="flex items-center gap-3 py-1">
            <div className="h-px flex-1 bg-black/10" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/35">
              or
            </span>
            <div className="h-px flex-1 bg-black/10" />
          </div>

          <PayPalButtons
            fundingSource="card"
            style={{
              layout: "vertical",
              color: "black",
              shape: "rect",
              label: "pay",
            }}
            disabled={disabled || isLoading}
            createOrder={createOrder}
            onApprove={captureOrder}
            onCancel={() => {
              setIsLoading(false);
              setStatus("Checkout cancelled by user.");
            }}
            onError={(err) => {
              setIsLoading(false);
              setStatus(`PayPal Card SDK Error: ${String(err)}`);
              console.error("PayPal Card SDK Error:", err);
            }}
          />
        </div>
      </PayPalScriptProvider>

      {status && (
        <div className="mt-3 p-3 bg-neutral-50 border border-black/10 text-xs text-black/60 break-words">
          <strong>Status:</strong> {status}
        </div>
      )}
    </div>
  );
}
