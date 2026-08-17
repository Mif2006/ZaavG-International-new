import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PublicShell } from "@/components/public-shell";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy — ZAAV G" },
      {
        name: "description",
        content:
          "ZAAV G Refund & Return Policy. Learn about our returns, exchanges, and refund process for handmade jewelry.",
      },
      { property: "og:title", content: "Refund Policy — ZAAV G" },
      {
        property: "og:description",
        content:
          "ZAAV G Refund & Return Policy. Learn about our returns, exchanges, and refund process for handmade jewelry.",
      },
    ],
  }),
  component: RefundPolicyPage,
});

type Lang = "en" | "ru" | "id";

interface SectionWithList {
  title: string;
  paragraphs: string[];
  list?: string[];
  afterList?: string[];
}

interface PolicyContent {
  refundTitle: string;
  refundTitleSmall: string;
  refundUpdated: string;
  intro: string[];
  sec1: SectionWithList;
  sec2: SectionWithList;
  sec3: SectionWithList;
  sec4: {
    title: string;
    paragraphs: string[];
  };
  sec5: SectionWithList;
  sec6: {
    title: string;
    paragraphs: string[];
  };
  sec7: {
    title: string;
    paragraphs: string[];
  };
  sec8: {
    title: string;
    paragraphs: string[];
  };
  sec9: {
    title: string;
    paragraphs: string[];
  };
  sec10: {
    title: string;
    paragraphs: string[];
  };
  sec11: {
    title: string;
    paragraphs: string[];
  };
  sec12: {
    title: string;
    intro: string;
    company: string;
    brand: string;
    location: string;
    emailLabel: string;
    email: string;
    websiteLabel: string;
    website: string;
  };
  btnCatalog: string;
  btnHome: string;
}

