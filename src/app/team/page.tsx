import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the founder building Farmore — Thandile Nododile, PhD Researcher in Computer Science and former AWS engineer, on a mission to unify blockchain identity.",
};

type SocialType = "linkedin" | "github";

interface SocialLink {
  type: SocialType;
  href: string;
}

interface TeamMember {
  name: string;
  role: string;
  qualification: string;
  commitment: string;
  bio: string;
  initials: string;
  links: SocialLink[];
}

const leadership: TeamMember[] = [
  {
    name: "Thandile Nododile",
    role: "Founder",
    qualification: "PhD Researcher · Computer Science",
    commitment: "Full-time",
    bio: "PhD Researcher in Computer Science at the University of the Western Cape, and a former Software Development Engineer at AWS. Thandile leads Farmore's protocol design and the mission to give every blockchain user one name, one balance, and one account.",
    initials: "TN",
    links: [
      { type: "linkedin", href: "https://www.linkedin.com/in/nododile/" },
      { type: "github", href: "https://github.com/nododile" },
    ],
  },
];

const socialMeta: Record<SocialType, { label: string; path: string }> = {
  linkedin: {
    label: "LinkedIn",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z",
  },
  github: {
    label: "GitHub",
    path: "M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.21 11.19.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.72-4.04-1.59-4.04-1.59-.55-1.38-1.34-1.75-1.34-1.75-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.82 2.81 1.3 3.5.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.32-5.47-5.87 0-1.3.47-2.36 1.24-3.19-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.22a11.5 11.5 0 0 1 6 0c2.28-1.54 3.29-1.22 3.29-1.22.66 1.64.24 2.86.12 3.16.77.83 1.24 1.89 1.24 3.19 0 4.56-2.81 5.56-5.49 5.86.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.29C24 5.78 18.63.5 12 .5z",
  },
};

function FounderCard({ member }: { member: TeamMember }) {
  return (
    <article className="bg-nodods-white rounded-3xl p-8 md:p-10 border border-nodods-navy/5 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="w-20 h-20 rounded-2xl bg-nodods-navy/10 flex items-center justify-center flex-shrink-0">
          <span className="font-display font-semibold text-2xl text-nodods-navy">
            {member.initials}
          </span>
        </div>
        <div>
          <h3 className="font-display font-semibold text-2xl text-nodods-navy">
            {member.name}
          </h3>
          <p className="text-nodods-navy-light font-medium mb-3">
            {member.role}
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-nodods-navy/10 text-nodods-navy">
              {member.qualification}
            </span>
            <span className="text-xs font-medium px-3 py-1 rounded-full border border-nodods-navy/15 text-nodods-muted">
              {member.commitment}
            </span>
          </div>
        </div>
      </div>

      <p className="text-nodods-muted leading-relaxed mt-6">{member.bio}</p>

      <div className="flex items-center gap-3 mt-6">
        {member.links.map((link) => {
          const meta = socialMeta[link.type];
          return (
            <a
              key={link.type}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on ${meta.label}`}
              className="w-10 h-10 rounded-full border border-nodods-navy/15 flex items-center justify-center text-nodods-navy hover:bg-nodods-navy hover:text-nodods-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d={meta.path} />
              </svg>
            </a>
          );
        })}
      </div>
    </article>
  );
}

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding pt-32 pb-20 md:pt-40 md:pb-28 bg-nodods-white">
        <div className="page-max-width">
          <div className="max-w-4xl">
            <p className="text-nodods-navy font-medium text-sm uppercase tracking-widest mb-6 animate-fade-in">
              Our Team
            </p>
            <h1 className="font-display font-semibold text-display-xl text-nodods-navy mb-8 animate-fade-in-up delay-100 text-balance">
              Meet the founder
              <br />
              <span className="text-nodods-navy-light">building Farmore</span>
            </h1>
            <p className="text-nodods-muted text-xl leading-relaxed animate-fade-in-up delay-200 max-w-2xl">
              A solo-led protocol, designed in the open and built for users. We
              prefer standards over silos and ship in public.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding py-20 md:py-28 border-t border-nodods-navy/10 bg-nodods-light">
        <div className="page-max-width">
          <div className="mb-12">
            <p className="text-nodods-navy font-medium text-sm uppercase tracking-widest mb-4">
              Founder
            </p>
            <h2 className="font-display font-semibold text-display-sm text-nodods-navy">
              The person behind Farmore
            </h2>
          </div>
          <div className="max-w-2xl">
            {leadership.map((member) => (
              <FounderCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="section-padding py-20 md:py-28 border-t border-nodods-navy/10 bg-nodods-white">
        <div className="page-max-width">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="font-display text-5xl md:text-6xl font-semibold text-nodods-navy mb-2">
                1
              </p>
              <p className="text-nodods-muted">Founder</p>
            </div>
            <div className="text-center">
              <p className="font-display text-5xl md:text-6xl font-semibold text-nodods-navy mb-2">
                1
              </p>
              <p className="text-nodods-muted">Full-time</p>
            </div>
            <div className="text-center">
              <p className="font-display text-5xl md:text-6xl font-semibold text-nodods-navy mb-2">
                ∞
              </p>
              <p className="text-nodods-muted">Chains</p>
            </div>
            <div className="text-center">
              <p className="font-display text-5xl md:text-6xl font-semibold text-nodods-navy mb-2">
                100%
              </p>
              <p className="text-nodods-muted">Mission-driven</p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture CTA */}
      <section className="section-padding py-20 md:py-28 bg-nodods-light">
        <div className="page-max-width text-center">
          <h2 className="font-display font-semibold text-display-sm text-nodods-navy mb-6">
            Open. Chain-neutral. Self-custodial.
          </h2>
          <p className="text-nodods-muted text-lg max-w-2xl mx-auto mb-10">
            Farmore is built on open collaboration, chain-neutrality, and
            long-term thinking.
          </p>
          <Link
            href="/culture"
            className="px-8 py-4 bg-nodods-navy text-nodods-white font-medium rounded-full hover:bg-nodods-navy-light transition-colors inline-block"
          >
            Explore our culture
          </Link>
        </div>
      </section>
    </>
  );
}
