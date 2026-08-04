import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PublicShell } from "@/components/public-shell";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ZAAV G" },
      {
        name: "description",
        content: "ZAAV G Privacy Policy. Learn how we collect, use, protect, and process your personal information.",
      },
      { property: "og:title", content: "Privacy Policy — ZAAV G" },
      { property: "og:description", content: "ZAAV G Privacy Policy. Learn how we collect, use, protect, and process your personal information." },
    ],
  }),
  component: PrivacyPolicyPage,
});

type Lang = "en" | "ru" | "id";

const T: Record<
  Lang,
  {
    privacyTitle: string;
    privacyUpdated: string;
    privacyIntro: string;
    privacyAgreement: string;
    infoCollectTitle: string;
    infoCollectIntro: string;
    infoDirectTitle: string;
    infoFullName: string;
    infoEmail: string;
    infoPhone: string;
    infoAddress: string;
    infoOrder: string;
    infoMessages: string;
    infoPaymentTitle: string;
    infoPaymentText: string;
    infoAutoTitle: string;
    infoAutoIntro: string;
    infoIP: string;
    infoBrowser: string;
    infoDevice: string;
    infoPages: string;
    infoCookies: string;
    useInfoTitle: string;
    useInfoIntro: string;
    useOrders: string;
    useCommunicate: string;
    useSupport: string;
    useImprove: string;
    usePersonalize: string;
    useMarketing: string;
    shareInfoTitle: string;
    shareNoSell: string;
    shareIntro: string;
    shareShopify: string;
    sharePayment: string;
    shareShipping: string;
    shareAnalytics: string;
    shareSecure: string;
    cookiesTitle: string;
    cookiesIntro: string;
    cookiesFunction: string;
    cookiesExperience: string;
    cookiesAnalyze: string;
    cookiesAds: string;
    cookiesDisable: string;
    retentionTitle: string;
    retentionIntro: string;
    retentionFulfill: string;
    retentionLegal: string;
    retentionDisputes: string;
    retentionImprove: string;
    retentionEnd: string;
    rightsTitle: string;
    rightsIntro: string;
    rightAccess: string;
    rightCorrect: string;
    rightDelete: string;
    rightWithdraw: string;
    rightsContact: string;
    securityTitle: string;
    securityIntro: string;
    securitySSL: string;
    securityAccess: string;
    securityPayment: string;
    securityDisclaimer: string;
    thirdPartyTitle: string;
    thirdPartyText: string;
    changesTitle: string;
    changesText: string;
    contactTitle: string;
    contactIntro: string;
    privacyBtnCatalog: string;
    privacyBtnHome: string;
  }
