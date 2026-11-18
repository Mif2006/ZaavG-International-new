import { createFileRoute } from "@tanstack/react-router";

const DOMAIN = "https://www.zaavgbali.com";

export const Route = createFileRoute("/sitemap.xml")({
  loader: async () => {
    const staticPages = ["", "/collections", "/collections/rings", "/collections/earrings",
      "/collections/bracelets", "/collections/pendants", "/collections/chains",
      "/delivery", "/size", "/paymentinfo", "/cooperation", "/contact", "/videos"];

    let items: { slug: string; updated_at: string | null }[] = [];
    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const { data } = await supabaseAdmin
        .from("items").select("slug, updated_at").order("sort_order");
      items = data ?? [];
    } catch (e) {
      console.error("sitemap: catalog fetch failed, serving static URLs", e);
    }

    const urls = [
      ...staticPages.map((p) => `  <url><loc>${DOMAIN}${p}</loc><changefreq>weekly</changefreq><priority>${p === "" ? "1.0" : "0.8"}</priority></url>`),
      ...items.map((i) => `  <url><loc>${DOMAIN}/collections/${i.slug}</loc><lastmod>${new Date(i.updated_at ?? Date.now()).toISOString().split("T")[0]}</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>`),
    ];
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
    return new Response(xml, {
      headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600, s-maxage=86400" },
    });
  },
});