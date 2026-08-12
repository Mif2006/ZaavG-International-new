import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PublicShell } from "@/components/public-shell";

export const Route = createFileRoute("/size")({
  head: () => ({
    meta: [
      { title: "Size Guide — ZAAV G" },
      {
        name: "description",
        content: "Find your perfect fit for rings, bracelets, and necklaces with the ZAAV G Size Guide.",
      },
      { property: "og:title", content: "Size Guide — ZAAV G" },
      {
        property: "og:description",
        content: "Find your perfect fit for rings, bracelets, and necklaces with the ZAAV G Size Guide.",
      },
    ],
  }),
  component: SizeGuidePage,
});

type Lang = "en" | "ru" | "id";

const T: Record<
  Lang,
  {
    sizeguideTitle: string;
    sizeguideUpdated: string;
    sizeguideIntro: string;
    ringsTitle: string;
    ringsOption1Title: string;
    ringsOption1Text: string;
    imgRingAlt: string;
    ringsOption2Title: string;
    ringsOption2Step1: string;
    ringsOption2Step2: string;
    ringsOption2Step3: string;
    imgThreadAlt: string;
    ringsWideTip: string;
    ringTableTitle: string;
    ringTableNote: string;
    tableDiameter: string;
    tableCircumference: string;
    tableSize: string;
    tableUS: string;
    tableEU: string;
    braceletsTitle: string;
    braceletsIntro: string;
    braceletsStep1: string;
    braceletsStep2: string;
    fitClose: string;
    fitCloseValue: string;
    fitComfortable: string;
    fitComfortableValue: string;
    fitLoose: string;
    fitLooseValue: string;
    braceletsTip: string;
    necklacesTitle: string;
    necklacesIntro: string;
    necklacesTypical: string;
    neck40: string;
    neck45: string;
    neck5060: string;
    necklacesNote: string;
    helpTitle: string;
    helpIntro: string;
    helpClosing: string;
    sizeguideBtnCatalog: string;
    sizeguideBtnHome: string;
  }
