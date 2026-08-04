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
      { property: "og:description", content: "Find your perfect fit for rings, bracelets, and necklaces with the ZAAV G Size Guide." },
    ],
  }),
  component: SizeGuidePage,
});

type Lang = "en" | "ru" | "id";

const T: Record<
  Lang,
  {
    sizeguideTitle: string;
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
    sizeReferenceBadge: string;
  }
> = {
  en: {
    sizeguideTitle: "SIZE GUIDE",
    sizeguideIntro: "Finding the right size is an important part of choosing jewelry that feels comfortable, natural, and easy to wear every day.<br>Below you'll find simple recommendations to help you choose the best size for your ZAAV G piece.",
    ringsTitle: "Rings",
    ringsOption1Title: "Option 1 — Measure an Existing Ring",
    ringsOption1Text: "Choose a ring that fits the desired finger comfortably.<br>Measure the inside diameter of the ring in millimeters and compare it with the size chart below.",
    imgRingAlt: "Measuring ring diameter",
    ringsOption2Title: "Option 2 — Measure Your Finger",
    ringsOption2Step1: "Wrap a thin strip of paper or a soft measuring tape around your finger",
    ringsOption2Step2: "Make sure it feels comfortable — not too tight and not too loose",
    ringsOption2Step3: "Measure the length in millimeters and compare it with a standard ring size chart",
    imgThreadAlt: "Measuring finger with thread",
    ringsWideTip: "For wider rings, we usually recommend choosing half a size larger for a more comfortable fit.",
    ringTableTitle: "Ring Size Reference",
    ringTableNote: "Measure your ring's inside diameter or finger circumference and find your size below.",
    tableDiameter: "Diameter (mm)",
    tableCircumference: "Circumference (mm)",
    tableSize: "ZAAV G Size",
    tableUS: "US",
    tableEU: "EU",
    braceletsTitle: "Bracelets",
    braceletsIntro: "To find your bracelet size:",
    braceletsStep1: "Measure your wrist using a soft measuring tape",
    braceletsStep2: "Add the recommended allowance for your preferred fit",
    fitClose: "Close Fit",
    fitCloseValue: "+1–1.5 cm",
    fitComfortable: "Comfortable Fit",
    fitComfortableValue: "+1.5–2 cm",
    fitLoose: "Loose Fit",
    fitLooseValue: "+2–3 cm",
    braceletsTip: "If you are unsure between sizes, we generally recommend choosing the larger size.",
    necklacesTitle: "Necklaces",
    necklacesIntro: "Necklace lengths may look different depending on body shape and styling preferences.",
    necklacesTypical: "Typical lengths:",
    neck40: "Close to the neck",
    neck45: "Classic everyday length",
    neck5060: "Relaxed and layered look",
    necklacesNote: "Please refer to product photos for styling inspiration and fit.",
    helpTitle: "Need Help?",
    helpIntro: "If you are unsure about sizing, we will be happy to help you choose the best fit.",
    helpClosing: "We want your ZAAV G piece to feel as beautiful and comfortable as it looks.",
    sizeguideBtnCatalog: "View Collections",
    sizeguideBtnHome: "Home",
    sizeReferenceBadge: "ZAAV G Size Reference",
  },
  ru: {
    sizeguideTitle: "УЗНАТЬ РАЗМЕР",
    sizeguideIntro: "Правильный подбор размера — важная часть выбора украшений, которые будут удобными, естественными и легкими в носке каждый день.<br>Ниже вы найдете простые рекомендации, которые помогут выбрать лучший размер для вашего изделия ZAAV G.",
    ringsTitle: "Кольца",
    ringsOption1Title: "Вариант 1 — Измерьте существующее кольцо",
    ringsOption1Text: "Выберите кольцо, которое удобно сидит на нужном пальце.<br>Измерьте внутренний диаметр кольца в миллиметрах и сравните его с таблицей размеров ниже.",
    imgRingAlt: "Измерение диаметра кольца",
    ringsOption2Title: "Вариант 2 — Измерьте палец",
    ringsOption2Step1: "Оберните тонкую полоску бумаги или мягкую измерительную ленту вокруг пальца",
    ringsOption2Step2: "Убедитесь, что она сидит комфортно — не слишком туго и не слишком свободно",
    ringsOption2Step3: "Измерьте длину в миллиметрах и сравните со стандартной таблицей размеров колец",
    imgThreadAlt: "Измерение пальца с помощью нитки",
    ringsWideTip: "Для более широких колец мы обычно рекомендуем выбрать на полразмера больше для более удобной посадки.",
    ringTableTitle: "Справочник размеров колец",
    ringTableNote: "Измерьте внутренний диаметр вашего кольца или окружность пальца и найдите свой размер ниже.",
    tableDiameter: "Диаметр (мм)",
    tableCircumference: "Окружность (мм)",
    tableSize: "Размер ZAAV G",
    tableUS: "США",
    tableEU: "ЕС",
    braceletsTitle: "Браслеты",
    braceletsIntro: "Чтобы определить размер браслета:",
    braceletsStep1: "Измерьте запястье с помощью мягкой измерительной ленты",
    braceletsStep2: "Добавьте рекомендуемый припуск для желаемой посадки",
    fitClose: "Плотная посадка",
    fitCloseValue: "+1–1,5 см",
    fitComfortable: "Комфортная посадка",
    fitComfortableValue: "+1,5–2 см",
    fitLoose: "Свободная посадка",
    fitLooseValue: "+2–3 см",
    braceletsTip: "Если вы сомневаетесь между размерами, мы обычно рекомендуем выбрать больший размер.",
    necklacesTitle: "Колье / Цепи",
    necklacesIntro: "Длина ожерелий может выглядеть по-разному в зависимости от формы тела и предпочтений в стиле.",
    necklacesTypical: "Типичные длины:",
    neck40: "Близко к шее",
    neck45: "Классическая повседневная длина",
    neck5060: "Расслабленный многослойный образ",
    necklacesNote: "Пожалуйста, обратитесь к фотографиям товаров для вдохновения в стиле и примерке.",
    helpTitle: "Нужна помощь?",
    helpIntro: "Если вы не уверены в размере, мы будем рады помочь вам выбрать лучшую посадку.",
    helpClosing: "Мы хотим, чтобы ваше изделие ZAAV G было таким же красивым и удобным, как и выглядит.",
    sizeguideBtnCatalog: "Смотреть коллекции",
    sizeguideBtnHome: "На главную",
    sizeReferenceBadge: "Гид по размерам ZAAV G",
  },
  id: {
    sizeguideTitle: "PANDUAN UKURAN",
    sizeguideIntro: "Menemukan ukuran yang tepat adalah bagian penting dalam memilih perhiasan yang terasa nyaman, alami, dan mudah dipakai setiap hari.<br>Di bawah ini Anda akan menemukan rekomendasi sederhana untuk membantu Anda memilih ukuran terbaik untuk pieces ZAAV G Anda.",
    ringsTitle: "Cincin",
    ringsOption1Title: "Opsi 1 — Ukur Cincin yang Sudah Ada",
    ringsOption1Text: "Pilih cincin yang pas dengan jari yang diinginkan dengan nyaman.<br>Ukur diameter dalam cincin dalam milimeter dan bandingkan dengan tabel ukuran di bawah.",
    imgRingAlt: "Mengukur diameter cincin",
    ringsOption2Title: "Opsi 2 — Ukur Jari Anda",
    ringsOption2Step1: "Lilitkan strip kertas tipis atau pita pengukur lunak di sekitar jari Anda",
    ringsOption2Step2: "Pastikan terasa nyaman — tidak terlalu ketat dan tidak terlalu longgar",
    ringsOption2Step3: "Ukur panjangnya dalam milimeter dan bandingkan dengan tabel ukuran cincin standar",
    imgThreadAlt: "Mengukur jari dengan benang",
    ringsWideTip: "Untuk cincin yang lebih lebar, kami biasanya merekomendasikan memilih setengah ukuran lebih besar untuk kenyamanan yang lebih baik.",
    ringTableTitle: "Referensi Ukuran Cincin",
    ringTableNote: "Ukur diameter dalam cincin Anda atau keliling jari dan temukan ukuran Anda di bawah.",
    tableDiameter: "Diameter (mm)",
    tableCircumference: "Keliling (mm)",
    tableSize: "Ukuran ZAAV G",
    tableUS: "AS",
    tableEU: "EU",
    braceletsTitle: "Gelang",
    braceletsIntro: "Untuk menemukan ukuran gelang Anda:",
    braceletsStep1: "Ukur pergelangan tangan Anda menggunakan pita pengukur lunak",
    braceletsStep2: "Tambahkan kelonggaran yang direkomendasikan untuk kenyamanan yang Anda inginkan",
    fitClose: "Pas Ketat",
    fitCloseValue: "+1–1,5 cm",
    fitComfortable: "Pas Nyaman",
    fitComfortableValue: "+1,5–2 cm",
    fitLoose: "Pas Longgar",
    fitLooseValue: "+2–3 cm",
    braceletsTip: "Jika Anda ragu antara ukuran, kami umumnya merekomendasikan memilih ukuran yang lebih besar.",
    necklacesTitle: "Kalung",
    necklacesIntro: "Panjang kalung mungkin terlihat berbeda tergantung pada bentuk tubuh dan preferensi gaya.",
    necklacesTypical: "Panjang khas:",
    neck40: "Dekat dengan leher",
    neck45: "Panjang klasik sehari-hari",
    neck5060: "Tampilan santai dan berlapis",
    necklacesNote: "Silakan merujuk ke foto produk untuk inspirasi gaya dan contoh pemakaian.",
    helpTitle: "Butuh Bantuan?",
    helpIntro: "Jika Anda tidak yakin tentang ukuran, kami akan dengan senang hati membantu Anda memilih ukuran yang paling pas.",
    helpClosing: "Kami ingin pieces ZAAV G Anda terasa seindah dan senyaman tampilannya.",
    sizeguideBtnCatalog: "Lihat Katalog",
    sizeguideBtnHome: "Beranda",
    sizeReferenceBadge: "Referensi Ukuran ZAAV G",
  },
};

