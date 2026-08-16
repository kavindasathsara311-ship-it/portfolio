import React, { Suspense, lazy, useState } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

export const HeroSection: React.FC = () => {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-end bg-hero-bg overflow-hidden">
      {/* Spline Background Container */}
      <div className="absolute inset-0">
        <Suspense fallback={<div className="absolute inset-0 bg-hero-bg" />}>
          <div
            className={`w-full h-full transition-opacity duration-700 ${
              isSplineLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Spline
              scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode"
              className="w-full h-full"
              onLoad={() => setIsSplineLoaded(true)}
            />
          </div>
        </Suspense>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 pointer-events-none w-full max-w-[90%] sm:max-w-md lg:max-w-2xl px-6 md:px-10 pb-10 md:pb-10 pt-32">
        {/* Heading (delay 0.2s) */}
        <h1
          style={{ animationDelay: "0.2s", willChange: "opacity, transform, filter" }}
          className="opacity-0 animate-fade-up text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.05] tracking-[-0.05em] text-foreground mb-2 md:mb-4 uppercase"
        >
          KAVINDA <span className="text-primary">SATHSARA</span>
        </h1>

        {/* Subheading (delay 0.4s) */}
        <p
          style={{ animationDelay: "0.4s", willChange: "opacity, transform, filter" }}
          className="opacity-0 animate-fade-up text-foreground/80 text-[clamp(1.125rem,2.5vw,1.875rem)] font-light mb-3 md:mb-6"
        >
          Full Stack Developer.
        </p>

        {/* Description (delay 0.55s) */}
        <p
          style={{ animationDelay: "0.55s", willChange: "opacity, transform, filter" }}
          className="opacity-0 animate-fade-up text-muted-foreground text-[clamp(0.875rem,1.5vw,1.25rem)] font-light mb-4 md:mb-8"
        >
          I build web and mobile applications end to end — from backend logic and databases to clean, functional interfaces. Currently working on an Elderly Management System and a Learning Management System, alongside several completed full-stack and Java projects.
        </p>

        {/* CTAs (delay 0.7s) */}
        <div
          style={{ animationDelay: "0.7s", willChange: "opacity, transform, filter" }}
          className="opacity-0 animate-fade-up flex flex-wrap gap-3 font-bold pointer-events-auto"
        >
          <a href="#contact">
            <button className="bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-110 transition-all active:scale-[0.97]">
              Get In Touch
            </button>
          </a>
          <a href="#projects">
            <button className="bg-white text-background px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-90 transition-all active:scale-[0.97]">
              View Projects
            </button>
          </a>
        </div>

        {/* Trust line (delay 0.85s) */}
        <p
          style={{ animationDelay: "0.85s", willChange: "opacity, transform, filter" }}
          className="opacity-0 animate-fade-up text-muted-foreground/60 text-xs font-light mt-4 md:mt-6"
        >
          Based in Colombo, Sri Lanka. 8 projects built.
        </p>
      </div>
    </section>
  );
};
