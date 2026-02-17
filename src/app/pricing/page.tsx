import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Minus, BarChart3, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for VentureLens and Harbour. Start free, scale as you grow. No hidden fees.",
};

function Hero() {
  return (
    <section className="relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-blue-500/[0.05] blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-24 sm:pt-32 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Professional tools, startup-friendly prices
          </h1>
          <p className="mt-4 text-lg text-white/40">
            Start free, scale as you grow. No hidden fees, no per-LP charges.
            Harbour is free forever for portfolio companies.
          </p>
        </div>
      </div>
    </section>
  );
}

function VentureLensPricing() {
  const tiers = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      description: "For solo GPs getting started",
      features: [
        "1 fund",
        "10 portfolio companies",
        "5 LPs",
        "Basic deal pipeline",
        "Fund dashboard",
        "Multi-currency support",
        "Community support",
      ],
      highlighted: false,
      cta: "Start free",
      href: "https://app.vistaley.com/signup",
    },
    {
      name: "Growth",
      price: "$49",
      period: "/month",
      description: "For growing fund managers",
      features: [
        "3 funds",
        "50 portfolio companies",
        "25 LPs",
        "LP portal access",
        "Fund accounting",
        "Team collaboration (5 seats)",
        "Capital calls & distributions",
        "PDF report generation",
        "Email support",
      ],
      highlighted: true,
      cta: "Start free trial",
      href: "https://app.vistaley.com/signup",
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "For established fund managers",
      features: [
        "Unlimited funds",
        "Unlimited portfolio companies",
        "Unlimited LPs",
        "Advanced LP portal",
        "Multi-currency accounting",
        "Unlimited team seats",
        "Custom branding",
        "API access",
        "Advanced analytics",
        "Priority support",
      ],
      highlighted: false,
      cta: "Start free trial",
      href: "https://app.vistaley.com/signup",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For institutional fund managers",
      features: [
        "Everything in Professional",
        "SSO / SAML",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantees",
        "On-premise / self-hosted option",
        "White-label capability",
        "Training & onboarding",
      ],
      highlighted: false,
      cta: "Contact sales",
      href: "/contact",
    },
  ];

  return (
    <section className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
            <Layers className="h-5 w-5 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">VentureLens</h2>
            <p className="text-sm text-white/40">For fund managers</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
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
              <p className="mt-1 text-xs text-white/30">{tier.description}</p>
              <ul className="mt-6 space-y-2.5">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-xs text-white/50"
                  >
                    <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400/60" />
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

        <p className="mt-6 text-center text-xs text-white/25">
          Annual billing available — save 20%. All prices in USD.
        </p>
      </div>
    </section>
  );
}

