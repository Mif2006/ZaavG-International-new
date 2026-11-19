import { createFileRoute } from "@tanstack/react-router";
import {
  listCategories,
  listItems,
  listItemTags,
  type Category,
} from "@/lib/db";

const DOMAIN = "https://www.zaavgbali.com";

const STATIC_PAGES = [
  "",
  "/collections",
  "/delivery",
  "/size",
  "/paymentinfo",
  "/cooperation",
  "/contact",
  "/videos",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls: string[] = STATIC_PAGES.map(
          (p) => `  <url><loc>${DOMAIN}${p}</loc></url>`,
        );

        try {
          const [categories, items, tags] = await Promise.all([
            listCategories(),
            listItems(),
            listItemTags(),
          ]);

          // Products tagged "hidden" must never reach search engines.
          const hiddenCatIds = new Set(
            categories
              .filter(
                (c) =>
                  c.slug === "hidden" ||
                  (c.name_en || "").toLowerCase() === "hidden",
              )
              .map((c) => c.id),
          );
          const hiddenItemIds = new Set(
            tags
              .filter((t) => hiddenCatIds.has(t.category_id))
              .map((t) => t.item_id),
          );
          const visibleItems = items.filter((i) => !hiddenItemIds.has(i.id));
          const visibleIds = new Set(visibleItems.map((i) => i.id));

          // Only real, non-empty catalog categories. This automatically skips
          // "new", "main-page", "hidden", empty categories and stale slugs.
          const itemCount = (c: Category) =>
            c.kind === "primary"
              ? visibleItems.filter((i) => i.primary_category_id === c.id).length
              : tags.filter(
                  (t) => t.category_id === c.id && visibleIds.has(t.item_id),
                ).length;

          const sitemapCats = categories.filter(
            (c) =>
              ((c.kind === "primary" && c.show_in_catalog) ||
                c.slug === "phalange-rings") &&
              itemCount(c) > 0,
          );

          for (const c of sitemapCats) {
            urls.push(`  <url><loc>${DOMAIN}/collections/${c.slug}</loc></url>`);
          }
          for (const i of visibleItems) {
            const lastmod = new Date(i.updated_at ?? Date.now())
              .toISOString()
              .split("T")[0];
            urls.push(
              `  <url><loc>${DOMAIN}/collections/${i.slug}</loc><lastmod>${lastmod}</lastmod></url>`,
            );
          }
        } catch (e) {
          console.error("sitemap: catalog fetch failed, serving static URLs", e);
        }

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=86400",
          },
        });
      },
    },
  },
});