> = {
  en: {
    privacyTitle: "PRIVACY POLICY",
    privacyUpdated: "Last updated: May 2026",
    privacyIntro: "At ZAAV G, we value your trust and treat your personal information with care and respect. This Privacy Policy explains how we collect, use, protect, and process your information when you visit our website or place an order with us.",
    privacyAgreement: "By using this website, you agree to the terms outlined below.",
    infoCollectTitle: "1. Information We Collect",
    infoCollectIntro: "We may collect the following information when you use our website or contact us:",
    infoDirectTitle: "Information you provide directly",
    infoFullName: "Full name",
    infoEmail: "Email address",
    infoPhone: "Phone number",
    infoAddress: "Shipping and billing address",
    infoOrder: "Order details",
    infoMessages: "Messages sent through contact forms, WhatsApp, or email",
    infoPaymentTitle: "Payment Information",
    infoPaymentText: "Payments are processed securely through trusted third-party payment providers. ZAAV G does not store your full credit card or payment details.",
    infoAutoTitle: "Automatically Collected Information",
    infoAutoIntro: "When you visit our website, certain information may be collected automatically, including:",
    infoIP: "IP address",
    infoBrowser: "Browser type",
    infoDevice: "Device information",
    infoPages: "Pages visited and browsing behavior",
    infoCookies: "Cookies and analytics data",
    useInfoTitle: "2. How We Use Your Information",
    useInfoIntro: "We use your information to:",
    useOrders: "Process and deliver orders",
    useCommunicate: "Communicate with you regarding purchases or inquiries",
    useSupport: "Provide customer support",
    useImprove: "Improve our website and services",
    usePersonalize: "Personalize your experience",
    useMarketing: "Send updates, promotions, or newsletters (only if you choose to receive them)",
    shareInfoTitle: "3. Sharing of Information",
    shareNoSell: "We do not sell, rent, or trade your personal information.",
    shareIntro: "Your information may be shared only with trusted third-party services necessary to operate our business, including:",
    shareShopify: "Website platform providers (such as Shopify)",
    sharePayment: "Payment providers (such as Xendit and other payment gateways)",
    shareShipping: "Shipping and logistics companies",
    shareAnalytics: "Analytics and advertising services (such as Google or Meta)",
    shareSecure: "These providers are required to handle your information securely and confidentially.",
    cookiesTitle: "4. Cookies",
    cookiesIntro: "Our website uses cookies and similar technologies to:",
    cookiesFunction: "Ensure proper website functionality",
    cookiesExperience: "Improve user experience",
    cookiesAnalyze: "Analyze website traffic and performance",
    cookiesAds: "Support advertising and marketing activities",
    cookiesDisable: "You can disable cookies through your browser settings at any time.",
    retentionTitle: "5. Data Retention",
    retentionIntro: "We retain personal information only for as long as necessary to:",
    retentionFulfill: "Fulfill orders and provide services",
    retentionLegal: "Comply with legal obligations",
    retentionDisputes: "Resolve disputes and enforce agreements",
    retentionImprove: "Improve customer experience",
    retentionEnd: "After this period, information may be securely deleted or anonymized.",
    rightsTitle: "6. Your Rights",
    rightsIntro: "You have the right to:",
    rightAccess: "Request access to your personal information",
    rightCorrect: "Correct or update your information",
    rightDelete: "Request deletion of your data",
    rightWithdraw: "Withdraw consent for marketing communications at any time",
    rightsContact: "To make a request, please contact us at:",
    securityTitle: "7. Security",
    securityIntro: "We take reasonable technical and organizational measures to protect your information, including:",
    securitySSL: "Secure SSL encryption",
    securityAccess: "Restricted access to personal data",
    securityPayment: "Secure payment processing through certified providers",
    securityDisclaimer: "However, no method of online transmission or storage is completely secure, and we cannot guarantee absolute security.",
    thirdPartyTitle: "8. Third-Party Links",
    thirdPartyText: "Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those external websites.",
    changesTitle: "9. Changes to This Privacy Policy",
    changesText: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated revision date.",
    contactTitle: "10. Contact Information",
    contactIntro: "If you have any questions regarding this Privacy Policy or your personal information, please contact us:",
    privacyBtnCatalog: "View Collections",
    privacyBtnHome: "Home",
  },
  ru: {
    privacyTitle: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ",
    privacyUpdated: "Последнее обновление: май 2026",
    privacyIntro: "В ZAAV G мы ценим ваше доверие и относимся к вашей личной информации с заботой и уважением. Эта Политика конфиденциальности объясняет, как мы собираем, используем, защищаем и обрабатываем вашу информацию, когда вы посещаете наш веб-сайт или оформляете заказ.",
    privacyAgreement: "Используя этот веб-сайт, вы соглашаетесь с условиями, изложенными ниже.",
    infoCollectTitle: "1. Информация, которую мы собираем",
    infoCollectIntro: "Мы можем собирать следующую информацию, когда вы используете наш веб-сайт или связываетесь с нами:",
    infoDirectTitle: "Информация, которую вы предоставляете напрямую",
    infoFullName: "Полное имя",
    infoEmail: "Адрес электронной почты",
    infoPhone: "Номер телефона",
    infoAddress: "Адрес доставки и выставления счетов",
    infoOrder: "Детали заказа",
    infoMessages: "Сообщения, отправленные через контактные формы, WhatsApp или электронную почту",
    infoPaymentTitle: "Платежная информация",
    infoPaymentText: "Платежи обрабатываются безопасно через надежных сторонних провайдеров. ZAAV G не хранит ваши полные данные кредитной карты или платежной информации.",
    infoAutoTitle: "Автоматически собираемая информация",
    infoAutoIntro: "Когда вы посещаете наш веб-сайт, определенная информация может собираться автоматически, включая:",
    infoIP: "IP-адрес",
    infoBrowser: "Тип браузера",
    infoDevice: "Информация об устройстве",
    infoPages: "Посещенные страницы и поведение при просмотре",
    infoCookies: "Данные cookies и аналитики",
    useInfoTitle: "2. Как мы используем вашу информацию",
    useInfoIntro: "Мы используем вашу информацию для:",
    useOrders: "Обработки и доставки заказов",
    useCommunicate: "Связи с вами по вопросам покупок или запросов",
    useSupport: "Предоставления поддержки клиентов",
    useImprove: "Улучшения нашего веб-сайта и услуг",
    usePersonalize: "Персонализации вашего опыта",
    useMarketing: "Отправки обновлений, акций или новостей (только если вы согласились их получать)",
    shareInfoTitle: "3. Передача информации",
    shareNoSell: "Мы не продаем, не сдаем в аренду и не обмениваем вашу личную информацию.",
    shareIntro: "Ваша информация может передаваться только надежным сторонним сервисам, необходимым для ведения нашего бизнеса, включая:",
    shareShopify: "Провайдеры платформ веб-сайтов (например, Shopify)",
    sharePayment: "Платежные провайдеры (например, Xendit и другие платежные шлюзы)",
    shareShipping: "Компании доставки и логистики",
    shareAnalytics: "Сервисы аналитики и рекламы (например, Google или Meta)",
    shareSecure: "Эти провайдеры обязаны обрабатывать вашу информацию безопасно и конфиденциально.",
    cookiesTitle: "4. Cookies",
    cookiesIntro: "Наш веб-сайт использует cookies и аналогичные технологии для:",
    cookiesFunction: "Обеспечения правильной работы веб-сайта",
    cookiesExperience: "Улучшения пользовательского опыта",
    cookiesAnalyze: "Анализа трафика и производительности веб-сайта",
    cookiesAds: "Поддержки рекламной и маркетинговой деятельности",
    cookiesDisable: "Вы можете отключить cookies через настройки браузера в любое время.",
    retentionTitle: "5. Хранение данных",
    retentionIntro: "Мы храним личную информацию только столько, сколько необходимо для:",
    retentionFulfill: "Выполнения заказов и предоставления услуг",
    retentionLegal: "Соблюдения юридических обязательств",
    retentionDisputes: "Разрешения споров и обеспечения выполнения соглашений",
    retentionImprove: "Улучшения обслуживания клиентов",
    retentionEnd: "После этого периода информация может быть безопасно удалена или анонимизирована.",
    rightsTitle: "6. Ваши права",
    rightsIntro: "Вы имеете право:",
    rightAccess: "Запросить доступ к вашей личной информации",
    rightCorrect: "Исправить или обновить вашу информацию",
    rightDelete: "Запросить удаление ваших данных",
    rightWithdraw: "Отозвать согласие на маркетинговые коммуникации в любое время",
    rightsContact: "Чтобы сделать запрос, пожалуйста, свяжитесь с нами:",
    securityTitle: "7. Безопасность",
    securityIntro: "Мы принимаем разумные технические и организационные меры для защиты вашей информации, включая:",
    securitySSL: "Безопасное шифрование SSL",
    securityAccess: "Ограниченный доступ к личным данным",
    securityPayment: "Безопасную обработку платежей через сертифицированных провайдеров",
    securityDisclaimer: "Однако ни один метод онлайн-передачи или хранения данных не является полностью безопасным, и мы не можем гарантировать абсолютную безопасность.",
    thirdPartyTitle: "8. Ссылки на сторонние сайты",
    thirdPartyText: "Наш веб-сайт может содержать ссылки на сторонние веб-сайты или сервисы. Мы не несем ответственности за политику конфиденциальности или контент этих внешних веб-сайтов.",
    changesTitle: "9. Изменения в этой Политике конфиденциальности",
    changesText: "Мы можем время от времени обновлять эту Политику конфиденциальности. Любые изменения будут опубликованы на этой странице с обновленной датой редакции.",
    contactTitle: "10. Контактная информация",
    contactIntro: "Если у вас есть вопросы относительно этой Политики конфиденциальности или вашей личной информации, пожалуйста, свяжитесь с нами:",
    privacyBtnCatalog: "Смотреть коллекции",
    privacyBtnHome: "На главную",
  },
  id: {
    privacyTitle: "KEBIJAKAN PRIVASI",
    privacyUpdated: "Terakhir diperbarui: Mei 2026",
    privacyIntro: "Di ZAAV G, kami menghargai kepercayaan Anda dan memperlakukan informasi pribadi Anda dengan hati-hati dan hormat. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan memproses informasi Anda ketika Anda mengunjungi website kami atau melakukan pemesanan.",
    privacyAgreement: "Dengan menggunakan website ini, Anda menyetujui ketentuan yang diuraikan di bawah.",
    infoCollectTitle: "1. Informasi yang Kami Kumpulkan",
    infoCollectIntro: "Kami dapat mengumpulkan informasi berikut ketika Anda menggunakan website kami atau menghubungi kami:",
    infoDirectTitle: "Informasi yang Anda berikan langsung",
    infoFullName: "Nama lengkap",
    infoEmail: "Alamat email",
    infoPhone: "Nomor telepon",
    infoAddress: "Alamat pengiriman dan penagihan",
    infoOrder: "Detail pesanan",
    infoMessages: "Pesan yang dikirim melalui formulir kontak, WhatsApp, atau email",
    infoPaymentTitle: "Informasi Pembayaran",
    infoPaymentText: "Pembayaran diproses dengan aman melalui penyedia pembayaran pihak ketiga tepercaya. ZAAV G tidak menyimpan detail kartu kredit atau pembayaran lengkap Anda.",
    infoAutoTitle: "Informasi yang Dikumpulkan Secara Otomatis",
    infoAutoIntro: "Ketika Anda mengunjungi website kami, informasi tertentu dapat dikumpulkan secara otomatis, termasuk:",
    infoIP: "Alamat IP",
    infoBrowser: "Jenis browser",
    infoDevice: "Informasi perangkat",
    infoPages: "Halaman yang dikunjungi dan perilaku browsing",
    infoCookies: "Data cookies dan analitik",
    useInfoTitle: "2. Bagaimana Kami Menggunakan Informasi Anda",
    useInfoIntro: "Kami menggunakan informasi Anda untuk:",
    useOrders: "Memproses dan mengirimkan pesanan",
    useCommunicate: "Berkomunikasi dengan Anda mengenai pembelian atau pertanyaan",
    useSupport: "Memberikan dukungan pelanggan",
    useImprove: "Meningkatkan website dan layanan kami",
    usePersonalize: "Mempersonalisasi pengalaman Anda",
    useMarketing: "Mengirim pembaruan, promosi, atau newsletter (hanya jika Anda memilih untuk menerimanya)",
    shareInfoTitle: "3. Pembagian Informasi",
    shareNoSell: "Kami tidak menjual, menyewakan, atau memperdagangkan informasi pribadi Anda.",
    shareIntro: "Informasi Anda hanya dapat dibagikan dengan layanan pihak ketiga tepercaya yang diperlukan untuk mengoperasikan bisnis kami, termasuk:",
    shareShopify: "Penyedia platform website (seperti Shopify)",
    sharePayment: "Penyedia pembayaran (seperti Xendit dan gateway pembayaran lainnya)",
    shareShipping: "Perusahaan pengiriman dan logistik",
    shareAnalytics: "Layanan analitik dan periklanan (seperti Google atau Meta)",
    shareSecure: "Penyedia ini diwajibkan untuk menangani informasi Anda dengan aman dan rahasia.",
    cookiesTitle: "4. Cookies",
    cookiesIntro: "Website kami menggunakan cookies dan teknologi serupa untuk:",
    cookiesFunction: "Memastikan fungsionalitas website yang tepat",
    cookiesExperience: "Meningkatkan pengalaman pengguna",
    cookiesAnalyze: "Menganalisis lalu lintas dan kinerja website",
    cookiesAds: "Mendukung aktivitas periklanan dan pemasaran",
    cookiesDisable: "Anda dapat menonaktifkan cookies melalui pengaturan browser kapan saja.",
    retentionTitle: "5. Retensi Data",
    retentionIntro: "Kami menyimpan informasi pribadi hanya selama yang diperlukan untuk:",
    retentionFulfill: "Memenuhi pesanan dan memberikan layanan",
    retentionLegal: "Mematuhi kewajiban hukum",
    retentionDisputes: "Menyelesaikan sengketa dan menegakkan perjanjian",
    retentionImprove: "Meningkatkan pengalaman pelanggan",
    retentionEnd: "Setelah periode ini, informasi dapat dihapus atau dianonimkan dengan aman.",
    rightsTitle: "6. Hak Anda",
    rightsIntro: "Anda memiliki hak untuk:",
    rightAccess: "Meminta akses ke informasi pribadi Anda",
    rightCorrect: "Memperbaiki atau memperbarui informasi Anda",
    rightDelete: "Meminta penghapusan data Anda",
    rightWithdraw: "Menarik persetujuan untuk komunikasi pemasaran kapan saja",
    rightsContact: "Untuk membuat permintaan, silakan hubungi kami di:",
    securityTitle: "7. Keamanan",
    securityIntro: "Kami mengambil langkah teknis dan organisasi yang wajar untuk melindungi informasi Anda, termasuk:",
    securitySSL: "Enkripsi SSL yang aman",
    securityAccess: "Akses terbatas ke data pribadi",
    securityPayment: "Pemrosesan pembayaran yang aman melalui penyedia bersertifikat",
    securityDisclaimer: "Namun, tidak ada metode transmisi atau penyimpanan online yang sepenuhnya aman, dan kami tidak dapat menjamin keamanan absolut.",
    thirdPartyTitle: "8. Tautan Pihak Ketiga",
    thirdPartyText: "Website kami mungkin berisi tautan ke website atau layanan pihak ketiga. Kami tidak bertanggung jawab atas praktik privasi atau konten website eksternal tersebut.",
    changesTitle: "9. Perubahan pada Kebijakan Privasi Ini",
    changesText: "Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Setiap perubahan akan diposting di halaman ini dengan tanggal revisi yang diperbarui.",
    contactTitle: "10. Informasi Kontak",
    contactIntro: "Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini atau informasi pribadi Anda, silakan hubungi kami:",
    privacyBtnCatalog: "Lihat Katalog",
    privacyBtnHome: "Beranda",
  },
};

