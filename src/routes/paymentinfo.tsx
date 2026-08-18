import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PublicShell } from "@/components/public-shell";

export const Route = createFileRoute("/paymentinfo")({
  head: () => ({
    meta: [
      { title: "Payment Methods — ZAAV G" },
      {
        name: "description",
        content:
          "Secure and convenient payment methods for ZAAV G jewelry, including Visa, Mastercard, Apple Pay, Google Pay, and more.",
      },
      { property: "og:title", content: "Payment Methods — ZAAV G" },
      {
        property: "og:description",
        content:
          "Secure and convenient payment methods for ZAAV G jewelry, including Visa, Mastercard, Apple Pay, Google Pay, and more.",
      },
    ],
  }),
  component: PaymentMethodsPage,
});

type Lang = "en" | "ru" | "id";

const T: Record<
  Lang,
  {
    paymentTitle: string;
    paymentUpdated: string;
    paymentIntro: string;
    paymentMethodsIntro: string;
    methodVisa: string;
    methodMastercard: string;
    methodApplePay: string;
    methodGooglePay: string;
    methodBankTransfer: string;
    methodLocal: string;
    paymentProviders: string;
    paymentSecurity: string;
    paymentHelp: string;
    paymentBtnCatalog: string;
    paymentBtnHome: string;
  }
> = {
  en: {
    paymentTitle: "PAYMENT METHODS",
    paymentUpdated: "Last updated: May 2026",
    paymentIntro:
      "At ZAAV G, we offer secure and convenient payment options for customers worldwide.\nAll payments are processed through trusted and encrypted payment systems to ensure your information remains protected.",
    paymentMethodsIntro:
      "Depending on your country, available payment methods may include:",
    methodVisa: "Visa",
    methodMastercard: "Mastercard",
    methodApplePay: "Apple Pay",
    methodGooglePay: "Google Pay",
    methodBankTransfer: "Bank Transfer",
    methodLocal: "Local Options",
    paymentProviders:
      "Payments are securely processed through trusted providers, including <strong>Midtrans</strong>, and other certified payment partners.",
    paymentSecurity:
      "<strong>ZAAV G does not store full payment card information.</strong>\nYour financial data is encrypted and handled exclusively by PCI-DSS compliant payment processors.",
    paymentHelp:
      "If you experience any difficulties during checkout or need assistance with payment, please contact us and our team will be happy to help.",
    paymentBtnCatalog: "View Collections",
    paymentBtnHome: "Home",
  },
  ru: {
    paymentTitle: "СПОСОБЫ ОПЛАТЫ",
    paymentUpdated: "Последнее обновление: май 2026",
    paymentIntro:
      "В ZAAV G мы предлагаем безопасные и удобные варианты оплаты для клиентов по всему миру.\nВсе платежи обрабатываются через надежные и зашифрованные платежные системы для защиты вашей информации.",
    paymentMethodsIntro:
      "В зависимости от вашей страны, доступные способы оплаты могут включать:",
    methodVisa: "Visa",
    methodMastercard: "Mastercard",
    methodApplePay: "Apple Pay",
    methodGooglePay: "Google Pay",
    methodBankTransfer: "Банковский перевод",
    methodLocal: "Локальные способы",
    paymentProviders:
      "Платежи безопасно обрабатываются через надежных провайдеров, включая <strong>Midtrans</strong> и других сертифицированных платежных партнеров.",
    paymentSecurity:
      "<strong>ZAAV G не хранит полную информацию о платежных картах.</strong>\nВаши финансовые данные шифруются и обрабатываются исключительно платежными процессорами, соответствующими стандарту PCI-DSS.",
    paymentHelp:
      "Если у вас возникли трудности при оформлении заказа или нужна помощь с оплатой, пожалуйста, свяжитесь с нами — наша команда будет рада помочь.",
    paymentBtnCatalog: "Смотреть коллекции",
    paymentBtnHome: "На главную",
  },
  id: {
    paymentTitle: "METODE PEMBAYARAN",
    paymentUpdated: "Terakhir diperbarui: Mei 2026",
    paymentIntro:
      "Di ZAAV G, kami menawarkan opsi pembayaran yang aman dan nyaman untuk pelanggan di seluruh dunia.\nSemua pembayaran diproses melalui sistem pembayaran tepercaya dan terenkripsi untuk memastikan informasi Anda tetap terlindungi.",
    paymentMethodsIntro:
      "Tergantung pada negara Anda, metode pembayaran yang tersedia dapat mencakup:",
    methodVisa: "Visa",
    methodMastercard: "Mastercard",
    methodApplePay: "Apple Pay",
    methodGooglePay: "Google Pay",
    methodBankTransfer: "Transfer Bank",
    methodLocal: "Opsi Lokal",
    paymentProviders:
      "Pembayaran diproses dengan aman melalui penyedia tepercaya, termasuk <strong>Midtrans</strong>, dan mitra pembayaran bersertifikat lainnya.",
    paymentSecurity:
      "<strong>ZAAV G tidak menyimpan informasi lengkap kartu pembayaran.</strong>\nData keuangan Anda dienkripsi dan ditangani secara eksklusif oleh prosesor pembayaran yang compliant dengan PCI-DSS.",
    paymentHelp:
      "Jika Anda mengalami kesulitan saat checkout atau membutuhkan bantuan dengan pembayaran, silakan hubungi kami dan tim kami akan dengan senang hati membantu.",
    paymentBtnCatalog: "Lihat Katalog",
    paymentBtnHome: "Beranda",
  },
};

