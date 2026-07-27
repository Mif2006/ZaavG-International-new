import { useMemo } from "react";
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
    viewAll: "View All",
    addToCart: "Add to Cart",
    loading: "Loading bestsellers...",
    empty: "No items found in the 'main page' category.",
    noImage: "No photo",
  },
  ru: {
    title: "Хиты продаж",
    viewAll: "Смотреть все",
    addToCart: "В корзину",
    loading: "Загрузка хитов продаж...",
    empty: "Товары в категории 'main page' не найдены.",
    noImage: "Нет фото",
  },
  id: {
    title: "Terlaris",
    viewAll: "Lihat Semua",
    addToCart: "Tambah ke Keranjang",
    loading: "Memuat produk terlaris...",
    empty: "Tidak ada produk di kategori 'main page'.",
    noImage: "Tidak ada gambar",
  },
} as const;

export function Bestsellers() {
  const { lang } = useI18n();
  const { addItem } = useCart();
  const t = BESTSELLERS_T[lang as Lang] || BESTSELLERS_T.en;
  const locale = lang === "ru" ? "ru-RU" : lang === "id" ? "id-ID" : "en-US";

  // Fetch all necessary data just like the CollectionsPage
  const cats = useQuery({ queryKey: ["categories"], queryFn: listCategories });
  const items = useQuery({ queryKey: ["items"], queryFn: listItems });
  const tags = useQuery({ queryKey: ["item_tags"], queryFn: listItemTags });

  const isLoading = cats.isLoading || items.isLoading || tags.isLoading;

  // 1. Map item IDs to a Set of their category IDs
  const tagIdsByItem = useMemo(() => {
    const m = new Map<string, Set<string>>();
    for (const tt of tags.data ?? []) {
      if (!m.has(tt.item_id)) m.set(tt.item_id, new Set());
      m.get(tt.item_id)!.add(tt.category_id);
    }
    return m;
  }, [tags.data]);

  // 2. Find the specific category object for "main page"
  const mainPageCat = useMemo(() => {
    if (!cats.data) return null;
    return cats.data.find((c) => {
      const name = (c.name || "").toLowerCase();
      const slug = (c.slug || "").toLowerCase();
      // Adjust these string checks if your exact DB entry is slightly different
      return name === "main page" || slug === "main-page";
    });
  }, [cats.data]);

  const matchesCategory = (it: Item, c: Category) =>
    c.kind === "primary"
      ? it.primary_category_id === c.id
      : tagIdsByItem.get(it.id)?.has(c.id) ?? false;

  // 3. Filter items that match the "main page" category
  const bestsellers = useMemo(() => {
    if (!items.data || !mainPageCat) return [];
    return items.data.filter((it) => matchesCategory(it, mainPageCat));
  }, [items.data, mainPageCat, tagIdsByItem]);

  if (isLoading) {
    return (
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex items-center justify-center min-h-[300px]">
        <span className="text-sm text-black/50 uppercase tracking-widest">{t.loading}</span>
      </section>
    );
  }

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="flex items-end justify-between mb-10 border-b border-black/10 pb-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-widest uppercase text-black">
          {t.title}
        </h2>
        <a 
          href="/collections" 
          className="text-xs uppercase tracking-widest text-black/50 hover:text-black transition-colors underline cursor-pointer"
        >
          {t.viewAll}
        </a>
      </div>

      {/* Renders an empty state if the category doesn't exist or has no items */}
      {bestsellers.length === 0 ? (
        <div className="w-full py-12 flex flex-col items-center justify-center text-center bg-neutral-50 border border-black/10">
          <p className="text-sm text-black/60 uppercase tracking-widest">{t.empty}</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
          {bestsellers.map((item) => (
            <div key={item.id} className="group flex flex-col">
              <a href={`/collections/${item.slug}`} className="relative block aspect-[4/5] mb-4 overflow-hidden bg-neutral-100">
                {item.main_image_url ? (
                  <img 
                    src={item.main_image_url} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center text-xs text-black/40">
                    {t.noImage}
                  </div>
                )}
              </a>

              <div className="flex flex-col flex-1">
                <a href={`/collections/${item.slug}`} className="block">
                  <h3 className="text-sm font-semibold mb-1 text-black hover:text-black/70 transition-colors truncate">
                    {item.title}
                  </h3>
                  <p className="text-sm tabular-nums text-black/70 font-medium">
                    {Number(item.price).toLocaleString(locale)} ₽
                  </p>
                </a>
                
                <button
                  type="button"
                  onClick={() => addItem({ 
                    id: item.id,
                    title: item.title,
                    price: Number(item.price),
                    image: item.main_image_url,
                    quantity: 1, 
                    size: "Default" 
                  })}
                  className="mt-4 w-full py-3 text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-black/20 hover:border-black transition-colors bg-transparent text-black cursor-pointer text-center"
                >
                  {t.addToCart}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}