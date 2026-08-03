import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { CartModal } from "./Cart";
import { useCart } from "@/lib/cart-store";
import "./site-chrome.css";

const INSTAGRAM_URL = "https://www.instagram.com/zaav_g_bali/";
const YOUTUBE_URL = "https://www.youtube.com/@zaav_g";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const CartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const NAV_ITEMS = [
  { to: "/", labels: { en: "Home", ru: "Главная", id: "Beranda" } },
  { to: "/collections", labels: { en: "Collections", ru: "Коллекции", id: "Koleksi" } },
  { to: "/size", labels: { en: "Size Guide", ru: "Таблица размеров", id: "Panduan Ukuran" } },
  { to: "/delivery", labels: { en: "Delivery & Shipping", ru: "Доставка", id: "Pengiriman" } },
  { to: "/paymentinfo", labels: { en: "Payment", ru: "Оплата", id: "Pembayaran" } },
  // { to: "/cooperation", labels: { en: "Cooperation", ru: "Сотрудничество", id: "Kerjasama" } },
  { to: "/contact", labels: { en: "Contact", ru: "Контакты", id: "Kontak" } },
  { to: "/videos", labels: { en: "Films", ru: "Фильмы", id: "Film" } },
];

const LANGS = ["en", "ru", "id"];

export function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { items, isCartOpen, setIsOpen } = useCart();
  const { lang, setLang } = useI18n();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Animation trigger state when cart items change quantity/length
  const [animateBadge, setAnimateBadge] = useState(false);
  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    if (totalCount === 0) return;
    setAnimateBadge(true);
    const timer = setTimeout(() => setAnimateBadge(false), 600);
    return () => clearTimeout(timer);
  }, [totalCount]);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen || isCartOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen, isCartOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSidebarOpen(false);
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [setIsOpen]);

  return (
    <>
      <nav className="zav-navbar sticky top-0">
        <div className="zav-navbar__left">
          <button
            className="zav-navbar__burger cursor-pointer"
            aria-label="Menu"
            onClick={() => setSidebarOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
          <Link to="/" className="zav-navbar__logo cursor-pointer">
            ZAAV G
          </Link>
        </div>
        <div className="zav-navbar__right">
          <div className="zav-navbar__lang-switcher">
            {LANGS.map((l) => (
              <button
                key={l}
                className={`zav-navbar__lang-btn cursor-pointer${lang === l ? " active" : ""}`}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="zav-navbar__socials">
            <a
              href={INSTAGRAM_URL}
              className="zav-navbar__social-link cursor-pointer"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href={YOUTUBE_URL}
              className="zav-navbar__social-link cursor-pointer"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeIcon />
            </a>
          </div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(true);
            }}
            className="zav-navbar__cart cursor-pointer relative"
            aria-label="Cart"
          >
            <CartIcon />
            <span
              className={`zav-navbar__cart-count transition-transform duration-300 ${
                animateBadge ? "scale-125 text-emerald-600 font-bold" : ""
              }`}
            >
              {totalCount}
            </span>
          </a>
        </div>
      </nav>

      {/* CART MODAL SEPARATE COMPONENT */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsOpen(false)} lang={lang} />

      {/* SIDEBAR */}
      <div
        className={`zav-sidebar__overlay${sidebarOpen ? " active" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />
      <nav className={`zav-sidebar${sidebarOpen ? " active" : ""}`}>
        <div className="zav-sidebar__header">
          <Link to="/" className="zav-sidebar__logo cursor-pointer" onClick={() => setSidebarOpen(false)}>
            ZAAV G
          </Link>
          <button
            className="zav-sidebar__close cursor-pointer"
            aria-label="Close"
            onClick={() => setSidebarOpen(false)}
          >
            <svg viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="zav-sidebar__lang-switcher">
          {LANGS.map((l) => (
            <button
              key={l}
              className={`zav-sidebar__lang-btn cursor-pointer${lang === l ? " active" : ""}`}
              onClick={() => setLang(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="zav-sidebar__nav">
  {NAV_ITEMS.map((item) => {
    const isActive = pathname === item.to;
    const label = item.labels[lang as keyof typeof item.labels] || item.labels.en;
    return (
      <Link
        key={item.to}
        to={item.to}
        className={`zav-sidebar__link cursor-pointer${isActive ? " active" : ""}`}
        onClick={() => setSidebarOpen(false)}
      >
        {label}
      </Link>
    );
  })}
</div>

        <div className="zav-sidebar__socials">
          <a
            href={INSTAGRAM_URL}
            className="zav-sidebar__social-link cursor-pointer"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            href={YOUTUBE_URL}
            className="zav-sidebar__social-link cursor-pointer"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeIcon />
          </a>
        </div>

        <div className="zav-sidebar__footer">
          <p className="zav-sidebar__copyright">© 2018 - 2026 Zaav G</p>
        </div>
      </nav>
    </>
  );
}