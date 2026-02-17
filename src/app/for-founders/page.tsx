import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  BarChart3,
  Calculator,
  Target,
  Send,
  TrendingUp,
  PieChart,
  FileText,
  Bell,
  Shield,
  Zap,
  DollarSign,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Harbour — Free FP&A for Portfolio Companies",
  description:
    "Free financial planning and analysis platform. Track your finances, manage budgets, and keep your investors informed — all in one place.",
};

function Hero() {
  return (
    <section className="relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-sky-500/[0.06] blur-[120px]" />
        <div className="absolute left-0 top-[200px] h-[400px] w-[600px] rounded-full bg-blue-500/[0.04] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 sm:pt-32 lg:px-8 lg:pt-40">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/[0.08] px-4 py-1.5 text-xs font-medium text-sky-400">
            <Zap className="h-3 w-3" />
            Harbour — Free forever for founders
          </div>
        </div>

        <h1 className="mx-auto mt-8 max-w-4xl text-center text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Your finances, clear.
          <br />
          <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Your investors, informed.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-white/50 sm:text-xl">
          Harbour is the free FP&A platform that helps portfolio companies
          track their finances, plan ahead, and share the right data with
          investors — effortlessly.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://harbour.vistaley.com/login?signup=true"
            className="inline-flex h-12 items-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold text-black shadow-lg shadow-white/10 transition-all hover:bg-white/90 active:scale-[0.98]"
          >
            Get started — it&apos;s free
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for-gps"
            className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/10 px-6 text-sm font-medium text-white/70 transition-colors hover:border-white/20 hover:text-white"
          >
            I&apos;m a fund manager
          </Link>
        </div>

        <div className="mt-16 flex items-center justify-center gap-6 text-sm text-white/30">
          <span className="flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-sky-400/60" />
            Free forever
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-sky-400/60" />
            No credit card
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-sky-400/60" />
            Set up in 5 minutes
          </span>
        </div>

        {/* Dashboard Preview */}
        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="rounded-xl border border-white/[0.08] bg-neutral-900 p-1 shadow-2xl shadow-black/50">
            <div className="rounded-lg bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-sky-500/20" />
                  <div>
                    <div className="h-3 w-28 rounded bg-white/10" />
                    <div className="mt-1.5 h-2 w-16 rounded bg-white/[0.06]" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="h-7 w-24 rounded-md bg-sky-500/20 flex items-center justify-center text-[10px] text-sky-400">
                    Send Update
                  </div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { label: "Monthly Revenue", value: "$142K" },
                  { label: "Burn Rate", value: "$87K" },
                  { label: "Runway", value: "18 mo" },
                  { label: "ARR Growth", value: "+34%" },
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
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-2xl bg-sky-500/[0.04] blur-2xl" />
        </div>
      </div>
    </section>
  );
}