const ringSizeData = [
  { dia: "14.9", circ: "46.8", zaav: "15", us: "4", eu: "47" },
  { dia: "15.3", circ: "48.0", zaav: "15.5", us: "4.5", eu: "48" },
  { dia: "15.7", circ: "49.3", zaav: "16", us: "5", eu: "49" },
  { dia: "16.1", circ: "50.6", zaav: "16.5", us: "5.5", eu: "50" },
  { dia: "16.5", circ: "51.8", zaav: "17", us: "6", eu: "51" },
  { dia: "16.9", circ: "53.1", zaav: "17.5", us: "6.5", eu: "52" },
  { dia: "17.3", circ: "54.4", zaav: "18", us: "7", eu: "53" },
  { dia: "17.7", circ: "55.6", zaav: "18.5", us: "7.5", eu: "54" },
  { dia: "18.2", circ: "56.9", zaav: "19", us: "8", eu: "55" },
  { dia: "18.5", circ: "58.1", zaav: "19.5", us: "8.5", eu: "56" },
  { dia: "18.9", circ: "59.4", zaav: "20", us: "9", eu: "57" },
  { dia: "19.4", circ: "60.6", zaav: "20.5", us: "9.5", eu: "58" },
  { dia: "19.8", circ: "61.9", zaav: "21", us: "10", eu: "59" },
];

