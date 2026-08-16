import React from 'react';
import { Logo } from './UIComponents';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; path: string }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, links }) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-6">
        <Logo />
        <button
          onClick={onClose}
          className="p-2 hover:opacity-70 transition-opacity"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col items-center justify-center flex-1 gap-8">
        {links.map((link, index) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={onClose}
            className="text-2xl tracking-widest transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(16px)',
              transitionDelay: isOpen ? `${100 + index * 60}ms` : '0ms',
            }}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};
