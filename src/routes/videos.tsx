import { useState } from "react";
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
    visualsBadge: string;
  }
> = {
  en: {
    videoTitle: "VIDEOS",
    videoSubtitle: "Moments, atmosphere, and the world behind ZAAV G.",
    videoBtnCatalog: "View Collections",
    videoBtnHome: "Home",
    visualsBadge: "ZAAV G Visuals",
  },
  ru: {
    videoTitle: "ВИДЕО",
    videoSubtitle: "Моменты, атмосфера и мир, стоящий за ZAAV G.",
    videoBtnCatalog: "Смотреть коллекции",
    videoBtnHome: "На главную",
    visualsBadge: "Видео ZAAV G",
  },
  id: {
    videoTitle: "VIDEO",
    videoSubtitle: "Momen, suasana, dan dunia di balik ZAAV G.",
    videoBtnCatalog: "Lihat Koleksi",
    videoBtnHome: "Beranda",
    visualsBadge: "Visual ZAAV G",
  },
};

const videoList = [
  { id: "-F9Ugz3hIaU", title: "ZAAV G Video 1" },
  { id: "ibqKONbQcEQ", title: "ZAAV G Video 2" },
  { id: "kkrNnLARF04", title: "ZAAV G Video 3" },
  { id: "Y24VEN9jp44", title: "ZAAV G Video 4" },
  { id: "qIxH3eVor18", title: "ZAAV G Video 5" },
  { id: "qLl4iBWB8FU", title: "ZAAV G Video 6" },
  { id: "JN-IYQnxIBI", title: "ZAAV G Video 7" },
  { id: "7u6rNAouio0", title: "ZAAV G Video 8" },
  { id: "dhhIZPmf4xY", title: "ZAAV G Video 9" },
  { id: "YIg4mKoQtBE", title: "ZAAV G Video 10" },
];

function VideoCard({ id, title }: { id: string; title: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  // Fallback chain: hq720.jpg -> hqdefault.jpg (which never fails on YouTube)
  const [thumbQuality, setThumbQuality] = useState<"hq720" | "hqdefault">("hq720");

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-neutral-200/80 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
      <div className="aspect-video w-full bg-black relative group">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 w-full h-full p-0 border-none bg-transparent cursor-pointer group"
            aria-label={`Play video: ${title}`}
          >
            <img
              src={`https://i.ytimg.com/vi/${id}/${thumbQuality === "hq720" ? "hq720" : "hqdefault"}.jpg`}
              alt={title}
              loading="lazy"
              onLoad={(e) => {
                // YouTube's invisible 404 placeholder image is exactly 120x90 pixels.
                // If it returns this stub, force fallback to standard hqdefault immediately.
                const img = e.currentTarget;
                if (thumbQuality === "hq720" && (img.naturalWidth === 120 || img.naturalHeight === 90)) {
                  setThumbQuality("hqdefault");
                }
              }}
              className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-12 bg-neutral-900/80 rounded-xl flex items-center justify-center text-white transition-all duration-300 group-hover:bg-red-600 group-hover:scale-110 shadow-lg">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current translate-x-0.5">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

function VideosPage() {
  const { lang } = useI18n();
  const t = T[lang as Lang] || T.en;

  const scrollToContent = () => {
    const el = document.getElementById("videosContent");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PublicShell>
      <div className="relative font-sans text-neutral-900 antialiased bg-[#faf8f5] min-h-screen selection:bg-neutral-900 selection:text-white">
        {/* Immersive Editorial Hero */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center bg-[url('https://cdn.shopify.com/s/files/1/0987/8745/9350/files/IMG_1328.jpg?v=1776287860')] bg-cover bg-center bg-scroll md:bg-fixed overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>
          
          <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-8">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-white/70 mb-4 font-medium backdrop-blur-md bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
              {t.visualsBadge}
            </span>
            <h1
              className={`font-extrabold text-white tracking-[0.18em] uppercase leading-[1.1] mb-8 drop-shadow-2xl transition-all duration-500 ${
                lang === "ru"
                  ? "text-[clamp(2.2rem,5vw,4rem)] tracking-[0.1em]"
                  : "text-[clamp(2.8rem,7vw,5.2rem)]"
              }`}
            >
              {t.videoTitle}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/80 font-light max-w-xl mx-auto mb-12 leading-relaxed drop-shadow-md">
              {t.videoSubtitle}
            </p>

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

        {/* Main Videos Content */}
        <div id="videosContent" className="py-24 px-6 max-w-6xl mx-auto space-y-16">
          {/* Intro divider */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-12 h-[1px] bg-neutral-300 mx-auto"></div>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {videoList.map((video, idx) => (
              <VideoCard key={idx} id={video.id} title={video.title} />
            ))}
          </div>
        </div>

        {/* Action Buttons Block */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 py-[60px] px-6 sm:px-10 bg-white md:flex-col md:py-10">
          <Link
            to="/collections"
            className="inline-flex items-center justify-center w-full md:w-auto px-6 sm:px-10 py-4 font-sans text-sm sm:text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 min-w-[220px] max-w-[320px] md:max-w-none bg-[#1a1a1a] text-white border border-white/20 shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:bg-[#0f0f0f] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,0,0,0.4)]"
          >
            {t.videoBtnCatalog}
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full md:w-auto px-6 sm:px-10 py-4 font-sans text-sm sm:text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 min-w-[220px] max-w-[320px] md:max-w-none bg-transparent text-[#1a1a1a] border-[1.5px] border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white hover:-translate-y-0.5"
          >
            {t.videoBtnHome}
          </Link>
        </div>
      </div>
    </PublicShell>
  );
}