import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const ProjectsSection: React.FC = () => {
  const ongoingProjects = [
    {
      id: 1,
      title: "Elderly Management System",
      description: "Web-based system for managing elderly care",
      status: "In Progress",
      link: "#",
    },
    {
      id: 2,
      title: "LMS (Learning Management System)",
      description: "Web-based platform for courses and learning content",
      status: "In Progress",
      link: "#",
    },
  ];

  const completedProjects = [
    { id: 1, title: "Task Management System", description: "Full stack task tracking application", link: "#" },
    { id: 2, title: "VisionX", description: "Smart mailbox product landing page", link: "#" },
    { id: 3, title: "Tourist Guide System", description: "Built in Java (OOP)", link: "#" },
    { id: 4, title: "Budget Tracking System", description: "Tracks daily income and expenses", link: "#" },
    { id: 5, title: "2D Game", description: "Built in Java", link: "#" },
    { id: 6, title: "Portfolio Website", description: "Interactive full-stack web portfolio", link: "#" },
  ];

  return (
    <section id="projects" className="bg-hero-bg px-6 md:px-10 lg:px-16 py-20 md:py-28">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Main Heading */}
        <ScrollReveal delay="0.1s" className="space-y-3">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold block">
            Projects
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase tracking-[-0.03em] text-foreground">
            MY <span className="text-primary">PROJECTS</span>
          </h2>
        </ScrollReveal>

        {/* Group 1: Currently Building */}
        <div className="space-y-6">
          <ScrollReveal delay="0.15s">
            <span className="text-primary text-xs uppercase tracking-widest font-semibold block">
              Currently Building
            </span>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ongoingProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={`${0.2 + index * 0.15}s`}>
                <a
                  href={project.link}
                  className="block bg-secondary border border-border rounded-lg overflow-hidden group hover:border-primary/50 transition-colors"
                >
                  <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest p-4 text-center">
                    [ADD THUMBNAIL]
                  </div>
                  <div className="p-6 space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-foreground font-semibold text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-primary text-xs uppercase tracking-widest font-semibold">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Group 2: Completed Projects */}
        <div className="space-y-6 pt-4">
          <ScrollReveal delay="0.15s">
            <span className="text-primary text-xs uppercase tracking-widest font-semibold block">
              Completed
            </span>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={`${0.2 + index * 0.1}s`}>
                <a
                  href={project.link}
                  className="block bg-secondary border border-border rounded-lg overflow-hidden group hover:border-primary/50 transition-colors"
                >
                  <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest p-4 text-center">
                    [ADD THUMBNAIL]
                  </div>
                  <div className="p-6 space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-foreground font-semibold text-base group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-muted-foreground text-xs uppercase tracking-widest">
                        Completed
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
