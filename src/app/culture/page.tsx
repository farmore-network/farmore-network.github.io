import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Culture",
  description: "Discover Nodods Holdings' core values and DNA. Mission alignment, unconventional excellence, community first, and long-term thinking.",
};

const values = [
  {
    title: "Mission Alignment",
    description: "Every product, every decision, every hire must serve our mission: to be the world's best for everyday people. If it doesn't serve everyday people, we don't do it.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Unconventional Excellence",
    description: "We reject conventional wisdom when it fails everyday people. If it's been done before and hasn't worked for our audience, we innovate differently.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Community First",
    description: "We build with our users. We foster constructive, collaborative environments where everyday people feel heard, valued, and empowered.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Long-Term Thinking",
    description: "We set for the future and optimize for the present. We're patient, principled, and relentlessly focused on building something that lasts.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const principles = [
  "Values over extraction",
  "Impact over quarterly returns",
  "Lives improved over profit margins",
  "Families strengthened over growth metrics",
  "Communities empowered over market share",
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
              The Nodods
              <br />
              <span className="text-nodods-navy-light">DNA</span>
            </h1>
            <p className="text-nodods-muted text-xl leading-relaxed animate-fade-in-up delay-200">
              Nodods Holdings operates with unwavering principles that guide every decision. Our culture isn&apos;t just what we say—it&apos;s what we do, every single day.
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
                We measure success differently. Our metrics aren&apos;t about maximizing shareholder value—they&apos;re about maximizing human value.
              </p>
              <p className="text-2xl font-display font-medium text-nodods-white leading-relaxed">
                &ldquo;We measure success not by quarterly returns, but by lives improved, families strengthened, and communities empowered.&rdquo;
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
                <p className="text-nodods-muted text-sm">Every team member is deeply committed to serving everyday people.</p>
              </div>
              <div className="bg-nodods-light rounded-2xl p-6 border border-nodods-navy/5">
                <h3 className="font-display font-medium text-lg text-nodods-navy mb-2">Collaborative</h3>
                <p className="text-nodods-muted text-sm">Great ideas come from anywhere, and everyone&apos;s voice matters.</p>
              </div>
              <div className="bg-nodods-light rounded-2xl p-6 border border-nodods-navy/5">
                <h3 className="font-display font-medium text-lg text-nodods-navy mb-2">Unconventional</h3>
                <p className="text-nodods-muted text-sm">We challenge the status quo and find new ways to serve.</p>
              </div>
              <div className="bg-nodods-light rounded-2xl p-6 border border-nodods-navy/5">
                <h3 className="font-display font-medium text-lg text-nodods-navy mb-2">Impact-Focused</h3>
                <p className="text-nodods-muted text-sm">We measure our work by the real impact it has on real people.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="section-padding py-20 md:py-28 bg-nodods-light">
        <div className="page-max-width">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-nodods-navy font-medium text-sm uppercase tracking-widest mb-4">Our Approach</p>
            <h2 className="font-display font-semibold text-display-sm text-nodods-navy mb-6">Investment Philosophy</h2>
            <p className="text-nodods-muted text-lg leading-relaxed mb-8">
              We prioritize mission preservation over rapid scaling. We will accept funding only from partners who align with our mission to be the world&apos;s best for everyday people.
            </p>
            <p className="text-xl font-display font-medium text-nodods-navy">Values over extraction. Always.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-20 md:py-28 border-t border-nodods-navy/10 bg-nodods-white">
        <div className="page-max-width text-center">
          <h2 className="font-display font-semibold text-display-sm text-nodods-navy mb-6">Ready to connect?</h2>
          <p className="text-nodods-muted text-lg max-w-2xl mx-auto mb-10">
            Whether you&apos;re interested in partnerships, media inquiries, or just want to learn more, we&apos;d love to hear from you.
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
