import { createFileRoute } from "@tanstack/react-router";
import midtransClient from "midtrans-client";

// Initialize the Snap client once outside the handler
const snap = new midtransClient.Snap({
  isProduction: false, 
  serverKey: process.env.MIDTRANS_SERVER_KEY || "",
  clientKey: process.env.MIDTRANS_CLIENT_KEY || "", 
});

async function handler(request: Request) {
  try {
    // Parse the JSON payload sent from your frontend
    const body = await request.json();
    const { orderId, grossAmount, customerDetails, itemDetails } = body;

    // Pack the item names and quantities for the webhook notification
    const itemsSummary = (itemDetails || [])
      .map((i: any) => `${i.name} (x${i.quantity})`)
      .join(", ")
      .substring(0, 255); // Safety cap for Midtrans limit

    // Construct the payload exactly how Midtrans requires it
    const parameter = {
      transaction_details: {
        order_id: orderId,
        gross_amount: grossAmount, // Assuming this is now passed as IDR integer
      },
      item_details: itemDetails, // Passed as-is, assuming prices are IDR
      customer_details: customerDetails, // Sent to dashboard
      custom_field1: itemsSummary,       // Echoed back to webhook
    };

    // Request the unique Snap Token for this specific transaction
    const transaction = await snap.createTransaction(parameter);

    // Return a standard Web Response with the token
    return new Response(JSON.stringify({ token: transaction.token }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export const Route = createFileRoute("/api/midtrans")({
  server: {
    handlers: {
      // You generally only need POST since you are submitting order data
      POST: ({ request }) => handler(request),
    },
  },
});