"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Modern ve yumuşak bir sans: Plus Jakarta Sans
import { Plus_Jakarta_Sans } from "next/font/google";
const uiFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const links = [
  { href: "/projects", label: "Projeler" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "İletişim" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    // Ana sayfadaki anchor linkler için özel kontrol
    if (href.startsWith("/#")) {
      return pathname === "/";
    }
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  };

  // Yumuşak, modern menü stili (pill + hafif izleme + erişilebilir odak halkası)
  const navLinkBase =
    "rounded-full px-3.5 py-2 text-sm font-medium tracking-tight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/10";

  return (
    <header
      style={
        {
          ["--header-bg" as any]: "#f6bdd1", // pembe ton — istersen burayı değiştir
        } as React.CSSProperties
      }
      className={`${uiFont.className} sticky top-0 z-50 border-b !bg-[var(--header-bg)] text-neutral-900 antialiased`}
    >
      <nav className="flex w-full items-center gap-4 pl-6 sm:pl-10 pr-0 py-4 md:py-5">
        {/* Başlık: güçlü ama yumuşak, modern */}
        <Link
          href="/"
          className="text-lg md:text-xl font-extrabold tracking-tight leading-tight"
        >
          Esra ATLADI
        </Link>

        {/* Masaüstü menü */}
        <div className="ml-auto hidden items-center gap-1.5 sm:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`${navLinkBase} ${
                isActive(l.href)
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "text-neutral-800 hover:bg-neutral-900/5"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobil menü butonu */}
        <button
          className="ml-auto inline-flex items-center rounded-full border px-3.5 py-2 text-sm font-medium tracking-tight hover:bg-neutral-900/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/10 sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Menüyü aç/kapat"
        >
          Menü
        </button>
      </nav>

      {/* Mobil menü paneli */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t sm:hidden"
          onClick={() => setOpen(false)}
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`${navLinkBase} ${
                  isActive(l.href)
                    ? "bg-neutral-900 text-white shadow-sm"
                    : "text-neutral-800 hover:bg-neutral-900/5"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}