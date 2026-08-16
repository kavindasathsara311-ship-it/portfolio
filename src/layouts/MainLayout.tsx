import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const MainLayout: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Home page handles its own locked-viewport layout & header/footer strip
  if (isHomePage) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col px-5 sm:px-6 md:px-10 lg:px-14">
      {/* Shared Navbar */}
      <Navbar />

      {/* Dynamic Route Content */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
};
