import React, { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { SectionLabel } from '../components/UIComponents';
import { PROJECTS } from '../data/content';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CATEGORIES = ['ALL', 'BRANDING', 'WEB', '3D', 'VIDEO'] as const;

export const WorkPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('ALL');

  const filteredProjects = PROJECTS.filter(
    (p) => activeCategory === 'ALL' || p.category === activeCategory
  );

  return (
    <PageTransition>
      <div className="py-12 md:py-16 space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <SectionLabel>Selected Work</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] tracking-wide uppercase font-normal leading-none"
            style={{ lineHeight: 0.85 }}
          >
            FEATURED{' '}
            <span className="font-pixel font-normal text-[1.2em]">
              PROJECTS
            </span>{' '}
            &amp; ARCHIVE
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-2xl leading-relaxed">
            Explore selected case studies spanning full-stack web applications, interactive 3D, motion reels, and brand design systems.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 pt-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs tracking-wider border transition-colors ${
                activeCategory === cat
                  ? 'bg-white/10 border-white text-white font-medium'
                  : 'bg-white/5 border-white/20 text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <Link
                to={`/work/${project.slug}`}
                className="group relative block bg-[#0B0B0B] border border-white/10 overflow-hidden"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-black/50">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/30 text-xs tracking-widest text-white uppercase">
                      View Case &rarr;
                    </span>
                  </div>
                </div>

                {/* Card Meta Info */}
                <div className="p-6 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-pixel text-xs text-white/50 uppercase tracking-widest">
                      {project.category} &bull; {project.year}
                    </span>
                    <span className="text-xs text-white/40 font-mono">
                      {project.client}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium tracking-wide text-white group-hover:text-white/90 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/60 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};
