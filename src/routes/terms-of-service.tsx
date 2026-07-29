import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PublicShell } from "@/components/public-shell";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service — ZAAV G" },
      {
        name: "description",
        content: "ZAAV G Terms of Service. Read the rules and guidelines for using our website and purchasing our handcrafted jewelry.",
      },
      { property: "og:title", content: "Terms of Service — ZAAV G" },
      { property: "og:description", content: "ZAAV G Terms of Service. Read the rules and guidelines for using our website and purchasing our handcrafted jewelry." },
    ],
  }),
  component: TermsOfServicePage,
});

type Lang = "en" | "ru" | "id";

/* Translation Dictionary extracted from source */ /*[cite: 3] */
const T: Record<
  Lang,
  {
    termsTitle: string;
    termsUpdated: string;
    termsIntroLine1: string;
    termsIntroLine2: string;
    termsIntroLine3: string;
    generalTitle: string;
    generalText1: string;
    generalText2: string;
    generalText3: string;
    productsTitle: string;
    productsText1: string;
    productsText2: string;
    productVar1: string;
    productVar2: string;
    productVar3: string;
    productsText3: string;
    pricingTitle: string;
    pricingText1: string;
    pricingText2: string;
    pricingText3: string;
    ordersTitle: string;
    ordersText1: string;
    ordersText2: string;
    ordersRight1: string;
    ordersRight2: string;
    ordersRight3: string;
    ordersText3: string;
    paymentTitle: string;
    paymentText1: string;
    paymentText2: string;
    paymentText3: string;
    paymentConfirm1: string;
    paymentConfirm2: string;
    shippingTitle: string;
    shippingText1: string;
    shippingText2: string;
    shippingVar1: string;
    shippingVar2: string;
    shippingVar3: string;
    shippingVar4: string;
    shippingText3: string;
    shippingText4: string;
    returnsTitle: string;
    returnsText1: string;
    returnsText2: string;
    returnsExclude1: string;
    returnsExclude2: string;
    returnsExclude3: string;
    returnsText3: string;
    returnsText4Line1: string;
    returnsText4Line2: string;
    careTitle: string;
    careText1: string;
    careText2: string;
    careTip1: string;
    careTip2: string;
    careTip3: string;
    careText3: string;
    ipTitle: string;
    ipText1: string;
    ipItem1: string;
    ipItem2: string;
    ipItem3: string;
    ipItem4: string;
    ipItem5: string;
    ipText2Line1: string;
    ipText2Line2: string;
    liabilityTitle: string;
    liabilityText1: string;
    liabilityExclude1: string;
    liabilityExclude2: string;
    liabilityExclude3: string;
    liabilityExclude4: string;
    liabilityText2: string;
    privacyTitle: string;
    privacyTextStart: string;
    privacyTextLink: string;
    privacyTextEnd: string;
    lawTitle: string;
    lawText: string;
    contactTitle: string;
    contactIntro: string;
    termsBtnCatalog: string;
    termsBtnHome: string;
  }
