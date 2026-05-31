import type { Metadata } from "next";
import Link from "next/link";

const LITEPAPER_URL =
  "https://github.com/farmore-network/farmore-litepaper/blob/main/Farmore-Litepaper.pdf";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Farmore.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section-padding pt-32 pb-20 md:pt-40 md:pb-28 bg-nodods-white">
        <div className="page-max-width">
          <div className="max-w-4xl">
            <p className="text-nodods-navy font-medium text-sm uppercase tracking-widest mb-6">Contact Us</p>
            <h1 className="font-display font-semibold text-display-xl text-nodods-navy mb-8">
              Let&apos;s <span className="text-nodods-navy-light">connect</span>
            </h1>
            <p className="text-nodods-muted text-xl leading-relaxed">
              Whether you&apos;re interested in partnerships, media inquiries, or support — we&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 md:py-28 border-t border-nodods-navy/10 bg-nodods-light">
        <div className="page-max-width">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-nodods-white rounded-3xl p-8 md:p-10 border border-nodods-navy/5">
              <h3 className="font-display font-semibold text-2xl text-nodods-navy mb-2">General Inquiries</h3>
              <p className="text-nodods-muted mb-6">For general questions about Farmore</p>
              <a href="mailto:hello@farmore.network" className="text-nodods-navy font-medium">hello@farmore.network</a>
            </div>
            <div className="bg-nodods-white rounded-3xl p-8 md:p-10 border border-nodods-navy/5">
              <h3 className="font-display font-semibold text-2xl text-nodods-navy mb-2">Partnerships & Press</h3>
              <p className="text-nodods-muted mb-6">For partnerships, integrations, and media</p>
              <a href="mailto:hello@farmore.network" className="text-nodods-navy font-medium">hello@farmore.network</a>
            </div>
          </div>

          <div className="bg-nodods-navy rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-display font-semibold text-2xl text-nodods-white mb-4">Where to find us</h3>
                <p className="text-nodods-white/60 text-lg mb-2">Farmore</p>
                <p className="text-2xl font-display font-medium text-nodods-white">Open. Chain-neutral.<br />Built in public.</p>
              </div>
              <div className="space-y-6">
                <p className="text-nodods-white/70 leading-relaxed">
                  Farmore is developed openly. The litepaper, the codebase, and the protocol design are all available for anyone to read, fork, and build on.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="https://farmore.network" target="_blank" className="px-4 py-2 bg-nodods-white/10 rounded-full text-sm text-nodods-white">farmore.network</Link>
                  <Link href="https://github.com/farmore-network" target="_blank" className="px-4 py-2 bg-nodods-white/10 rounded-full text-sm text-nodods-white">GitHub</Link>
                  <Link href="https://x.com/farmore_network" target="_blank" className="px-4 py-2 bg-nodods-white/10 rounded-full text-sm text-nodods-white">X</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 md:py-28 border-t border-nodods-navy/10 bg-nodods-white">
        <div className="page-max-width text-center">
          <h2 className="font-display font-semibold text-display-sm text-nodods-navy mb-6">Learn more about us</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/about" className="px-8 py-4 bg-nodods-navy text-nodods-white font-medium rounded-full hover:bg-nodods-navy-light transition-colors">About Farmore</Link>
            <Link href={LITEPAPER_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-nodods-navy/20 text-nodods-navy rounded-full hover:bg-nodods-navy/5 transition-colors">Read the litepaper</Link>
          </div>
        </div>
      </section>
    </>
  );
}
