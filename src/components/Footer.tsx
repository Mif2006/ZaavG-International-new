import { useI18n } from "@/lib/i18n";
import "./sections.css";

type Lang = "en" | "ru" | "id";

const T: Record<Lang, { home: string; catalog: string; size: string; terms: string; refund: string; privacy: string }> = {
  en: {
    home: "Home",
    catalog: "Collections",
    size: "Size Guide",
    terms: "Terms & Conditions",
    refund: "Refund Policy",
    privacy: "Privacy Policy",
  },
  ru: {
    home: "Главная",
    catalog: "Коллекции",
    size: "Узнать размер",
    terms: "Условия использования",
    refund: "Политика возврата",
    privacy: "Политика конфиденциальности",
  },
  id: {
    home: "Beranda",
    catalog: "Katalog",
    size: "Panduan Ukuran",
    terms: "Syarat & Ketentuan",
    refund: "Kebijakan Pengembalian",
    privacy: "Kebijakan Privasi",
  },
};

export function Footer() {
  const { lang } = useI18n();
  const t = T[lang as Lang] || T.en;
  
  const links: { href: string; label: string }[] = [
    { href: "/", label: t.home },
    { href: "/collections", label: t.catalog },
    { href: "/size", label: t.size },
    { href: "/terms-of-service", label: t.terms },
    { href: "/refund-policy", label: t.refund },
    { href: "/privacy-policy", label: t.privacy },
  ];
  
  return (
    <footer className="zav-footer w-screen">
      <div className="zav-footer__container">
        <nav className="zav-footer__nav">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="zav-footer__link">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="zav-footer__logo">
          <a href="/" className="zav-footer__logo-text">
            ZAAV G
          </a>
        </div>
        <p className="zav-footer__copyright">© Win Win Silver | All Rights Reserved.</p>
      </div>
    </footer>
  );
}