function ThreeSteps() {
  return (
    <section className="border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stop wasting time on investor spreadsheets
          </h2>
          <p className="mt-4 text-lg text-white/40">
            Founders spend 8+ hours a month compiling financial data for
            investors. Harbour automates the entire process.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Calculator,
              title: "Track Your Finances",
              description:
                "Connect your accounts or import transactions. See revenue, burn rate, and runway in real time. No more guessing.",
            },
            {
              icon: Target,
              title: "Plan Ahead",
              description:
                "Build budgets, run scenarios, and understand your financial future. See how decisions today affect your runway tomorrow.",
            },
            {
              icon: Send,
              title: "Share with Investors",
              description:
                "Send beautiful investor updates with one click. Your investors get the data they need, you get your time back.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6"
            >
              <item.icon className="h-5 w-5 text-sky-400/70" />
              <h3 className="mt-4 text-base font-semibold text-white/80">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/40">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForFounders() {
  return (
    <section className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/[0.08] px-3 py-1 text-xs font-medium text-sky-400">
              <TrendingUp className="h-3 w-3" />
              For Founders
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
              Your entire financial picture, in one place
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/40">
              Harbour gives you the FP&A tools that enterprise companies pay
              $50K+ for — completely free. Because better-informed founders
              build better companies.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Real-time revenue, burn, and runway tracking",
                "Budget creation with scenario modeling",
                "Investor update templates that take 5 minutes",
                "KPI tracking dashboards",
                "Team financial visibility controls",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/50"
                >
                  <Check className="h-4 w-4 text-sky-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6">
            <div className="text-xs font-medium text-white/25 mb-4">
              Financial Dashboard
            </div>
            <div className="space-y-3">
              {[
                {
                  metric: "Monthly Revenue",
                  value: "$142,300",
                  change: "+12%",
                },
                {
                  metric: "Monthly Burn",
                  value: "$87,400",
                  change: "-5%",
                },
                {
                  metric: "Cash Runway",
                  value: "18.2 months",
                  change: "+2.1mo",
                },
                {
                  metric: "ARR",
                  value: "$1.71M",
                  change: "+34%",
                },
              ].map((row) => (
                <div
                  key={row.metric}
                  className="flex items-center justify-between rounded-lg bg-white/[0.03] px-4 py-3"
                >
                  <span className="text-sm text-white/50">{row.metric}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-white/80">
                      {row.value}
                    </span>
                    <span className="text-xs text-emerald-400">
                      {row.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* For Investors section */}
        <div className="mt-32 grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6">
              <div className="text-xs font-medium text-white/25 mb-4">
                Portfolio Overview
              </div>
              <div className="space-y-2">
                {[
                  {
                    name: "TechFlow",
                    status: "On Track",
                    revenue: "$420K MRR",
                    health: "green",
                  },
                  {
                    name: "DataSync",
                    status: "Growing Fast",
                    revenue: "$180K MRR",
                    health: "green",
                  },
                  {
                    name: "BuildOps",
                    status: "Needs Attention",
                    revenue: "$95K MRR",
                    health: "yellow",
                  },
                  {
                    name: "CloudBase",
                    status: "On Track",
                    revenue: "$310K MRR",
                    health: "green",
                  },
                  {
                    name: "EdgeAI",
                    status: "Early Stage",
                    revenue: "$22K MRR",
                    health: "blue",
                  },
                ].map((co) => (
                  <div
                    key={co.name}
                    className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2.5"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-1.5 w-1.5 rounded-full ${
                          co.health === "green"
                            ? "bg-emerald-400"
                            : co.health === "yellow"
                            ? "bg-yellow-400"
                            : "bg-sky-400"
                        }`}
                      />
                      <div>
                        <div className="text-xs font-medium text-white/60">
                          {co.name}
                        </div>
                        <div className="text-[10px] text-white/25">
                          {co.status}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-white/40">{co.revenue}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/[0.08] px-3 py-1 text-xs font-medium text-indigo-400">
              <Users className="h-3 w-3" />
              For Investors
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
              Portfolio insights, without the email chains
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/40">
              Get structured updates from your portfolio companies, monitor key
              metrics, and spend less time chasing founders for data.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Aggregated portfolio dashboard",
                "Structured company updates with KPIs",
                "Automated reminder workflows",
                "Benchmark companies against each other",
                "Flag companies that need attention",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/50"
                >
                  <Check className="h-4 w-4 text-indigo-400" />
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

function FeaturesGrid() {
  const features = [
    {
      icon: BarChart3,
      title: "Financial Dashboard",
      description:
        "See revenue, expenses, burn rate, and runway at a glance. Connected to your real financial data.",
    },
    {
      icon: PieChart,
      title: "Budget Planning",
      description:
        "Create departmental budgets, track actuals vs plan, and understand where every dollar goes.",
    },
    {
      icon: TrendingUp,
      title: "Scenario Modeling",
      description:
        "Model different growth scenarios. See how hiring, fundraising, or pivoting affects your runway.",
    },
    {
      icon: Send,
      title: "Investor Updates",
      description:
        "Send professional investor updates with pre-built templates. Include the right metrics automatically.",
    },
    {
      icon: DollarSign,
      title: "Burn Analytics",
      description:
        "Understand your burn rate trends, gross vs net burn, and path to profitability.",
    },
    {
      icon: FileText,
      title: "Report Generation",
      description:
        "Generate board reports, financial summaries, and KPI dashboards with one click.",
    },
    {
      icon: Target,
      title: "KPI Tracking",
      description:
        "Define and track your key metrics. Set targets, monitor trends, and share with stakeholders.",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description:
        "Get notified when metrics change significantly. Catch cash flow issues before they become crises.",
    },
    {
      icon: Shield,
      title: "Secure Sharing",
      description:
        "Control exactly what investors see. Share summaries without exposing sensitive details.",
    },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything a startup CFO needs
          </h2>
          <p className="mt-4 text-lg text-white/40">
            Professional financial tools. Zero cost. No catch.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:border-sky-500/20 hover:bg-sky-500/[0.02]"
            >
              <feature.icon className="h-5 w-5 text-sky-400/70" />
              <h3 className="mt-4 text-base font-semibold text-white/80">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/40">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyFree() {
  return (
    <section className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why is Harbour free?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/40">
            Harbour is part of the{" "}
            <Link href="/" className="text-sky-400 hover:text-sky-300">
              Vistaley
            </Link>{" "}
            platform, alongside{" "}
            <Link href="/for-gps" className="text-sky-400 hover:text-sky-300">
              VentureLens
            </Link>{" "}
            for fund managers. We built Harbour because better financial data
            from portfolio companies makes the entire ecosystem healthier.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/40">
            When founders use Harbour, their investors get better data. When
            investors use VentureLens, they can pull that data seamlessly.
            Everyone wins.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-center">
              <div className="text-xl font-bold text-white">$0</div>
              <div className="text-xs text-white/30">forever for founders</div>
            </div>
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-center">
              <div className="text-xl font-bold text-white">∞</div>
              <div className="text-xs text-white/30">
                companies, updates, reports
              </div>
            </div>
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-center">
              <div className="text-xl font-bold text-white">0</div>
              <div className="text-xs text-white/30">
                credit cards required
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="relative overflow-hidden rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/[0.08] to-blue-500/[0.04] p-12 text-center sm:p-16">
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-64 w-[500px] rounded-full bg-sky-500/10 blur-[80px]" />
          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Your finances deserve better than a spreadsheet
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-base text-white/40">
            Free forever. Set up in 5 minutes. Join the ecosystem that makes
            investor reporting effortless.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://harbour.vistaley.com/login?signup=true"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-white px-8 text-sm font-semibold text-black shadow-lg shadow-white/10 transition-all hover:bg-white/90"
            >
              Get started free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ForFoundersPage() {
  return (
    <>
      <Hero />
      <ThreeSteps />
      <ForFounders />
      <FeaturesGrid />
      <WhyFree />
      <FinalCTA />
    </>
  );
}
