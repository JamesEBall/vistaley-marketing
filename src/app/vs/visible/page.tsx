import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, X, Globe, DollarSign, Layers, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Vistaley vs Visible — Portfolio Monitoring & Fund Management Comparison",
  description:
    "Compare Vistaley and Visible for portfolio monitoring and fund management. Pricing, emerging market support, LP reporting, and portfolio company tools.",
  alternates: { canonical: "https://vistaley.com/vs/visible" },
};

const features = [
  { feature: "Free tier", vistaley: true, competitor: false },
  { feature: "Multi-currency NAV (20+ currencies)", vistaley: true, competitor: false },
  { feature: "12 emerging market jurisdictions", vistaley: true, competitor: false },
  { feature: "LP portal", vistaley: true, competitor: true },
  { feature: "Free FP&A for portfolio companies", vistaley: true, competitor: false },
  { feature: "Portfolio data collection", vistaley: true, competitor: true },
  { feature: "Fund accounting", vistaley: true, competitor: false },
  { feature: "Deal pipeline", vistaley: true, competitor: false },
  { feature: "Capital calls & distributions", vistaley: true, competitor: false },
  { feature: "Investor updates / newsletters", vistaley: true, competitor: true },
  { feature: "KPI benchmarking", vistaley: true, competitor: true },
  { feature: "Self-hosted option", vistaley: true, competitor: false },
];

function FeatureIcon({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="h-4 w-4 text-emerald-400" />;
  if (value === false) return <X className="h-4 w-4 text-white/20" />;
  return <span className="text-xs text-yellow-400">{value}</span>;
}

export default function VsVisiblePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Vistaley vs Visible — Portfolio Monitoring Comparison",
    description:
      "Compare Vistaley and Visible for portfolio monitoring and fund management.",
    url: "https://vistaley.com/vs/visible",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative pt-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-emerald-500/[0.04] blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-24 sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-white/60">
              <Globe className="h-3 w-3" />
              Comparison
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Vistaley vs Visible
            </h1>
            <p className="mt-4 text-lg text-white/40">
              Visible excels at portfolio monitoring and investor updates. VentureLens does that plus full fund management — and starts free.
            </p>
          </div>

          {/* Pricing highlight */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-6">
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-emerald-400" />
                <span className="font-semibold text-emerald-400">VentureLens</span>
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">Free</span>
                <span className="text-white/30">to start</span>
              </div>
              <p className="mt-2 text-sm text-white/40">
                Full fund management free for solo GPs. Growth at $49/mo with LP portal, fund accounting, and deal pipeline.
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6">
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-white/40" />
                <span className="font-semibold text-white/60">Visible</span>
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">$499+</span>
                <span className="text-white/30">/month</span>
              </div>
              <p className="mt-2 text-sm text-white/40">
                Portfolio monitoring and investor updates. No fund accounting or deal pipeline.
              </p>
            </div>
          </div>

          {/* Feature comparison */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">Feature comparison</h2>
            <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white/40">Feature</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-emerald-400">VentureLens</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-white/40">Visible</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((row) => (
                    <tr key={row.feature} className="border-b border-white/[0.04]">
                      <td className="px-4 py-3 text-white/60">{row.feature}</td>
                      <td className="px-4 py-3 text-center"><FeatureIcon value={row.vistaley} /></td>
                      <td className="px-4 py-3 text-center"><FeatureIcon value={row.competitor} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key difference */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-4">The key difference</h2>
            <p className="text-base text-white/50 leading-relaxed">
              Visible is a portfolio monitoring and investor relations tool — great for collecting data from portfolio companies and sending LP updates. VentureLens is a complete fund management platform that includes portfolio monitoring plus deal pipeline, fund accounting, capital calls, compliance, and an LP portal. And where Visible charges $499+/month, VentureLens starts free.
            </p>
            <p className="mt-4 text-base text-white/50 leading-relaxed">
              VentureLens also gives your portfolio companies Harbour — a free FP&A platform — so founders get genuine value from the relationship, not just a reporting obligation.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-xl border border-white/[0.08] bg-white/[0.02] p-8 text-center">
            <h2 className="text-2xl font-bold text-white">
              Full fund management. Free to start.
            </h2>
            <p className="mt-2 text-sm text-white/40">
              Everything Visible does for portfolio monitoring, plus deal pipeline, fund accounting, and LP portal — starting at $0.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="https://app.vistaley.com/login?signup=true"
                className="inline-flex h-10 items-center gap-2 rounded-lg bg-emerald-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-emerald-400"
              >
                Start free with VentureLens
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 px-5 text-sm font-medium text-white/60 transition-colors hover:text-white"
              >
                See full pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
