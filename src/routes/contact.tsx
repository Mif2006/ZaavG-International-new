import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PublicShell } from "@/components/public-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — ZAAV G" },
      {
        name: "description",
        content: "Get in touch with ZAAV G. Find our store address, opening hours, phone number, and company details.",
      },
      { property: "og:title", content: "Contact Us — ZAAV G" },
      { property: "og:description", content: "Get in touch with ZAAV G. Find our store address, opening hours, phone number, and company details." },
    ],
  }),
  component: ContactPage,
});

type Lang = "en" | "ru" | "id";

const T: Record<
  Lang,
  {
    contactTitle: string;
    contactInfoTitle: string;
    storeAddressTitle: string;
    storeAddress: string;
    storeHours: string;
    companyDetailsTitle: string;
    tradenameLabel: string;
    tradenameValue: string;
    legalEntity: string;
    contactBtnCatalog: string;
    contactBtnHome: string;
    supportBadge: string;
  }
> = {
  en: {
    contactTitle: "Contact Us",
    contactInfoTitle: "Contact",
    storeAddressTitle: "Our Store Address",
    storeAddress: "Jl. Raya Singapadu, Singapadu, Kec. Sukawati, Kabupaten Gianyar",
    storeHours: "Daily from 09:00 AM to 17:00 PM",
    companyDetailsTitle: "Company Details",
    tradenameLabel: "Trademark:",
    tradenameValue: "Zaav G",
    legalEntity: "Win Win Silver",
    contactBtnCatalog: "View Collections",
    contactBtnHome: "Home",
    supportBadge: "ZAAV G Support",
  },
  ru: {
    contactTitle: "Контакты",
    contactInfoTitle: "Контакты",
    storeAddressTitle: "Адрес нашего магазина",
    storeAddress: "Jl. Raya Singapadu, Singapadu, Kec. Sukawati, Kabupaten Gianyar",
    storeHours: "ежедневно с 09.00 до 17.00",
    companyDetailsTitle: "Реквизиты",
    tradenameLabel: "Торговый знак:",
    tradenameValue: "Zaav G",
    legalEntity: "Win Win Silver",
    contactBtnCatalog: "Смотреть коллекции",
    contactBtnHome: "На главную",
    supportBadge: "Поддержка ZAAV G",
  },
  id: {
    contactTitle: "Hubungi Kami",
    contactInfoTitle: "Kontak",
    storeAddressTitle: "Alamat Toko Kami",
    storeAddress: "Jl. Raya Singapadu, Singapadu, Kec. Sukawati, Kabupaten Gianyar",
    storeHours: "Setiap hari pukul 09.00 - 17.00",
    companyDetailsTitle: "Detail Perusahaan",
    tradenameLabel: "Nama Dagang:",
    tradenameValue: "Zaav G",
    legalEntity: "Win Win Silver",
    contactBtnCatalog: "Lihat Katalog",
    contactBtnHome: "Beranda",
    supportBadge: "Dukungan ZAAV G",
  },
};

function ContactPage() {
  const { lang } = useI18n();
  const t = T[lang as Lang] || T.en;

  return (
    <PublicShell>
      <div className="relative font-sans text-neutral-900 antialiased bg-[#faf8f5] min-h-screen selection:bg-neutral-900 selection:text-white">
        <div className="pt-32 sm:pt-36 md:pt-40 pb-24 px-6 max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-neutral-500 font-medium backdrop-blur-md bg-neutral-200/50 px-4 py-1.5 rounded-full border border-neutral-300/40">
              {t.supportBadge}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.12em] uppercase text-neutral-900">
              {t.contactTitle}
            </h1>
      
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-neutral-900 fill-none stroke-[1.5] stroke-linecap-round stroke-linejoin-round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">{t.contactInfoTitle}</h2>
              <p className="text-neutral-600 mb-2">
                <a href="tel:+6281139888882" className="hover:text-neutral-900 transition-colors">
                  +62 (811) 39-888-882
                </a>
              </p>
              <p className="text-neutral-600">
                <a href="mailto:zaavg.bali@gmail.com" className="hover:text-neutral-900 transition-colors">
                  zaavg.bali@gmail.com
                </a>
              </p>
            </div>

            {/* Store Address */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-neutral-900 fill-none stroke-[1.5] stroke-linecap-round stroke-linejoin-round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">{t.storeAddressTitle}</h2>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                <a
                  href="https://www.google.com/maps/place/Zaav+G+jewelry/@-8.5920999,115.2648896,18.87z/data=!4m6!3m5!1s0x2dd23f9ab07189a5:0x2729aeb27f922727!8m2!3d-8.592194!4d115.2656306!16s%2Fg%2F11nhk1nb4x?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-900 transition-colors underline decoration-neutral-300 underline-offset-4"
                >
                  {t.storeAddress}
                </a>
              </p>
              <p className="text-neutral-500 text-sm font-medium">{t.storeHours}</p>
            </div>

            {/* Company Details */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-neutral-900 fill-none stroke-[1.5] stroke-linecap-round stroke-linejoin-round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">{t.companyDetailsTitle}</h2>
              <p className="text-neutral-600 mb-2">
                <span className="font-medium text-neutral-900">{t.tradenameLabel}</span> {t.tradenameValue}
              </p>
              <p className="text-neutral-600 font-medium">
                {t.legalEntity}
              </p>
            </div>
          </div>

          {/* Action Buttons Block */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 pt-10">
            <Link
              to="/collections"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-sans text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 min-w-[220px] bg-[#1a1a1a] text-white border border-white/20 shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:bg-[#0f0f0f] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,0,0,0.4)]"
            >
              {t.contactBtnCatalog}
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-sans text-base font-medium rounded-lg no-underline cursor-pointer transition-all duration-350 min-w-[220px] bg-transparent text-[#1a1a1a] border-[1.5px] border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white hover:-translate-y-0.5"
            >
              {t.contactBtnHome}
            </Link>
          </div>
        </div>
      </div>
    </PublicShell>
  );
}