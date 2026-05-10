import Link from "next/link";

import { LAST_REVIEWED_LABEL } from "@/lib/routes";

const footerLinks = [
  { href: "/about/", label: "About" },
  { href: "/sources-methodology/", label: "Sources and methodology" },
  { href: "/symptoms/", label: "Symptoms" },
  { href: "/prevention/cleaning-mouse-droppings/", label: "Cleaning droppings" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold text-white">Medical disclaimer</p>
          <p className="mt-3 max-w-3xl text-sm leading-6">
            Hantavirus Maps is an educational data project. It is not a diagnosis,
            emergency service, case reporting system, treatment guide, or substitute
            for professional medical or public health advice. If you are ill after
            rodent exposure or have trouble breathing, contact healthcare or
            emergency services.
          </p>
          <p className="mt-3 text-sm text-slate-400">
            Source registry last reviewed {LAST_REVIEWED_LABEL}.
          </p>
        </div>

        <div className="flex flex-wrap items-start gap-2 lg:justify-end">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md border border-white/10 px-3 py-2 text-sm text-slate-300 transition hover:border-emerald-300/50 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