const enContent: PolicyContent = {
  refundTitle: "Refund & Return Policy",
  refundTitleSmall: "Refund & Return Policy",
  refundUpdated: "Last updated: August 2026",
  intro: [
    "At ZAAV G, every piece of jewelry is created with care and handcrafted individually.",
    "This website, zaavgbali.com, is operated by WIN WIN SILVER, an Indonesian-registered business operating under the commercial brand ZAAV G.",
    "This Refund & Return Policy applies to purchases made through zaavgbali.com.",
  ],
  sec1: {
    title: "1. Returns & Exchanges",
    paragraphs: [
      "We want you to be happy with your ZAAV G jewelry.",
      "If you would like to request a return or exchange, please contact us as soon as possible after receiving your order at zaavg.bali@gmail.com.",
      "Please include:",
    ],
    list: [
      "your order number;",
      "the reason for your request;",
      "clear photographs of the item, where relevant.",
    ],
    afterList: [
      "Items must not be returned without contacting us first. Once your request has been reviewed, we will provide return instructions if the return is approved.",
      "Any mandatory return or cancellation rights available to you under applicable consumer protection law remain unaffected by this Policy.",
    ],
  },
  sec2: {
    title: "2. Return Conditions",
    paragraphs: ["To be eligible for a return, the item must generally:"],
    list: [
      "be unworn and unused;",
      "be in its original condition;",
      "include its original packaging and any accessories supplied with it;",
      "show no signs of alteration, resizing, damage, or improper handling.",
    ],
    afterList: [
      "We reserve the right to decline a return where the returned product does not meet these conditions, except where applicable law requires otherwise.",
    ],
  },
  sec3: {
    title: "3. Damaged, Defective or Incorrect Items",
    paragraphs: [
      "Please inspect your order when it arrives.",
      "If you receive an item that is damaged, defective, or different from the item you ordered, please contact us promptly at zaavg.bali@gmail.com.",
      "Please provide:",
    ],
    list: [
      "your order number;",
      "photographs of the item;",
      "photographs of the packaging where relevant;",
      "a short description of the issue.",
    ],
    afterList: [
      "We will review the request and, where the claim is confirmed, arrange an appropriate solution, which may include repair, replacement, exchange, or refund depending on the circumstances.",
      "Where the error is ours or a confirmed manufacturing defect is present, we will cover reasonable return shipping costs where applicable.",
    ],
  },
  sec4: {
    title: "4. Handmade Jewelry & Natural Stones",
    paragraphs: [
      "ZAAV G jewelry is handcrafted, and many pieces feature natural stones.",
      "Natural stones may differ in color, transparency, inclusions, pattern, and shape. Handmade jewelry may also show slight variations in texture, dimensions, and finish.",
      "These characteristics make each piece unique and are not considered defects.",
      "Product photographs are intended to represent our jewelry as accurately as possible, but colors and details may appear slightly different depending on lighting and screen settings.",
    ],
  },
  sec5: {
    title: "5. Non-Returnable Items",
    paragraphs: [
      "Unless required otherwise by applicable law, we cannot accept returns or exchanges for:",
    ],
    list: [
      "custom-made or personalized jewelry;",
      "pieces made specifically to a customer's requested size, engraving, stone selection, or other individual specification;",
      "gift cards or certificates;",
      "items that have been worn, altered, resized, damaged, or improperly cared for after delivery;",
      "earrings that have been worn or tried on where return cannot be accepted for hygiene reasons.",
    ],
    afterList: [
      "Made-to-order items that are part of our regular collection are not automatically considered personalized solely because they are produced after an order is placed. Their return eligibility will depend on the circumstances of the order and applicable law.",
    ],
  },
  sec6: {
    title: "6. Refunds",
    paragraphs: [
      "Once an approved return has been received and inspected, we will notify you of the outcome.",
      "If a refund is approved, it will normally be issued to the original payment method used for the purchase.",
      "The time required for the refunded amount to appear in your account depends on the payment provider, card issuer, and bank and is outside our direct control once the refund has been processed.",
      "Unless required otherwise by applicable law, original shipping charges, customs duties, import taxes, and other charges paid to third parties are not refundable.",
    ],
  },
  sec7: {
    title: "7. Return Shipping",
    paragraphs: [
      "Unless the product is defective, damaged on arrival, incorrect, or applicable law provides otherwise, the customer is responsible for return shipping costs.",
      "We strongly recommend using a tracked and appropriately insured shipping service.",
      "WIN WIN SILVER / ZAAV G cannot be responsible for a returned parcel that is lost or damaged before it is delivered to us.",
      "Return instructions and the applicable return address will be provided after your return request has been approved.",
    ],
  },
  sec8: {
    title: "8. Order Cancellations",
    paragraphs: [
      "If you wish to cancel an order, please contact us as soon as possible at zaavg.bali@gmail.com.",
      "If the order has not yet entered production or been dispatched, we will make reasonable efforts to cancel it.",
      "Custom-made or personalized orders cannot normally be cancelled once production has begun, except where required by applicable law.",
      "If an order has already been shipped, it will be handled in accordance with the applicable return conditions described in this Policy.",
    ],
  },
  sec9: {
    title: "9. Damaged Packages",
    paragraphs: [
      "If your parcel arrives visibly damaged, we recommend photographing the external packaging before opening it.",
      "Please also photograph the item and packaging if the jewelry itself has been affected and contact us promptly.",
      "This documentation helps us investigate the issue with the shipping carrier and resolve your claim more efficiently.",
    ],
  },
  sec10: {
    title: "10. International Orders",
    paragraphs: [
      "ZAAV G ships internationally.",
      "Customers are responsible for understanding any import duties, customs charges, taxes, or other fees imposed by their destination country.",
      "Where a parcel is refused, unclaimed, or returned because customs duties or import charges were not paid, any refund will be assessed after the parcel has been returned to us and may be reduced by shipping, return shipping, customs, or other costs incurred by us, to the extent permitted by applicable law.",
    ],
  },
  sec11: {
    title: "11. Consumer Rights",
    paragraphs: [
      "Nothing in this Refund & Return Policy is intended to exclude, restrict, or replace any consumer rights that cannot legally be waived under applicable law.",
      "Where mandatory consumer protection law provides you with rights greater than those described in this Policy, those mandatory rights will apply.",
    ],
  },
  sec12: {
    title: "12. Contact",
    intro: "For return, exchange, cancellation, or refund requests, please contact:",
    company: "WIN WIN SILVER",
    brand: "Operating under the brand ZAAV G",
    location: "Bali, Indonesia",
    emailLabel: "Email:",
    email: "zaavg.bali@gmail.com",
    websiteLabel: "Website:",
    website: "zaavgbali.com",
  },
  btnCatalog: "View Collections",
  btnHome: "Home",
};

