import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: string;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, delay = "0s", className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect once revealed to prevent re-trigger flicker
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        animationDelay: delay,
        willChange: 'opacity, transform, filter',
      }}
      className={`${className} ${
        isVisible ? "animate-fade-up opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};
