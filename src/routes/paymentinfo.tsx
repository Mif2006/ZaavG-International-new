import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/paymentinfo")({
  head: () => ({
    meta: [
      { title: "Payment Methods — ZAAV G" },
      {
        name: "description",
        content: "Secure and convenient payment options for customers worldwide.",
      },
      { property: "og:title", content: "Payment Methods — ZAAV G" },
      { property: "og:description", content: "Secure and convenient payment options for customers worldwide." },
    ],
  }),
  component: PaymentPage,
});

type Lang = "en" | "ru" | "id";

const T: Record<
  Lang,
  {
    paymentTitle: string;
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
    paymentIntro:
      "At ZAAV G, we offer secure and convenient payment options for customers worldwide.<br>All payments are processed through trusted and encrypted payment systems to ensure your information remains protected.",
    paymentMethodsIntro: "Depending on your country, available payment methods may include:",
    methodVisa: "Visa",
    methodMastercard: "Mastercard",
    methodApplePay: "Apple Pay",
    methodGooglePay: "Google Pay",
    methodBankTransfer: "Bank Transfer",
    methodLocal: "Local Options",
    paymentProviders:
      "Payments are securely processed through trusted providers, including <strong>Shopify Payments</strong>, <strong>Xendit</strong>, and other certified payment partners.",
    paymentSecurity:
      "<strong>ZAAV G does not store full payment card information.</strong><br>Your financial data is encrypted and handled exclusively by PCI-DSS compliant payment processors.",
    paymentHelp:
      "If you experience any difficulties during checkout or need assistance with payment, please contact us and our team will be happy to help.",
    paymentBtnCatalog: "View Collections",
    paymentBtnHome: "Home",
  },
  ru: {
    paymentTitle: "СПОСОБЫ ОПЛАТЫ",
    paymentIntro:
      "В ZAAV G мы предлагаем безопасные и удобные варианты оплаты для клиентов по всему миру.<br>Все платежи обрабатываются через надежные и зашифрованные платежные системы для защиты вашей информации.",
    paymentMethodsIntro: "В зависимости от вашей страны, доступные способы оплаты могут включать:",
    methodVisa: "Visa",
    methodMastercard: "Mastercard",
    methodApplePay: "Apple Pay",
    methodGooglePay: "Google Pay",
    methodBankTransfer: "Банковский перевод",
    methodLocal: "Локальные способы",
    paymentProviders:
      "Платежи безопасно обрабатываются через надежных провайдеров, включая <strong>Shopify Payments</strong>, <strong>Xendit</strong> и других сертифицированных платежных партнеров.",
    paymentSecurity:
      "<strong>ZAAV G не хранит полную информацию о платежных картах.</strong><br>Ваши финансовые данные шифруются и обрабатываются исключительно платежными процессорами, соответствующими стандарту PCI-DSS.",
    paymentHelp:
      "Если у вас возникли трудности при оформлении заказа или нужна помощь с оплатой, пожалуйста, свяжитесь с нами — наша команда будет рада помочь.",
    paymentBtnCatalog: "Смотреть коллекции",
    paymentBtnHome: "На главную",
  },
  id: {
    paymentTitle: "METODE PEMBAYARAN",
    paymentIntro:
      "Di ZAAV G, kami menawarkan opsi pembayaran yang aman dan nyaman untuk pelanggan di seluruh dunia.<br>Semua pembayaran diproses melalui sistem pembayaran tepercaya dan terenkripsi untuk memastikan informasi Anda tetap terlindungi.",
    paymentMethodsIntro: "Tergantung pada negara Anda, metode pembayaran yang tersedia dapat mencakup:",
    methodVisa: "Visa",
    methodMastercard: "Mastercard",
    methodApplePay: "Apple Pay",
    methodGooglePay: "Google Pay",
    methodBankTransfer: "Transfer Bank",
    methodLocal: "Opsi Lokal",
    paymentProviders:
      "Pembayaran diproses dengan aman melalui penyedia tepercaya, termasuk <strong>Shopify Payments</strong>, <strong>Xendit</strong>, dan mitra pembayaran bersertifikat lainnya.",
    paymentSecurity:
      "<strong>ZAAV G tidak menyimpan informasi lengkap kartu pembayaran.</strong><br>Data keuangan Anda dienkripsi dan ditangani secara eksklusif oleh prosesor pembayaran yang compliant dengan PCI-DSS.",
    paymentHelp:
      "Jika Anda mengalami kesulitan saat checkout atau membutuhkan bantuan dengan pembayaran, silakan hubungi kami dan tim kami akan dengan senang hati membantu.",
    paymentBtnCatalog: "Lihat Katalog",
    paymentBtnHome: "Beranda",
  },
};

