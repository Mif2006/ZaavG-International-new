import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getItemBySlug, listItems } from "@/lib/db";
import { PublicShell } from "@/components/public-shell";
import { useI18n } from "@/lib/i18n";
import { useCart } from "@/lib/cart-store";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import { useState } from "react";

type Lang = "en" | "ru" | "id";

const T: Record<
  Lang,
  {
    loading: string;
    size: string;
    cart: string;
    buy: string;
    recs: string;
    material: string;
    stock: string;
    locale: string;
  }
> = {
  en: {
    loading: "Loading...",
    size: "Ring size",
    cart: "Add to cart",
    buy: "Buy it now",
    recs: "You may also like",
    material: "Material",
    stock: "In stock",
    locale: "en-US",
  },
  ru: {
    loading: "Загрузка...",
    size: "Размер",
    cart: "В корзину",
    buy: "Купить сейчас",
    recs: "Вам также может понравиться",
    material: "Материал",
    stock: "В наличии",
    locale: "ru-RU",
  },
  id: {
    loading: "Memuat...",
    size: "Ukuran",
    cart: "Tambah ke keranjang",
    buy: "Beli sekarang",
    recs: "Anda mungkin juga menyukai",
    material: "Bahan",
    stock: "Stok",
    locale: "id-ID",
  },
};

export const Route = createFileRoute("/collections/$slug")({
  loader: async ({ params: { slug } }) => {
    const full = await getItemBySlug(slug);
    if (!full) throw notFound();
    
    const allItems = await listItems();
    return { full, allItems };
  },

  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { item } = loaderData.full;

    const cleanDescription = item.description
      ? item.description.replace(/(<([^>]+)>)/gi, "").substring(0, 160)
      : `Shop the ${item.title} at ZAAV G.`;

    const jsonLd = {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: item.title,
      image: item.main_image_url,
      description: cleanDescription,
      offers: {
        "@type": "Offer",
        url: `https://zaavgbali.com/collections/${item.slug}`,
        priceCurrency: "Iz",
        price: item.price,
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: "ZAAV G",
        },
      },
    };

    return {
      meta: [
        { title: `${item.title} | ZAAV G` },
        { name: "description", content: cleanDescription },
        { property: "og:title", content: item.title },
        { property: "og:description", content: cleanDescription },
        { property: "og:image", content: item.main_image_url },
        { property: "og:type", content: "product" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(jsonLd),
        },
      ],
    };
  },

  component: ItemPage,
  notFoundComponent: () => (
    <div className="bg-white text-black">
      <PublicShell variant="light">
        <div className="py-24 text-center text-black/60">Not found</div>
      </PublicShell>
    </div>
  ),
});

