// src/routes/sitemap[.]xml.ts
import { createFileRoute } from "@tanstack/react-router";
import { listItems } from "@/lib/db";

export const Route = createFileRoute("/sitemap.xml")({
  loader: async () => {
    const domain = "https://zaav-g-international-new.vercel.app";

    // 1. Static pages
    const staticPages = ["", "/collections", "/delivery", "/size", "/paymentinfo", "/cooperation", "/contact", "/videos"];

    // 2. Fetch active catalog items from Supabase
    const items = await listItems();

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Output static routes
    for (const page of staticPages) {
      xml += `  <url>\n`;
      xml += `    <loc>${domain}${page}</loc>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>${page === "" ? "1.0" : "0.8"}</priority>\n`;
      xml += `  </url>\n`;
    }

    // Output collection items from database
    for (const item of items) {
      xml += `  <url>\n`;
      xml += `    <loc>${domain}/collections/${item.slug}</loc>\n`;
      xml += `    <lastmod>${new Date(item.updated_at || Date.now()).toISOString().split("T")[0]}</lastmod>\n`;
      xml += `    <changefreq>daily</changefreq>\n`;
      xml += `    <priority>0.9</priority>\n`;
      xml += `  </url>\n`;
    }

    xml += `</urlset>`;

    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    });
  },
});