import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { SectionLabel } from '../components/UIComponents';
import { USER_CONFIG } from '../data/content';
import { motion } from 'framer-motion';

export const AboutPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="py-12 md:py-16 space-y-16">
        {/* Hero Banner */}
        <div className="space-y-6">
          <SectionLabel>About Me</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] tracking-wide uppercase font-normal leading-none"
            style={{ lineHeight: 0.85 }}
          >
            ENGINEERING{' '}
            <span className="font-pixel font-normal text-[1.2em] text-white">
              DIGITAL
            </span>{' '}
            EXCELLENCE &amp; CREATIVE STRATEGY
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
            {/* TODO: [ADD REAL CONTENT] Replace with user's real bio copy */}
            Hi, I'm {USER_CONFIG.name} {USER_CONFIG.surname}. I design and engineer premium interactive digital products, scalable web apps, and visual identity systems that blend raw technical precision with cutting-edge visual craft.
          </p>
        </div>

        {/* Static Portrait / Minimal Media Block */}
        <div className="relative aspect-video w-full overflow-hidden bg-[#0B0B0B] border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1920&q=80"
            alt="Portrait"
            className="h-full w-full object-cover opacity-60 filter grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <span className="font-pixel text-xs text-white/60 uppercase tracking-widest">
              Location / Remote Worldwide
            </span>
            <span className="text-xs text-white/40 font-mono">
              [ADD REAL CONTENT]
            </span>
          </div>
        </div>

        {/* Pull Quote */}
        <div className="border-l-2 border-white/30 pl-6 md:pl-10 py-2">
          <blockquote className="font-pixel text-xl sm:text-2xl md:text-3xl text-white/90 leading-snug">
            "Design without engineering is an illusion; engineering without design is uninspired."
          </blockquote>
        </div>

        {/* Timeline / Experience */}
        <div className="space-y-8">
          <SectionLabel>Selected Experience</SectionLabel>
          <div className="space-y-6">
            {[
              {
                role: "Senior Creative Technologist",
                company: "Independent / Freelance",
                period: "2022 - PRESENT",
                description: "Delivering top 1% web applications, WebGL visualizers, and brand design systems for global clients.",
              },
              {
                role: "Lead Front-End Architect",
                company: "Digital Studio [ADD REAL CONTENT]",
                period: "2020 - 2022",
                description: "Architected high-throughput React & Next.js applications and led UI design systems across cross-functional engineering teams.",
              },
              {
                role: "Interactive UI Developer",
                company: "Creative Agency [ADD REAL CONTENT]",
                period: "2018 - 2020",
                description: "Engineered responsive websites, motion graphics, and interactive campaign landing pages.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-[#0B0B0B] border border-white/10"
              >
                <div className="font-pixel text-sm text-white/50">{item.period}</div>
                <div className="md:col-span-3 space-y-2">
                  <h3 className="text-lg font-medium text-white">{item.role} <span className="text-white/50">&bull; {item.company}</span></h3>
                  <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills & Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <SectionLabel>Core Disciplines</SectionLabel>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="p-3 bg-[#0B0B0B] border border-white/10">React / Next.js / TypeScript Architecture</li>
              <li className="p-3 bg-[#0B0B0B] border border-white/10">UI/UX Design Systems &amp; Prototyping</li>
              <li className="p-3 bg-[#0B0B0B] border border-white/10">Creative Direction &amp; Brand Strategy</li>
              <li className="p-3 bg-[#0B0B0B] border border-white/10">Interactive WebGL &amp; 3D Visuals</li>
            </ul>
          </div>
          <div className="space-y-4">
            <SectionLabel>Technical Toolkit</SectionLabel>
            <ul className="space-y-2 text-sm text-white/80 font-mono">
              <li className="p-3 bg-[#0B0B0B] border border-white/10">Vite, Tailwind CSS, PostCSS, Framer Motion</li>
              <li className="p-3 bg-[#0B0B0B] border border-white/10">Three.js, GLSL Shaders, Blender</li>
              <li className="p-3 bg-[#0B0B0B] border border-white/10">Figma, Adobe Creative Cloud, DaVinci Resolve</li>
              <li className="p-3 bg-[#0B0B0B] border border-white/10">Git, CI/CD, Vercel, CloudFront</li>
            </ul>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
