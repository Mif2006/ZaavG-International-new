import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PublicShell } from "@/components/public-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — ZAAV G" },
      {
        name: "description",
        content:
          "Get in touch with ZAAV G. Visit our store in Gianyar, Bali, call us, or send us an email.",
      },
      { property: "og:title", content: "Contact Us — ZAAV G" },
      {
        property: "og:description",
        content:
          "Get in touch with ZAAV G. Visit our store in Gianyar, Bali, call us, or send us an email.",
      },
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
  }
> = {
  ru: {
    contactTitle: "Контакты",
    contactInfoTitle: "Контакты",
    storeAddressTitle: "Адрес нашего магазина",
    storeAddress:
      "Jl. Raya Singapadu, Singapadu, Kec. Sukawati, Kabupaten Gianyar",
    storeHours: "ежедневно с 09.00 до 17.00",
    companyDetailsTitle: "Реквизиты",
    tradenameLabel: "Торговый знак:",
    tradenameValue: "Zaav G",
    legalEntity: "Win Win Silver",
    contactBtnCatalog: "Смотреть коллекции",
    contactBtnHome: "На главную",
  },
  en: {
    contactTitle: "Contact Us",
    contactInfoTitle: "Contact",
    storeAddressTitle: "Our Store Address",
    storeAddress:
      "Jl. Raya Singapadu, Singapadu, Kec. Sukawati, Kabupaten Gianyar",
    storeHours: "Daily from 09:00 AM to 17:00 PM",
    companyDetailsTitle: "Company Details",
    tradenameLabel: "Trademark:",
    tradenameValue: "Zaav G",
    legalEntity: "Win Win Silver",
    contactBtnCatalog: "View Collections",
    contactBtnHome: "Home",
  },
  id: {
    contactTitle: "Hubungi Kami",
    contactInfoTitle: "Kontak",
    storeAddressTitle: "Alamat Toko Kami",
    storeAddress:
      "Jl. Raya Singapadu, Singapadu, Kec. Sukawati, Kabupaten Gianyar",
    storeHours: "Setiap hari pukul 09.00 - 17.00",
    companyDetailsTitle: "Detail Perusahaan",
    tradenameLabel: "Nama Dagang:",
    tradenameValue: "Zaav G",
    legalEntity: "Win Win Silver",
    contactBtnCatalog: "Lihat Katalog",
    contactBtnHome: "Beranda",
  },
};

function ContactPage() {
  const { lang } = useI18n();
  const t = T[lang as Lang] || T.en;

  return (
    <PublicShell>
      <div className="min-h-screen bg-[#f5f5f5] font-sans text-[#1a1a1a]">
        <div className="mx-auto max-w-[1400px] px-6 py-[60px] md:px-[60px] md:py-[100px]">
          <h1 className="mb-[60px] md:mb-[80px] text-center text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.02em] text-[#1a1a1a]">
            {t.contactTitle}
          </h1>

          <div className="mb-[60px] grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-[60px]">
            {/* Contact Info */}
            <div className="text-center p-[30px] md:p-[40px]">
              <svg
                viewBox="0 0 24 24"
                className="mx-auto mb-6 h-[56px] w-[56px] md:h-[64px] md:w-[64px] fill-none stroke-[#1a1a1a] stroke-[1.5] stroke-linecap-round stroke-linejoin-round"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
              <h2 className="mb-5 text-[1.15rem] md:text-[1.25rem] font-semibold text-[#1a1a1a]">
                {t.contactInfoTitle}
              </h2>
              <p className="mb-2 text-[0.95rem] md:text-base leading-[1.8] text-[#666666]">
                <a
                  href="tel:+6281139888882"
                  className="inline bg-none border-none p-0 m-0 font-inherit cursor-pointer text-inherit no-underline hover:text-[#1a1a1a]"
                >
                  +62 (811) 39-888-882
                </a>
              </p>
              <p className="m-0 text-[0.95rem] md:text-base leading-[1.8] text-[#666666]">
                zaavg.bali@gmail.com
              </p>
            </div>

            {/* Store Address */}
            <div className="text-center p-[30px] md:p-[40px]">
              <svg
                viewBox="0 0 24 24"
                className="mx-auto mb-6 h-[56px] w-[56px] md:h-[64px] md:w-[64px] fill-none stroke-[#1a1a1a] stroke-[1.5] stroke-linecap-round stroke-linejoin-round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <h2 className="mb-5 text-[1.15rem] md:text-[1.25rem] font-semibold text-[#1a1a1a]">
                {t.storeAddressTitle}
              </h2>
              <p className="mb-2 text-[0.95rem] md:text-base leading-[1.8] text-[#666666]">
                <a
                  href="https://www.google.com/maps/place/Zaav+G+jewelry/@-8.5920999,115.2648896,18.87z/data=!4m6!3m5!1s0x2dd23f9ab07189a5:0x2729aeb27f922727!8m2!3d-8.592194!4d115.2656306!16s%2Fg%2F11nhk1nb4x?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline bg-none border-none p-0 m-0 font-inherit cursor-pointer text-inherit no-underline hover:text-[#1a1a1a]"
                >
                  {t.storeAddress}
                </a>
              </p>
              <p className="m-0 text-[0.95rem] md:text-base leading-[1.8] text-[#666666]">
                {t.storeHours}
              </p>
            </div>

            {/* Company Details */}
            <div className="text-center p-[30px] md:p-[40px]">
              <svg
                viewBox="0 0 24 24"
                className="mx-auto mb-6 h-[56px] w-[56px] md:h-[64px] md:w-[64px] fill-none stroke-[#1a1a1a] stroke-[1.5] stroke-linecap-round stroke-linejoin-round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              <h2 className="mb-5 text-[1.15rem] md:text-[1.25rem] font-semibold text-[#1a1a1a]">
                {t.companyDetailsTitle}
              </h2>
              <p className="mb-2 text-[0.95rem] md:text-base leading-[1.8] text-[#666666]">
                <span>{t.tradenameLabel}</span>{" "}
                <span>{t.tradenameValue}</span>
              </p>
              <p className="m-0 text-[0.95rem] md:text-base leading-[1.8] text-[#666666]">
                {t.legalEntity}
              </p>
            </div>
          </div>

          <div className="py-16 px-6 bg-[#f5f5f5] flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 ">
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