function ItemPage() {
  const { full, allItems } = Route.useLoaderData();

  const { lang } = useI18n();
  const dict = T[lang as Lang] || T.en;

  const { addItem } = useCart();

  const [heroIdx, setHeroIdx] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const { item, images, recommendedIds, sizes } = full;

  const gallery = [
    item.main_image_url,
    ...(images || []).map((i) => i.url),
  ].filter((u): u is string => !!u);
  
  const recs = (allItems ?? []).filter((i) =>
    (recommendedIds || []).includes(i.id),
  );

  const prev = () =>
    setHeroIdx((i) => (i - 1 + gallery.length) % gallery.length);
  const next = () => setHeroIdx((i) => (i + 1) % gallery.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) next();
    if (distance < -50) prev();
    setTouchStart(null);
    setTouchEnd(null);
  };

  const stockRows = (sizes || [])
    .filter((s) => s.size)
    .sort((a, b) => {
      const numA = parseFloat(a.size);
      const numB = parseFloat(b.size);
      if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
      return a.size.localeCompare(b.size);
    });

  const stockOnly = (sizes || []).find((s) => !s.size);

  const defaultSize =
    stockRows.find((s) => s.stock !== 0)?.size || stockRows[0]?.size || null;
  const activeSize = selectedSize ?? defaultSize;

  const decreaseQty = () => setQuantity((q) => Math.max(1, q - 1));
  const increaseQty = () => setQuantity((q) => q + 1);

  const handleAddToCart = () => {
    addItem({
      productId: item.id,
      title: item.title,
      price: Number(item.price),
      image: item.main_image_url || null,
      size: activeSize,
      quantity: quantity,
    });
  };

  return (
    <div className="bg-white overflow-x-hidden w-full max-w-full">
      <PublicShell variant="light">
        <div className="grid gap-8 pt-28 px-4 md:px-8 lg:px-12 pb-12 md:grid-cols-[minmax(0,1fr)_340px] lg:grid-cols-[minmax(0,1.2fr)_420px] lg:gap-16 items-start w-full max-w-full">
          
          {/* Gallery Area */}
          <div className="relative w-full min-w-0 max-w-full flex flex-col overflow-hidden">
            <div className="relative w-full overflow-hidden">
              <div
                className="flex w-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${heroIdx * 100}%)` }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {gallery.map((u, i) => {
                  const isActive = heroIdx === i;
                  return (
                    <div
                      key={u + i}
                      className="w-full min-w-full shrink-0 flex items-center justify-center px-4 md:px-12 lg:px-16"
                    >
                      <div
                        className={`relative aspect-[4/5] w-full max-w-[600px] overflow-hidden bg-neutral-100 transition-opacity duration-500 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <img
                          src={u}
                          alt={item.title}
                          className="h-full w-full object-cover"
                        />
                        {gallery.length > 1 && (
                          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-1 text-xs font-medium text-white backdrop-blur-sm transition-opacity">
                            {i + 1} / {gallery.length}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {gallery.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="prev"
                    className="absolute inset-y-0 left-0 flex w-10 items-center justify-center text-black transition hover:opacity-50 md:w-16 z-10 cursor-pointer"
                  >
                    <ChevronLeft
                      strokeWidth={1}
                      className="h-8 w-8 md:h-12 md:w-12"
                    />
                  </button>
                  <button
                    onClick={next}
                    aria-label="next"
                    className="absolute inset-y-0 right-0 flex w-10 items-center justify-center text-black transition hover:opacity-50 md:w-16 z-10 cursor-pointer"
                  >
                    <ChevronRight
                      strokeWidth={1}
                      className="h-8 w-8 md:h-12 md:w-12"
                    />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {gallery.length > 1 && (
              <div className="mt-6 w-full min-w-0 max-w-full overflow-x-auto py-2 px-2 text-center">
                <div className="inline-flex max-w-full gap-2 justify-center lg:justify-start">
                  {gallery.map((u, i) => (
                    <button
                      key={u + i}
                      onClick={() => setHeroIdx(i)}
                      className={`h-16 w-16 shrink-0 overflow-hidden border transition-opacity cursor-pointer ${
                        heroIdx === i
                          ? "border-black opacity-100"
                          : "border-transparent opacity-50 hover:opacity-80"
                      }`}
                    >
                      <img
                        src={u}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6 min-w-0 max-w-full">
            <div>
              <h1 className="text-3xl font-bold md:text-4xl">{item.title}</h1>
              <div className="mt-2 text-lg text-black/80 tabular-nums">
               Rp {Number(item.price).toLocaleString(dict.locale)} 
              </div>
            </div>

            <div className="h-px w-full bg-black/10" />

            {/* Size Selector */}
            {stockRows.length > 0 && (
              <div>
                <div className="mb-3 text-sm text-black/80">{dict.size}</div>
                <div className="flex flex-wrap gap-2">
                  {stockRows.map((s) => {
                    const isOutOfStock = s.stock === 0;
                    const isSelected = activeSize === s.size;

                    let buttonClass =
                      "min-w-[4rem] rounded-xl border px-4 py-2 text-sm transition-colors relative overflow-hidden ";

                    if (isOutOfStock) {
                      buttonClass +=
                        "border-black/20 text-black/40 cursor-not-allowed bg-[linear-gradient(to_top_right,transparent_calc(50%-1px),rgba(0,0,0,0.2)_50%,transparent_calc(50%+1px))]";
                    } else if (isSelected) {
                      buttonClass +=
                        "border-black bg-black text-white cursor-pointer";
                    } else {
                      buttonClass +=
                        "border-black/20 bg-white text-black hover:border-black cursor-pointer";
                    }

                    return (
                      <button
                        key={s.size}
                        disabled={isOutOfStock}
                        onClick={() => !isOutOfStock && setSelectedSize(s.size)}
                        className={buttonClass}
                      >
                        {s.size_unit && s.size_unit !== "ru"
                          ? `${s.size} ${s.size_unit}`
                          : s.size}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Actions: Quantity & Cart */}
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="flex items-center rounded-xl border border-black/20 px-2 py-1 shrink-0">
                  <button
                    onClick={decreaseQty}
                    className="flex h-8 w-8 items-center justify-center text-lg text-black/60 hover:text-black cursor-pointer"
                  >
                    −
                  </button>
                  <div className="w-8 text-center text-sm font-medium">
                    {quantity}
                  </div>
                  <button
                    onClick={increaseQty}
                    className="flex h-8 w-8 items-center justify-center text-lg text-black/60 hover:text-black cursor-pointer"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/80 cursor-pointer"
                >
                  <ShoppingBag className="h-4 w-4 shrink-0" />
                  <span className="truncate">{dict.cart}</span>
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="w-full rounded-xl bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/80 cursor-pointer"
              >
                {dict.buy}
              </button>
            </div>

            {/* Metadata */}
            <div className="pt-2 text-md font-bold">
              {item.material && (
                <div>
                  <span >{dict.material}:</span>{" "}
                  {item.material}
                </div>
              )}
              {stockOnly && (
                <div>
                  <span className="font-semibold">{dict.stock}:</span>{" "}
                  {stockOnly.stock}
                </div>
              )}
            </div>

            {/* Description */}
            {item.description && (
              <div
                className="prose prose-sm max-w-none text-black/80 break-words"
                dangerouslySetInnerHTML={
                  { __html: 
                    item.description 
                  }
                }
              />
            )}
          </div>
        </div>

        {/* Recommendations */}
        {recs.length > 0 && (
          <section className="mt-12 px-4 md:px-12 lg:px-24 pb-8 w-full max-w-full">
            <h2 className="mb-6 text-2xl font-bold">{dict.recs}</h2>
            <div className="grid grid-cols-2 gap-x-2 gap-y-8 sm:grid-cols-4 md:gap-x-4">
              {recs.map((r) => (
                <Link
                  to="/collections/$slug"
                  params={{ slug: r.slug }}
                  key={r.id}
                  className="group block cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden bg-neutral-100">
                    {r.main_image_url && (
                      <img
                        src={r.main_image_url}
                        alt=""
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    )}
                  </div>
                  <div className="pt-3">
                    <div className="text-sm font-medium truncate">{r.title}</div>
                    <div className="mt-0.5 text-sm text-black/70 tabular-nums">
                     Rp {Number(r.price).toLocaleString(dict.locale)} 
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </PublicShell>
    </div>
  );
}