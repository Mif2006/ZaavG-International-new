import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PublicShell } from "@/components/public-shell";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy — ZAAV G" },
      {
        name: "description",
        content: "ZAAV G Refund Policy. Learn about our returns, exchanges, and refund process for handmade jewelry.",
      },
      { property: "og:title", content: "Refund Policy — ZAAV G" },
      { property: "og:description", content: "ZAAV G Refund Policy. Learn about our returns, exchanges, and refund process for handmade jewelry." },
    ],
  }),
  component: RefundPolicyPage,
});

type Lang = "en" | "ru" | "id";

const T: Record<
  Lang,
  {
    refundTitle: string;
    refundUpdated: string;
    refundIntroLine1: string;
    refundIntroLine2: string;
    returnsTitle: string;
    returnsText1: string;
    returnsText2: string;
    returnsText3: string;
    returnsReq1: string;
    returnsReq2: string;
    returnsReq3: string;
    eligibleTitle: string;
    eligibleText1: string;
    eligible1: string;
    eligible2: string;
    eligible3: string;
    eligibleText2: string;
    nonReturnableTitle: string;
    nonReturnableText1: string;
    nonReturn1: string;
    nonReturn2: string;
    nonReturn3: string;
    nonReturn4: string;
    nonReturn5: string;
    nonReturnableText2: string;
    processTitle: string;
    processText1: string;
    process1: string;
    process2: string;
    processText2: string;
    shippingTitle: string;
    shippingText1: string;
    shippingExcept1: string;
    shippingExcept2: string;
    shippingText2: string;
    shippingText3: string;
    cancelTitle: string;
    cancelText1: string;
    cancelText2: string;
    damagedTitle: string;
    damagedText1: string;
    damagedStep1: string;
    damagedStep2: string;
    damagedText2: string;
    contactTitle: string;
    contactIntro: string;
    refundBtnCatalog: string;
    refundBtnHome: string;
  }
