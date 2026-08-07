import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicShell } from "@/components/public-shell";
import { useI18n } from "@/lib/i18n";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { VideoSection } from "@/components/VideoSection";
import { Faq } from "@/components/Faq";
import { ArtSpace } from "@/components/ArtSpace";
import { Features } from "@/components/Features";
import { FloatingToolbar } from "@/components/FloatingToolbar";
import { Bestsellers } from "@/components/BestSellers";
import { Activity } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ювелирные украшения ручной работы" },
      {
        name: "description",
        content: "Авторские украшения — кольца, серьги, браслеты, подвески и цепи.",
      },
      { property: "og:title", content: "Ювелирные украшения ручной работы" },
      {
        property: "og:description",
        content: "Авторские украшения — кольца, серьги, браслеты, подвески и цепи.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const { t, lang } = useI18n();
  return (
    <PublicShell>
      {/* Landing placeholder — drop your prepared sections into this file later.
          Each section below is a self-contained block, easy to swap out. */}
          

      <section className="bg-white">
      <Hero />
      
      </section>
      <section className="bg-white">
      <About />
      
      </section>
      <section className="bg-white">
      <ArtSpace />
      
      </section>
      <section className="bg-white">
        <Activity mode="visible">
      <Bestsellers />
      </Activity>
      
      </section>
      <section className="bg-white">
      <VideoSection />
      
      </section>

      <section className="bg-white">
      <Features />
      
      </section>
      <section className="bg-white">
      <Faq />
      
      </section>
     

      {/* Add more <section /> blocks here as you build out the landing. */}
    </PublicShell>
  );
}
