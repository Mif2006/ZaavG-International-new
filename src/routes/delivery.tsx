import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PublicShell } from "@/components/public-shell";

export const Route = createFileRoute("/delivery")({
  head: () => ({
    meta: [
      { title: "Delivery & Shipping — ZAAV G" },
      {
        name: "description",
        content: "Information about delivery, shipping times, processing, and customs for ZAAV G worldwide shipping.",
      },
      { property: "og:title", content: "Delivery & Shipping — ZAAV G" },
      { property: "og:description", content: "Information about delivery, shipping times, processing, and customs for ZAAV G worldwide shipping." },
    ],
  }),
  component: DeliveryPage,
});

type Lang = "en" | "ru" | "id";

const T: Record<
  Lang,
  {
    deliveryTitle: string;
    deliveryIntro: string;
    processingTitle: string;
    processingText1: string;
    processingText2: string;
    processingText3: string;
    shippingTitle: string;
    shippingIntro: string;
    shippingRegions: string;
    regionAsia: string;
    timeAsia: string;
    regionEurope: string;
    timeEurope: string;
    regionUSCA: string;
    timeUSCA: string;
    regionOther: string;
    timeOther: string;
    shippingNote: string;
    providersTitle: string;
    providersText1: string;
    providersText2: string;
    customsTitle: string;
    customsText1: string;
    customsText2: string;
    customsText3: string;
    packagingTitle: string;
    packagingText: string;
    incorrectInfoTitle: string;
    incorrectInfoText: string;
    lostTitle: string;
    lostText1: string;
    lostText2: string;
    damagedTitle: string;
    damagedIntro: string;
    damagedStep1: string;
    damagedStep2: string;
    damagedNote: string;
    contactTitle: string;
    contactIntro: string;
    deliveryBtnCatalog: string;
    deliveryBtnHome: string;
    worldwideBadge: string;
  }
