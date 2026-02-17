import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Globe,
  BarChart3,
  Users,
  TrendingUp,
  Shield,
  Zap,
  FileText,
  Calculator,
  Send,
  Target,
  LineChart,
  Lock,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Vistaley — Fund Management & Portfolio Intelligence for Emerging Markets",
  description:
    "The two-sided platform connecting fund managers and portfolio companies. VentureLens for GPs. Harbour for founders. Built for emerging markets.",
};

/* ─────────── Hero ─────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-16">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[700px] w-[1000px] rounded-full bg-blue-500/[0.06] blur-[140px]" />
        <div className="absolute right-0 top-[200px] h-[400px] w-[600px] rounded-full bg-emerald-500/[0.04] blur-[120px]" />
        <div className="absolute left-0 top-[300px] h-[300px] w-[500px] rounded-full bg-indigo-500/[0.03] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 sm:pt-32 lg:px-8 lg:pt-40">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-white/60">
            <Globe className="h-3 w-3" />
            Fund management + portfolio intelligence — one ecosystem
          </div>
        </div>

        {/* Headline */}
        <h1 className="mx-auto mt-8 max-w-5xl text-center text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
          The platform for
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            venture capital ecosystems
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-white/50 sm:text-xl">
          VentureLens for fund managers. Harbour for founders. Connected to
          make the entire ecosystem smarter.
        </p>

        {/* CTAs — Platform Selection */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://app.vistaley.com/login?signup=true"
            className="inline-flex h-12 items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-6 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all hover:from-emerald-400 hover:to-teal-400 active:scale-[0.98]"
          >
            <Layers className="h-4 w-4" />
            VentureLens for GPs
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="https://harbour.vistaley.com/login?signup=true"
            className="inline-flex h-12 items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:from-blue-400 hover:to-indigo-400 active:scale-[0.98]"
          >
            <BarChart3 className="h-4 w-4" />
            Harbour for Founders
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-4 flex justify-center">
          <Link
            href="#how-it-works"
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 px-6 text-sm font-medium text-white/50 transition-colors hover:border-white/20 hover:text-white"
          >
            See how it works
          </Link>
        </div>

        {/* Trust metrics */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {[
            { value: "12", label: "jurisdictions" },
            { value: "20+", label: "currencies" },
            { value: "$0", label: "to start" },
            { value: "710+", label: "automated tests" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-white/30">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Two-platform preview */}
        <div className="relative mx-auto mt-20 max-w-6xl">
          <div className="grid gap-4 md:grid-cols-2">
            {/* VentureLens preview */}
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.02] p-1">
              <div className="rounded-lg bg-gradient-to-b from-white/[0.04] to-transparent p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-6 w-6 rounded bg-emerald-500/20 flex items-center justify-center">
                    <Layers className="h-3.5 w-3.5 text-emerald-400" />
                  </div>
                  <span className="text-xs font-medium text-emerald-400">
                    VentureLens
                  </span>
                  <span className="ml-auto text-[10px] text-white/20">
                    For Fund Managers
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Fund Size", value: "$25M" },
                    { label: "Portfolio", value: "18 cos" },
                    { label: "Net IRR", value: "24.3%" },
                    { label: "TVPI", value: "2.1x" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-lg bg-white/[0.03] p-3">
                      <div className="text-[10px] text-white/25">{s.label}</div>
                      <div className="mt-0.5 text-lg font-semibold text-white/80">
                        {s.value}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 h-20 rounded-lg bg-white/[0.02]" />
              </div>
            </div>

            {/* Harbour preview */}
            <div className="rounded-xl border border-sky-500/20 bg-sky-500/[0.02] p-1">
              <div className="rounded-lg bg-gradient-to-b from-white/[0.04] to-transparent p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-6 w-6 rounded bg-sky-500/20 flex items-center justify-center">
                    <BarChart3 className="h-3.5 w-3.5 text-sky-400" />
                  </div>
                  <span className="text-xs font-medium text-sky-400">
                    Harbour
                  </span>
                  <span className="ml-auto text-[10px] text-white/20">
                    For Founders
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Revenue", value: "$142K" },
                    { label: "Burn Rate", value: "$87K" },
                    { label: "Runway", value: "18 mo" },
                    { label: "ARR Growth", value: "+34%" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-lg bg-white/[0.03] p-3">
                      <div className="text-[10px] text-white/25">{s.label}</div>
                      <div className="mt-0.5 text-lg font-semibold text-white/80">
                        {s.value}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 h-20 rounded-lg bg-white/[0.02]" />
              </div>
            </div>
          </div>
          {/* Glow */}
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-2xl bg-blue-500/[0.03] blur-3xl" />
        </div>
      </div>
    </section>
  );
}

/* ─────────── Two Sides ─────────── */
function TwoSides() {
  return (
    <section className="border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Two platforms. One ecosystem.
          </h2>
          <p className="mt-4 text-lg text-white/40">
            VentureLens and Harbour work together to create a seamless data flow
            between fund managers and their portfolio companies.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* VentureLens card */}
          <div className="group rounded-2xl border border-emerald-500/10 bg-gradient-to-b from-emerald-500/[0.04] to-transparent p-8 transition-all hover:border-emerald-500/20">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1 text-xs font-medium text-emerald-400">
              <Layers className="h-3 w-3" />
              VentureLens
            </div>
            <h3 className="mt-6 text-2xl font-bold text-white">
              For Fund Managers
            </h3>
            <p className="mt-3 text-base leading-relaxed text-white/40">
              Professional fund management that replaces spreadsheets. Deal
              pipeline, portfolio monitoring, LP portal, fund accounting — all
              in one platform built for emerging markets.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Deal pipeline with due diligence workflows",
                "Multi-currency fund accounting",
                "Branded LP portal with real-time metrics",
                "Capital call and distribution automation",
                "12-jurisdiction compliance frameworks",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-white/50"
                >
                  <Check className="h-4 w-4 shrink-0 text-emerald-400/60" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/for-gps"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
            >
              Explore VentureLens
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Harbour card */}
          <div className="group rounded-2xl border border-sky-500/10 bg-gradient-to-b from-sky-500/[0.04] to-transparent p-8 transition-all hover:border-sky-500/20">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/[0.08] px-3 py-1 text-xs font-medium text-sky-400">
              <BarChart3 className="h-3 w-3" />
              Harbour
            </div>
            <h3 className="mt-6 text-2xl font-bold text-white">
              For Founders
            </h3>
            <p className="mt-3 text-base leading-relaxed text-white/40">
              Free FP&A tools that help portfolio companies track finances, plan
              ahead, and share structured updates with investors. Better data
              benefits everyone.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Real-time revenue, burn, and runway tracking",
                "Budget planning with scenario modeling",
                "One-click investor updates",
                "KPI tracking and benchmarking",
                "Secure data sharing controls",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-white/50"
                >
                  <Check className="h-4 w-4 shrink-0 text-sky-400/60" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/for-founders"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-sky-400 transition-colors hover:text-sky-300"
            >
              Explore Harbour
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── How It Works / Flywheel ─────────── */
function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Fund managers set up their fund",
      description:
        "Create your fund on VentureLens. Import existing portfolio data, set up LP management, and configure your reporting preferences.",
      icon: Layers,
      color: "emerald",
    },
    {
      number: "02",
      title: "Invite portfolio companies",
      description:
        "Send invitations to your portfolio companies. They join Harbour — a free FP&A platform — and start tracking their financials.",
      icon: Send,
      color: "blue",
    },
    {
      number: "03",
      title: "Founders share structured data",
      description:
        "Portfolio companies submit metrics through Harbour. Automated reminders ensure timely, consistent reporting with zero email chasing.",
      icon: BarChart3,
      color: "sky",
    },
    {
      number: "04",
      title: "Data flows to fund dashboards",
      description:
        "Portfolio company data streams into VentureLens in real-time. Fund managers get aggregated views, alerting, and LP-ready reports.",
      icon: TrendingUp,
      color: "indigo",
    },
    {
      number: "05",
      title: "LPs get full transparency",
      description:
        "LPs access a branded portal with real-time fund performance, capital account statements, and professional quarterly reports.",
      icon: Users,
      color: "violet",
    },
  ];

  return (
    <section id="how-it-works" className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The data flywheel
          </h2>
          <p className="mt-4 text-lg text-white/40">
            Better data from founders → better insights for GPs → better
            transparency for LPs → better outcomes for everyone.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group flex gap-6 rounded-xl border border-white/[0.06] bg-white/[0.01] p-6 transition-colors hover:border-white/[0.1] hover:bg-white/[0.02] sm:p-8"
            >
              <div className="hidden shrink-0 sm:block">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04] text-lg font-bold text-white/20">
                  {step.number}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <step.icon className="h-5 w-5 text-white/40" />
                  <h3 className="text-lg font-semibold text-white/90">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/40 sm:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Features Overview ─────────── */
function FeaturesOverview() {
  const gpFeatures = [
    {
      icon: Target,
      title: "Deal Pipeline",
      description:
        "Kanban-style deal tracking with scoring, due diligence checklists, and team collaboration.",
    },
    {
      icon: LineChart,
      title: "Fund Accounting",
      description:
        "Multi-currency NAV calculations, fee management, and audit-ready exports.",
    },
    {
      icon: Users,
      title: "LP Portal",
      description:
        "Branded investor portal with real-time fund performance and document access.",
    },
    {
      icon: FileText,
      title: "LP Reporting",
      description:
        "Professional quarterly reports, capital account statements, and analytics.",
    },
    {
      icon: Shield,
      title: "Compliance",
      description:
        "Jurisdiction-specific regulatory templates for 12 emerging markets.",
    },
    {
      icon: Zap,
      title: "Capital Calls",
      description:
        "Automated generation, waterfall calculations, and per-LP tracking.",
    },
  ];

  const founderFeatures = [
    {
      icon: Calculator,
      title: "Financial Dashboard",
      description:
        "Real-time revenue, expenses, burn rate, and runway at a glance.",
    },
    {
      icon: Target,
      title: "Budget Planning",
      description:
        "Departmental budgets, actuals vs plan, and resource allocation.",
    },
    {
      icon: TrendingUp,
      title: "Scenario Modeling",
      description:
        "Model different growth scenarios and their impact on runway.",
    },
    {
      icon: Send,
      title: "Investor Updates",
      description:
        "One-click professional updates with pre-built templates.",
    },
    {
      icon: BarChart3,
      title: "Burn Analytics",
      description:
        "Gross vs net burn trends and path to profitability tracking.",
    },
    {
      icon: Lock,
      title: "Secure Sharing",
      description:
        "Granular controls over what each investor sees.",
    },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything both sides need
          </h2>
          <p className="mt-4 text-lg text-white/40">
            Comprehensive tools for fund managers and portfolio companies, designed to work together.
          </p>
        </div>

        {/* GP Features */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <Layers className="h-4 w-4 text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold text-white/80">
              VentureLens — Fund Manager Tools
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gpFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:border-emerald-500/20 hover:bg-emerald-500/[0.02]"
              >
                <feature.icon className="h-5 w-5 text-emerald-400/60" />
                <h4 className="mt-3 text-sm font-semibold text-white/80">
                  {feature.title}
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-white/40">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Features */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
              <BarChart3 className="h-4 w-4 text-sky-400" />
            </div>
            <h3 className="text-lg font-semibold text-white/80">
              Harbour — Founder Tools
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {founderFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:border-sky-500/20 hover:bg-sky-500/[0.02]"
              >
                <feature.icon className="h-5 w-5 text-sky-400/60" />
                <h4 className="mt-3 text-sm font-semibold text-white/80">
                  {feature.title}
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-white/40">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Why Vistaley ─────────── */
function WhyVistaley() {
  return (
    <section className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built for the markets that matter most
          </h2>
          <p className="mt-4 text-lg text-white/40">
            The next generation of venture capital is being built in emerging
            markets. Vistaley is the infrastructure to power it.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Emerging market native",
              description:
                "Purpose-built for funds operating across Southeast Asia, South Asia, Central Asia, Sub-Saharan Africa, and MENA. 12 jurisdictions, 20+ currencies.",
              icon: Globe,
            },
            {
              title: "Transparent pricing",
              description:
                "Start free. Scale as you grow. No per-LP charges, no hidden fees. Professional fund management shouldn't cost $50K/year.",
              icon: Zap,
            },
            {
              title: "Enterprise-grade security",
              description:
                "Row-level security, role-based access, audit logging, and encrypted data. Your fund data is protected at every layer.",
              icon: Shield,
            },
            {
              title: "Two-sided data flywheel",
              description:
                "When founders use Harbour, GPs get better data. When GPs use VentureLens, LPs get better transparency. Everyone wins.",
              icon: TrendingUp,
            },
            {
              title: "Built by operators",
              description:
                "We've lived the spreadsheet hell of managing funds across emerging markets. We built what we wished existed.",
              icon: Users,
            },
            {
              title: "Open & extensible",
              description:
                "Self-hosted option available. API access for integrations. Your data is portable. No vendor lock-in.",
              icon: Layers,
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  <item.icon className="h-5 w-5 text-white/40" />
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white/80">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/40">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Pricing Preview ─────────── */
function PricingPreview() {
  return (
    <section className="border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Professional tools, startup-friendly pricing
          </h2>
          <p className="mt-4 text-lg text-white/40">
            VentureLens starts free. Harbour is free forever. Scale when you're
            ready.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {[
            {
              name: "Starter",
              price: "Free",
              period: "",
              audience: "Solo GPs getting started",
              features: [
                "1 fund, 10 portfolio companies, 5 LPs",
                "Basic deal pipeline",
                "Fund dashboard",
                "Multi-currency support",
              ],
              highlighted: false,
              cta: "Start free",
              href: "https://app.vistaley.com/signup",
            },
            {
              name: "Growth",
              price: "$49",
              period: "/month",
              audience: "Growing fund managers",
              features: [
                "3 funds, 50 portfolio companies, 25 LPs",
                "LP portal access",
                "Fund accounting",
                "Team collaboration (5 seats)",
                "Capital calls & distributions",
              ],
              highlighted: true,
              cta: "Start free trial",
              href: "https://app.vistaley.com/signup",
            },
            {
              name: "Professional",
              price: "$149",
              period: "/month",
              audience: "Established fund managers",
              features: [
                "Unlimited funds & companies",
                "Advanced LP portal",
                "Multi-currency accounting",
                "Custom branding",
                "API access",
                "Priority support",
              ],
              highlighted: false,
              cta: "Start free trial",
              href: "https://app.vistaley.com/signup",
            },
          ].map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-xl border p-6 ${
                tier.highlighted
                  ? "border-emerald-500/30 bg-emerald-500/[0.04]"
                  : "border-white/[0.06] bg-white/[0.02]"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-black">
                  Most popular
                </div>
              )}
              <div className="text-sm font-medium text-white/60">
                {tier.name}
              </div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-white">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-sm text-white/30">{tier.period}</span>
                )}
              </div>
              <p className="mt-1 text-xs text-white/30">{tier.audience}</p>
              <ul className="mt-6 space-y-2.5">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-xs text-white/50"
                  >
                    <Check className="h-3.5 w-3.5 text-emerald-400/60" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={tier.href}
                className={`mt-6 block rounded-lg px-4 py-2.5 text-center text-sm font-medium transition-all ${
                  tier.highlighted
                    ? "bg-white text-black hover:bg-white/90"
                    : "border border-white/10 text-white/60 hover:border-white/20 hover:text-white"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-white/30">
            Harbour is{" "}
            <span className="text-sky-400 font-medium">free forever</span> for
            portfolio companies.{" "}
            <Link
              href="/pricing"
              className="text-white/50 hover:text-white underline underline-offset-2"
            >
              See full pricing →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Final CTA ─────────── */
function FinalCTA() {
  return (
    <section className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-blue-500/[0.06] via-emerald-500/[0.04] to-indigo-500/[0.06] p-12 text-center sm:p-16">
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-64 w-[500px] rounded-full bg-blue-500/10 blur-[80px]" />
          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to modernize your fund ecosystem?
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-base text-white/40">
            Whether you&apos;re a fund manager or a portfolio company founder,
            there&apos;s a place for you in the Vistaley ecosystem. Start free —
            no credit card required.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://app.vistaley.com/login?signup=true"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-white px-8 text-sm font-semibold text-black shadow-lg shadow-white/10 transition-all hover:bg-white/90"
            >
              Start with VentureLens
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://harbour.vistaley.com/login?signup=true"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/15 px-8 text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              Start with Harbour
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Page ─────────── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TwoSides />
      <HowItWorks />
      <FeaturesOverview />
      <WhyVistaley />
      <PricingPreview />
      <FinalCTA />
    </>
  );
}
