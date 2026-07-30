import { useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useI18n } from "@/lib/i18n";
import { useCart } from "@/lib/cart-store";
import { 
  listCategories, 
  listItems, 
  listItemTags, 
  type Category, 
  type Item 
} from "@/lib/db";

type Lang = "en" | "ru" | "id";

const BESTSELLERS_T = {
  en: {
    title: "Bestsellers",
    addToCart: "Add to Cart",
    learnMore: "Learn More",
    newBadge: "NEW",
    loading: "Loading bestsellers...",
    empty: "No items found in the 'main page' category.",
    noImage: "No photo",
    locale: "en-US",
  },
  ru: {
    title: "Bestsellers",
    addToCart: "В корзину",
    learnMore: "Подробнее",
    newBadge: "NEW",
    loading: "Загрузка хитов продаж...",
    empty: "Товары в категории 'main page' не найдены.",
    noImage: "Нет фото",
    locale: "ru-RU",
  },
  id: {
    title: "Terlaris",
    addToCart: "Tambah ke Keranjang",
    learnMore: "Pelajari Lebih Lanjut",
    newBadge: "NEW",
    loading: "Memuat produk terlaris...",
    empty: "Tidak ada produk di kategori 'main page'.",
    noImage: "Tidak ada gambar",
    locale: "id-ID",
  },
} as const;

export function Bestsellers() {
  const { lang } = useI18n();
  const { addItem } = useCart();
  const dict = BESTSELLERS_T[lang as Lang] || BESTSELLERS_T.en;

  const cats = useQuery({ queryKey: ["categories"], queryFn: listCategories });
  const items = useQuery({ queryKey: ["items"], queryFn: listItems });
  const tags = useQuery({ queryKey: ["item_tags"], queryFn: listItemTags });

  const isLoading = cats.isLoading || items.isLoading || tags.isLoading;

  const tagIdsByItem = useMemo(() => {
    const m = new Map<string, Set<string>>();
    for (const tt of tags.data ?? []) {
      if (!m.has(tt.item_id)) m.set(tt.item_id, new Set());
      m.get(tt.item_id)!.add(tt.category_id);
    }
    return m;
  }, [tags.data]);

  const mainPageCat = useMemo(() => {
    if (!cats.data) return null;
    return cats.data.find((c) => {
      const name = (c.name || "").toLowerCase();
      const slug = (c.slug || "").toLowerCase();
      return name === "main page" || slug === "main-page";
    });
  }, [cats.data]);

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

  const bestsellers = useMemo(() => {
    if (!items.data || !mainPageCat) return [];
    return items.data.filter((it) => matchesCategory(it, mainPageCat));
  }, [items.data, mainPageCat, tagIdsByItem]);

  if (isLoading) {
    return (
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex items-center justify-center min-h-[300px]">
        <span className="text-sm text-black/50 uppercase tracking-widest">{dict.loading}</span>
      </section>
    );
  }

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-4xl font-bold text-black mb-2">
          {dict.title}
        </h2>
      </div>

      {bestsellers.length === 0 ? (
        <div className="w-full py-12 flex flex-col items-center justify-center text-center bg-neutral-50 border border-black/10">
          <p className="text-sm text-black/60 uppercase tracking-widest">{dict.empty}</p>
        </div>
      ) : (
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 lg:grid lg:grid-cols-4 lg:gap-6 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {bestsellers.map((it) => {
            const isNew = newCat ? matchesCategory(it, newCat) : false;

            return (
              <div 
                key={it.id} 
                className="w-[75vw] sm:w-[45vw] lg:w-auto snap-center flex-shrink-0 group flex flex-col items-center"
              >
                <div className="relative w-full aspect-[4/5] mb-4 overflow-hidden bg-neutral-100">
                  <Link to="/collections/$slug" params={{ slug: it.slug }} className="block w-full h-full">
                    {it.main_image_url ? (
                      <img 
                        src={it.main_image_url} 
                        alt={it.title} 
                        className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="absolute inset-0 w-full h-full flex items-center justify-center text-xs text-black/40">
                        {dict.noImage}
                      </div>
                    )}
                  </Link>

                  {isNew && (
                    <div className="absolute top-4 right-4 w-12 h-12 bg-[#222222] text-white rounded-full flex items-center justify-center text-[10px] font-bold tracking-wider z-10 pointer-events-none">
                      {dict.newBadge}
                    </div>
                  )}
                </div>

                <div className="flex flex-col items-center w-full px-2 text-center">
                  <Link to="/collections/$slug" params={{ slug: it.slug }} className="block w-full mb-4 text-black hover:text-black/70 transition-colors">
                    <h3 className="text-sm sm:text-base font-bold mb-1 truncate w-full">
                      {it.title}
                    </h3>
                    <p className="text-sm sm:text-base tabular-nums font-medium">
                      {Number(it.price).toLocaleString(dict.locale)} ₽
                    </p>
                  </Link>
                  
                  <div className="flex flex-col w-full gap-2">
                    <Link 
                      to="/collections/$slug" 
                      params={{ slug: it.slug }}
                      className="w-full py-3 text-sm font-bold text-white bg-[#222222] hover:bg-black transition-colors rounded-md text-center"
                    >
                      {dict.learnMore}
                    </Link>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addItem({ 
                          id: it.id,
                          title: it.title,
                          price: Number(it.price),
                          image: it.main_image_url,
                          quantity: 1, 
                          size: "Default" 
                        });
                      }}
                      className="w-full py-3 text-sm font-bold text-black bg-white border border-black hover:bg-neutral-50 transition-colors rounded-md text-center cursor-pointer"
                    >
                      {dict.addToCart}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}