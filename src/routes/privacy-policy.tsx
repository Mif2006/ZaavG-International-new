import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PublicShell } from "@/components/public-shell";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ZAAV G" },
      {
        name: "description",
        content: "ZAAV G Privacy Policy. Learn how WIN WIN SILVER operating under ZAAV G collects, uses, and protects your personal information.",
      },
      { property: "og:title", content: "Privacy Policy — ZAAV G" },
      { property: "og:description", content: "ZAAV G Privacy Policy. Learn how WIN WIN SILVER operating under ZAAV G collects, uses, and protects your personal information." },
    ],
  }),
  component: PrivacyPolicyPage,
});

type Lang = "en" | "ru" | "id";

const T = {
  en: {
    privacyTitle: "PRIVACY POLICY",
    privacyTitleSmall: "PRIVACY POLICY",
    privacyUpdated: "Last updated: August 2026",
    intro1: "At ZAAV G, we value your trust and are committed to handling your personal information responsibly and transparently.",
    intro2: "This website, zaavgbali.com, is operated by WIN WIN SILVER, an Indonesian-registered business operating under the commercial brand ZAAV G.",
    intro3: "Throughout this Privacy Policy, “ZAAV G,” “we,” “us,” and “our” refer to WIN WIN SILVER operating under the ZAAV G brand.",
    intro4: "This Privacy Policy explains how we collect, use, store, disclose, and protect personal information when you visit our website, place an order, contact us, or otherwise interact with our services.",
    
    // Section 1
    s1Title: "1. Information We Collect",
    s1Intro: "Depending on how you interact with us, we may collect the following categories of personal information.",
    s1DirectTitle: "Information You Provide Directly",
    s1DirectIntro: "This may include:",
    s1DirectItems: [
      "full name;",
      "email address;",
      "telephone number;",
      "shipping and billing address;",
      "order and purchase information;",
      "product preferences or sizing information provided in connection with an order;",
      "messages and information you send through our website, WhatsApp, email, or other communication channels.",
    ],
    s1PaymentTitle: "Payment Information",
    s1Payment1: "Payments are processed through authorized third-party payment service providers.",
    s1Payment2: "WIN WIN SILVER / ZAAV G does not store complete payment card details on its own systems.",
    s1Payment3: "Payment providers may collect and process information necessary to authorize, authenticate, and complete your transaction in accordance with their own privacy policies and legal obligations.",
    s1AutoTitle: "Information Collected Automatically",
    s1AutoIntro: "When you visit zaavgbali.com, certain technical information may be collected automatically, including:",
    s1AutoItems: [
      "IP address;",
      "browser and device information;",
      "operating system;",
      "pages viewed and interactions with the website;",
      "referring website or source;",
      "approximate location derived from technical information;",
      "cookie identifiers and similar technologies;",
      "analytics and website performance information.",
    ],

    // Section 2
    s2Title: "2. How We Use Your Information",
    s2Intro: "We may use personal information where necessary to:",
    s2Items: [
      "process, fulfill, and deliver orders;",
      "process payments and refunds;",
      "communicate with you about your purchases;",
      "respond to questions and provide customer support;",
      "arrange shipping and international delivery;",
      "prevent fraud, unauthorized transactions, and misuse of our services;",
      "maintain the security and functionality of our website;",
      "improve our products, website, and customer experience;",
      "comply with accounting, tax, regulatory, and other legal obligations;",
      "establish, exercise, or defend legal claims;",
      "send marketing communications where you have consented to receive them or where otherwise permitted by applicable law.",
    ],
    s2Outro: "You may unsubscribe from marketing communications at any time.",

    // Section 3
    s3Title: "3. How We Share Personal Information",
    s3Intro1: "We do not sell or rent your personal information.",
    s3Intro2: "We may share personal information with third parties where reasonably necessary to operate our business and provide our services, including:",
    s3Items: [
      "payment processors and payment gateways;",
      "banks and financial institutions involved in processing transactions;",
      "website hosting, infrastructure, and technology providers;",
      "shipping, courier, fulfillment, and logistics providers;",
      "analytics and website performance providers;",
      "advertising and marketing platforms where applicable;",
      "professional advisers, accountants, or service providers where necessary;",
      "government authorities, regulators, courts, or law enforcement where disclosure is required by law.",
    ],
    s3Para1: "Our website infrastructure may use services provided by Vercel and other technology providers.",
    s3Para2: "Payment transactions may be processed by payment providers selected by WIN WIN SILVER. Each provider may process personal information in accordance with its own privacy policy and applicable legal obligations.",
    s3Para3: "We share only the information reasonably necessary for the relevant service or legal purpose.",

    // Section 4
    s4Title: "4. International Data Processing",
    s4Para1: "ZAAV G serves customers internationally. As a result, personal information may be processed or transferred outside your country of residence, including where our technology providers, payment processors, shipping partners, or other service providers operate internationally.",
    s4Para2: "Where required by applicable law, we take reasonable steps to ensure that appropriate safeguards are used when personal information is transferred internationally.",

    // Section 5
    s5Title: "5. Cookies & Similar Technologies",
    s5Intro: "Our website may use cookies and similar technologies to:",
    s5Items: [
      "provide essential website functionality;",
      "remember preferences;",
      "maintain shopping and website functions;",
      "understand how visitors use the website;",
      "analyze website traffic and performance;",
      "improve our services;",
      "support advertising and marketing activities where applicable.",
    ],
    s5Para1: "Some cookies may be provided by third-party services.",
    s5Para2: "Where required by applicable law, non-essential cookies will be used based on your consent.",
    s5Para3: "You may also control or delete cookies through your browser settings. Disabling certain cookies may affect some website functionality.",

    // Section 6
    s6Title: "6. Data Retention",
    s6Intro: "We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including to:",
    s6Items: [
      "fulfill orders and provide customer service;",
      "maintain transaction and business records;",
      "comply with accounting, tax, regulatory, and legal requirements;",
      "prevent fraud and resolve disputes;",
      "enforce our agreements and protect our legal rights.",
    ],
    s6Para1: "Retention periods may therefore differ depending on the type of information and applicable legal requirements.",
    s6Para2: "When personal information is no longer reasonably required, it may be securely deleted or anonymized, subject to applicable law.",

    // Section 7
    s7Title: "7. Your Privacy Rights",
    s7Intro: "Depending on where you live and the laws applicable to you, you may have rights relating to your personal information, including the right to:",
    s7Items: [
      "request information about personal data we hold about you;",
      "request access to your personal information;",
      "request correction of inaccurate or incomplete information;",
      "request deletion of personal information in certain circumstances;",
      "withdraw consent where processing is based on consent;",
      "object to or request restriction of certain processing where applicable;",
      "unsubscribe from marketing communications;",
      "exercise other privacy rights provided by applicable law.",
    ],
    s7Para1: "These rights may be subject to legal limitations. For example, we may need to retain certain transaction information to comply with tax, accounting, fraud-prevention, or other legal obligations.",
    s7Contact: "To submit a privacy request, please contact us at ",
    s7Para2: "We may need to verify your identity before completing certain requests.",

    // Section 8
    s8Title: "8. Data Security",
    s8Intro1: "We use reasonable technical and organizational measures designed to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure.",
    s8Intro2: "These measures may include:",
    s8Items: [
      "encrypted website connections;",
      "restricted access to personal information;",
      "reputable infrastructure and service providers;",
      "secure third-party payment processing;",
      "appropriate account and access controls.",
    ],
    s8Para1: "However, no electronic transmission or storage system can be guaranteed to be completely secure.",

    // Section 9
    s9Title: "9. Third-Party Services & Links",
    s9Para1: "Our website may contain links to third-party websites or use services provided by third parties.",
    s9Para2: "Those third parties operate under their own terms and privacy policies. WIN WIN SILVER / ZAAV G is not responsible for the privacy practices of independent third-party websites or services.",
    s9Para3: "We encourage you to review the relevant privacy policies when interacting with third-party services.",

    // Section 10
    s10Title: "10. Children's Privacy",
    s10Para1: "Our website and products are not specifically directed to children.",
    s10Para2: "We do not knowingly collect personal information from children where parental or guardian consent is legally required.",
    s10Para3: "If you believe that a child has provided personal information to us in circumstances where such information should not have been collected, please contact us.",

    // Section 11
    s11Title: "11. Changes to This Privacy Policy",
    s11Para1: "We may update this Privacy Policy from time to time to reflect changes in our services, technology, business practices, payment providers, or legal requirements.",
    s11Para2: "The current version will be published on this page together with the “Last updated” date.",

    // Section 12
    s12Title: "12. Governing Privacy Law",
    s12Para1: "WIN WIN SILVER is established in Indonesia and processes personal information in accordance with applicable Indonesian data protection requirements.",
    s12Para2: "Where customers in other jurisdictions are entitled to mandatory privacy rights under applicable law, we will respect those rights to the extent required.",

    // Section 13 / Contact Card
    s13Title: "13. Contact Information",
    s13Intro: "If you have questions about this Privacy Policy, how we process your personal information, or wish to exercise a privacy right, please contact:",
    s13Legal: "Operating under the brand ZAAV G",
    s13Location: "Bali, Indonesia",
    
    privacyBtnCatalog: "View Collections",
    privacyBtnHome: "Home",
  },
  ru: {
    privacyTitle: "Политика конфиденциальности",
    privacyTitleSmall: "Политика конфиденциальности",
    privacyUpdated: "Последнее обновление: август 2026 г.",
    intro1: "В ZAAV G мы ценим ваше доверие и стремимся ответственно и прозрачно относиться к обработке вашей персональной информации.",
    intro2: "Сайт zaavgbali.com управляется компанией WIN WIN SILVER, зарегистрированной в Индонезии и осуществляющей деятельность под коммерческим брендом ZAAV G.",
    intro3: "В настоящей Политике конфиденциальности термины «ZAAV G», «мы», «нас» и «наш» относятся к WIN WIN SILVER, осуществляющей деятельность под брендом ZAAV G.",
    intro4: "Настоящая Политика конфиденциальности объясняет, каким образом мы собираем, используем, храним, передаем и защищаем персональную информацию, когда вы посещаете наш сайт, оформляете заказ, связываетесь с нами или иным образом пользуетесь нашими услугами.",
    
    s1Title: "1. Какую информацию мы собираем",
    s1Intro: "В зависимости от того, каким образом вы взаимодействуете с нами, мы можем собирать следующие категории персональной информации.",
    s1DirectTitle: "Информация, которую вы предоставляете непосредственно",
    s1DirectIntro: "Она может включать:",
    s1DirectItems: [
      "имя и фамилию;",
      "адрес электронной почты;",
      "номер телефона;",
      "адрес доставки и платежный адрес;",
      "информацию о заказах и покупках;",
      "информацию о предпочтениях в отношении товаров или размерах, предоставленную в связи с оформлением заказа;",
      "сообщения и информацию, которые вы отправляете нам через сайт, WhatsApp, электронную почту или другие каналы связи.",
    ],
    s1PaymentTitle: "Платежная информация",
    s1Payment1: "Платежи обрабатываются уполномоченными сторонними платежными провайдерами.",
    s1Payment2: "WIN WIN SILVER / ZAAV G не хранит полные данные банковских карт в собственных системах.",
    s1Payment3: "Платежные провайдеры могут собирать и обрабатывать информацию, необходимую для авторизации, подтверждения и проведения вашей транзакции, в соответствии с собственными политиками конфиденциальности и применимыми законодательными требованиями.",
    s1AutoTitle: "Информация, собираемая автоматически",
    s1AutoIntro: "При посещении zaavgbali.com определенная техническая информация может собираться автоматически, включая:",
    s1AutoItems: [
      "IP-адрес;",
      "информацию о браузере и устройстве;",
      "информацию об операционной системе;",
      "сведения о просмотренных страницах и взаимодействии с сайтом;",
      "информацию о сайте или источнике, с которого вы перешли на наш сайт;",
      "приблизительное местоположение, определяемое на основании технической информации;",
      "идентификаторы файлов cookie и аналогичных технологий;",
      "аналитические данные и информацию о работе сайта.",
    ],

    s2Title: "2. Как мы используем вашу информацию",
    s2Intro: "Мы можем использовать персональную информацию в той мере, в которой это необходимо для следующих целей:",
    s2Items: [
      "обработки, выполнения и доставки заказов;",
      "обработки платежей и возврата денежных средств;",
      "связи с вами по вопросам ваших покупок;",
      "ответа на вопросы и предоставления клиентской поддержки;",
      "организации доставки, в том числе международной;",
      "предотвращения мошенничества, несанкционированных транзакций и неправомерного использования наших услуг;",
      "обеспечения безопасности и надлежащей работы нашего сайта;",
      "улучшения наших товаров, сайта и качества обслуживания покупателей;",
      "выполнения требований бухгалтерского, налогового, нормативного и иного законодательства;",
      "предъявления, осуществления или защиты юридических требований;",
      "отправки маркетинговых сообщений, если вы дали согласие на их получение либо если такая отправка допускается применимым законодательством.",
    ],
    s2Outro: "Вы можете в любое время отказаться от получения маркетинговых сообщений.",

    s3Title: "3. Передача персональной информации третьим лицам",
    s3Intro1: "Мы не продаем и не передаем в аренду вашу персональную информацию.",
    s3Intro2: "Мы можем передавать персональную информацию третьим лицам в случаях, когда это обоснованно необходимо для ведения нашей деятельности и предоставления услуг, в том числе:",
    s3Items: [
      "платежным системам и платежным провайдерам;",
      "банкам и финансовым учреждениям, участвующим в обработке транзакций;",
      "поставщикам услуг хостинга, инфраструктуры и технологических решений;",
      "транспортным, курьерским, логистическим компаниям и партнерам, участвующим в выполнении и доставке заказов;",
      "поставщикам аналитических сервисов и инструментов для оценки работы сайта;",
      "рекламным и маркетинговым платформам, когда это применимо;",
      "профессиональным консультантам, бухгалтерам и другим поставщикам услуг, когда это необходимо;",
      "государственным органам, регулирующим органам, судам или правоохранительным органам, если раскрытие информации требуется законодательством.",
    ],
    s3Para1: "Инфраструктура нашего сайта может использовать услуги компании Vercel и других поставщиков технологических решений.",
    s3Para2: "Платежные операции могут обрабатываться платежными провайдерами, выбранными WIN WIN SILVER. Каждый такой провайдер может обрабатывать персональную информацию в соответствии с собственной политикой конфиденциальности и применимыми законодательными требованиями.",
    s3Para3: "Мы передаем только ту информацию, которая обоснованно необходима для предоставления соответствующей услуги или выполнения требований законодательства.",

    s4Title: "4. Международная обработка и передача данных",
    s4Para1: "ZAAV G работает с покупателями из разных стран мира. В связи с этим персональная информация может обрабатываться или передаваться за пределы страны вашего проживания, в том числе в случаях, когда наши технологические провайдеры, платежные системы, партнеры по доставке или другие поставщики услуг осуществляют деятельность в разных странах.",
    s4Para2: "Если это предусмотрено применимым законодательством, мы принимаем разумные меры для обеспечения надлежащей защиты персональной информации при ее международной передаче.",

    s5Title: "5. Файлы cookie и аналогичные технологии",
    s5Intro: "Наш сайт может использовать файлы cookie и аналогичные технологии для следующих целей:",
    s5Items: [
      "обеспечения основных функций сайта;",
      "сохранения пользовательских настроек и предпочтений;",
      "обеспечения работы корзины и других функций сайта;",
      "понимания того, как посетители используют сайт;",
      "анализа посещаемости и производительности сайта;",
      "улучшения наших услуг;",
      "поддержки рекламной и маркетинговой деятельности, когда это применимо.",
    ],
    s5Para1: "Некоторые файлы cookie могут предоставляться сторонними сервисами.",
    s5Para2: "В случаях, когда это предусмотрено применимым законодательством, необязательные файлы cookie будут использоваться только с вашего согласия.",
    s5Para3: "Вы также можете управлять файлами cookie или удалять их через настройки вашего браузера. Отключение некоторых файлов cookie может повлиять на работу отдельных функций сайта.",

    s6Title: "6. Срок хранения данных",
    s6Intro: "Мы храним персональную информацию только в течение срока, обоснованно необходимого для целей, ради которых она была собрана, в том числе для:",
    s6Items: [
      "выполнения заказов и предоставления клиентской поддержки;",
      "хранения информации о транзакциях и деловой документации;",
      "соблюдения бухгалтерских, налоговых, нормативных и иных законодательных требований;",
      "предотвращения мошенничества и разрешения споров;",
      "обеспечения исполнения наших соглашений и защиты наших законных прав.",
    ],
    s6Para1: "Таким образом, сроки хранения могут различаться в зависимости от вида информации и применимых законодательных требований.",
    s6Para2: "Когда необходимость в хранении персональной информации отпадает, она может быть безопасно удалена или обезличена в соответствии с требованиями применимого законодательства.",

    s7Title: "7. Ваши права в отношении персональных данных",
    s7Intro: "В зависимости от страны вашего проживания и применимого к вам законодательства вы можете обладать определенными правами в отношении своей персональной информации, включая право:",
    s7Items: [
      "запросить информацию о персональных данных, которые мы храним о вас;",
      "получить доступ к своей персональной информации;",
      "потребовать исправления неточной или неполной информации;",
      "потребовать удаления персональной информации в определенных случаях;",
      "отозвать согласие, если обработка информации осуществляется на основании вашего согласия;",
      "возразить против определенных видов обработки или потребовать их ограничения, когда такое право предусмотрено законодательством;",
      "отказаться от получения маркетинговых сообщений;",
      "воспользоваться иными правами в отношении персональных данных, предусмотренными применимым законодательством.",
    ],
    s7Para1: "Осуществление этих прав может быть ограничено требованиями законодательства. Например, мы можем быть обязаны хранить определенную информацию о транзакциях для выполнения налоговых и бухгалтерских требований, предотвращения мошенничества или исполнения иных юридических обязательств.",
    s7Contact: "Чтобы направить запрос, связанный с вашей персональной информацией, пожалуйста, свяжитесь с нами по электронной почте ",
    s7Para2: "Перед выполнением некоторых запросов нам может потребоваться подтвердить вашу личность.",

    s8Title: "8. Безопасность данных",
    s8Intro1: "Мы применяем разумные технические и организационные меры, направленные на защиту персональной информации от несанкционированного доступа, утраты, неправомерного использования, изменения или раскрытия.",
    s8Intro2: "Такие меры могут включать:",
    s8Items: [
      "использование защищенного и зашифрованного соединения с сайтом;",
      "ограничение доступа к персональной информации;",
      "использование надежных поставщиков инфраструктурных и иных услуг;",
      "безопасную обработку платежей сторонними платежными провайдерами;",
      "надлежащие средства контроля учетных записей и доступа.",
    ],
    s8Para1: "При этом ни один способ электронной передачи или хранения данных не может гарантировать абсолютную безопасность.",

    s9Title: "9. Сторонние сервисы и ссылки",
    s9Para1: "Наш сайт может содержать ссылки на сторонние сайты или использовать услуги, предоставляемые третьими лицами.",
    s9Para2: "Такие третьи лица действуют в соответствии с собственными условиями использования и политиками конфиденциальности. WIN WIN SILVER / ZAAV G не несет ответственности за порядок обработки персональной информации независимыми сторонними сайтами или сервисами.",
    s9Para3: "Мы рекомендуем ознакомиться с соответствующими политиками конфиденциальности при использовании сторонних сервисов.",

    s10Title: "10. Конфиденциальность детей",
    s10Para1: "Наш сайт и товары не предназначены специально для детей.",
    s10Para2: "Мы сознательно не собираем персональную информацию детей в случаях, когда для такого сбора законодательством требуется согласие родителя или законного представителя.",
    s10Para3: "Если вы считаете, что ребенок предоставил нам персональную информацию при обстоятельствах, когда такая информация не должна была быть собрана, пожалуйста, свяжитесь с нами.",

    s11Title: "11. Изменения Политики конфиденциальности",
    s11Para1: "Мы можем время от времени обновлять настоящую Политику конфиденциальности в связи с изменениями в наших услугах, технологиях, деловых процессах, используемых платежных системах или законодательных требованиях.",
    s11Para2: "Актуальная версия Политики будет опубликована на этой странице с указанием даты последнего обновления.",

    s12Title: "12. Применимое законодательство о защите персональных данных",
    s12Para1: "WIN WIN SILVER зарегистрирована в Индонезии и обрабатывает персональную информацию в соответствии с применимыми требованиями законодательства Индонезии о защите персональных данных.",
    s12Para2: "Если законодательство других юрисдикций предоставляет покупателям обязательные права в отношении конфиденциальности и защиты персональных данных, мы соблюдаем такие права в той мере, в которой это требуется применимым законодательством.",

    s13Title: "13. Контактная информация",
    s13Intro: "Если у вас есть вопросы о настоящей Политике конфиденциальности, порядке обработки вашей персональной информации или вы хотите воспользоваться своими правами в отношении персональных данных, пожалуйста, свяжитесь с нами:",
    s13Legal: "Работает под брендом ZAAV G",
    s13Location: "Бали, Индонезия",

    privacyBtnCatalog: "Смотреть коллекции",
    privacyBtnHome: "На главную",
  },
  id: {
    privacyTitle: "KEBIJAKAN PRIVASI",
    privacyTitleSmall: "KEBIJAKAN PRIVASI",
    intro1: "Di ZAAV G, kami menghargai kepercayaan Anda dan berkomitmen untuk mengelola informasi pribadi Anda secara bertanggung jawab dan transparan.",
    intro2: "Website ini, zaavgbali.com, dioperasikan oleh WIN WIN SILVER, bisnis terdaftar di Indonesia yang beroperasi di bawah merek komersial ZAAV G.",
    intro3: "Dalam Kebijakan Privasi ini, “ZAAV G,” “kami,” dan “milik kami” mengacu pada WIN WIN SILVER yang beroperasi di bawah merek ZAAV G.",
    intro4: "Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, mengungkapkan, dan melindungi informasi pribadi saat Anda mengunjungi website kami, melakukan pemesanan, atau menghubungi kami.",

    s1Title: "1. Informasi yang Kami Kumpulkan",
    s1Intro: "Tergantung bagaimana Anda berinteraksi dengan kami, kami dapat mengumpulkan kategori informasi pribadi berikut.",
    s1DirectTitle: "Informasi yang Anda Berikan Secara Langsung",
    s1DirectIntro: "Ini dapat mencakup:",
    s1DirectItems: [
      "nama lengkap;",
      "alamat email;",
      "nomor telepon;",
      "alamat pengiriman dan penagihan;",
      "informasi pesanan dan pembelian;",
      "preferensi produk atau informasi ukuran;",
      "pesan yang Anda kirimkan melalui website, WhatsApp, email, atau saluran komunikasi lainnya.",
    ],
    s1PaymentTitle: "Informasi Pembayaran",
    s1Payment1: "Pembayaran diproses melalui penyedia layanan pembayaran pihak ketiga yang resmi.",
    s1Payment2: "WIN WIN SILVER / ZAAV G tidak menyimpan rincian lengkap kartu pembayaran di sistemnya sendiri.",
    s1Payment3: "Penyedia pembayaran dapat mengumpulkan dan memproses informasi yang diperlukan untuk mengotorisasi dan menyelesaikan transaksi Anda.",
    s1AutoTitle: "Informasi yang Dikumpulkan Secara Otomatis",
    s1AutoIntro: "Saat Anda mengunjungi zaavgbali.com, informasi teknis tertentu dapat dikumpulkan secara otomatis, termasuk:",
    s1AutoItems: [
      "alamat IP;",
      "informasi browser dan perangkat;",
      "sistem operasi;",
      "halaman yang dilihat dan interaksi dengan website;",
      "sumber rujukan;",
      "perkiraan lokasi;",
      "pengenal cookie dan teknologi serupa;",
      "analitik dan performa website.",
    ],

    s2Title: "2. Bagaimana Kami Menggunakan Informasi Anda",
    s2Intro: "Kami dapat menggunakan informasi pribadi untuk:",
    s2Items: [
      "memproses dan mengirimkan pesanan;",
      "memproses pembayaran dan pengembalian dana;",
      "berkomunikasi mengenai pembelian Anda;",
      "memberikan dukungan pelanggan;",
      "mengatur pengiriman internasional;",
      "mencegah penipuan dan penyalahgunaan layanan;",
      "menjaga keamanan dan fungsionalitas website;",
      "meningkatkan produk dan pengalaman pelanggan;",
      "memenuhi kewajiban hukum dan perpajakan;",
      "melindungi hak-hak hukum;",
      "mengirimkan komunikasi pemasaran jika disetujui.",
    ],
    s2Outro: "Anda dapat berhenti berlangganan komunikasi pemasaran kapan saja.",

    s3Title: "3. Pembagian Informasi Pribadi",
    s3Intro1: "Kami tidak menjual atau menyewakan informasi pribadi Anda.",
    s3Intro2: "Kami dapat membagikan informasi pribadi dengan pihak ketiga jika diperlukan untuk operasional bisnis:",
    s3Items: [
      "pemroses dan gateway pembayaran;",
      "bank dan lembaga keuangan;",
      "penyedia hosting dan teknologi;",
      "perusahaan kurir dan logistik;",
      "penyedia analitik;",
      "platform pemasaran jika berlaku;",
      "penasihat profesional;",
      "otoritas pemerintah jika diwajibkan oleh hukum.",
    ],
    s3Para1: "Infrastruktur website kami dapat menggunakan layanan dari Vercel dan penyedia teknologi lainnya.",
    s3Para2: "Transaksi pembayaran diproses oleh penyedia pembayaran yang dipilih oleh WIN WIN SILVER.",
    s3Para3: "Kami hanya membagikan informasi yang diperlukan secara wajar.",

    s4Title: "4. Pemrosesan Data Internasional",
    s4Para1: "ZAAV G melayani pelanggan secara internasional. Informasi pribadi Anda dapat diproses atau ditransfer ke luar negara tempat tinggal Anda.",
    s4Para2: "Jika diwajibkan oleh hukum, kami mengambil langkah-langkah yang wajar untuk memastikan perlindungan data yang memadai.",

    s5Title: "5. Cookie & Teknologi Serupa",
    s5Intro: "Website kami dapat menggunakan cookie untuk:",
    s5Items: [
      "menyediakan fungsionalitas utama website;",
      "mengingat preferensi;",
      "menjaga fungsi keranjang belanja;",
      "menganalisis lalu lintas dan performa;",
      "meningkatkan layanan kami;",
      "mendukung aktivitas pemasaran.",
    ],
    s5Para1: "Beberapa cookie disediakan oleh layanan pihak ketiga.",
    s5Para2: "Cookie non-esensial digunakan berdasarkan persetujuan Anda.",
    s5Para3: "Anda dapat mengatur cookie melalui pengaturan browser Anda.",

    s6Title: "6. Retensi Data",
    s6Intro: "Kami menyimpan informasi pribadi hanya selama yang diperlukan untuk:",
    s6Items: [
      "memenuhi pesanan dan layanan pelanggan;",
      "menyimpan catatan bisnis dan hukum;",
      "mencegah penipuan;",
      "menegakkan hak hukum.",
    ],
    s6Para1: "Periode retensi dapat berbeda tergantung pada jenis informasi dan hukum yang berlaku.",
    s6Para2: "Setelah tidak diperlukan, data akan dihapus atau dianonimkan dengan aman.",

    s7Title: "7. Hak Privasi Anda",
    s7Intro: "Tergantung pada lokasi Anda, Anda dapat memiliki hak privasi termasuk:",
    s7Items: [
      "meminta informasi tentang data yang kami simpan;",
      "meminta akses ke data pribadi Anda;",
      "meminta koreksi data yang tidak akurat;",
      "meminta penghapusan data;",
      "menarik persetujuan pemrosesan data;",
      "berhenti berlangganan komunikasi pemasaran.",
    ],
    s7Para1: "Hak-hak ini dapat tunduk pada batasan hukum (seperti penyimpanan catatan pajak).",
    s7Contact: "Untuk mengajukan permintaan privasi, silakan hubungi kami di ",
    s7Para2: "Kami mungkin perlu memverifikasi identitas Anda sebelum memproses permintaan.",

    s8Title: "8. Keamanan Data",
    s8Intro1: "Kami menggunakan langkah-langkah teknis dan organisasi yang wajar untuk melindungi informasi pribadi Anda.",
    s8Intro2: "Langkah-langkah ini meliputi:",
    s8Items: [
      "koneksi website terenkripsi (SSL);",
      "akses terbatas ke data pribadi;",
      "infrastruktur terpercaya;",
      "pemrosesan pembayaran yang aman.",
    ],
    s8Para1: "Namun, tidak ada sistem transmisi atau penyimpanan elektronik yang 100% aman.",

    s9Title: "9. Tautan & Layanan Pihak Ketiga",
    s9Para1: "Website kami mungkin berisi tautan ke layanan pihak ketiga.",
    s9Para2: "WIN WIN SILVER / ZAAV G tidak bertanggung jawab atas praktik privasi pihak ketiga tersebut.",
    s9Para3: "Kami menyarankan Anda untuk membaca kebijakan privasi mereka secara mandiri.",

    s10Title: "10. Privasi Anak-Anak",
    s10Para1: "Website dan produk kami tidak ditujukan secara khusus untuk anak-anak.",
    s10Para2: "Kami tidak secara sengaja mengumpulkan informasi pribadi dari anak-anak.",
    s10Para3: "Jika Anda percaya anak telah memberikan informasi pribadi kepada kami, silakan hubungi kami.",

    s11Title: "11. Perubahan Kebijakan Privasi Ini",
    s11Para1: "Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu.",
    s11Para2: "Versi terbaru akan dipublikasikan di halaman ini beserta tanggal perbaruannya.",

    s12Title: "12. Hukum Privasi yang Mengatur",
    s12Para1: "WIN WIN SILVER didirikan di Indonesia dan memproses data sesuai dengan hukum perlindungan data Indonesia.",
    s12Para2: "Kami akan menghormati hak-hak privasi wajib bagi pelanggan dari yurisdiksi lain sesuai ketentuan hukum.",

    s13Title: "13. Informasi Kontak",
    s13Intro: "Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan hak privasi Anda, silakan hubungi:",
    s13Legal: "Beroperasi di bawah merek ZAAV G",
    s13Location: "Bali, Indonesia",

    privacyBtnCatalog: "Lihat Katalog",
    privacyBtnHome: "Beranda",
  },
};

