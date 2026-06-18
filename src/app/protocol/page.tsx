import type { Metadata } from "next";
import Link from "next/link";

const LITEPAPER_URL =
  "https://github.com/farmore-network/farmore-litepaper/blob/main/Farmore-Litepaper.pdf";

export const metadata: Metadata = {
  title: "Protocol",
  description:
    "How Farmore works: a chain-agnostic core, per-chain adapters, solver-settled cross-chain intents, an open identity layer, and a fair-launch token earned only by verifiable work.",
};

const adapters = [
  { name: "EVM adapter", chains: "Ethereum, Base…" },
  { name: "Solana adapter", chains: "Solana mainnet" },
  { name: "Bitcoin adapter", chains: "Bitcoin / L2s" },
];

const promises = [
  {
    title: "One name",
    description:
      "Each user registers a unique handle, claimed first-come, that resolves to a single account regardless of which chain a transaction targets.",
  },
  {
    title: "One balance",
    description:
      "The wallet aggregates holdings across every chain into a single total — value you can see and spend without tracking which network it lives on.",
  },
  {
    title: "One account",
    description:
      "Secured by a threshold signature scheme: a quorum of your devices signs, not one seed phrase. Lose a device and recovery proceeds through the rest.",
  },
];

const identityLayer = [
  {
    title: "Public resolution",
    description:
      "Any wallet, exchange, or dApp can look up a handle and read its current cross-chain account state.",
  },
  {
    title: "Send to @handle",
    description:
      "Any application can offer “send to @handle” payments — routed through the solver network, no cross-chain logic of its own.",
  },
  {
    title: "Sign in with your handle",
    description:
      "Authenticate users by handle ownership, in the spirit of Sign-in with Ethereum — no custodial accounts required.",
  },
];

const constraints = [
  {
    label: "Constraint one",
    title: "Sub-linear rewards",
    description:
      "Reward grows as the square root of the bonded amount. Bond 100× more capital and earn only 10× more FAR — the gap is bounded, so capital can’t dominate issuance.",
    formula: "reward = base × √(bond / reference)",
  },
  {
    label: "Constraint two",
    title: "Halving epochs",
    description:
      "FAR minted per epoch halves on a schedule like Bitcoin’s halvings. Early dominance is self-limiting because the prize shrinks faster than any actor can accumulate it.",
  },
  {
    label: "Constraint three",
    title: "Per-identity cap",
    description:
      "Each handle is a unique identity. A per-identity ceiling on what one account can mint per epoch caps the worst case even if the first two were circumvented.",
  },
];