> = {
  en: {
    refundTitle: "REFUND POLICY",
    refundUpdated: "Last updated: May 2026",
    refundIntroLine1: "At ZAAV G, every piece is created with care, intention, and handcrafted artistry.",
    refundIntroLine2: "Because many of our jewelry pieces are handmade or produced in limited quantities, we ask that you review our refund policy carefully before placing an order.",
    returnsTitle: "1. Returns & Exchanges",
    returnsText1: "We accept return or exchange requests under specific circumstances.",
    returnsText2: "To request a return or exchange, please contact us within 48 hours of receiving your order at:",
    returnsText3: "Your request must include:",
    returnsReq1: "Your order number",
    returnsReq2: "Clear photos of the item",
    returnsReq3: "A description of the issue",
    eligibleTitle: "2. Eligible Returns",
    eligibleText1: "Returns or exchanges may be approved if:",
    eligible1: "The item arrived damaged",
    eligible2: "The wrong item was received",
    eligible3: "There is a confirmed manufacturing defect",
    eligibleText2: "Approved returns must be shipped back in their original condition and packaging.",
    nonReturnableTitle: "3. Non-Returnable Items",
    nonReturnableText1: "We do not accept returns or exchanges for:",
    nonReturn1: "Custom-made or personalized jewelry",
    nonReturn2: "Made-to-order pieces",
    nonReturn3: "Gift cards or certificates",
    nonReturn4: "Items showing signs of wear, damage, resizing, improper care, or external impact",
    nonReturn5: "Earrings (for hygiene reasons, unless defective)",
    nonReturnableText2: "Because natural stones and handcrafted jewelry are unique, slight variations in color, texture, shape, or finish are not considered defects.",
    processTitle: "4. Refund Process",
    processText1: "If your return is approved:",
    process1: "The refund will be issued to the original payment method",
    process2: "Processing times may vary depending on your payment provider or bank",
    processText2: "Original shipping costs, customs duties, taxes, and import fees are non-refundable unless required by law.",
    shippingTitle: "5. Shipping Responsibility",
    shippingText1: "Customers are responsible for return shipping costs unless:",
    shippingExcept1: "The wrong item was sent",
    shippingExcept2: "The item arrived damaged due to our error",
    shippingText2: "We recommend using a tracked and insured shipping method for returns.",
    shippingText3: "ZAAV G is not responsible for lost or damaged return shipments.",
    cancelTitle: "6. Order Cancellation",
    cancelText1: "Orders may be canceled within 24 hours after purchase unless production has already begun",
    cancelText2: "Custom or personalized orders cannot be canceled once production starts",
    damagedTitle: "7. Damaged Packages",
    damagedText1: "If your package arrives visibly damaged:",
    damagedStep1: "Please photograph the packaging before opening",
    damagedStep2: "Contact us immediately after delivery",
    damagedText2: "This helps us work with the shipping carrier and resolve the issue faster.",
    contactTitle: "8. Contact",
    contactIntro: "For all refund or exchange requests, please contact:",
    refundBtnCatalog: "View Collections",
    refundBtnHome: "Home",
  },
  ru: {
    refundTitle: "ПОЛИТИКА ВОЗВРАТА",
    refundUpdated: "Последнее обновление: май 2026",
    refundIntroLine1: "В ZAAV G каждое изделие создается с заботой и ремесленным мастерством.",
    refundIntroLine2: "Поскольку многие наши украшения изготовлены вручную или выпускаются ограниченным тиражом, мы просим вас внимательно ознакомиться с нашей политикой возврата перед оформлением заказа.",
    returnsTitle: "1. Возврат и обмен",
    returnsText1: "Мы принимаем запросы на возврат или обмен при определенных обстоятельствах.",
    returnsText2: "Чтобы запросить возврат или обмен, пожалуйста, свяжитесь с нами в течение 48 часов после получения заказа по адресу:",
    returnsText3: "Ваш запрос должен включать:",
    returnsReq1: "Номер вашего заказа",
    returnsReq2: "Четкие фотографии изделия",
    returnsReq3: "Описание проблемы",
    eligibleTitle: "2. Подходящие для возврата товары",
    eligibleText1: "Возврат или обмен может быть одобрен, если:",
    eligible1: "Товар прибыл поврежденным",
    eligible2: "Был получен неверный товар",
    eligible3: "Подтвержден производственный дефект",
    eligibleText2: "Одобренные возвраты должны быть отправлены обратно в оригинальном состоянии и упаковке.",
    nonReturnableTitle: "3. Товары, не подлежащие возврату",
    nonReturnableText1: "Мы не принимаем возврат или обмен для:",
    nonReturn1: "Украшений, изготовленных на заказ или персонализированных",
    nonReturn2: "Изделий, сделанных под заказ",
    nonReturn3: "Подарочных карт или сертификатов",
    nonReturn4: "Товаров со следами износа, повреждений, изменения размера, неправильного ухода или внешнего воздействия",
    nonReturn5: "Сережек (по гигиеническим причинам, если они не дефектны)",
    nonReturnableText2: "Поскольку натуральные камни и украшения ручной работы уникальны, небольшие различия в цвете, текстуре, форме или отделке не считаются дефектами.",
    processTitle: "4. Процесс возврата средств",
    processText1: "Если ваш возврат одобрен:",
    process1: "Возврат средств будет осуществлен на исходный способ оплаты",
    process2: "Сроки обработки могут варьироваться в зависимости от вашего платежного провайдера или банка",
    processText2: "Стоимость доставки, таможенные пошлины, налоги и импортные сборы не подлежат возврату, если это не требуется по закону.",
    shippingTitle: "5. Ответственность за доставку",
    shippingText1: "Клиенты несут ответственность за стоимость обратной доставки, если только:",
    shippingExcept1: "Был отправлен неверный товар",
    shippingExcept2: "Товар прибыл поврежденным по нашей ошибке",
    shippingText2: "Мы рекомендуем использовать отслеживаемый и застрахованный способ доставки для возвратов.",
    shippingText3: "ZAAV G не несет ответственности за утерянные или поврежденные возвратные отправления.",
    cancelTitle: "6. Отмена заказа",
    cancelText1: "Заказы могут быть отменены в течение 24 часов после покупки, если производство еще не началось",
    cancelText2: "Заказы на изготовление или персонализированные заказы не могут быть отменены после начала производства",
    damagedTitle: "7. Поврежденные посылки",
    damagedText1: "Если ваша посылка прибыла с видимыми повреждениями:",
    damagedStep1: "Пожалуйста, сфотографируйте упаковку перед открытием",
    damagedStep2: "Свяжитесь с нами сразу после доставки",
    damagedText2: "Это поможет нам связаться с транспортной компанией и быстрее решить проблему.",
    contactTitle: "8. Контакт",
    contactIntro: "По всем запросам на возврат или обмен, пожалуйста, свяжитесь с нами:",
    refundBtnCatalog: "Смотреть коллекции",
    refundBtnHome: "На главную",
  },
  id: {
    refundTitle: "KEBIJAKAN PENGEMBALIAN DANA",
    refundUpdated: "Terakhir diperbarui: Mei 2026",
    refundIntroLine1: "Di ZAAV G, setiap pieces dibuat dengan perhatian, niat, dan keahlian handmade.",
    refundIntroLine2: "Karena banyak perhiasan kami dibuat tangan atau diproduksi dalam jumlah terbatas, kami mohon Anda meninjau kebijakan pengembalian kami dengan cermat sebelum melakukan pemesanan.",
    returnsTitle: "1. Pengembalian & Penukaran",
    returnsText1: "Kami menerima permintaan pengembalian atau penukaran dalam keadaan tertentu.",
    returnsText2: "Untuk meminta pengembalian atau penukaran, silakan hubungi kami dalam waktu 48 jam setelah menerima pesanan Anda di:",
    returnsText3: "Permintaan Anda harus mencakup:",
    returnsReq1: "Nomor pesanan Anda",
    returnsReq2: "Foto jelas dari item",
    returnsReq3: "Deskripsi masalah",
    eligibleTitle: "2. Pengembalian yang Layak",
    eligibleText1: "Pengembalian atau penukaran dapat disetujui jika:",
    eligible1: "Item tiba dalam kondisi rusak",
    eligible2: "Item yang salah diterima",
    eligible3: "Ada cacat produksi yang dikonfirmasi",
    eligibleText2: "Pengembalian yang disetujui harus dikirim kembali dalam kondisi dan kemasan asli.",
    nonReturnableTitle: "3. Item yang Tidak Dapat Dikembalikan",
    nonReturnableText1: "Kami tidak menerima pengembalian atau penukaran untuk:",
    nonReturn1: "Perhiasan custom-made atau dipersonalisasi",
    nonReturn2: "Pieces made-to-order",
    nonReturn3: "Kartu hadiah atau sertifikat",
    nonReturn4: "Item yang menunjukkan tanda-tanda keausan, kerusakan, perubahan ukuran, perawatan yang tidak tepat, atau dampak eksternal",
    nonReturn5: "Anting-anting (karena alasan higienis, kecuali cacat)",
    nonReturnableText2: "Karena batu alami dan perhiasan handmade unik, variasi kecil dalam warna, tekstur, bentuk, atau finishing tidak dianggap sebagai cacat.",
    processTitle: "4. Proses Pengembalian Dana",
    processText1: "Jika pengembalian Anda disetujui:",
    process1: "Pengembalian dana akan diproses ke metode pembayaran asli",
    process2: "Waktu pemrosesan dapat bervariasi tergantung pada penyedia pembayaran atau bank Anda",
    processText2: "Biaya pengiriman asli, bea cukai, pajak, dan biaya impor tidak dapat dikembalikan kecuali diwajibkan oleh hukum.",
    shippingTitle: "5. Tanggung Jawab Pengiriman",
    shippingText1: "Pelanggan bertanggung jawab atas biaya pengiriman kembali kecuali:",
    shippingExcept1: "Item yang salah dikirim",
    shippingExcept2: "Item tiba rusak karena kesalahan kami",
    shippingText2: "Kami merekomendasikan menggunakan metode pengiriman yang dapat dilacak dan diasuransikan untuk pengembalian.",
    shippingText3: "ZAAV G tidak bertanggung jawab atas pengiriman kembali yang hilang atau rusak.",
    cancelTitle: "6. Pembatalan Pesanan",
    cancelText1: "Pesanan dapat dibatalkan dalam waktu 24 jam setelah pembelian kecuali produksi sudah dimulai",
    cancelText2: "Pesanan custom atau dipersonalisasi tidak dapat dibatalkan setelah produksi dimulai",
    damagedTitle: "7. Paket Rusak",
    damagedText1: "Jika paket Anda tiba dengan kerusakan yang terlihat:",
    damagedStep1: "Silakan foto kemasannya sebelum membuka",
    damagedStep2: "Hubungi kami segera setelah pengiriman",
    damagedText2: "Ini membantu kami bekerja dengan perusahaan pengiriman dan menyelesaikan masalah lebih cepat.",
    contactTitle: "8. Kontak",
    contactIntro: "Untuk semua permintaan pengembalian atau penukaran, silakan hubungi:",
    refundBtnCatalog: "Lihat Katalog",
    refundBtnHome: "Beranda",
  },
};