> = {
  en: {
    termsTitle: "TERMS OF SERVICE",
    termsUpdated: "Last updated: May 2026",
    termsIntroLine1: "Welcome to ZAAV G.",
    termsIntroLine2: "These Terms of Service govern your use of our website and services. By accessing our website or placing an order, you agree to these terms.",
    termsIntroLine3: "Please read them carefully before using the site.",
    generalTitle: "1. General Information",
    generalText1: "ZAAV G is an independent jewelry brand creating handcrafted jewelry inspired by Bali, art, and personal meaning.",
    generalText2: "By using this website, you confirm that you are at least 18 years old or have permission from a parent or legal guardian.",
    generalText3: "We reserve the right to update or modify these Terms at any time without prior notice.",
    productsTitle: "2. Products & Handmade Nature",
    productsText1: "All ZAAV G jewelry is handcrafted.",
    productsText2: "Because of the artisanal nature of our work:",
    productVar1: "Slight variations in texture, stone color, shape, or finish may occur",
    productVar2: "Natural stones may contain unique inclusions and characteristics",
    productVar3: "Handmade details are considered part of the design and individuality of each piece",
    productsText3: "These variations are not considered defects.",
    pricingTitle: "3. Pricing & Currency",
    pricingText1: "All prices displayed on the website are listed in the selected currency unless otherwise stated",
    pricingText2: "Prices may change at any time without notice",
    pricingText3: "Import duties, taxes, customs fees, or local charges are the responsibility of the customer",
    ordersTitle: "4. Orders",
    ordersText1: "After placing an order, you will receive an order confirmation by email.",
    ordersText2: "ZAAV G reserves the right to:",
    ordersRight1: "Refuse or cancel orders",
    ordersRight2: "Limit quantities",
    ordersRight3: "Request additional verification if necessary",
    ordersText3: "If an order is canceled after payment, the amount paid will be refunded through the original payment method.",
    paymentTitle: "5. Payment",
    paymentText1: "Payments are securely processed through trusted third-party payment providers",
    paymentText2: "ZAAV G does not store complete payment card information",
    paymentText3: "By submitting payment information, you confirm that:",
    paymentConfirm1: "You are authorized to use the payment method",
    paymentConfirm2: "The provided information is accurate",
    shippingTitle: "6. Shipping",
    shippingText1: "We ship worldwide.",
    shippingText2: "Shipping times are estimated and may vary depending on:",
    shippingVar1: "Destination country",
    shippingVar2: "Customs processing",
    shippingVar3: "Local delivery services",
    shippingVar4: "Holidays or force majeure circumstances",
    shippingText3: "ZAAV G is not responsible for delays caused by customs, shipping carriers, or circumstances beyond our control.",
    shippingText4: "Customers are responsible for providing accurate shipping information.",
    returnsTitle: "7. Returns & Exchanges",
    returnsText1: "Because many ZAAV G pieces are handmade, limited edition, or made to order, all return and exchange requests are reviewed individually.",
    returnsText2: "We do not accept returns or exchanges for:",
    returnsExclude1: "Custom-made items",
    returnsExclude2: "Personalized pieces",
    returnsExclude3: "Items damaged through improper use or external impact",
    returnsText3: "If your item arrives damaged or defective, please contact us within 48 hours of delivery with photos and order details.",
    returnsText4Line1: "Approved refunds will be issued through the original payment method.",
    returnsText4Line2: "Shipping costs, customs fees, and taxes are non-refundable unless required by law.",
    careTitle: "8. Jewelry Care",
    careText1: "ZAAV G jewelry should be handled with care.",
    careText2: "To preserve the beauty of your jewelry:",
    careTip1: "Avoid contact with water, perfumes, chemicals, and cosmetics",
    careTip2: "Remove jewelry before sports, swimming, or sleeping",
    careTip3: "Store pieces separately in a dry place",
    careText3: "Natural wear over time is not considered a manufacturing defect.",
    ipTitle: "9. Intellectual Property",
    ipText1: "All content on this website, including:",
    ipItem1: "Photographs",
    ipItem2: "Videos",
    ipItem3: "Logos",
    ipItem4: "Jewelry designs",
    ipItem5: "Texts and branding",
    ipText2Line1: "Belongs to ZAAV G and may not be copied, reproduced, distributed, or used without written permission.",
    ipText2Line2: "Unauthorized use of our content or designs is prohibited.",
    liabilityTitle: "10. Limitation of Liability",
    liabilityText1: "ZAAV G shall not be liable for:",
    liabilityExclude1: "Indirect or incidental damages",
    liabilityExclude2: "Delays beyond our control",
    liabilityExclude3: "Allergic reactions caused by individual sensitivities",
    liabilityExclude4: "Misuse or improper handling of products",
    liabilityText2: "Our maximum liability shall not exceed the amount paid for the purchased product.",
    privacyTitle: "11. Privacy",
    privacyTextStart: "Your use of this website is also governed by our ",
    privacyTextLink: "Privacy Policy",
    privacyTextEnd: ".",
    lawTitle: "12. Governing Law",
    lawText: "These Terms shall be governed and interpreted in accordance with applicable international commercial practices and local laws where required.",
    contactTitle: "13. Contact Information",
    contactIntro: "For any questions regarding these Terms, please contact us:",
    termsBtnCatalog: "View Collections",
    termsBtnHome: "Home",
  },
  ru: {
    termsTitle: "УСЛОВИЯ ОБСЛУЖИВАНИЯ",
    termsUpdated: "Последнее обновление: май 2026",
    termsIntroLine1: "Добро пожаловать в ZAAV G.",
    termsIntroLine2: "Эти Условия обслуживания регулируют использование нашего веб-сайта и услуг. Получая доступ к нашему веб-сайту или оформляя заказ, вы соглашаетесь с этими условиями.",
    termsIntroLine3: "Пожалуйста, внимательно прочитайте их перед использованием сайта.",
    generalTitle: "1. Общая информация",
    generalText1: "ZAAV G — независимый ювелирный бренд, создающий украшения ручной работы, вдохновленные Бали, искусством и личным смыслом.",
    generalText2: "Используя этот веб-сайт, вы подтверждаете, что вам исполнилось 18 лет или у вас есть разрешение от родителя или законного опекуна.",
    generalText3: "Мы оставляем за собой право обновлять или изменять эти Условия в любое время без предварительного уведомления.",
    productsTitle: "2. Продукция и ручная работа",
    productsText1: "Все украшения ZAAV G изготовлены вручную.",
    productsText2: "Из-за ремесленного характера нашей работы:",
    productVar1: "Возможны небольшие различия в текстуре, цвете камня, форме или отделке",
    productVar2: "Натуральные камни могут содержать уникальные включения и характеристики",
    productVar3: "Детали ручной работы считаются частью дизайна и индивидуальности каждого изделия",
    productsText3: "Эти вариации не считаются дефектами.",
    pricingTitle: "3. Цены и валюта",
    pricingText1: "Все цены, указанные на веб-сайте, указаны в выбранной валюте, если не указано иное",
    pricingText2: "Цены могут измениться в любое время без уведомления",
    pricingText3: "Импортные пошлины, налоги, таможенные сборы или местные сборы являются ответственностью клиента",
    ordersTitle: "4. Заказы",
    ordersText1: "После оформления заказа вы получите подтверждение заказа по электронной почте.",
    ordersText2: "ZAAV G оставляет за собой право:",
    ordersRight1: "Отказать или отменить заказы",
    ordersRight2: "Ограничить количество",
    ordersRight3: "Запросить дополнительную проверку при необходимости",
    ordersText3: "Если заказ отменен после оплаты, уплаченная сумма будет возвращена через исходный способ оплаты.",
    paymentTitle: "5. Оплата",
    paymentText1: "Платежи безопасно обрабатываются через надежных сторонних провайдеров",
    paymentText2: "ZAAV G не хранит полную информацию о платежных картах",
    paymentText3: "Предоставляя платежную информацию, вы подтверждаете, что:",
    paymentConfirm1: "Вы уполномочены использовать способ оплаты",
    paymentConfirm2: "Предоставленная информация точна",
    shippingTitle: "6. Доставка",
    shippingText1: "Мы осуществляем доставку по всему миру.",
    shippingText2: "Сроки доставки являются ориентировочными и могут варьироваться в зависимости от:",
    shippingVar1: "Страны назначения",
    shippingVar2: "Таможенной обработки",
    shippingVar3: "Местных служб доставки",
    shippingVar4: "Праздников или обстоятельств непреодолимой силы",
    shippingText3: "ZAAV G не несет ответственности за задержки, вызванные таможней, транспортными компаниями или обстоятельствами, не зависящими от нас.",
    shippingText4: "Клиенты несут ответственность за предоставление точной информации о доставке.",
    returnsTitle: "7. Возврат и обмен",
    returnsText1: "Поскольку многие изделия ZAAV G изготовлены вручную, являются лимитированными или изготавливаются на заказ, все запросы на возврат и обмен рассматриваются индивидуально.",
    returnsText2: "Мы не принимаем возврат или обмен для:",
    returnsExclude1: "Изделий, изготовленных на заказ",
    returnsExclude2: "Персонализированных изделий",
    returnsExclude3: "Изделий, поврежденных в результате неправильного использования или внешнего воздействия",
    returnsText3: "Если ваш товар прибыл поврежденным или дефектным, пожалуйста, свяжитесь с нами в течение 48 часов после доставки, предоставив фотографии и детали заказа.",
    returnsText4Line1: "Одобренные возвраты будут осуществлены через исходный способ оплаты.",
    returnsText4Line2: "Стоимость доставки, таможенные сборы и налоги не подлежат возврату, если это не требуется по закону.",
    careTitle: "8. Уход за украшениями",
    careText1: "К украшениям ZAAV G следует относиться бережно.",
    careText2: "Чтобы сохранить красоту ваших украшений:",
    careTip1: "Избегайте контакта с водой, духами, химическими веществами и косметикой",
    careTip2: "Снимайте украшения перед занятиями спортом, плаванием или сном",
    careTip3: "Храните изделия отдельно в сухом месте",
    careText3: "Естественный износ со временем не считается производственным дефектом.",
    ipTitle: "9. Интеллектуальная собственность",
    ipText1: "Весь контент на этом веб-сайте, включая:",
    ipItem1: "Фотографии",
    ipItem2: "Видео",
    ipItem3: "Логотипы",
    ipItem4: "Дизайны украшений",
    ipItem5: "Тексты и брендинг",
    ipText2Line1: "Принадлежит ZAAV G и не может быть скопирован, воспроизведен, распространен или использован без письменного разрешения.",
    ipText2Line2: "Несанкционированное использование нашего контента или дизайнов запрещено.",
    liabilityTitle: "10. Ограничение ответственности",
    liabilityText1: "ZAAV G не несет ответственности за:",
    liabilityExclude1: "Косвенный или случайный ущерб",
    liabilityExclude2: "Задержки, не зависящие от нас",
    liabilityExclude3: "Аллергические реакции, вызванные индивидуальной чувствительностью",
    liabilityExclude4: "Неправильное использование или обращение с продуктами",
    liabilityText2: "Наша максимальная ответственность не превышает сумму, уплаченную за приобретенный продукт.",
    privacyTitle: "11. Конфиденциальность",
    privacyTextStart: "Использование вами этого веб-сайта также регулируется нашей ",
    privacyTextLink: "Политикой конфиденциальности",
    privacyTextEnd: ".",
    lawTitle: "12. Применимое право",
    lawText: "Эти Условия регулируются и толкуются в соответствии с применимой международной коммерческой практикой и местными законами, где это требуется.",
    contactTitle: "13. Контактная информация",
    contactIntro: "По любым вопросам относительно этих Условий, пожалуйста, свяжитесь с нами:",
    termsBtnCatalog: "Смотреть коллекции",
    termsBtnHome: "На главную",
  },
  id: {
    termsTitle: "SYARAT LAYANAN",
    termsUpdated: "Terakhir diperbarui: Mei 2026",
    termsIntroLine1: "Selamat datang di ZAAV G.",
    termsIntroLine2: "Syarat Layanan ini mengatur penggunaan website dan layanan kami. Dengan mengakses website kami atau melakukan pemesanan, Anda menyetujui syarat-syarat ini.",
    termsIntroLine3: "Harap baca dengan cermat sebelum menggunakan situs.",
    generalTitle: "1. Informasi Umum",
    generalText1: "ZAAV G adalah merek perhiasan independen yang menciptakan perhiasan buatan tangan yang terinspirasi oleh Bali, seni, dan makna pribadi.",
    generalText2: "Dengan menggunakan website ini, Anda mengonfirmasi bahwa Anda berusia minimal 18 tahun atau memiliki izin dari orang tua atau wali sah.",
    generalText3: "Kami berhak untuk memperbarui atau mengubah Syarat ini kapan saja tanpa pemberitahuan sebelumnya.",
    productsTitle: "2. Produk & Sifat Buatan Tangan",
    productsText1: "Semua perhiasan ZAAV G dibuat secara handmade.",
    productsText2: "Karena sifat artisanal dari pekerjaan kami:",
    productVar1: "Variasi kecil dalam tekstur, warna batu, bentuk, atau finishing dapat terjadi",
    productVar2: "Batu alami mungkin mengandung inklusi dan karakteristik unik",
    productVar3: "Detail handmade dianggap sebagai bagian dari desain dan individualitas setiap pieces",
    productsText3: "Variasi ini tidak dianggap sebagai cacat.",
    pricingTitle: "3. Harga & Mata Uang",
    pricingText1: "Semua harga yang ditampilkan di website terdaftar dalam mata uang yang dipilih kecuali dinyatakan lain",
    pricingText2: "Harga dapat berubah kapan saja tanpa pemberitahuan",
    pricingText3: "Bea masuk, pajak, biaya bea cukai, atau biaya lokal menjadi tanggung jawab pelanggan",
    ordersTitle: "4. Pesanan",
    ordersText1: "Setelah melakukan pemesanan, Anda akan menerima konfirmasi pesanan melalui email.",
    ordersText2: "ZAAV G berhak untuk:",
    ordersRight1: "Menolak atau membatalkan pesanan",
    ordersRight2: "Membatasi jumlah",
    ordersRight3: "Meminta verifikasi tambahan jika diperlukan",
    ordersText3: "Jika pesanan dibatalkan setelah pembayaran, jumlah yang dibayarkan akan dikembalikan melalui metode pembayaran asli.",
    paymentTitle: "5. Pembayaran",
    paymentText1: "Pembayaran diproses dengan aman melalui penyedia pembayaran pihak ketiga tepercaya",
    paymentText2: "ZAAV G tidak menyimpan informasi kartu pembayaran lengkap",
    paymentText3: "Dengan mengirimkan informasi pembayaran, Anda mengonfirmasi bahwa:",
    paymentConfirm1: "Anda berwenang menggunakan metode pembayaran",
    paymentConfirm2: "Informasi yang diberikan akurat",
    shippingTitle: "6. Pengiriman",
    shippingText1: "Kami mengirim ke seluruh dunia.",
    shippingText2: "Waktu pengiriman adalah perkiraan dan dapat bervariasi tergantung pada:",
    shippingVar1: "Negara tujuan",
    shippingVar2: "Proses bea cukai",
    shippingVar3: "Layanan pengiriman lokal",
    shippingVar4: "Hari libur atau keadaan force majeure",
    shippingText3: "ZAAV G tidak bertanggung jawab atas keterlambatan yang disebabkan oleh bea cukai, perusahaan pengiriman, atau keadaan di luar kendali kami.",
    shippingText4: "Pelanggan bertanggung jawab untuk memberikan informasi pengiriman yang akurat.",
    returnsTitle: "7. Pengembalian & Penukaran",
    returnsText1: "Karena banyak pieces ZAAV G dibuat tangan, edisi terbatas, atau dibuat sesuai pesanan, semua permintaan pengembalian dan penukaran ditinjau secara individual.",
    returnsText2: "Kami tidak menerima pengembalian atau penukaran untuk:",
    returnsExclude1: "Item custom-made",
    returnsExclude2: "Pieces yang dipersonalisasi",
    returnsExclude3: "Item yang rusak karena penggunaan yang tidak tepat atau dampak eksternal",
    returnsText3: "Jika item Anda tiba dalam kondisi rusak atau cacat, silakan hubungi kami dalam waktu 48 jam setelah pengiriman dengan foto dan detail pesanan.",
    returnsText4Line1: "Pengembalian dana yang disetujui akan diproses melalui metode pembayaran asli.",
    returnsText4Line2: "Biaya pengiriman, bea cukai, dan pajak tidak dapat dikembalikan kecuali diwajibkan oleh hukum.",
    careTitle: "8. Perawatan Perhiasan",
    careText1: "Perhiasan ZAAV G harus ditangani dengan hati-hati.",
    careText2: "Untuk menjaga keindahan perhiasan Anda:",
    careTip1: "Hindari kontak dengan air, parfum, bahan kimia, dan kosmetik",
    careTip2: "Lepas perhiasan sebelum olahraga, berenang, atau tidur",
    careTip3: "Simpan pieces secara terpisah di tempat kering",
    careText3: "Keausan alami seiring waktu tidak dianggap sebagai cacat produksi.",
    ipTitle: "9. Kekayaan Intelektual",
    ipText1: "Semua konten di website ini, termasuk:",
    ipItem1: "Foto",
    ipItem2: "Video",
    ipItem3: "Logo",
    ipItem4: "Desain perhiasan",
    ipItem5: "Teks dan branding",
    ipText2Line1: "Milik ZAAV G dan tidak boleh disalin, direproduksi, didistribusikan, atau digunakan tanpa izin tertulis.",
    ipText2Line2: "Penggunaan tidak sah atas konten atau desain kami dilarang.",
    liabilityTitle: "10. Pembatasan Tanggung Jawab",
    liabilityText1: "ZAAV G tidak bertanggung jawab atas:",
    liabilityExclude1: "Kerusakan tidak langsung atau insidental",
    liabilityExclude2: "Keterlambatan di luar kendali kami",
    liabilityExclude3: "Reaksi alergi yang disebabkan oleh sensitivitas individu",
    liabilityExclude4: "Penyalahgunaan atau penanganan produk yang tidak tepat",
    liabilityText2: "Tanggung jawab maksimum kami tidak melebihi jumlah yang dibayarkan untuk produk yang dibeli.",
    privacyTitle: "11. Privasi",
    privacyTextStart: "Penggunaan website ini juga diatur oleh ",
    privacyTextLink: "Kebijakan Privasi",
    privacyTextEnd: " kami.",
    lawTitle: "12. Hukum yang Berlaku",
    lawText: "Syarat ini diatur dan ditafsirkan sesuai dengan praktik komersial internasional yang berlaku dan hukum lokal jika diperlukan.",
    contactTitle: "13. Informasi Kontak",
    contactIntro: "Untuk pertanyaan apa pun mengenai Syarat ini, silakan hubungi kami:",
    termsBtnCatalog: "Lihat Katalog",
    termsBtnHome: "Beranda",
  },
};

