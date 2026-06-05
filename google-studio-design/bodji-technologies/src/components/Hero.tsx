/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Search, BookOpen, ShieldCheck, Eye, Cpu } from 'lucide-react';

interface HeroProps {
  setCurrentTab: (tab: 'landing' | 'primer') => void;
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ setCurrentTab, scrollToSection }: HeroProps) {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-24 md:pt-28 md:pb-36">
      {/* Abstract Background Design Elements */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="absolute right-[-10%] top-[10%] h-[350px] w-[350px] rounded-full bg-brand-sand-dark/60 blur-[100px]" />
        <div className="absolute left-[-5%] bottom-[-5%] h-[400px] w-[400px] rounded-full bg-amber-100/30 blur-[120px]" />
        
        {/* Subtle procedural constellation graph overlay */}
        <svg className="absolute w-full h-full stroke-brand-dark/[0.03] stroke-1 fill-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="10" y1="20" x2="40" y2="15" />
          <line x1="40" y1="15" x2="80" y2="45" />
          <line x1="80" y1="45" x2="50" y2="80" />
          <line x1="50" y1="80" x2="10" y2="20" />
          <circle cx="10" cy="20" r="1" className="fill-brand-rust/20" />
          <circle cx="40" cy="15" r="1.5" className="fill-brand-sage/20" />
          <circle cx="80" cy="45" r="2" className="fill-brand-dark/20" />
          <circle cx="50" cy="80" r="1.2" className="fill-brand-taupe/20" />
        </svg>
      </div>

      <div className="mx-auto max-w-4xl text-center">
        {/* Amber Tag Highlight */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 rounded-full bg-brand-sand-dark border border-brand-dark/5 px-4.5 py-1.5 text-xs font-semibold tracking-wider text-brand-rust uppercase"
        >
          <Cpu className="h-3.5 w-3.5" />
          The Agentic Internet is Here
        </motion.div>

        {/* Primary Editorial Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 font-serif text-[2.75rem] font-extrabold leading-[1.1] tracking-tight text-brand-charcoal sm:text-[4rem] md:text-[4.5rem]"
        >
          Your business is about to get a <span className="italic block mt-1 sm:inline text-brand-sage">new kind of customer.</span>
        </motion.h1>

        {/* Supportive subtitle copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-brand-taupe sm:text-[1.125rem]"
        >
          AI systems like ChatGPT, Claude, and Siri are searching, deciding, and booking on behalf of customers. Bodji Technologies helps your business become findable, readable, and action-ready for automated agents.
        </motion.p>

        {/* Hero Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-11 flex flex-col sm:flex-row items-center justify-center gap-4.5"
        >
          <button
            onClick={() => scrollToSection('checker')}
            className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-brand-dark px-7 py-4 text-sm font-semibold tracking-wide text-brand-sand transition-all duration-300 hover:bg-brand-rust hover:shadow-lg focus:outline-none"
            id="hero-primary-cta"
          >
            <Search className="h-4.5 w-4.5 text-amber-300 animate-pulse" />
            Check your AI Visibility
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button
            onClick={() => {
              setCurrentTab('primer');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-brand-dark/20 bg-brand-paper hover:bg-brand-sand-dark px-7 py-4 text-sm font-semibold tracking-wide text-brand-dark transition-all duration-300 focus:outline-none"
            id="hero-secondary-cta"
          >
            <BookOpen className="h-4.5 w-4.5 text-brand-taupe" />
            Read the 7-Min Primer
          </button>
        </motion.div>

        {/* Underpinning Trust Markers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 sm:mt-24 grid grid-cols-1 gap-6 sm:grid-cols-3 border-t border-brand-dark/5 pt-10 text-left"
        >
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-brand-rust">
              <Eye className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-brand-dark">Generative Engine Search</h3>
              <p className="mt-1 text-xs text-brand-taupe leading-relaxed">Ensure dynamic scrapers index your verified pricing & hours instantly without mistakes.</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-brand-sage">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-brand-dark">MCP Action Protocols</h3>
              <p className="mt-1 text-xs text-brand-taupe leading-relaxed">Allow agent systems to query and invoke secure live actions like booking visits.</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-stone-100 text-brand-taupe">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-brand-dark">Controlled Schema Trust</h3>
              <p className="mt-1 text-xs text-brand-taupe leading-relaxed">Publish a structured semantic companion folder safeguarding your brand profile from hallucinations.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
