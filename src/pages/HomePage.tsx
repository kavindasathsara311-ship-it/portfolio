import React, { useState } from 'react';
import { Play, Menu } from 'lucide-react';
import { USER_CONFIG } from '../data/content';
import { Logo, AwardChips } from '../components/UIComponents';
import { MobileMenu } from '../components/MobileMenu';
import { navLinks } from '../components/Navbar';

export const HomePage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Video */}
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260725_114042_d2ed2a89-f2fa-449b-9609-da456344257b.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover lg:scale-[1.2]"
      />

      {/* Main Container */}
      <div className="relative z-10 flex h-full flex-col px-5 sm:px-6 md:px-10 lg:px-14">
        {/* 1. NAVBAR */}
        <nav className="flex items-center justify-between py-6">
          {/* Left: Logo */}
          <Logo />

          {/* Right Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="hover:opacity-70 transition-opacity"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Mobile Hamburger Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 hover:opacity-70 transition-opacity"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </nav>

        {/* 2. FOUR-COLUMN META GRID */}
        <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* COL 1 */}
          <div>
            <h2 className="text-lg md:text-xl tracking-wide leading-tight">
              <div>{USER_CONFIG.name}</div>
              <div className="font-pixel text-2xl md:text-3xl">{USER_CONFIG.surname}</div>
            </h2>
            <div className="text-[10px] text-white/50 mt-3">*</div>
            <p className="font-pixel mt-1 text-xs text-white/60 leading-relaxed whitespace-pre-line">
              {USER_CONFIG.brandBlurb}
            </p>
          </div>

          {/* COL 2 */}
          <div className="text-right lg:text-left">
            <h2 className="text-lg md:text-xl tracking-wide leading-tight">
              <div>{USER_CONFIG.title.split('&')[0]}&amp;</div>
              <div className="font-pixel text-2xl md:text-3xl">
                {USER_CONFIG.title.split('&')[1]?.trim() || "ENGINEERING"}
              </div>
            </h2>
          </div>

          {/* COL 3 */}
          <div>
            <h3 className="font-pixel text-base tracking-widest text-white/50 uppercase mb-3">
              What I Do
            </h3>
            <p className="text-sm text-white/90 leading-relaxed max-w-[220px]">
              I create the top 1% of experiences for brands and digital products
            </p>
          </div>

          {/* COL 4 */}
          <div className="text-right lg:text-left">
            <h3 className="font-pixel text-base tracking-widest text-white/50 uppercase mb-3">
              Services
            </h3>
            <ul className="text-sm text-white/90 leading-relaxed space-y-0.5">
              <li>Branding</li>
              <li>Creative Direction &amp; Strategy</li>
              <li>UX/UI Design</li>
              <li>Web Development (React/Nextjs)</li>
              <li>3D, WebGL / Photography</li>
              <li>Video &amp; Animation</li>
            </ul>
          </div>
        </div>

        {/* 3. FLEX SPACER */}
        <div className="flex-1" />

        {/* 4. BOTTOM SECTION */}
        <div className="pb-4">
          {/* ROW A */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-end">
            {/* LEFT - Hero Headline */}
            <div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] tracking-wide uppercase font-normal"
                style={{ lineHeight: 0.72 }}
              >
                I BRING THE<br />
                <span className="font-pixel font-normal text-[1.25em] inline-block leading-none align-baseline">
                  UNEXPECTED
                </span>{' '}
                TO<br />
                BRAND &amp; DIGITAL<br />
                <span className="font-pixel font-normal text-[1.25em] inline-block leading-none align-baseline">
                  EXPERIENCES
                </span>
              </h1>
            </div>

            {/* RIGHT - Play Showreel & Awards */}
            <div className="flex flex-col gap-4 sm:gap-6 justify-end">
              {/* PLAY SHOWREEL BUTTON */}
              <button className="self-start flex items-center gap-3 border border-white/30 px-6 py-3 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors">
                <Play size={14} fill="white" />
                <span className="text-sm tracking-wider">PLAY SHOWREEL</span>
              </button>

              {/* Awards Row */}
              <AwardChips
                awards={USER_CONFIG.awards}
                className="self-start lg:self-end"
              />
            </div>
          </div>

          {/* ROW B - Footer strip */}
          <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 pt-4">
            <div className="text-xs text-white/60">
              Open to freelance, contract or full-time.{' '}
              <a
                href="/contact"
                className="text-red-500 hover:text-red-400 transition-colors"
              >
                Schedule a call
              </a>
            </div>
            <div className="text-xs text-white/60 sm:text-right">
              {USER_CONFIG.stats.fullCases} full cases &bull; {USER_CONFIG.stats.archiveFragments} archive fragments &bull; {USER_CONFIG.stats.catalogItems} catalog items
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={[{ name: 'HOME', path: '/' }, ...navLinks]}
      />
    </div>
  );
};
