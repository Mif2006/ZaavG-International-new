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
        content: "Moments, atmosphere, and the world behind Zaav G jewelry.",
      },
      { property: "og:title", content: "Videos — ZAAV G" },
      {
        property: "og:description",
        content: "Moments, atmosphere, and the world behind Zaav G jewelry.",
      },
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
  ru: {
    videoTitle: "ВИДЕО",
    videoSubtitle: "Моменты, атмосфера и мир, стоящий за Zaav G.",
    videoBtnCatalog: "Смотреть коллекции",
    videoBtnHome: "На главную",
  },
  en: {
    videoTitle: "VIDEOS",
    videoSubtitle: "Moments, atmosphere, and the world behind Zaav G.",
    videoBtnCatalog: "View Collections",
    videoBtnHome: "Home",
  },
  id: {
    videoTitle: "VIDEO",
    videoSubtitle: "Momen, suasana, dan dunia di balik Zaav G.",
    videoBtnCatalog: "Lihat Koleksi",
    videoBtnHome: "Beranda",
  },
};

const videos = [
  "-F9Ugz3hIaU",
  "ibqKONbQcEQ",
  "kkrNnLARF04",
  "Y24VEN9jp44",
  "qIxH3eVor18",
  "qLl4iBWB8FU",
  "JN-IYQnxIBI",
  "7u6rNAouio0",
  "dhhIZPmf4xY",
  "YIg4mKoQtBE",
];

function VideoCard({ id }: { id: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbQuality, setThumbQuality] = useState<"hq720" | "hqdefault">("hq720");

  return (
    <div className="relative h-0 w-full overflow-hidden rounded-xl bg-black pb-[56.25%] shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
      {isPlaying ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={`Zaav G Video ${id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute left-0 top-0 h-full w-full border-none"
        />
      ) : (
        <button
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 w-full h-full p-0 border-none bg-transparent cursor-pointer group"
          aria-label="Play video"
        >
          <img
            src={`https://i.ytimg.com/vi/${id}/${thumbQuality}.jpg`}
            alt="Video Thumbnail"
            loading="lazy"
            onLoad={(e) => {
              const img = e.currentTarget;
              if (thumbQuality === "hq720" && (img.naturalWidth === 120 || img.naturalHeight === 90)) {
                setThumbQuality("hqdefault");
              }
            }}
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
          />
          {/* Play Icon Overlay to match design */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-12 bg-black/60 rounded-xl flex items-center justify-center text-white transition-all duration-300 group-hover:bg-red-600 group-hover:scale-110 shadow-lg">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current translate-x-0.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}

function VideosPage() {
  const { lang } = useI18n();
  const t = T[lang as Lang] || T.en;

  return (
    <PublicShell>
      <div className="min-h-screen pt-[30px] bg-white font-sans text-[#1a1a1a]">
        <div className="mx-auto max-w-[1400px] px-6 py-[80px] md:px-[60px] pt-[120px] md:pt-[80px]">
          <div className="mb-10 md:mb-[60px] text-center">
            <h1 className="mb-5 text-[clamp(2.25rem,6vw,3.5rem)] font-bold tracking-[-0.02em] text-[#1a1a1a]">
              {t.videoTitle}
            </h1>
            <p className="mx-auto max-w-[700px] text-[clamp(1.1rem,3vw,1.25rem)] font-normal leading-[1.6] md:leading-[1.7] text-[#666666]">
              {t.videoSubtitle}
            </p>
          </div>

          <div className="mb-10 md:mb-[60px] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {videos.map((id) => (
              <VideoCard key={id} id={id} />
            ))}
          </div>

          <div className="py-16 px-6 bg-white flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 ">
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