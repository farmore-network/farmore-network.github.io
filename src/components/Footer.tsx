import Link from "next/link";
import Image from "next/image";
import { ImageLogo } from "@/assets/images";

const LITEPAPER_URL =
  "https://github.com/farmore-network/farmore-litepaper/blob/main/Farmore-Litepaper.pdf";

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/team", label: "Leadership" },
    { href: "/culture", label: "Culture" },
    { href: "/contact", label: "Contact" },
  ],
  resources: [
    { href: "/protocol", label: "Protocol" },
    { href: LITEPAPER_URL, label: "Litepaper", external: true },
    { href: "https://github.com/farmore-network", label: "GitHub", external: true },
  ],
  connect: [
    { href: "mailto:hello@farmore.network", label: "hello@farmore.network" },
    { href: "https://x.com/farmore_network", label: "X", external: true },
  ],
};

export function Footer() {
  return (
    <footer className="bg-nodods-navy text-nodods-white">
      <div className="section-padding page-max-width py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 mb-4"
            >
              <Image
                src={ImageLogo.src}
                alt={ImageLogo.alt}
                width={32}
                height={20}
                className="h-5 w-auto"
              />
              <span className="font-display font-semibold text-2xl tracking-tight">
                Farmore
              </span>
            </Link>
            <p className="text-nodods-white/60 text-sm leading-relaxed max-w-xs">
              One name. One balance. One account.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-medium text-sm mb-4 text-nodods-white/50 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-nodods-white/70 hover:text-nodods-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-medium text-sm mb-4 text-nodods-white/50 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-nodods-white/70 hover:text-nodods-white transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && (
                      <svg
                        className="w-3 h-3"
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
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-medium text-sm mb-4 text-nodods-white/50 uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-nodods-white/70 hover:text-nodods-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-nodods-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-nodods-white/50">
            © 2026 Farmore. All rights reserved.
          </p>
          <p className="text-sm text-nodods-white/50">
            Open. Chain-neutral.
          </p>
        </div>
      </div>
    </footer>
  );
}