function PrivacyPolicyPage() {
  const { lang } = useI18n();
  const t = T[(lang as Lang) in T ? (lang as Lang) : "en"];

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
        <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center bg-cover bg-center overflow-hidden bg-[url('/HeroImg.webp')]">
          <div className="absolute inset-0 bg-[#0a140f]/75 z-10" />
          <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
            <h1
              className={`font-bold text-white tracking-[0.15em] uppercase leading-tight mb-10 drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all ${
                lang === "ru"
                  ? "text-2xl sm:text-3xl md:text-4xl"
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
          <h1 className="text-base sm:text-6xl text-black font-semibold leading-[1.9]">{t.privacyTitleSmall}</h1>
          <p className="text-sm text-neutral-500 italic mb-10">{t.privacyUpdated}</p>

          <div className="mb-12 space-y-4">
            <p className="text-base sm:text-lg text-neutral-600 leading-[1.9]">{t.intro1}</p>
            <p className="text-base sm:text-lg text-neutral-600 leading-[1.9]">{t.intro2}</p>
            <p className="text-base sm:text-lg text-neutral-600 leading-[1.9]">{t.intro3}</p>
            <p className="text-base sm:text-lg text-neutral-600 leading-[1.9]">{t.intro4}</p>
          </div>

          {/* 1. Information We Collect */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.s1Title}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s1Intro}</p>

            <p className="text-base text-neutral-900 font-semibold mt-6">{t.s1DirectTitle}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s1DirectIntro}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {t.s1DirectItems.map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-base text-neutral-900 font-semibold mt-6">{t.s1PaymentTitle}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s1Payment1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s1Payment2}</p>
            <p className="text-base text-neutral-600 leading-[1.9] mb-6">{t.s1Payment3}</p>

            <p className="text-base text-neutral-900 font-semibold mt-6">{t.s1AutoTitle}</p>
            <p className="text-base text-neutral-600 leading-[1.9] mt-2">{t.s1AutoIntro}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {t.s1AutoItems.map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 2. How We Use Your Information */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.s2Title}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s2Intro}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {t.s2Items.map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9] mt-4">{t.s2Outro}</p>
          </div>

          {/* 3. How We Share Personal Information */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.s3Title}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s3Intro1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s3Intro2}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {t.s3Items.map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s3Para1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s3Para2}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s3Para3}</p>
          </div>

          {/* 4. International Data Processing */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.s4Title}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s4Para1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s4Para2}</p>
          </div>

          {/* 5. Cookies & Similar Technologies */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.s5Title}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s5Intro}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {t.s5Items.map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s5Para1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s5Para2}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s5Para3}</p>
          </div>

          {/* 6. Data Retention */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.s6Title}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s6Intro}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {t.s6Items.map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s6Para1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s6Para2}</p>
          </div>

          {/* 7. Your Privacy Rights */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.s7Title}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s7Intro}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {t.s7Items.map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s7Para1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">
              {t.s7Contact}
              <a href="mailto:zaavg.bali@gmail.com" className="text-[#008060] font-normal hover:underline">zaavg.bali@gmail.com</a>.
            </p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s7Para2}</p>
          </div>

          {/* 8. Data Security */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.s8Title}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s8Intro1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s8Intro2}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {t.s8Items.map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s8Para1}</p>
          </div>

          {/* 9. Third-Party Services & Links */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.s9Title}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s9Para1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s9Para2}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s9Para3}</p>
          </div>

          {/* 10. Children's Privacy */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.s10Title}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s10Para1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s10Para2}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s10Para3}</p>
          </div>

          {/* 11. Changes to This Privacy Policy */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.s11Title}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s11Para1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s11Para2}</p>
          </div>

          {/* 12. Governing Privacy Law */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.s12Title}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s12Para1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s12Para2}</p>
          </div>

          {/* 13. Contact Information Card */}
          <div className="bg-[#f9f9f9] p-6 sm:p-8 rounded-xl my-10 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.s13Title}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.s13Intro}</p>
            <div className="text-base text-neutral-900 font-semibold leading-[1.9] mt-4">
              WIN WIN SILVER<br />
              <span className="font-normal text-neutral-600">{t.s13Legal}</span><br />
              <span className="font-normal text-neutral-600">Bali, Indonesia</span><br />
              📩 <a href="mailto:zaavg.bali@gmail.com" className="text-[#008060] font-normal hover:underline">zaavg.bali@gmail.com</a><br />
              🌐 <a href="https://zaavgbali.com" target="_blank" rel="noopener noreferrer" className="text-[#008060] font-normal hover:underline">zaavgbali.com</a>
            </div>
          </div>
        </div>

        {/* Action Buttons Block */}
        <section className="py-16 px-6 bg-white flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
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