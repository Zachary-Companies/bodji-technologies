/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, CheckCircle, Network } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: 'landing' | 'primer') => void;
  scrollToSection: (sectionId: string) => void;
}

export default function Footer({ setCurrentTab, scrollToSection }: FooterProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simulate API subscribe wait
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <footer id="footer" className="bg-brand-sand-dark/45 border-t border-brand-dark/10 pt-20 pb-16 px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* Email Newsletter Capture Banner */}
        <div className="flex flex-col lg:flex-row items-center justify-between border-b border-brand-dark/10 pb-16 gap-8">
          <div className="max-w-md text-center lg:text-left">
            <h3 className="font-serif text-2xl font-extrabold text-brand-dark tracking-tight sm:text-3xl">
              Stay updated on the AI native internet.
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-brand-taupe font-medium leading-relaxed">
              One short email a month. No spam, unsubscribe anytime.
            </p>
          </div>

          <div className="w-full max-w-md">
            {success ? (
              <div className="flex items-center gap-3 rounded-2xl bg-brand-sage/10 border border-brand-sage/20 p-4.5 text-brand-sage">
                <CheckCircle className="h-5 w-5 shrink-0" />
                <span className="text-xs font-semibold leading-normal">
                  Thank you! You have successfully subscribed to the Bodji Signal.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="you@yourbusiness.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-full border border-brand-dark/15 bg-brand-paper py-3.5 px-5 text-xs text-brand-dark transition placeholder:text-brand-taupe/40 focus:border-brand-rust focus:outline-none"
                  aria-label="Subscribe address"
                  id="newsletter-email-input"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-brand-dark px-6 py-3.5 text-xs font-bold tracking-wide text-brand-sand shadow-sm transition hover:bg-brand-rust focus:outline-none shrink-0"
                  id="newsletter-submit-btn"
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-dark text-brand-sand">
                <Network className="h-4.5 w-4.5" />
              </div>
              <span className="font-serif text-sm font-bold tracking-tight text-brand-dark">
                Bodji Beacon
              </span>
            </div>
            <p className="text-xs text-brand-taupe leading-relaxed max-w-xs font-medium">
              Make your business readable to AI assistants. Stay in control of every interaction. Build AI indexing schema libraries that scale.
            </p>
          </div>

          {/* Links columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-dark/65 block">
                Product
              </span>
              <ul className="space-y-3 text-xs font-medium text-brand-taupe">
                <li>
                  <a href="mailto:hello@beacon.bodjitechnologies.ai" className="hover:text-brand-rust">
                    Schedule a meeting
                  </a>
                </li>
                <li>
                  <button onClick={() => scrollToSection('checker')} className="hover:text-brand-rust text-left focus:outline-none">
                    Check your AI visibility
                  </button>
                </li>
                <li>
                  <button onClick={() => { setCurrentTab('primer'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-brand-rust text-left focus:outline-none">
                    AI visibility mini-course
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-4.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-dark/65 block">
                Resources
              </span>
              <ul className="space-y-3 text-xs font-medium text-brand-taupe">
                <li>
                  <button onClick={() => { setCurrentTab('primer'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-brand-rust text-left focus:outline-none">
                    Bodji Signal
                  </button>
                </li>
                <li>
                  <button onClick={() => { setCurrentTab('primer'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-brand-rust text-left focus:outline-none">
                    Sample Signal report
                  </button>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-brand-rust">
                    Business portal
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1 space-y-4.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-dark/65 block">
                Company
              </span>
              <ul className="space-y-3 text-xs font-medium text-brand-taupe">
                <li>
                  <a href="#solutions" className="hover:text-brand-rust">
                    About
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@beacon.bodjitechnologies.ai" className="hover:text-brand-rust">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-brand-rust">
                    Press
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Legal and small-print footer */}
        <div className="mt-16 pt-8 border-t border-brand-dark/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-brand-taupe/80">
          <span>
            © {new Date().getFullYear()} Bodji Technologies, Inc. All rights reserved.
          </span>
          <div className="flex gap-4">
            <a href="mailto:hello@beacon.bodjitechnologies.ai" className="hover:text-brand-rust" id="support-email-btn">
              Questions? hello@beacon.bodjitechnologies.ai
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
