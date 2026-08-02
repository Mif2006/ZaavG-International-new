import { useState, useRef, useEffect, useMemo } from "react";
import { useCart, CartItem } from "@/lib/cart-store";

const COUNTRIES = [
  { name: "Indonesia", code: "+62", flag: "🇮🇩" },
  { name: "Russia", code: "+7", flag: "🇷🇺" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "Singapore", code: "+65", flag: "🇸🇬" },
  { name: "Malaysia", code: "+60", flag: "🇲🇾" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "Japan", code: "+81", flag: "🇯🇵" },
  { name: "South Korea", code: "+82", flag: "🇰🇷" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
].sort((a, b) => a.name.localeCompare(b.name));

const CART_T = {
  en: {
    title: "Your Order",
    empty: "Your cart is empty.",
    checkout: "Delivery Information",
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    method: "Delivery Method",
    pickup: "Self Pickup (Bali Store)",
    delivery: "International / Indonesia Delivery",
    address: "Full Delivery Address (Bali / Indonesia)",
    placeOrder: "Pay",
    total: "Subtotal",
    continue: "Continue Shopping",
    privacyTextBefore: "By clicking the \"Pay\" button you consent to the ",
    privacyLink: "Privacy Policy",
    pickupLocationTitle: "Pickup location:",
    pickupAddress: "Jl. Raya Singapadu, Singapadu, Gianyar, Bali, Indonesia",
    mapLinkText: "View on Google Maps",
    mapUrl: "https://www.google.com/maps/place/Zaav+G+jewelry/@-8.5921887,115.2630557,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd23f9ab07189a5:0x2729aeb27f922727!8m2!3d-8.592194!4d115.2656306!16s%2Fg%2F11nhk1nb4x?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D",
    undoText: "You removed",
    undoAction: "Undo",
  },
  ru: {
    title: "Ваш Заказ",
    empty: "Ваша корзина пуста.",
    checkout: "Информация для доставки",
    name: "Ваше Имя",
    email: "Email",
    phone: "Номер телефона",
    method: "Способ доставки",
    pickup: "Самовывоз (Магазин на Бали)",
    delivery: "Доставка по Индонезии / Другим странам",
    address: "Полный адрес доставки",
    placeOrder: "Оплатить",
    total: "Итого",
    continue: "Продолжить покупки",
    privacyTextBefore: "Нажимая на кнопку \"Оплатить\" Вы соглашаетесь с ",
    privacyLink: "Политикой конфиденциальности",
    pickupLocationTitle: "Адрес самовывоза:",
    pickupAddress: "Jl. Raya Singapadu, Singapadu, Gianyar, Bali, Indonesia",
    mapLinkText: "Открыть на Google Картах",
    mapUrl: "https://www.google.com/maps/place/Zaav+G+jewelry/@-8.5921887,115.2630557,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd23f9ab07189a5:0x2729aeb27f922727!8m2!3d-8.592194!4d115.2656306!16s%2Fg%2F11nhk1nb4x?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D",
    undoText: "Вы удалили",
    undoAction: "Отменить",
  },
  id: {
    title: "Pesanan Anda",
    empty: "Keranjang Anda kosong.",
    checkout: "Informasi Pengiriman",
    name: "Nama Lengkap",
    email: "Alamat Email",
    phone: "Nomor Telepon",
    method: "Metode Pengiriman",
    pickup: "Ambil Sendiri (Toko Bali)",
    delivery: "Pengiriman (Bali / Indonesia)",
    address: "Alamat Pengiriman Lengkap",
    placeOrder: "Bayar",
    total: "Subtotal",
    continue: "Lanjut Belanja",
    privacyTextBefore: "Dengan mengklik tombol \"Bayar\" Anda menyetujui ",
    privacyLink: "Kebijakan Privasi",
    pickupLocationTitle: "Lokasi Pengambilan:",
    pickupAddress: "Jl. Raya Singapadu, Singapadu, Gianyar, Bali, Indonesia",
    mapLinkText: "Lihat di Google Maps",
    mapUrl: "https://www.google.com/maps/place/Zaav+G+jewelry/@-8.5921887,115.2630557,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd23f9ab07189a5:0x2729aeb27f922727!8m2!3d-8.592194!4d115.2656306!16s%2Fg%2F11nhk1nb4x?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D",
    undoText: "Anda menghapus",
    undoAction: "Batal",
  },
};

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: string;
}