> = {
  en: {
    deliveryTitle: "DELIVERY & SHIPPING",
    deliveryIntro:
      "At ZAAV G, every piece is carefully prepared and shipped from Bali with attention, care, and respect for the craftsmanship behind it.<br>We currently offer worldwide shipping.",
    processingTitle: "Processing Time",
    processingText1: "Most orders are processed within 1–5 business days",
    processingText2:
      "For handmade, custom-made, or made-to-order jewelry, processing times may vary depending on the complexity of the design",
    processingText3: "If additional production time is required, we will contact you directly",
    shippingTitle: "Shipping Time",
    shippingIntro: "Estimated delivery times depend on the destination country and shipping provider.",
    shippingRegions: "International delivery may take approximately:",
    regionAsia: "Asia",
    timeAsia: "3–10 business days",
    regionEurope: "Europe",
    timeEurope: "5–14 business days",
    regionUSCA: "USA & Canada",
    timeUSCA: "5–14 business days",
    regionOther: "Other countries",
    timeOther: "7–21 business days",
    shippingNote:
      "Please note that shipping times are estimates and may occasionally be affected by customs processing, holidays, weather conditions, or carrier delays.",
    providersTitle: "Shipping Providers",
    providersText1:
      "We work with trusted international shipping partners, including <strong>FedEx</strong>, <strong>DHL</strong>, <strong>EMS</strong>, <strong>POS Indonesia</strong>, and other reliable carriers depending on the destination country.",
    providersText2: "Tracking information will be provided once your order has been shipped.",
    customsTitle: "Customs & Import Duties",
    customsText1:
      "International orders may be subject to customs duties, taxes, or import fees depending on your country's regulations",
    customsText2: "These charges are the responsibility of the customer",
    customsText3: "ZAAV G is not responsible for delays caused by customs clearance procedures",
    packagingTitle: "Packaging",
    packagingText:
      "Every ZAAV G piece is carefully packaged to ensure it arrives safely and beautifully.<br>We pay special attention to the details, so each order feels meaningful from the moment it is opened.",
    incorrectInfoTitle: "Incorrect Shipping Information",
    incorrectInfoText:
      "Please make sure your shipping details are accurate before placing an order.<br>ZAAV G is not responsible for packages delayed, lost, or returned due to incorrect or incomplete shipping information provided by the customer.",
    lostTitle: "Lost or Delayed Packages",
    lostText1:
      "If your package is significantly delayed or appears lost, please contact us and we will do our best to assist you",
    lostText2:
      "Once an order has been transferred to the shipping carrier, delivery responsibility may partially depend on the carrier's operations and policies",
    damagedTitle: "Damaged Packages",
    damagedIntro: "If your package arrives visibly damaged, please:",
    damagedStep1: "Take photos before opening the package",
    damagedStep2: "Contact us immediately after delivery",
    damagedNote: "This helps us resolve the issue with the shipping provider as quickly as possible.",
    contactTitle: "Contact Us",
    contactIntro: "For any shipping or delivery questions, please contact us:",
    deliveryBtnCatalog: "View Collections",
    deliveryBtnHome: "Home",
    worldwideBadge: "ZAAV G Worldwide",
  },
  ru: {
    deliveryTitle: "ДОСТАВКА",
    deliveryIntro:
      "В ZAAV G каждое изделие тщательно готовится и отправляется с Бали с вниманием, заботой и уважением к мастерству, стоящему за ним.<br>Мы осуществляем доставку по всему миру.",
    processingTitle: "Время обработки",
    processingText1: "Большинство заказов обрабатываются в течение 1–5 рабочих дней",
    processingText2:
      "Для украшений ручной работы, изготовленных на заказ или под заказ, сроки обработки могут варьироваться в зависимости от сложности дизайна",
    processingText3: "Если требуется дополнительное время на производство, мы свяжемся с вами напрямую",
    shippingTitle: "Сроки доставки",
    shippingIntro: "Расчетное время доставки зависит от страны назначения и службы доставки.",
    shippingRegions: "Международная доставка может занять примерно:",
    regionAsia: "Азия",
    timeAsia: "3–10 рабочих дней",
    regionEurope: "Европа",
    timeEurope: "5–14 рабочих дней",
    regionUSCA: "США и Канада",
    timeUSCA: "5–14 рабочих дней",
    regionOther: "Другие страны",
    timeOther: "7–21 рабочий день",
    shippingNote:
      "Обратите внимание, что сроки доставки являются ориентировочными и могут иногда зависеть от таможенной обработки, праздников, погодных условий или задержек перевозчика.",
    providersTitle: "Службы доставки",
    providersText1:
      "Мы сотрудничаем с надежными международными партнерами по доставке, включая <strong>FedEx</strong>, <strong>DHL</strong>, <strong>EMS</strong>, <strong>POS Indonesia</strong> и других надежных перевозчиков в зависимости от страны назначения.",
    providersText2: "Информация для отслеживания будет предоставлена после отправки вашего заказа.",
    customsTitle: "Таможня и импортные пошлины",
    customsText1:
      "Международные заказы могут облагаться таможенными пошлинами, налогами или импортными сборами в зависимости от правил вашей страны",
    customsText2: "Эти расходы несет клиент",
    customsText3: "ZAAV G не несет ответственности за задержки, вызванные процедурами таможенного оформления",
    packagingTitle: "Упаковка",
    packagingText:
      "Каждое изделие ZAAV G тщательно упаковывается, чтобы гарантировать его безопасную и красивую доставку.<br>Мы уделяем особое внимание деталям, чтобы каждый заказ вызывал приятные эмоции с момента открытия.",
    incorrectInfoTitle: "Неверная информация о доставке",
    incorrectInfoText:
      "Пожалуйста, убедитесь, что ваши данные доставки точны перед оформлением заказа.<br>ZAAV G не несет ответственности за посылки, задержанные, утерянные или возвращенные из-за неверной или неполной информации о доставке, предоставленной клиентом.",
    lostTitle: "Утерянные или задержанные посылки",
    lostText1:
      "Если ваша посылка значительно задерживается или кажется утерянной, пожалуйста, свяжитесь с нами, и мы сделаем все возможное, чтобы помочь вам",
    lostText2:
      "После передачи заказа службе доставки ответственность за доставку может частично зависеть от операций и политик перевозчика",
    damagedTitle: "Поврежденные посылки",
    damagedIntro: "Если ваша посылка прибыла с видимыми повреждениями, пожалуйста:",
    damagedStep1: "Сделайте фотографии перед открытием упаковки",
    damagedStep2: "Свяжитесь с нами сразу после доставки",
    damagedNote: "Это поможет нам как можно быстрее решить вопрос с поставщиком услуг доставки.",
    contactTitle: "Связаться с нами",
    contactIntro: "По любым вопросам доставки, пожалуйста, свяжитесь с нами:",
    deliveryBtnCatalog: "Смотреть коллекции",
    deliveryBtnHome: "На главную",
    worldwideBadge: "ZAAV G по всему миру",
  },
  id: {
    deliveryTitle: "PENGIRIMAN",
    deliveryIntro:
      "Di ZAAV G, setiap pieces disiapkan dan dikirim dengan hati-hati dari Bali dengan perhatian, kepedulian, dan penghargaan terhadap keahlian di baliknya.<br>Kami saat ini menawarkan pengiriman ke seluruh dunia.",
    processingTitle: "Waktu Pemrosesan",
    processingText1: "Sebagian besar pesanan diproses dalam waktu 1–5 hari kerja",
    processingText2:
      "Untuk perhiasan handmade, custom-made, atau made-to-order, waktu pemrosesan dapat bervariasi tergantung pada kompleksitas desain",
    processingText3: "Jika diperlukan waktu produksi tambahan, kami akan menghubungi Anda langsung",
    shippingTitle: "Waktu Pengiriman",
    shippingIntro: "Perkiraan waktu pengiriman tergantung pada negara tujuan dan penyedia pengiriman.",
    shippingRegions: "Pengiriman internasional dapat memakan waktu sekitar:",
    regionAsia: "Asia",
    timeAsia: "3–10 hari kerja",
    regionEurope: "Eropa",
    timeEurope: "5–14 hari kerja",
    regionUSCA: "AS & Kanada",
    timeUSCA: "5–14 hari kerja",
    regionOther: "Negara lain",
    timeOther: "7–21 hari kerja",
    shippingNote:
      "Harap dicatat bahwa waktu pengiriman adalah perkiraan dan terkadang dapat dipengaruhi oleh proses bea cukai, hari libur, kondisi cuaca, atau keterlambatan carrier.",
    providersTitle: "Penyedia Pengiriman",
    providersText1:
      "Kami bekerja dengan mitra pengiriman internasional tepercaya, termasuk <strong>FedEx</strong>, <strong>DHL</strong>, <strong>EMS</strong>, <strong>POS Indonesia</strong>, dan carrier terpercaya lainnya tergantung pada negara tujuan.",
    providersText2: "Informasi pelacakan akan diberikan setelah pesanan Anda dikirim.",
    customsTitle: "Bea Cukai & Biaya Impor",
    customsText1:
      "Pesanan internasional mungkin dikenakan bea cukai, pajak, atau biaya impor tergantung pada peraturan negara Anda",
    customsText2: "Biaya ini menjadi tanggung jawab pelanggan",
    customsText3: "ZAAV G tidak bertanggung jawab atas keterlambatan yang disebabkan oleh prosedur clearance bea cukai",
    packagingTitle: "Pengemasan",
    packagingText:
      "Setiap pieces ZAAV G dikemas dengan hati-hati untuk memastikan tiba dengan aman dan indah.<br>Kami memperhatikan detail khusus, sehingga setiap pesanan terasa bermakna sejak pertama kali dibuka.",
    incorrectInfoTitle: "Informasi Pengiriman yang Salah",
    incorrectInfoText:
      "Pastikan detail pengiriman Anda akurat sebelum melakukan pemesanan.<br>ZAAV G tidak bertanggung jawab atas paket yang tertunda, hilang, atau dikembalikan karena informasi pengiriman yang salah atau tidak lengkap yang diberikan oleh pelanggan.",
    lostTitle: "Paket Hilang atau Tertunda",
    lostText1:
      "Jika paket Anda tertunda secara signifikan atau tampak hilang, silakan hubungi kami dan kami akan melakukan yang terbaik untuk membantu Anda",
    lostText2:
      "Setelah pesanan ditransfer ke carrier pengiriman, tanggung jawab pengiriman dapat sebagian bergantung pada operasi dan kebijakan carrier",
    damagedTitle: "Paket Rusak",
    damagedIntro: "Jika paket Anda tiba dengan kerusakan yang terlihat, silakan:",
    damagedStep1: "Ambil foto sebelum membuka paket",
    damagedStep2: "Hubungi kami segera setelah pengiriman",
    damagedNote: "Ini membantu kami menyelesaikan masalah dengan penyedia pengiriman secepat mungkin.",
    contactTitle: "Hubungi Kami",
    contactIntro: "Untuk pertanyaan pengiriman atau pengiriman, silakan hubungi kami:",
    deliveryBtnCatalog: "Lihat Katalog",
    deliveryBtnHome: "Beranda",
    worldwideBadge: "ZAAV G Seluruh Dunia",
  },
};

