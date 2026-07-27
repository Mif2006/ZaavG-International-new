import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PublicShell } from "@/components/public-shell";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Videos — ZAAV G" },
      {
        name: "description",
        content: "Moments, atmosphere, and the world behind ZAAV G.",
      },
      { property: "og:title", content: "Videos — ZAAV G" },
      { property: "og:description", content: "Moments, atmosphere, and the world behind ZAAV G." },
    ],
  }),
  component: VideosPage,
});

type Lang = "en" | "ru" | "id";

const T: Record<
  Lang,
  {
    videoTitle: string;
    videoSubtitle: string;
    videoBtnCatalog: string;
    videoBtnHome: string;
  }
> = {
  en: {
    videoTitle: "VIDEOS",
    videoSubtitle: "Moments, atmosphere, and the world behind Zaav G.",
    videoBtnCatalog: "View Collections",
    videoBtnHome: "Home",
  },
  ru: {
    videoTitle: "ВИДЕО",
    videoSubtitle: "Моменты, атмосфера и мир, стоящий за Zaav G.",
    videoBtnCatalog: "Смотреть коллекции",
    videoBtnHome: "На главную",
  },
  id: {
    videoTitle: "VIDEO",
    videoSubtitle: "Momen, suasana, dan dunia di balik Zaav G.",
    videoBtnCatalog: "Lihat Koleksi",
    videoBtnHome: "Beranda",
  },
};

const videoList = [
  { url: "https://www.youtube.com/embed/-F9Ugz3hIaU", title: "Zaav G Video 1" },
  { url: "https://www.youtube.com/embed/ibqKONbQcEQ", title: "Zaav G Video 2" },
  { url: "https://www.youtube.com/embed/kkrNnLARF04", title: "Zaav G Video 3" },
  { url: "https://www.youtube.com/embed/Y24VEN9jp44", title: "Zaav G Video 4" },
  { url: "https://www.youtube.com/embed/qIxH3eVor18", title: "Zaav G Video 5" },
  { url: "https://www.youtube.com/embed/qLl4iBWB8FU", title: "Zaav G Video 6" },
  { url: "https://www.youtube.com/embed/JN-IYQnxIBI", title: "Zaav G Video 7" },
  { url: "https://www.youtube.com/embed/7u6rNAouio0", title: "Zaav G Video 8" },
  { url: "https://www.youtube.com/embed/dhhIZPmf4xY", title: "Zaav G Video 9" },
  { url: "https://www.youtube.com/embed/YIg4mKoQtBE", title: "Zaav G Video 10" },
];

function VideosPage() {
  const { lang } = useI18n();
  const t = T[lang as Lang] || T.en;

  return (
    <PublicShell>
      <div className="relative font-sans text-neutral-900 antialiased bg-[#faf8f5] min-h-screen selection:bg-neutral-900 selection:text-white">
        <div className="pt-32 sm:pt-36 md:pt-40 pb-24 px-6 max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-neutral-500 font-medium backdrop-blur-md bg-neutral-200/50 px-4 py-1.5 rounded-full border border-neutral-300/40">
              ZAAV G Visuals
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.12em] uppercase text-neutral-900">
              {t.videoTitle}
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed">
              {t.videoSubtitle}
            </p>
           
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {videoList.map((video, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-neutral-200/80 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              >
                <div className="aspect-video w-full bg-black">
                  <iframe
                    src={video.url}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons Block */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 pt-10">
            <Link
              to="/collections"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-sans text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 min-w-[220px] bg-[#1a1a1a] text-white border border-white/20 shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:bg-[#0f0f0f] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,0,0,0.4)]"
            >
              {t.videoBtnCatalog}
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-sans text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 min-w-[220px] bg-transparent text-[#1a1a1a] border-[1.5px] border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white hover:-translate-y-0.5"
            >
              {t.videoBtnHome}
            </Link>
          </div>
        </div>
      </div>
    </PublicShell>
  );
}