> = {
  en: {
    sizeguideTitle: "SIZE GUIDE",
    sizeguideUpdated: "Last updated: May 2026",
    sizeguideIntro:
      "Finding the right size is an important part of choosing jewelry that feels comfortable, natural, and easy to wear every day.\nBelow you'll find simple recommendations to help you choose the best size for your ZAAV G piece.",
    ringsTitle: "Rings",
    ringsOption1Title: "Option 1 — Measure an Existing Ring",
    ringsOption1Text:
      "Choose a ring that fits the desired finger comfortably.\nMeasure the inside diameter of the ring in millimeters and compare it with the size chart below.",
    imgRingAlt: "Measuring ring diameter",
    ringsOption2Title: "Option 2 — Measure Your Finger",
    ringsOption2Step1:
      "Wrap a thin strip of paper or a soft measuring tape around your finger",
    ringsOption2Step2:
      "Make sure it feels comfortable — not too tight and not too loose",
    ringsOption2Step3:
      "Measure the length in millimeters and compare it with a standard ring size chart",
    imgThreadAlt: "Measuring finger with thread",
    ringsWideTip:
      "For wider rings, we usually recommend choosing half a size larger for a more comfortable fit.",
    ringTableTitle: "Ring Size Reference",
    ringTableNote:
      "Measure your ring's inside diameter or finger circumference and find your size below.",
    tableDiameter: "Diameter (mm)",
    tableCircumference: "Circumference (mm)",
    tableSize: "ZAAV G Size",
    tableUS: "US",
    tableEU: "EU",
    braceletsTitle: "Bracelets",
    braceletsIntro: "To find your bracelet size:",
    braceletsStep1: "Measure your wrist using a soft measuring tape",
    braceletsStep2:
      "Add the recommended allowance for your preferred fit",
    fitClose: "Close Fit",
    fitCloseValue: "+1–1.5 cm",
    fitComfortable: "Comfortable Fit",
    fitComfortableValue: "+1.5–2 cm",
    fitLoose: "Loose Fit",
    fitLooseValue: "+2–3 cm",
    braceletsTip:
      "If you are unsure between sizes, we generally recommend choosing the larger size.",
    necklacesTitle: "Necklaces",
    necklacesIntro:
      "Necklace lengths may look different depending on body shape and styling preferences.",
    necklacesTypical: "Typical lengths:",
    neck40: "Close to the neck",
    neck45: "Classic everyday length",
    neck5060: "Relaxed and layered look",
    necklacesNote:
      "Please refer to product photos for styling inspiration and fit.",
    helpTitle: "Need Help?",
    helpIntro:
      "If you are unsure about sizing, we will be happy to help you choose the best fit.",
    helpClosing:
      "We want your ZAAV G piece to feel as beautiful and comfortable as it looks.",
    sizeguideBtnCatalog: "View Collections",
    sizeguideBtnHome: "Home",
  },
  ru: {
    sizeguideTitle: "УЗНАТЬ РАЗМЕР",
    sizeguideUpdated: "Последнее обновление: май 2026",
    sizeguideIntro:
      "Правильный подбор размера — важная часть выбора украшений, которые будут удобными, естественными и легкими в носке каждый день.\nНиже вы найдете простые рекомендации, которые помогут выбрать лучший размер для вашего изделия ZAAV G.",
    ringsTitle: "Кольца",
    ringsOption1Title: "Вариант 1 — Измерьте существующее кольцо",
    ringsOption1Text:
      "Выберите кольцо, которое удобно сидит на нужном пальце.\nИзмерьте внутренний диаметр кольца в миллиметрах и сравните его с таблицей размеров ниже.",
    imgRingAlt: "Измерение диаметра кольца",
    ringsOption2Title: "Вариант 2 — Измерьте палец",
    ringsOption2Step1:
      "Оберните тонкую полоску бумаги или мягкую измерительную ленту вокруг пальца",
    ringsOption2Step2:
      "Убедитесь, что она сидит комфортно — не слишком туго и не слишком свободно",
    ringsOption2Step3:
      "Измерьте длину в миллиметрах и сравните со стандартной таблицей размеров колец",
    imgThreadAlt: "Измерение пальца с помощью нитки",
    ringsWideTip:
      "Для более широких колец мы обычно рекомендуем выбрать на полразмера больше для более удобной посадки.",
    ringTableTitle: "Справочник размеров колец",
    ringTableNote:
      "Измерьте внутренний диаметр вашего кольца или окружность пальца и найдите свой размер ниже.",
    tableDiameter: "Диаметр (мм)",
    tableCircumference: "Окружность (мм)",
    tableSize: "Размер ZAAV G",
    tableUS: "США",
    tableEU: "ЕС",
    braceletsTitle: "Браслеты",
    braceletsIntro: "Чтобы определить размер браслета:",
    braceletsStep1:
      "Измерьте запястье с помощью мягкой измерительной ленты",
    braceletsStep2:
      "Добавьте рекомендуемый припуск для желаемой посадки",
    fitClose: "Плотная посадка",
    fitCloseValue: "+1–1,5 см",
    fitComfortable: "Комфортная посадка",
    fitComfortableValue: "+1,5–2 см",
    fitLoose: "Свободная посадка",
    fitLooseValue: "+2–3 см",
    braceletsTip:
      "Если вы сомневаетесь между размерами, мы обычно рекомендуем выбрать больший размер.",
    necklacesTitle: "Колье/цепи",
    necklacesIntro:
      "Длина ожерелий может выглядеть по-разному в зависимости от формы тела и предпочтений в стиле.",
    necklacesTypical: "Типичные длины:",
    neck40: "Близко к шее",
    neck45: "Классическая повседневная длина",
    neck5060: "Расслабленный многослойный образ",
    necklacesNote:
      "Пожалуйста, обратитесь к фотографиям товаров для вдохновения в стиле и примерке.",
    helpTitle: "Нужна помощь?",
    helpIntro:
      "Если вы не уверены в размере, мы будем рады помочь вам выбрать лучшую посадку.",
    helpClosing:
      "Мы хотим, чтобы ваше изделие ZAAV G было таким же красивым и удобным, как и выглядит.",
    sizeguideBtnCatalog: "Смотреть коллекции",
    sizeguideBtnHome: "На главную",
  },
  id: {
    sizeguideTitle: "PANDUAN UKURAN",
    sizeguideUpdated: "Terakhir diperbarui: Mei 2026",
    sizeguideIntro:
      "Menemukan ukuran yang tepat adalah bagian penting dalam memilih perhiasan yang terasa nyaman, alami, dan mudah dipakai setiap hari.\nDi bawah ini Anda akan menemukan rekomendasi sederhana untuk membantu Anda memilih ukuran terbaik untuk pieces ZAAV G Anda.",
    ringsTitle: "Cincin",
    ringsOption1Title: "Opsi 1 — Ukur Cincin yang Sudah Ada",
    ringsOption1Text:
      "Pilih cincin yang pas dengan jari yang diinginkan dengan nyaman.\nUkur diameter dalam cincin dalam milimeter dan bandingkan dengan tabel ukuran di bawah.",
    imgRingAlt: "Mengukur diameter cincin",
    ringsOption2Title: "Opsi 2 — Ukur Jari Anda",
    ringsOption2Step1:
      "Lilitkan strip kertas tipis atau pita pengukur lunak di sekitar jari Anda",
    ringsOption2Step2:
      "Pastikan terasa nyaman — tidak terlalu ketat dan tidak terlalu longgar",
    ringsOption2Step3:
      "Ukur panjangnya dalam milimeter dan bandingkan dengan tabel ukuran cincin standar",
    imgThreadAlt: "Mengukur jari dengan benang",
    ringsWideTip:
      "Untuk cincin yang lebih lebar, kami biasanya merekomendasikan memilih setengah ukuran lebih besar untuk kenyamanan yang lebih baik.",
    ringTableTitle: "Referensi Ukuran Cincin",
    ringTableNote:
      "Ukur diameter dalam cincin Anda atau keliling jari dan temukan ukuran Anda di bawah.",
    tableDiameter: "Diameter (mm)",
    tableCircumference: "Keliling (mm)",
    tableSize: "Ukuran ZAAV G",
    tableUS: "AS",
    tableEU: "EU",
    braceletsTitle: "Gelang",
    braceletsIntro: "Untuk menemukan ukuran gelang Anda:",
    braceletsStep1:
      "Ukur pergelangan tangan Anda menggunakan pita pengukur lunak",
    braceletsStep2:
      "Tambahkan kelonggaran yang direkomendasikan untuk kenyamanan yang Anda inginkan",
    fitClose: "Pas Ketat",
    fitCloseValue: "+1–1,5 cm",
    fitComfortable: "Pas Nyaman",
    fitComfortableValue: "+1,5–2 cm",
    fitLoose: "Pas Longgar",
    fitLooseValue: "+2–3 cm",
    braceletsTip:
      "Jika Anda ragu antara ukuran, kami umumnya merekomendasikan memilih ukuran yang lebih besar.",
    necklacesTitle: "Kalung",
    necklacesIntro:
      "Panjang kalung mungkin terlihat berbeda tergantung pada bentuk tubuh dan preferensi gaya.",
    necklacesTypical: "Panjang khas:",
    neck40: "Dekat dengan leher",
    neck45: "Panjang klasik sehari-hari",
    neck5060: "Tampilan santai dan berlapis",
    necklacesNote:
      "Silakan merujuk ke foto produk untuk inspirasi gaya dan contoh pemakaian.",
    helpTitle: "Butuh Bantuan?",
    helpIntro:
      "Jika Anda tidak yakin tentang ukuran, kami akan dengan senang hati membantu Anda memilih ukuran yang paling pas.",
    helpClosing:
      "Kami ingin pieces ZAAV G Anda terasa seindah dan senyaman tampilannya.",
    sizeguideBtnCatalog: "Lihat Katalog",
    sizeguideBtnHome: "Beranda",
  },
};

