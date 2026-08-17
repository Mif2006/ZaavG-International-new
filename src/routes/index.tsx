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
import Devider from "@/components/Devider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Handmade jewelry made in Bali" },
      {
        name: "description",
        content: "Designer jewelry - rings, earrings, bracelets, pendants and chains.",
      },
      { property: "og:title", content: "Handmade jewelry made in Bali" },
      {
        property: "og:description",
        content: "Designer jewelry - rings, earrings, bracelets, pendants and chains.",
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
      <Devider />
      
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
