import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PublicShell } from "@/components/public-shell";

export const Route = createFileRoute("/delivery")({
  head: () => ({
    meta: [
      { title: "Delivery & Shipping — ZAAV G" },
      {
        name: "description",
        content:
          "Worldwide delivery and shipping information, processing times, and policies for ZAAV G jewelry.",
      },
      { property: "og:title", content: "Delivery & Shipping — ZAAV G" },
      {
        property: "og:description",
        content:
          "Worldwide delivery and shipping information, processing times, and policies for ZAAV G jewelry.",
      },
    ],
  }),
  component: DeliveryShippingPage,
});

type Lang = "en" | "ru" | "id";

const T: Record<
  Lang,
  {
    deliveryTitle: string;
    deliveryUpdated: string;
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
  }
> = {
  en: {
    deliveryTitle: "DELIVERY & SHIPPING",
    deliveryUpdated: "Last updated: May 2026",
    deliveryIntro:
      "At ZAAV G, every piece is carefully prepared and shipped from Bali with attention, care, and respect for the craftsmanship behind it.\nWe currently offer worldwide shipping.",
    processingTitle: "Processing Time",
    processingText1: "Most orders are processed within 1–5 business days",
    processingText2:
      "For handmade, custom-made, or made-to-order jewelry, processing times may vary depending on the complexity of the design",
    processingText3:
      "If additional production time is required, we will contact you directly",
    shippingTitle: "Shipping Time",
    shippingIntro:
      "Estimated delivery times depend on the destination country and shipping provider.",
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
    providersText2:
      "Tracking information will be provided once your order has been shipped.",
    customsTitle: "Customs & Import Duties",
    customsText1:
      "International orders may be subject to customs duties, taxes, or import fees depending on your country's regulations",
    customsText2: "These charges are the responsibility of the customer",
    customsText3:
      "ZAAV G is not responsible for delays caused by customs clearance procedures",
    packagingTitle: "Packaging",
    packagingText:
      "Every ZAAV G piece is carefully packaged to ensure it arrives safely and beautifully.\nWe pay special attention to the details, so each order feels meaningful from the moment it is opened.",
    incorrectInfoTitle: "Incorrect Shipping Information",
    incorrectInfoText:
      "Please make sure your shipping details are accurate before placing an order.\nZAAV G is not responsible for packages delayed, lost, or returned due to incorrect or incomplete shipping information provided by the customer.",
    lostTitle: "Lost or Delayed Packages",
    lostText1:
      "If your package is significantly delayed or appears lost, please contact us and we will do our best to assist you",
    lostText2:
      "Once an order has been transferred to the shipping carrier, delivery responsibility may partially depend on the carrier's operations and policies",
    damagedTitle: "Damaged Packages",
    damagedIntro:
      "If your package arrives visibly damaged, please:",
    damagedStep1: "Take photos before opening the package",
    damagedStep2: "Contact us immediately after delivery",
    damagedNote:
      "This helps us resolve the issue with the shipping provider as quickly as possible.",
    contactTitle: "Contact",
    contactIntro:
      "For any shipping or delivery questions, please contact us:",
    deliveryBtnCatalog: "View Collections",
    deliveryBtnHome: "Home",
  },
  ru: {
    deliveryTitle: "ДОСТАВКА",
    deliveryUpdated: "Последнее обновление: май 2026",
    deliveryIntro:
      "В ZAAV G каждое изделие тщательно готовится и отправляется с Бали с вниманием, заботой и уважением к мастерству, стоящему за ним.\nМы осуществляем доставку по всему миру.",
    processingTitle: "Время обработки",
    processingText1:
      "Большинство заказов обрабатываются в течение 1–5 рабочих дней",
    processingText2:
      "Для украшений ручной работы, изготовленных на заказ или под заказ, сроки обработки могут варьироваться в зависимости от сложности дизайна",
    processingText3:
      "Если требуется дополнительное время на производство, мы свяжемся с вами напрямую",
    shippingTitle: "Сроки доставки",
    shippingIntro:
      "Расчетное время доставки зависит от страны назначения и службы доставки.",
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
    providersText2:
      "Информация для отслеживания будет предоставлена после отправки вашего заказа.",
    customsTitle: "Таможня и импортные пошлины",
    customsText1:
      "Международные заказы могут облагаться таможенными пошлинами, налогами или импортными сборами в зависимости от правил вашей страны",
    customsText2: "Эти расходы несет клиент",
    customsText3:
      "ZAAV G не несет ответственности за задержки, вызванные процедурами таможенного оформления",
    packagingTitle: "Упаковка",
    packagingText:
      "Каждое изделие ZAAV G тщательно упаковывается, чтобы гарантировать его безопасную и красивую доставку.\nМы уделяем особое внимание деталям, чтобы каждый заказ вызывал приятные эмоции с момента открытия.",
    incorrectInfoTitle: "Неверная информация о доставке",
    incorrectInfoText:
      "Пожалуйста, убедитесь, что ваши данные доставки точны перед оформлением заказа.\nZAAV G не несет ответственности за посылки, задержанные, утерянные или возвращенные из-за неверной или неполной информации о доставке, предоставленной клиентом.",
    lostTitle: "Утерянные или задержанные посылки",
    lostText1:
      "Если ваша посылка значительно задерживается или кажется утерянной, пожалуйста, свяжитесь с нами, и мы сделаем все возможное, чтобы помочь вам",
    lostText2:
      "После передачи заказа службе доставки ответственность за доставку может частично зависеть от операций и политик перевозчика",
    damagedTitle: "Поврежденные посылки",
    damagedIntro:
      "Если ваша посылка прибыла с видимыми повреждениями, пожалуйста:",
    damagedStep1: "Сделайте фотографии перед открытием упаковки",
    damagedStep2: "Свяжитесь с нами сразу после доставки",
    damagedNote:
      "Это поможет нам как можно быстрее решить вопрос с поставщиком услуг доставки.",
    contactTitle: "Контакт",
    contactIntro:
      "По любым вопросам доставки, пожалуйста, свяжитесь с нами:",
    deliveryBtnCatalog: "Смотреть коллекции",
    deliveryBtnHome: "На главную",
  },
  id: {
    deliveryTitle: "PENGIRIMAN",
    deliveryUpdated: "Terakhir diperbarui: Mei 2026",
    deliveryIntro:
      "Di ZAAV G, setiap pieces disiapkan dan dikirim dengan hati-hati dari Bali dengan perhatian, kepedulian, dan penghargaan terhadap keahlian di baliknya.\nKami saat ini menawarkan pengiriman ke seluruh dunia.",
    processingTitle: "Waktu Pemrosesan",
    processingText1:
      "Sebagian besar pesanan diproses dalam waktu 1–5 hari kerja",
    processingText2:
      "Untuk perhiasan handmade, custom-made, atau made-to-order, waktu pemrosesan dapat bervariasi tergantung pada kompleksitas desain",
    processingText3:
      "Jika diperlukan waktu produksi tambahan, kami akan menghubungi Anda langsung",
    shippingTitle: "Waktu Pengiriman",
    shippingIntro:
      "Perkiraan waktu pengiriman tergantung pada negara tujuan dan penyedia pengiriman.",
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
    providersText2:
      "Informasi pelacakan akan diberikan setelah pesanan Anda dikirim.",
    customsTitle: "Bea Cukai & Biaya Impor",
    customsText1:
      "Pesanan internasional mungkin dikenakan bea cukai, pajak, atau biaya impor tergantung pada peraturan negara Anda",
    customsText2: "Biaya ini menjadi tanggung jawab pelanggan",
    customsText3:
      "ZAAV G tidak bertanggung jawab atas keterlambatan yang disebabkan oleh prosedur clearance bea cukai",
    packagingTitle: "Pengemasan",
    packagingText:
      "Setiap pieces ZAAV G dikemas dengan hati-hati untuk memastikan tiba dengan aman dan indah.\nKami memperhatikan detail khusus, sehingga setiap pesanan terasa bermakna sejak pertama kali dibuka.",
    incorrectInfoTitle: "Informasi Pengiriman yang Salah",
    incorrectInfoText:
      "Pastikan detail pengiriman Anda akurat sebelum melakukan pemesanan.\nZAAV G tidak bertanggung jawab atas paket yang tertunda, hilang, atau dikembalikan karena informasi pengiriman yang salah atau tidak lengkap yang diberikan oleh pelanggan.",
    lostTitle: "Paket Hilang atau Tertunda",
    lostText1:
      "Jika paket Anda tertunda secara signifikan atau tampak hilang, silakan hubungi kami dan kami akan melakukan yang terbaik untuk membantu Anda",
    lostText2:
      "Setelah pesanan ditransfer ke carrier pengiriman, tanggung jawab pengiriman dapat sebagian bergantung pada operasi dan kebijakan carrier",
    damagedTitle: "Paket Rusak",
    damagedIntro:
      "Jika paket Anda tiba dengan kerusakan yang terlihat, silakan:",
    damagedStep1: "Ambil foto sebelum membuka paket",
    damagedStep2: "Hubungi kami segera setelah pengiriman",
    damagedNote:
      "Ini membantu kami menyelesaikan masalah dengan penyedia pengiriman secepat mungkin.",
    contactTitle: "Kontak",
    contactIntro:
      "Untuk pertanyaan pengiriman atau pengiriman, silakan hubungi kami:",
    deliveryBtnCatalog: "Lihat Katalog",
    deliveryBtnHome: "Beranda",
  },
};

