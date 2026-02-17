import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Layers,
  Target,
  LineChart,
  Users,
  FileText,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "VentureLens — Fund Management for Emerging Market GPs",
  description:
    "Deal pipeline, portfolio monitoring, LP portal, and fund accounting — purpose-built for emerging market venture funds. Start free.",
};

function Hero() {
  return (
    <section className="relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-emerald-500/[0.07] blur-[120px]" />
        <div className="absolute right-0 top-[200px] h-[400px] w-[600px] rounded-full bg-teal-500/[0.05] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 sm:pt-32 lg:px-8 lg:pt-40">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-4 py-1.5 text-xs font-medium text-emerald-400">
            <Layers className="h-3 w-3" />
            VentureLens — For Fund Managers
          </div>
        </div>

        <h1 className="mx-auto mt-8 max-w-4xl text-center text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Stop running your fund
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            on spreadsheets
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-white/50 sm:text-xl">
          VentureLens replaces Excel, WhatsApp, and email with a single source
          of truth for your fund operations. Deal pipeline, portfolio
          monitoring, LP reporting, and fund accounting — all in one platform.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://app.vistaley.com/signup"
            className="inline-flex h-12 items-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold text-black shadow-lg shadow-white/10 transition-all hover:bg-white/90 active:scale-[0.98]"
          >
            Start free trial
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/10 px-6 text-sm font-medium text-white/70 transition-colors hover:border-white/20 hover:text-white"
          >
            View pricing
          </Link>
        </div>

        {/* Dashboard Preview */}
        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="rounded-xl border border-white/[0.08] bg-[#111] p-1 shadow-2xl shadow-black/50">
            <div className="rounded-lg bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-emerald-500/20" />
                  <div>
                    <div className="h-3 w-32 rounded bg-white/10" />
                    <div className="mt-1.5 h-2 w-20 rounded bg-white/[0.06]" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="h-7 w-16 rounded-md bg-white/[0.06]" />
                  <div className="h-7 w-20 rounded-md bg-emerald-500/20" />
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { label: "Fund Size", value: "$25M" },
                  { label: "Portfolio", value: "18 cos" },
                  { label: "IRR", value: "24.3%" },
                  { label: "TVPI", value: "2.1x" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg bg-white/[0.03] p-4"
                  >
                    <div className="text-xs text-white/30">{stat.label}</div>
                    <div className="mt-1 text-xl font-semibold text-white/80">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 h-32 rounded-lg bg-white/[0.02] sm:h-48" />
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-2xl bg-emerald-500/[0.04] blur-2xl" />
        </div>
      </div>
    </section>
  );
}

function ProblemSolution() {
  return (
    <section className="border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Spreadsheets weren&apos;t built for fund management
          </h2>
          <p className="mt-4 text-lg text-white/40">
            Most emerging market VCs run their operations across dozens of
            spreadsheets, emails, and disconnected tools. There&apos;s a better way.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8">
            <div className="text-xs font-semibold uppercase tracking-widest text-red-400/60">
              The problem
            </div>
            <ul className="mt-6 space-y-4">
              {[
                "Fund data scattered across 20+ spreadsheets",
                "LP reports take days to compile manually",
                "No single source of truth for portfolio performance",
                "Compliance tracking is error-prone and time-consuming",
                "Deal pipeline managed via email threads",
                "Competitors charge $6K–$50K/year and are US-focused",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-white/50"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-8">
            <div className="text-xs font-semibold uppercase tracking-widest text-emerald-400/80">
              The VentureLens way
            </div>
            <ul className="mt-6 space-y-4">
              {[
                "One platform for your entire fund operation",
                "LP reports generated in seconds, not days",
                "Real-time portfolio dashboard with key metrics",
                "Built-in regulatory and compliance workflows",
                "Structured deal pipeline with due diligence tracking",
                "Starts at $0/month — built for emerging markets",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-white/60"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: Target,
      title: "Deal Pipeline",
      description:
        "Track deals from sourcing to close. Kanban-style pipeline with custom stages, scoring, due diligence checklists, and team collaboration.",
      details: [
        "Drag-and-drop deal stages",
        "Company profiles with key data",
        "Due diligence workflows",
        "Team assignment and notes",
      ],
    },
    {
      icon: BarChart3,
      title: "Portfolio Monitoring",
      description:
        "Real-time dashboard with key metrics, valuations, and performance tracking across your entire portfolio.",
      details: [
        "IRR, TVPI, DPI, MOIC metrics",
        "Portfolio company valuations",
        "Performance benchmarking",
        "Data from Harbour (automatic)",
      ],
    },
    {
      icon: LineChart,
      title: "Fund Accounting",
      description:
        "Multi-currency accounting with automated NAV calculations, management fee computation, and carried interest waterfall modeling.",
      details: [
        "20+ currencies with live rates",
        "Automated NAV calculations",
        "Fee and carry management",
        "Audit-ready exports",
      ],
    },
    {
      icon: Users,
      id: "lp-portal",
      title: "LP Portal",
      description:
        "Give your LPs a branded self-service portal with real-time fund performance, capital account statements, and document access.",
      details: [
        "Branded with your fund identity",
        "Real-time fund metrics",
        "Capital account statements",
        "Secure document sharing",
      ],
    },
    {
      icon: Zap,
      title: "Capital Calls & Distributions",
      description:
        "Automated capital call generation, distribution waterfall calculations, and per-LP commitment tracking.",
      details: [
        "One-click capital call notices",
        "Per-LP allocation calculations",
        "Distribution waterfall modeling",
        "PDF notice generation",
      ],
    },
    {
      icon: Shield,
      title: "Compliance & Reporting",
      description:
        "Jurisdiction-specific regulatory templates and reporting frameworks for 12 emerging markets.",
      details: [
        "12 jurisdiction frameworks",
        "Regulatory reporting templates",
        "ESG and impact tracking",
        "Professional PDF reports",
      ],
    },
  ];

  return (
    <section className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to manage a fund
          </h2>
          <p className="mt-4 text-lg text-white/40">
            A complete platform that replaces your spreadsheets, not just
            another dashboard.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              id={feature.id}
              className="grid items-start gap-8 rounded-xl border border-white/[0.06] bg-white/[0.01] p-6 sm:p-8 md:grid-cols-2"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                    <feature.icon className="h-5 w-5 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white/90">
                    {feature.title}
                  </h3>
                </div>
                <p className="mt-4 text-base leading-relaxed text-white/40">
                  {feature.description}
                </p>
              </div>
              <div>
                <ul className="space-y-3">
                  {feature.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-2.5 text-sm text-white/50"
                    >
                      <Check className="h-4 w-4 shrink-0 text-emerald-400/60" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EmergingMarkets() {
  const jurisdictions = [
    { flag: "🇻🇳", name: "Vietnam", code: "DICA" },
    { flag: "🇵🇰", name: "Pakistan", code: "SECP" },
    { flag: "🇧🇩", name: "Bangladesh", code: "BSEC" },
    { flag: "🇰🇿", name: "Kazakhstan", code: "AIFC" },
    { flag: "🇱🇰", name: "Sri Lanka", code: "SEC" },
    { flag: "🇳🇵", name: "Nepal", code: "SEBON" },
    { flag: "🇵🇭", name: "Philippines", code: "SEC" },
    { flag: "🇰🇭", name: "Cambodia", code: "SERC" },
    { flag: "🇲🇲", name: "Myanmar", code: "DICA" },
    { flag: "🇺🇿", name: "Uzbekistan", code: "CBU" },
    { flag: "🇰🇬", name: "Kyrgyzstan", code: "NBKR" },
    { flag: "🇹🇯", name: "Tajikistan", code: "NBT" },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1 text-xs font-medium text-emerald-400 mb-6">
            <Globe className="h-3 w-3" />
            12 Jurisdictions Supported
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built where the opportunity is
          </h2>
          <p className="mt-4 text-lg text-white/40">
            The only fund management platform with built-in compliance
            frameworks for emerging market jurisdictions.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {jurisdictions.map((j) => (
            <div
              key={j.name}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center transition-colors hover:border-emerald-500/20"
            >
              <div className="text-2xl">{j.flag}</div>
              <div className="mt-2 text-sm font-medium text-white/70">
                {j.name}
              </div>
              <div className="mt-0.5 text-[10px] text-white/30">{j.code}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Security() {
  return (
    <section className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Enterprise-grade security
          </h2>
          <p className="mt-4 text-lg text-white/40">
            Your fund data is protected at every layer. No shortcuts.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Lock,
              title: "Row-Level Security",
              description:
                "82+ Postgres RLS policies enforce complete tenant isolation at the database level.",
            },
            {
              icon: Shield,
              title: "RBAC",
              description:
                "5-tier permission system: Owner, Admin, Manager, Analyst, Viewer.",
            },
            {
              icon: FileText,
              title: "Audit Logging",
              description:
                "Every significant action is logged with structured event tracking.",
            },
            {
              icon: Globe,
              title: "Infrastructure",
              description:
                "Supabase managed encryption. Vercel edge delivery. TLS everywhere.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
            >
              <item.icon className="h-5 w-5 text-emerald-400/60" />
              <h3 className="mt-3 text-sm font-semibold text-white/80">
                {item.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-white/40">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/[0.08] to-teal-500/[0.04] p-12 text-center sm:p-16">
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-64 w-[500px] rounded-full bg-emerald-500/10 blur-[80px]" />
          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to modernize your fund operations?
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-base text-white/40">
            Start free — no credit card required. Set up your fund in minutes,
            not months.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://app.vistaley.com/signup"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-white px-8 text-sm font-semibold text-black shadow-lg shadow-white/10 transition-all hover:bg-white/90"
            >
              Get started free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/15 px-8 text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ForGPsPage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Features />
      <EmergingMarkets />
      <Security />
      <FinalCTA />
    </>
  );
}
