import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  getItemBySlug,
  listItems,
  listCategories,
  getCategoryBySlug,
  listItemsByCategory,
  type Category,
  type Item,
} from "@/lib/db";
import { PublicShell } from "@/components/public-shell";
import { useI18n } from "@/lib/i18n";
import { useCart } from "@/lib/cart-store";
import { ArrowLeft, ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import { useState } from "react";

type Lang = "en" | "ru" | "id";

const T: Record<
  Lang,
  {
    loading: string;
    size: string;
    cart: string;
    buy: string;
    buyOutOfStock: string;
    recs: string;
    material: string;
    back: string;
    unavailableTitle: string;
    unavailableMessage: string;
    locale: string;
  }
> = {
  en: {
    loading: "Loading...",
    size: "Size",
    cart: "Add to cart",
    buy: "Buy it now",
    buyOutOfStock: "Temporarily out of stock",
    recs: "You may also like",
    material: "Material",
    back: "Back to collections",
    unavailableTitle: "Unable to purchase",
    unavailableMessage:
      "This item cannot be purchased right now because no size has been selected or it is currently out of stock. Please contact us and we will be happy to help.",
    locale: "en-US",
  },
  ru: {
    loading: "Загрузка...",
    size: "Размер",
    cart: "В корзину",
    buy: "Купить сейчас",
    buyOutOfStock: "Временно нет в наличии",
    recs: "Вам также может понравиться",
    material: "Материал",
    back: "Вернуться к коллекциям",
    unavailableTitle: "Невозможно оформить покупку",
    unavailableMessage:
      "Этот товар сейчас нельзя приобрести: размер не выбран или товар закончился. Свяжитесь с нами, и мы с радостью поможем.",
    locale: "ru-RU",
  },
  id: {
    loading: "Memuat...",
    size: "Ukuran",
    cart: "Tambah ke keranjang",
    buy: "Beli sekarang",
    buyOutOfStock: "Untuk sementara stok habis",
    recs: "Anda mungkin juga menyukai",
    material: "Bahan",
    back: "Kembali ke koleksi",
    unavailableTitle: "Tidak dapat melakukan pembelian",
    unavailableMessage:
      "Produk ini belum dapat dibeli karena ukuran belum dipilih atau stok sedang habis. Silakan hubungi kami dan kami akan dengan senang hati membantu.",
    locale: "id-ID",
  },
};

const SITE = "https://www.zaavgbali.com";

function plainText(html: string) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const CATEGORY_SEO: Record<
  string,
  { title: string; description: string; h1: string; intro: string }
> = {
  rings: {
    title: "Silver Rings Handmade in Bali — 925 Sterling | ZAAV G",
    description:
      "Sculptural 925 sterling silver rings handcrafted in Bali. Symbolic designs, natural stones and 24k gold accents by ZAAV G. Worldwide shipping.",
    h1: "Handmade Silver Rings from Bali",
    intro:
      "Every ZAAV G ring begins as an ancient symbol, shaped by hand in our Bali workshop from solid 925 sterling silver — often accented with 24k gold and natural stones. From sculptural statement rings to delicate bands, each piece is made to be worn every day. Find your fit with our ring size guide, or visit the atelier in Singapadu to try them on.",
  },
  earrings: {
    title: "Handmade Silver Earrings from Bali — 925 | ZAAV G",
    description:
      "Handcrafted 925 sterling silver earrings from Bali. Studs and statement designs with natural gemstones. By ZAAV G, shipped worldwide.",
    h1: "Handmade Silver Earrings from Bali",
    intro:
      "From quiet studs to sculptural statement pieces, ZAAV G earrings are handcrafted in Bali from 925 sterling silver and set with natural gemstones. Each pair carries a symbol and a story — made to move with you, from everyday moments to the ones that matter.",
  },
  bracelets: {
    title: "Bali Silver Bracelets — Handmade 925 Silver | ZAAV G",
    description:
      "Handmade 925 sterling silver bracelets from Bali. Woven chains, cuffs and symbolic designs by ZAAV G. Worldwide shipping.",
    h1: "Handmade Silver Bracelets from Bali",
    intro:
      "ZAAV G bracelets are hand-formed in our Bali workshop from solid 925 sterling silver — woven chains, cuffs and symbolic pieces built to be worn daily and remembered. Each one is finished by hand and checked before it ships, anywhere in the world.",
  },
  pendants: {
    title: "Silver Pendants Handmade in Bali — 925 | ZAAV G",
    description:
      "Handcrafted 925 sterling silver pendants from Bali. Talisman designs with natural stones and 24k gold accents. By ZAAV G.",
    h1: "Handmade Silver Pendants from Bali",
    intro:
      "Each ZAAV G pendant is a small talisman — an ancient symbol reworked by hand in Bali from 925 sterling silver, natural stones and touches of 24k gold. Wear it close to the story it carries, every day rather than only on special occasions.",
  },
  chains: {
    title: "Sterling Silver Necklaces & Chains — Bali | ZAAV G",
    description:
      "Handmade 925 sterling silver necklaces and chains from Bali. Woven links and symbolic pendants by ZAAV G. Worldwide shipping.",
    h1: "Silver Necklaces & Chains, Handmade in Bali",
    intro:
      "ZAAV G necklaces and chains are hand-woven in Bali from 925 sterling silver, link by link. Pair them with a symbolic pendant or wear them alone — each piece is made to sit comfortably and last, shipped worldwide.",
  },
  "mens-jewelry": {
    title: "Men's Silver Jewelry Handmade in Bali | ZAAV G",
    description:
      "Handmade 925 sterling silver jewelry for men from Bali. Bold rings, chains and cuffs by ZAAV G. Worldwide shipping.",
    h1: "Men's Handmade Silver Jewelry from Bali",
    intro:
      "Bold, sculptural pieces in solid 925 sterling silver — rings, chains and cuffs handcrafted in Bali for everyday wear. ZAAV G men's jewelry carries the same symbolic design language as the rest of the collection, built to be worn, not kept away.",
  },
  "phalanx-rings": {
    title: "Phalanx Rings — Handmade 925 Silver | ZAAV G",
    description:
      "Handmade 925 sterling silver phalanx (midi) rings from Bali. Delicate symbolic bands by ZAAV G. Worldwide shipping.",
    h1: "Handmade Phalanx Rings from Bali",
    intro:
      "Delicate bands designed to sit above the knuckle, handcrafted in Bali from 925 sterling silver. ZAAV G phalanx rings stack easily with the rest of the collection — small, symbolic pieces made for everyday wear.",
  },
};
CATEGORY_SEO["phalange-rings"] = CATEGORY_SEO["phalanx-rings"];

export const Route = createFileRoute("/collections/$slug")({
  validateSearch: (search: Record<string, unknown>): { category?: string } => ({
    category: typeof search.category === "string" ? search.category : undefined,
  }),
  loader: async ({ params: { slug } }) => {
    const full = await getItemBySlug(slug);
    if (full) {
      const [allItems, categories] = await Promise.all([listItems(), listCategories()]);
      const category =
        categories.find((c) => c.id === full.item.primary_category_id) ?? null;
      return { kind: "product" as const, full, allItems, category };
    }
    const category = await getCategoryBySlug(slug);
    if (category) {
      const items = await listItemsByCategory(category.id);
      return { kind: "category" as const, category, items };
    }
    throw notFound();
  },

  head: ({ loaderData }) => {
    if (!loaderData) return {};

    if (loaderData.kind === "category") {
      const { category } = loaderData;
      const seo = CATEGORY_SEO[category.slug];
      const title = seo?.title ?? `${category.name_en} — Handmade in Bali | ZAAV G`;
      const description =
        seo?.description ??
        `Shop ${category.name_en.toLowerCase()} handcrafted in Bali from 925 sterling silver. By ZAAV G, shipped worldwide.`;
      const url = `${SITE}/collections/${category.slug}`;
      return {
        meta: [
          { title },
          { name: "description", content: description },
          { property: "og:title", content: title },
          { property: "og:description", content: description },
          { property: "og:url", content: url },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
        ],
        links: [{ rel: "canonical", href: url }],
      };
    }

    const { item, images } = loaderData.full;
    const catName = loaderData.category?.name_en ?? "Jewelry";
    const url = `${SITE}/collections/${item.slug}`;
    const material = item.material ?? "925 sterling silver";
    const gallery = [item.main_image_url, ...(images ?? []).map((i) => i.url)].filter(
      (u): u is string => !!u,
    );
    const sizes = loaderData.full.sizes ?? [];
    const inStock = sizes.length === 0 ? true : sizes.some((s) => Number(s.stock) > 0);

    const lead = `${item.title} — ${catName.toLowerCase()} in ${material}, handcrafted in Bali by ZAAV G.`;
    const body = item.description ? plainText(item.description) : "";
    const fullDesc = `${lead} ${body}`.trim();
    const description =
      fullDesc.length > 158 ? fullDesc.slice(0, 155).replace(/\s+\S*$/, "") + "…" : fullDesc;

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: item.title,
      image: gallery,
      description,
      sku: item.id,
      brand: { "@type": "Brand", name: "ZAAV G" },
      offers: {
        "@type": "Offer",
        url,
        priceCurrency: "IDR",
        price: item.price,
        availability: inStock
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: { "@type": "Organization", name: "ZAAV G" },
        hasMerchantReturnPolicy: {
          "@type": "MerchantReturnPolicy",
          applicableCountry: "ID",
          returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
          merchantReturnDays: 14,
          returnMethod: "https://schema.org/ReturnByMail",
          returnFees: "https://schema.org/ReturnShippingFees",
        },
      },
    };

    const breadcrumbs = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Collections", item: `${SITE}/collections` },
        ...(loaderData.category
          ? [
              {
                "@type": "ListItem",
                position: 3,
                name: catName,
                item: `${SITE}/collections/${loaderData.category.slug}`,
              },
            ]
          : []),
        {
          "@type": "ListItem",
          position: loaderData.category ? 4 : 3,
          name: item.title,
          item: url,
        },
      ],
    };

    return {
      meta: [
        { title: `${item.title} — ${catName} | ZAAV G` },
        { name: "description", content: description },
        { property: "og:title", content: `${item.title} | ZAAV G` },
        { property: "og:description", content: description },
        { property: "og:image", content: item.main_image_url },
        { property: "og:url", content: url },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(jsonLd) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbs) },
      ],
    };
  },

  component: RouteComponent,
  notFoundComponent: () => (
    <div className="bg-white text-black">
      <PublicShell variant="light">
        <div className="py-24 text-center text-black/60">Not found</div>
      </PublicShell>
    </div>
  ),
});