function HarbourPricing() {
  return (
    <section className="border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-10 w-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
            <BarChart3 className="h-5 w-5 text-sky-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Harbour</h2>
            <p className="text-sm text-white/40">For portfolio companies</p>
          </div>
        </div>

        <div className="max-w-lg">
          <div className="rounded-xl border border-sky-500/20 bg-sky-500/[0.04] p-8">
            <div className="text-sm font-medium text-sky-400">
              Free Forever
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-white">$0</span>
              <span className="text-sm text-white/30">/month, forever</span>
            </div>
            <p className="mt-2 text-sm text-white/40">
              Full FP&A platform for portfolio companies. No limits, no catch.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Unlimited financial tracking",
                "Budget planning & scenario modeling",
                "Investor update generation",
                "KPI tracking & dashboards",
                "Burn rate analytics",
                "Board report generation",
                "Smart alerts & notifications",
                "Secure investor data sharing",
                "Fund connection management",
                "Team collaboration",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-sm text-white/50"
                >
                  <Check className="h-4 w-4 shrink-0 text-sky-400/60" />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href="https://harbour.vistaley.com/login?signup=true"
              className="mt-8 block rounded-lg bg-white px-4 py-2.5 text-center text-sm font-medium text-black transition-all hover:bg-white/90"
            >
              Get started free
            </Link>
          </div>

          <p className="mt-6 text-sm text-white/30">
            Harbour is free because better financial data from portfolio
            companies makes the entire Vistaley ecosystem healthier. When
            founders use Harbour, GPs get better insights through VentureLens.
          </p>
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  const features = [
    {
      category: "Fund Management",
      items: [
        {
          name: "Funds",
          starter: "1",
          growth: "3",
          pro: "Unlimited",
          enterprise: "Unlimited",
        },
        {
          name: "Portfolio companies",
          starter: "10",
          growth: "50",
          pro: "Unlimited",
          enterprise: "Unlimited",
        },
        {
          name: "LP management",
          starter: "5 LPs",
          growth: "25 LPs",
          pro: "Unlimited",
          enterprise: "Unlimited",
        },
        {
          name: "Deal pipeline",
          starter: true,
          growth: true,
          pro: true,
          enterprise: true,
        },
        {
          name: "Fund dashboard",
          starter: true,
          growth: true,
          pro: true,
          enterprise: true,
        },
        {
          name: "Multi-currency",
          starter: true,
          growth: true,
          pro: true,
          enterprise: true,
        },
      ],
    },
    {
      category: "LP & Reporting",
      items: [
        {
          name: "LP portal",
          starter: false,
          growth: true,
          pro: true,
          enterprise: true,
        },
        {
          name: "Capital calls",
          starter: false,
          growth: true,
          pro: true,
          enterprise: true,
        },
        {
          name: "Distributions",
          starter: false,
          growth: true,
          pro: true,
          enterprise: true,
        },
        {
          name: "PDF reports",
          starter: false,
          growth: true,
          pro: true,
          enterprise: true,
        },
        {
          name: "Custom branding",
          starter: false,
          growth: false,
          pro: true,
          enterprise: true,
        },
      ],
    },
    {
      category: "Advanced",
      items: [
        {
          name: "Fund accounting",
          starter: false,
          growth: true,
          pro: true,
          enterprise: true,
        },
        {
          name: "API access",
          starter: false,
          growth: false,
          pro: true,
          enterprise: true,
        },
        {
          name: "SSO / SAML",
          starter: false,
          growth: false,
          pro: false,
          enterprise: true,
        },
        {
          name: "Self-hosted option",
          starter: false,
          growth: false,
          pro: false,
          enterprise: true,
        },
        {
          name: "SLA guarantee",
          starter: false,
          growth: false,
          pro: false,
          enterprise: true,
        },
      ],
    },
    {
      category: "Support",
      items: [
        {
          name: "Community support",
          starter: true,
          growth: true,
          pro: true,
          enterprise: true,
        },
        {
          name: "Email support",
          starter: false,
          growth: true,
          pro: true,
          enterprise: true,
        },
        {
          name: "Priority support",
          starter: false,
          growth: false,
          pro: true,
          enterprise: true,
        },
        {
          name: "Dedicated account manager",
          starter: false,
          growth: false,
          pro: false,
          enterprise: true,
        },
      ],
    },
  ];

  function renderCell(value: boolean | string) {
    if (typeof value === "string") {
      return <span className="text-xs text-white/50">{value}</span>;
    }
    return value ? (
      <Check className="h-4 w-4 text-emerald-400/60 mx-auto" />
    ) : (
      <Minus className="h-4 w-4 text-white/10 mx-auto" />
    );
  }

  return (
    <section className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Compare plans
          </h2>
          <p className="mt-4 text-lg text-white/40">
            Full feature comparison across all VentureLens tiers.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="pb-4 pr-4 text-left text-sm font-medium text-white/40">
                  Feature
                </th>
                <th className="pb-4 px-4 text-center text-sm font-medium text-white/40">
                  Starter
                </th>
                <th className="pb-4 px-4 text-center text-sm font-medium text-emerald-400">
                  Growth
                </th>
                <th className="pb-4 px-4 text-center text-sm font-medium text-white/40">
                  Pro
                </th>
                <th className="pb-4 pl-4 text-center text-sm font-medium text-white/40">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((group) => (
                <>
                  <tr key={group.category}>
                    <td
                      colSpan={5}
                      className="pt-8 pb-3 text-xs font-semibold uppercase tracking-widest text-white/25"
                    >
                      {group.category}
                    </td>
                  </tr>
                  {group.items.map((item) => (
                    <tr
                      key={item.name}
                      className="border-b border-white/[0.03]"
                    >
                      <td className="py-3 pr-4 text-sm text-white/50">
                        {item.name}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {renderCell(item.starter)}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {renderCell(item.growth)}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {renderCell(item.pro)}
                      </td>
                      <td className="py-3 pl-4 text-center">
                        {renderCell(item.enterprise)}
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      question: "Can I start for free?",
      answer:
        "Yes. VentureLens Starter is free forever — 1 fund, 10 portfolio companies, 5 LPs. No credit card required. Harbour is completely free for all portfolio companies with no limits.",
    },
    {
      question: "What happens when I exceed plan limits?",
      answer:
        "You'll be prompted to upgrade. No data is lost, and you can continue using existing features. We never lock you out of your data.",
    },
    {
      question: "Can I switch plans anytime?",
      answer:
        "Yes. Upgrade or downgrade at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the change takes effect at the end of your billing cycle.",
    },
    {
      question: "Is there a discount for annual billing?",
      answer:
        "Yes — save 20% with annual billing on all paid plans.",
    },
    {
      question: "Why is Harbour free?",
      answer:
        "Harbour is free because it's part of the Vistaley ecosystem. Better financial data from portfolio companies makes the entire platform more valuable. Founders get free FP&A tools, and fund managers get better portfolio insights through VentureLens.",
    },
    {
      question: "Is there a self-hosted option?",
      answer:
        "Yes. Enterprise customers can deploy VentureLens on their own infrastructure with Docker. Contact us for details.",
    },
    {
      question: "How does VentureLens compare to Carta or Edda?",
      answer:
        "VentureLens starts at $0/month vs. $6K–$50K/year for competitors. We're purpose-built for emerging markets with 12 jurisdictions and 20+ currencies — features that legacy platforms don't offer. Plus, the Harbour integration gives you automated portfolio company data that competitors require you to collect manually.",
    },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="mx-auto max-w-3xl px-6 py-24 lg:px-8 lg:py-32">
        <h2 className="text-3xl font-bold tracking-tight text-white text-center sm:text-4xl">
          Frequently asked questions
        </h2>

        <div className="mt-12 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6"
            >
              <h3 className="text-base font-semibold text-white/80">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/40">
                {faq.answer}
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
    <section className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-blue-500/[0.06] via-emerald-500/[0.04] to-indigo-500/[0.06] p-12 text-center sm:p-16">
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-64 w-[500px] rounded-full bg-blue-500/10 blur-[80px]" />
          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start building your fund ecosystem today
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-base text-white/40">
            No credit card required. Set up in minutes, not months.
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
              Talk to sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PricingPage() {
  return (
    <>
      <Hero />
      <VentureLensPricing />
      <HarbourPricing />
      <ComparisonTable />
      <FAQ />
      <FinalCTA />
    </>
  );
}
