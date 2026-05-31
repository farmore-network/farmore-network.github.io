import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the founder building Farmore — an open, chain-neutral protocol for unified blockchain identity.",
};

interface TeamMember {
  name: string;
  role: string;
  commitment: string;
  bio: string;
  initials: string;
}

const leadership: TeamMember[] = [
  {
    name: "Thandile Nododile",
    role: "Founder & CEO",
    commitment: "Full-time",
    bio: "Founder of Farmore, Thandile leads protocol design and the mission to give every blockchain user one name, one balance, and one account.",
    initials: "TN",
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group">
      <div className="bg-nodods-white rounded-2xl p-6 md:p-8 h-full hover:shadow-md transition-shadow border border-nodods-navy/5">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-nodods-navy/10 flex items-center justify-center mb-6">
          <span className="font-display font-semibold text-xl md:text-2xl text-nodods-navy">{member.initials}</span>
        </div>
        <h3 className="font-display font-semibold text-xl text-nodods-navy mb-1">{member.name}</h3>
        <p className="text-nodods-navy-light font-medium mb-1">{member.role}</p>
        <p className="text-nodods-muted text-sm mb-4">{member.commitment}</p>
        <p className="text-nodods-muted text-sm leading-relaxed">{member.bio}</p>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding pt-32 pb-20 md:pt-40 md:pb-28 bg-nodods-white">
        <div className="page-max-width">
          <div className="max-w-4xl">
            <p className="text-nodods-navy font-medium text-sm uppercase tracking-widest mb-6 animate-fade-in">Our Team</p>
            <h1 className="font-display font-semibold text-display-xl text-nodods-navy mb-8 animate-fade-in-up delay-100">
              Meet the founder
              <br />
              <span className="text-nodods-navy-light">building Farmore</span>
            </h1>
            <p className="text-nodods-muted text-xl leading-relaxed animate-fade-in-up delay-200">
              A solo-led protocol, designed in the open and built for users. We prefer standards over silos and ship in public.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding py-20 md:py-28 border-t border-nodods-navy/10 bg-nodods-light">
        <div className="page-max-width">
          <div className="mb-12">
            <p className="text-nodods-navy font-medium text-sm uppercase tracking-widest mb-4">Founder</p>
            <h2 className="font-display font-semibold text-display-sm text-nodods-navy">The person behind Farmore</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {leadership.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="section-padding py-20 md:py-28 border-t border-nodods-navy/10 bg-nodods-white">
        <div className="page-max-width">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="font-display text-5xl md:text-6xl font-semibold text-nodods-navy mb-2">1</p>
              <p className="text-nodods-muted">Founder</p>
            </div>
            <div className="text-center">
              <p className="font-display text-5xl md:text-6xl font-semibold text-nodods-navy mb-2">1</p>
              <p className="text-nodods-muted">Full-time</p>
            </div>
            <div className="text-center">
              <p className="font-display text-5xl md:text-6xl font-semibold text-nodods-navy mb-2">∞</p>
              <p className="text-nodods-muted">Chains</p>
            </div>
            <div className="text-center">
              <p className="font-display text-5xl md:text-6xl font-semibold text-nodods-navy mb-2">100%</p>
              <p className="text-nodods-muted">Mission-driven</p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture CTA */}
      <section className="section-padding py-20 md:py-28 bg-nodods-light">
        <div className="page-max-width text-center">
          <h2 className="font-display font-semibold text-display-sm text-nodods-navy mb-6">Open. Chain-neutral. Self-custodial.</h2>
          <p className="text-nodods-muted text-lg max-w-2xl mx-auto mb-10">
            Farmore is built on open collaboration, chain-neutrality, and long-term thinking.
          </p>
          <Link href="/culture" className="px-8 py-4 bg-nodods-navy text-nodods-white font-medium rounded-full hover:bg-nodods-navy-light transition-colors inline-block">
            Explore our culture
          </Link>
        </div>
      </section>
    </>
  );
}
