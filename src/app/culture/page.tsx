import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Culture",
  description: "How Farmore is built: open in public, chain-neutral by default, self-custodial without compromise.",
};

const values = [
  {
    title: "Open by Default",
    description: "Farmore is built in public. The protocol, the litepaper, and the design choices are all open for anyone to read, fork, and improve.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Chain-Neutral",
    description: "No favorite chain. No house token. Farmore works across every blockchain — and treats them all as first-class.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Self-Custodial",
    description: "Users hold their own keys, always. Farmore never takes custody. Recovery is designed for people, not contracts.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Long-Term Thinking",
    description: "Farmore is designed to outlast any single chain. We optimize for the next decade of blockchain, not the next cycle.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const principles = [
  "Open over closed",
  "Portable over locked-in",
  "Self-custodial over hosted",
  "Standards over silos",
  "Users over platforms",
];

export default function CulturePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding pt-32 pb-20 md:pt-40 md:pb-28 bg-nodods-white">
        <div className="page-max-width">
          <div className="max-w-4xl">
            <p className="text-nodods-navy font-medium text-sm uppercase tracking-widest mb-6 animate-fade-in">Our Culture</p>
            <h1 className="font-display font-semibold text-display-xl text-nodods-navy mb-8 animate-fade-in-up delay-100">
              The Farmore
              <br />
              <span className="text-nodods-navy-light">DNA</span>
            </h1>
            <p className="text-nodods-muted text-xl leading-relaxed animate-fade-in-up delay-200">
              Farmore is built on principles, not marketing. Our culture isn&apos;t a slogan — it&apos;s how we design, ship, and govern.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding py-20 md:py-28 border-t border-nodods-navy/10 bg-nodods-light">
        <div className="page-max-width">
          <div className="text-center mb-16">
            <p className="text-nodods-navy font-medium text-sm uppercase tracking-widest mb-4">What We Stand For</p>
            <h2 className="font-display font-semibold text-display-md text-nodods-navy">Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-nodods-white rounded-3xl p-8 md:p-10 hover:shadow-md transition-shadow border border-nodods-navy/5">
                <div className="w-14 h-14 rounded-2xl bg-nodods-navy/10 flex items-center justify-center text-nodods-navy mb-6">
                  {value.icon}
                </div>
                <h3 className="font-display font-semibold text-2xl text-nodods-navy mb-4">{value.title}</h3>
                <p className="text-nodods-muted text-lg leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Measure */}
      <section className="section-padding py-20 md:py-28 bg-nodods-navy">
        <div className="page-max-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-nodods-white/60 font-medium text-sm uppercase tracking-widest mb-4">Success Metrics</p>
              <h2 className="font-display font-semibold text-display-sm text-nodods-white mb-6">What we measure</h2>
              <p className="text-nodods-white/70 text-lg leading-relaxed mb-8">
                Farmore measures success in identities unified, value moved without friction, and chains supported as first-class. Not in seats sold or tokens minted.
              </p>
              <p className="text-2xl font-display font-medium text-nodods-white leading-relaxed">
                &ldquo;One name. One balance. One account — for every blockchain user.&rdquo;
              </p>
            </div>
            <div className="space-y-4">
              {principles.map((principle, index) => (
                <div key={principle} className="flex items-center gap-4 bg-nodods-white/10 rounded-xl p-5 border border-nodods-white/10">
                  <div className="w-8 h-8 rounded-full bg-nodods-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-nodods-white text-sm font-medium">{index + 1}</span>
                  </div>
                  <span className="font-medium text-nodods-white">{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="section-padding py-20 md:py-28 border-t border-nodods-navy/10 bg-nodods-white">
        <div className="page-max-width">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-nodods-navy font-medium text-sm uppercase tracking-widest mb-4">How We Work</p>
            <h2 className="font-display font-semibold text-display-sm text-nodods-navy mb-8">Team Culture</h2>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div className="bg-nodods-light rounded-2xl p-6 border border-nodods-navy/5">
                <h3 className="font-display font-medium text-lg text-nodods-navy mb-2">Mission-Driven</h3>
                <p className="text-nodods-muted text-sm">Every contributor is committed to unifying blockchain identity for everyone.</p>
              </div>
              <div className="bg-nodods-light rounded-2xl p-6 border border-nodods-navy/5">
                <h3 className="font-display font-medium text-lg text-nodods-navy mb-2">Open</h3>
                <p className="text-nodods-muted text-sm">We ship in the open. Issues, designs, and roadmap are public.</p>
              </div>
              <div className="bg-nodods-light rounded-2xl p-6 border border-nodods-navy/5">
                <h3 className="font-display font-medium text-lg text-nodods-navy mb-2">Standards-First</h3>
                <p className="text-nodods-muted text-sm">We prefer interoperable standards over proprietary lock-in, every time.</p>
              </div>
              <div className="bg-nodods-light rounded-2xl p-6 border border-nodods-navy/5">
                <h3 className="font-display font-medium text-lg text-nodods-navy mb-2">User-Focused</h3>
                <p className="text-nodods-muted text-sm">We design for the person sending value, not the platform routing it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stewardship Philosophy */}
      <section className="section-padding py-20 md:py-28 bg-nodods-light">
        <div className="page-max-width">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-nodods-navy font-medium text-sm uppercase tracking-widest mb-4">Our Approach</p>
            <h2 className="font-display font-semibold text-display-sm text-nodods-navy mb-6">Stewardship Philosophy</h2>
            <p className="text-nodods-muted text-lg leading-relaxed mb-8">
              We prioritize protocol integrity over rapid scaling. Farmore takes resources only from partners aligned with open identity and self-custody.
            </p>
            <p className="text-xl font-display font-medium text-nodods-navy">Open over closed. Always.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-20 md:py-28 border-t border-nodods-navy/10 bg-nodods-white">
        <div className="page-max-width text-center">
          <h2 className="font-display font-semibold text-display-sm text-nodods-navy mb-6">Ready to connect?</h2>
          <p className="text-nodods-muted text-lg max-w-2xl mx-auto mb-10">
            Whether you&apos;re interested in partnerships, integrations, or just want to learn more, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-nodods-navy text-nodods-white font-medium rounded-full hover:bg-nodods-navy-light transition-colors">
              Get in touch
            </Link>
            <Link href="/team" className="px-8 py-4 border border-nodods-navy/20 text-nodods-navy rounded-full hover:bg-nodods-navy/5 transition-colors">
              Meet our team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