function RefundPolicyPage() {
  const { lang } = useI18n();
  const t = T[lang as Lang] || T.en;

  const scrollToContent = () => {
    const el = document.getElementById("refundContent");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PublicShell>
      <div className="relative w-full min-h-screen bg-white font-sans text-neutral-900 overflow-x-hidden selection:bg-neutral-900 selection:text-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center bg-[url('https://cdn.shopify.com/s/files/1/0987/8745/9350/files/IMG_1010.jpg?v=1776287860')] bg-cover bg-center bg-fixed overflow-hidden">
          <div className="absolute inset-0 bg-[#0a140f]/75 z-10" />
          <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
            <h1
              className={`font-bold text-white tracking-[0.15em] uppercase leading-tight mb-10 drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all ${
                lang === "ru"
                  ? "text-2xl sm:text-3xl md:text-4xl" // Reduced size for Russian[cite: 2]
                  : "text-3xl sm:text-4xl md:text-5xl lg:text-7xl"
              }`}
            >
              {t.refundTitle}
            </h1>
            <button
              onClick={scrollToContent}
              className="w-10 h-10 border-2 border-white/60 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 animate-bounce mx-auto mt-8 hover:border-white hover:-translate-y-1 bg-transparent p-0"
              aria-label="Scroll to content"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none stroke-[2]">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        </section>

        {/* Content Section */}
        <div id="refundContent" className="py-24 px-6 md:px-10 lg:px-16 max-w-4xl mx-auto">
          <p className="text-sm text-neutral-500 italic mb-10">{t.refundUpdated}</p>

          <div className="mb-12 space-y-4">
            <p className="text-base sm:text-lg text-neutral-600 leading-[1.9]">{t.refundIntroLine1}</p>
            <p className="text-base sm:text-lg text-neutral-600 leading-[1.9]">{t.refundIntroLine2}</p>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.returnsTitle}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.returnsText1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">
              {t.returnsText2}<br />
              📩 <a href="mailto:zaavg.bali@gmail.com" className="text-[#008060] hover:underline">zaavg.bali@gmail.com</a>
            </p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.returnsText3}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.returnsReq1, t.returnsReq2, t.returnsReq3].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.eligibleTitle}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.eligibleText1}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.eligible1, t.eligible2, t.eligible3].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.eligibleText2}</p>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.nonReturnableTitle}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.nonReturnableText1}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.nonReturn1, t.nonReturn2, t.nonReturn3, t.nonReturn4, t.nonReturn5].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.nonReturnableText2}</p>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.processTitle}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.processText1}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.process1, t.process2].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.processText2}</p>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.shippingTitle}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.shippingText1}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.shippingExcept1, t.shippingExcept2].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">
              {t.shippingText2}<br />
              {t.shippingText3}
            </p>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.cancelTitle}</h2>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.cancelText1, t.cancelText2].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.damagedTitle}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.damagedText1}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.damagedStep1, t.damagedStep2].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.damagedText2}</p>
          </div>

          <div className="bg-[#f9f9f9] p-6 sm:p-8 rounded-xl my-10 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.contactTitle}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.contactIntro}</p>
            <div className="text-base text-neutral-900 font-semibold leading-[1.9] mt-4">
              ZAAV G<br />
              📩 <a href="mailto:zaavg.bali@gmail.com" className="text-[#008060] font-normal hover:underline">zaavg.bali@gmail.com</a><br />
              🌐 <a href="https://zaavgbali.com" target="_blank" rel="noopener noreferrer" className="text-[#008060] font-normal hover:underline">zaavgbali.com</a>
            </div>
          </div>
        </div>

        {/* Action Buttons Block */}
        <section className="py-16 px-6 bg-white flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 border-t border-neutral-100">
          <Link
            to="/collections"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-sans text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 min-w-[220px] bg-[#1a1a1a] text-white border border-white/20 shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:bg-[#0f0f0f] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,0,0,0.4)]"
          >
            {t.refundBtnCatalog}
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-sans text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 min-w-[220px] bg-transparent text-[#1a1a1a] border-[1.5px] border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white hover:-translate-y-0.5"
          >
            {t.refundBtnHome}
          </Link>
        </section>
      </div>
    </PublicShell>
  );
}