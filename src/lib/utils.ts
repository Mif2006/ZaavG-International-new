import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { Client, Environment, LogLevel, OrdersController } from "@paypal/paypal-server-sdk";




export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const paypalClient = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: process.env.VITE_PAYPAL_CLIENT_ID || "",
    oAuthClientSecret: process.env.PAYPAL_CLIENT_SECRET || "",
  },
  timeout: 0,
  environment: Environment.Production,
  logging: {
    logLevel: LogLevel.Info,
  },
});

export const ordersController = new OrdersController(paypalClient);