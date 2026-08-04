import { createFileRoute } from "@tanstack/react-router";
import crypto from "crypto"; // Built-in Node.js module

async function handler(request: Request) {
  try {
    const body = await request.json();

    // 1. Destructure the required fields from Midtrans payload
    const {
      order_id,
      status_code,
      gross_amount,
      signature_key,
      transaction_status,
      fraud_status,
    } = body;

    const serverKey = process.env.MIDTRANS_SERVER_KEY || "";

    // 2. Validate the Signature Key for security
    // Midtrans creates this hash using your secret Server Key to prove the request is authentic
    const hash = crypto
      .createHash("sha512")
      .update(`${order_id}${status_code}${gross_amount}${serverKey}`)
      .digest("hex");

    if (hash !== signature_key) {
      console.error(`Invalid signature for order ${order_id}`);
      return new Response(JSON.stringify({ error: "Invalid signature" }), {
        status: 403,
        headers: { "Content-Type": "application/json" },
      });
    }

    // 3. Handle the Transaction Status
    // This is where you connect to your database (e.g., Prisma, Drizzle, Supabase)
    if (transaction_status === "capture" || transaction_status === "settlement") {
      if (fraud_status === "accept" || !fraud_status) {
        // TODO: Update your database -> Order status = PAID
        console.log(`✅ Order ${order_id} paid successfully.`);
      }
    } else if (
      transaction_status === "cancel" ||
      transaction_status === "deny" ||
      transaction_status === "expire"
    ) {
      // TODO: Update your database -> Order status = FAILED / CANCELLED
      console.log(`❌ Order ${order_id} failed or expired.`);
    } else if (transaction_status === "pending") {
      // TODO: Update your database -> Order status = PENDING
      console.log(`⏳ Order ${order_id} is awaiting payment.`);
    }

    // 4. Return 200 OK
    // You MUST return a 200 status, otherwise Midtrans will keep retrying the webhook
    return new Response(JSON.stringify({ status: "OK" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Midtrans Webhook Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export const Route = createFileRoute("/api/webhook")({
  server: {
    handlers: {
      // Webhooks are always POST requests
      POST: ({ request }) => handler(request),
    },
  },
});