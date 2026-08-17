import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PublicShell } from "@/components/public-shell";

type Lang = "en" | "ru" | "id";

const T: Record<
  Lang,
  {
    termsTitle: string;
    termsTitleSmall: string;
    termsUpdated: string;
    termsWelcome: string;
    termsIntroLine1: string;
    termsIntroLine2: string;
    termsIntroLine3: string;
    termsIntroLine4: string;

    section1Title: string;
    sec1RegNameLabel: string;
    sec1RegNameVal: string;
    sec1BrandNameLabel: string;
    sec1BrandNameVal: string;
    sec1WebsiteLabel: string;
    sec1WebsiteVal: string;
    sec1CountryLabel: string;
    sec1CountryVal: string;
    sec1ActivityLabel: string;
    sec1ActivityVal: string;
    sec1Text1: string;
    sec1Text2: string;
    sec1Text3: string;

    section2Title: string;
    sec2Text1: string;
    sec2Text2: string;
    sec2Item1: string;
    sec2Item2: string;
    sec2Item3: string;
    sec2Text3: string;
    sec2Text4: string;

    section3Title: string;
    sec3Text1: string;
    sec3Text2: string;
    sec3Text3: string;
    sec3Text4: string;

    section4Title: string;
    sec4Text1: string;
    sec4Text2: string;
    sec4Item1: string;
    sec4Item2: string;
    sec4Item3: string;
    sec4Item4: string;
    sec4Item5: string;
    sec4Item6: string;
    sec4Text3: string;
    sec4Text4: string;

    section5Title: string;
    sec5Text1: string;
    sec5Text2: string;
    sec5Text3: string;
    sec5Item1: string;
    sec5Item2: string;
    sec5Item3: string;

    section6Title: string;
    sec6Text1: string;
    sec6Text2: string;
    sec6Item1: string;
    sec6Item2: string;
    sec6Item3: string;
    sec6Item4: string;
    sec6Item5: string;
    sec6Item6: string;
    sec6Text3: string;
    sec6Text4: string;
    sec6Text5: string;

    section7Title: string;
    sec7Text1: string;
    sec7Text2: string;
    sec7Text3: string;
    sec7Text4: string;
    sec7Text5: string;

    section8Title: string;
    sec8Text1: string;
    sec8Text2: string;
    sec8Text3: string;
    sec8Text4: string;

    section9Title: string;
    sec9Text1: string;
    sec9Text2: string;

    section10Title: string;
    sec10Intro: string;
    sec10Item1: string;
    sec10Item2: string;
    sec10Item3: string;
    sec10Item4: string;
    sec10Item5: string;
    sec10Outro: string;

    section11Title: string;
    sec11Text1: string;
    sec11Text2: string;
    sec11Text3: string;

    section12Title: string;
    sec12Text: string;

    section13Title: string;
    sec13Text1: string;
    sec13Text2: string;

    section14Title: string;
    sec14Intro: string;
    contactCompany: string;
    contactBrand: string;
    contactLocation: string;
    contactEmail: string;
    contactWebsite: string;

    termsBtnCatalog: string;
    termsBtnHome: string;
  }