/* Vector Payment Method Badges */
function VisaLogo() {
  return (
    <svg className="h-5 w-auto" viewBox="0 0 36 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.882 0.285L9.123 11.598H6.108L3.714 2.484C3.568 1.905 3.429 1.691 2.985 1.442C2.261 1.05 1.059 0.678 0 0.449L0.063 0.285H5.085C5.733 0.285 6.297 0.72 6.444 1.458L7.674 8.085L10.701 0.285H13.882ZM26.012 8.169C26.024 5.052 21.642 4.88 21.672 3.486C21.681 3.063 22.083 2.61 22.986 2.484C23.433 2.421 24.678 2.373 26.088 3.024L26.643 0.435C25.881 0.162 24.897 0 23.664 0C20.739 0 18.669 1.551 18.651 3.738C18.627 5.376 20.109 6.288 21.222 6.831C22.365 7.389 22.752 7.743 22.743 8.241C22.728 9.006 21.822 9.351 20.976 9.366C19.512 9.39 18.663 8.976 17.988 8.664L17.418 11.31C18.219 11.679 19.689 11.994 21.213 12C24.321 12 26.34 10.467 26.012 8.169ZM33.729 0.285H31.395C30.66 0.285 30.102 0.495 29.838 1.131L25.485 11.598H28.65L29.283 9.849H33.153L33.513 11.598H36.3L33.729 0.285ZM30.15 7.425L31.749 3.018L32.664 7.425H30.15ZM18.336 0.285L15.966 11.598H12.948L15.318 0.285H18.336Z" fill="#1434CB"/>
    </svg>
  );
}

function MastercardLogo() {
  return (
    <svg className="h-6 w-auto" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="38" height="24" rx="3" fill="#1A1A1A"/>
      <circle cx="15" cy="12" r="7" fill="#EB001B"/>
      <circle cx="23" cy="12" r="7" fill="#F79E1B"/>
      <path d="M19 6.804A6.98 6.98 0 0 0 16.513 12 6.98 6.98 0 0 0 19 17.196 6.98 6.98 0 0 0 21.487 12 6.98 6.98 0 0 0 19 6.804Z" fill="#FF5F00"/>
    </svg>
  );
}