function PaymentPage() {
  const { lang } = useI18n();
  const t = T[lang as Lang] || T.en;

  const scrollToContent = () => {
    const el = document.getElementById("paymentContent");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative font-sans text-[#1a1a1a] leading-relaxed bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[450px] md:min-h-[350px] sm:min-h-[300px] flex items-center justify-center bg-[url('https://cdn.shopify.com/s/files/1/0987/8745/9350/files/IMG_1324.jpg?v=1776287860')] bg-cover bg-center bg-fixed md:bg-scroll overflow-hidden">
        <div className="absolute inset-0 bg-[rgba(10,20,15,0.75)] z-10"></div>
        <div className="relative z-20 text-center px-5">
          <h1
            className={`font-bold text-white tracking-[0.15em] uppercase leading-[1.2] mb-10 [text-shadow:0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-300 ${
              lang === "ru"
                ? "text-[clamp(2rem,5vw,3.5rem)] md:text-[clamp(1.5rem,5vw,2.2rem)]"
                : "text-[clamp(2.5rem,6vw,4.5rem)] md:text-[clamp(2rem,6vw,3.0rem)]"
            }`}
          >
            {t.paymentTitle}
          </h1>
          <div
            className="w-10 h-10 border-2 border-white/60 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 animate-bounce mx-auto mt-[30px] hover:border-white hover:translate-y-1"
            onClick={scrollToContent}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none stroke-[2]">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div id="paymentContent" className="py-[100px] px-[60px] max-w-[900px] mx-auto lg:py-20 lg:px-10 md:py-[60px] md:px-6 sm:py-[50px] sm:px-5">
        <div className="mb-[50px]">
          <p className="text-[1.10rem] text-[#555555] leading-[1.9] mb-6 text-center md:text-base sm:text-[0.95rem]" dangerouslySetInnerHTML={{ __html: t.paymentIntro }} />
        </div>

        <div className="mb-[50px] bg-[#f9f9f9] p-10 rounded-xl my-10 lg:p-8 md:p-6 md:my-[30px]">
          <p className="text-[1.10rem] text-[#555555] leading-[1.9] mb-4 text-center md:text-base sm:text-[0.95rem]">{t.paymentMethodsIntro}</p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4 my-[30px] justify-items-center md:grid-cols-2 md:gap-3">
            <div className="flex flex-col items-center gap-2 p-4 bg-white border border-[#e5e5e5] rounded-lg min-w-[120px]">
              <div className="w-12 h-8 flex items-center justify-center font-semibold text-[0.85rem] text-[#1a1a1a] bg-[#f5f5f5] rounded">VISA</div>
              <span className="text-[0.9rem] text-[#555555] text-center">{t.methodVisa}</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white border border-[#e5e5e5] rounded-lg min-w-[120px]">
              <div className="w-12 h-8 flex items-center justify-center font-semibold text-[0.85rem] text-[#1a1a1a] bg-[#f5f5f5] rounded">MC</div>
              <span className="text-[0.9rem] text-[#555555] text-center">{t.methodMastercard}</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white border border-[#e5e5e5] rounded-lg min-w-[120px]">
              <div className="w-12 h-8 flex items-center justify-center font-semibold text-[0.85rem] text-[#1a1a1a] bg-[#f5f5f5] rounded">Pay</div>
              <span className="text-[0.9rem] text-[#555555] text-center">{t.methodApplePay}</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white border border-[#e5e5e5] rounded-lg min-w-[120px]">
              <div className="w-12 h-8 flex items-center justify-center font-semibold text-[0.85rem] text-[#1a1a1a] bg-[#f5f5f5] rounded">GPay</div>
              <span className="text-[0.9rem] text-[#555555] text-center">{t.methodGooglePay}</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white border border-[#e5e5e5] rounded-lg min-w-[120px]">
              <div className="w-12 h-8 flex items-center justify-center font-semibold text-[0.85rem] text-[#1a1a1a] bg-[#f5f5f5] rounded">🏦</div>
              <span className="text-[0.9rem] text-[#555555] text-center">{t.methodBankTransfer}</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white border border-[#e5e5e5] rounded-lg min-w-[120px]">
              <div className="w-12 h-8 flex items-center justify-center font-semibold text-[0.85rem] text-[#1a1a1a] bg-[#f5f5f5] rounded">🌍</div>
              <span className="text-[0.9rem] text-[#555555] text-center">{t.methodLocal}</span>
            </div>
          </div>
        </div>

        <div className="mb-[50px]">
          <p className="text-[1.10rem] text-[#555555] leading-[1.9] mb-6 text-center md:text-base sm:text-[0.95rem]" dangerouslySetInnerHTML={{ __html: t.paymentProviders }} />
          <p className="text-[1.10rem] text-[#555555] leading-[1.9] mb-6 text-center md:text-base sm:text-[0.95rem]" dangerouslySetInnerHTML={{ __html: t.paymentSecurity }} />
        </div>

        <div className="mb-[50px] bg-[#f9f9f9] p-10 rounded-xl my-10 lg:p-8 md:p-6 md:my-[30px]">
          <p className="text-[1.10rem] text-[#555555] leading-[1.9] mb-4 text-center md:text-base sm:text-[0.95rem]">{t.paymentHelp}</p>
          <p className="text-[1.10rem] text-[#555555] leading-[1.9] text-center font-semibold text-[#1a1a1a] md:text-base sm:text-[0.95rem]">
            📩 <a href="mailto:zaavg.bali@gmail.com" className="text-[#008060] no-underline hover:underline">zaavg.bali@gmail.com</a>
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-6 py-[60px] px-10 bg-white md:flex-col md:gap-4 md:py-10 md:px-6">
        <a
          href="/collections/all"
          className="inline-flex items-center justify-center px-10 py-4 font-sans text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 min-w-[220px] bg-[#1a1a1a] text-white border border-white/25 shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:bg-[#0f0f0f] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,0,0,0.4)] md:w-full md:max-w-[300px]"
        >
          {t.paymentBtnCatalog}
        </a>
        <a
          href="/"
          className="inline-flex items-center justify-center px-10 py-4 font-sans text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 min-w-[220px] bg-transparent text-[#1a1a1a] border-[1.5px] border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white hover:-translate-y-0.5 md:w-full md:max-w-[300px]"
        >
          {t.paymentBtnHome}
        </a>
      </div>
    </div>
  );
}