const ruContent: PolicyContent = {
  refundTitle: "Политика возврата",
  refundTitleSmall: "Политика возврата, обмена и возмещения денежных средств",
  refundUpdated: "Последнее обновление: август 2026 г.",
  intro: [
    "В ZAAV G каждое украшение создается с особым вниманием и изготавливается вручную.",
    "Сайт zaavgbali.com управляется компанией WIN WIN SILVER, зарегистрированной в Индонезии и осуществляющей деятельность под коммерческим брендом ZAAV G.",
    "Настоящая Политика возврата, обмена и возмещения денежных средств применяется к покупкам, совершенным через сайт zaavgbali.com.",
  ],
  sec1: {
    title: "1. Возврат и обмен",
    paragraphs: [
      "Мы хотим, чтобы вы были довольны украшениями ZAAV G.",
      "Если вы хотите оформить возврат или обмен, пожалуйста, свяжитесь с нами как можно скорее после получения заказа по электронной почте: zaavg.bali@gmail.com.",
      "В обращении укажите:",
    ],
    list: [
      "номер вашего заказа;",
      "причину обращения;",
      "четкие фотографии изделия, если это необходимо.",
    ],
    afterList: [
      "Пожалуйста, не отправляйте товар обратно без предварительного согласования с нами. После рассмотрения вашего обращения и одобрения возврата мы предоставим инструкции по отправке изделия.",
      "Настоящая Политика не ограничивает обязательные права на возврат или отмену заказа, предоставленные вам применимым законодательством о защите прав потребителей.",
    ],
  },
  sec2: {
    title: "2. Условия возврата",
    paragraphs: ["Для оформления возврата товар, как правило, должен:"],
    list: [
      "не иметь следов носки и использования;",
      "находиться в первоначальном состоянии;",
      "иметь оригинальную упаковку и все принадлежности, входившие в комплект;",
      "не иметь следов переделки, изменения размера, повреждений или ненадлежащего обращения.",
    ],
    afterList: [
      "Мы оставляем за собой право отказать в возврате, если возвращенный товар не соответствует указанным условиям, за исключением случаев, когда применимое законодательство предусматривает иное.",
    ],
  },
  sec3: {
    title: "3. Поврежденные, дефектные или ошибочно отправленные товары",
    paragraphs: [
      "Пожалуйста, осмотрите ваш заказ после его получения.",
      "Если вы получили поврежденное или дефектное изделие либо товар, отличающийся от заказанного, пожалуйста, как можно скорее свяжитесь с нами по электронной почте zaavg.bali@gmail.com.",
      "В обращении предоставьте:",
    ],
    list: [
      "номер вашего заказа;",
      "фотографии изделия;",
      "фотографии упаковки, если это имеет отношение к проблеме;",
      "краткое описание проблемы.",
    ],
    afterList: [
      "Мы рассмотрим ваше обращение и, если заявленная проблема подтвердится, предложим подходящее решение. В зависимости от обстоятельств это может быть ремонт, замена изделия, обмен или возврат денежных средств.",
      "Если ошибка произошла с нашей стороны или подтвержден производственный дефект, мы возместим разумные расходы на обратную доставку, когда это применимо.",
    ],
  },
  sec4: {
    title: "4. Украшения ручной работы и натуральные камни",
    paragraphs: [
      "Украшения ZAAV G изготавливаются вручную, и во многих изделиях используются натуральные камни.",
      "Натуральные камни могут различаться по цвету, прозрачности, включениям, рисунку и форме. Украшения ручной работы также могут иметь незначительные различия в текстуре, размерах и отделке.",
      "Эти особенности делают каждое изделие уникальным и не считаются дефектами.",
      "Мы стремимся к тому, чтобы фотографии товаров максимально точно передавали внешний вид наших украшений. Однако цвета и отдельные детали могут незначительно отличаться в зависимости от освещения и настроек экрана.",
    ],
  },
  sec5: {
    title: "5. Товары, не подлежащие возврату",
    paragraphs: [
      "Если иное не предусмотрено применимым законодательством, мы не принимаем к возврату или обмену:",
    ],
    list: [
      "украшения, изготовленные по индивидуальному заказу или персонализированные для покупателя;",
      "изделия, изготовленные специально в соответствии с выбранными покупателем индивидуальными параметрами, включая размер, гравировку, выбор камня или иные характеристики;",
      "подарочные карты и сертификаты;",
      "изделия, которые после получения носились, были изменены, подвергались изменению размера, были повреждены или за которыми осуществлялся ненадлежащий уход;",
      "серьги, которые носили или примеряли, если их возврат невозможен по гигиеническим причинам.",
    ],
    afterList: [
      "Изделия из нашей постоянной коллекции, изготовленные после оформления заказа, не считаются автоматически персонализированными только на том основании, что их производство началось после получения заказа. Возможность их возврата определяется с учетом обстоятельств конкретного заказа и требований применимого законодательства.",
    ],
  },
  sec6: {
    title: "6. Возмещение денежных средств",
    paragraphs: [
      "После получения и проверки одобренного к возврату товара мы сообщим вам о результате рассмотрения возврата.",
      "Если возврат денежных средств одобрен, средства, как правило, будут возвращены тем же способом оплаты, который использовался при покупке.",
      "Срок зачисления возвращенных денежных средств на ваш счет зависит от платежного провайдера, банка-эмитента и обслуживающего банка. После проведения возврата с нашей стороны эти сроки находятся вне нашего непосредственного контроля.",
      "Если иное не предусмотрено применимым законодательством, первоначальная стоимость доставки, таможенные пошлины, импортные налоги и другие платежи, уплаченные третьим лицам, возврату не подлежат.",
    ],
  },
  sec7: {
    title: "7. Обратная доставка",
    paragraphs: [
      "Если товар не является дефектным, не был поврежден при доставке, не был отправлен по ошибке и применимое законодательство не предусматривает иное, расходы на обратную доставку оплачивает покупатель.",
      "Мы настоятельно рекомендуем использовать службу доставки с возможностью отслеживания отправления и соответствующим страхованием посылки.",
      "WIN WIN SILVER / ZAAV G не несет ответственности за возвращаемую посылку, если она была утеряна или повреждена до момента ее доставки нам.",
      "Инструкции по возврату и соответствующий адрес для отправки будут предоставлены после одобрения вашего запроса на возврат.",
    ],
  },
  sec8: {
    title: "8. Отмена заказа",
    paragraphs: [
      "Если вы хотите отменить заказ, пожалуйста, как можно скорее свяжитесь с нами по электронной почте zaavg.bali@gmail.com.",
      "Если заказ еще не передан в производство и не отправлен, мы приложим разумные усилия для его отмены.",
      "Заказы на индивидуально изготовленные или персонализированные изделия, как правило, не могут быть отменены после начала производства, за исключением случаев, предусмотренных применимым законодательством.",
      "Если заказ уже отправлен, к нему применяются соответствующие условия возврата, изложенные в настоящей Политике.",
    ],
  },
  sec9: {
    title: "9. Повреждение посылки",
    paragraphs: [
      "Если при получении посылки вы видите явные повреждения, рекомендуем сфотографировать внешнюю упаковку до ее вскрытия.",
      "Если повреждено само украшение, пожалуйста, также сделайте фотографии изделия и упаковки и как можно скорее свяжитесь с нами.",
      "Эти материалы помогут нам провести проверку совместно с транспортной компанией и быстрее урегулировать ваше обращение.",
    ],
  },
  sec10: {
    title: "10. Международные заказы",
    paragraphs: [
      "ZAAV G осуществляет международную доставку.",
      "Покупатель самостоятельно несет ответственность за ознакомление с возможными импортными пошлинами, таможенными сборами, налогами и иными платежами, установленными в стране назначения.",
      "Если покупатель отказывается от получения посылки, не забирает ее либо посылка возвращается нам из-за неуплаты таможенных пошлин или импортных сборов, возможность и сумма возврата денежных средств определяются после фактического получения посылки обратно. В пределах, допускаемых применимым законодательством, из суммы возврата могут быть вычтены понесенные нами расходы на первоначальную и обратную доставку, таможенные сборы и иные связанные с возвратом расходы.",
    ],
  },
  sec11: {
    title: "11. Права потребителей",
    paragraphs: [
      "Ни одно из положений настоящей Политики возврата, обмена и возмещения денежных средств не направлено на исключение, ограничение или замену прав потребителей, от которых нельзя отказаться в соответствии с применимым законодательством.",
      "Если обязательные нормы законодательства о защите прав потребителей предоставляют вам более широкие права, чем предусмотрено настоящей Политикой, применяются такие обязательные нормы.",
    ],
  },
  sec12: {
    title: "12. Контактная информация",
    intro: "По вопросам возврата, обмена, отмены заказа или возмещения денежных средств, пожалуйста, свяжитесь с нами:",
    company: "WIN WIN SILVER",
    brand: "Осуществляет деятельность под брендом ZAAV G",
    location: "Бали, Индонезия",
    emailLabel: "Email:",
    email: "zaavg.bali@gmail.com",
    websiteLabel: "Сайт:",
    website: "zaavgbali.com",
  },
  btnCatalog: "Смотреть коллекции",
  btnHome: "На главную",
};