function ApplePayLogo() {
  return (
    <svg className="h-5 w-auto" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.28 2.65C8.88 1.91 9.29 0.88 9.17 0C8.28 0.04 7.2 0.6 6.56 1.34C5.99 2.01 5.49 3.06 5.64 3.93C6.63 4.01 7.65 3.42 8.28 2.65ZM9.12 4.13C7.68 4.04 6.43 4.95 5.72 4.95C5 4.95 3.96 4.18 2.82 4.2C1.35 4.22 0 5.06 0 7.54C0 9.87 1.54 13.34 2.97 13.34C3.67 13.34 4.18 12.83 5.09 12.83C5.98 12.83 6.44 13.34 7.18 13.34C8.63 13.34 10.02 9.99 10.02 9.92C9.99 9.9 7.74 9.04 7.72 6.47C7.7 4.31 9.42 3.28 9.5 3.23C8.42 1.66 6.78 1.49 6.22 1.45" fill="#1A1A1A"/>
      <text x="13" y="13" fontFamily="sans-serif" fontSize="13" fontWeight="bold" fill="#1A1A1A">Pay</text>
    </svg>
  );
}

function GooglePayLogo() {
  return (
    <img
      src="https://commons.wikimedia.org/wiki/Special:FilePath/Google_Pay_Logo.svg"
      alt="Google Pay"
      className="h-5 w-auto object-contain"
      loading="lazy"
    />
  );
}

function BankTransferLogo() {
  return (
    <svg className="h-6 w-6 stroke-[#1a1a1a]" viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M3 10h18M5 10v7M9 10v7M15 10v7M19 10v7M12 3l9 4H3l9-4z" />
    </svg>
  );
}

function LocalOptionsLogo() {
  return (
    <svg className="h-6 w-6 stroke-[#1a1a1a]" viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9z" />
    </svg>
  );
}

