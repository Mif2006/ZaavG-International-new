import { useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import "./sections.css";

type Lang = "en" | "ru" | "id";

const T: Record<Lang, { title: string; subtitle: string; btn1: string; btn2: string }> = {
  en: {
    title: "Jewelry Born in Bali",
    subtitle: "More than jewelry — a reflection of who you are.\nHandcrafted with meaning. Shipped worldwide.",
    btn1: "Explore Collections",
    btn2: "Chat on WhatsApp",
  },
  ru: {
    title: "Украшения, рожденные на Бали",
    subtitle: "Больше, чем украшения — отражение вашего внутреннего мира. Созданы вручную со смыслом. Доставка по всему миру.",
    btn1: "Смотреть коллекции",
    btn2: "Написать в WhatsApp",
  },
  id: {
    title: "Perhiasan Lahir di Bali",
    subtitle: "Lebih dari perhiasan — cerminan jati diri Anda.\nDibuat dengan tangan, penuh makna. Dikirim ke seluruh dunia.",
    btn1: "Jelajahi Koleksi",
    btn2: "Chat di WhatsApp",
  },
};

export function Hero() {
  const { lang } = useI18n();
  const t = T[lang as Lang] || T.en;

  useEffect(() => {
    const trigger = () => {
      document.querySelectorAll<HTMLElement>(".zav-hero__btn").forEach((btn) => {
        btn.classList.remove("glisten");
        // Trigger reflow to restart animation
        void btn.offsetWidth;
        btn.classList.add("glisten");
      });
    };

    // Delay initial glisten until after entrance animations finish
    const initial = setTimeout(() => {
      trigger();
    }, 2400);
    const interval = setInterval(trigger, 6000);

    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="zav-hero">
      <div className="zav-hero__overlay" />
      <div className="zav-hero__content">
        <h1 className="zav-hero__title hero-fade-in">{t.title}</h1>
        
        <p className="zav-hero__subtitle hero-fade-in hero-delay-1">
          {t.subtitle.split("\n").map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </p>
        
        <div className="zav-hero__buttons hero-fade-in hero-delay-2">
          <a href="/collections" className="zav-hero__btn zav-hero__btn--primary">
            {t.btn1}
          </a>
          <a
            href="https://wa.me/6281139888882"
            className="zav-hero__btn zav-hero__btn--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.btn2}
          </a>
        </div>
      </div>
    </section>
  );
}