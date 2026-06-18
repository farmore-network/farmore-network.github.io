import Link from "next/link";

const LITEPAPER_URL =
  "https://github.com/farmore-network/farmore-litepaper/blob/main/Farmore-Litepaper.pdf";

const promises = [
  { title: "One name", line: "Your handle, on every chain." },
  { title: "One balance", line: "All your value, one number." },
  { title: "One account", line: "Your keys — no seed phrase." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding pt-32 pb-20 md:pt-40 md:pb-28 bg-nodods-white overflow-hidden">
        <div className="page-max-width">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-nodods-navy/10 rounded-full mb-8 animate-fade-in">
                <span className="w-2 h-2 bg-nodods-navy rounded-full animate-pulse" />
                <span className="text-nodods-navy text-sm font-medium">
                  Chain-neutral identity protocol
                </span>
              </div>
              <h1 className="font-display font-semibold text-display-xl text-nodods-navy mb-6 animate-fade-in-up delay-100 text-balance">
                Send to a name,
                <br />
                <span className="text-nodods-navy-light">not an address.</span>
              </h1>
              <p className="text-nodods-muted text-lg md:text-xl leading-relaxed max-w-xl mb-10 animate-fade-in-up delay-200">
                One handle for every blockchain. No bridges, no addresses, no
                gas tokens. Just type a name and send.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                <Link
                  href="/waitlist"
                  className="px-8 py-4 bg-nodods-navy text-nodods-white font-medium rounded-full hover:bg-nodods-navy-light transition-colors text-center"
                >
                  Join the waitlist
                </Link>
                <Link
                  href={LITEPAPER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-nodods-navy/20 text-nodods-navy rounded-full hover:bg-nodods-navy/5 transition-colors text-center"
                >
                  Read the litepaper
                </Link>
              </div>
            </div>

            {/* Send-by-name demo */}
            <div className="animate-fade-in-up delay-300">
              <div className="bg-nodods-white rounded-3xl shadow-xl border border-nodods-navy/10 p-6 md:p-8 max-w-md mx-auto">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-nodods-navy/10 flex items-center justify-center font-display font-semibold text-nodods-navy text-sm">
                      F
                    </span>
                    <span className="font-display font-medium text-nodods-navy">
                      Farmore
                    </span>
                  </div>
                  <span className="text-xs text-nodods-muted bg-nodods-light px-3 py-1 rounded-full">
                    Send
                  </span>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="bg-nodods-light rounded-2xl p-4 flex items-baseline justify-between">
                    <span className="font-display text-3xl font-semibold text-nodods-navy">
                      100
                    </span>
                    <span className="text-nodods-muted font-medium">USDC</span>
                  </div>
                  <div className="bg-nodods-light rounded-2xl p-4 flex items-center justify-between">
                    <span className="text-nodods-muted text-sm">To</span>
                    <span className="font-display text-xl font-medium text-nodods-navy">
                      @amara
                    </span>
                  </div>
                </div>
                <div className="w-full py-4 rounded-2xl bg-nodods-navy text-nodods-white text-center font-medium mb-5">
                  Send
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="w-5 h-5 rounded-full bg-nodods-navy/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-nodods-navy"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <p className="text-nodods-muted leading-relaxed">
                    Delivered in seconds, on Amara&apos;s chain of choice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The big idea */}
      <section className="section-padding py-28 md:py-40 bg-nodods-navy">
        <div className="page-max-width text-center max-w-4xl mx-auto">
          <p className="text-nodods-white/50 font-medium text-sm uppercase tracking-widest mb-8">
            The idea
          </p>
          <p className="font-display font-semibold text-display-lg text-nodods-white text-balance">
            Crypto should feel like sending a message.
            <br />
            <span className="text-nodods-white/50">
              One name. Any chain. Done.
            </span>
          </p>
        </div>
      </section>

      {/* Three promises */}
      <section className="section-padding py-24 md:py-32 bg-nodods-white">
        <div className="page-max-width">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8 text-center">
            {promises.map((promise) => (
              <div key={promise.title}>
                <h2 className="font-display font-semibold text-display-sm text-nodods-navy mb-2">
                  {promise.title}
                </h2>
                <p className="text-nodods-muted text-lg">{promise.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="section-padding py-24 md:py-32 bg-nodods-light border-y border-nodods-navy/10">
        <div className="page-max-width text-center max-w-3xl mx-auto">
          <p className="font-display font-semibold text-display-md text-nodods-navy mb-6 text-balance">
            100% earned. Never sold.
          </p>
          <p className="text-nodods-muted text-lg leading-relaxed">
            No premine. No insider allocation. No token sale. The network&apos;s
            token is earned only by the work that runs it — capped at one
            billion, forever. Fairness the protocol enforces, not a promise.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding py-28 md:py-40 bg-nodods-white text-center">
        <div className="page-max-width max-w-3xl mx-auto">
          <h2 className="font-display font-semibold text-display-lg text-nodods-navy mb-6 text-balance">
            Your name is waiting.
          </h2>
          <p className="text-nodods-muted text-lg md:text-xl mb-12">
            Be early. Claim your handle the moment registration opens.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/waitlist"
              className="px-10 py-4 bg-nodods-navy text-nodods-white font-medium rounded-full hover:bg-nodods-navy-light transition-colors"
            >
              Join the waitlist
            </Link>
            <Link
              href="/protocol"
              className="px-10 py-4 border border-nodods-navy/20 text-nodods-navy rounded-full hover:bg-nodods-navy/5 transition-colors"
            >
              How it works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