function DeliveryPage() {
  const { lang } = useI18n();
  const t = T[lang as Lang] || T.en;

  const scrollToContent = () => {
    const el = document.getElementById("deliveryContent");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PublicShell>
      <div className="relative font-sans text-neutral-900 antialiased bg-[#faf8f5] min-h-screen selection:bg-neutral-900 selection:text-white">
        {/* Immersive Editorial Hero */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center bg-[url('/FaqDelivery.webp')] bg-cover bg-center bg-scroll md:bg-fixed overflow-hidden">
          {/* Rich multi-stop gradient overlay for depth and elegance */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>
          
          <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-8">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-white/70 mb-4 font-medium backdrop-blur-md bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
              {t.worldwideBadge}
            </span>
            <h1
              className={`font-extrabold text-white tracking-[0.18em] uppercase leading-[1.1] mb-12 drop-shadow-2xl transition-all duration-500 ${
                lang === "ru"
                  ? "text-[clamp(2.2rem,5vw,4rem)]"
                  : "text-[clamp(2.8rem,7vw,5.2rem)]"
              }`}
            >
              {t.deliveryTitle}
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
        <div id="deliveryContent" className="py-24 px-6 max-w-4xl mx-auto">
          
          {/* Intro Section */}
          <div className="mb-20 text-center max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-neutral-700 font-light leading-relaxed tracking-wide" dangerouslySetInnerHTML={{ __html: t.deliveryIntro }} />
            <div className="w-12 h-[1px] bg-neutral-300 mx-auto mt-10"></div>
          </div>

          {/* Content Flow Cards Grid */}
          <div className="space-y-12">
            
            {/* Processing Time */}
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                {t.processingTitle}
              </h2>
              <ul className="space-y-4 text-neutral-600">
                <li className="flex items-start gap-4 text-base md:text-lg leading-relaxed">
                  <span className="text-emerald-600 font-bold mt-0.5">—</span>
                  <span>{t.processingText1}</span>
                </li>
                <li className="flex items-start gap-4 text-base md:text-lg leading-relaxed">
                  <span className="text-emerald-600 font-bold mt-0.5">—</span>
                  <span>{t.processingText2}</span>
                </li>
                <li className="flex items-start gap-4 text-base md:text-lg leading-relaxed">
                  <span className="text-emerald-600 font-bold mt-0.5">—</span>
                  <span>{t.processingText3}</span>
                </li>
              </ul>
            </div>

            {/* Shipping Time & Regions */}
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4 tracking-tight flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                {t.shippingTitle}
              </h2>
              <p className="text-neutral-600 text-base md:text-lg mb-2 leading-relaxed">{t.shippingIntro}</p>
              <p className="text-neutral-500 text-sm md:text-base mb-8">{t.shippingRegions}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-6 bg-neutral-50/80 rounded-xl border border-neutral-100 transition-all hover:bg-neutral-50 hover:border-emerald-500/30">
                  <div className="font-semibold text-neutral-900 text-lg mb-1">{t.regionAsia}</div>
                  <div className="text-emerald-700 font-medium text-sm tracking-wide">{t.timeAsia}</div>
                </div>
                <div className="p-6 bg-neutral-50/80 rounded-xl border border-neutral-100 transition-all hover:bg-neutral-50 hover:border-emerald-500/30">
                  <div className="font-semibold text-neutral-900 text-lg mb-1">{t.regionEurope}</div>
                  <div className="text-emerald-700 font-medium text-sm tracking-wide">{t.timeEurope}</div>
                </div>
                <div className="p-6 bg-neutral-50/80 rounded-xl border border-neutral-100 transition-all hover:bg-neutral-50 hover:border-emerald-500/30">
                  <div className="font-semibold text-neutral-900 text-lg mb-1">{t.regionUSCA}</div>
                  <div className="text-emerald-700 font-medium text-sm tracking-wide">{t.timeUSCA}</div>
                </div>
                <div className="p-6 bg-neutral-50/80 rounded-xl border border-neutral-100 transition-all hover:bg-neutral-50 hover:border-emerald-500/30">
                  <div className="font-semibold text-neutral-900 text-lg mb-1">{t.regionOther}</div>
                  <div className="text-emerald-700 font-medium text-sm tracking-wide">{t.timeOther}</div>
                </div>
              </div>
              
              <p className="text-xs md:text-sm text-neutral-400 italic leading-relaxed">{t.shippingNote}</p>
            </div>

            {/* Shipping Providers */}
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                {t.providersTitle}
              </h2>
              <p className="text-neutral-600 text-base md:text-lg mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.providersText1 }} />
              <p className="text-neutral-500 text-base leading-relaxed">{t.providersText2}</p>
            </div>

            {/* Customs & Import Duties (Highlighted Card) */}
            <div className="bg-emerald-950 text-white p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-emerald-900/30 rounded-full blur-3xl pointer-events-none"></div>
              <h2 className="text-2xl font-semibold text-white mb-6 tracking-tight flex items-center gap-3 relative z-10">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                {t.customsTitle}
              </h2>
              <ul className="space-y-4 text-emerald-100/90 relative z-10">
                <li className="flex items-start gap-4 text-base md:text-lg leading-relaxed">
                  <span className="text-emerald-400 font-bold mt-0.5">—</span>
                  <span>{t.customsText1}</span>
                </li>
                <li className="flex items-start gap-4 text-base md:text-lg leading-relaxed">
                  <span className="text-emerald-400 font-bold mt-0.5">—</span>
                  <span>{t.customsText2}</span>
                </li>
                <li className="flex items-start gap-4 text-base md:text-lg leading-relaxed">
                  <span className="text-emerald-400 font-bold mt-0.5">—</span>
                  <span>{t.customsText3}</span>
                </li>
              </ul>
            </div>

            {/* Packaging */}
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                {t.packagingTitle}
              </h2>
              <p className="text-neutral-600 text-base md:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t.packagingText }} />
            </div>

            {/* Incorrect Shipping Information */}
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                {t.incorrectInfoTitle}
              </h2>
              <p className="text-neutral-600 text-base md:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t.incorrectInfoText }} />
            </div>

            {/* Lost or Delayed Packages */}
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                {t.lostTitle}
              </h2>
              <ul className="space-y-4 text-neutral-600">
                <li className="flex items-start gap-4 text-base md:text-lg leading-relaxed">
                  <span className="text-emerald-600 font-bold mt-0.5">—</span>
                  <span>{t.lostText1}</span>
                </li>
                <li className="flex items-start gap-4 text-base md:text-lg leading-relaxed">
                  <span className="text-emerald-600 font-bold mt-0.5">—</span>
                  <span>{t.lostText2}</span>
                </li>
              </ul>
            </div>

            {/* Damaged Packages */}
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                {t.damagedTitle}
              </h2>
              <p className="text-neutral-600 text-base md:text-lg mb-6 leading-relaxed">{t.damagedIntro}</p>
              <ul className="space-y-4 text-neutral-600 mb-6">
                <li className="flex items-start gap-4 text-base md:text-lg leading-relaxed">
                  <span className="text-emerald-600 font-bold mt-0.5">—</span>
                  <span>{t.damagedStep1}</span>
                </li>
                <li className="flex items-start gap-4 text-base md:text-lg leading-relaxed">
                  <span className="text-emerald-600 font-bold mt-0.5">—</span>
                  <span>{t.damagedStep2}</span>
                </li>
              </ul>
              <p className="text-neutral-500 text-sm md:text-base italic leading-relaxed">{t.damagedNote}</p>
            </div>

            {/* Contact Card */}
            <div className="bg-neutral-900 text-white p-8 md:p-12 rounded-2xl shadow-xl text-center relative overflow-hidden">
              <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">{t.contactTitle}</h2>
              <p className="text-neutral-400 text-base md:text-lg mb-8">{t.contactIntro}</p>
              <div className="text-lg md:text-xl font-medium tracking-wide space-y-3">
                <span className="block text-white font-semibold text-2xl tracking-widest mb-4">ZAAV G</span>
                <div className="flex items-center justify-center gap-2">
                  <span>📩</span>
                  <a href="mailto:zaavg.bali@gmail.com" className="text-emerald-400 hover:underline transition-colors">zaavg.bali@gmail.com</a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>🌐</span>
                  <a href="https://zaavgbali.com" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline transition-colors">zaavgbali.com</a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Original Action Buttons Block */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 py-12 px-6 sm:px-10 bg-white">
          <Link
            to="/collections"
            className="inline-flex items-center justify-center w-full sm:w-auto sm:min-w-[220px] px-8 py-3.5 sm:px-10 sm:py-4 font-sans text-sm sm:text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 bg-[#1a1a1a] text-white border border-white/20 shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:bg-[#0f0f0f] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,0,0,0.4)]"
          >
            {t.deliveryBtnCatalog}
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full sm:w-auto sm:min-w-[220px] px-8 py-3.5 sm:px-10 sm:py-4 font-sans text-sm sm:text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 bg-transparent text-[#1a1a1a] border-[1.5px] border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white hover:-translate-y-0.5"
          >
            {t.deliveryBtnHome}
          </Link>
        </div>
      </div>
    </PublicShell>
  );
}