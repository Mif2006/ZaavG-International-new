import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
  listCategories,
  listItems,
  listItemTags,
  type Category,
  type Item,
} from "@/lib/db";
import { PublicShell } from "@/components/public-shell";
import { useI18n, catName } from "@/lib/i18n";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type Lang = "en" | "ru" | "id";

// Local dictionary for UI text
const T: Record<
  Lang,
  {
    title: string;
    all: string;
    empty: string;
    noImage: string;
    newBadge: string;
    locale: string;
  }
> = {
  en: {
    title: "Find Your Piece",
    all: "All",
    empty: "No items found in this category.",
    noImage: "no image",
    newBadge: "NEW",
    locale: "id-ID",
  },
  ru: {
    title: "Авторские украшения из серебра",
    all: "Все",
    empty: "В этой категории нет товаров.",
    noImage: "нет фото",
    newBadge: "NEW",
    locale: "id-ID",
  },
  id: {
    title: "Temukan Perhiasan Anda",
    all: "Semua",
    empty: "Tidak ada produk di kategori ini.",
    noImage: "tidak ada gambar",
    newBadge: "NEW",
    locale: "id-ID",
  },
};

// Stop-gap translation map for Indonesian categories
const ID_CATEGORY_MAP: Record<string, string> = {
  кольца: "Cincin",
  rings: "Cincin",
  "мужские украшения": "Perhiasan Pria",
  "men's jewelry": "Perhiasan Pria",
  серьги: "Anting",
  earrings: "Anting",
  браслеты: "Gelang",
  bracelets: "Gelang",
  подвески: "Liontin",
  pendants: "Liontin",
  "фаланговые кольца": "Cincin Ruas",
  "phalange rings": "Cincin Ruas",
  цепи: "Kalung",
  chains: "Kalung",
  новинка: "Terbaru",
  new: "Terbaru",
};

function getCategoryDisplayName(c: Category, lang: string) {
  const originalName = catName(c, lang as any);
  if (lang === "id") {
    const lower = originalName.trim().toLowerCase();
    if (ID_CATEGORY_MAP[lower]) {
      return ID_CATEGORY_MAP[lower];
    }
  }
  return originalName;
}

export const Route = createFileRoute("/collections/")({
  head: () => ({
    meta: [
      { title: "Collections — Find Your Piece" },
      {
        name: "description",
        content:
          "Browse all jewelry: rings, earrings, bracelets, pendants, chains.",
      },
      { property: "og:title", content: "Collections — Find Your Piece" },
      { property: "og:description", content: "Browse all jewelry pieces." },
    ],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  const { lang } = useI18n();
  const dict = T[lang as Lang] || T.en;

  const [activeCat, setActiveCat] = useState<string | null>(null);

  const cats = useQuery({ queryKey: ["categories"], queryFn: listCategories });
  const items = useQuery({ queryKey: ["items"], queryFn: listItems });
  const tags = useQuery({ queryKey: ["item_tags"], queryFn: listItemTags });

  const tabCats = useMemo(
    () =>
      (cats.data ?? [])
        .filter((c) => c.show_in_catalog)
        .sort((a, b) => a.catalog_order - b.catalog_order),
    [cats.data],
  );

  const tagIdsByItem = useMemo(() => {
    const m = new Map<string, Set<string>>();
    for (const tt of tags.data ?? []) {
      if (!m.has(tt.item_id)) m.set(tt.item_id, new Set());
      m.get(tt.item_id)!.add(tt.category_id);
    }
    return m;
  }, [tags.data]);

  const newCat = useMemo(() => {
    if (!cats.data) return null;
    return cats.data.find((c) => {
      const name = (c.name || "").toLowerCase();
      const slug = (c.slug || "").toLowerCase();
      return name === "new" || slug === "new" || name === "новинка";
    });
  }, [cats.data]);

  const matchesCategory = (it: Item, c: Category) =>
    c.kind === "primary"
      ? it.primary_category_id === c.id
      : tagIdsByItem.get(it.id)?.has(c.id) ?? false;

  const filtered = (items.data ?? []).filter((i) => {
    if (!activeCat) return true;
    const c = tabCats.find((tc) => tc.id === activeCat);
    return c ? matchesCategory(i, c) : true;
  });

  return (
    <div className="bg-white text-black">
      {/* Updated slower, smoother animation keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .collection-link {
          position: relative;
        }
        .collection-link::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 0;
          height: 1px;
          background: #000000;
          transition: width 0.3s ease;
        }
        .collection-link:hover::after {
          width: 100%;
        }
      `}</style>

      <PublicShell variant="light">
        <section className="pt-36 pb-10 text-center md:pt-32 md:pb-16">
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
            {dict.title}
          </h1>
        </section>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-b border-black/10 pb-4 text-sm uppercase tracking-[0.15em]">
          <button
            onClick={() => setActiveCat(null)}
            className={cn(
              "relative pb-3 transition cursor-pointer",
              !activeCat
                ? "font-semibold text-black after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-black"
                : "text-black/60 hover:text-black collection-link",
            )}
          >
            {dict.all}
          </button>
          {tabCats.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCat(c.id)}
              className={cn(
                "relative pb-3 transition cursor-pointer",
                activeCat === c.id
                  ? "font-semibold text-black after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-black"
                  : "text-black/60 hover:text-black collection-link",
              )}
            >
              {getCategoryDisplayName(c, lang)}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="py-24 text-center text-black/50">{dict.empty}</div>
        ) : (
          <div className="grid mx-6 md:mx-8 pt-4 pb-16 grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
            {filtered.map((it, idx) => {
              const isNew = newCat ? matchesCategory(it, newCat) : false;

              return (
                <Link
                  to="/collections/$slug"
                  params={{ slug: it.slug }}
                  key={it.id}
                  style={{
                    animationDelay: `${Math.min(idx, 15) * 70}ms`,
                  }}
                  className="group flex flex-col items-start cursor-pointer animate-fade-in-up"
                >
                  {/* Rectangular Image Container (3:4 ratio) */}
                  <div className="relative w-full aspect-[3/4] mb-3 overflow-hidden bg-neutral-100">
                    {it.main_image_url ? (
                      <img
                        src={it.main_image_url}
                        alt={it.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-xs text-black/40">
                        {dict.noImage}
                      </div>
                    )}

                    {isNew && (
                      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-9 h-9 sm:w-11 sm:h-11 bg-[#222222] text-white rounded-full flex items-center justify-center text-[9px] sm:text-[10px] font-bold tracking-wider z-10 pointer-events-none shadow-sm">
                        {dict.newBadge}
                      </div>
                    )}
                  </div>

                  {/* Left-aligned details matching reference layout */}
                  <div className="flex flex-col items-start w-full text-left">
                    <h3 className="text-sm font-medium text-neutral-900 truncate w-full transition-colors group-hover:text-black/70">
                      {it.title}
                    </h3>
                    <p className="text-sm text-neutral-500 font-normal mt-0.5 tabular-nums">
                      Rp {Number(it.price).toLocaleString("id-ID")}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </PublicShell>
    </div>
  );
}