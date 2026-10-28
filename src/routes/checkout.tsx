import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { useCart } from "@/lib/cart-store";
import { Navbar } from "@/components/Navbar";
import { PayPalCheckout } from "@/components/Paypal/PaypalCheckout";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — ZAAV G" },
      { name: "description", content: "Review your order and choose a payment method." },
    ],
  }),
  component: CheckoutPage,
});

type CheckoutData = {
  method: "pickup" | "delivery";
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  phoneCountryCode: string;
  phoneCountryName: string;
  streetAddress: string;
  apartment: string;
  city: string;
  province: string;
  postalCode: string;
  deliveryCountryCode: string;
  deliveryCountryAlpha2: string;
  deliveryCountryName: string;
  orderNotes: string;
  fullAddressString: string;
  pickupAddress: string;
};

type PaymentMethod = "midtrans" | "paypal";

const DELIVERY_FEE_IDR = 415000;

type Lang = "en" | "ru" | "id";

const T: Record<Lang, Record<string, string>> = {
  en: {
    title: "Finalize Checkout",
    review: "Review your order",
    customer: "Customer details",
    delivery: "Delivery details",
    pickup: "Pickup",
    deliveryMethod: "Delivery",
    payment: "Payment method",
    localPayment: "Local payment",
    localDescription: "Pay securely with Midtrans in IDR.",
    localAvailability: "Indonesian bank accounts and local methods only. Paying internationally? Use PayPal.",
    paypal: "PayPal",
    paypalDescription: "Pay with PayPal or use a credit/debit card through PayPal.",
    subtotal: "Subtotal",
    total: "Total",
    idr: "IDR",
    approxUsd: "Approx. PayPal amount",
    exchangeDate: "Rate date",
    payNow: "Pay now",
    processing: "Processing...",
    back: "Back to cart",
    missing: "Your checkout information is missing. Please return to the cart and try again.",
    returnCart: "Return to cart",
    error: "Something went wrong. Please try again.",
    paymentFailed: "Payment could not be started. Please try again.",
    pending: "Your payment is pending. Please follow the payment instructions to complete it.",
    notes: "Order notes",
    noNotes: "No notes",
    shipping: "Shipping",
    free: "Free",
    cardPayment: "Debit / Credit Card",
    cardDescription: "Pay securely with your card through PayPal.",
  },
  ru: {
    title: "Завершение заказа",
    review: "Проверьте заказ",
    customer: "Данные покупателя",
    delivery: "Доставка",
    pickup: "Самовывоз",
    deliveryMethod: "Доставка",
    payment: "Способ оплаты",
    localPayment: "Местная оплата",
    localDescription: "Безопасная оплата через Midtrans в IDR.",
    localAvailability: "Только индонезийские банковские счета и местные способы оплаты. Для международной оплаты используйте PayPal.",
    paypal: "PayPal",
    paypalDescription: "Оплата через PayPal или банковской картой через PayPal.",
    subtotal: "Подытог",
    total: "Итого",
    idr: "IDR",
    approxUsd: "Примерная сумма PayPal",
    exchangeDate: "Дата курса",
    payNow: "Оплатить",
    processing: "Обработка...",
    back: "Назад в корзину",
    missing: "Данные оформления заказа отсутствуют. Вернитесь в корзину и попробуйте снова.",
    returnCart: "Вернуться в корзину",
    error: "Произошла ошибка. Попробуйте снова.",
    paymentFailed: "Не удалось начать оплату. Попробуйте снова.",
    pending: "Платеж ожидает подтверждения. Следуйте инструкциям для завершения оплаты.",
    notes: "Примечания к заказу",
    noNotes: "Нет примечаний",
    shipping: "Доставка",
    free: "Бесплатно",
    cardPayment: "Дебетовая / кредитная карта",
    cardDescription: "Безопасная оплата картой через PayPal.",
  },
  id: {
    title: "Selesaikan Checkout",
    review: "Tinjau pesanan Anda",
    customer: "Detail pelanggan",
    delivery: "Detail pengiriman",
    pickup: "Pengambilan",
    deliveryMethod: "Pengiriman",
    payment: "Metode pembayaran",
    localPayment: "Pembayaran lokal",
    localDescription: "Bayar dengan aman melalui Midtrans dalam IDR.",
    localAvailability: "Hanya untuk rekening bank dan metode pembayaran lokal Indonesia. Untuk pembayaran internasional, gunakan PayPal.",
    paypal: "PayPal",
    paypalDescription: "Bayar dengan PayPal atau kartu kredit/debit melalui PayPal.",
    subtotal: "Subtotal",
    total: "Total",
    idr: "IDR",
    approxUsd: "Perkiraan jumlah PayPal",
    exchangeDate: "Tanggal kurs",
    payNow: "Bayar sekarang",
    processing: "Memproses...",
    back: "Kembali ke keranjang",
    missing: "Informasi checkout tidak ditemukan. Silakan kembali ke keranjang dan coba lagi.",
    returnCart: "Kembali ke keranjang",
    error: "Terjadi kesalahan. Silakan coba lagi.",
    paymentFailed: "Pembayaran tidak dapat dimulai. Silakan coba lagi.",
    pending: "Pembayaran Anda sedang menunggu. Ikuti instruksi pembayaran untuk menyelesaikannya.",
    notes: "Catatan pesanan",
    noNotes: "Tidak ada catatan",
    shipping: "Pengiriman",
    free: "Gratis",
    cardPayment: "Kartu Debit / Kredit",
    cardDescription: "Bayar dengan aman menggunakan kartu melalui PayPal.",
  },
};

