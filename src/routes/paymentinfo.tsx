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
        <section
          className="relative flex h-[60vh] min-h-[350px] md:min-h-[480px] w-full items-center justify-center overflow-hidden bg-cover bg-center md:bg-fixed"
          style={{
            backgroundImage:
              "url('/FaqPayment.webp')",
          }}
        >
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
            <p className="mb-4 text-base md:text-lg leading-[1.9] text-[#555555]">
              {t.paymentMethodsIntro}
            </p>
            <div className="my-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 justify-items-center">
              <div className="flex w-full min-w-[120px] flex-col items-center gap-2 rounded-lg border border-[#e5e5e5] bg-white p-4">
                <div className="flex h-8 w-12 items-center justify-center rounded bg-[#f5f5f5] text-sm font-semibold text-[#1a1a1a]">
                  VISA
                </div>
                <span className="text-center text-sm text-[#555555]">
                  {t.methodVisa}
                </span>
              </div>
              <div className="flex w-full min-w-[120px] flex-col items-center gap-2 rounded-lg border border-[#e5e5e5] bg-white p-4">
                <div className="flex h-8 w-12 items-center justify-center rounded bg-[#f5f5f5] text-sm font-semibold text-[#1a1a1a]">
                  MC
                </div>
                <span className="text-center text-sm text-[#555555]">
                  {t.methodMastercard}
                </span>
              </div>
              <div className="flex w-full min-w-[120px] flex-col items-center gap-2 rounded-lg border border-[#e5e5e5] bg-white p-4">
                <div className="flex h-8 w-12 items-center justify-center rounded bg-[#f5f5f5] text-sm font-semibold text-[#1a1a1a]">
                  Pay
                </div>
                <span className="text-center text-sm text-[#555555]">
                  {t.methodApplePay}
                </span>
              </div>
              <div className="flex w-full min-w-[120px] flex-col items-center gap-2 rounded-lg border border-[#e5e5e5] bg-white p-4">
                <div className="flex h-8 w-12 items-center justify-center rounded bg-[#f5f5f5] text-sm font-semibold text-[#1a1a1a]">
                  GPay
                </div>
                <span className="text-center text-sm text-[#555555]">
                  {t.methodGooglePay}
                </span>
              </div>
              <div className="flex w-full min-w-[120px] flex-col items-center gap-2 rounded-lg border border-[#e5e5e5] bg-white p-4">
                <div className="flex h-8 w-12 items-center justify-center rounded bg-[#f5f5f5] text-sm font-semibold text-[#1a1a1a]">
                  🏦
                </div>
                <span className="text-center text-sm text-[#555555]">
                  {t.methodBankTransfer}
                </span>
              </div>
              <div className="flex w-full min-w-[120px] flex-col items-center gap-2 rounded-lg border border-[#e5e5e5] bg-white p-4">
                <div className="flex h-8 w-12 items-center justify-center rounded bg-[#f5f5f5] text-sm font-semibold text-[#1a1a1a]">
                  🌍
                </div>
                <span className="text-center text-sm text-[#555555]">
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
              📩{" "}
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
        <div className="py-16 px-6 bg-white flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 border-t border-neutral-100">
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