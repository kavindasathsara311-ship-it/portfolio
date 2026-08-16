import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { SectionLabel } from '../components/UIComponents';
import { SERVICES_LIST } from '../data/content';
import { motion } from 'framer-motion';

export const ServicesPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="py-12 md:py-16 space-y-16">
        {/* Header */}
        <div className="space-y-6">
          <SectionLabel>Capabilities</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] tracking-wide uppercase font-normal leading-none"
            style={{ lineHeight: 0.85 }}
          >
            END-TO-END{' '}
            <span className="font-pixel font-normal text-[1.2em]">
              DIGITAL
            </span>{' '}
            CAPABILITIES
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-2xl leading-relaxed">
            I help brands, startups, and tech companies craft high-caliber visual identities, interactive web platforms, and digital experiences.
          </p>
        </div>

        {/* Services List Grid */}
        <div className="space-y-8">
          {SERVICES_LIST.map((service, idx) => (
            <motion.div
              key={service.index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-8 bg-[#0B0B0B] border border-white/10 grid grid-cols-1 md:grid-cols-4 gap-6 items-start"
            >
              <div className="font-pixel text-2xl md:text-3xl text-white/40">
                {service.index}
              </div>
              <div className="md:col-span-3 space-y-3">
                <h3 className="text-xl md:text-2xl font-medium tracking-wide text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed max-w-3xl">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};
