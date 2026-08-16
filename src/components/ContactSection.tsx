import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-hero-bg px-6 md:px-10 lg:px-16 py-20 md:py-28">
      <div className="max-w-7xl mx-auto space-y-16">
        <ScrollReveal delay="0.1s" className="space-y-3">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold block">
            Contact
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase tracking-[-0.03em] text-foreground">
            GET IN <span className="text-primary">TOUCH</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Form */}
          <ScrollReveal delay="0.25s">
            {submitted ? (
              <div className="bg-secondary border border-border rounded-lg p-8 text-center space-y-3">
                <h3 className="text-foreground font-semibold text-lg uppercase tracking-wide">
                  Message Sent
                </h3>
                <p className="text-muted-foreground text-sm font-light">
                  Thank you for reaching out. I will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-muted-foreground text-xs uppercase tracking-widest font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-muted-foreground text-xs uppercase tracking-widest font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-muted-foreground text-xs uppercase tracking-widest font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-6 py-3.5 text-sm rounded-sm font-bold cursor-pointer hover:brightness-110 transition-all active:scale-[0.97] uppercase tracking-widest"
                >
                  Send Message
                </button>
              </form>
            )}
          </ScrollReveal>

          {/* Right Direct Contact Info Block */}
          <ScrollReveal delay="0.4s">
            <div className="bg-secondary border border-border rounded-lg p-8 space-y-6">
              <div>
                <h3 className="text-muted-foreground text-xs uppercase tracking-widest font-semibold mb-1">
                  Email
                </h3>
                <a
                  href="mailto:kavindasathsara311@gmail.com"
                  className="text-foreground hover:text-primary transition-colors text-sm font-light font-mono"
                >
                  kavindasathsara311@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-muted-foreground text-xs uppercase tracking-widest font-semibold mb-1">
                  WhatsApp
                </h3>
                <a
                  href="https://wa.me/94712873043"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground hover:text-primary transition-colors text-sm font-light font-mono"
                >
                  071 287 3043
                </a>
              </div>

              <div>
                <h3 className="text-muted-foreground text-xs uppercase tracking-widest font-semibold mb-1">
                  GitHub
                </h3>
                <a
                  href="https://github.com/kavindasathsara311-ship-it"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground hover:text-primary transition-colors text-sm font-light font-mono block truncate"
                >
                  github.com/kavindasathsara311-ship-it
                </a>
              </div>

              <div>
                <h3 className="text-muted-foreground text-xs uppercase tracking-widest font-semibold mb-1">
                  YouTube
                </h3>
                <a
                  href="https://www.youtube.com/@nodewhisper"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground hover:text-primary transition-colors text-sm font-light font-mono"
                >
                  youtube.com/@nodewhisper
                </a>
              </div>

              <div>
                <h3 className="text-muted-foreground text-xs uppercase tracking-widest font-semibold mb-1">
                  Location
                </h3>
                <p className="text-foreground font-semibold text-base">
                  Colombo, Sri Lanka
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Footer Strip */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-muted-foreground/60 text-xs font-light">
          <div>
            <span className="font-semibold text-foreground tracking-tight">KAVINDA SATHSARA</span> &bull; Colombo, Sri Lanka
          </div>
          <div>
            &copy; 2026 KAVINDA SATHSARA. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};