function PaymentMethodsPage() {
  const { lang } = useI18n();
  const t = T[lang as Lang] || T.en;

  const renderFormattedText = (text: string) => {
    return (
      <span
        dangerouslySetInnerHTML={{
          __html: text.replace(/\n/g, "<br />"),
        }}
      />
    );
  };

  const scrollToContent = () => {
    const element = document.getElementById("paymentContent");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PublicShell>
      <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
        {/* Hero Section */}
        <section className="relative z-0 flex h-[60vh] min-h-[350px] md:min-h-[480px] w-full items-center justify-center overflow-hidden">
  {/* Background Layer: Parallax on PC, standard scroll on iPad/mobile */}
  <div 
    className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-scroll xl:[@media(pointer:fine)]:bg-fixed"
    style={{ backgroundImage: `url('/FaqPayment.webp')` }}
  />
          <div className="absolute inset-0 bg-[#0a140f]/75 z-10" />
          <div className="relative z-20 px-5 text-center">
            <h1
              className={`mb-10 font-bold uppercase tracking-[0.15em] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-300 ${
                lang === "ru"
                  ? "text-[clamp(1.5rem,5vw,3.5rem)]"
                  : "text-[clamp(2rem,6vw,4.5rem)]"
              }`}
            >
              {t.paymentTitle}
            </h1>
            <button
              type="button"
              onClick={scrollToContent}
              aria-label="Scroll to content"
              className="mx-auto mt-7 flex h-10 w-10 animate-bounce items-center justify-center rounded-full border-2 border-white/60 transition-all duration-300 hover:border-white hover:translate-y-1"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-none stroke-white stroke-2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        </section>

        {/* Content Section */}
        <div
          id="paymentContent"
          className="mx-auto max-w-[900px] px-6 py-16 md:px-15 md:py-25"
        >
          <div className="mb-12 text-center">
            <p className="text-base md:text-lg leading-[1.9] text-[#555555]">
              {renderFormattedText(t.paymentIntro)}
            </p>
          </div>

          <div className="my-10 rounded-xl bg-[#f9f9f9] p-6 md:p-10 text-center">
            <p className="mb-6 text-base md:text-lg leading-[1.9] text-[#555555]">
              {t.paymentMethodsIntro}
            </p>
            <div className="my-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 justify-items-center">
              {/* Visa */}
              <div className="flex w-full min-w-[120px] flex-col items-center gap-2 rounded-lg border border-[#e5e5e5] bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md">
                <div className="flex h-9 w-14 items-center justify-center rounded bg-[#fcfcfc]">
                  <VisaLogo />
                </div>
                <span className="text-center text-sm font-medium text-[#444444]">
                  {t.methodVisa}
                </span>
              </div>

              {/* Mastercard */}
              <div className="flex w-full min-w-[120px] flex-col items-center gap-2 rounded-lg border border-[#e5e5e5] bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md">
                <div className="flex h-9 w-14 items-center justify-center rounded bg-[#fcfcfc]">
                  <MastercardLogo />
                </div>
                <span className="text-center text-sm font-medium text-[#444444]">
                  {t.methodMastercard}
                </span>
              </div>

              {/* Apple Pay */}
              {/* <div className="flex w-full min-w-[120px] flex-col items-center gap-2 rounded-lg border border-[#e5e5e5] bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md">
                <div className="flex h-9 w-14 items-center justify-center rounded bg-[#fcfcfc]">
                  <ApplePayLogo />
                </div>
                <span className="text-center text-sm font-medium text-[#444444]">
                  {t.methodApplePay}
                </span>
              </div> */}

              {/* Google Pay */}
              {/* <div className="flex w-full min-w-[120px] flex-col items-center gap-2 rounded-lg border border-[#e5e5e5] bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md">
                <div className="flex h-9 w-14 items-center justify-center rounded bg-[#fcfcfc]">
                  <GooglePayLogo />
                </div>
                <span className="text-center text-sm font-medium text-[#444444]">
                  {t.methodGooglePay}
                </span>
              </div> */}

              {/* Bank Transfer */}
              <div className="flex w-full min-w-[120px] flex-col items-center gap-2 rounded-lg border border-[#e5e5e5] bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md">
                <div className="flex h-9 w-14 items-center justify-center rounded bg-[#fcfcfc]">
                  <BankTransferLogo />
                </div>
                <span className="text-center text-sm font-medium text-[#444444]">
                  {t.methodBankTransfer}
                </span>
              </div>

              {/* Local Options */}
              <div className="flex w-full min-w-[120px] flex-col items-center gap-2 rounded-lg border border-[#e5e5e5] bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md">
                <div className="flex h-9 w-14 items-center justify-center rounded bg-[#fcfcfc]">
                  <LocalOptionsLogo />
                </div>
                <span className="text-center text-sm font-medium text-[#444444]">
                  {t.methodLocal}
                </span>
              </div>
            </div>
          </div>

          <div className="mb-12 text-center">
            <p className="mb-6 text-base md:text-lg leading-[1.9] text-[#555555]">
              {renderFormattedText(t.paymentProviders)}
            </p>
            <p className="text-base md:text-lg leading-[1.9] text-[#555555]">
              {renderFormattedText(t.paymentSecurity)}
            </p>
          </div>

          <div className="my-10 rounded-xl bg-[#f9f9f9] p-6 md:p-10 text-center">
            <p className="mb-4 text-base md:text-lg leading-[1.9] text-[#555555]">
              {t.paymentHelp}
            </p>
            <p className="text-base md:text-lg font-semibold text-[#1a1a1a]">
              ✉️{" "}
              <a
                href="mailto:zaavg.bali@gmail.com"
                className="text-[#008060] no-underline hover:underline"
              >
                zaavg.bali@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="py-16 px-6 bg-white flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 ">
          <Link
            to="/collections"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-sans text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 min-w-[220px] bg-[#1a1a1a] text-white border border-white/20 shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:bg-[#0f0f0f] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,0,0,0.4)]"
          >
            {t.paymentBtnCatalog}
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-sans text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 min-w-[220px] bg-transparent text-[#1a1a1a] border-[1.5px] border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white hover:-translate-y-0.5"
          >
            {t.paymentBtnHome}
          </Link>
        </div>
      </div>
    </PublicShell>
  );
}