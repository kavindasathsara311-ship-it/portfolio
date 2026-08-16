import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';

export const NotFoundPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="py-24 flex flex-col items-center justify-center text-center space-y-6 flex-1">
        <h1 className="font-pixel text-7xl md:text-9xl text-white tracking-widest">
          404
        </h1>
        <p className="text-sm md:text-base text-white/60 max-w-md">
          The page or experiment fragment you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-white/5 border border-white/30 text-xs tracking-wider text-white hover:bg-white/10 hover:text-red-400 transition-colors uppercase"
        >
          &larr; Return to Home
        </Link>
      </div>
    </PageTransition>
  );
};
