import Link from "next/link";

const actions = [
  { href: "/where/united-states/", label: "U.S. states" },
  { href: "/where/canada/", label: "Canada" },
  { href: "/outbreaks/", label: "Alerts" },
  { href: "/sources-methodology/", label: "Sources" },
];

export function MapQuickActions() {
  return (
    <nav aria-label="Map quick paths" className="map-quick-actions">
      {actions.map((action) => (
        <Link key={action.href} href={action.href}>
          {action.label}
        </Link>
      ))}
    </nav>
  );
}
