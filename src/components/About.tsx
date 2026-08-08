import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";
import "./sections.css";

type Lang = "en" | "ru" | "id";

const T: Record<Lang, { title: string; subtitle: string; story: string }> = {
  en: {
    title: "Zaav G",
    subtitle: "A way back to yourself. Jewelry with meaning, made to be part of your life.",
    story:
      "My name is Elena. Zaav G began in Bali — a place that changes the way you see beauty, time, and yourself. What started as a single piece became a language. A way to express what cannot always be said in words. Today, Zaav G is handcrafted in Bali, with boutiques in Bali and Moscow, and worn by women around the world. But at its core, it has always remained the same — jewelry you don't just wear, you feel.",
  },
  ru: {
    title: "Zaav G",
    subtitle: "Путь к себе. Украшения со смыслом, созданные, чтобы быть частью вашей жизни.",
    story:
      "Меня зовут Елена. Zaav G зародился на Бали — месте, которое меняет представление о красоте, времени и о себе. То, что начиналось с одного изделия, стало языком. Способом выразить то, что не всегда можно сказать словами. Сегодня Zaav G создаётся вручную на Бали, имеет бутики на Бали и в Москве, и его носят женщины по всему миру. Но в своей основе он всегда оставался прежним — украшения, которые не просто носишь, а чувствуешь.",
  },
  id: {
    title: "Zaav G",
    subtitle: "Kembali kepada diri Anda. Perhiasan dengan makna, dibuat untuk menjadi bagian dari hidup Anda.",
    story:
      "Nama saya Elena. Zaav G bermula di Bali — tempat yang mengubah cara Anda memandang keindahan, waktu, dan diri sendiri. Yang bermula dari satu karya, menjadi sebuah bahasa. Cara mengungkapkan apa yang tak selalu terucap oleh kata-kata. Kini, Zaav G dibuat dengan tangan di Bali, dengan butik di Bali dan Moskwa, dan dikenakan oleh wanita di seluruh dunia. Namun pada intinya, ia selalu tetap sama — perhiasan yang tidak sekadar dikenakan, tetapi dirasakan.",
  },
};

function multiline(text: string) {
  return text.split("\n").map((line, i, arr) => (
    <span key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </span>
  ));
}

export function About() {
  const { lang } = useI18n();
  const t = T[lang as Lang] || T.en;
  
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger when the section crosses into the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { 
        // 0.2 means 20% of the element must be visible
        threshold: 0.2,
        // Negative bottom margin ensures it doesn't trigger until you actually scroll into it
        rootMargin: "0px 0px -50px 0px" 
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`zav-about ${isVisible ? "is-visible" : ""}`}
    >
      <div className="zav-about__container">
        <div className="zav-about__image-wrapper about-reveal-left">
          <img
            src="AboutImg.webp"
            alt="Zaav G"
            className="zav-about__image"
          />
        </div>
        <div className="">
          <h2 className="zav-about__title about-reveal-right">{t.title}</h2>
          <p className="zav-about__subtitle about-reveal-right about-delay-1">
            {multiline(t.subtitle)}
          </p>
          <div className="zav-about__divider about-reveal-scale about-delay-2" />
          <p className="zav-about__story about-reveal-up about-delay-3">
            {multiline(t.story)}
          </p>
        </div>
      </div>
    </section>
  );
}