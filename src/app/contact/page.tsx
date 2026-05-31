import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Nodods Holdings. Based in Cape Town, South Africa.",
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
              Whether you&apos;re interested in partnerships, media inquiries, or support—we&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding py-20 md:py-28 border-t border-nodods-navy/10 bg-nodods-light">
        <div className="page-max-width">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-nodods-white rounded-3xl p-8 md:p-10 border border-nodods-navy/5">
              <h3 className="font-display font-semibold text-2xl text-nodods-navy mb-2">General Inquiries</h3>
              <p className="text-nodods-muted mb-6">For general questions about Nodods Holdings</p>
              <a href="mailto:reply@nodods.com" className="text-nodods-navy font-medium">reply@nodods.com</a>
            </div>
            <div className="bg-nodods-white rounded-3xl p-8 md:p-10 border border-nodods-navy/5">
              <h3 className="font-display font-semibold text-2xl text-nodods-navy mb-2">Rand4U Support</h3>
              <p className="text-nodods-muted mb-6">Questions, partnerships, and media for Rand4U</p>
              <a href="mailto:reply@rand4u.com" className="text-nodods-navy font-medium">reply@rand4u.com</a>
            </div>
          </div>

          <div className="bg-nodods-navy rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-display font-semibold text-2xl text-nodods-white mb-4">Headquarters</h3>
                <p className="text-nodods-white/60 text-lg mb-2">Nodods Holdings (Pty) Ltd</p>
                <p className="text-2xl font-display font-medium text-nodods-white">Cape Town, Western Cape<br />South Africa</p>
              </div>
              <div className="space-y-6">
                <p className="text-nodods-white/70 leading-relaxed">
                  We&apos;re proudly based in Cape Town, South Africa, committed to serving everyday South Africans.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="https://nodods.com" target="_blank" className="px-4 py-2 bg-nodods-white/10 rounded-full text-sm text-nodods-white">nodods.com</Link>
                  <Link href="https://rand4u.com" target="_blank" className="px-4 py-2 bg-nodods-white/10 rounded-full text-sm text-nodods-white">rand4u.com</Link>
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
            <Link href="/about" className="px-8 py-4 bg-nodods-navy text-nodods-white font-medium rounded-full hover:bg-nodods-navy-light transition-colors">About Nodods</Link>
            <Link href="/rand4u" className="px-8 py-4 border border-nodods-navy/20 text-nodods-navy rounded-full hover:bg-nodods-navy/5 transition-colors">Explore Rand4U</Link>
          </div>
        </div>
      </section>
    </>
  );
}
