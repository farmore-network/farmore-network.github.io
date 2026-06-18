import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Farmore exists: blockchain payments are fragmented across a hundred chains and drained by bridge hacks. Farmore unifies identity into one name, one balance, one account.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding pt-32 pb-20 md:pt-40 md:pb-28 bg-nodods-white">
        <div className="page-max-width">
          <div className="max-w-4xl">
            <p className="text-nodods-navy font-medium text-sm uppercase tracking-widest mb-6 animate-fade-in">
              About Farmore
            </p>
            <h1 className="font-display font-semibold text-display-xl text-nodods-navy mb-8 animate-fade-in-up delay-100 text-balance">
              Making the bridge
              <br />
              <span className="text-nodods-navy-light">disappear.</span>
            </h1>
            <p className="text-nodods-muted text-xl md:text-2xl leading-relaxed animate-fade-in-up delay-200 max-w-3xl">
              Farmore is an open, chain-neutral protocol that gives every user
              one identity — one name that works everywhere value moves.
            </p>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="section-padding py-20 md:py-28 border-t border-nodods-navy/10 bg-nodods-light">
        <div className="page-max-width">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-nodods-navy font-medium text-sm uppercase tracking-widest mb-4">
                Why we exist
              </p>
              <h2 className="font-display font-semibold text-display-sm text-nodods-navy mb-6">
                Blockchains promised to fix payments. They haven&apos;t — yet.
              </h2>
              <p className="text-nodods-muted text-lg leading-relaxed mb-6">
                Money moves badly on chains today. The space fragmented into more
                than a hundred independent networks, each with its own addresses,
                assets, and formats. Sending value between them means picking a
                bridge — and bridges have proved among the highest-risk software
                in the industry.
              </p>
              <p className="text-nodods-muted text-lg leading-relaxed">
                Farmore exists to make that workflow disappear. You register a
                handle, type “send 100 USDC to @y,” and press send. The funds
                arrive on your recipient&apos;s preferred chain in seconds. One
                name, one balance, across every blockchain.
              </p>
            </div>
            <div className="bg-nodods-white rounded-3xl p-8 md:p-10 shadow-sm border border-nodods-navy/5">
              <h3 className="font-display font-medium text-lg mb-6 text-nodods-navy">
                The cost of fragmentation
              </h3>
              <dl className="space-y-5">
                <div className="flex items-baseline justify-between gap-4 pb-5 border-b border-nodods-navy/10">
                  <dd className="font-display text-3xl font-semibold text-nodods-navy">
                    $4.3B
                  </dd>
                  <dt className="text-nodods-muted text-right text-sm">
                    stolen in bridge hacks, 49 incidents (2021–2024)
                  </dt>
                </div>
                <div className="flex items-baseline justify-between gap-4 pb-5 border-b border-nodods-navy/10">
                  <dd className="font-display text-3xl font-semibold text-nodods-navy">
                    100+
                  </dd>
                  <dt className="text-nodods-muted text-right text-sm">
                    independent chains, each its own island
                  </dt>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dd className="font-display text-3xl font-semibold text-nodods-navy">
                    6.36%
                  </dd>
                  <dt className="text-nodods-muted text-right text-sm">
                    average cost of a $200 cross-border transfer
                  </dt>
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
                One name. One balance. One account — for every blockchain user.
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
                An open internet of value where identity, balance, and intent
                travel seamlessly across every chain.
              </p>
            </div>
          </div>

          {/* Philosophy */}
          <div className="mt-12 md:mt-16 text-center max-w-3xl mx-auto">
            <p className="text-nodods-white/60 font-medium text-sm uppercase tracking-widest mb-4">
              Our Philosophy
            </p>
            <p className="text-2xl md:text-3xl font-display font-medium text-nodods-white leading-snug">
              Identity should be open, portable, and self-custodial.
            </p>
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section className="section-padding py-20 md:py-28 border-t border-nodods-navy/10 bg-nodods-white">
        <div className="page-max-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-nodods-navy font-medium text-sm uppercase tracking-widest mb-4">
                At a glance
              </p>
              <h2 className="font-display font-semibold text-display-sm text-nodods-navy mb-6">
                Open. Chain-neutral. Self-custodial.
              </h2>
              <p className="text-nodods-muted text-lg leading-relaxed">
                Farmore is built to outlast any single chain. The native token,
                FAR, is earned only by verifiable work — never sold — and the
                protocol stays a public good, kept structurally separate from any
                company built around it.
              </p>
            </div>
            <div className="bg-nodods-light rounded-3xl p-8 md:p-10 border border-nodods-navy/5">
              <dl className="space-y-4">
                {[
                  ["Type", "Open, chain-neutral protocol"],
                  ["Identity", "One handle, self-custodial"],
                  ["Account", "Threshold signatures, no seed phrase"],
                  ["Token", "FAR — 100% earned, 1B cap"],
                  ["Status", "Litepaper v1 · June 2026"],
                ].map(([term, value]) => (
                  <div
                    key={term}
                    className="flex justify-between items-start gap-4 pb-4 border-b border-nodods-navy/10 last:border-0 last:pb-0"
                  >
                    <dt className="text-nodods-muted">{term}</dt>
                    <dd className="text-right font-medium text-nodods-navy">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="section-padding py-20 md:py-28 border-t border-nodods-navy/10 bg-nodods-light">
        <div className="page-max-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-semibold text-display-sm text-nodods-navy mb-8">
              The work that remains is the work of building it.
            </h2>
            <p className="text-nodods-muted text-lg leading-relaxed mb-8">
              The design is published. The protocol must now be implemented,
              tested, audited, and earned. We design for users, not platforms —
              and we ship in the open.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/protocol"
                className="px-8 py-4 bg-nodods-navy text-nodods-white font-medium rounded-full hover:bg-nodods-navy-light transition-colors"
              >
                Explore the protocol
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
