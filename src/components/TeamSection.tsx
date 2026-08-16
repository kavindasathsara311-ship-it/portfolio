import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const TeamSection: React.FC = () => {
  const teamMembers = [
    { id: 1, name: "[ADD CONTENT]", role: "Security Architect" },
    { id: 2, name: "[ADD CONTENT]", role: "AI Systems Lead" },
    { id: 3, name: "[ADD CONTENT]", role: "Access Control Specialist" },
    { id: 4, name: "[ADD CONTENT]", role: "Infrastructure Engineer" },
  ];

  return (
    <section id="team" className="bg-hero-bg px-6 md:px-10 lg:px-16 py-20 md:py-28">
      <div className="max-w-7xl mx-auto space-y-12">
        <ScrollReveal delay="0.1s" className="space-y-3">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold block">
            Team
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase tracking-[-0.03em] text-foreground">
            OUR <span className="text-primary">TEAM</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <ScrollReveal
              key={member.id}
              delay={`${0.2 + index * 0.1}s`}
            >
              <div className="bg-secondary border border-border rounded-lg p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-muted flex items-center justify-center text-[10px] text-muted-foreground uppercase tracking-widest px-2">
                  [ADD PHOTO]
                </div>
                <div className="space-y-1">
                  <h3 className="text-foreground font-semibold text-sm">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-xs uppercase tracking-widest">
                    {member.role}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
