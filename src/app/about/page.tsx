import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nodods Holdings is a mission-driven South African company dedicated to being the world's best for everyday people through impact-driven ventures.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding pt-32 pb-20 md:pt-40 md:pb-28 bg-nodods-white">
        <div className="page-max-width">
          <div className="max-w-4xl">
            <p className="text-nodods-navy font-medium text-sm uppercase tracking-widest mb-6 animate-fade-in">
              About Nodods Holdings
            </p>
            <h1 className="font-display font-semibold text-display-xl text-nodods-navy mb-8 animate-fade-in-up delay-100">
              Building for
              <br />
              <span className="text-nodods-navy-light">everyday people</span>
            </h1>
            <p className="text-nodods-muted text-xl md:text-2xl leading-relaxed animate-fade-in-up delay-200">
              We are an unconventional company. We&apos;re building an
              institution designed to serve everyday people for generations to
              come.
            </p>
          </div>
        </div>
      </section>

      {/* What is Nodods */}
      <section className="section-padding py-20 md:py-28 border-t border-nodods-navy/10 bg-nodods-light">
        <div className="page-max-width">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display font-semibold text-display-sm text-nodods-navy mb-6">
                What is Nodods?
              </h2>
              <p className="text-nodods-muted text-lg leading-relaxed mb-6">
                Nodods Holdings (Pty) Ltd is a mission-driven company
                headquartered in Cape Town, South Africa. Founded in 2024, we
                are dedicated to being the world&apos;s best for everyday
                people.
              </p>
              <p className="text-nodods-muted text-lg leading-relaxed mb-6">
                Through our flagship platform Rand4U, we empower users through
                blockchain-based rewards. Users can earn real digital currencies
                by completing simple actions like referrals, tasks, and
                educational content—all without any upfront investment.
              </p>
              <p className="text-nodods-muted text-lg leading-relaxed">
                We believe everyday people deserve access to the best products
                and services, and we&apos;re building ventures that make this a
                reality.
              </p>
            </div>
            <div className="bg-nodods-white rounded-3xl p-8 md:p-10 shadow-sm border border-nodods-navy/5">
              <h3 className="font-display font-medium text-lg mb-6 text-nodods-navy">
                Company Details
              </h3>
              <dl className="space-y-4">
                <div className="flex justify-between items-start pb-4 border-b border-nodods-navy/10">
                  <dt className="text-nodods-muted">Legal Name</dt>
                  <dd className="text-right font-medium text-nodods-navy">
                    Nodods Holdings (Pty) Ltd
                  </dd>
                </div>
                <div className="flex justify-between items-start pb-4 border-b border-nodods-navy/10">
                  <dt className="text-nodods-muted">Registration</dt>
                  <dd className="text-right font-medium text-nodods-navy">
                    South African (Pty) Ltd
                  </dd>
                </div>
                <div className="flex justify-between items-start pb-4 border-b border-nodods-navy/10">
                  <dt className="text-nodods-muted">Founded</dt>
                  <dd className="text-right font-medium text-nodods-navy">2024</dd>
                </div>
                <div className="flex justify-between items-start">
                  <dt className="text-nodods-muted">Headquarters</dt>
                  <dd className="text-right font-medium text-nodods-navy">
                    Cape Town, South Africa
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding py-20 md:py-28 bg-nodods-navy">
        <div className="page-max-width">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Mission */}
            <div className="bg-nodods-white/10 rounded-3xl p-8 md:p-12 border border-nodods-white/20">
              <div className="w-12 h-12 rounded-2xl bg-nodods-white/20 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-nodods-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-2xl text-nodods-white mb-4">
                Our Mission
              </h3>
              <p className="text-xl md:text-2xl font-display text-nodods-white leading-snug">
                To be the world&apos;s best for everyday people.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-nodods-white/5 rounded-3xl p-8 md:p-12 border border-nodods-white/10">
              <div className="w-12 h-12 rounded-2xl bg-nodods-white/10 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-nodods-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-2xl text-nodods-white mb-4">
                Our Vision
              </h3>
              <p className="text-nodods-white/70 text-lg leading-relaxed">
                To serve everyday people across generations through
                impact-driven ventures that address fundamental human needs.
              </p>
            </div>
          </div>

          {/* Philosophy */}
          <div className="mt-12 md:mt-16 text-center max-w-3xl mx-auto">
            <p className="text-nodods-white/60 font-medium text-sm uppercase tracking-widest mb-4">
              Our Philosophy
            </p>
            <p className="text-2xl md:text-3xl font-display font-medium text-nodods-white leading-snug">
              We believe everyday people deserve the best products and services.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="section-padding py-20 md:py-28 border-t border-nodods-navy/10 bg-nodods-white">
        <div className="page-max-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-semibold text-display-sm text-nodods-navy mb-8">
              We&apos;re patient, principled, and relentlessly focused on our
              mission.
            </h2>
            <p className="text-nodods-muted text-lg leading-relaxed mb-8">
              We measure success not by quarterly returns, but by lives
              improved, families strengthened, and communities empowered.
              We&apos;re building for everyday people.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/team"
                className="px-8 py-4 bg-nodods-navy text-nodods-white font-medium rounded-full hover:bg-nodods-navy-light transition-colors"
              >
                Meet our team
              </Link>
              <Link
                href="/culture"
                className="px-8 py-4 border border-nodods-navy/20 text-nodods-navy rounded-full hover:bg-nodods-navy/5 transition-colors"
              >
                Our values
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