const instructionImages = {
  ru: {
    ring: "https://cdn.shopify.com/s/files/1/0987/8745/9350/files/ring.png?v=1778338698",
    finger: "https://cdn.shopify.com/s/files/1/0987/8745/9350/files/thread.png?v=1778338698",
  },
  en: {
    ring: "https://cdn.shopify.com/s/files/1/0987/8745/9350/files/IMG_1918.jpg?v=1778245689",
    finger: "https://cdn.shopify.com/s/files/1/0987/8745/9350/files/ChatGPT_Image_May_4_2026_06_13_14_AM.png?v=1777864430",
  },
  id: {
    ring: "https://cdn.shopify.com/s/files/1/0987/8745/9350/files/IMG_1918.jpg?v=1778245689",
    finger: "https://cdn.shopify.com/s/files/1/0987/8745/9350/files/ChatGPT_Image_May_4_2026_06_13_14_AM.png?v=1777864430",
  },
};

function SizeGuidePage() {
  const { lang } = useI18n();
  const t = T[lang as Lang] || T.en;
  const images = instructionImages[lang as Lang] || instructionImages.en;

  const scrollToContent = () => {
    const el = document.getElementById("sizeguideContent");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PublicShell>
      <div className="relative font-sans text-neutral-900 antialiased bg-[#faf8f5] min-h-screen selection:bg-neutral-900 selection:text-white">
        {/* Immersive Editorial Hero */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center bg-[url('/FaqSize.webp')] bg-cover bg-center bg-scroll md:bg-fixed overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>
          
          <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-8">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-white/70 mb-4 font-medium backdrop-blur-md bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
              {t.sizeReferenceBadge}
            </span>
            <h1
              className={`font-extrabold text-white tracking-[0.18em] uppercase leading-[1.1] mb-12 drop-shadow-2xl transition-all duration-500 ${
                lang === "ru"
                  ? "text-[clamp(2.2rem,5vw,4rem)] tracking-[0.1em]"
                  : "text-[clamp(2.8rem,7vw,5.2rem)]"
              }`}
            >
              {t.sizeguideTitle}
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
        <div id="sizeguideContent" className="py-24 px-6 max-w-4xl mx-auto space-y-20">
          
          {/* Intro Section */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-neutral-700 font-light leading-relaxed tracking-wide" dangerouslySetInnerHTML={{ __html: t.sizeguideIntro }} />
            <div className="w-12 h-[1px] bg-neutral-300 mx-auto mt-10"></div>
          </div>

          {/* Rings Section */}
          <div className="space-y-10">
            <div className="border-b border-neutral-200 pb-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">{t.ringsTitle}</h2>
            </div>

            {/* Option 1 */}
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-4">{t.ringsOption1Title}</h3>
              <p className="text-neutral-600 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t.ringsOption1Text }} />
              <div className="max-w-xs mx-auto overflow-hidden rounded-xl shadow-md border border-neutral-200 bg-white">
                <img src={images.ring} alt={t.imgRingAlt} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            {/* Option 2 */}
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-4">{t.ringsOption2Title}</h3>
              <ul className="space-y-3 mb-6 max-w-xl">
                {[t.ringsOption2Step1, t.ringsOption2Step2, t.ringsOption2Step3].map((step, idx) => (
                  <li key={idx} className="relative pl-6 text-neutral-600 text-sm md:text-base leading-relaxed">
                    <span className="absolute left-0 text-neutral-900 font-bold">•</span>
                    {step}
                  </li>
                ))}
              </ul>
              <div className="max-w-xs mx-auto overflow-hidden rounded-xl shadow-md border border-neutral-200 bg-white mb-6">
                <img src={images.finger} alt={t.imgThreadAlt} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="text-neutral-500 text-sm italic">
                {t.ringsWideTip}
              </p>
            </div>

            {/* Ring Size Table Reference */}
            <div className="space-y-6 pt-4">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900">{t.ringTableTitle}</h3>
                <p className="text-neutral-500 text-sm mt-1">{t.ringTableNote}</p>
              </div>
              
              <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm bg-white">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-neutral-900 text-white font-semibold text-sm">
                      <th className="py-4 px-4 text-center border-b border-neutral-800">{t.tableDiameter}</th>
                      <th className="py-4 px-4 text-center border-b border-neutral-800">{t.tableCircumference}</th>
                      <th className="py-4 px-4 text-center border-b border-neutral-800">{t.tableSize}</th>
                      <th className="py-4 px-4 text-center border-b border-neutral-800">{t.tableUS}</th>
                      <th className="py-4 px-4 text-center border-b border-neutral-800">{t.tableEU}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 text-sm">
                    {ringSizeData.map((row, i) => (
                      <tr key={i} className="hover:bg-neutral-50/80 transition-colors">
                        <td className="py-3 px-4 text-center text-neutral-600">{row.dia}</td>
                        <td className="py-3 px-4 text-center text-neutral-600">{row.circ}</td>
                        <td className="py-3 px-4 text-center font-semibold text-neutral-900">{row.zaav}</td>
                        <td className="py-3 px-4 text-center text-neutral-600">{row.us}</td>
                        <td className="py-3 px-4 text-center text-neutral-600">{row.eu}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Bracelets Section */}
          <div className="space-y-8 pt-6 border-t border-neutral-200">
            <div className="border-b border-neutral-200 pb-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">{t.braceletsTitle}</h2>
            </div>
            
            <p className="text-neutral-600">{t.braceletsIntro}</p>
            
            <ul className="space-y-2 max-w-xl">
              {[t.braceletsStep1, t.braceletsStep2].map((step, idx) => (
                <li key={idx} className="relative pl-6 text-neutral-600 text-sm md:text-base">
                  <span className="absolute left-0 text-neutral-900 font-bold">•</span>
                  {step}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {[
                { label: t.fitClose, value: t.fitCloseValue },
                { label: t.fitComfortable, value: t.fitComfortableValue },
                { label: t.fitLoose, value: t.fitLooseValue },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-neutral-200 p-5 rounded-xl text-center shadow-xs hover:border-neutral-900 transition-colors">
                  <div className="font-semibold text-neutral-900 mb-1 text-sm">{item.label}</div>
                  <div className="text-neutral-600 text-sm font-medium">{item.value}</div>
                </div>
              ))}
            </div>

            <p className="text-neutral-500 text-sm italic">{t.braceletsTip}</p>
          </div>

          {/* Necklaces Section */}
          <div className="space-y-8 pt-6 border-t border-neutral-200">
            <div className="border-b border-neutral-200 pb-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">{t.necklacesTitle}</h2>
            </div>

            <p className="text-neutral-600">{t.necklacesIntro}</p>
            <p className="text-neutral-900 font-medium">{t.necklacesTypical}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { val: "40 cm", desc: t.neck40 },
                { val: "45 cm", desc: t.neck45 },
                { val: "50–60 cm", desc: t.neck5060 },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-neutral-200 p-5 rounded-xl shadow-xs">
                  <div className="font-semibold text-neutral-900 text-base mb-1">{item.val}</div>
                  <div className="text-neutral-600 text-sm">{item.desc}</div>
                </div>
              ))}
            </div>

            <p className="text-neutral-500 text-sm italic">{t.necklacesNote}</p>
          </div>

          {/* Help / Contact Section */}
          <div className="bg-neutral-900 text-white p-8 md:p-12 rounded-2xl shadow-xl text-center relative overflow-hidden space-y-6">
            <h2 className="text-2xl font-semibold text-white">{t.helpTitle}</h2>
            <p className="text-neutral-400 max-w-md mx-auto">{t.helpIntro}</p>
            <div className="text-lg md:text-xl font-medium tracking-wide">
              <a href="mailto:zaavg.bali@gmail.com" className="text-emerald-400 hover:underline transition-colors">zaavg.bali@gmail.com</a>
            </div>
            <p className="text-neutral-400 text-sm max-w-sm mx-auto">{t.helpClosing}</p>
          </div>

        </div>

        {/* Action Buttons Block */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 py-[60px] px-6 sm:px-10 bg-white md:flex-col md:py-10">
          <Link
            to="/collections"
            className="inline-flex items-center justify-center w-full md:w-auto px-6 sm:px-10 py-4 font-sans text-sm sm:text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 min-w-[220px] max-w-[320px] md:max-w-none bg-[#1a1a1a] text-white border border-white/20 shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:bg-[#0f0f0f] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,0,0,0.4)]"
          >
            {t.sizeguideBtnCatalog}
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full md:w-auto px-6 sm:px-10 py-4 font-sans text-sm sm:text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 min-w-[220px] max-w-[320px] md:max-w-none bg-transparent text-[#1a1a1a] border-[1.5px] border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white hover:-translate-y-0.5"
          >
            {t.sizeguideBtnHome}
          </Link>
        </div>
      </div>
    </PublicShell>
  );
}