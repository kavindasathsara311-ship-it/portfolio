import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const SkillsSection: React.FC = () => {
  const skills = [
    {
      title: "Web Development",
      description: "Full-stack web apps, from database to UI",
    },
    {
      title: "Mobile App Development",
      description: "Building cross-platform mobile applications",
    },
    {
      title: "Programming",
      description: "Java, and general software problem-solving",
    },
    {
      title: "[ADD 4th SKILL]",
      description: "Placeholder card (e.g. UI/UX, DevOps, React/Next.js)",
    },
  ];

  return (
    <section id="skills" className="bg-hero-bg px-6 md:px-10 lg:px-16 py-20 md:py-28">
      <div className="max-w-7xl mx-auto space-y-12">
        <ScrollReveal delay="0.1s" className="space-y-3">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold block">
            Skills
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase tracking-[-0.03em] text-foreground">
            WHAT I <span className="text-primary">DO</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <ScrollReveal
              key={skill.title}
              delay={`${0.2 + index * 0.15}s`}
            >
              <div className="bg-secondary border border-border rounded-lg p-6 h-full flex flex-col justify-between space-y-4">
                <h3 className="text-foreground font-semibold text-lg">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
