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
    
    // 1. Destructure address / shippingAddress alongside the other fields
    const { 
      orderId, 
      grossAmount, 
      customerDetails, 
      itemDetails, 
      orderNotes, 
      cartSummary,
      address,
      shippingAddress 
    } = body;

    // Resolve address from top-level body properties or customerDetails
    const finalAddress = address || shippingAddress || customerDetails?.address || customerDetails?.shipping_address?.address;

    const parameter = {
      transaction_details: {
        order_id: orderId,
        gross_amount: grossAmount, 
      },
      item_details: itemDetails, 
      customer_details: customerDetails, 
      
      // Field 1: Customer Notes
      custom_field1: orderNotes ? String(orderNotes).substring(0, 255) : undefined,
      
      // Field 2: Cart Summary (Items + Sizes)
      custom_field2: cartSummary ? String(cartSummary).substring(0, 255) : undefined,

      // Field 3: Shipping / Delivery Address
      custom_field3: finalAddress ? String(finalAddress).substring(0, 255) : undefined,
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