const instructionImages = {
  ru: {
    ring: "https://cdn.shopify.com/s/files/1/0987/8745/9350/files/ring.png?v=1778338698",
    finger:
      "https://cdn.shopify.com/s/files/1/0987/8745/9350/files/thread.png?v=1778338698",
  },
  en: {
    ring: "https://cdn.shopify.com/s/files/1/0987/8745/9350/files/IMG_1918.jpg?v=1778245689",
    finger:
      "https://cdn.shopify.com/s/files/1/0987/8745/9350/files/ChatGPT_Image_May_4_2026_06_13_14_AM.png?v=1777864430",
  },
  id: {
    ring: "https://cdn.shopify.com/s/files/1/0987/8745/9350/files/IMG_1918.jpg?v=1778245689",
    finger:
      "https://cdn.shopify.com/s/files/1/0987/8745/9350/files/ChatGPT_Image_May_4_2026_06_13_14_AM.png?v=1777864430",
  },
};

const ringSizes = [
  { diameter: "14.9", circumference: "46.8", zaavg: "15", us: "4", eu: "47" },
  { diameter: "15.3", circumference: "48.0", zaavg: "15.5", us: "4.5", eu: "48" },
  { diameter: "15.7", circumference: "49.3", zaavg: "16", us: "5", eu: "49" },
  { diameter: "16.1", circumference: "50.6", zaavg: "16.5", us: "5.5", eu: "50" },
  { diameter: "16.5", circumference: "51.8", zaavg: "17", us: "6", eu: "51" },
  { diameter: "16.9", circumference: "53.1", zaavg: "17.5", us: "6.5", eu: "52" },
  { diameter: "17.3", circumference: "54.4", zaavg: "18", us: "7", eu: "53" },
  { diameter: "17.7", circumference: "55.6", zaavg: "18.5", us: "7.5", eu: "54" },
  { diameter: "18.2", circumference: "56.9", zaavg: "19", us: "8", eu: "55" },
  { diameter: "18.5", circumference: "58.1", zaavg: "19.5", us: "8.5", eu: "56" },
  { diameter: "18.9", circumference: "59.4", zaavg: "20", us: "9", eu: "57" },
  { diameter: "19.4", circumference: "60.6", zaavg: "20.5", us: "9.5", eu: "58" },
  { diameter: "19.8", circumference: "61.9", zaavg: "21", us: "10", eu: "59" },
];

