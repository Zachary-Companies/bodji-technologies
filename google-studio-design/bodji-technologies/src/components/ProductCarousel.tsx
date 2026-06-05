/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Cpu, Compass, Milestone, CheckCircle2 } from 'lucide-react';
import { solutions } from '../data';
import { Solution } from '../types';

interface ProductCarouselProps {
  scrollToSection: (sectionId: string) => void;
}

export default function ProductCarousel({ scrollToSection }: ProductCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const colors = {
    sage: {
      bg: 'bg-emerald-50/50',
      text: 'text-emerald-900',
      badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      icon: <Cpu className="h-5 w-5 text-emerald-700" />,
      accent: 'border-emerald-600/30'
    },
    rust: {
      bg: 'bg-orange-50/50',
      text: 'text-orange-950',
      badge: 'bg-orange-100 text-orange-900 border-orange-200',
      icon: <Compass className="h-5 w-5 text-orange-700" />,
      accent: 'border-orange-600/30'
    },
    taupe: {
      bg: 'bg-stone-100/60',
      text: 'text-stone-900',
      badge: 'bg-stone-200 text-stone-800 border-stone-300',
      icon: <Milestone className="h-5 w-5 text-stone-700" />,
      accent: 'border-stone-600/30'
    }
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % solutions.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + solutions.length) % solutions.length);
  };

  // Autoplay to showcase smooth dynamic horizontal motion
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8500); // stable long period so user doesn't feel rushed
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="solutions" className="bg-brand-sand-dark/30 py-24 px-6 border-y border-brand-dark/5">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Block with Side Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-taupe">Products & Services</span>
            <h2 className="mt-3 font-serif text-3xl font-extrabold tracking-tight text-brand-dark md:text-5xl leading-tight">
              Explore innovative tools built for an AI economy
            </h2>
          </div>
          
          {/* Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-dark/15 bg-brand-paper text-brand-dark transition-all hover:bg-brand-dark hover:text-brand-sand hover:scale-105 active:scale-95 focus:outline-none"
              aria-label="Previous slide"
              id="slider-prev-btn"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-dark/15 bg-brand-paper text-brand-dark transition-all hover:bg-brand-dark hover:text-brand-sand hover:scale-105 active:scale-95 focus:outline-none"
              aria-label="Next slide"
              id="slider-next-btn"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Dynamic Display Slider Card */}
        <div className="mt-12 overflow-hidden relative rounded-3xl border border-brand-dark/10 bg-brand-paper p-8 md:p-12 shadow-sm">
          <AnimatePresence mode="wait">
            {solutions.map((sol: Solution, idx: number) => {
              if (idx !== activeIndex) return null;
              
              const conf = colors[sol.colorTheme];
              return (
                <motion.div
                  key={sol.id}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  
                  {/* Left Column Content summary */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-2.5">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider border ${conf.badge}`}>
                        {conf.icon}
                        {sol.name}
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl font-extrabold tracking-tight text-brand-dark md:text-4xl">
                      {sol.tagline}
                    </h3>

                    <p className="text-base leading-relaxed text-brand-taupe">
                      {sol.description}
                    </p>

                    {/* Benefit Checks Grid */}
                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {sol.benefits.map((benefit, bidx) => (
                        <div key={bidx} className="flex gap-2.5">
                          <CheckCircle2 className="h-4.5 w-4.5 text-brand-sage shrink-0 mt-0.5" />
                          <span className="text-xs text-brand-dark/85 leading-relaxed font-medium">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column Interactive Mock / visual representation */}
                  <div className="lg:col-span-5 flex justify-center lg:justify-end">
                    <div className={`w-full max-w-sm rounded-2xl border-2 ${conf.accent} p-6.5 ${conf.bg} card-visual-interactive relative overflow-hidden transition-all-custom`}>
                      
                      {/* Top-Right Arrow indicating depth */}
                      <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-brand-paper border border-brand-dark/10 flex items-center justify-center text-brand-dark">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>

                      <span className="font-mono text-[10px] uppercase tracking-wider text-brand-taupe">
                        Live integration interface
                      </span>
                      
                      {sol.id === 'beacon' && (
                        <div className="mt-6 space-y-4 font-mono text-xs">
                          <div className="rounded-lg bg-brand-paper/85 p-3.5 border border-brand-dark/5 space-y-1">
                            <span className="text-brand-rust font-bold">GET /mcp/schema.json</span>
                            <div className="text-[11px] leading-tight text-brand-dark/75">
                              {`{`} <br />
                              &nbsp;&nbsp;{`"@context": "https://mcp.dev",`} <br />
                              &nbsp;&nbsp;{`"type": "LocalBusiness",`} <br />
                              &nbsp;&nbsp;{`"verified": true,`} <br />
                              &nbsp;&nbsp;{`"tools": ["bookAppointment", "queryCatalog"]`} <br />
                              {`}`}
                            </div>
                          </div>
                          <div className="rounded-lg bg-brand-sage/10 p-3 text-[11px] text-brand-sage border border-brand-sage/10">
                            🟢 <strong>Protocol Ready:</strong> Active listener parsed by Claude Desktop App & ChatGPT agent.
                          </div>
                        </div>
                      )}

                      {sol.id === 'scout' && (
                        <div className="mt-6 space-y-3 font-mono text-xs">
                          <div className="space-y-2.5">
                            <div className="flex justify-between items-center bg-brand-paper/85 p-2.5 rounded-lg border border-brand-rust/20">
                              <span className="text-[11px] font-bold text-brand-dark">1. Dental CRM API</span>
                              <span className="text-[10px] font-bold text-orange-600 bg-orange-100 px-1.5 py-0.5 rounded">98 Match</span>
                            </div>
                            <div className="flex justify-between items-center bg-brand-paper/85 p-2.5 rounded-lg border border-brand-dark/5">
                              <span className="text-[11px] text-brand-dark">2. Logistics Lead Feed</span>
                              <span className="text-[10px] text-brand-taupe bg-stone-100 px-1.5 py-0.5 rounded">84 Match</span>
                            </div>
                          </div>
                          <p className="text-[11px] leading-relaxed text-brand-taupe pt-1.5">
                            Scoring target databases in background. Matching algorithms evaluating transaction velocities.
                          </p>
                        </div>
                      )}

                      {sol.id === 'consulting' && (
                        <div className="mt-6 space-y-3.5 font-mono text-xs">
                          <div className="space-y-1.5">
                            <div className="flex justify-between text-[11px]">
                              <span className="text-brand-dark">Manual Entry Loss</span>
                              <span className="text-rose-600 font-bold">-18.4 hrs/wk</span>
                            </div>
                            <div className="h-1.5 w-full bg-stone-200 rounded">
                              <div className="h-full bg-rose-500 rounded" style={{ width: '82%' }} />
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <div className="flex justify-between text-[11px]">
                              <span className="text-brand-dark">Email Triage Buffer</span>
                              <span className="text-rose-600 font-bold">-12.5 hrs/wk</span>
                            </div>
                            <div className="h-1.5 w-full bg-stone-200 rounded">
                              <div className="h-full bg-rose-500 rounded" style={{ width: '65%' }} />
                            </div>
                          </div>

                          <button 
                            onClick={() => scrollToSection('footer')}
                            className="w-full text-center py-2 bg-brand-dark rounded text-brand-sand text-[11px] font-semibold mt-1"
                          >
                            Download workflow audit report
                          </button>
                        </div>
                      )}

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex justify-center gap-1.5">
          {solutions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                idx === activeIndex ? 'w-8 bg-brand-rust' : 'w-2.5 bg-brand-dark/15'
              }`}
              id={`slider-dot-${idx}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
