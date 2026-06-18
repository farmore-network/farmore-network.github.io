import type { Metadata } from "next";
import { WaitlistForm } from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Join the waitlist",
  description:
    "Be first to claim your Farmore handle. Join the waitlist — we love hearing from future users, builders, and teammates looking to join the community.",
};

export default function WaitlistPage() {
  return (
    <section className="section-padding pt-32 pb-24 md:pt-40 md:pb-32 bg-nodods-white">
      <div className="page-max-width">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-nodods-navy font-medium text-sm uppercase tracking-widest mb-6 animate-fade-in">
              Waitlist
            </p>
            <h1 className="font-display font-semibold text-display-lg text-nodods-navy mb-6 animate-fade-in-up delay-100 text-balance">
              Your name is waiting.
            </h1>
            <p className="text-nodods-muted text-lg md:text-xl leading-relaxed animate-fade-in-up delay-200">
              Claim your handle the moment registration opens. We love hearing
              from future users, builders, and teammates looking to join the
              community.
            </p>
          </div>
          <div className="animate-fade-in-up delay-300">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
