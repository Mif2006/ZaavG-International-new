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
    const body = await request.json();
    
    // 1. Destructure `orderNotes` from the body so we don't lose it
    const { orderId, grossAmount, customerDetails, itemDetails, orderNotes } = body;

    // 2. Pack the item names (which now include sizes!) and quantities
    const itemsSummary = (itemDetails || [])
      .map((i: any) => `${i.name} (x${i.quantity})`)
      .join(", ")
      .substring(0, 255); 

    const parameter = {
      transaction_details: {
        order_id: orderId,
        gross_amount: grossAmount, 
      },
      item_details: itemDetails, 
      customer_details: customerDetails, 
      
      // 3. Put the customer's notes in field 1 (if they exist)
      custom_field1: orderNotes ? orderNotes.substring(0, 255) : undefined,
      
      // 4. Put your custom summary in field 2
      custom_field2: itemsSummary,       
    };

    const transaction = await snap.createTransaction(parameter);

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
      POST: ({ request }) => handler(request),
    },
  },
});