function DeliveryShippingPage() {
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
    const element = document.getElementById("deliveryContent");
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
              "url('https://cdn.shopify.com/s/files/1/0987/8745/9350/files/IMG_1327.jpg?v=1776287860')",
          }}
        >
          <div className="absolute inset-0 bg-[#0a140f]/75 z-10" />
          <div className="relative z-20 px-5 text-center">
            <h1
              className={`mb-10 font-bold uppercase tracking-[0.15em] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-300 ${
                lang === "ru"
                  ? "text-[clamp(1.6rem,5vw,3.6rem)]"
                  : "text-[clamp(2rem,6vw,4.5rem)]"
              }`}
            >
              {t.deliveryTitle}
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
          id="deliveryContent"
          className="mx-auto max-w-[900px] px-6 py-16 md:px-15 md:py-25"
        >
          <div className="mb-12 text-center">
            <p className="text-base md:text-lg leading-[1.9] text-[#555555]">
              {renderFormattedText(t.deliveryIntro)}
            </p>
          </div>

          <div className="mb-12 text-center">
            <h2 className="mb-5 text-xl md:text-2xl font-semibold leading-[1.3] text-[#1a1a1a]">
              {t.processingTitle}
            </h2>
            <ul className="mx-auto my-4 max-w-[600px] list-none text-left">
              <li className="relative py-1.5 pl-6 text-base leading-[1.7] text-[#555555] before:absolute before:left-2 before:font-bold before:text-[#1a1a1a] before:content-['•']">
                {t.processingText1}
              </li>
              <li className="relative py-1.5 pl-6 text-base leading-[1.7] text-[#555555] before:absolute before:left-2 before:font-bold before:text-[#1a1a1a] before:content-['•']">
                {t.processingText2}
              </li>
              <li className="relative py-1.5 pl-6 text-base leading-[1.7] text-[#555555] before:absolute before:left-2 before:font-bold before:text-[#1a1a1a] before:content-['•']">
                {t.processingText3}
              </li>
            </ul>
          </div>

          <div className="mb-12 text-center">
            <h2 className="mb-5 text-xl md:text-2xl font-semibold leading-[1.3] text-[#1a1a1a]">
              {t.shippingTitle}
            </h2>
            <p className="mb-5 text-base md:text-lg leading-[1.9] text-[#555555]">
              {t.shippingIntro}
            </p>
            <p className="mb-5 text-base md:text-lg leading-[1.9] text-[#555555]">
              {t.shippingRegions}
            </p>
            <div className="mx-auto my-6 grid max-w-[700px] grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="rounded-lg border-l-[3px] border-[#008060] bg-[#f9f9f9] p-4">
                <div className="mb-1 text-base font-semibold text-[#1a1a1a]">
                  {t.regionAsia}
                </div>
                <div className="text-sm md:text-base text-[#555555]">
                  {t.timeAsia}
                </div>
              </div>
              <div className="rounded-lg border-l-[3px] border-[#008060] bg-[#f9f9f9] p-4">
                <div className="mb-1 text-base font-semibold text-[#1a1a1a]">
                  {t.regionEurope}
                </div>
                <div className="text-sm md:text-base text-[#555555]">
                  {t.timeEurope}
                </div>
              </div>
              <div className="rounded-lg border-l-[3px] border-[#008060] bg-[#f9f9f9] p-4">
                <div className="mb-1 text-base font-semibold text-[#1a1a1a]">
                  {t.regionUSCA}
                </div>
                <div className="text-sm md:text-base text-[#555555]">
                  {t.timeUSCA}
                </div>
              </div>
              <div className="rounded-lg border-l-[3px] border-[#008060] bg-[#f9f9f9] p-4">
                <div className="mb-1 text-base font-semibold text-[#1a1a1a]">
                  {t.regionOther}
                </div>
                <div className="text-sm md:text-base text-[#555555]">
                  {t.timeOther}
                </div>
              </div>
            </div>
            <p className="mb-5 text-base md:text-lg leading-[1.9] text-[#555555]">
              {t.shippingNote}
            </p>
          </div>

          <div className="mb-12 text-center">
            <h2 className="mb-5 text-xl md:text-2xl font-semibold leading-[1.3] text-[#1a1a1a]">
              {t.providersTitle}
            </h2>
            <p className="mb-5 text-base md:text-lg leading-[1.9] text-[#555555]">
              {renderFormattedText(t.providersText1)}
            </p>
            <p className="mb-5 text-base md:text-lg leading-[1.9] text-[#555555]">
              {t.providersText2}
            </p>
          </div>

          <div className="my-6 mb-12 rounded-xl bg-[#f9f9f9] p-6 text-center">
            <h2 className="mb-5 text-xl md:text-2xl font-semibold leading-[1.3] text-[#1a1a1a]">
              {t.customsTitle}
            </h2>
            <ul className="mx-auto my-4 max-w-[600px] list-none text-left">
              <li className="relative py-1.5 pl-6 text-base leading-[1.7] text-[#555555] before:absolute before:left-2 before:font-bold before:text-[#1a1a1a] before:content-['•']">
                {t.customsText1}
              </li>
              <li className="relative py-1.5 pl-6 text-base leading-[1.7] text-[#555555] before:absolute before:left-2 before:font-bold before:text-[#1a1a1a] before:content-['•']">
                {t.customsText2}
              </li>
              <li className="relative py-1.5 pl-6 text-base leading-[1.7] text-[#555555] before:absolute before:left-2 before:font-bold before:text-[#1a1a1a] before:content-['•']">
                {t.customsText3}
              </li>
            </ul>
          </div>

          <div className="mb-12 text-center">
            <h2 className="mb-5 text-xl md:text-2xl font-semibold leading-[1.3] text-[#1a1a1a]">
              {t.packagingTitle}
            </h2>
            <p className="mb-5 text-base md:text-lg leading-[1.9] text-[#555555]">
              {renderFormattedText(t.packagingText)}
            </p>
          </div>

          <div className="mb-12 text-center">
            <h2 className="mb-5 text-xl md:text-2xl font-semibold leading-[1.3] text-[#1a1a1a]">
              {t.incorrectInfoTitle}
            </h2>
            <p className="mb-5 text-base md:text-lg leading-[1.9] text-[#555555]">
              {renderFormattedText(t.incorrectInfoText)}
            </p>
          </div>

          <div className="mb-12 text-center">
            <h2 className="mb-5 text-xl md:text-2xl font-semibold leading-[1.3] text-[#1a1a1a]">
              {t.lostTitle}
            </h2>
            <ul className="mx-auto my-4 max-w-[600px] list-none text-left">
              <li className="relative py-1.5 pl-6 text-base leading-[1.7] text-[#555555] before:absolute before:left-2 before:font-bold before:text-[#1a1a1a] before:content-['•']">
                {t.lostText1}
              </li>
              <li className="relative py-1.5 pl-6 text-base leading-[1.7] text-[#555555] before:absolute before:left-2 before:font-bold before:text-[#1a1a1a] before:content-['•']">
                {t.lostText2}
              </li>
            </ul>
          </div>

          <div className="mb-12 text-center">
            <h2 className="mb-5 text-xl md:text-2xl font-semibold leading-[1.3] text-[#1a1a1a]">
              {t.damagedTitle}
            </h2>
            <p className="mb-5 text-base md:text-lg leading-[1.9] text-[#555555]">
              {t.damagedIntro}
            </p>
            <ul className="mx-auto my-4 max-w-[600px] list-none text-left">
              <li className="relative py-1.5 pl-6 text-base leading-[1.7] text-[#555555] before:absolute before:left-2 before:font-bold before:text-[#1a1a1a] before:content-['•']">
                {t.damagedStep1}
              </li>
              <li className="relative py-1.5 pl-6 text-base leading-[1.7] text-[#555555] before:absolute before:left-2 before:font-bold before:text-[#1a1a1a] before:content-['•']">
                {t.damagedStep2}
              </li>
            </ul>
            <p className="mb-5 text-base md:text-lg leading-[1.9] text-[#555555]">
              {t.damagedNote}
            </p>
          </div>

          <div className="my-6 mb-12 rounded-xl bg-[#f9f9f9] p-6 text-center">
            <h2 className="mb-5 text-xl md:text-2xl font-semibold leading-[1.3] text-[#1a1a1a]">
              {t.contactTitle}
            </h2>
            <p className="mb-5 text-base md:text-lg leading-[1.9] text-[#555555]">
              {t.contactIntro}
            </p>
            <p className="text-base md:text-lg font-semibold leading-[1.9] text-[#1a1a1a]">
              ZAAV G<br />
              📩{" "}
              <a
                href="mailto:zaavg.bali@gmail.com"
                className="text-[#008060] no-underline hover:underline"
              >
                zaavg.bali@gmail.com
              </a>
              <br />
              🌐{" "}
              <a
                href="https://zaavgbali.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#008060] no-underline hover:underline"
              >
                zaavgbali.com
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
            {t.deliveryBtnCatalog}
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-sans text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 min-w-[220px] bg-transparent text-[#1a1a1a] border-[1.5px] border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white hover:-translate-y-0.5"
          >
            {t.deliveryBtnHome}
          </Link>
        </div>
      </div>
    </PublicShell>
  );
}