import React, { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { SectionLabel } from '../components/UIComponents';
import { USER_CONFIG } from '../data/content';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <div className="py-12 md:py-16 space-y-16 max-w-4xl">
        {/* Header */}
        <div className="space-y-6">
          <SectionLabel>Get In Touch</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] tracking-wide uppercase font-normal leading-none"
            style={{ lineHeight: 0.85 }}
          >
            LET'S{' '}
            <span className="font-pixel font-normal text-[1.2em]">
              TALK
            </span>{' '}
            &amp; START A PROJECT
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-xl leading-relaxed">
            Have a new project, design system need, or web build in mind? Send a direct message or schedule a call below.
          </p>
        </div>

        {/* Direct Email Link & Freelance Availability */}
        <div className="p-6 bg-[#0B0B0B] border border-white/10 space-y-2">
          <div className="text-xs text-white/50 uppercase tracking-widest font-pixel">Direct Email</div>
          <a
            href={`mailto:${USER_CONFIG.email}`}
            className="text-lg md:text-xl font-mono text-white hover:text-red-400 transition-colors"
          >
            {USER_CONFIG.email}
          </a>
          <div className="text-xs text-white/60 pt-2">
            Open to freelance, contract or full-time.{' '}
            <a href="#" className="text-red-500 hover:text-red-400 transition-colors">
              Schedule a call
            </a>
          </div>
        </div>

        {/* Minimal Form */}
        <div>
          {submitted ? (
            <div className="p-8 bg-[#0B0B0B] border border-white/20 text-center space-y-3">
              <h3 className="font-pixel text-xl text-white">MESSAGE SENT</h3>
              <p className="text-sm text-white/70">
                Thank you for reaching out. I will respond to your inquiry within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div>
                  <label className="block font-pixel text-xs text-white/50 uppercase tracking-widest mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-base text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-pixel text-xs text-white/50 uppercase tracking-widest mb-2">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-base text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-pixel text-xs text-white/50 uppercase tracking-widest mb-2">
                    PROJECT DETAILS
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project scope, timeline, and goals..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-base text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors resize-none"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="px-8 py-4 bg-white/5 border border-white/30 text-sm tracking-wider uppercase text-white hover:bg-white/10 hover:text-red-400 transition-colors"
              >
                Send Message &rarr;
              </button>
            </form>
          )}
        </div>

        {/* Social Links Row */}
        <div className="space-y-4 pt-6 border-t border-white/10">
          <SectionLabel>Social Channels</SectionLabel>
          <div className="flex flex-wrap gap-4">
            {USER_CONFIG.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                className="px-4 py-2 bg-[#0B0B0B] border border-white/10 text-xs text-white/70 hover:text-white hover:border-white/30 transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
