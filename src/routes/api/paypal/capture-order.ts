import { createFileRoute } from "@tanstack/react-router";
import { ApiError } from "@paypal/paypal-server-sdk";
import { ordersController } from "../../../lib/utils"

async function handler(request: Request) {
  try {
    const body = await request.json();
    const { orderID } = body;

    if (!orderID) {
      return new Response(JSON.stringify({ error: "Missing orderID" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const collect = {
      id: orderID,
      prefer: "return=representation",
    };

    const { body: responseBody, statusCode } = await ordersController.captureOrder(collect);

    return new Response(responseBody as string, {
      status: statusCode,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("PayPal Capture Order Error:", error);
    const errorMessage = error instanceof ApiError ? error.message : "Failed to capture PayPal order";

    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export const Route = createFileRoute("/api/paypal/capture-order")({
  server: {
    handlers: {
      POST: ({ request }) => handler(request),
    },
  },
});