export function CartModal({ isOpen, onClose, lang }: CartModalProps) {
  const t = CART_T[lang as keyof typeof CART_T] || CART_T.en;
  const locale = lang === "ru" ? "ru-RU" : lang === "id" ? "id-ID" : "en-US";

  const { items, total, removeItem, updateQuantity } = useCart();

  const [method, setMethod] = useState<"pickup" | "delivery">("pickup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [address, setAddress] = useState("");

  // 5-second delayed deletion with smooth, immediate progress tracking
  const [pendingDeletions, setPendingDeletions] = useState<
    Record<
      string,
      {
        timer: NodeJS.Timeout;
        progressInterval: NodeJS.Timeout;
        timeLeft: number;
        progress: number;
        item: CartItem;
      }
    >
  >({});

  const handleDeleteClick = (item: CartItem) => {
    const duration = 5000;
    const startTime = Date.now();

    const timer = setTimeout(() => {
      removeItem(item.id);
      setPendingDeletions((prev) => {
        const copy = { ...prev };
        delete copy[item.id];
        return copy;
      });
    }, duration);

    // High-frequency interval (every 50ms) ensures the circle animation starts moving immediately with zero delay
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(1, elapsed / duration);
      const timeLeft = Math.max(1, Math.ceil((duration - elapsed) / 1000));

      setPendingDeletions((prev) => {
        if (!prev[item.id]) return prev;
        return {
          ...prev,
          [item.id]: { ...prev[item.id], progress, timeLeft },
        };
      });
    }, 50);

    setPendingDeletions((prev) => ({
      ...prev,
      [item.id]: { timer, progressInterval, timeLeft: 5, progress: 0, item },
    }));
  };

  const handleUndo = (id: string) => {
    const pending = pendingDeletions[id];
    if (pending) {
      clearTimeout(pending.timer);
      clearInterval(pending.progressInterval);
      setPendingDeletions((prev) => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
    }
  };

  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const filteredCountries = useMemo(() => {
    if (!searchQuery) return COUNTRIES;
    return COUNTRIES.filter((c) => c.name.toLowerCase().startsWith(searchQuery.toLowerCase()));
  }, [searchQuery]);

  useEffect(() => {
    if (!isCountryOpen) {
      setSearchQuery("");
      return;
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.length === 1 && /[a-zA-Z]/.test(e.key)) {
        if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
        const newQuery = searchQuery + e.key;
        setSearchQuery(newQuery);
        searchTimeoutRef.current = setTimeout(() => setSearchQuery(""), 1000);

        const match = COUNTRIES.find((c) => c.name.toLowerCase().startsWith(newQuery.toLowerCase()));
        if (match) {
          const el = document.getElementById(`country-option-${match.code}`);
          el?.scrollIntoView({ block: "nearest" });
        }
      } else if (e.key === "Backspace") {
        setSearchQuery((prev) => prev.slice(0, -1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCountryOpen, searchQuery]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsCountryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Order placed successfully for ${name}! Phone: ${selectedCountry.code} ${phoneNumber}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    // z-[1000] ensures priority over navbar sticky header (z-50)
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Centered Spacious Modal Box (Scrollable including pay button) */}
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white text-black shadow-2xl flex flex-col z-10 overflow-y-auto overflow-x-hidden animate-scale-up">
        {/* Header */}
        <div className="sticky top-0 bg-white z-20 flex items-center justify-between px-8 py-6 border-b border-black/10 shrink-0">
          <h2 className="text-xl font-bold tracking-wider uppercase">{t.title}</h2>
          <button
            onClick={onClose}
            className="cursor-pointer text-black/40 hover:text-black transition-colors p-1"
            aria-label="Close modal"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="1.5" fill="none">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body Content with generous spacing */}
        <div className="px-8 py-8 space-y-10">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4 text-black/50">
              <p className="text-base">{t.empty}</p>
              <button
                onClick={onClose}
                className="cursor-pointer underline uppercase tracking-widest text-xs hover:text-black transition-colors"
              >
                {t.continue}
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items List with instant smooth circular timer animation */}
              <div className="space-y-6">
                {items.map((item) => {
                  const isPending = !!pendingDeletions[item.id];
                  if (isPending) {
                    const pending = pendingDeletions[item.id];
                    const circumference = 2 * Math.PI * 10; // r=10
                    const strokeDashoffset = circumference * pending.progress;

                    return (
                      <div
                        key={item.id}
                        className="t706__product-deleted__timer py-4 border-b border-t border-black/10 flex items-center justify-between text-sm text-[#7b7b7b] animate-fade-in"
                      >
                        <div className="flex items-center gap-3">
                          <div className="t706__product-deleted__timer__counter relative w-6 h-6 flex items-center justify-center text-[#ff5722] font-light text-xs shrink-0">
                            <svg
                              className="t706__product-deleted__timer__counter__circle absolute inset-0 w-full h-full pointer-events-none"
                              style={{
                                transform: "rotate(90deg) scaleX(-1)",
                              }}
                              viewBox="0 0 24 24"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="10"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                className="text-[#ffccbc] opacity-50"
                              />
                              <circle
                                cx="12"
                                cy="12"
                                r="10"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                              />
                            </svg>
                            <span className="relative z-10 tabular-nums">{pending.timeLeft}</span>
                          </div>
                          <span>
                            {t.undoText} &ldquo;{item.title}&rdquo;
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleUndo(item.id)}
                          className="cursor-pointer hover:text-black transition-colors"
                        >
                          {t.undoAction}
                        </button>
                      </div>
                    );
                  }

                  return (
                    <div key={item.id} className="flex gap-6 relative pb-6 border-b border-black/10 items-center">
                      <div className="h-24 w-24 bg-neutral-100 shrink-0 flex items-center justify-center overflow-hidden">
                        {item.image ? (
                          <img src={item.image} alt={item.title} className="object-cover h-full w-full" />
                        ) : (
                          <span className="text-xs text-black/40">No photo</span>
                        )}
                      </div>
                      <div className="flex flex-col justify-center flex-1 pr-8">
                        <span className="text-base font-semibold">{item.title}</span>
                        {item.size && (
                          <span className="text-xs text-black/60 uppercase tracking-wider mt-1">
                            Size: {item.size}
                          </span>
                        )}
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-black/20 rounded-md">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="px-3 py-1 text-sm text-black/60 hover:text-black cursor-pointer"
                            >
                              −
                            </button>
                            <span className="px-3 text-sm font-medium">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 text-sm text-black/60 hover:text-black cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                          <span className="text-base tabular-nums font-bold">
                            {(item.price * item.quantity).toLocaleString(locale)} $
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteClick(item)}
                        className="absolute top-0 right-0 text-black/30 hover:text-red-600 text-lg cursor-pointer p-1"
                        title="Remove item"
                      >
                        ✕
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Subtotal */}
              <div className="flex justify-between items-center pt-2">
                <span className="text-base font-bold uppercase tracking-wider">{t.total}</span>
                <span className="text-2xl font-semibold tabular-nums">{total.toLocaleString(locale)} $</span>
              </div>

              {/* Checkout Form */}
              <form id="checkout-modal-form" onSubmit={handleSubmit} className="space-y-8 pt-6 border-t border-black/10">
                <h3 className="text-xs font-bold tracking-widest uppercase text-black/60">{t.checkout}</h3>

                <div className="space-y-6">
                  <div>
                    <input
                      required
                      type="text"
                      placeholder={t.name}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border-b border-black/20 pb-3 text-sm focus:border-black focus:outline-none transition-colors bg-transparent placeholder:text-black/40"
                    />
                  </div>
                  <div>
                    <input
                      required
                      type="email"
                      placeholder={t.email}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border-b border-black/20 pb-3 text-sm focus:border-black focus:outline-none transition-colors bg-transparent placeholder:text-black/40"
                    />
                  </div>

                  {/* Phone Number Input with Searchable Country Code Dropdown */}
                  <div className="relative" ref={dropdownRef}>
                    <div className="flex items-center border-b border-black/20 pb-3 text-sm focus-within:border-black transition-colors">
                      <button
                        type="button"
                        onClick={() => setIsCountryOpen(!isCountryOpen)}
                        className="flex items-center gap-2 pr-3 border-r border-black/10 shrink-0 text-black/80 hover:text-black cursor-pointer"
                      >
                        <span className="text-lg">{selectedCountry.flag}</span>
                        <span className="font-medium">{selectedCountry.code}</span>
                        <span className="text-xs text-black/40">▼</span>
                      </button>
                      <input
                        required
                        type="tel"
                        placeholder="(000) 000-00-00"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full pl-3 focus:outline-none bg-transparent placeholder:text-black/40"
                      />
                    </div>

                    {/* Country Selector Dropdown */}
                    {isCountryOpen && (
                      <div className="absolute left-0 top-full mt-1 w-72 max-h-60 overflow-y-auto bg-white border border-black/15 shadow-xl z-30 rounded-md">
                        {filteredCountries.map((c) => (
                          <div
                            key={c.code + c.name}
                            id={`country-option-${c.code}`}
                            onClick={() => {
                              setSelectedCountry(c);
                              setIsCountryOpen(false);
                            }}
                            className={`flex items-center justify-between px-3 py-2.5 text-xs cursor-pointer hover:bg-neutral-100 transition-colors ${
                              selectedCountry.code === c.code ? "bg-neutral-100 font-semibold" : ""
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <span>{c.flag}</span>
                              <span>{c.name}</span>
                            </span>
                            <span className="text-black/50">{c.code}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Delivery Method Toggle */}
                  <div className="space-y-3 pt-2">
                    <label className="text-xs font-semibold text-black/60 uppercase tracking-widest block">{t.method}</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setMethod("pickup")}
                        className={`cursor-pointer py-3.5 px-4 text-xs font-semibold tracking-wider uppercase border transition-all text-center ${
                          method === "pickup"
                            ? "border-2 border-black bg-neutral-100 text-black shadow-xs"
                            : "border-black/20 hover:border-black text-black/70 bg-white"
                        }`}
                      >
                        {t.pickup}
                      </button>
                      <button
                        type="button"
                        onClick={() => setMethod("delivery")}
                        className={`cursor-pointer py-3.5 px-4 text-xs font-semibold tracking-wider uppercase border transition-all text-center ${
                          method === "delivery"
                            ? "border-2 border-black bg-neutral-100 text-black shadow-xs"
                            : "border-black/20 hover:border-black text-black/70 bg-white"
                        }`}
                      >
                        {t.delivery}
                      </button>
                    </div>
                  </div>

                  {/* Conditional Method Info */}
                  {method === "pickup" ? (
                    <div className="p-5 bg-neutral-50 border border-black/10 text-xs text-black/70 space-y-2 leading-relaxed">
                      <p className="font-semibold text-black uppercase tracking-wider">{t.pickupLocationTitle}</p>
                      <p>{t.pickupAddress}</p>
                      <p className="pt-1">
                        <a
                          href={t.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline font-medium hover:text-black transition-colors"
                          style={{ color: "#45cbad" }}
                        >
                          {t.mapLinkText} →
                        </a>
                      </p>
                    </div>
                  ) : (
                    <div className="animate-fade-in">
                      <textarea
                        required={method === "delivery"}
                        rows={3}
                        placeholder={t.address}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full border-b border-black/20 py-3 text-sm focus:border-black focus:outline-none transition-colors bg-transparent placeholder:text-black/40 resize-none"
                      />
                    </div>
                  )}
                </div>

                {/* Pay Button & Privacy Policy */}
                <div className="pt-6 pb-4 space-y-5 border-t border-black/10">
                  <button
                    type="submit"
                    className="w-full text-white py-4 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-90 cursor-pointer shadow-md rounded-none flex items-center justify-center"
                    style={{ backgroundColor: "#45cbad" }}
                  >
                    {t.placeOrder}
                  </button>

                  <div className="text-xs text-center text-black/50 leading-relaxed px-2">
                    {t.privacyTextBefore}
                    <a href="/pages/privacy" className="underline hover:text-black transition-colors" style={{ color: "#45cbad" }}>
                      {t.privacyLink}
                    </a>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}