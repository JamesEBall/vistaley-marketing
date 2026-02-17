import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquare, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Vistaley team. Sales inquiries, partnerships, or enterprise pricing.",
};

function Hero() {
  return (
    <section className="relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-blue-500/[0.04] blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-24 sm:pt-32 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 text-lg text-white/40">
            Have questions about Vistaley? Want to discuss enterprise pricing or
            partnerships? We&apos;d love to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactOptions() {
  return (
    <section className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Mail,
              title: "Email us",
              description:
                "For sales inquiries, partnerships, or general questions.",
              action: "hello@vistaley.com",
              href: "mailto:hello@vistaley.com",
              cta: "Send email",
            },
            {
              icon: Calendar,
              title: "Book a demo",
              description:
                "See VentureLens in action with a personalized walkthrough.",
              action: "Schedule a 30-minute call",
              href: "mailto:demo@vistaley.com?subject=Demo%20Request",
              cta: "Book demo",
            },
            {
              icon: MessageSquare,
              title: "Enterprise",
              description:
                "Custom deployments, SLA guarantees, and dedicated support.",
              action: "enterprise@vistaley.com",
              href: "mailto:enterprise@vistaley.com",
              cta: "Contact sales",
            },
          ].map((option) => (
            <div
              key={option.title}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6"
            >
              <option.icon className="h-6 w-6 text-white/40" />
              <h3 className="mt-4 text-lg font-semibold text-white/80">
                {option.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/40">
                {option.description}
              </p>
              <Link
                href={option.href}
                className="mt-6 inline-flex items-center rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-white/60 transition-colors hover:border-white/20 hover:text-white"
              >
                {option.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 mx-auto max-w-2xl">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8">
            <h3 className="text-lg font-semibold text-white/80 text-center">
              Quick links
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Link
                href="/pricing"
                className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4 text-center transition-colors hover:bg-white/[0.04]"
              >
                <div className="text-sm font-medium text-white/60">
                  Pricing
                </div>
                <div className="mt-1 text-xs text-white/25">
                  View all plans
                </div>
              </Link>
              <Link
                href="/about"
                className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4 text-center transition-colors hover:bg-white/[0.04]"
              >
                <div className="text-sm font-medium text-white/60">
                  About us
                </div>
                <div className="mt-1 text-xs text-white/25">
                  Our mission & team
                </div>
              </Link>
              <Link
                href="/for-gps"
                className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4 text-center transition-colors hover:bg-white/[0.04]"
              >
                <div className="text-sm font-medium text-white/60">
                  For Fund Managers
                </div>
                <div className="mt-1 text-xs text-white/25">
                  VentureLens features
                </div>
              </Link>
              <Link
                href="/for-founders"
                className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4 text-center transition-colors hover:bg-white/[0.04]"
              >
                <div className="text-sm font-medium text-white/60">
                  For Founders
                </div>
                <div className="mt-1 text-xs text-white/25">
                  Harbour features
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <Hero />
      <ContactOptions />
    </>
  );
}
