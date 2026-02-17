import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Shield,
  Code,
  Users,
  Zap,
  Lock,
  FileText,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Vistaley is building the infrastructure for the next generation of venture capital in emerging markets.",
};

function Hero() {
  return (
    <section className="relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-indigo-500/[0.05] blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-24 sm:pt-32 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Building infrastructure for the next wave of venture capital
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/40">
            We believe the next generation of transformative companies will be
            built in emerging markets. Vistaley exists to give the fund managers
            and founders building that future the same institutional-grade tools
            available to Silicon Valley — at a fraction of the cost.
          </p>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Why we exist
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/40">
              <p>
                Emerging market fund managers are running billion-dollar
                operations on spreadsheets. Legacy fund management platforms
                charge $6K–$50K/year and are built for US/EU markets — they
                don&apos;t support local currencies, jurisdictional compliance,
                or the realities of operating across Bangkok, Dhaka, and Almaty.
              </p>
              <p>
                Meanwhile, portfolio companies in these markets lack the
                financial planning tools that their counterparts in developed
                markets take for granted. The result is an information gap that
                hurts everyone: founders fly blind, fund managers chase data, and
                LPs lack transparency.
              </p>
              <p>
                Vistaley bridges this gap with two connected platforms:
                <strong className="text-white/60"> VentureLens</strong> gives
                fund managers institutional-grade tools at startup-friendly
                prices, and{" "}
                <strong className="text-white/60">Harbour</strong> gives
                portfolio companies free FP&A tools that automatically share the
                right data with their investors.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: Globe,
                title: "Emerging market native",
                description:
                  "Purpose-built for Southeast Asia, South Asia, Central Asia, Sub-Saharan Africa, and MENA. Not a US product with emerging market features bolted on.",
              },
              {
                icon: Users,
                title: "Two-sided by design",
                description:
                  "Unlike competitors that only serve fund managers, Vistaley connects GPs and portfolio companies. Better data flows make the entire ecosystem healthier.",
              },
              {
                icon: Zap,
                title: "Transparent & accessible",
                description:
                  "Start at $0. No per-LP charges. No hidden fees. Professional fund management shouldn't require a $50K annual budget.",
              },
              {
                icon: Code,
                title: "Built by operators",
                description:
                  "We've lived the spreadsheet hell of managing funds across emerging markets. We built what we wished existed.",
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
                  <p className="mt-1 text-sm leading-relaxed text-white/40">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section className="border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The Vistaley ecosystem
          </h2>
          <p className="mt-4 text-lg text-white/40">
            Three products working together to create the most transparent and
            efficient venture capital ecosystem.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            {
              name: "VentureLens",
              audience: "Fund Managers (GPs)",
              description:
                "Deal pipeline, portfolio tracking, LP reporting, fund accounting, and compliance — built for emerging market funds.",
              color: "emerald",
              href: "/for-gps",
            },
            {
              name: "Harbour",
              audience: "Portfolio Companies",
              description:
                "Free FP&A platform with financial tracking, budget planning, scenario modeling, and automated investor updates.",
              color: "sky",
              href: "/for-founders",
            },
            {
              name: "LP Portal",
              audience: "Limited Partners",
              description:
                "Branded investor portal with real-time fund performance, capital account statements, and professional quarterly reports.",
              color: "indigo",
              href: "/for-gps#lp-portal",
            },
          ].map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className={`group rounded-xl border p-6 transition-all hover:bg-white/[0.02] ${
                product.color === "emerald"
                  ? "border-emerald-500/10 hover:border-emerald-500/20"
                  : product.color === "sky"
                  ? "border-sky-500/10 hover:border-sky-500/20"
                  : "border-indigo-500/10 hover:border-indigo-500/20"
              }`}
            >
              <div
                className={`text-lg font-bold ${
                  product.color === "emerald"
                    ? "text-emerald-400"
                    : product.color === "sky"
                    ? "text-sky-400"
                    : "text-indigo-400"
                }`}
              >
                {product.name}
              </div>
              <div className="mt-1 text-xs text-white/30">
                {product.audience}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/40">
                {product.description}
              </p>
              <div
                className={`mt-4 inline-flex items-center gap-1 text-xs font-medium transition-colors ${
                  product.color === "emerald"
                    ? "text-emerald-400/60 group-hover:text-emerald-400"
                    : product.color === "sky"
                    ? "text-sky-400/60 group-hover:text-sky-400"
                    : "text-indigo-400/60 group-hover:text-indigo-400"
                }`}
              >
                Learn more
                <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>

        {/* Flywheel diagram */}
        <div className="mt-16 mx-auto max-w-2xl">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8">
            <h3 className="text-center text-lg font-semibold text-white/80 mb-6">
              The Data Flywheel
            </h3>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  text: "GP invites portfolio companies to Harbour",
                },
                {
                  step: "2",
                  text: "Founders track finances and submit metrics",
                },
                {
                  step: "3",
                  text: "Data flows automatically to GP dashboard",
                },
                {
                  step: "4",
                  text: "GP generates LP reports from real data",
                },
                {
                  step: "5",
                  text: "LPs get transparency → invest in more funds",
                },
              ].map((item, i) => (
                <div key={item.step} className="flex items-center gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.04] text-xs font-bold text-white/30">
                    {item.step}
                  </div>
                  <div className="flex-1 text-sm text-white/50">
                    {item.text}
                  </div>
                  {i < 4 && (
                    <TrendingUp className="h-3.5 w-3.5 shrink-0 text-white/10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Security() {
  return (
    <section id="security" className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Security & compliance
          </h2>
          <p className="mt-4 text-lg text-white/40">
            Financial data demands the highest standards. Here&apos;s how we
            protect yours.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Lock,
              title: "Row-Level Security",
              description:
                "82+ Postgres RLS policies enforce complete tenant isolation at the database level. Your data is invisible to other organizations.",
            },
            {
              icon: Shield,
              title: "Role-Based Access Control",
              description:
                "5-tier permission system (Owner, Admin, Manager, Analyst, Viewer) with feature gating per plan tier.",
            },
            {
              icon: FileText,
              title: "Audit Logging",
              description:
                "Structured event logging for all significant actions. Capital calls, distributions, and key operations are tracked.",
            },
            {
              icon: Globe,
              title: "Infrastructure Security",
              description:
                "Hosted on Supabase (managed Postgres with encryption at rest) and Vercel (edge delivery with TLS termination).",
            },
            {
              icon: Code,
              title: "Input Validation",
              description:
                "15+ reusable server-side validators. All user input is validated before database operations.",
            },
            {
              icon: Users,
              title: "Multi-Tenant Isolation",
              description:
                "Complete organizational isolation enforced at the database level, not just in application code.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6"
            >
              <item.icon className="h-5 w-5 text-white/40" />
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

function Markets() {
  return (
    <section id="markets" className="border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Target markets
          </h2>
          <p className="mt-4 text-lg text-white/40">
            Vistaley specializes in fund operations across these regions and
            jurisdictions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              region: "South Asia",
              countries: [
                "🇵🇰 Pakistan",
                "🇧🇩 Bangladesh",
                "🇱🇰 Sri Lanka",
                "🇳🇵 Nepal",
              ],
            },
            {
              region: "Southeast Asia",
              countries: [
                "🇻🇳 Vietnam",
                "🇵🇭 Philippines",
                "🇰🇭 Cambodia",
                "🇲🇲 Myanmar",
              ],
            },
            {
              region: "Central Asia",
              countries: [
                "🇰🇿 Kazakhstan",
                "🇺🇿 Uzbekistan",
                "🇰🇬 Kyrgyzstan",
                "🇹🇯 Tajikistan",
              ],
            },
          ].map((r) => (
            <div
              key={r.region}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6"
            >
              <h3 className="text-lg font-semibold text-white/80">
                {r.region}
              </h3>
              <ul className="mt-4 space-y-2">
                {r.countries.map((c) => (
                  <li key={c} className="text-sm text-white/40">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-white/25">
          + Sub-Saharan Africa, MENA, and Latin America — with more regions
          coming soon.
        </p>
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built with modern infrastructure
          </h2>
          <p className="mt-4 text-lg text-white/40">
            Enterprise-grade technology stack. 710+ automated tests. 94.2%
            code coverage.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {[
            { name: "Next.js 16", detail: "App Router" },
            { name: "React 19", detail: "Server Components" },
            { name: "TypeScript", detail: "Strict mode" },
            { name: "Supabase", detail: "Postgres + RLS" },
            { name: "Stripe", detail: "Billing" },
            { name: "Vercel", detail: "Edge delivery" },
          ].map((tech) => (
            <div
              key={tech.name}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center"
            >
              <div className="text-sm font-medium text-white/70">
                {tech.name}
              </div>
              <div className="mt-0.5 text-[10px] text-white/25">
                {tech.detail}
              </div>
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
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-indigo-500/[0.06] to-blue-500/[0.04] p-12 text-center sm:p-16">
          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Join the ecosystem
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-base text-white/40">
            Whether you manage funds, build companies, or invest in them —
            there&apos;s a place for you in Vistaley.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://app.vistaley.com/signup"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-white px-8 text-sm font-semibold text-black shadow-lg shadow-white/10 transition-all hover:bg-white/90"
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/15 px-8 text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <Hero />
      <Mission />
      <Ecosystem />
      <Security />
      <Markets />
      <TechStack />
      <FinalCTA />
    </>
  );
}
