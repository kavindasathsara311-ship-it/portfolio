import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { SectionLabel } from '../components/UIComponents';
import { PROCESS_STEPS } from '../data/content';
import { motion } from 'framer-motion';

export const ProcessPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="py-12 md:py-16 space-y-16">
        {/* Header */}
        <div className="space-y-6">
          <SectionLabel>Methodology</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] tracking-wide uppercase font-normal leading-none"
            style={{ lineHeight: 0.85 }}
          >
            HOW I{' '}
            <span className="font-pixel font-normal text-[1.2em]">
              COOK UP
            </span>{' '}
            IDEAS &amp; BUILD PRODUCTS
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-2xl leading-relaxed">
            A battle-tested 4-step framework designed to take ambitious concepts from initial discovery to high-impact launch.
          </p>
        </div>

        {/* Process Steps List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROCESS_STEPS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-8 bg-[#0B0B0B] border border-white/10 space-y-4"
            >
              <div className="flex justify-between items-center">
                <span className="font-pixel text-2xl md:text-3xl text-white/40">
                  {item.step}
                </span>
                <span className="font-pixel text-xs text-white/30 uppercase tracking-widest">
                  PHASE 0{idx + 1}
                </span>
              </div>
              <h3 className="text-xl font-medium tracking-wide text-white">
                {item.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};
