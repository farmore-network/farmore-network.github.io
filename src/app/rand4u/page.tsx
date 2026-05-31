import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rand4U",
  description:
    "Rand4U is a multi-cryptocurrency referral hub where everyday people earn real digital currencies. Get your blockchain rewards now.",
};

const howItWorks = [
  {
    step: "01",
    title: "Sign up for free",
    description: "Create your account at rand4u.com in minutes. No payment or crypto knowledge required.",
  },
  {
    step: "02",
    title: "Complete simple actions",
    description: "Participate in referrals, complete tasks, and engage with educational content.",
  },
  {
    step: "03",
    title: "Earn real rewards",
    description: "Receive real Rand and cryptocurrency rewards automatically tracked and distributed.",
  },
  {
    step: "04",
    title: "Withdraw earnings",
    description: "Transfer your earnings directly to your bank account whenever you're ready.",
  },
];

const offerings = [
  {
    title: "Blockchain Referral Programs",
    description: "Partner with verified crypto platforms like Luno where users earn rewards for successful referrals.",
  },
  {
    title: "Bitcoin Rewards",
    description: "Receive R200 worth of Bitcoin when you complete onboarding with partner platforms.",
  },
  {
    title: "Automated Tracking",
    description: "Seamless reward tracking and distribution ensures you never miss an earned reward.",
  },
];

const advantages = [
  "Trusted, verified opportunities (no scams)",
  "Simple, accessible interface for everyday people",
  "Real money payouts (not just points or vouchers)",
  "Part of mission-driven Nodods Holdings",
];

export default function Rand4UPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding pt-32 pb-20 md:pt-40 md:pb-28 bg-nodods-white">
        <div className="page-max-width">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-nodods-navy/10 rounded-full mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-nodods-navy rounded-full animate-pulse" />
              <span className="text-nodods-navy text-sm font-medium">Current Venture</span>
            </div>
            <h1 className="font-display font-semibold text-display-xl text-nodods-navy mb-6 animate-fade-in-up delay-100">
              Rand4U
            </h1>
            <p className="text-2xl md:text-3xl font-display text-nodods-navy-light mb-6 animate-fade-in-up delay-200">
              &ldquo;Get your blockchain rewards now.&rdquo;
            </p>
            <p className="text-nodods-muted text-xl leading-relaxed mb-10 animate-fade-in-up delay-300">
              A multi-cryptocurrency referral hub where everyday people earn real digital currencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
              <Link
                href="https://rand4u.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-nodods-navy text-nodods-white font-medium rounded-full hover:bg-nodods-navy-light transition-colors text-center"
              >
                Visit rand4u.com
              </Link>
              <Link
                href="#how-it-works"
                className="px-8 py-4 border border-nodods-navy/20 text-nodods-navy rounded-full hover:bg-nodods-navy/5 transition-colors text-center"
              >
                How it works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding py-20 md:py-28 border-t border-nodods-navy/10 bg-nodods-light">
        <div className="page-max-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-semibold text-display-sm text-nodods-navy mb-6">
                What is Rand4U?
              </h2>
              <p className="text-nodods-muted text-lg leading-relaxed mb-6">
                Rand4U empowers everyday South Africans to participate in the cryptocurrency economy without any prior knowledge or upfront investment.
              </p>
              <p className="text-nodods-muted text-lg leading-relaxed">
                Through our platform, users complete simple actions and earn real rewards—not points or vouchers, but actual Rand and cryptocurrency they can withdraw to their bank accounts.
              </p>
            </div>
            <div className="bg-nodods-white rounded-3xl p-8 md:p-10 shadow-sm border border-nodods-navy/5">
              <h3 className="font-display font-medium text-lg mb-6 text-nodods-navy">Target Market</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-nodods-navy mt-2.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-nodods-navy">Young Adults (18-35)</p>
                    <p className="text-nodods-muted text-sm">Seeking exposure to digital currencies</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-nodods-navy mt-2.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-nodods-navy">Students & Job Seekers</p>
                    <p className="text-nodods-muted text-sm">Looking for accessible wealth-building opportunities</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-nodods-navy mt-2.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-nodods-navy">Geographic Focus</p>
                    <p className="text-nodods-muted text-sm">Johannesburg, Cape Town, Durban, Pretoria (expanding nationally)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section-padding py-20 md:py-28 bg-nodods-navy">
        <div className="page-max-width">
          <div className="text-center mb-16">
            <p className="text-nodods-white/60 font-medium text-sm uppercase tracking-widest mb-4">Getting Started</p>
            <h2 className="font-display font-semibold text-display-md text-nodods-white">How it works</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={item.step} className="relative">
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-nodods-white/30 to-transparent" />
                )}
                <div className="bg-nodods-white/10 rounded-2xl p-6 md:p-8 h-full border border-nodods-white/10">
                  <span className="font-display text-4xl font-semibold text-nodods-white/20 mb-4 block">{item.step}</span>
                  <h3 className="font-display font-medium text-lg text-nodods-white mb-3">{item.title}</h3>
                  <p className="text-nodods-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Offerings */}
      <section className="section-padding py-20 md:py-28 border-t border-nodods-navy/10 bg-nodods-white">
        <div className="page-max-width">
          <div className="text-center mb-16">
            <p className="text-nodods-navy font-medium text-sm uppercase tracking-widest mb-4">What We Offer</p>
            <h2 className="font-display font-semibold text-display-md text-nodods-navy">Current offerings</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {offerings.map((offering) => (
              <div key={offering.title} className="bg-nodods-light rounded-2xl p-8 hover:shadow-md transition-shadow border border-nodods-navy/5">
                <h3 className="font-display font-medium text-xl text-nodods-navy mb-4">{offering.title}</h3>
                <p className="text-nodods-muted leading-relaxed">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="section-padding py-20 md:py-28 bg-nodods-light">
        <div className="page-max-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-nodods-navy font-medium text-sm uppercase tracking-widest mb-4">Why Rand4U</p>
              <h2 className="font-display font-semibold text-display-sm text-nodods-navy mb-6">Our competitive advantage</h2>
              <p className="text-nodods-muted text-lg leading-relaxed">
                In a market flooded with scams and empty promises, Rand4U stands apart by offering real, verified opportunities backed by Nodods Holdings&apos; mission-driven approach.
              </p>
            </div>
            <div>
              <ul className="space-y-4">
                {advantages.map((advantage) => (
                  <li key={advantage} className="flex items-center gap-4 bg-nodods-white rounded-xl p-5 shadow-sm border border-nodods-navy/5">
                    <div className="w-8 h-8 rounded-full bg-nodods-navy/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-nodods-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium text-nodods-navy">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-20 md:py-28 border-t border-nodods-navy/10 bg-nodods-white">
        <div className="page-max-width text-center">
          <h2 className="font-display font-semibold text-display-sm text-nodods-navy mb-6">Start earning today</h2>
          <p className="text-nodods-muted text-lg max-w-2xl mx-auto mb-10">
            Join thousands of South Africans already earning real rewards through Rand4U. It&apos;s free to sign up and takes just minutes to get started.
          </p>
          <Link
            href="https://rand4u.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-nodods-navy text-nodods-white font-medium rounded-full hover:bg-nodods-navy-light transition-colors"
          >
            Get started at rand4u.com
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