function TermsOfServicePage() {
  const { lang } = useI18n();
  const t = T[lang as Lang] || T.en;

  const scrollToContent = () => {
    const el = document.getElementById("termsContent");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PublicShell>
      <div className="relative w-full min-h-screen bg-white font-sans text-neutral-900 overflow-x-hidden selection:bg-neutral-900 selection:text-white">
        {/* Hero Section */} {/*[cite: 3] */}
        <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center bg-[url('https://cdn.shopify.com/s/files/1/0987/8745/9350/files/IMG_1010.jpg?v=1776287860')] bg-cover bg-center bg-fixed overflow-hidden">
          <div className="absolute inset-0 bg-[#0a140f]/75 z-10" />
          <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
            <h1
              className={`font-bold text-white tracking-[0.15em] uppercase leading-tight mb-10 drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all ${
                lang === "ru"
                  ? "text-2xl sm:text-3xl md:text-4xl" // Reduced size for Russian[cite: 3]
                  : "text-3xl sm:text-4xl md:text-5xl lg:text-7xl"
              }`}
            >
              {t.termsTitle}
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

        {/* Content Section */} {/*[cite: 3] */}
        <div id="termsContent" className="py-24 px-6 md:px-10 lg:px-16 max-w-4xl mx-auto">
          <p className="text-sm text-neutral-500 italic mb-10">{t.termsUpdated}</p>

          <div className="mb-12 space-y-4">
            <p className="text-base sm:text-lg text-neutral-600 leading-[1.9]">{t.termsIntroLine1}</p>
            <p className="text-base sm:text-lg text-neutral-600 leading-[1.9]">{t.termsIntroLine2}</p>
            <p className="text-base sm:text-lg text-neutral-600 leading-[1.9]">{t.termsIntroLine3}</p>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.generalTitle}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.generalText1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.generalText2}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.generalText3}</p>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.productsTitle}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.productsText1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.productsText2}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.productVar1, t.productVar2, t.productVar3].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.productsText3}</p>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.pricingTitle}</h2>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.pricingText1, t.pricingText2, t.pricingText3].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.ordersTitle}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.ordersText1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.ordersText2}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.ordersRight1, t.ordersRight2, t.ordersRight3].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.ordersText3}</p>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.paymentTitle}</h2>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.paymentText1, t.paymentText2].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.paymentText3}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.paymentConfirm1, t.paymentConfirm2].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.shippingTitle}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.shippingText1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.shippingText2}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.shippingVar1, t.shippingVar2, t.shippingVar3, t.shippingVar4].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.shippingText3}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.shippingText4}</p>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.returnsTitle}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.returnsText1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.returnsText2}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.returnsExclude1, t.returnsExclude2, t.returnsExclude3].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.returnsText3}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">
              {t.returnsText4Line1}<br />
              {t.returnsText4Line2}
            </p>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.careTitle}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.careText1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.careText2}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.careTip1, t.careTip2, t.careTip3].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.careText3}</p>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.ipTitle}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.ipText1}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.ipItem1, t.ipItem2, t.ipItem3, t.ipItem4, t.ipItem5].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">
              {t.ipText2Line1}<br />
              {t.ipText2Line2}
            </p>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.liabilityTitle}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.liabilityText1}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.liabilityExclude1, t.liabilityExclude2, t.liabilityExclude3, t.liabilityExclude4].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.liabilityText2}</p>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.privacyTitle}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">
              {t.privacyTextStart}
              <Link to="/privacy-policy" className="text-[#008060] hover:underline">
                {t.privacyTextLink}
              </Link>
              {t.privacyTextEnd}
            </p>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.lawTitle}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.lawText}</p>
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

        {/* Action Buttons Block */} {/*[cite: 3] */}
        <section className="py-16 px-6 bg-white flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 border-t border-neutral-100">
          <Link
            to="/collections"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-sans text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 min-w-[220px] bg-[#1a1a1a] text-white border border-white/20 shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:bg-[#0f0f0f] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,0,0,0.4)]"
          >
            {t.termsBtnCatalog}
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-sans text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 min-w-[220px] bg-transparent text-[#1a1a1a] border-[1.5px] border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white hover:-translate-y-0.5"
          >
            {t.termsBtnHome}
          </Link>
        </section>
      </div>
    </PublicShell>
  );
}