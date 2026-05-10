import Link from "next/link";

const navItems = [
  { href: "/", label: "Map" },
  { href: "/united-states/", label: "United States" },
  { href: "/hantavirus-risk-map/", label: "Risk" },
  { href: "/hantavirus-outbreak-map/", label: "Alerts" },
  { href: "/prevention/", label: "Prevention" },
  { href: "/sources-methodology/", label: "Sources" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/[0.92] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3 text-white">
          <span className="grid size-9 place-items-center rounded-md border border-emerald-300/40 bg-emerald-300/[0.12] text-sm font-bold text-emerald-100">
            HM
          </span>
          <span className="text-base font-semibold">Hantavirus Maps</span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="ml-auto flex min-w-0 gap-1 overflow-x-auto rounded-md border border-white/10 bg-white/[0.03] p-1"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
