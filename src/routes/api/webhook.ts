import { createFileRoute } from "@tanstack/react-router";
import crypto from "crypto";

// Helper function to post notifications to Telegram
async function sendTelegramNotification(text: string) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn("Telegram Bot Token or Chat ID is missing from env variables.");
    return;
  }

  try {
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
      }),
    });
  } catch (err) {
    console.error("Failed to send Telegram message:", err);
  }
}

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
      payment_type
    } = body;

    const serverKey = process.env.MIDTRANS_SERVER_KEY || "";

    // 2. Validate the Signature Key for security
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

    // Format the gross_amount for nicer reading
    const formattedAmount = Number(gross_amount).toLocaleString("id-ID");

    // 3. Handle the Transaction Status and Send Telegram Alerts
    if (transaction_status === "capture" || transaction_status === "settlement") {
      if (fraud_status === "accept" || !fraud_status) {
        
        // TODO: Update your database -> Order status = PAID
        
        await sendTelegramNotification(`
✅ <b>PAYMENT SUCCESS</b>
<b>Order ID:</b> <code>${order_id}</code>
<b>Amount:</b> IDR ${formattedAmount}
<b>Method:</b> ${payment_type || "N/A"}
`.trim());
      }
    } else if (
      transaction_status === "cancel" ||
      transaction_status === "deny" ||
      transaction_status === "expire"
    ) {
      
      // TODO: Update your database -> Order status = FAILED / CANCELLED
      
      await sendTelegramNotification(`
❌ <b>PAYMENT FAILED / EXPIRED</b>
<b>Order ID:</b> <code>${order_id}</code>
<b>Amount:</b> IDR ${formattedAmount}
<b>Status:</b> ${transaction_status}
`.trim());
    } else if (transaction_status === "pending") {
      
      // TODO: Update your database -> Order status = PENDING
      
      await sendTelegramNotification(`
⏳ <b>PAYMENT PENDING</b>
<b>Order ID:</b> <code>${order_id}</code>
<b>Amount:</b> IDR ${formattedAmount}
<b>Status:</b> Awaiting customer action
`.trim());
    }

    // 4. Return 200 OK so Midtrans stops retrying
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
      POST: ({ request }) => handler(request),
    },
  },
});