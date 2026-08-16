import React from 'react';
import { Link } from 'react-router-dom';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <Link to="/" className="inline-block hover:opacity-70 transition-opacity">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 256 256"
      fill="none"
      className={className}
    >
      <path
        d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z"
        fill="white"
      />
    </svg>
  </Link>
);

export const SectionLabel: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <h3 className={`font-pixel text-base tracking-widest text-white/50 uppercase mb-3 ${className}`}>
    {children}
  </h3>
);

export const AwardChips: React.FC<{ awards: { name: string; count: string; textSize: string }[]; className?: string }> = ({ awards, className = "" }) => (
  <div className={`flex flex-wrap items-stretch gap-2 sm:gap-3 text-sm text-white/80 ${className}`}>
    {awards.map((award, idx) => (
      <div key={idx} className="bg-[#0B0B0B] px-3 sm:px-4 py-2 flex items-center gap-2">
        <span className={`font-bold tracking-tight ${award.textSize}`}>{award.name}</span>
        <span className="text-white/50 text-xs">{award.count}</span>
      </div>
    ))}
  </div>
);
