import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/payment-error")({
  component: PaymentErrorPage,
});

type Lang = "en" | "ru" | "id";

const T: Record<
  Lang,
  {
    errorTitle: string;
    errorDescriptionPre: string;
    errorDescriptionPost: string;
    btnHome: string;
    btnCatalog: string;
  }
> = {
  ru: {
    errorTitle: "Что-то пошло не так :(",
    errorDescriptionPre:
      "При оплате произошла ошибка. Проверьте введенные вами данные и повторите попытку.\nЕсли ошибка повторяется, вы можете связаться с нами по номеру ",
    errorDescriptionPost: "",
    btnHome: "На главную",
    btnCatalog: "В каталог",
  },
  en: {
    errorTitle: "Something went wrong :(",
    errorDescriptionPre:
      "An error occurred during payment. Please check your details and try again.\nIf the issue persists, feel free to contact us at ",
    errorDescriptionPost: "",
    btnHome: "Home",
    btnCatalog: "Catalog",
  },
  id: {
    errorTitle: "Ada yang salah :(",
    errorDescriptionPre:
      "Happened an error during payment. Silakan periksa data Anda dan coba lagi.\nJika masalah berlanjut, hubungi kami di ",
    errorDescriptionPost: "",
    btnHome: "Beranda",
    btnCatalog: "Katalog",
  },
};

export function PaymentErrorPage() {
  const { lang } = useI18n();
  const t = T[(lang as Lang) || "en"] || T.en;

  const waNumber = "6281139888882";
  const whatsappUrl = `https://wa.me/${waNumber}`;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white px-4 overflow-hidden bg-black">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 z-0"
        style={{
          backgroundImage: `url('/ThankYouMountain.webp')`,
        }}
      />
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto space-y-6">
        {/* Error Title */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          {t.errorTitle}
        </h1>

        {/* Description Text with Phone Number Link */}
        <p className="text-base md:text-lg font-light text-gray-200 leading-relaxed max-w-xl whitespace-pre-line">
          {t.errorDescriptionPre}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium underline underline-offset-4 hover:text-[#4AC2B6] transition-colors"
          >
            +62 (811) 398 88 882
          </a>
          {t.errorDescriptionPost}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full">
          {/* Main Green Action Button */}
          <Link
            to="/"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium text-black text-sm tracking-wide transition-all shadow-lg hover:opacity-95"
            style={{ backgroundColor: "#4AC2B6" }}
          >
            {t.btnHome}
          </Link>

          {/* Secondary White Action Button */}
          <Link
            to="/collections"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium text-black text-sm tracking-wide bg-white transition-all shadow-lg hover:bg-gray-100"
          >
            {t.btnCatalog}
          </Link>
        </div>
      </div>
    </div>
  );
}