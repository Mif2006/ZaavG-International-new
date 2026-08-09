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
import { Image } from "@unpic/react";

// ImageKit Proxy Helper
const IMAGEKIT_ENDPOINT = "https://ik.imagekit.io/ZaavGImages";

function getProxyUrl(url: string | null | undefined): string {
  if (!url) return "";
  if (url.startsWith(IMAGEKIT_ENDPOINT)) return url;
  return `${IMAGEKIT_ENDPOINT}/${url}`;
}

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
    locale: "id-ID",
  },
  ru: {
    title: "Бестселлеры",
    addToCart: "В корзину",
    learnMore: "Подробнее",
    newBadge: "NEW",
    loading: "Загрузка хитов продаж...",
    empty: "Товары в категории 'main page' не найдены.",
    noImage: "Нет фото",
    locale: "id-ID",
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
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="flex flex-col items-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-black tracking-tight">
          {dict.title}
        </h2>
      </div>

      {bestsellers.length === 0 ? (
        <div className="w-full py-12 flex flex-col items-center justify-center text-center bg-neutral-50 border border-black/10">
          <p className="text-sm text-black/60 uppercase tracking-widest">{dict.empty}</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 pb-8">
          {bestsellers.map((it, idx) => {
            const isNew = newCat ? matchesCategory(it, newCat) : false;

            return (
              <div 
                key={it.id} 
                className="w-full group flex flex-col items-start"
              >
                {/* Rectangular Image Container (3:4 ratio) */}
                <div className="relative w-full aspect-[3/4] mb-3 overflow-hidden bg-neutral-100">
                  <Link to="/collections/$slug" params={{ slug: it.slug }} className="block w-full h-full">
                    {it.main_image_url ? (
                      <Image 
                        src={getProxyUrl(it.main_image_url)} 
                        alt={it.title} 
                        width={600}
                        height={800}
                        layout="constrained"
                        aspectRatio={3 / 4}
                        priority={idx < 4}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="absolute inset-0 w-full h-full flex items-center justify-center text-xs text-black/40">
                        {dict.noImage}
                      </div>
                    )}
                  </Link>

                  {isNew && (
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-9 h-9 sm:w-11 sm:h-11 bg-[#222222] text-white rounded-full flex items-center justify-center text-[9px] sm:text-[10px] font-bold tracking-wider z-10 pointer-events-none">
                      {dict.newBadge}
                    </div>
                  )}
                </div>

                {/* Left-aligned details matching reference layout */}
                <div className="flex flex-col items-start w-full text-left">
                  <Link to="/collections/$slug" params={{ slug: it.slug }} className="block w-full text-black hover:text-black/70 transition-colors">
                    <h3 className="text-sm font-medium text-neutral-900 truncate w-full">
                      {it.title}
                    </h3>
                    <p className="text-sm text-neutral-500 font-normal mt-0.5 tabular-nums">
                      Rp {Number(it.price).toLocaleString("id-ID")}
                    </p>
                  </Link>
                  
                  {/* Temporarily commented out button actions
                  <div className="flex flex-col w-full gap-2 mt-3">
                    <Link 
                      to="/collections/$slug" 
                      params={{ slug: it.slug }}
                      className="w-full py-2.5 text-xs font-bold text-white bg-[#222222] hover:bg-black transition-colors rounded-md text-center"
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
                      className="w-full py-2.5 text-xs font-bold text-black bg-white border border-black hover:bg-neutral-50 transition-colors rounded-md text-center cursor-pointer"
                    >
                      {dict.addToCart}
                    </button>
                  </div>
                  */}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}