function PrivacyPolicyPage() {
  const { lang } = useI18n();
  const t = T[lang as Lang] || T.en;

  const scrollToContent = () => {
    const el = document.getElementById("privacyContent");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PublicShell>
      <div className="relative w-full min-h-screen bg-white font-sans text-neutral-900 overflow-x-hidden selection:bg-neutral-900 selection:text-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center bg-[url('/HeroImg.webp')] bg-cover bg-center bg-fixed overflow-hidden">
          <div className="absolute inset-0 bg-[#0a140f]/75 z-10" />
          <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
            <h1
              className={`font-bold text-white tracking-[0.15em] uppercase leading-tight mb-10 drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all ${
                lang === "ru"
                  ? "text-2xl sm:text-3xl md:text-4xl" // Reduced size for Russian[cite: 1]
                  : "text-3xl sm:text-4xl md:text-5xl lg:text-7xl"
              }`}
            >
              {t.privacyTitle}
            </h1>
            <div
              onClick={scrollToContent}
              className="w-10 h-10 border-2 border-white/60 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 animate-bounce mx-auto mt-8 hover:border-white hover:-translate-y-1"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none stroke-[2]">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div id="privacyContent" className="py-24 px-6 md:px-10 lg:px-16 max-w-4xl mx-auto">
          <p className="text-sm text-neutral-500 italic mb-10">{t.privacyUpdated}</p>

          <div className="mb-12 space-y-4">
            <p className="text-base sm:text-lg text-neutral-600 leading-[1.9]">{t.privacyIntro}</p>
            <p className="text-base sm:text-lg text-neutral-600 leading-[1.9]">{t.privacyAgreement}</p>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.infoCollectTitle}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.infoCollectIntro}</p>

            <p className="text-base text-neutral-900 font-semibold mt-6">{t.infoDirectTitle}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.infoFullName, t.infoEmail, t.infoPhone, t.infoAddress, t.infoOrder, t.infoMessages].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-base text-neutral-900 font-semibold mt-6">{t.infoPaymentTitle}</p>
            <p className="text-base text-neutral-600 leading-[1.9] mb-6">{t.infoPaymentText}</p>

            <p className="text-base text-neutral-900 font-semibold mt-6">{t.infoAutoTitle}</p>
            <p className="text-base text-neutral-600 leading-[1.9] mt-2">{t.infoAutoIntro}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.infoIP, t.infoBrowser, t.infoDevice, t.infoPages, t.infoCookies].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.useInfoTitle}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.useInfoIntro}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.useOrders, t.useCommunicate, t.useSupport, t.useImprove, t.usePersonalize, t.useMarketing].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.shareInfoTitle}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.shareNoSell}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.shareIntro}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.shareShopify, t.sharePayment, t.shareShipping, t.shareAnalytics].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.shareSecure}</p>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.cookiesTitle}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.cookiesIntro}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.cookiesFunction, t.cookiesExperience, t.cookiesAnalyze, t.cookiesAds].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.cookiesDisable}</p>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.retentionTitle}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.retentionIntro}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.retentionFulfill, t.retentionLegal, t.retentionDisputes, t.retentionImprove].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.retentionEnd}</p>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.rightsTitle}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.rightsIntro}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.rightAccess, t.rightCorrect, t.rightDelete, t.rightWithdraw].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <div className="text-base text-neutral-600 leading-[1.9] mt-4">
              <span className="font-semibold text-neutral-900">{t.rightsContact}</span><br />
              📩 <a href="mailto:zaavg.bali@gmail.com" className="text-[#008060] hover:underline">zaavg.bali@gmail.com</a>
            </div>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.securityTitle}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.securityIntro}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.securitySSL, t.securityAccess, t.securityPayment].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.securityDisclaimer}</p>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.thirdPartyTitle}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.thirdPartyText}</p>
          </div>

          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.changesTitle}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.changesText}</p>
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
            {t.privacyBtnCatalog}
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-sans text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 min-w-[220px] bg-transparent text-[#1a1a1a] border-[1.5px] border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white hover:-translate-y-0.5"
          >
            {t.privacyBtnHome}
          </Link>
        </section>
      </div>
    </PublicShell>
  );
}