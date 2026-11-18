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
import { listItems, listCategories, listItemTags } from "@/lib/db";

const SITE = "https://www.zaavgbali.com";

export const Route = createFileRoute("/")({
  loader: async () => {
    const [items, categories, tags] = await Promise.all([
      listItems(),
      listCategories(),
      listItemTags(),
    ]);
    return { items, categories, tags };
  },
  head: () => ({
    meta: [
      { title: "ZAAV G | Handmade Silver Jewelry from Bali — Rings, Pendants, Necklaces" },
      { name: "description", content: "Sculptural 925 sterling silver jewelry with 24k gold accents and natural stones. Designed by Elena Usnich, handcrafted in our Bali workshop. Worldwide shipping." },
      { property: "og:title", content: "ZAAV G | Handmade Silver Jewelry from Bali" },
      { property: "og:description", content: "Designer 925 silver jewelry, handcrafted in Bali. Rings, earrings, bracelets, pendants and chains. Shipped worldwide." },
      { property: "og:url", content: `${SITE}/` },
      { property: "og:image", content: `${SITE}/LinkImage.webp` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ZAAV G",
          url: SITE,
          logo: `${SITE}/LinkImage.webp`,
          sameAs: ["https://www.instagram.com/zaav_g_bali/"],
          contactPoint: { "@type": "ContactPoint", telephone: "+62-811-3988-8882", contactType: "customer service" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({ "@context": "https://schema.org", "@type": "WebSite", name: "ZAAV G", url: SITE }),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const { t, lang } = useI18n();
  const initial = Route.useLoaderData();
  return (
    <PublicShell>
      <section className="bg-white">
        <Hero />
      </section>

      <section className="bg-white">
        <ArtSpace />
      </section>

      <section className="bg-white">
        <Activity mode="visible">
          <Bestsellers initial={initial} />
        </Activity>
      </section>

      <section className="bg-white">
        <VideoSection />
      </section>

      <section className="bg-white">
        <Features />
      </section>

      {/* Crawlable keyword copy + internal links to category pages */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-black">
            Handmade silver jewelry, born in Bali
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-black/70">
            ZAAV G is an independent jewelry brand creating sculptural pieces from solid 925
            sterling silver, accented with 24k gold and natural stones. Each design begins as an
            ancient symbol and is brought to life by hand in our own workshop on Bali, near the
            silver-smithing village of Celuk. Designed by Elena Usnich and made by skilled Balinese
            artisans, every piece is created to be worn every day — and remembered in the moments
            that matter. Visit our art space in Singapadu, Sukawati, or shop the collection with
            worldwide shipping.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.15em]">
            <Link to="/collections/$slug" params={{ slug: "rings" }} className="text-black/60 hover:text-black">Silver Rings</Link>
            <Link to="/collections/$slug" params={{ slug: "earrings" }} className="text-black/60 hover:text-black">Earrings</Link>
            <Link to="/collections/$slug" params={{ slug: "bracelets" }} className="text-black/60 hover:text-black">Bracelets</Link>
            <Link to="/collections/$slug" params={{ slug: "pendants" }} className="text-black/60 hover:text-black">Pendants</Link>
            <Link to="/collections/$slug" params={{ slug: "chains" }} className="text-black/60 hover:text-black">Necklaces & Chains</Link>
            <Link to="/size" className="text-black/60 hover:text-black">Size Guide</Link>
            <Link to="/cooperation" className="text-black/60 hover:text-black">Wholesale</Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <Faq />
      </section>
    </PublicShell>
  );
}