const idContent: PolicyContent = {
  refundTitle: "Kebijakan Pengembalian & Penukaran",
  refundTitleSmall: "Kebijakan Pengembalian & Penukaran",
  refundUpdated: "Terakhir diperbarui: Agustus 2026",
  intro: [
    "Di ZAAV G, setiap perhiasan dibuat dengan penuh ketelitian dan dirangkai secara buatan tangan.",
    "Situs web ini, zaavgbali.com, dioperasikan oleh WIN WIN SILVER, bisnis terdaftar di Indonesia yang beroperasi di bawah merek komersial ZAAV G.",
    "Kebijakan Pengembalian & Penukaran ini berlaku untuk pembelian yang dilakukan melalui zaavgbali.com.",
  ],
  sec1: {
    title: "1. Pengembalian & Penukaran",
    paragraphs: [
      "Kami ingin Anda puas dengan perhiasan ZAAV G Anda.",
      "Jika Anda ingin mengajukan pengembalian atau penukaran, silakan hubungi kami sesegera mungkin setelah menerima pesanan Anda di zaavg.bali@gmail.com.",
      "Mohon sertakan:",
    ],
    list: [
      "nomor pesanan Anda;",
      "alasan pengajuan Anda;",
      "foto produk yang jelas, jika relevan.",
    ],
    afterList: [
      "Produk tidak boleh dikembalikan tanpa menghubungi kami terlebih dahulu. Setelah pengajuan Anda ditinjau, kami akan memberikan instruksi pengembalian jika disetujui.",
      "Setiap hak pengembalian atau pembatalan wajib yang Anda miliki berdasarkan hukum perlindungan konsumen yang berlaku tetap tidak terpengaruh oleh Kebijakan ini.",
    ],
  },
  sec2: {
    title: "2. Syarat Pengembalian",
    paragraphs: ["Agar memenuhi syarat untuk dikembalikan, produk secara umum harus:"],
    list: [
      "belum pernah dipakai dan tidak digunakan;",
      "berada dalam kondisi aslinya;",
      "menyertakan kemasan asli dan seluruh aksesori yang diberikan;",
      "tidak menunjukkan tanda-tanda perubahan, pemotongan/perubahan ukuran, kerusakan, atau penanganan yang tidak tepat.",
    ],
    afterList: [
      "Kami berhak menolak pengembalian apabila produk yang dikembalikan tidak memenuhi syarat-syarat ini, kecuali jika diwajibkan lain oleh hukum yang berlaku.",
    ],
  },
  sec3: {
    title: "3. Produk Rusak, Cacat, atau Salah",
    paragraphs: [
      "Harap periksa pesanan Anda saat tiba.",
      "Jika Anda menerima produk yang rusak, cacat, atau berbeda dari yang Anda pesan, segera hubungi kami di zaavg.bali@gmail.com.",
      "Mohon berikan:",
    ],
    list: [
      "nomor pesanan Anda;",
      "foto produk;",
      "foto kemasan jika relevan;",
      "deskripsi singkat mengenai masalah tersebut.",
    ],
    afterList: [
      "Kami akan meninjau permintaan tersebut dan, jika klaim terkonfirmasi, kami akan mengatur solusi yang sesuai, yang dapat berupa perbaikan, penggantian, penukaran, atau pengembalian dana tergantung pada situasinya.",
      "Apabila kesalahan terjadi dari pihak kami atau terkonfirmasi adanya cacat produksi, kami akan menanggung biaya pengiriman pengembalian yang wajar jika berlaku.",
    ],
  },
  sec4: {
    title: "4. Perhiasan Buatan Tangan & Batu Alam",
    paragraphs: [
      "Perhiasan ZAAV G dibuat secara buatan tangan (handcrafted), dan banyak produk menggunakan batu alam.",
      "Batu alam dapat memiliki perbedaan dalam warna, transparansi, inklusi, pola, dan bentuk. Perhiasan buatan tangan juga dapat memiliki sedikit variasi dalam tekstur, dimensi, dan hasil akhir.",
      "Karakteristik ini membuat setiap perhiasan unik dan tidak dianggap sebagai cacat produksi.",
      "Foto produk ditujukan untuk merepresentasikan perhiasan kami seakurat mungkin, tetapi warna dan detail dapat terlihat sedikit berbeda tergantung pada pencahayaan dan pengaturan layar.",
    ],
  },
  sec5: {
    title: "5. Produk yang Tidak Dapat Dikembalikan",
    paragraphs: [
      "Kecuali diwajibkan lain oleh hukum yang berlaku, kami tidak menerima pengembalian atau penukaran untuk:",
    ],
    list: [
      "perhiasan khusus (custom-made) atau yang dipersonalisasi;",
      "produk yang dibuat secara khusus sesuai ukuran, ukiran, pilihan batu, atau spesifikasi individual lain yang diminta pelanggan;",
      "kartu hadiah atau sertifikat hadiah;",
      "produk yang telah dipakai, diubah, disesuaikan ukurannya, rusak, atau tidak dirawat dengan benar setelah pengiriman;",
      "anting yang telah dipakai atau dicoba demi alasan higienis dan kesehatan.",
    ],
  },
  sec6: {
    title: "6. Pengembalian Dana (Refund)",
    paragraphs: [
      "Setelah pengembalian yang disetujui diterima dan diperiksa, kami akan memberi tahu Anda mengenai hasilnya.",
      "Jika pengembalian dana disetujui, dana biasanya akan dikembalikan ke metode pembayaran asli yang digunakan saat pembelian.",
      "Waktu yang dibutuhkan hingga dana yang dikembalikan muncul di rekening Anda bergantung pada penyedia layanan pembayaran, penerbit kartu, dan bank, serta di luar kendali langsung kami setelah pengembalian dana diproses.",
      "Kecuali diwajibkan lain oleh hukum yang berlaku, biaya pengiriman awal, bea masuk, pajak impor, dan biaya lain yang dibayarkan kepada pihak ketiga tidak dapat dikembalikan.",
    ],
  },
  sec7: {
    title: "7. Biaya Pengiriman Pengembalian",
    paragraphs: [
      "Kecuali jika produk cacat, rusak saat diterima, salah kirim, atau hukum yang berlaku menentukan lain, pelanggan bertanggung jawab atas biaya pengiriman pengembalian.",
      "Kami sangat menyarankan untuk menggunakan layanan pengiriman yang terlacak dan terasuransi dengan layak.",
      "WIN WIN SILVER / ZAAV G tidak bertanggung jawab atas paket pengembalian yang hilang atau rusak sebelum disampaikan kepada kami.",
      "Instruksi pengembalian dan alamat pengembalian yang berlaku akan diberikan setelah pengajuan pengembalian Anda disetujui.",
    ],
  },
  sec8: {
    title: "8. Pembatalan Pesanan",
    paragraphs: [
      "Jika Anda ingin membatalkan pesanan, silakan hubungi kami sesegera mungkin di zaavg.bali@gmail.com.",
      "Jika pesanan belum masuk tahap produksi atau belum dikirim, kami akan mengupayakan pembatalan secara wajar.",
      "Pesanan khusus (custom-made) atau yang dipersonalisasi biasanya tidak dapat dibatalkan setelah proses produksi dimulai, kecuali jika diwajibkan oleh hukum yang berlaku.",
      "Jika pesanan telah dikirim, pembatalan akan ditangani sesuai dengan ketentuan pengembalian yang berlaku dalam Kebijakan ini.",
    ],
  },
  sec9: {
    title: "9. Paket Rusak",
    paragraphs: [
      "Jika paket Anda tiba dalam kondisi rusak secara fisik, kami menyarankan untuk mengambil foto kemasan luar sebelum membukanya.",
      "Silakan foto juga produk dan kemasannya jika perhiasan di dalamnya terdampak, lalu segera hubungi kami.",
      "Dokumentasi ini membantu kami menyelidiki masalah tersebut dengan jasa kurir pengiriman dan menyelesaikan klaim Anda secara lebih efisien.",
    ],
  },
  sec10: {
    title: "10. Pesanan Internasional",
    paragraphs: [
      "ZAAV G melayani pengiriman internasional.",
      "Pelanggan bertanggung jawab untuk memahami bea masuk, biaya cukai, pajak, atau biaya lain yang diberlakukan oleh negara tujuan.",
      "Apabila paket ditolak, tidak diambil, atau dikembalikan karena bea masuk atau biaya impor tidak dibayar, pengembalian dana akan dinilai setelah paket dikembalikan kepada kami dan dapat dikurangi biaya pengiriman, biaya pengembalian, bea cukai, atau biaya lain yang kami keluarkan, sejauh diizinkan oleh hukum yang berlaku.",
    ],
  },
  sec11: {
    title: "11. Hak-Hak Konsumen",
    paragraphs: [
      "Tidak ada bagian dari Kebijakan Pengembalian & Penukaran ini yang ditujukan untuk mengecualikan, membatasi, atau menggantikan hak-hak konsumen yang secara hukum tidak dapat dikesampingkan berdasarkan hukum yang berlaku.",
      "Apabila hukum perlindungan konsumen yang bersifat wajib memberikan Hak yang lebih luas daripada yang dijelaskan dalam Kebijakan ini, maka hak-hak wajib tersebut yang berlaku.",
    ],
  },
  sec12: {
    title: "12. Kontak",
    intro: "Untuk pengajuan pengembalian, penukaran, pembatalan, atau pengembalian dana, silakan hubungi:",
    company: "WIN WIN SILVER",
    brand: "Beroperasi di bawah merek ZAAV G",
    location: "Bali, Indonesia",
    emailLabel: "Email:",
    email: "zaavg.bali@gmail.com",
    websiteLabel: "Situs web:",
    website: "zaavgbali.com",
  },
  btnCatalog: "Lihat Koleksi",
  btnHome: "Beranda",
};