const stages = [
  {
    stage: "Stage 1",
    title: "Establish the core",
    description:
      "The chain-agnostic core and adapter interface are open-sourced, three reference adapters prove the model, and the wallet launches on testnets. No token yet.",
  },
  {
    stage: "Stage 2",
    title: "Run the first solver",
    description:
      "A reference solver bonds external collateral to make real cross-chain transfers instant. The protocol runs end-to-end on testnet.",
  },
  {
    stage: "Stage 3",
    title: "Activate FAR",
    description:
      "The token contract deploys on mainnet with the solver-mint mechanism live from the first block. Genesis supply is zero; fairness constraints enforced from the first mint.",
  },
  {
    stage: "Stage 4",
    title: "Open the network",
    description:
      "Independent solvers join and the community contributes new adapters. Anyone willing to bond capital and fulfil intents can operate the protocol.",
  },
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
              <span className="text-nodods-navy text-sm font-medium">
                The Protocol
              </span>
            </div>
            <h1 className="font-display font-semibold text-display-xl text-nodods-navy mb-6 animate-fade-in-up delay-100 text-balance">
              One identity layer for every chain.
            </h1>
            <p className="text-nodods-muted text-xl leading-relaxed mb-10 animate-fade-in-up delay-200 max-w-2xl">
              Farmore places a chain-agnostic identity and routing layer above
              the blockchains, and pays solvers to bridge the timing gaps with
              their own capital. Here is how it fits together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <Link
                href={LITEPAPER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-nodods-navy text-nodods-white font-medium rounded-full hover:bg-nodods-navy-light transition-colors text-center"
              >
                Read the litepaper
              </Link>
              <Link
                href="/waitlist"
                className="px-8 py-4 border border-nodods-navy/20 text-nodods-navy rounded-full hover:bg-nodods-navy/5 transition-colors text-center"
              >
                Join the waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section-padding py-20 md:py-28 border-t border-nodods-navy/10 bg-nodods-light">
        <div className="page-max-width">
          <div className="max-w-3xl mb-14">
            <p className="text-nodods-navy font-medium text-sm uppercase tracking-widest mb-4">
              Architecture
            </p>
            <h2 className="font-display font-semibold text-display-sm text-nodods-navy mb-6">
              A chain-agnostic core, swappable adapters
            </h2>
            <p className="text-nodods-muted text-lg leading-relaxed">
              The core understands handles, intents, routing, and the token — but
              nothing about any single chain&apos;s transaction format. Each chain
              is integrated by an adapter that speaks its native dialect behind a
              uniform interface. Adding a new chain means writing a new adapter,
              never touching the core.
            </p>
          </div>

          {/* Core + adapters diagram */}
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-10 items-center">
            <div className="space-y-3">
              {adapters.map((adapter) => (
                <div
                  key={adapter.name}
                  className="bg-nodods-white rounded-2xl p-5 border border-nodods-navy/5 flex items-center justify-between gap-4"
                >
                  <span className="font-display font-medium text-nodods-navy">
                    {adapter.name}
                  </span>
                  <span className="text-nodods-muted text-sm text-right">
                    {adapter.chains}
                  </span>
                </div>
              ))}
            </div>
            <div className="hidden lg:flex flex-col items-center text-nodods-muted">
              <span className="text-xs uppercase tracking-widest mb-2">
                uniform interface
              </span>
              <svg className="w-16 h-6" fill="none" stroke="currentColor" viewBox="0 0 64 24">
                <path strokeLinecap="round" strokeWidth={1.5} d="M0 12h60m0 0l-6-5m6 5l-6 5" />
              </svg>
            </div>
            <div className="bg-nodods-navy rounded-3xl p-8 text-center">
              <p className="font-display font-semibold text-2xl text-nodods-white mb-2">
                Core
              </p>
              <p className="text-nodods-white/60 text-sm">
                handles · intents · token
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three promises */}
      <section className="section-padding py-20 md:py-28 bg-nodods-white border-t border-nodods-navy/10">
        <div className="page-max-width">
          <div className="text-center mb-16">
            <p className="text-nodods-navy font-medium text-sm uppercase tracking-widest mb-4">
              What the wallet promises
            </p>
            <h2 className="font-display font-semibold text-display-md text-nodods-navy">
              One name. One balance. One account.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {promises.map((promise) => (
              <div
                key={promise.title}
                className="bg-nodods-light rounded-3xl p-8 border border-nodods-navy/5"
              >
                <h3 className="font-display font-semibold text-2xl text-nodods-navy mb-4">
                  {promise.title}
                </h3>
                <p className="text-nodods-muted leading-relaxed">
                  {promise.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solvers */}
      <section className="section-padding py-20 md:py-28 bg-nodods-navy">
        <div className="page-max-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-nodods-white/60 font-medium text-sm uppercase tracking-widest mb-4">
                Instant settlement
              </p>
              <h2 className="font-display font-semibold text-display-sm text-nodods-white mb-6">
                Solvers move value at the speed of intent
              </h2>
              <p className="text-nodods-white/70 text-lg leading-relaxed mb-6">
                You express an intent — “send 100 USDC to @y.” A solver, holding
                pre-positioned capital across chains, pays your recipient
                instantly from its own reserves, then collects reimbursement from
                the source chain afterward.
              </p>
              <p className="text-nodods-white/70 text-lg leading-relaxed">
                Solvers compete for every fulfilment, so you get the best route
                automatically. Bad actors are penalised through loss of their
                posted bond.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { n: "1", t: "You declare intent", d: "“Send 100 USDC to @y.”" },
                { n: "2", t: "A solver fronts it", d: "Recipient is paid instantly on their chain." },
                { n: "3", t: "Solver is reimbursed", d: "Settled from the source chain afterward." },
              ].map((row) => (
                <div
                  key={row.n}
                  className="flex items-start gap-4 bg-nodods-white/10 rounded-2xl p-5 border border-nodods-white/10"
                >
                  <span className="w-9 h-9 rounded-full bg-nodods-white/15 flex items-center justify-center flex-shrink-0 font-display font-semibold text-nodods-white">
                    {row.n}
                  </span>
                  <div>
                    <p className="font-medium text-nodods-white">{row.t}</p>
                    <p className="text-nodods-white/60 text-sm">{row.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open identity layer */}
      <section className="section-padding py-20 md:py-28 bg-nodods-light border-t border-nodods-navy/10">
        <div className="page-max-width">
          <div className="max-w-3xl mb-14">
            <p className="text-nodods-navy font-medium text-sm uppercase tracking-widest mb-4">
              Open by design
            </p>
            <h2 className="font-display font-semibold text-display-sm text-nodods-navy mb-6">
              An identity layer any app can build on
            </h2>
            <p className="text-nodods-muted text-lg leading-relaxed">
              Farmore handles aren&apos;t exclusive to the Farmore wallet. The
              resolution format is intended as an open standard, so a handle is
              recognised natively wherever it appears — and every integration
              makes every handle more valuable.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {identityLayer.map((item) => (
              <div
                key={item.title}
                className="bg-nodods-white rounded-3xl p-8 border border-nodods-navy/5"
              >
                <h3 className="font-display font-medium text-xl text-nodods-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-nodods-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAR & fair launch */}
      <section className="section-padding py-20 md:py-28 bg-nodods-white border-t border-nodods-navy/10">
        <div className="page-max-width">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 mb-16 items-center">
            <div>
              <p className="text-nodods-navy font-medium text-sm uppercase tracking-widest mb-4">
                The FAR token
              </p>
              <h2 className="font-display font-semibold text-display-sm text-nodods-navy mb-6">
                Minted only by verifiable work
              </h2>
              <p className="text-nodods-muted text-lg leading-relaxed mb-6">
                FAR is minted automatically when a solver completes a cross-chain
                intent — never by any person or entity. No premine, no insider
                allocation, no token sale. Every holder earns it under identical
                rules, the way Bitcoin pays for proof-of-work.
              </p>
              <div className="inline-flex flex-col gap-1 bg-nodods-light rounded-2xl p-6 border border-nodods-navy/5">
                <span className="font-display text-3xl font-semibold text-nodods-navy">
                  1,000,000,000
                </span>
                <span className="text-nodods-muted text-sm uppercase tracking-widest">
                  FAR cap — then fees take over
                </span>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {constraints.map((c) => (
                <div
                  key={c.title}
                  className="bg-nodods-light rounded-2xl p-6 border border-nodods-navy/5 flex flex-col"
                >
                  <span className="text-nodods-muted text-xs uppercase tracking-widest mb-3">
                    {c.label}
                  </span>
                  <h3 className="font-display font-medium text-lg text-nodods-navy mb-3">
                    {c.title}
                  </h3>
                  <p className="text-nodods-muted text-sm leading-relaxed">
                    {c.description}
                  </p>
                  {c.formula && (
                    <code className="mt-4 text-xs text-nodods-navy bg-nodods-navy/5 rounded-lg px-3 py-2 font-mono">
                      {c.formula}
                    </code>
                  )}
                </div>
              ))}
            </div>
          </div>
          <p className="text-nodods-muted leading-relaxed max-w-3xl">
            Solvers don&apos;t need FAR to begin — they bond existing assets like
            USDC, ETH, or BTC and earn FAR for the work. Once the cap is reached,
            no new FAR is ever minted; solvers are paid from transaction fees
            instead, under the same fairness rules.
          </p>
        </div>
      </section>

      {/* Build sequence */}
      <section className="section-padding py-20 md:py-28 bg-nodods-navy">
        <div className="page-max-width">
          <div className="text-center mb-16">
            <p className="text-nodods-white/60 font-medium text-sm uppercase tracking-widest mb-4">
              Build sequence
            </p>
            <h2 className="font-display font-semibold text-display-md text-nodods-white">
              Built in four stages
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((s) => (
              <div
                key={s.stage}
                className="bg-nodods-white/10 rounded-2xl p-6 border border-nodods-white/10 h-full"
              >
                <span className="text-nodods-white/50 text-xs uppercase tracking-widest">
                  {s.stage}
                </span>
                <h3 className="font-display font-medium text-lg text-nodods-white mt-2 mb-3">
                  {s.title}
                </h3>
                <p className="text-nodods-white/60 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-20 md:py-28 bg-nodods-white border-t border-nodods-navy/10">
        <div className="page-max-width text-center max-w-3xl mx-auto">
          <h2 className="font-display font-semibold text-display-sm text-nodods-navy mb-6">
            This is a design, openly published.
          </h2>
          <p className="text-nodods-muted text-lg mb-10">
            The litepaper has the full protocol design, the fair-launch math, and
            the limitations. The work that remains is the work of building it — we
            invite scrutiny.
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
              href="/waitlist"
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
