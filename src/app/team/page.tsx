import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the leadership team behind Nodods Holdings. A mission-driven, collaborative team focused on serving everyday people.",
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
    bio: "Founder and visionary behind Nodods Holdings, Thandile leads the company's mission to be the world's best for everyday people.",
    initials: "TN",
  },
  {
    name: "Natasha Hlakula",
    role: "Chief Financial Officer",
    commitment: "Full-time",
    bio: "Natasha oversees all financial operations and strategy, ensuring sustainable growth while maintaining mission-driven values.",
    initials: "NH",
  },
  {
    name: "Benoit Tshiawu",
    role: "Chief Technology Officer",
    commitment: "Part-time",
    bio: "Benoit architects and oversees the technical infrastructure powering Nodods Holdings' ventures.",
    initials: "BT",
  },
];

const team: TeamMember[] = [
  {
    name: "Kamogelo Maleka",
    role: "Marketing Strategist",
    commitment: "Full-time",
    bio: "Kamogelo crafts the brand narrative and marketing strategies that communicate our mission.",
    initials: "KM",
  },
   {
    name: "Sbonelo Mtungwa",
    role: "Software Engineer",
    commitment: "Full-time",
    bio: "Sbonelo builds and maintains the platforms that power our ventures.",
    initials: "SM",
  },
   
  {
    name: "Petile Onele Ngqengelele",
    role: "Sales Representative",
    commitment: "Full-time",
    bio: "Petile drives user acquisition and partnership development, connecting Rand4U with everyday South Africans.",
    initials: "PN",
  },
 
  {
    name: "Sive Hlumelo Mbulali",
    role: "Sales Representative",
    commitment: "Full-time",
    bio: "Sive drives user acquisition and partnership development, connecting Rand4U with everyday South Africans.",
    initials: "SM",
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
              Meet the people
              <br />
              <span className="text-nodods-navy-light">building for you</span>
            </h1>
            <p className="text-nodods-muted text-xl leading-relaxed animate-fade-in-up delay-200">
              A mission-driven, collaborative team committed to serving everyday people. We&apos;re unconventional, focused on impact, and deeply invested in our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding py-20 md:py-28 border-t border-nodods-navy/10 bg-nodods-light">
        <div className="page-max-width">
          <div className="mb-12">
            <p className="text-nodods-navy font-medium text-sm uppercase tracking-widest mb-4">Leadership</p>
            <h2 className="font-display font-semibold text-display-sm text-nodods-navy">Executive Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {leadership.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding py-20 md:py-28 bg-nodods-navy">
        <div className="page-max-width">
          <div className="mb-12">
            <p className="text-nodods-white/60 font-medium text-sm uppercase tracking-widest mb-4">Our People</p>
            <h2 className="font-display font-semibold text-display-sm text-nodods-white">Team Members</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-nodods-white/10 rounded-2xl p-6 md:p-8 border border-nodods-white/10">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-nodods-white/20 flex items-center justify-center mb-6">
                  <span className="font-display font-semibold text-xl md:text-2xl text-nodods-white">{member.initials}</span>
                </div>
                <h3 className="font-display font-semibold text-xl text-nodods-white mb-1">{member.name}</h3>
                <p className="text-nodods-white/80 font-medium mb-1">{member.role}</p>
                <p className="text-nodods-white/50 text-sm mb-4">{member.commitment}</p>
                <p className="text-nodods-white/60 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="section-padding py-20 md:py-28 border-t border-nodods-navy/10 bg-nodods-white">
        <div className="page-max-width">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="font-display text-5xl md:text-6xl font-semibold text-nodods-navy mb-2">7</p>
              <p className="text-nodods-muted">Team members</p>
            </div>
            <div className="text-center">
              <p className="font-display text-5xl md:text-6xl font-semibold text-nodods-navy mb-2">6</p>
              <p className="text-nodods-muted">Full-time</p>
            </div>
            <div className="text-center">
              <p className="font-display text-5xl md:text-6xl font-semibold text-nodods-navy mb-2">1</p>
              <p className="text-nodods-muted">Part-time</p>
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
          <h2 className="font-display font-semibold text-display-sm text-nodods-navy mb-6">Driven by values, not just results</h2>
          <p className="text-nodods-muted text-lg max-w-2xl mx-auto mb-10">
            Our team culture is built on mission alignment, unconventional excellence, and long-term thinking.
          </p>
          <Link href="/culture" className="px-8 py-4 bg-nodods-navy text-nodods-white font-medium rounded-full hover:bg-nodods-navy-light transition-colors inline-block">
            Explore our culture
          </Link>
        </div>
      </section>
    </>
  );
}
