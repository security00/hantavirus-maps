const regionalSignals = [
  {
    region: "Americas",
    focus: "Deer mouse exposure, rural housing, and outbreak advisories",
    level: "Elevated watch",
  },
  {
    region: "Europe",
    focus: "Bank vole habitats, forest activity, and seasonal case reports",
    level: "Seasonal risk",
  },
  {
    region: "Asia",
    focus: "Rodent-borne transmission corridors and public health bulletins",
    level: "Active monitoring",
  },
];

const resources = [
  "Track official hantavirus outbreak notices by region.",
  "Review prevention guidance for homes, cabins, farms, and field work.",
  "Follow rodent exposure risk changes after storms, droughts, and seasonal shifts.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.25),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.2),_transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200">
              Hantavirus Tracker · Global risk intelligence
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Hantavirus maps, outbreak signals, and prevention guidance in one place.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Hantavirus Tracker helps readers follow regional risk signals, understand rodent exposure patterns,
              and find practical prevention steps before entering high-risk environments.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#tracker"
                className="rounded-full bg-emerald-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                View risk snapshot
              </a>
              <a
                href="#prevention"
                className="rounded-full border border-white/20 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Prevention checklist
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-emerald-950/40 backdrop-blur">
            <div className="rounded-[1.5rem] bg-slate-900 p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Live map layer</p>
                  <h2 className="mt-2 text-2xl font-semibold">Risk signal overview</h2>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm text-emerald-200">Beta</span>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-950">
                <div className="absolute inset-6 rounded-full border border-emerald-300/20" />
                <div className="absolute inset-14 rounded-full border border-blue-300/20" />
                <div className="absolute left-[18%] top-[36%] h-4 w-4 rounded-full bg-amber-300 shadow-[0_0_35px_12px_rgba(252,211,77,0.25)]" />
                <div className="absolute left-[46%] top-[30%] h-5 w-5 rounded-full bg-emerald-300 shadow-[0_0_35px_12px_rgba(110,231,183,0.25)]" />
                <div className="absolute left-[66%] top-[52%] h-4 w-4 rounded-full bg-sky-300 shadow-[0_0_35px_12px_rgba(125,211,252,0.25)]" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-slate-900/90 p-4">
                  <p className="text-sm text-slate-400">Prototype layer</p>
                  <p className="mt-1 font-medium">Official-source map integrations will be added after source verification.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tracker" className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Risk snapshot</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Regional monitoring priorities</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {regionalSignals.map((item) => (
              <article key={item.region} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
                <p className="text-sm text-emerald-200">{item.level}</p>
                <h3 className="mt-3 text-2xl font-semibold">{item.region}</h3>
                <p className="mt-4 leading-7 text-slate-300">{item.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="prevention" className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Prevention first</p>
            <h2 className="mt-3 text-3xl font-semibold">Built for fast, plain-English public health awareness.</h2>
          </div>
          <ul className="grid gap-4">
            {resources.map((resource) => (
              <li key={resource} className="rounded-2xl bg-slate-950/70 p-5 text-slate-200">
                {resource}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