function SizeGuidePage() {
  const { lang } = useI18n();
  const t = T[lang as Lang] || T.en;
  const images = instructionImages[lang as Lang] || instructionImages.en;

  const scrollToContent = () => {
    const el = document.getElementById("sizeguideContent");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const renderWithLineBreaks = (text: string) => {
    return text.split("\n").map((line, idx, array) => (
      <React.Fragment key={idx}>
        {line}
        {idx < array.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <PublicShell>
      <div className="min-h-screen bg-white font-sans text-[#1a1a1a] leading-relaxed">
        {/* Hero Section */}
        <section className="relative flex h-[50vh] min-h-[300px] md:min-h-[480px] items-center justify-center bg-[url('https://cdn.shopify.com/s/files/1/0987/8745/9350/files/IMG_1328.jpg?v=1776287860')] bg-cover bg-center bg-scroll md:bg-fixed overflow-hidden">
          <div className="absolute inset-0 bg-[#0a140f]/75 z-10" />
          <div className="relative z-20 text-center px-5">
            <h1
              className={`font-bold text-white uppercase leading-tight mb-8 md:mb-10 drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-200 ${
                lang === "ru"
                  ? "text-[clamp(1.75rem,5vw,3rem)] tracking-[0.1em]"
                  : "text-[clamp(2rem,6vw,4rem)] tracking-[0.15em]"
              }`}
            >
              {t.sizeguideTitle}
            </h1>
            <button
              type="button"
              onClick={scrollToContent}
              className="w-10 h-10 border-2 border-white/60 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-white hover:translate-y-1 animate-bounce mx-auto mt-7.5"
              aria-label="Scroll to content"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 stroke-white fill-none stroke-2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        </section>

        {/* Content Section */}
        <div
          id="sizeguideContent"
          className="max-w-[900px] mx-auto px-5 py-[50px] md:px-10 md:py-[80px] lg:px-[60px] lg:py-[100px]"
        >
          <div className="mb-[50px] text-center">
            <p className="text-base md:text-[1.05rem] text-[#555] leading-[1.9] mb-5">
              {renderWithLineBreaks(t.sizeguideIntro)}
            </p>
          </div>

          {/* Rings Section */}
          <div className="mb-[50px] text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-[#1a1a1a] mb-5 leading-snug">
              {t.ringsTitle}
            </h2>
          </div>

          {/* Option 1: Measure Existing Ring */}
          <div className="my-10 p-5 md:p-[30px] lg:p-10 bg-[#f9f9f9] rounded-xl text-left">
            <h3 className="text-lg md:text-[1.3rem] font-semibold text-[#1a1a1a] mb-4">
              {t.ringsOption1Title}
            </h3>
            <p className="text-base text-[#555] leading-[1.8] mb-4">
              {renderWithLineBreaks(t.ringsOption1Text)}
            </p>
            <div className="max-w-[400px] mt-6 mx-auto block text-center">
              <img
                src={images.ring}
                alt={t.imgRingAlt}
                className="max-w-full h-auto rounded-lg shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-opacity duration-200"
              />
            </div>
          </div>

          {/* Option 2: Measure Finger with Thread */}
          <div className="my-10 p-5 md:p-[30px] lg:p-10 bg-[#f9f9f9] rounded-xl text-left">
            <h3 className="text-lg md:text-[1.3rem] font-semibold text-[#1a1a1a] mb-4">
              {t.ringsOption2Title}
            </h3>
            <ul className="list-none p-0 my-4 text-left max-w-[600px] mx-auto space-y-1">
              <li className="py-1.5 pl-6 relative text-base text-[#555] leading-[1.7] before:content-['•'] before:absolute before:left-2 before:text-[#1a1a1a] before:font-bold before:text-lg">
                {t.ringsOption2Step1}
              </li>
              <li className="py-1.5 pl-6 relative text-base text-[#555] leading-[1.7] before:content-['•'] before:absolute before:left-2 before:text-[#1a1a1a] before:font-bold before:text-lg">
                {t.ringsOption2Step2}
              </li>
              <li className="py-1.5 pl-6 relative text-base text-[#555] leading-[1.7] before:content-['•'] before:absolute before:left-2 before:text-[#1a1a1a] before:font-bold before:text-lg">
                {t.ringsOption2Step3}
              </li>
            </ul>
            <div className="max-w-[400px] mt-6 mx-auto block text-center">
              <img
                src={images.finger}
                alt={t.imgThreadAlt}
                className="max-w-full h-auto rounded-lg shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-opacity duration-200"
              />
            </div>
            <p className="text-base text-[#555] leading-[1.8] mt-4 mb-4">
              {t.ringsWideTip}
            </p>
          </div>

          {/* Ring Size Table */}
          <div className="mb-[50px] text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-[#1a1a1a] mb-5 leading-snug">
              {t.ringTableTitle}
            </h2>
            <p className="text-base md:text-[1.05rem] text-[#555] leading-[1.9] mb-5">
              {t.ringTableNote}
            </p>
            <div className="overflow-x-auto my-[30px] rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
              <table className="w-full border-collapse bg-white text-xs md:text-sm min-w-[500px]">
                <thead>
                  <tr className="bg-[#4ecdc4] text-white">
                    <th className="p-2.5 md:p-4 text-center font-semibold border border-[#4ecdc4]">
                      {t.tableDiameter}
                    </th>
                    <th className="p-2.5 md:p-4 text-center font-semibold border border-[#4ecdc4]">
                      {t.tableCircumference}
                    </th>
                    <th className="p-2.5 md:p-4 text-center font-semibold border border-[#4ecdc4]">
                      {t.tableSize}
                    </th>
                    <th className="p-2.5 md:p-4 text-center font-semibold border border-[#4ecdc4]">
                      {t.tableUS}
                    </th>
                    <th className="p-2.5 md:p-4 text-center font-semibold border border-[#4ecdc4]">
                      {t.tableEU}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ringSizes.map((row, idx) => (
                    <tr
                      key={idx}
                      className="even:bg-[#f9f9f9] hover:bg-[#f0f0f0]"
                    >
                      <td className="p-2.5 md:p-3 text-center border border-[#e0e0e0] text-[#555]">
                        {row.diameter}
                      </td>
                      <td className="p-2.5 md:p-3 text-center border border-[#e0e0e0] text-[#555]">
                        {row.circumference}
                      </td>
                      <td className="p-2.5 md:p-3 text-center border border-[#e0e0e0] text-[#555]">
                        {row.zaavg}
                      </td>
                      <td className="p-2.5 md:p-3 text-center border border-[#e0e0e0] text-[#555]">
                        {row.us}
                      </td>
                      <td className="p-2.5 md:p-3 text-center border border-[#e0e0e0] text-[#555]">
                        {row.eu}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bracelets Section */}
          <div className="mb-[50px] text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-[#1a1a1a] mb-5 leading-snug">
              {t.braceletsTitle}
            </h2>
            <p className="text-base md:text-[1.05rem] text-[#555] leading-[1.9] mb-5">
              {t.braceletsIntro}
            </p>
            <ul className="list-none p-0 my-4 text-left max-w-[600px] mx-auto space-y-1">
              <li className="py-1.5 pl-6 relative text-base text-[#555] leading-[1.7] before:content-['•'] before:absolute before:left-2 before:text-[#1a1a1a] before:font-bold before:text-lg">
                {t.braceletsStep1}
              </li>
              <li className="py-1.5 pl-6 relative text-base text-[#555] leading-[1.7] before:content-['•'] before:absolute before:left-2 before:text-[#1a1a1a] before:font-bold before:text-lg">
                {t.braceletsStep2}
              </li>
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 my-6 text-left max-w-[700px] mx-auto">
              <div className="p-4 bg-white border border-[#e5e5e5] rounded-lg text-center">
                <div className="font-semibold text-[#1a1a1a] mb-1 text-[0.95rem]">
                  {t.fitClose}
                </div>
                <div className="text-[0.9rem] text-[#555]">
                  {t.fitCloseValue}
                </div>
              </div>
              <div className="p-4 bg-white border border-[#e5e5e5] rounded-lg text-center">
                <div className="font-semibold text-[#1a1a1a] mb-1 text-[0.95rem]">
                  {t.fitComfortable}
                </div>
                <div className="text-[0.9rem] text-[#555]">
                  {t.fitComfortableValue}
                </div>
              </div>
              <div className="p-4 bg-white border border-[#e5e5e5] rounded-lg text-center">
                <div className="font-semibold text-[#1a1a1a] mb-1 text-[0.95rem]">
                  {t.fitLoose}
                </div>
                <div className="text-[0.9rem] text-[#555]">
                  {t.fitLooseValue}
                </div>
              </div>
            </div>

            <p className="text-base md:text-[1.05rem] text-[#555] leading-[1.9] mb-5">
              {t.braceletsTip}
            </p>
          </div>

          {/* Necklaces Section */}
          <div className="mb-[50px] text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-[#1a1a1a] mb-5 leading-snug">
              {t.necklacesTitle}
            </h2>
            <p className="text-base md:text-[1.05rem] text-[#555] leading-[1.9] mb-5">
              {t.necklacesIntro}
            </p>
            <p className="text-base md:text-[1.05rem] text-[#555] leading-[1.9] mb-5">
              {t.necklacesTypical}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 my-6 text-left max-w-[700px] mx-auto">
              <div className="p-4 bg-[#f9f9f9] rounded-lg border-l-3 border-[#008060]">
                <div className="font-semibold text-[#1a1a1a] mb-1 text-base">
                  40 cm
                </div>
                <div className="text-[0.9rem] text-[#555]">{t.neck40}</div>
              </div>
              <div className="p-4 bg-[#f9f9f9] rounded-lg border-l-3 border-[#008060]">
                <div className="font-semibold text-[#1a1a1a] mb-1 text-base">
                  45 cm
                </div>
                <div className="text-[0.9rem] text-[#555]">{t.neck45}</div>
              </div>
              <div className="p-4 bg-[#f9f9f9] rounded-lg border-l-3 border-[#008060]">
                <div className="font-semibold text-[#1a1a1a] mb-1 text-base">
                  50–60 cm
                </div>
                <div className="text-[0.9rem] text-[#555]">{t.neck5060}</div>
              </div>
            </div>

            <p className="text-base md:text-[1.05rem] text-[#555] leading-[1.9] mb-5">
              {t.necklacesNote}
            </p>
          </div>

          {/* Help/Contact Section */}
          <div className="mb-[50px] text-center bg-[#f9f9f9] p-6 rounded-xl my-6">
            <h2 className="text-xl md:text-2xl font-semibold text-[#1a1a1a] mb-5 leading-snug">
              {t.helpTitle}
            </h2>
            <p className="text-base md:text-[1.05rem] text-[#555] leading-[1.9] mb-5">
              {t.helpIntro}
            </p>
            <p className="text-base md:text-[1.05rem] text-[#1a1a1a] font-semibold leading-[1.9] mb-5">
              📩{" "}
              <a
                href="mailto:zaavg.bali@gmail.com"
                className="text-[#008060] no-underline hover:underline"
              >
                zaavg.bali@gmail.com
              </a>
            </p>
            <p className="text-base md:text-[1.05rem] text-[#555] leading-[1.9] mb-5">
              {t.helpClosing}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="py-16 px-6 bg-white flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <Link
            to="/collections"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-sans text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 min-w-[220px] bg-[#1a1a1a] text-white border border-white/20 shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:bg-[#0f0f0f] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,0,0,0.4)]"
          >
            {t.sizeguideBtnCatalog}
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-sans text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 min-w-[220px] bg-transparent text-[#1a1a1a] border-[1.5px] border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white hover:-translate-y-0.5"
          >
            {t.sizeguideBtnHome}
          </Link>
        </div>
      </div>
    </PublicShell>
  );
}