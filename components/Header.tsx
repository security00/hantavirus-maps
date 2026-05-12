import Link from "next/link";

const navItems = [
  { href: "/#interactive-map", label: "Map" },
  { href: "/hantavirus-tracker", label: "Tracker" },
  { href: "/united-states", label: "United States" },
  { href: "/hantavirus-risk-map", label: "Risk" },
  { href: "/hantavirus-outbreak-map", label: "Alerts" },
  { href: "/prevention", label: "Prevention" },
  { href: "/sources-methodology", label: "Sources" },
  { href: "/faq", label: "FAQ" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 max-w-full overflow-hidden border-b border-white/10 bg-slate-950/[0.92] backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-3 py-2 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-4 lg:px-8 lg:py-3">
        <Link prefetch={false} href="/" className="flex shrink-0 items-center gap-2 text-white sm:gap-3">
          <span className="grid size-8 place-items-center rounded-md border border-emerald-300/40 bg-emerald-300/[0.12] text-xs font-bold text-emerald-100 sm:size-9 sm:text-sm">
            HM
          </span>
          <span className="text-sm font-semibold sm:text-base">Hantavirus Maps</span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex max-w-full min-w-0 flex-wrap justify-start gap-1 rounded-md border border-white/10 bg-white/[0.03] p-1 lg:col-start-2 lg:flex-nowrap lg:justify-center"
        >
          {navItems.map((item) => (
            <Link prefetch={false}
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-white sm:px-3 sm:py-2 sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block" aria-hidden="true" />
      </div>
    </header>
  );
}