> = {
  en: {
    termsTitle: "Terms of Service",
    termsTitleSmall: "Terms of Service",
    termsUpdated: "Last updated: August 2026",
    termsWelcome: "Welcome to ZAAV G.",
    termsIntroLine1: "This website, zaavgbali.com, is operated by WIN WIN SILVER, an Indonesian-registered business operating under the commercial brand ZAAV G.",
    termsIntroLine2: "Throughout these Terms of Service, the terms “ZAAV G,” “we,” “us,” and “our” refer to WIN WIN SILVER operating under the ZAAV G brand.",
    termsIntroLine3: "These Terms of Service govern your access to and use of our website, products, and services. By accessing this website or placing an order, you agree to these Terms.",
    termsIntroLine4: "Please read them carefully before using the website.",

    section1Title: "1. Business Information",
    sec1RegNameLabel: "Registered business name:",
    sec1RegNameVal: "WIN WIN SILVER",
    sec1BrandNameLabel: "Brand name:",
    sec1BrandNameVal: "ZAAV G",
    sec1WebsiteLabel: "Website:",
    sec1WebsiteVal: "zaavgbali.com",
    sec1CountryLabel: "Country of registration:",
    sec1CountryVal: "Indonesia",
    sec1ActivityLabel: "Business activity:",
    sec1ActivityVal: "Design, production, and retail sale of handcrafted jewelry.",
    sec1Text1: "ZAAV G is an independent jewelry brand creating handcrafted sterling silver jewelry and jewelry with natural stones in Bali, Indonesia.",
    sec1Text2: "By using this website, you confirm that you are legally capable of entering into a purchase agreement under the laws applicable to you or that you have the permission of a parent or legal guardian where required.",
    sec1Text3: "We may update these Terms from time to time. The version published on this website at the time of your order will apply to that purchase.",

    section2Title: "2. Products & Handmade Nature",
    sec2Text1: "ZAAV G jewelry is handcrafted, and many pieces incorporate natural stones and other materials that naturally vary from one piece to another.",
    sec2Text2: "Because of the artisanal and natural character of our products:",
    sec2Item1: "slight variations in texture, shape, dimensions, color, stone pattern, and finish may occur;",
    sec2Item2: "natural stones may contain inclusions, variations in transparency, color, and internal characteristics;",
    sec2Item3: "handmade textures and minor differences between individual pieces are part of the character and individuality of the jewelry.",
    sec2Text3: "Such natural and handmade variations are not considered manufacturing defects.",
    sec2Text4: "We make every reasonable effort to display our products accurately. However, colors and proportions may appear slightly different depending on the device or screen used to view the website.",

    section3Title: "3. Prices & Currency",
    sec3Text1: "Product prices are displayed on the website in the currency selected or indicated at checkout.",
    sec3Text2: "Where required for our Indonesian payment processing and regulatory requirements, prices may also be displayed or processed in Indonesian Rupiah (IDR).",
    sec3Text3: "Prices may be changed without prior notice. Any price change will not affect an order that has already been confirmed.",
    sec3Text4: "International customers may be responsible for import duties, customs charges, taxes, or other fees imposed by the destination country. Unless expressly stated otherwise at checkout, these charges are not included in the product or shipping price and are the responsibility of the customer.",

    section4Title: "4. Orders",
    sec4Text1: "After placing an order, you will receive an electronic order confirmation.",
    sec4Text2: "Receipt of an order confirmation does not prevent us from cancelling an order where reasonably necessary, including in cases of:",
    sec4Item1: "payment failure or suspected fraudulent activity;",
    sec4Item2: "incorrect product or pricing information;",
    sec4Item3: "inability to fulfill the order;",
    sec4Item4: "inventory errors;",
    sec4Item5: "legal or regulatory requirements;",
    sec4Item6: "requests for additional payment or identity verification by our payment provider.",
    sec4Text3: "If we cancel an order after payment has been successfully collected, the applicable amount will be refunded using the original payment method whenever possible.",
    sec4Text4: "We reserve the right to limit quantities purchased by an individual customer where reasonably necessary.",

    section5Title: "5. Payments",
    sec5Text1: "Payments made through zaavgbali.com are processed by authorized third-party payment service providers.",
    sec5Text2: "WIN WIN SILVER / ZAAV G does not store complete payment card details on its own systems.",
    sec5Text3: "By submitting payment information, you confirm that:",
    sec5Item1: "you are authorized to use the selected payment method;",
    sec5Item2: "the information you provide is complete and accurate;",
    sec5Item3: "you authorize the applicable payment provider to process the transaction. Payment availability, processing, authorization, settlement, and refunds may also be subject to the terms of the applicable payment provider and issuing bank.",

    section6Title: "6. Shipping & Delivery",
    sec6Text1: "ZAAV G offers shipping to international destinations, subject to carrier availability and applicable restrictions.",
    sec6Text2: "Estimated delivery times are provided for guidance only and may vary due to:",
    sec6Item1: "destination country;",
    sec6Item2: "customs clearance;",
    sec6Item3: "local postal or courier services;",
    sec6Item4: "public holidays;",
    sec6Item5: "weather or transportation disruptions;",
    sec6Item6: "events beyond our reasonable control.",
    sec6Text3: "We are not responsible for delays caused by customs authorities, shipping carriers, or other circumstances outside our reasonable control.",
    sec6Text4: "Customers are responsible for providing complete and accurate delivery information when placing an order.",
    sec6Text5: "Any customs duties, import taxes, or local charges imposed in the destination country are the customer's responsibility unless otherwise expressly stated.",

    section7Title: "7. Returns, Exchanges & Refunds",
    sec7Text1: "Returns, exchanges, and refunds are governed by our separate Refund & Return Policy, which forms part of these Terms of Service.",
    sec7Text2: "Certain products, including personalized, custom-made, or made-to-order pieces, may not be eligible for return except where required by applicable law or where the item is defective.",
    sec7Text3: "If you receive an incorrect, damaged, or defective item, please contact us as soon as reasonably possible and provide your order information and photographs of the item and packaging.",
    sec7Text4: "Approved refunds will normally be returned through the original payment method, subject to the processing procedures of the applicable payment provider.",
    sec7Text5: "Nothing in these Terms limits any mandatory consumer rights that cannot legally be excluded.",

    section8Title: "8. Jewelry Care",
    sec8Text1: "Our jewelry should be handled and stored with appropriate care.",
    sec8Text2: "To help preserve your jewelry, we recommend avoiding prolonged contact with water, perfumes, cosmetics, household chemicals, and other substances that may affect metals or natural stones.",
    sec8Text3: "We also recommend removing jewelry before swimming, exercising, sleeping, or undertaking activities that may expose the piece to impact or excessive friction.",
    sec8Text4: "Natural wear, oxidation, scratches, or changes resulting from use, improper storage, accidental damage, or exposure to chemicals are not considered manufacturing defects.",

    section9Title: "9. Intellectual Property",
    sec9Text1: "Unless otherwise stated, the content of zaavgbali.com, including photographs, videos, texts, graphics, logos, branding elements, and original jewelry designs, is owned by or lawfully used by WIN WIN SILVER / ZAAV G and is protected by applicable intellectual property laws.",
    sec9Text2: "Content from this website may not be copied, reproduced, distributed, commercially exploited, or used to manufacture or market competing products without prior written authorization, except where such use is permitted by law.",

    section10Title: "10. Acceptable Use",
    sec10Intro: "You may not use this website:",
    sec10Item1: "for unlawful or fraudulent purposes;",
    sec10Item2: "to interfere with the security or operation of the website;",
    sec10Item3: "to attempt unauthorized access to our systems;",
    sec10Item4: "to submit false or misleading information;",
    sec10Item5: "to infringe the intellectual property or other rights of ZAAV G or third parties.",
    sec10Outro: "We reserve the right to restrict access to the website where reasonably necessary to protect our customers, business, or systems.",

    section11Title: "11. Limitation of Liability",
    sec11Text1: "To the maximum extent permitted by applicable law, WIN WIN SILVER / ZAAV G will not be liable for indirect, incidental, or consequential losses arising from use of the website or products where such liability may lawfully be excluded.",
    sec11Text2: "We are not responsible for loss or damage resulting from misuse, improper handling, unauthorized alteration, or failure to follow reasonable jewelry-care instructions.",
    sec11Text3: "Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited, including mandatory consumer rights under applicable law.",

    section12Title: "12. Privacy",
    sec12Text: "Our collection and processing of personal information is described in our Privacy Policy. By using our website, you acknowledge that your information may be processed by third-party service providers where necessary to provide our services, including payment processors, hosting providers, analytics providers, and shipping partners, subject to applicable privacy requirements.",

    section13Title: "13. Governing Law",
    sec13Text1: "These Terms of Service and transactions with WIN WIN SILVER / ZAAV G are governed by the laws of the Republic of Indonesia, without limiting any mandatory consumer protection rights that may apply to customers under applicable law.",
    sec13Text2: "Any dispute should first be addressed by contacting us so that we have an opportunity to resolve the matter directly.",

    section14Title: "14. Contact Information",
    sec14Intro: "For questions about these Terms, an order, or our services, please contact:",
    contactCompany: "WIN WIN SILVER",
    contactBrand: "Operating under the brand ZAAV G",
    contactLocation: "Bali, Indonesia",
    contactEmail: "zaavg.bali@gmail.com",
    contactWebsite: "zaavgbali.com",

    termsBtnCatalog: "View Collections",
    termsBtnHome: "Home",
  },
  ru: {
    termsTitle: "Условия использования",
    termsTitleSmall: "Условия использования",
    termsUpdated: "Последнее обновление: август 2026 г.",
    termsWelcome: "Добро пожаловать в ZAAV G.",
    termsIntroLine1: "Сайт zaavgbali.com управляется компанией WIN WIN SILVER, зарегистрированной в Индонезии и осуществляющей деятельность под коммерческим брендом ZAAV G.",
    termsIntroLine2: "В настоящих Условиях использования термины «ZAAV G», «мы», «нас» и «наш» относятся к WIN WIN SILVER, осуществляющей деятельность под брендом ZAAV G.",
    termsIntroLine3: "Настоящие Условия использования регулируют доступ к нашему сайту, а также использование наших товаров и услуг. Посещая этот сайт или оформляя заказ, вы соглашаетесь с настоящими Условиями.",
    termsIntroLine4: "Пожалуйста, внимательно ознакомьтесь с ними перед использованием сайта.",

    section1Title: "1. Информация о компании",
    sec1RegNameLabel: "Зарегистрированное наименование:",
    sec1RegNameVal: "WIN WIN SILVER",
    sec1BrandNameLabel: "Бренд:",
    sec1BrandNameVal: "ZAAV G",
    sec1WebsiteLabel: "Сайт:",
    sec1WebsiteVal: "zaavgbali.com",
    sec1CountryLabel: "Страна регистрации:",
    sec1CountryVal: "Индонезия",
    sec1ActivityLabel: "Вид деятельности:",
    sec1ActivityVal: "дизайн, производство и розничная продажа ювелирных изделий ручной работы.",
    sec1Text1: "ZAAV G — независимый ювелирный бренд, создающий на Бали, Индонезия, украшения ручной работы из серебра 925 пробы и натуральных камней.",
    sec1Text2: "Используя этот сайт, вы подтверждаете, что обладаете необходимой дееспособностью для заключения договора купли-продажи в соответствии с применимым к вам законодательством либо, если это требуется, получили согласие родителя или законного представителя.",
    sec1Text3: "Мы можем время от времени обновлять настоящие Условия. К вашей покупке применяется версия Условий, опубликованная на сайте на момент оформления заказа.",

    section2Title: "2. Товары и особенности ручной работы",
    sec2Text1: "Украшения ZAAV G изготавливаются вручную, а во многих изделиях используются натуральные камни и другие природные материалы, характеристики которых могут отличаться от изделия к изделию.",
    sec2Text2: "В силу ручного изготовления и природного происхождения используемых материалов:",
    sec2Item1: "возможны незначительные различия в текстуре, форме, размерах, цвете, рисунке камня и отделке;",
    sec2Item2: "натуральные камни могут иметь включения, различия в прозрачности, оттенках и внутренней структуре;",
    sec2Item3: "фактура ручной работы и небольшие различия между отдельными изделиями являются естественной особенностью и подчеркивают индивидуальность каждого украшения.",
    sec2Text3: "Такие естественные особенности материалов и различия, обусловленные ручной работой, не считаются производственными дефектами.",
    sec2Text4: "Мы прилагаем все разумные усилия для максимально точного отображения наших товаров на сайте. Однако оттенки и пропорции могут незначительно отличаться в зависимости от устройства и экрана, используемых для просмотра сайта.",

    section3Title: "3. Цены и валюта",
    sec3Text1: "Цены на товары отображаются на сайте в валюте, выбранной или указанной при оформлении заказа.",
    sec3Text2: "Если это необходимо в соответствии с требованиями индонезийских платежных систем или законодательства, цены также могут отображаться или обрабатываться в индонезийских рупиях (IDR).",
    sec3Text3: "Цены могут быть изменены без предварительного уведомления. Изменение цены не распространяется на уже подтвержденные заказы.",
    sec3Text4: "При международной доставке покупатель может быть обязан оплатить импортные пошлины, таможенные сборы, налоги или иные платежи, установленные страной назначения. Если при оформлении заказа прямо не указано иное, такие платежи не включены в стоимость товара или доставки и оплачиваются покупателем самостоятельно.",

    section4Title: "4. Заказы",
    sec4Text1: "После оформления заказа вы получите электронное подтверждение заказа.",
    sec4Text2: "Получение подтверждения заказа не лишает нас права отменить заказ, если для этого имеются обоснованные причины, в том числе в следующих случаях:",
    sec4Item1: "платеж не прошел или имеются основания подозревать мошенническую операцию;",
    sec4Item2: "на сайте была указана неверная информация о товаре или его цене;",
    sec4Item3: "заказ невозможно выполнить;",
    sec4Item4: "произошла ошибка в учете товарных остатков;",
    sec4Item5: "отмена необходима для соблюдения требований законодательства или регулирующих органов;",
    sec4Item6: "платежный провайдер запросил дополнительную проверку платежа или личности покупателя.",
    sec4Text3: "Если заказ отменен после успешного получения оплаты, соответствующая сумма будет возвращена тем же способом, которым была произведена оплата, если это технически возможно.",
    sec4Text4: "Мы оставляем за собой право ограничивать количество товаров, приобретаемых одним покупателем, если для этого имеются обоснованные причины.",

    section5Title: "5. Оплата",
    sec5Text1: "Платежи, совершаемые через сайт zaavgbali.com, обрабатываются уполномоченными сторонними платежными провайдерами.",
    sec5Text2: "WIN WIN SILVER / ZAAV G не хранит полные данные банковских карт в собственных системах.",
    sec5Text3: "Предоставляя платежную информацию, вы подтверждаете, что:",
    sec5Item1: "имеете право использовать выбранный способ оплаты;",
    sec5Item2: "предоставленная вами информация является полной и достоверной;",
    sec5Item3: "разрешаете соответствующему платежному провайдеру обработать транзакцию. Доступность способов оплаты, обработка и авторизация платежей, зачисление средств и возвраты также могут регулироваться условиями соответствующего платежного провайдера и банка-эмитента.",

    section6Title: "6. Доставка",
    sec6Text1: "ZAAV G осуществляет международную доставку с учетом доступности услуг перевозчиков и применимых ограничений.",
    sec6Text2: "Указанные сроки доставки являются ориентировочными и могут меняться в зависимости от:",
    sec6Item1: "страны назначения;",
    sec6Item2: "сроков таможенного оформления;",
    sec6Item3: "работы местных почтовых и курьерских служб;",
    sec6Item4: "государственных и праздничных дней;",
    sec6Item5: "погодных условий или перебоев в транспортном сообщении;",
    sec6Item6: "иных обстоятельств, находящихся вне нашего разумного контроля.",
    sec6Text3: "Мы не несем ответственности за задержки, вызванные действиями таможенных органов, транспортных компаний или иными обстоятельствами, находящимися вне нашего разумного контроля.",
    sec6Text4: "При оформлении заказа покупатель обязан предоставить полную и достоверную информацию, необходимую для доставки.",
    sec6Text5: "Все таможенные пошлины, импортные налоги и местные сборы, взимаемые в стране назначения, оплачиваются покупателем, если прямо не указано иное.",

    section7Title: "7. Возврат, обмен и возмещение денежных средств",
    sec7Text1: "Условия возврата, обмена и возмещения денежных средств регулируются нашей отдельной Политикой возврата и возмещения денежных средств, которая является неотъемлемой частью настоящих Условий использования.",
    sec7Text2: "Некоторые товары, включая персонализированные изделия, украшения, изготовленные по индивидуальному заказу или специально для конкретного покупателя, могут не подлежать возврату, за исключением случаев, предусмотренных применимым законодательством, или случаев наличия дефекта.",
    sec7Text3: "Если вы получили неправильный, поврежденный или дефектный товар, пожалуйста, свяжитесь с нами в разумно короткий срок и предоставьте информацию о заказе, а также фотографии изделия и упаковки.",
    sec7Text4: "Одобренный возврат денежных средств, как правило, осуществляется тем же способом, которым была произведена первоначальная оплата, с учетом процедур и сроков соответствующего платежного провайдера.",
    sec7Text5: "Ничто в настоящих Условиях не ограничивает обязательные права потребителей, которые не могут быть исключены или ограничены в соответствии с применимым законодательством.",

    section8Title: "8. Уход за украшениями",
    sec8Text1: "Украшения требуют бережного обращения и надлежащего хранения.",
    sec8Text2: "Чтобы сохранить внешний вид и свойства украшений, мы рекомендуем избегать длительного контакта с водой, парфюмерией, косметическими средствами, бытовой химией и другими веществами, способными повлиять на металл или натуральные камни.",
    sec8Text3: "Мы также рекомендуем снимать украшения перед плаванием, занятиями спортом, сном и любой деятельностью, при которой изделие может подвергнуться ударам или чрезмерному трению.",
    sec8Text4: "Естественные следы носки, окисление, царапины, а также изменения, возникшие вследствие использования, неправильного хранения, случайного повреждения или воздействия химических веществ, не считаются производственными дефектами.",

    section9Title: "9. Интеллектуальная собственность",
    sec9Text1: "Если прямо не указано иное, материалы сайта zaavgbali.com, включая фотографии, видео, тексты, графические материалы, логотипы, элементы фирменного стиля и оригинальные дизайны ювелирных изделий, принадлежат WIN WIN SILVER / ZAAV G либо используются ими на законных основаниях и защищены применимым законодательством об интеллектуальной собственности.",
    sec9Text2: "Материалы сайта не могут быть скопированы, воспроизведены, распространены, использованы в коммерческих целях, а также применяться для производства или продвижения конкурирующих товаров без предварительного письменного разрешения, за исключением случаев, когда такое использование допускается законодательством.",

    section10Title: "10. Допустимое использование сайта",
    sec10Intro: "Запрещается использовать этот сайт:",
    sec10Item1: "в незаконных или мошеннических целях;",
    sec10Item2: "для вмешательства в безопасность или работу сайта;",
    sec10Item3: "для попыток получения несанкционированного доступа к нашим системам;",
    sec10Item4: "для предоставления ложной или вводящей в заблуждение информации;",
    sec10Item5: "для нарушения прав интеллектуальной собственности или иных прав ZAAV G либо третьих лиц.",
    sec10Outro: "Мы оставляем за собой право ограничить доступ к сайту, если это обоснованно необходимо для защиты наших покупателей, бизнеса или информационных систем.",

    section11Title: "11. Ограничение ответственности",
    sec11Text1: "В максимально допустимой применимым законодательством степени WIN WIN SILVER / ZAAV G не несет ответственности за косвенные, случайные или последующие убытки, возникшие в связи с использованием сайта или товаров, если такая ответственность может быть правомерно исключена.",
    sec11Text2: "Мы не несем ответственности за ущерб или повреждения, возникшие вследствие использования изделия не по назначению, ненадлежащего обращения, несанкционированного изменения изделия или несоблюдения разумных рекомендаций по уходу за украшениями.",
    sec11Text3: "Ничто в настоящих Условиях не исключает и не ограничивает ответственность в случаях, когда такое исключение или ограничение запрещено законом, включая обязательные права потребителей, предусмотренные применимым законодательством.",

    section12Title: "12. Конфиденциальность",
    sec12Text: "Порядок сбора и обработки персональной информации описан в нашей Политике конфиденциальности. Используя наш сайт, вы подтверждаете, что ваша информация может обрабатываться сторонними поставщиками услуг в той мере, в которой это необходимо для предоставления наших услуг, включая платежных провайдеров, хостинг-провайдеров, аналитические сервисы и партнеров по доставке, с соблюдением применимых требований в области защиты персональных данных.",

    section13Title: "13. Применимое право",
    sec13Text1: "Настоящие Условия использования и сделки с WIN WIN SILVER / ZAAV G регулируются законодательством Республики Индонезия без ограничения обязательных прав потребителей, которые могут применяться к покупателям в соответствии с применимым законодательством.",
    sec13Text2: "В случае возникновения спора просим сначала связаться с нами, чтобы предоставить нам возможность урегулировать вопрос напрямую.",

    section14Title: "14. Контактная информация",
    sec14Intro: "По вопросам, связанным с настоящими Условиями, заказами или нашими услугами, пожалуйста, свяжитесь с нами:",
    contactCompany: "WIN WIN SILVER",
    contactBrand: "Осуществляет деятельность под брендом ZAAV G",
    contactLocation: "Бали, Индонезия",
    contactEmail: "zaavg.bali@gmail.com",
    contactWebsite: "zaavgbali.com",

    termsBtnCatalog: "Смотреть коллекции",
    termsBtnHome: "На главную",
  },
  id: {
    termsTitle: "Syarat Layanan",
    termsTitleSmall: "Syarat Layanan",
    termsUpdated: "Terakhir diperbarui: Agustus 2026",
    termsWelcome: "Selamat datang di ZAAV G.",
    termsIntroLine1: "Situs web ini, zaavgbali.com, dioperasikan oleh WIN WIN SILVER, sebuah bisnis yang terdaftar di Indonesia yang beroperasi di bawah merek komersial ZAAV G.",
    termsIntroLine2: "Di seluruh Syarat Layanan ini, istilah “ZAAV G,” “kami,” dan “milik kami” merujuk pada WIN WIN SILVER yang beroperasi di bawah merek ZAAV G.",
    termsIntroLine3: "Syarat Layanan ini mengatur akses Anda ke dan penggunaan situs web, produk, dan layanan kami. Dengan mengakses situs web ini atau melakukan pemesanan, Anda menyetujui Syarat ini.",
    termsIntroLine4: "Harap baca dengan cermat sebelum menggunakan situs web.",

    section1Title: "1. Informasi Bisnis",
    sec1RegNameLabel: "Nama bisnis terdaftar:",
    sec1RegNameVal: "WIN WIN SILVER",
    sec1BrandNameLabel: "Nama merek:",
    sec1BrandNameVal: "ZAAV G",
    sec1WebsiteLabel: "Situs web:",
    sec1WebsiteVal: "zaavgbali.com",
    sec1CountryLabel: "Negara pendaftaran:",
    sec1CountryVal: "Indonesia",
    sec1ActivityLabel: "Kegiatan bisnis:",
    sec1ActivityVal: "Desain, produksi, dan penjualan eceran perhiasan buatan tangan.",
    sec1Text1: "ZAAV G adalah merek perhiasan independen yang menciptakan perhiasan perak murni buatan tangan dan perhiasan dengan batu alam di Bali, Indonesia.",
    sec1Text2: "Dengan menggunakan situs web ini, Anda mengonfirmasi bahwa Anda secara hukum mampu membuat perjanjian pembelian di bawah hukum yang berlaku untuk Anda atau bahwa Anda memiliki izin dari orang tua atau wali sah jika diperlukan.",
    sec1Text3: "Kami dapat memperbarui Syarat ini dari waktu ke waktu. Versi yang dipublikasikan di situs web ini pada saat pemesanan Anda akan berlaku untuk pembelian tersebut.",

    section2Title: "2. Produk & Sifat Buatan Tangan",
    sec2Text1: "Perhiasan ZAAV G dibuat secara buatan tangan, dan banyak produk mengintegrasikan batu alam dan bahan lain yang secara alami bervariasi dari satu produk ke produk lainnya.",
    sec2Text2: "Karena sifat artisanal dan alami dari produk kami:",
    sec2Item1: "variasi kecil dalam tekstur, bentuk, dimensi, warna, pola batu, dan finishing dapat terjadi;",
    sec2Item2: "batu alam mungkin mengandung inklusi, variasi transparansi, warna, dan karakteristik internal;",
    sec2Item3: "tekstur buatan tangan dan perbedaan kecil antara masing-masing perhiasan adalah bagian dari karakter dan individualitas perhiasan.",
    sec2Text3: "Variasi alami dan buatan tangan tersebut tidak dianggap sebagai cacat produksi.",
    sec2Text4: "Kami melakukan setiap upaya yang wajar untuk menampilkan produk kami secara akurat. Namun, warna dan proporsi mungkin tampak sedikit berbeda tergantung pada perangkat atau layar yang digunakan.",

    section3Title: "3. Harga & Mata Uang",
    sec3Text1: "Harga produk ditampilkan di situs web dalam mata uang yang dipilih atau diindikasikan saat checkout.",
    sec3Text2: "Jika diperlukan untuk pemrosesan pembayaran dan persyaratan regulasi Indonesia kami, harga juga dapat ditampilkan atau diproses dalam Rupiah Indonesia (IDR).",
    sec3Text3: "Harga dapat diubah tanpa pemberitahuan sebelumnya. Perubahan harga tidak akan memengaruhi pesanan yang telah dikonfirmasi.",
    sec3Text4: "Pelanggan internasional mungkin bertanggung jawab atas bea masuk, biaya bea cukai, pajak, atau biaya lain yang dikenakan oleh negara tujuan. Kecuali dinyatakan lain secara tegas saat checkout, biaya-biaya ini tidak termasuk dalam harga produk atau pengiriman dan menjadi tanggung jawab pelanggan.",

    section4Title: "4. Pesanan",
    sec4Text1: "Setelah melakukan pemesanan, Anda akan menerima konfirmasi pesanan elektronik.",
    sec4Text2: "Penerimaan konfirmasi pesanan tidak menghalangi kami untuk membatalkan pesanan jika cukup diperlukan, termasuk dalam kasus:",
    sec4Item1: "kegagalan pembayaran atau dugaan aktivitas penipuan;",
    sec4Item2: "informasi produk atau harga yang tidak benar;",
    sec4Item3: "ketidakmampuan untuk memenuhi pesanan;",
    sec4Item4: "kesalahan inventaris;",
    sec4Item5: "persyaratan hukum atau regulasi;",
    sec4Item6: "permintaan untuk pembayaran tambahan atau verifikasi identitas oleh penyedia pembayaran kami.",
    sec4Text3: "Jika kami membatalkan pesanan setelah pembayaran berhasil diproses, jumlah yang berlaku akan dikembalikan menggunakan metode pembayaran asli jika memungkinkan.",
    sec4Text4: "Kami berhak membatasi jumlah yang dibeli oleh pelanggan individu jika cukup diperlukan.",

    section5Title: "5. Pembayaran",
    sec5Text1: "Pembayaran yang dilakukan melalui zaavgbali.com diproses oleh penyedia layanan pembayaran pihak ketiga yang berwenang.",
    sec5Text2: "WIN WIN SILVER / ZAAV G tidak menyimpan rincian kartu pembayaran lengkap di sistemnya sendiri.",
    sec5Text3: "Dengan mengirimkan informasi pembayaran, Anda mengonfirmasi bahwa:",
    sec5Item1: "Anda berwenang menggunakan metode pembayaran yang dipilih;",
    sec5Item2: "informasi yang Anda berikan lengkap dan akurat;",
    sec5Item3: "Anda memberi wewenang kepada penyedia pembayaran yang berlaku untuk memproses transaksi. Ketersediaan pembayaran, pemrosesan, otorisasi, penyelesaian, dan pengembalian dana juga dapat tunduk pada syarat dari penyedia pembayaran dan bank penerbit yang berlaku.",

    section6Title: "6. Pengiriman & Pengantaran",
    sec6Text1: "ZAAV G menawarkan pengiriman ke tujuan internasional, tergantung pada ketersediaan kurir dan pembatasan yang berlaku.",
    sec6Text2: "Perkiraan waktu pengiriman disediakan sebagai panduan saja dan dapat bervariasi karena:",
    sec6Item1: "negara tujuan;",
    sec6Item2: "proses bea cukai;",
    sec6Item3: "layanan pos atau kurir lokal;",
    sec6Item4: "hari libur nasional;",
    sec6Item5: "gangguan cuaca atau transportasi;",
    sec6Item6: "kejadian di luar kendali wajar kami.",
    sec6Text3: "Kami tidak bertanggung jawab atas keterlambatan yang disebabkan oleh otoritas bea cukai, perusahaan pengiriman, atau keadaan lain di luar kendali wajar kami.",
    sec6Text4: "Pelanggan bertanggung jawab untuk memberikan informasi pengiriman yang lengkap dan akurat saat melakukan pemesanan.",
    sec6Text5: "Setiap bea cukai, pajak impor, atau biaya lokal yang dikenakan di negara tujuan menjadi tanggung jawab pelanggan kecuali dinyatakan lain secara tegas.",

    section7Title: "7. Pengembalian, Penukaran & Pengembalian Dana",
    sec7Text1: "Pengembalian, penukaran, dan pengembalian dana diatur oleh Kebijakan Pengembalian Dana & Pengembalian terpisah kami, yang merupakan bagian dari Syarat Layanan ini.",
    sec7Text2: "Produk tertentu, termasuk produk kustom, dipersonalisasi, atau dibuat sesuai pesanan, mungkin tidak memenuhi syarat untuk dikembalikan kecuali diwajibkan oleh hukum yang berlaku atau jika barang tersebut cacat.",
    sec7Text3: "Jika Anda menerima barang yang salah, rusak, atau cacat, silakan hubungi kami sesegera mungkin dan berikan informasi pesanan serta foto barang dan kemasan.",
    sec7Text4: "Pengembalian dana yang disetujui biasanya akan dikembalikan melalui metode pembayaran asli, tunduk pada prosedur pemrosesan dari penyedia pembayaran yang berlaku.",
    sec7Text5: "Tidak ada dalam Syarat ini yang mengecualikan atau membatasi hak-hak konsumen wajib yang tidak dapat dikecualikan secara hukum.",

    section8Title: "8. Perawatan Perhiasan",
    sec8Text1: "Perhiasan kami harus ditangani dan disimpan dengan perawatan yang tepat.",
    sec8Text2: "Untuk membantu menjaga perhiasan Anda, kami menyarankan untuk menghindari kontak berkepanjangan dengan air, parfum, kosmetik, bahan kimia rumah tangga, dan zat lain yang dapat memengaruhi logam atau batu alam.",
    sec8Text3: "Kami juga menyarankan untuk melepas perhiasan sebelum berenang, berolahraga, tidur, atau melakukan aktivitas yang dapat mengeposkan perhiasan pada benturan atau gesekan berlebihan.",
    sec8Text4: "Keausan alami, oksidasi, goresan, atau perubahan akibat penggunaan, penyimpanan yang tidak tepat, kerusakan tidak sengaja, atau paparan bahan kimia tidak dianggap sebagai cacat produksi.",

    section9Title: "9. Kekayaan Intelektual",
    sec9Text1: "Kecuali dinyatakan lain, konten zaavgbali.com, termasuk foto, video, teks, grafik, logo, elemen merek, dan desain perhiasan asli, dimiliki atau digunakan secara sah oleh WIN WIN SILVER / ZAAV G dan dilindungi oleh hukum kekayaan intelektual yang berlaku.",
    sec9Text2: "Konten dari situs web ini tidak boleh disalin, direproduksi, didistribusikan, dimanfaatkan secara komersial, atau digunakan untuk memproduksi atau memasarkan produk pesaing tanpa izin tertulis sebelumnya, kecuali jika penggunaan tersebut diizinkan oleh hukum.",

    section10Title: "10. Penggunaan yang Diterima",
    sec10Intro: "Anda tidak boleh menggunakan situs web ini:",
    sec10Item1: "untuk tujuan yang melanggar hukum atau penipuan;",
    sec10Item2: "untuk mengganggu keamanan atau pengoperasian situs web;",
    sec10Item3: "untuk mencoba akses tidak sah ke sistem kami;",
    sec10Item4: "untuk mengirimkan informasi palsu atau menyesatkan;",
    sec10Item5: "untuk melanggar kekayaan intelektual atau hak lain dari ZAAV G atau pihak ketiga.",
    sec10Outro: "Kami berhak membatasi akses ke situs web jika cukup diperlukan untuk melindungi pelanggan, bisnis, atau sistem kami.",

    section11Title: "11. Pembatasan Tanggung Jawab",
    sec11Text1: "Sejauh yang diizinkan oleh hukum yang berlaku, WIN WIN SILVER / ZAAV G tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan situs web atau produk jika tanggung jawab tersebut dapat dikecualikan secara sah.",
    sec11Text2: "Kami tidak bertanggung jawab atas kerugian atau kerusakan akibat penyalahgunaan, penanganan yang tidak tepat, perubahan tidak sah, atau kegagalan untuk mengikuti petunjuk perawatan perhiasan yang wajar.",
    sec11Text3: "Tidak ada dalam Syarat ini yang mengecualikan atau membatasi tanggung jawab yang tidak dapat dikecualikan atau dibatasi secara sah, termasuk hak-hak konsumen wajib di bawah hukum yang berlaku.",

    section12Title: "12. Privasi",
    sec12Text: "Pengumpulan dan pemrosesan informasi pribadi kami dijelaskan dalam Kebijakan Privasi kami. Dengan menggunakan situs web kami, Anda mengakui bahwa informasi Anda dapat diproses oleh penyedia layanan pihak ketiga jika diperlukan untuk menyediakan layanan kami, termasuk pemroses pembayaran, penyedia hosting, penyedia analitik, dan mitra pengiriman, tunduk pada persyaratan privasi yang berlaku.",

    section13Title: "13. Hukum yang Berlaku",
    sec13Text1: "Syarat Layanan ini dan transaksi dengan WIN WIN SILVER / ZAAV G diatur oleh hukum Republik Indonesia, tanpa membatasi hak perlindungan konsumen wajib yang dapat berlaku bagi pelanggan di bawah hukum yang berlaku.",
    sec13Text2: "Setiap perselisihan harus terlebih dahulu disampaikan dengan menghubungi kami agar kami memiliki kesempatan untuk menyelesaikan masalah tersebut secara langsung.",

    section14Title: "14. Informasi Kontak",
    sec14Intro: "Untuk pertanyaan tentang Syarat ini, pesanan, atau layanan kami, silakan hubungi:",
    contactCompany: "WIN WIN SILVER",
    contactBrand: "Beroperasi di bawah merek ZAAV G",
    contactLocation: "Bali, Indonesia",
    contactEmail: "zaavg.bali@gmail.com",
    contactWebsite: "zaavgbali.com",

    termsBtnCatalog: "Lihat Katalog",
    termsBtnHome: "Beranda",
  },
};

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

        {/* Content Section */}
        <div id="termsContent" className="py-24 px-6 md:px-10 lg:px-16 max-w-4xl mx-auto">
            <h1 className="text-base sm:text-6xl text-black font-semibold leading-[1.9]">{t.termsTitleSmall}</h1>
          <p className="text-sm text-neutral-500 italic mb-10">{t.termsUpdated}</p>

          <div className="mb-12 space-y-4">
            <p className="text-base sm:text-lg text-neutral-900 font-semibold leading-[1.9]">{t.termsWelcome}</p>
            <p className="text-base sm:text-lg text-neutral-600 leading-[1.9]">{t.termsIntroLine1}</p>
            <p className="text-base sm:text-lg text-neutral-600 leading-[1.9]">{t.termsIntroLine2}</p>
            <p className="text-base sm:text-lg text-neutral-600 leading-[1.9]">{t.termsIntroLine3}</p>
            <p className="text-base sm:text-lg text-neutral-600 leading-[1.9]">{t.termsIntroLine4}</p>
          </div>

          {/* 1. Business Information */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.section1Title}</h2>
            <ul className="list-none space-y-2 my-4 pl-0">
              <li className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                <strong className="text-neutral-900">{t.sec1RegNameLabel}</strong> {t.sec1RegNameVal}
              </li>
              <li className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                <strong className="text-neutral-900">{t.sec1BrandNameLabel}</strong> {t.sec1BrandNameVal}
              </li>
              <li className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                <strong className="text-neutral-900">{t.sec1WebsiteLabel}</strong> {t.sec1WebsiteVal}
              </li>
              <li className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                <strong className="text-neutral-900">{t.sec1CountryLabel}</strong> {t.sec1CountryVal}
              </li>
              <li className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                <strong className="text-neutral-900">{t.sec1ActivityLabel}</strong> {t.sec1ActivityVal}
              </li>
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec1Text1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec1Text2}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec1Text3}</p>
          </div>

          {/* 2. Products & Handmade Nature */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.section2Title}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec2Text1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec2Text2}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.sec2Item1, t.sec2Item2, t.sec2Item3].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec2Text3}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec2Text4}</p>
          </div>

          {/* 3. Prices & Currency */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.section3Title}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec3Text1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec3Text2}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec3Text3}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec3Text4}</p>
          </div>

          {/* 4. Orders */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.section4Title}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec4Text1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec4Text2}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.sec4Item1, t.sec4Item2, t.sec4Item3, t.sec4Item4, t.sec4Item5, t.sec4Item6].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec4Text3}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec4Text4}</p>
          </div>

          {/* 5. Payments */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.section5Title}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec5Text1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec5Text2}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec5Text3}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.sec5Item1, t.sec5Item2, t.sec5Item3].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 6. Shipping & Delivery */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.section6Title}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec6Text1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec6Text2}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.sec6Item1, t.sec6Item2, t.sec6Item3, t.sec6Item4, t.sec6Item5, t.sec6Item6].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec6Text3}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec6Text4}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec6Text5}</p>
          </div>

          {/* 7. Returns, Exchanges & Refunds */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.section7Title}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec7Text1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec7Text2}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec7Text3}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec7Text4}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec7Text5}</p>
          </div>

          {/* 8. Jewelry Care */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.section8Title}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec8Text1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec8Text2}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec8Text3}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec8Text4}</p>
          </div>

          {/* 9. Intellectual Property */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.section9Title}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec9Text1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec9Text2}</p>
          </div>

          {/* 10. Acceptable Use */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.section10Title}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec10Intro}</p>
            <ul className="list-none space-y-2 mt-3 mb-6 pl-0">
              {[t.sec10Item1, t.sec10Item2, t.sec10Item3, t.sec10Item4, t.sec10Item5].map((item, i) => (
                <li key={i} className="relative pl-6 text-neutral-600 text-base leading-[1.7] before:content-['•'] before:absolute before:left-1 before:text-neutral-900 before:font-bold before:text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec10Outro}</p>
          </div>

          {/* 11. Limitation of Liability */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.section11Title}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec11Text1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec11Text2}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec11Text3}</p>
          </div>

          {/* 12. Privacy */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.section12Title}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec12Text}</p>
          </div>

          {/* 13. Governing Law */}
          <div className="mb-12 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.section13Title}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec13Text1}</p>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec13Text2}</p>
          </div>

          {/* 14. Contact Information */}
          <div className="bg-[#f9f9f9] p-6 sm:p-8 rounded-xl my-10 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5 leading-tight">{t.section14Title}</h2>
            <p className="text-base text-neutral-600 leading-[1.9]">{t.sec14Intro}</p>
            <div className="text-base text-neutral-900 leading-[1.9] mt-4">
              <span className="font-semibold">{t.contactCompany}</span><br />
              <span className="text-neutral-600">{t.contactBrand}</span><br />
              <span className="text-neutral-600">{t.contactLocation}</span><br />
              📩 <a href={`mailto:${t.contactEmail}`} className="text-[#008060] font-normal hover:underline">{t.contactEmail}</a><br />
              🌐 <a href={`https://${t.contactWebsite}`} target="_blank" rel="noopener noreferrer" className="text-[#008060] font-normal hover:underline">{t.contactWebsite}</a>
            </div>
          </div>
        </div>

        {/* Action Buttons Block */}
        <section className="py-16 px-6 bg-white flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
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