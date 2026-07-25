import { Link, useRouterState } from "@tanstack/react-router";
import { Languages, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingToolbar } from "./FloatingToolbar";

export function PublicShell({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: "default" | "light";
}) {
  const { t, lang, setLang } = useI18n();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const light = variant === "light";

  return (
    <div className={cn("min-h-screen", light ? "bg-white text-black" : "bg-background")}>
     
      <Navbar />
  
      <FloatingToolbar />
      
    
      <main className="w-screen min-h-screen flex flex-col mx-auto">{children}<Footer /></main>
    </div>
  );
}

function NavLink({
  to,
  active,
  light,
  children,
}: {
  to: string;
  active: boolean;
  light: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "rounded-md px-3 py-1.5 text-sm",
        active
          ? "font-medium"
          : light
            ? "text-black/60 hover:text-black"
            : "text-muted-foreground hover:text-foreground",
      )}
    >
      {children}
    </Link>
  );
}