function RouteComponent() {
  const data = Route.useLoaderData();
  if (data.kind === "category") {
    return <CategoryPage category={data.category} items={data.items} />;
  }
  return <ItemPage />;
}

function CategoryPage({ category, items }: { category: Category; items: Item[] }) {
  const seo = CATEGORY_SEO[category.slug];
  const h1 = seo?.h1 ?? category.name_en;
  const intro = seo?.intro ?? "";
  return (
    <div className="bg-white text-black">
      <PublicShell variant="light">
        <section className="pt-36 pb-6 text-center md:pt-32">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{h1}</h1>
          {intro && (
            <p className="mx-auto mt-4 max-w-2xl px-4 text-sm leading-relaxed text-black/70">
              {intro}
            </p>
          )}
        </section>
        {items.length === 0 ? (
          <div className="py-24 text-center text-black/50">
            No items found in this category.
          </div>
        ) : (
          <div className="grid mx-6 md:mx-8 pt-4 pb-16 grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
            {items.map((it) => (
              <Link
                to="/collections/$slug"
                params={{ slug: it.slug }}
                key={it.id}
                className="group flex flex-col items-start"
              >
                <div className="relative w-full aspect-[3/4] mb-3 overflow-hidden bg-neutral-100">
                  {it.main_image_url && (
                    <img
                      src={it.main_image_url}
                      alt={`${it.title} — ${it.material ?? "925 sterling silver"}, handmade in Bali`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  )}
                </div>
                <h2 className="text-sm font-medium text-neutral-900 truncate w-full">
                  {it.title}
                </h2>
                <p className="text-sm text-neutral-500 mt-0.5 tabular-nums">
                  Rp {Number(it.price).toLocaleString("id-ID")}
                </p>
              </Link>
            ))}
          </div>
        )}
      </PublicShell>
    </div>
  );
}

function ItemPage() {
  const data = Route.useLoaderData();
  if (data.kind !== "product") return null;
  const { full, allItems } = data;
  const { category } = Route.useSearch();

  const { lang } = useI18n();
  const dict = T[lang as Lang] || T.en;

  const { addItem } = useCart();

  const [heroIdx, setHeroIdx] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [buyUnavailableOpen, setBuyUnavailableOpen] = useState(false);

  const { item, images, recommendedIds, sizes } = full;

  const gallery = [
    item.main_image_url,
    ...(images || []).map((i) => i.url),
  ].filter((u): u is string => !!u);

  const recs = (allItems ?? []).filter((i) =>
    (recommendedIds || []).includes(i.id),
  );

  const prev = () => setHeroIdx((i) => (i - 1 + gallery.length) % gallery.length);
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
  const hasSizeOptions = stockRows.length > 0;
  const hasStock =
    stockRows.some((s) => Number(s.stock) > 0) ||
    (stockOnly ? Number(stockOnly.stock) > 0 : false);

  const handleBuyNow = () => {
    if (!hasStock) return;
    handleAddToCart();
  };

  const decreaseQty = () => setQuantity((q) => Math.max(1, q - 1));
  const increaseQty = () => setQuantity((q) => q + 1);

  const handleAddToCart = () => {
    if (!hasStock) {
      setBuyUnavailableOpen(true);
      return;
    }

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
        <div className="relative grid gap-8 pt-[calc(7rem+env(safe-area-inset-top))] px-4 md:px-8 lg:px-12 pb-12 md:grid-cols-[minmax(0,1fr)_340px] lg:grid-cols-[minmax(0,1.2fr)_420px] lg:gap-16 items-start w-full max-w-full">
          <Link
            to="/collections"
            search={{ category }}
            aria-label={dict.back}
            className="absolute left-4 top-[calc(5.65rem+env(safe-area-inset-top))] z-20 flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-full border border-black/10 bg-white/65 text-black/75 shadow-sm backdrop-blur-md transition-all duration-200 hover:bg-black/5 hover:text-black active:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 md:left-8 md:top-[calc(6rem+env(safe-area-inset-top))] md:border-transparent md:bg-transparent md:shadow-none md:backdrop-blur-none"
          >
            <ArrowLeft aria-hidden="true" className="h-6 w-6 shrink-0" strokeWidth={1.5} />
          </Link>

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
                          alt={`${item.title} — ${item.material ?? "925 sterling silver"}, handmade in Bali`}
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
                    <ChevronLeft strokeWidth={1} className="h-8 w-8 md:h-12 md:w-12" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="next"
                    className="absolute inset-y-0 right-0 flex w-10 items-center justify-center text-black transition hover:opacity-50 md:w-16 z-10 cursor-pointer"
                  >
                    <ChevronRight strokeWidth={1} className="h-8 w-8 md:h-12 md:w-12" />
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
                      <img src={u} alt="" className="h-full w-full object-cover" />
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
                Rp {Number(item.price).toLocaleString("id-ID")}
              </div>
            </div>

            <div className="h-px w-full bg-black/10" />

            {/* Size Selector */}
            {stockRows.length > 1 && (
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
                      buttonClass += "border-black bg-black text-white cursor-pointer";
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
                  <div className="w-8 text-center text-sm font-medium">{quantity}</div>
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
                onClick={handleBuyNow}
                disabled={!hasStock}
                className={`w-full rounded-xl px-6 py-3 text-sm font-medium transition ${
                  hasStock
                    ? "bg-black text-white hover:bg-black/80 cursor-pointer"
                    : "bg-neutral-300 text-neutral-500 cursor-not-allowed"
                }`}
              >
                {hasStock ? dict.buy : dict.buyOutOfStock}
              </button>
            </div>

            <div>
              {/* Metadata */}
              <div className="pt-2 text-md font-bold">
                {item.material && (
                  <div>
                    <span>{dict.material}:</span> {item.material}
                  </div>
                )}
              </div>

              {/* Description */}
              {item.description && (
                <div
                  className="prose prose-sm max-w-none text-black/80 break-words"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              )}
            </div>
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
                        alt={`${r.title} — handmade silver jewelry from Bali`}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    )}
                  </div>
                  <div className="pt-3">
                    <div className="text-sm font-medium truncate">{r.title}</div>
                    <div className="mt-0.5 text-sm text-black/70 tabular-nums">
                      Rp {Number(r.price).toLocaleString("id-ID")}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* BUY UNAVAILABLE MODAL */}
        <div
          className={`zav-contact-modal__overlay  ${buyUnavailableOpen ? " active" : ""}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) setBuyUnavailableOpen(false);
          }}
        >
          <div className="zav-contact-modal " role="dialog" aria-modal="true">
            <button
              className="zav-contact-modal__close"
              aria-label="Close"
              onClick={() => setBuyUnavailableOpen(false)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <h2 className="zav-contact-modal__title">{dict.unavailableTitle}</h2>
            <p className="px-2 text-center text-sm leading-relaxed text-black/60">
              {dict.unavailableMessage}
            </p>

            <div className="zav-contact-modal__grid  ">
              <a
                href="https://instagram.com/zaav_g_bali"
                className="zav-contact-modal__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="zav-contact-modal__icon zav-contact-modal__icon--instagram">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth={2} />
                    <circle cx="12" cy="12" r="4" stroke="white" strokeWidth={2} fill="none" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
                  </svg>
                </div>
                <span className="zav-contact-modal__label">Instagram</span>
              </a>

              <a href="mailto:zaavg.bali@gmail.com" className="zav-contact-modal__link">
                <div className="zav-contact-modal__icon zav-contact-modal__icon--gmail">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6Z"
                      fill="#EA4335"
                      stroke="none"
                    />
                    <path d="M22 6L12 13L2 6" stroke="#ffffff" strokeWidth={1.8} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 18L15 12" stroke="#ffffff" strokeWidth={1.8} fill="none" strokeLinecap="round" />
                    <path d="M2 18L9 12" stroke="#ffffff" strokeWidth={1.8} fill="none" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="zav-contact-modal__label">Email</span>
              </a>

              <a
                href="https://wa.me/6281139888882"
                className="zav-contact-modal__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="zav-contact-modal__icon zav-contact-modal__icon--whatsapp">
                  <svg viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <span className="zav-contact-modal__label">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </PublicShell>
    </div>
  );
}