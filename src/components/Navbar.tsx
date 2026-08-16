import React from 'react';
import { Button } from './ui/button';

export const Navbar: React.FC = () => {
  const navItems = [
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 lg:px-16 py-5">
      {/* Left: Logo */}
      <a href="#" className="text-foreground text-xl font-semibold tracking-tight">
        KAVINDA
      </a>

      {/* Center: Nav links (hidden on mobile) */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Right: CTA (hidden on mobile) */}
      <a href="#contact" className="hidden md:inline-flex">
        <Button variant="navCta" size="lg">
          Hire Me
        </Button>
      </a>
    </nav>
  );
};
