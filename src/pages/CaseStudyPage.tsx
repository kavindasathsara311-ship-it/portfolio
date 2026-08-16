import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { SectionLabel } from '../components/UIComponents';
import { PROJECTS } from '../data/content';
import { motion } from 'framer-motion';

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  if (currentIndex === -1) {
    return <Navigate to="/work" replace />;
  }

  const project = PROJECTS[currentIndex];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <PageTransition>
      <div className="py-12 md:py-16 space-y-16">
        {/* Back Link */}
        <div>
          <Link
            to="/work"
            className="text-xs text-white/60 hover:text-white transition-colors flex items-center gap-2"
          >
            &larr; BACK TO WORK
          </Link>
        </div>

        {/* Hero Headline & Meta */}
        <div className="space-y-6">
          <SectionLabel>{project.category} &bull; CASE STUDY</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] tracking-wide uppercase font-normal leading-none"
            style={{ lineHeight: 0.85 }}
          >
            {project.title.split(' ')[0]}{' '}
            <span className="font-pixel font-normal text-[1.2em]">
              {project.title.split(' ')[1] || "PROJECT"}
            </span>{' '}
            {project.title.split(' ').slice(2).join(' ')}
          </h1>

          {/* Meta Row */}
          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-white/60 font-mono border-t border-b border-white/10 py-4">
            <div><span className="text-white/40">ROLE:</span> {project.role}</div>
            <div><span className="text-white/40">YEAR:</span> {project.year}</div>
            <div><span className="text-white/40">CLIENT:</span> {project.client}</div>
          </div>
        </div>

        {/* Full-bleed Cover Media */}
        <div className="relative aspect-video w-full overflow-hidden bg-[#0B0B0B] border border-white/10">
          <img
            src={project.heroMedia}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Narrative Sections */}
        <div className="space-y-12 max-w-4xl">
          {/* Summary */}
          <div className="space-y-3">
            <SectionLabel>Overview</SectionLabel>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
              {project.summary}
            </p>
          </div>

          {/* Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
            <div>
              <SectionLabel>The Challenge</SectionLabel>
            </div>
            <div className="md:col-span-2 text-sm text-white/80 leading-relaxed space-y-2">
              <p>{project.challenge}</p>
            </div>
          </div>

          {/* Approach */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
            <div>
              <SectionLabel>The Approach</SectionLabel>
            </div>
            <div className="md:col-span-2 text-sm text-white/80 leading-relaxed space-y-2">
              <p>{project.approach}</p>
            </div>
          </div>

          {/* Result */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
            <div>
              <SectionLabel>The Result</SectionLabel>
            </div>
            <div className="md:col-span-2 text-sm text-white/80 leading-relaxed space-y-2">
              <p>{project.result}</p>
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="aspect-video w-full overflow-hidden bg-[#0B0B0B] border border-white/10"
            >
              <img src={img} alt={`Gallery image ${i + 1}`} className="h-full w-full object-cover" />
            </motion.div>
          ))}
        </div>

        {/* Next Project Footer Card */}
        <div className="pt-12 border-t border-white/10">
          <Link
            to={`/work/${nextProject.slug}`}
            className="group block p-8 md:p-12 bg-[#0B0B0B] border border-white/10 hover:border-white/30 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <span className="font-pixel text-xs text-white/50 uppercase tracking-widest block mb-2">
                  Next Project &rarr;
                </span>
                <h3 className="text-2xl md:text-3xl font-medium tracking-wide text-white group-hover:text-white/90 transition-colors">
                  {nextProject.title}
                </h3>
              </div>
              <span className="px-6 py-3 bg-white/5 border border-white/20 text-xs tracking-wider uppercase text-white group-hover:bg-white/10 transition-colors">
                View Case Study
              </span>
            </div>
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};
