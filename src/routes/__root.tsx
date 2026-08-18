import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Toaster } from "@/components/ui/sonner";

type Lang = "en" | "ru" | "id";

const T_NOT_FOUND: Record<
  Lang,
  {
    notFoundTitle: string;
    notFoundDescriptionPre: string;
    notFoundDescriptionPost: string;
    btnHome: string;
    btnCatalog: string;
  }
> = {
  ru: {
    notFoundTitle: "Страница не найдена",
    notFoundDescriptionPre:
      "Запрашиваемая страница не существует или была перемещена.\nЕсли у вас возникли вопросы, свяжитесь с нами по номеру ",
    notFoundDescriptionPost: "",
    btnHome: "На главную",
    btnCatalog: "В каталог",
  },
  en: {
    notFoundTitle: "Page Not Found",
    notFoundDescriptionPre:
      "The page you are looking for doesn't exist or has been moved.\nIf you have any questions, contact us at ",
    notFoundDescriptionPost: "",
    btnHome: "Home",
    btnCatalog: "Catalog",
  },
  id: {
    notFoundTitle: "Halaman Tidak Ditemukan",
    notFoundDescriptionPre:
      "Halaman yang Anda cari tidak ada atau telah dipindahkan.\nJika Anda memiliki pertanyaan, hubungi kami di ",
    notFoundDescriptionPost: "",
    btnHome: "Beranda",
    btnCatalog: "Katalog",
  },
};

export function NotFoundComponent() {
  const { lang } = useI18n();
  const t = T_NOT_FOUND[(lang as Lang) || "en"] || T_NOT_FOUND.en;

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
        {/* Large 404 Accent */}
        <span className="text-7xl md:text-9xl font-extrabold tracking-widest text-[#45cbad] opacity-90 select-none">
          404
        </span>

        {/* Error Title */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          {t.notFoundTitle}
        </h1>

        {/* Description Text with Phone/WhatsApp Link */}
        <p className="text-base md:text-lg font-light text-gray-200 leading-relaxed max-w-xl whitespace-pre-line">
          {t.notFoundDescriptionPre}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium underline underline-offset-4 hover:text-[#45cbad] transition-colors"
          >
            +62 (811) 398 88 882
          </a>
          {t.notFoundDescriptionPost}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full">
          {/* Main Green Action Button */}
          <Link
            to="/"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium text-black text-sm tracking-wide transition-all shadow-lg hover:opacity-95"
            style={{ backgroundColor: "#45cbad" }}
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

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Handmade jewelry from Bali" },
      { name: "description", content: "Rings, earrings, bracelets, pendants, chains – designer handmade jewelry." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Handmade jewelry from Bali" },
      { name: "twitter:title", content: "Handmade jewelry from Bali" },
      { property: "og:description", content: "Rings, earrings, bracelets, pendants, chains – designer handmade jewelry." },
      { name: "twitter:description", content: "Rings, earrings, bracelets, pendants, chains – designer handmade jewelry." },
      { property: "og:image", content: "/LinkImage.webp" },
      { name: "twitter:image", content: "/LinkImage.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <Outlet />
        <Toaster richColors position="top-right" />
      </I18nProvider>
    </QueryClientProvider>
  );
}