import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import "./sections.css";

type Lang = "en" | "ru" | "id";

const T: Record<Lang, { button: string; quote: string; author: string }> = {
  en: {
    button: "More Zaav G Videos",
    quote:
      "Each piece begins with a symbol — something ancient, quiet, and powerful. We shape it by hand, giving it a new form, so it can become part of your life today. Not for special occasions, but for the moments that truly matter.",
    author: "Explore the world of Zaav G",
  },
  ru: {
    button: "Больше видео Zaav G",
    quote:
      "Каждое украшение начинается с символа —древнего, тихого и наполненного силой. Мы вручную придаём ему новую форму, чтобы оно стало частью вашей жизни сегодня. Не для особых случаев. А для моментов, которые действительно важны.",
    author: "Открыть мир Zaav G",
  },
  id: {
    button: "Lebih Banyak Video Zaav G",
    quote:
      "Setiap karya bermula dari sebuah simbol — yang kuno, sunyi, dan penuh kekuatan. Kami membentuknya dengan tangan, memberinya wujud baru, agar dapat menjadi bagian dari hidup Anda hari ini. Bukan untuk momen istimewa, tetapi untuk saat-saat yang benar-benar berarti.",
    author: "Jelajahi dunia Zaav G",
  },
};

const VIDEO_ID = "BgRsNeRtTFY";

export function VideoSection() {
  const { lang } = useI18n();
  const t = T[lang as Lang] || T.en;
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="zav-video-section">
      <div className="zav-video-section__container">
        {/* Facade Video Wrapper */}
        <div className="zav-video-section__video-wrapper relative w-full overflow-hidden bg-black group">
          {isPlaying ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1`}
              title="Zaav G Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 w-full h-full p-0 border-none bg-transparent cursor-pointer group"
              aria-label="Play Zaav G Video"
            >
              {/* Crisp HD Thumbnail Image */}
              <img
                src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                alt="Zaav G Video Preview"
                loading="lazy"
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
              />
              {/* Custom Play Button Overlay */}
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

        <div style={{ textAlign: "center" }}>
          <a href="/videos" className="zav-video-section__button">
            {t.button}
          </a>
        </div>

        <div className="zav-video-section__quote">
          <span className="zav-video-section__quote-mark">&ldquo;</span>
          <p className="zav-video-section__quote-text">{t.quote}</p>
          <p className="zav-video-section__quote-author">{t.author}</p>
        </div>
      </div>
    </section>
  );
}