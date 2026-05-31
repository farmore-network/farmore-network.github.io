import Link from "next/link";

const LITEPAPER_URL =
  "https://github.com/farmore-network/farmore-litepaper/blob/main/Farmore-Litepaper.pdf";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center section-padding pt-32 pb-20 bg-nodods-white">
        <div className="page-max-width text-center">
          <div className="animate-fade-in">
            <p className="text-nodods-navy font-medium text-sm md:text-base uppercase tracking-widest mb-6">
              Farmore
            </p>
          </div>
          <h1 className="font-display font-semibold text-display-xl text-nodods-navy mb-8 animate-fade-in-up delay-100">
            Farmore
            <br />
            <span className="text-nodods-navy-light">
              One name. One balance. One account.
            </span>
          </h1>
          <p className="text-nodods-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fade-in-up delay-200 leading-relaxed">
            An open, chain-neutral protocol for unified blockchain identity.
            One name. One account. One balance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
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

      {/* What is Farmore */}
      <section className="section-padding py-24 md:py-32 border-t border-nodods-navy/10 bg-nodods-light">
        <div className="page-max-width">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-nodods-navy font-medium text-sm uppercase tracking-widest mb-4">
                What is Farmore
              </p>
              <h2 className="font-display font-semibold text-display-md text-nodods-navy mb-6">
                One identity across every chain
              </h2>
              <p className="text-nodods-muted text-lg leading-relaxed mb-6">
                Farmore is an open, chain-neutral protocol for unified
                blockchain identity. Today&apos;s blockchain users juggle a
                dozen wallets, a dozen addresses, and a bridge every time value
                moves. Farmore unifies all of it: you register one handle, like
                @nododile, and people send to that name across every
                blockchain. One balance, one account, one identity.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-nodods-navy font-medium group"
              >
                Read our story
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="bg-nodods-white rounded-3xl p-8 md:p-12 shadow-sm border border-nodods-navy/5">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6">
                  <p className="font-display text-4xl md:text-5xl font-semibold text-nodods-navy mb-2">
                    1
                  </p>
                  <p className="text-nodods-muted text-sm">Handle</p>
                </div>
                <div className="text-center p-6">
                  <p className="font-display text-4xl md:text-5xl font-semibold text-nodods-navy mb-2">
                    1
                  </p>
                  <p className="text-nodods-muted text-sm">Balance</p>
                </div>
                <div className="text-center p-6">
                  <p className="font-display text-4xl md:text-5xl font-semibold text-nodods-navy mb-2">
                    1
                  </p>
                  <p className="text-nodods-muted text-sm">Account</p>
                </div>
                <div className="text-center p-6">
                  <p className="font-display text-4xl md:text-5xl font-semibold text-nodods-navy mb-2">
                    ∞
                  </p>
                  <p className="text-nodods-muted text-sm">Chains</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Protocol */}
      <section className="section-padding py-24 md:py-32 bg-nodods-navy">
        <div className="page-max-width">
          <div className="text-center mb-16">
            <p className="text-nodods-white/60 font-medium text-sm uppercase tracking-widest mb-4">
              The Protocol
            </p>
            <h2 className="font-display font-semibold text-display-lg text-nodods-white">
              Farmore
            </h2>
          </div>
          <div className="bg-nodods-white/10 rounded-3xl p-8 md:p-16 border border-nodods-white/20">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-2xl md:text-3xl font-display font-medium text-nodods-white mb-6">
                &ldquo;One name. One balance. One account.&rdquo;
              </p>
              <p className="text-nodods-white/70 text-lg leading-relaxed mb-8">
                Register one handle. Send and receive across every chain. No
                bridges to choose, no gas token to hold, no seed phrase to
                lose.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/protocol"
                  className="px-8 py-4 bg-nodods-white text-nodods-navy font-medium rounded-full hover:bg-nodods-light transition-colors"
                >
                  Learn more
                </Link>
                <Link
                  href={LITEPAPER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-nodods-white/30 text-nodods-white rounded-full hover:bg-nodods-white/10 transition-colors inline-flex items-center gap-2"
                >
                  Read the litepaper
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding py-24 md:py-32 border-t border-nodods-navy/10 bg-nodods-white">
        <div className="page-max-width text-center">
          <h2 className="font-display font-semibold text-display-md text-nodods-navy mb-6">
            Open. Chain-neutral. Self-custodial.
          </h2>
          <p className="text-nodods-muted text-lg max-w-2xl mx-auto mb-12">
            Farmore measures success by users empowered, identities unified,
            and value moved without friction.
          </p>
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-nodods-navy font-medium group"
          >
            Meet our team
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
