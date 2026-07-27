import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PublicShell } from "@/components/public-shell";

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
    <PublicShell>
      <div className="relative font-sans text-neutral-900 antialiased bg-[#faf8f5] min-h-screen selection:bg-neutral-900 selection:text-white">
        {/* Immersive Editorial Hero */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center bg-[url('https://cdn.shopify.com/s/files/1/0987/8745/9350/files/IMG_1324.jpg?v=1776287860')] bg-cover bg-center bg-scroll md:bg-fixed overflow-hidden">
          {/* Rich multi-stop gradient overlay for depth and elegance */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>
          
          <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-8">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-white/70 mb-4 font-medium backdrop-blur-md bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
              ZAAV G Secure Checkout
            </span>
            <h1
              className={`font-extrabold text-white tracking-[0.18em] uppercase leading-[1.1] mb-12 drop-shadow-2xl transition-all duration-500 ${
                lang === "ru"
                  ? "text-[clamp(2.2rem,5vw,4rem)]"
                  : "text-[clamp(2.8rem,7vw,5.2rem)]"
              }`}
            >
              {t.paymentTitle}
            </h1>

            <div
              onClick={scrollToContent}
              className="group inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/40 bg-white/5 backdrop-blur-md cursor-pointer transition-all duration-300 hover:border-white hover:bg-white/20 hover:scale-105 shadow-lg mx-auto"
              aria-label="Scroll to content"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none stroke-[2] transition-transform duration-300 group-hover:translate-y-0.5">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </section>

        {/* Main Editorial Body */}
        <div id="paymentContent" className="py-24 px-6 max-w-4xl mx-auto">
          
          {/* Intro Section */}
          <div className="mb-20 text-center max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-neutral-700 font-light leading-relaxed tracking-wide" dangerouslySetInnerHTML={{ __html: t.paymentIntro }} />
            <div className="w-12 h-[1px] bg-neutral-300 mx-auto mt-10"></div>
          </div>

          {/* Content Flow Cards Grid */}
          <div className="space-y-12">
            
            {/* Payment Methods */}
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                {t.paymentMethodsIntro}
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
                <div className="p-6 bg-neutral-50/80 rounded-xl border border-neutral-100 flex flex-col items-center gap-3 transition-all hover:bg-neutral-50 hover:border-emerald-500/30">
                  <div className="w-12 h-8 flex items-center justify-center font-semibold text-xs text-neutral-900 bg-white shadow-sm rounded border border-neutral-200">VISA</div>
                  <span className="text-sm font-medium text-neutral-700 text-center">{t.methodVisa}</span>
                </div>
                <div className="p-6 bg-neutral-50/80 rounded-xl border border-neutral-100 flex flex-col items-center gap-3 transition-all hover:bg-neutral-50 hover:border-emerald-500/30">
                  <div className="w-12 h-8 flex items-center justify-center font-semibold text-xs text-neutral-900 bg-white shadow-sm rounded border border-neutral-200">MC</div>
                  <span className="text-sm font-medium text-neutral-700 text-center">{t.methodMastercard}</span>
                </div>
                <div className="p-6 bg-neutral-50/80 rounded-xl border border-neutral-100 flex flex-col items-center gap-3 transition-all hover:bg-neutral-50 hover:border-emerald-500/30">
                  <div className="w-12 h-8 flex items-center justify-center font-semibold text-xs text-neutral-900 bg-white shadow-sm rounded border border-neutral-200">Pay</div>
                  <span className="text-sm font-medium text-neutral-700 text-center">{t.methodApplePay}</span>
                </div>
                <div className="p-6 bg-neutral-50/80 rounded-xl border border-neutral-100 flex flex-col items-center gap-3 transition-all hover:bg-neutral-50 hover:border-emerald-500/30">
                  <div className="w-12 h-8 flex items-center justify-center font-semibold text-xs text-neutral-900 bg-white shadow-sm rounded border border-neutral-200">GPay</div>
                  <span className="text-sm font-medium text-neutral-700 text-center">{t.methodGooglePay}</span>
                </div>
                <div className="p-6 bg-neutral-50/80 rounded-xl border border-neutral-100 flex flex-col items-center gap-3 transition-all hover:bg-neutral-50 hover:border-emerald-500/30">
                  <div className="w-12 h-8 flex items-center justify-center text-lg bg-white shadow-sm rounded border border-neutral-200">🏦</div>
                  <span className="text-sm font-medium text-neutral-700 text-center">{t.methodBankTransfer}</span>
                </div>
                <div className="p-6 bg-neutral-50/80 rounded-xl border border-neutral-100 flex flex-col items-center gap-3 transition-all hover:bg-neutral-50 hover:border-emerald-500/30">
                  <div className="w-12 h-8 flex items-center justify-center text-lg bg-white shadow-sm rounded border border-neutral-200">🌍</div>
                  <span className="text-sm font-medium text-neutral-700 text-center">{t.methodLocal}</span>
                </div>
              </div>
            </div>

            {/* Payment Providers */}
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                Secure Processors
              </h2>
              <p className="text-neutral-600 text-base md:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t.paymentProviders }} />
            </div>

            {/* Payment Security (Highlighted Card) */}
            <div className="bg-emerald-950 text-white p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-emerald-900/30 rounded-full blur-3xl pointer-events-none"></div>
              <h2 className="text-2xl font-semibold text-white mb-6 tracking-tight flex items-center gap-3 relative z-10">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Data Protection & Security
              </h2>
              <p className="text-emerald-100/90 text-base md:text-lg leading-relaxed relative z-10" dangerouslySetInnerHTML={{ __html: t.paymentSecurity }} />
            </div>

            {/* Contact / Help Card */}
            <div className="bg-neutral-900 text-white p-8 md:p-12 rounded-2xl shadow-xl text-center relative overflow-hidden">
              <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">Need Assistance?</h2>
              <p className="text-neutral-400 text-base md:text-lg mb-8">{t.paymentHelp}</p>
              <div className="text-lg md:text-xl font-medium tracking-wide space-y-3">
                <span className="block text-white font-semibold text-2xl tracking-widest mb-4">ZAAV G</span>
                <div className="flex items-center justify-center gap-2">
                  <span>📩</span>
                  <a href="mailto:zaavg.bali@gmail.com" className="text-emerald-400 hover:underline transition-colors">zaavg.bali@gmail.com</a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Action Buttons Block (Mobile Optimized) */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 py-[60px] px-6 sm:px-10 bg-white md:flex-col md:py-10">
          <Link
            to="/collections"
            className="inline-flex items-center justify-center w-full md:w-auto px-6 sm:px-10 py-4 font-sans text-sm sm:text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 min-w-[220px] max-w-[320px] md:max-w-none bg-[#1a1a1a] text-white border border-white/20 shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:bg-[#0f0f0f] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,0,0,0.4)]"
          >
            {t.paymentBtnCatalog}
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full md:w-auto px-6 sm:px-10 py-4 font-sans text-sm sm:text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 min-w-[220px] max-w-[320px] md:max-w-none bg-transparent text-[#1a1a1a] border-[1.5px] border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white hover:-translate-y-0.5"
          >
            {t.paymentBtnHome}
          </Link>
        </div>
      </div>
    </PublicShell>
  );
}