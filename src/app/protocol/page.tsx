import type { Metadata } from "next";
import Link from "next/link";

const LITEPAPER_URL =
  "https://github.com/farmore-network/farmore-litepaper/blob/main/Farmore-Litepaper.pdf";

export const metadata: Metadata = {
  title: "Protocol",
  description:
    "Farmore is an open, chain-neutral protocol for unified blockchain identity. One name. One balance. One account.",
};

const howItWorks = [
  {
    step: "01",
    title: "Register one handle",
    description: "Claim a name like @nododile once. Self-custodial, recoverable, portable across every chain.",
  },
  {
    step: "02",
    title: "Receive everywhere",
    description: "Anyone, on any chain, can send to your handle. Farmore resolves identity, not addresses.",
  },
  {
    step: "03",
    title: "Hold one balance",
    description: "See assets across every chain as one balance. Spend without thinking about which network they live on.",
  },
  {
    step: "04",
    title: "Send by name",
    description: "Move value by handle. No bridges to pick, no gas token to hold, no chain selection.",
  },
];

const offerings = [
  {
    title: "Unified Identity",
    description: "One handle that resolves across every supported chain. Self-custodial and recoverable, without seed phrases.",
  },
  {
    title: "One Balance",
    description: "A single view of value across chains. Farmore aggregates the math so you don't have to.",
  },
  {
    title: "Chain-Neutral by Default",
    description: "No favorite chain, no house token. New chains plug in without breaking existing handles.",
  },
];

const advantages = [
  "Open protocol, anyone can integrate",
  "Self-custodial — keys stay with users",
  "Chain-neutral — no preferred network",
  "No bridges, no gas-token juggling",
];

export default function ProtocolPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding pt-32 pb-20 md:pt-40 md:pb-28 bg-nodods-white">
        <div className="page-max-width">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-nodods-navy/10 rounded-full mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-nodods-navy rounded-full animate-pulse" />
              <span className="text-nodods-navy text-sm font-medium">The Protocol</span>
            </div>
            <h1 className="font-display font-semibold text-display-xl text-nodods-navy mb-6 animate-fade-in-up delay-100">
              Farmore
            </h1>
            <p className="text-2xl md:text-3xl font-display text-nodods-navy-light mb-6 animate-fade-in-up delay-200">
              &ldquo;One name. One balance. One account.&rdquo;
            </p>
            <p className="text-nodods-muted text-xl leading-relaxed mb-10 animate-fade-in-up delay-300">
              An open, chain-neutral protocol for unified blockchain identity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
              <Link
                href={LITEPAPER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-nodods-navy text-nodods-white font-medium rounded-full hover:bg-nodods-navy-light transition-colors text-center"
              >
                Read the litepaper
              </Link>
              <Link
                href="/waitlist.html"
                className="px-8 py-4 border border-nodods-navy/20 text-nodods-navy rounded-full hover:bg-nodods-navy/5 transition-colors text-center"
              >
                Join the waitlist
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
                What is Farmore?
              </h2>
              <p className="text-nodods-muted text-lg leading-relaxed mb-6">
                Farmore is an open, chain-neutral protocol for unified blockchain identity. Today&apos;s blockchain users juggle a dozen wallets, a dozen addresses, and a bridge every time value moves.
              </p>
              <p className="text-nodods-muted text-lg leading-relaxed">
                Farmore unifies all of it: you register one handle, like @nododile, and people send to that name across every blockchain. One balance, one account, one identity.
              </p>
            </div>
            <div className="bg-nodods-white rounded-3xl p-8 md:p-10 shadow-sm border border-nodods-navy/5">
              <h3 className="font-display font-medium text-lg mb-6 text-nodods-navy">Who it&apos;s for</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-nodods-navy mt-2.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-nodods-navy">Everyday users</p>
                    <p className="text-nodods-muted text-sm">Anyone tired of juggling wallets, bridges, and addresses</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-nodods-navy mt-2.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-nodods-navy">Wallets &amp; apps</p>
                    <p className="text-nodods-muted text-sm">Integrate Farmore handles for one-name onboarding</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-nodods-navy mt-2.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-nodods-navy">Chains &amp; rollups</p>
                    <p className="text-nodods-muted text-sm">Plug a new chain into the protocol without breaking handles</p>
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

      {/* What it gives you */}
      <section className="section-padding py-20 md:py-28 border-t border-nodods-navy/10 bg-nodods-white">
        <div className="page-max-width">
          <div className="text-center mb-16">
            <p className="text-nodods-navy font-medium text-sm uppercase tracking-widest mb-4">What it gives you</p>
            <h2 className="font-display font-semibold text-display-md text-nodods-navy">Current capabilities</h2>
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

      {/* Why Farmore */}
      <section className="section-padding py-20 md:py-28 bg-nodods-light">
        <div className="page-max-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-nodods-navy font-medium text-sm uppercase tracking-widest mb-4">Why Farmore</p>
              <h2 className="font-display font-semibold text-display-sm text-nodods-navy mb-6">Open, portable, self-custodial</h2>
              <p className="text-nodods-muted text-lg leading-relaxed">
                In a fragmented landscape of wallets, addresses, and bridges, Farmore offers a single open protocol that users own, anyone can integrate, and no one controls.
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
          <h2 className="font-display font-semibold text-display-sm text-nodods-navy mb-6">Get involved</h2>
          <p className="text-nodods-muted text-lg max-w-2xl mx-auto mb-10">
            Read the litepaper for the full protocol design, or join the waitlist to be notified when handles open for registration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={LITEPAPER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-nodods-navy text-nodods-white font-medium rounded-full hover:bg-nodods-navy-light transition-colors"
            >
              Read the litepaper
            </Link>
            <Link
              href="/waitlist.html"
              className="px-8 py-4 border border-nodods-navy/20 text-nodods-navy rounded-full hover:bg-nodods-navy/5 transition-colors"
            >
              Join the waitlist
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