const content: Record<Lang, PolicyContent> = {
  en: enContent,
  ru: ruContent,
  id: idContent,
};

function renderParagraph(text: string) {
  if (text.includes("zaavg.bali@gmail.com")) {
    const parts = text.split("zaavg.bali@gmail.com");
    return (
      <>
        {parts[0]}
        <a
          href="mailto:zaavg.bali@gmail.com"
          className="text-[#008060] hover:underline font-medium"
        >
          zaavg.bali@gmail.com
        </a>
        {parts[1]}
      </>
    );
  }

  if (text.includes("zaavgbali.com")) {
    const parts = text.split("zaavgbali.com");
    return (
      <>
        {parts[0]}
        <a
          href="https://zaavgbali.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#008060] hover:underline font-medium"
        >
          zaavgbali.com
        </a>
        {parts[1]}
      </>
    );
  }

  return text;
}

function SectionBlock({ sec }: { sec: SectionWithList }) {
  return (
    <div className="mb-12 space-y-4">
      <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">
        {sec.title}
      </h2>
      {sec.paragraphs.map((p, i) => (
        <p key={i} className="text-base text-neutral-600 leading-[1.9]">
          {renderParagraph(p)}
        </p>
      ))}

      {sec.list && sec.list.length > 0 && (
        <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
          {sec.list.map((item, i) => (
            <li
              key={i}
              className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg"
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      {sec.afterList &&
        sec.afterList.map((p, i) => (
          <p key={i} className="text-base text-neutral-600 leading-[1.9]">
            {renderParagraph(p)}
          </p>
        ))}
    </div>
  );
}

function RefundPolicyPage() {
  const { lang } = useI18n();
  const t = content[lang as Lang] || content.en;

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
              {t.refundTitle}
            </h1>
            <button
              onClick={scrollToContent}
              className="w-10 h-10 border-2 border-white/60 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 animate-bounce mx-auto mt-8 hover:border-white hover:-translate-y-1 bg-transparent p-0"
              aria-label="Scroll to content"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 stroke-white fill-none stroke-[2]"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        </section>

        {/* Content Section */}
        <div id="refundContent" className="py-24 px-6 md:px-10 lg:px-16 max-w-4xl mx-auto">
          <p className="text-sm text-neutral-500 italic mb-10">{t.refundUpdated}</p>
          <h1 className=" sm:text-6xl text-gray-800 font-semibold pb-12">{t.refundTitleSmall}</h1>

          {/* Intro Paragraphs */}
          <div className="mb-12 space-y-4">
            {t.intro.map((p, i) => (
              <p key={i} className="text-base sm:text-lg text-neutral-600 leading-[1.9]">
                {renderParagraph(p)}
              </p>
            ))}
          </div>

          {/* Sections 1 - 3 */}
          <SectionBlock sec={t.sec1} />
          <SectionBlock sec={t.sec2} />
          <SectionBlock sec={t.sec3} />

          {/* Section 4 */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">
              {t.sec4.title}
            </h2>
            {t.sec4.paragraphs.map((p, i) => (
              <p key={i} className="text-base text-neutral-600 leading-[1.9]">
                {renderParagraph(p)}
              </p>
            ))}
          </div>

          {/* Section 5 */}
          <SectionBlock sec={t.sec5} />

          {/* Section 6 */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">
              {t.sec6.title}
            </h2>
            {t.sec6.paragraphs.map((p, i) => (
              <p key={i} className="text-base text-neutral-600 leading-[1.9]">
                {renderParagraph(p)}
              </p>
            ))}
          </div>

          {/* Section 7 */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">
              {t.sec7.title}
            </h2>
            {t.sec7.paragraphs.map((p, i) => (
              <p key={i} className="text-base text-neutral-600 leading-[1.9]">
                {renderParagraph(p)}
              </p>
            ))}
          </div>

          {/* Section 8 */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">
              {t.sec8.title}
            </h2>
            {t.sec8.paragraphs.map((p, i) => (
              <p key={i} className="text-base text-neutral-600 leading-[1.9]">
                {renderParagraph(p)}
              </p>
            ))}
          </div>

          {/* Section 9 */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">
              {t.sec9.title}
            </h2>
            {t.sec9.paragraphs.map((p, i) => (
              <p key={i} className="text-base text-neutral-600 leading-[1.9]">
                {renderParagraph(p)}
              </p>
            ))}
          </div>

          {/* Section 10 */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">
              {t.sec10.title}
            </h2>
            {t.sec10.paragraphs.map((p, i) => (
              <p key={i} className="text-base text-neutral-600 leading-[1.9]">
                {renderParagraph(p)}
              </p>
            ))}
          </div>

          {/* Section 11 */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">
              {t.sec11.title}
            </h2>
            {t.sec11.paragraphs.map((p, i) => (
              <p key={i} className="text-base text-neutral-600 leading-[1.9]">
                {renderParagraph(p)}
              </p>
            ))}
          </div>

          {/* Section 12 Contact Box */}
          <div className="bg-[#f9f9f9] p-6 sm:p-8 rounded-xl my-10 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">
              {t.sec12.title}
            </h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec12.intro}</p>
            <div className="text-base text-neutral-900 leading-[1.9] mt-4 space-y-1">
              <p className="font-semibold">{t.sec12.company}</p>
              <p>{t.sec12.brand}</p>
              <p>{t.sec12.location}</p>
              <p>
                {t.sec12.emailLabel}{" "}
                <a
                  href={`mailto:${t.sec12.email}`}
                  className="text-[#008060] font-normal hover:underline"
                >
                  {t.sec12.email}
                </a>
              </p>
              <p>
                {t.sec12.websiteLabel}{" "}
                <a
                  href={`https://${t.sec12.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#008060] font-normal hover:underline"
                >
                  {t.sec12.website}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <section className="py-16 px-6 bg-white flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <Link
            to="/collections"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-sans text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 min-w-[220px] bg-[#1a1a1a] text-white border border-white/20 shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:bg-[#0f0f0f] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,0,0,0.4)]"
          >
            {t.btnCatalog}
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-sans text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 min-w-[220px] bg-transparent text-[#1a1a1a] border-[1.5px] border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white hover:-translate-y-0.5"
          >
            {t.btnHome}
          </Link>
        </section>
      </div>
    </PublicShell>
  );
}