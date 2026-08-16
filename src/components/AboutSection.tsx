import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-hero-bg px-6 md:px-10 lg:px-16 py-20 md:py-28">
      <div className="max-w-7xl mx-auto space-y-12">
        <ScrollReveal delay="0.1s" className="space-y-3">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold block">
            About
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase tracking-[-0.03em] text-foreground">
            ABOUT <span className="text-primary">ME</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left / Profile Image Column */}
          <ScrollReveal delay="0.25s">
            <div className="aspect-square w-full max-w-md mx-auto overflow-hidden rounded-lg border border-border bg-secondary flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest p-4 text-center">
              <img
                src="Resoureces/WhatsApp Image 2025-10-05 at 19.38.36_ab2f184c.jpg"
                alt="Kavinda Sathsara"
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="hidden">Profile Photo Placeholder [ADD PHOTO]</span>
            </div>
          </ScrollReveal>

          {/* Right / Text & Stats Column */}
          <ScrollReveal delay="0.4s" className="space-y-6">
            <p className="text-muted-foreground font-light text-base md:text-lg leading-relaxed">
              I'm Kavinda Sathsara, a Full Stack Developer based in Colombo, Sri Lanka. I work across web and mobile development, building complete applications from backend to frontend. I enjoy solving real problems with code — from management systems to small games and product landing pages.
            </p>

            {/* Stat block */}
            <div className="bg-secondary border border-border rounded-lg p-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-primary font-bold text-3xl sm:text-4xl tracking-tight mb-1">
                  6
                </div>
                <div className="text-muted-foreground text-xs uppercase tracking-widest font-light">
                  Projects Completed
                </div>
              </div>

              <div>
                <div className="text-primary font-bold text-3xl sm:text-4xl tracking-tight mb-1">
                  2
                </div>
                <div className="text-muted-foreground text-xs uppercase tracking-widest font-light">
                  In Progress
                </div>
              </div>

              <div>
                <div className="text-primary font-bold text-xl sm:text-2xl tracking-tight mb-1">
                  Colombo
                </div>
                <div className="text-muted-foreground text-xs uppercase tracking-widest font-light">
                  Based In
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
