import { getSourcesByIds } from "@/lib/data";

type SourceListProps = {
  sourceIds: string[];
  compact?: boolean;
};

export function SourceList({ sourceIds, compact = false }: SourceListProps) {
  const sources = getSourcesByIds(sourceIds);

  if (sources.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-white/10 pt-8" aria-labelledby="sources-heading">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-emerald-200">Source transparency</p>
          <h2 id="sources-heading" className="mt-1 text-2xl font-semibold text-white">
            Reviewed Sources
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-slate-400">
          Links open official public health or agency-published source material used
          for the summaries on this page.
        </p>
      </div>

      <div className={compact ? "grid gap-3" : "grid gap-4 md:grid-cols-2"}>
        {sources.map((source) => (
          <article key={source.id} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs font-semibold text-slate-400">{source.publisher}</p>
            <h3 className="mt-2 text-base font-semibold text-white">
              <a className="hover:text-emerald-200" href={source.url} rel="noreferrer" target="_blank">
                {source.title}
              </a>
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{source.use}</p>
            {!compact && <p className="mt-3 text-xs leading-5 text-slate-500">{source.limitations}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
