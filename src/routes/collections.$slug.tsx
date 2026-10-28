import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getItemBySlug, listItems } from "@/lib/db";
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
    size: "Ring size",
    cart: "Add to cart",
    buy: "Buy it now",
    recs: "You may also like",
    material: "Material",
    back: "Back to collections",
    unavailableTitle: "Unable to purchase",
    unavailableMessage: "This item cannot be purchased right now because no size has been selected or it is currently out of stock. Please contact us and we will be happy to help.",

    locale: "en-US",
  },
  ru: {
    loading: "Загрузка...",
    size: "Размер",
    cart: "В корзину",
    buy: "Купить сейчас",
    recs: "Вам также может понравиться",
    material: "Материал",
    back: "Вернуться к коллекциям",
    unavailableTitle: "Невозможно оформить покупку",
    unavailableMessage: "Этот товар сейчас нельзя приобрести: размер не выбран или товар закончился. Свяжитесь с нами, и мы с радостью поможем.",

    locale: "ru-RU",
  },
  id: {
    loading: "Memuat...",
    size: "Ukuran",
    cart: "Tambah ke keranjang",
    buy: "Beli sekarang",
    recs: "Anda mungkin juga menyukai",
    material: "Bahan",
    back: "Kembali ke koleksi",
    unavailableTitle: "Tidak dapat melakukan pembelian",
    unavailableMessage: "Produk ini belum dapat dibeli karena ukuran belum dipilih atau stok sedang habis. Silakan hubungi kami dan kami akan dengan senang hati membantu.",

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
  const [buyUnavailableOpen, setBuyUnavailableOpen] = useState(false);

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
  const hasSizeOptions = stockRows.length > 0;
  const hasStock =
    stockRows.some((s) => Number(s.stock) > 0) ||
    (stockOnly ? Number(stockOnly.stock) > 0 : false);

  const handleBuyNow = () => {
    if (!hasStock || (hasSizeOptions && selectedSize === null)) {
      setBuyUnavailableOpen(true);
      return;
    }

    handleAddToCart();
  };

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
        <div className="relative grid gap-8 pt-[calc(7rem+env(safe-area-inset-top))] px-4 md:px-8 lg:px-12 pb-12 md:grid-cols-[minmax(0,1fr)_340px] lg:grid-cols-[minmax(0,1.2fr)_420px] lg:gap-16 items-start w-full max-w-full">
          
          <Link
            to="/collections"
            aria-label={dict.back}
            className="absolute left-4 top-[calc(6rem+env(safe-area-inset-top))] z-20 flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-full text-black transition-colors hover:bg-black/5 active:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 md:left-8"
          >
            <ArrowLeft
              aria-hidden="true"
              className="h-6 w-6 shrink-0"
              strokeWidth={1.5}
            />
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
               Rp {Number(item.price).toLocaleString("id-ID")} 
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
                onClick={handleBuyNow}
                className="w-full rounded-xl bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/80 cursor-pointer"
              >
                {dict.buy}
              </button>
            </div>
<div>
            {/* Metadata */}
            <div className="pt-2 text-md font-bold">
              {item.material && (
                <div>
                  <span >{dict.material}:</span>{" "}
                  {item.material}
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
                    <path
                      d="M22 6L12 13L2 6"
                      stroke="#ffffff"
                      strokeWidth={1.8}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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