function BrandLogo({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex h-8 items-center rounded-md border border-black/[0.08] bg-white px-2.5 text-[11px] font-bold tracking-tight shadow-[0_1px_2px_rgba(0,0,0,0.03)] ${className}`}>
      {children}
    </span>
  );
}

function PayPalMark() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative flex h-11 w-9 items-center justify-center">
        <svg viewBox="0 0 42 48" className="h-10 w-9" aria-hidden="true">
          <path d="M16 3h14c7.5 0 11.9 4.1 10.5 11.1-1.2 6-5.7 9.1-12.4 9.1h-5.4l-2.4 12.2H9.6L16 3Z" fill="#003087" />
          <path d="M10.7 8.6h13.8c7.2 0 11.2 3.7 9.9 10.1-1 4.9-4.8 7.5-10.5 7.5h-4.7l-2.3 11.4H6.6l4.1-29Z" fill="#009cde" />
        </svg>
      </div>
      <span className="text-[27px] font-bold tracking-[-0.06em] text-[#0070ba]">PayPal</span>
    </div>
  );
}

function LocalPaymentMarks() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <BrandLogo className="font-black tracking-[-0.08em]">QRIS</BrandLogo>
      <BrandLogo className="text-[#008bd2] text-[12px]">gopay</BrandLogo>
      <BrandLogo className="font-medium">Bank Transfer</BrandLogo>
      <BrandLogo className="text-[#00529b]">BCA</BrandLogo>
      <BrandLogo className="text-[#0077a8]">BNI</BrandLogo>
      <BrandLogo className="text-[#0878bd]">BRI</BrandLogo>
      <BrandLogo className="text-[#1b4d8c]">mandiri</BrandLogo>
    </div>
  );
}

function CardPaymentMarks() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <BrandLogo className="font-black italic">VISA</BrandLogo>
      <BrandLogo>
        <span className="mr-1 inline-block h-4 w-4 rounded-full bg-[#eb001b]" />
        <span className="-ml-2 inline-block h-4 w-4 rounded-full bg-[#f79e1b]/90" />
        <span className="ml-1 text-[9px] text-black/50">Mastercard</span>
      </BrandLogo>
      <BrandLogo className="text-[#0876b9]">JCB</BrandLogo>
      <BrandLogo className="text-[#2d5da8]">AMEX</BrandLogo>
    </div>
  );
}

function CheckoutPage() {
  const { lang } = useI18n();
  const t = T[lang as Lang] || T.en;
  const navigate = useNavigate();
  const { items, total } = useCart();

  const [checkoutData, setCheckoutData] = useState<CheckoutData | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("midtrans");
  const [apiError, setApiError] = useState<string | null>(null);
  const [isMidtransProcessing, setIsMidtransProcessing] = useState(false);
  const [isMidtransReady, setIsMidtransReady] = useState(false);
  const [paypalQuote, setPaypalQuote] = useState<{
    totalUsd: string;
    exchangeRate: number;
    exchangeRateDate: string | null;
  } | null>(null);
  const [quoteError, setQuoteError] = useState<string | null>(null);

  const shippingFee = checkoutData?.method === "delivery" ? DELIVERY_FEE_IDR : 0;
  const checkoutTotal = total + shippingFee;

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("zaavg-checkout");
      if (!raw) return;
      setCheckoutData(JSON.parse(raw));
    } catch (error) {
      console.error("Unable to restore checkout data:", error);
    }
  }, []);

  useEffect(() => {
    if (!checkoutData || items.length === 0) return;

    let cancelled = false;
    const scriptId = "midtrans-script";
    // The backend Snap client is configured for production, so the browser SDK
    // must use the matching production endpoint.
    const scriptSrc = "https://app.midtrans.com/snap/snap.js";
    const clientKey = import.meta.env.VITE_MIDTRANS_CLIENT_KEY;

    if ((window as any).snap?.pay) {
      setIsMidtransReady(true);
      return;
    }

    setIsMidtransReady(false);

    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (script && !script.src.startsWith(scriptSrc)) {
      script.remove();
      script = null;
    }

    const onLoad = () => {
      if (!cancelled) {
        setIsMidtransReady(Boolean((window as any).snap?.pay));
      }
    };
    const onError = () => {
      if (!cancelled) {
        setIsMidtransReady(false);
        setApiError("Unable to load Midtrans checkout. Please refresh the page and try again.");
      }
    };

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = scriptSrc;
      script.setAttribute("data-client-key", clientKey || "");
      script.async = true;
    }

    script.addEventListener("load", onLoad);
    script.addEventListener("error", onError);

    if (!script.isConnected) {
      document.body.appendChild(script);
    } else if ((window as any).snap?.pay) {
      onLoad();
    }

    return () => {
      cancelled = true;
      script?.removeEventListener("load", onLoad);
      script?.removeEventListener("error", onError);
    };
  }, [checkoutData, items.length]);

  useEffect(() => {
    if (!checkoutData || items.length === 0) return;

    let cancelled = false;

    const loadQuote = async () => {
      setQuoteError(null);
      try {
        const response = await fetch(`/api/paypal/quote?totalIdr=${encodeURIComponent(checkoutTotal)}`);
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Failed to get exchange rate");
        if (!cancelled) {
          setPaypalQuote({
            totalUsd: data.totalUsd,
            exchangeRate: Number(data.exchangeRate),
            exchangeRateDate: data.exchangeRateDate || null,
          });
        }
      } catch (error: any) {
        if (!cancelled) setQuoteError(error?.message || t.error);
      }
    };

    loadQuote();
    return () => {
      cancelled = true;
    };
  }, [checkoutData, items.length, checkoutTotal, t.error]);

  const customerDetails = useMemo(() => {
    if (!checkoutData) return null;

    return {
      first_name: checkoutData.firstName,
      last_name: checkoutData.lastName,
      email: checkoutData.email,
      phone: checkoutData.phone,
      shipping_address:
        checkoutData.method === "delivery"
          ? {
              address: checkoutData.fullAddressString,
              city: checkoutData.city,
              province: checkoutData.province,
              postal_code: checkoutData.postalCode,
              country_code: checkoutData.deliveryCountryCode,
            }
          : undefined,
    };
  }, [checkoutData]);

  const startMidtransPayment = async () => {
    if (!checkoutData || items.length === 0) return;

    setApiError(null);
    setIsMidtransProcessing(true);

    try {
      const cartSummaryString = items
        .map((item) => `${item.title} ${item.size ? `(${item.size})` : ""} x${item.quantity}`)
        .join(", ")
        .substring(0, 255);

      const payload = {
        orderId: `ORDER-${Date.now()}`,
        grossAmount: checkoutTotal,
        orderNotes: checkoutData.orderNotes,
        cartSummary: cartSummaryString,
        address: checkoutData.fullAddressString,
        customerDetails: {
          ...customerDetails,
        },
        itemDetails: [
          ...items.map((item) => ({
            id: item.id,
            price: item.price,
            quantity: item.quantity,
            name: (item.size ? `${item.title} (${item.size})` : item.title).substring(0, 50),
          })),
          ...(shippingFee > 0
            ? [
                {
                  id: "SHIPPING",
                  price: shippingFee,
                  quantity: 1,
                  name: "International shipping",
                },
              ]
            : []),
        ],
      };

      const response = await fetch("/api/midtrans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok || !data.token) {
        throw new Error(data.error || t.paymentFailed);
      }

      const snap = (window as any).snap;
      if (!snap?.pay) {
        throw new Error("Midtrans checkout is still loading. Please try again.");
      }

      snap.pay(data.token, {
        onSuccess: (result: any) => {
          console.log("Midtrans payment success:", result);
          sessionStorage.removeItem("zaavg-checkout");
          navigate({ to: "/thankyou" });
        },
        onPending: (result: any) => {
          console.log("Midtrans payment pending:", result);
          setApiError(t.pending);
        },
        onError: (result: any) => {
          console.error("Midtrans payment error:", result);
          setApiError(t.paymentFailed);
        },
        onClose: () => {
          console.log("Midtrans popup closed");
        },
      });
    } catch (error: any) {
      console.error("Midtrans checkout error:", error);
      setApiError(error?.message || t.paymentFailed);
    } finally {
      setIsMidtransProcessing(false);
    }
  };

  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center px-6 pt-24">
          <div className="max-w-md text-center space-y-5">
            <h1 className="text-3xl font-bold">{t.title}</h1>
            <p className="text-sm text-black/60">Your cart is empty.</p>
            <Link to="/" className="inline-flex px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest">
              {t.returnCart}
            </Link>
          </div>
        </main>
      </>
    );
  }

  if (!checkoutData) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center px-6 pt-24">
          <div className="max-w-md text-center space-y-5">
            <h1 className="text-3xl font-bold">{t.title}</h1>
            <p className="text-sm text-black/60">{t.missing}</p>
            <Link to="/" className="inline-flex px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest">
              {t.returnCart}
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f8f8f6] pt-[90px] pb-16">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="mb-10 flex items-center justify-between gap-4">
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-black/40">
                Checkout
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{t.title}</h1>
            </div>
            <Link
              to="/"
              onClick={() => {
                // Preserve checkout data and explicitly reopen the cart on the home page.
                try { sessionStorage.setItem("zaavg-open-cart", "1"); } catch {}
                window.dispatchEvent(new Event("zaavg:open-cart"));
              }}
              className="text-xs font-semibold uppercase tracking-widest text-black/50 hover:text-black"
            >
              ← {t.back}
            </Link>
          </div>

          {apiError && (
            <div className="mb-6 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {apiError}
            </div>
          )}

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_420px]">
            <section className="space-y-6">
              <div className="bg-white border border-black/10 p-6 sm:p-8">
                <h2 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-black/60">{t.review}</h2>

                <div className="space-y-5">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size || ""}`} className="group flex items-center gap-4 border-b border-black/[0.08] pb-5">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-neutral-100 ring-1 ring-black/[0.06]">
                        {item.image ? (
                          <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-[10px] uppercase tracking-widest text-black/30">No photo</div>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-black">{item.title}</p>
                            {item.size && <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-black/45">Size {item.size}</p>}
                            <p className="mt-2 text-xs text-black/45">Qty {item.quantity}</p>
                          </div>
                          <p className="shrink-0 text-sm font-bold tabular-nums">
                            Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="space-y-3 pt-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-black/50">{t.subtotal}</span>
                      <span className="font-semibold tabular-nums">Rp {total.toLocaleString("id-ID")}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-black/50">{t.shipping}</span>
                      <span className="font-semibold tabular-nums">{shippingFee ? <>Rp {shippingFee.toLocaleString("id-ID")} <span className="font-normal text-black/35">· ~US$25</span></> : t.free}</span>
                    </div>
                    <div className="flex items-end justify-between border-t border-black/10 pt-4">
                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/50">{t.total}</span>
                      <span className="text-2xl font-bold tabular-nums">Rp {checkoutTotal.toLocaleString("id-ID")}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-black/10 p-6 sm:p-8">
                <h2 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-black/60">{t.customer}</h2>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 text-sm">
                  <div><span className="block text-[10px] uppercase tracking-widest text-black/40">Name</span><span>{checkoutData.firstName} {checkoutData.lastName}</span></div>
                  <div><span className="block text-[10px] uppercase tracking-widest text-black/40">Email</span><span className="break-all">{checkoutData.email}</span></div>
                  <div><span className="block text-[10px] uppercase tracking-widest text-black/40">Phone</span><span>{checkoutData.phone}</span></div>
                  <div><span className="block text-[10px] uppercase tracking-widest text-black/40">{checkoutData.method === "delivery" ? t.deliveryMethod : t.pickup}</span><span>{checkoutData.fullAddressString}</span></div>
                </div>
              </div>

              <div className="bg-white border border-black/10 p-6 sm:p-8">
                <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-black/60">{t.notes}</h2>
                <p className="text-sm text-black/60">{checkoutData.orderNotes || t.noNotes}</p>
              </div>
            </section>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[28px] border border-black/[0.08] bg-[#fcfbf8] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.05)] sm:p-7">
                <div className="mb-7">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-black/40">Secure checkout</p>
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] text-black sm:text-3xl">{t.payment}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-black/50">Choose the payment method that works best for you.</p>
                </div>

                <div className="space-y-5">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("midtrans")}
                    className={`group relative w-full overflow-hidden rounded-[24px] border p-6 text-left transition-all duration-300 sm:p-7 ${paymentMethod === "midtrans" ? "border-black bg-white shadow-[0_18px_45px_rgba(0,0,0,0.09)]" : "border-black/[0.09] bg-white hover:-translate-y-0.5 hover:border-black/20 hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)]"}`}
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#00a99d] via-[#008fd5] to-[#45cbad] opacity-80" />
                    <div className="flex items-start justify-between gap-5">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-3">
                          <span className="flex h-11 w-[124px] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white px-1 ring-1 ring-black/[0.06]">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Midtrans.png"
                              alt="Midtrans"
                              className="aspect-[4/1] w-full object-cover object-center"
                              loading="eager"
                              onError={(event) => {
                                const image = event.currentTarget;
                                image.style.display = "none";
                                const fallback = image.nextElementSibling as HTMLElement | null;
                                if (fallback) fallback.style.display = "inline";
                              }}
                            />
                            <span className="hidden text-lg font-semibold tracking-tight text-[#0badDC]">midtrans</span>
                          </span>
                          <div>
                            <p className="text-lg font-semibold tracking-[-0.02em]">{t.localPayment}</p>
                            <p className="mt-0.5 text-xs text-black/45">{t.localDescription}</p>
                          </div>
                        </div>
                        <div className="mt-6">
                          <LocalPaymentMarks />
                        </div>
                        <div className="mt-4 flex items-start gap-2.5 rounded-lg bg-[#f2f8fa] px-3 py-2.5 text-xs leading-relaxed text-slate-600">
                          <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#087e9b]" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                            <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M10 9v4M10 6.5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                          <p>{t.localAvailability}</p>
                        </div>
                        <div className="mt-5 flex items-center justify-between border-t border-black/[0.07] pt-4">
                          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/35">IDR payment</span>
                          <span className="text-base font-bold tabular-nums">Rp {checkoutTotal.toLocaleString("id-ID")}</span>
                        </div>
                      </div>
                      <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all ${paymentMethod === "midtrans" ? "border-black" : "border-black/20"}`}>
                        {paymentMethod === "midtrans" && <span className="h-3 w-3 rounded-full bg-black" />}
                      </span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("paypal")}
                    className={`group relative w-full overflow-hidden rounded-[24px] border p-6 text-left transition-all duration-300 sm:p-7 ${paymentMethod === "paypal" ? "border-black bg-white shadow-[0_18px_45px_rgba(0,0,0,0.09)]" : "border-black/[0.09] bg-white hover:-translate-y-0.5 hover:border-black/20 hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)]"}`}
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-[#ffc439] opacity-90" />
                    <div className="flex items-start justify-between gap-5">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <PayPalMark />
                          <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all ${paymentMethod === "paypal" ? "border-[#0070ba]" : "border-black/20"}`}>
                            {paymentMethod === "paypal" && <span className="h-3 w-3 rounded-full bg-[#0070ba]" />}
                          </span>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-black/50">{t.paypalDescription}</p>
                        <div className="mt-5">
                          <CardPaymentMarks />
                        </div>
                        <div className="mt-5 flex items-center justify-between border-t border-black/[0.07] pt-4">
                          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/35">PayPal / Card</span>
                          <span className="text-base font-bold tabular-nums">{paypalQuote ? `USD ${paypalQuote.totalUsd}` : "USD —"}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                {paymentMethod === "paypal" && (
                  <div className="mt-5 rounded-[22px] border border-black/[0.07] bg-[#f7f6f2] p-5 sm:p-6">
                    {paypalQuote && (
                      <div className="mb-5 flex items-center justify-between gap-4 text-xs text-black/50">
                        <span>{t.approxUsd}</span>
                        <span className="font-bold text-black">USD {paypalQuote.totalUsd}</span>
                      </div>
                    )}

                    {quoteError && (
                      <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">
                        {quoteError}
                      </div>
                    )}

                    <PayPalCheckout
                      items={items}
                      totalIdr={checkoutTotal}
                      customerDetails={{
                        ...customerDetails!,
                        shipping_address: customerDetails!.shipping_address
                          ? {
                              ...customerDetails!.shipping_address,
                              // PayPal requires ISO alpha-2 (e.g. ID), while Midtrans
                              // continues to receive the alpha-3 code (e.g. IDN).
                              country_code: checkoutData.deliveryCountryAlpha2,
                            }
                          : undefined,
                      }}
                      orderNotes={checkoutData.orderNotes}
                      deliveryMethod={checkoutData.method}
                      onSuccess={() => {
                        sessionStorage.removeItem("zaavg-checkout");
                        navigate({ to: "/thankyou" });
                      }}
                    />
                  </div>
                )}

                {paymentMethod === "midtrans" && (
                  <div className="mt-5 rounded-[22px] border border-black/[0.07] bg-[#f7f6f2] p-5 sm:p-6">
                    <button
                      type="button"
                      onClick={startMidtransPayment}
                      disabled={isMidtransProcessing || !isMidtransReady}
                      className="w-full rounded-xl bg-[#45cbad] py-4 text-xs font-bold uppercase tracking-widest text-white shadow-[0_8px_20px_rgba(69,203,173,0.22)] transition-all hover:-translate-y-0.5 hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {isMidtransProcessing ? t.processing : !isMidtransReady ? "Loading payment..." : t.payNow}
                    </button>
                    <p className="mt-3 text-center text-[11px] leading-relaxed text-black/40">{t.localDescription}</p>
                  </div>
                )}

                <div className="mt-7 border-t border-black/10 pt-6">
                  <div className="flex items-end justify-between">
                    <span className="text-xs font-semibold uppercase tracking-widest text-black/50">{t.total}</span>
                    <span className="text-2xl font-bold tabular-nums">Rp {checkoutTotal.toLocaleString("id-ID")}</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
 
