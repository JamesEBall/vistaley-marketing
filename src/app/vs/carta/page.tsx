import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, X, Globe, DollarSign, Layers, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Vistaley vs Carta — Fund Management Comparison",
  description:
    "Compare Vistaley VentureLens and Carta for venture fund management. See pricing, features, emerging market support, and which platform fits your fund.",
  alternates: { canonical: "https://vistaley.com/vs/carta" },
};

const features = [
  { feature: "Free tier", vistaley: true, competitor: false },
  { feature: "Multi-currency NAV (20+ currencies)", vistaley: true, competitor: false },
  { feature: "12 emerging market jurisdictions", vistaley: true, competitor: false },
  { feature: "LP portal included", vistaley: true, competitor: "Add-on" },
  { feature: "Free portfolio company tools", vistaley: true, competitor: false },
  { feature: "Deal pipeline", vistaley: true, competitor: true },
  { feature: "Fund accounting", vistaley: true, competitor: true },
  { feature: "Cap table management", vistaley: false, competitor: true },
  { feature: "409A valuations", vistaley: false, competitor: true },
  { feature: "Self-hosted option", vistaley: true, competitor: false },
];

function FeatureIcon({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="h-4 w-4 text-emerald-400" />;
  if (value === false) return <X className="h-4 w-4 text-white/20" />;
  return <span className="text-xs text-yellow-400">{value}</span>;
}

export default function VsCartaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Vistaley vs Carta — Fund Management Comparison",
    description:
      "Compare Vistaley VentureLens and Carta for venture fund management.",
    url: "https://vistaley.com/vs/carta",
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
              Vistaley vs Carta
            </h1>
            <p className="mt-4 text-lg text-white/40">
              Both platforms serve fund managers — but they&apos;re built for different markets. Here&apos;s an honest comparison.
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
                Solo GP tier is free forever. Growth at $49/mo. No per-LP fees.
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6">
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-white/40" />
                <span className="font-semibold text-white/60">Carta</span>
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">~$10K+</span>
                <span className="text-white/30">/year</span>
              </div>
              <p className="mt-2 text-sm text-white/40">
                Enterprise pricing with per-entity and per-LP charges.
              </p>
            </div>
          </div>

          {/* Feature comparison table */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">Feature comparison</h2>
            <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white/40">Feature</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-emerald-400">VentureLens</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-white/40">Carta</th>
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

          {/* When to choose */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-500/10 bg-emerald-500/[0.02] p-6">
              <h3 className="text-lg font-semibold text-emerald-400">Choose VentureLens if</h3>
              <ul className="mt-4 space-y-2">
                {[
                  "You manage funds in emerging markets",
                  "You need native multi-currency support",
                  "You want a free tier to start",
                  "You want free tools for portfolio companies",
                  "You need jurisdiction-specific compliance",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/50">
                    <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
              <h3 className="text-lg font-semibold text-white/60">Choose Carta if</h3>
              <ul className="mt-4 space-y-2">
                {[
                  "You're primarily US-based",
                  "You need cap table management",
                  "You want 409A valuation services",
                  "You have enterprise budget ($10K+/yr)",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/50">
                    <Check className="h-3.5 w-3.5 shrink-0 text-white/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-xl border border-white/[0.08] bg-white/[0.02] p-8 text-center">
            <h2 className="text-2xl font-bold text-white">
              Start managing your fund for free
            </h2>
            <p className="mt-2 text-sm text-white/40">
              No credit card required. Set up in minutes. Free forever on the Starter tier.
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
