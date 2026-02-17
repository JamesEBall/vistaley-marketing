import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Vistaley privacy policy.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-16">
      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-white/30">
          Last updated: February 2026
        </p>

        <div className="mt-12 space-y-8 text-sm leading-relaxed text-white/50">
          <section>
            <h2 className="text-lg font-semibold text-white/80 mb-3">
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us, such as when
              you create an account, use our services, or contact us. This
              includes your name, email address, organization name, and fund
              details.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white/80 mb-3">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information we collect to provide, maintain, and
              improve our services, process transactions, send you technical
              notices and support messages, and respond to your requests.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white/80 mb-3">
              3. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal data. This includes row-level security,
              encryption at rest and in transit, role-based access controls, and
              audit logging.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white/80 mb-3">
              4. Data Sharing
            </h2>
            <p>
              We do not sell your personal data. We share data only as necessary
              to provide our services (e.g., between connected fund managers and
              portfolio companies, as configured by users) or as required by
              law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white/80 mb-3">
              5. Your Rights
            </h2>
            <p>
              You have the right to access, correct, or delete your personal
              data. You can also export your data at any time. Contact us at
              privacy@vistaley.com for any privacy-related requests.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white/80 mb-3">
              6. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact
              us at{" "}
              <a
                href="mailto:privacy@vistaley.com"
                className="text-blue-400 hover:text-blue-300"
              >
                privacy@vistaley.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
