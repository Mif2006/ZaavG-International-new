import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PublicShell } from "@/components/public-shell";
import { Navbar } from "@/components/Navbar";

export const Route = createFileRoute("/thankyou")({
  head: () => ({
    meta: [
      { title: "Thank You — ZAAV G" },
      {
        name: "description",
        content: "Thank you for your purchase.",
      },
    ],
  }),
  component: ThankYouPage,
});

type Lang = "en" | "ru" | "id";

const T: Record<
  Lang,
  {
    title: string;
    subtitle: string;
    btnHome: string;
    btnCatalog: string;
  }
> = {
  ru: {
    title: "Спасибо за покупку!",
    subtitle: "Ваш заказ оформлен. Информация о заказе отправлена на ваш email.",
    btnHome: "На главную",
    btnCatalog: "В каталог",
  },
  en: {
    title: "Thank you for your purchase!",
    subtitle: "Your order has been placed. Order information has been sent to your email.",
    btnHome: "Home",
    btnCatalog: "Catalog",
  },
  id: {
    title: "Terima kasih atas pembelian Anda!",
    subtitle: "Pesanan Anda telah diproses. Informasi pesanan telah dikirim ke email Anda.",
    btnHome: "Beranda",
    btnCatalog: "Katalog",
  },
};

function ThankYouPage() {
  const { lang } = useI18n();
  const t = T[lang as Lang] || T.en;

  return (
    <>
    <Navbar />
      {/* Background container with an unsplash placeholder similar to the mountain landscape */}
      <div
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat pt-[80px]"
        style={{
          backgroundImage:
            'url("/ThankYouMountain.webp")',
        }}
      >
        {/* Dark overlay to ensure text readability against the image */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center">
          <h1 className="mb-4 text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tight text-white drop-shadow-lg">
            {t.title}
          </h1>
          
          <p className="mb-10 max-w-2xl text-[clamp(1.1rem,2.5vw,1.25rem)] font-medium leading-relaxed text-white/95 drop-shadow-md">
            {t.subtitle}
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row sm:gap-6">
            <Link
              to="/"
              className="inline-flex min-w-[200px] w-full cursor-pointer items-center justify-center rounded-lg bg-[#55e6a5] px-8 py-4 font-sans text-base font-semibold text-white no-underline shadow-[0_4px_16px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#42ce8f] sm:w-auto"
            >
              {t.btnHome}
            </Link>
            
            <Link
              to="/collections"
              className="inline-flex min-w-[200px] w-full cursor-pointer items-center justify-center rounded-lg bg-white px-8 py-4 font-sans text-base font-semibold text-[#1a1a1a] no-underline shadow-[0_4px_16px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 sm:w-auto"
            >
              {t.btnCatalog}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}