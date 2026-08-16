import React from 'react';
import { USER_CONFIG } from '../data/content';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full pb-8 pt-12 border-t border-white/10 mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Left */}
        <div className="text-xs text-white/60">
          Open to freelance, contract or full-time.{' '}
          <Link
            to="/contact"
            className="text-red-500 hover:text-red-400 transition-colors"
          >
            Schedule a call
          </Link>
        </div>

        {/* Right */}
        <div className="text-xs text-white/60 sm:text-right">
          {USER_CONFIG.stats.fullCases} full cases &bull; {USER_CONFIG.stats.archiveFragments} archive fragments &bull; {USER_CONFIG.stats.catalogItems} catalog items
        </div>
      </div>
    </footer>
  );
};
