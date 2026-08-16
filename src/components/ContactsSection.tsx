import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

export const ContactsSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacts" className="bg-hero-bg px-6 md:px-10 lg:px-16 py-20 md:py-28">
      <div className="max-w-7xl mx-auto space-y-16">
        <ScrollReveal delay="0.1s" className="space-y-3">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold block">
            Contacts
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
                  Request Received
                </h3>
                <p className="text-muted-foreground text-sm font-light">
                  Thank you for contacting Sentinel AI. Our security engineering team will reach out to you shortly.
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
                    placeholder="Describe your security requirements..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-6 py-3.5 text-sm rounded-sm font-bold cursor-pointer hover:brightness-110 transition-all active:scale-[0.97] uppercase tracking-widest"
                >
                  Submit Request
                </button>
              </form>
            )}
          </ScrollReveal>

          {/* Right Direct Info */}
          <ScrollReveal delay="0.4s">
            <div className="bg-secondary border border-border rounded-lg p-8 space-y-6">
              <div>
                <h3 className="text-muted-foreground text-xs uppercase tracking-widest font-semibold mb-1">
                  Location
                </h3>
                <p className="text-foreground font-semibold text-lg">
                  Columbus, OH
                </p>
              </div>

              <div>
                <h3 className="text-muted-foreground text-xs uppercase tracking-widest font-semibold mb-1">
                  Direct Line
                </h3>
                <p className="text-muted-foreground text-sm font-light">
                  [ADD CONTENT - PHONE NUMBER]
                </p>
              </div>

              <div>
                <h3 className="text-muted-foreground text-xs uppercase tracking-widest font-semibold mb-1">
                  Security Operations Email
                </h3>
                <p className="text-muted-foreground text-sm font-light">
                  [ADD CONTENT - EMAIL ADDRESS]
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Footer Strip */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-muted-foreground/60 text-xs font-light">
          <div>
            <span className="font-semibold text-foreground tracking-tight">SENTINEL AI</span> &bull; Columbus, OH
          </div>
          <div>
            &copy; {new Date().getFullYear()} SENTINEL AI. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};
