import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export const Route = createFileRoute("/test-paypal")({
  component: TestPayPalPage,
});

function TestPayPalPage() {
  const [status, setStatus] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Initial options for PayPal Script Provider
  const paypalOptions = {
    "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID || "", // or process.env.PAYPAL_CLIENT_ID depending on your Vite prefix
    currency: "USD",
    intent: "capture",
  };

  return (
    <div style={{ maxWidth: "480px", margin: "40px auto", padding: "20px", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>PayPal Integration Test</h1>
      
      <div style={{ marginBottom: "1.5rem", padding: "1rem", border: "1px solid #e2e8f0", borderRadius: "8px" }}>
        <h2 style={{ fontSize: "1.1rem", marginTop: 0 }}>Test Cart</h2>
        <p style={{ margin: "4px 0", color: "#64748b" }}>Item: Sample Product</p>
        <p style={{ margin: "4px 0", fontWeight: "bold" }}>Total: $100.00 USD</p>
      </div>

      {/* PayPal SDK Provider */}
      <PayPalScriptProvider options={paypalOptions}>
        <PayPalButtons
          style={{
            layout: "vertical",
            color: "gold",
            shape: "rect",
            label: "paypal",
          }}
          disabled={isLoading}
          createOrder={async () => {
            setIsLoading(true);
            setStatus("Creating order...");
            
            try {
              const res = await fetch("/api/paypal/create-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  cart: [{ id: "test-item-1", quantity: 1 }],
                }),
              });

              const data = await res.json();

              if (!res.ok || !data.id) {
                throw new Error(data.error || "Failed to create order");
              }

              setStatus(`Order created (ID: ${data.id}). Awaiting customer approval...`);
              return data.id;
            } catch (err: any) {
              setStatus(`Create Order Error: ${err.message}`);
              setIsLoading(false);
              throw err;
            }
          }}
          onApprove={async (data, actions) => {
            setStatus("Payment approved. Capturing funds...");

            try {
              const res = await fetch("/api/paypal/capture-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ orderID: data.orderID }),
              });

              const orderData = await res.json();
              const errorDetail = orderData?.details?.[0];

              // Handle instrument decline (e.g., card refused inside PayPal popup)
              if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                setStatus("Payment instrument declined. Please try another card or payment method.");
                return actions.restart();
              }

              if (!res.ok || errorDetail) {
                throw new Error(
                  errorDetail?.description || orderData.error || "Capture failed"
                );
              }

              // Successful capture
              const capture = orderData.purchase_units?.[0]?.payments?.captures?.[0];
              setStatus(`Payment Successful! Transaction ID: ${capture?.id || data.orderID}`);
            } catch (err: any) {
              setStatus(`Capture Error: ${err.message}`);
            } finally {
              setIsLoading(false);
            }
          }}
          onCancel={() => {
            setIsLoading(false);
            setStatus("Checkout cancelled by user.");
          }}
          onError={(err) => {
            setIsLoading(false);
            setStatus(`PayPal SDK Error: ${err}`);
            console.error("PayPal SDK Error:", err);
          }}
        />
      </PayPalScriptProvider>

      {/* Status Output Box */}
      {status && (
        <div 
          style={{
            marginTop: "1.5rem",
            padding: "1rem",
            backgroundColor: "#f8fafc",
            border: "1px solid #cbd5e1",
            borderRadius: "6px",
            fontSize: "0.9rem",
            wordBreak: "break-word"
          }}
        >
          <strong>Status:</strong> {status}
        </div>
      )}
    </div>
  );
}