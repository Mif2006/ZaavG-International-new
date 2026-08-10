import { createFileRoute } from "@tanstack/react-router";

const escapeMD = (text: string) => {
  return String(text || "").replace(/([_*\[\]()~`>#+\-=|{}.!])/g, "\\$1");
};

export const Route = createFileRoute("/api/cooperation")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const { name, email, social, country, message } = body;

          // Validate required fields
          if (!name?.trim() || !email?.trim() || !country?.trim() || !message?.trim()) {
            return new Response(
              JSON.stringify({ error: "Missing required fields" }),
              { status: 400, headers: { "Content-Type": "application/json" } }
            );
          }

          const botToken = process.env.TELEGRAM_BOT_TOKEN;
          const chatId = process.env.TELEGRAM_CHAT_ID;

          if (!botToken || !chatId) {
            console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID environment variables.");
            return new Response(
              JSON.stringify({ error: "Server configuration error" }),
              { status: 500, headers: { "Content-Type": "application/json" } }
            );
          }

          // Format Telegram message
          const tgMsg =
            `🤝 *NEW PARTNERSHIP INQUIRY - ZAAV G*\n` +
            `📅 ${new Date().toLocaleString("id-ID", { timeZone: "Asia/Makassar" })}\n\n` +
            `👤 *Contact Details*\n` +
            `Name: ${escapeMD(name)}\n` +
            `Email: ${escapeMD(email)}\n` +
            (social ? `Instagram/Website: ${escapeMD(social)}\n` : "") +
            `Country: ${escapeMD(country)}\n\n` +
            `💬 *Message*\n` +
            `${escapeMD(message)}\n\n` +
            `🔗 [ZAAV G Website](https://zaavgbali.com)`;

          // Send message directly to Telegram Bot API
          const telegramRes = await fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                chat_id: chatId,
                text: tgMsg,
                parse_mode: "Markdown",
              }),
            }
          );

          const telegramData = await telegramRes.json();

          if (!telegramRes.ok || !telegramData.ok) {
            console.error("Telegram API Error:", telegramData);
            return new Response(
              JSON.stringify({ error: telegramData.description || "Failed to send message via Telegram" }),
              { status: telegramRes.status || 500, headers: { "Content-Type": "application/json" } }
            );
          }

          return new Response(
            JSON.stringify({ success: true }),
            { status: 200, headers: { "Content-Type": "application/json" } }
          );
        } catch (err) {
          console.error("Cooperation API Server Error:", err);
          return new Response(
            JSON.stringify({ error: "Internal Server Error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }
      },
    },
  },
});