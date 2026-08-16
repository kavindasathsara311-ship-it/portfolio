import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Enterprise Security Systems",
      description: "Robust enterprise security infrastructure engineered for facility-wide coverage and resilience. [ADD CONTENT]",
    },
    {
      title: "AI-Powered Surveillance",
      description: "Real-time threat detection and smart video analytics deployed seamlessly across site cameras. [ADD CONTENT]",
    },
    {
      title: "Zero-Trust Architecture",
      description: "Strict identity verification protocols securing networks, servers, and sensitive data environments. [ADD CONTENT]",
    },
    {
      title: "Smart Access Control",
      description: "Keyless entry, biometric authorization, and centralized facility management set up for your organization. [ADD CONTENT]",
    },
  ];

  return (
    <section id="services" className="bg-hero-bg px-6 md:px-10 lg:px-16 py-20 md:py-28">
      <div className="max-w-7xl mx-auto space-y-12">
        <ScrollReveal delay="0.1s" className="space-y-3">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold block">
            Services
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase tracking-[-0.03em] text-foreground">
            SECURITY <span className="text-primary">SOLUTIONS</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.title}
              delay={`${0.2 + index * 0.15}s`}
            >
              <div className="bg-secondary border border-border rounded-lg p-6 h-full flex flex-col justify-between space-y-4">
                <h3 className="text-foreground font-semibold text-lg">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
