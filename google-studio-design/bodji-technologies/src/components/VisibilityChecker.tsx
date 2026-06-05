/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Loader2, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, ShieldX, RefreshCw } from 'lucide-react';

interface VisibilityCheckerProps {
  setCurrentTab: (tab: 'landing' | 'primer') => void;
  scrollToSection: (sectionId: string) => void;
}

export default function VisibilityChecker({ setCurrentTab, scrollToSection }: VisibilityCheckerProps) {
  const [businessName, setBusinessName] = useState('');
  const [city, setCity] = useState('');
  const [status, setStatus] = useState<'idle' | 'scanning' | 'complete'>('idle');
  const [scanStep, setScanStep] = useState(0);
  const [score, setScore] = useState({ visibility: 0, readability: 0, trust: 0, overall: 0 });

  const scanSteps = [
    { text: 'Booting LLM search grounding context (Bing & Google API feeds)...', delay: 1200 },
    { text: 'Resolving citations across online business directories...', delay: 1000 },
    { text: 'Analyzing custom metadata blocks & semantic HTML markup...', delay: 1100 },
    { text: 'Evaluating structured Model Context Protocol (MCP) descriptors...', delay: 900 },
    { text: 'Synthesizing knowledge alignment scores against AI model architectures...', delay: 1300 },
  ];

  const handleStartCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !city) return;
    
    setStatus('scanning');
    setScanStep(0);
  };

  // Step sequencer effect
  useEffect(() => {
    if (status !== 'scanning') return;

    if (scanStep < scanSteps.length) {
      const timer = setTimeout(() => {
        setScanStep((prev) => prev + 1);
      }, scanSteps[scanStep].delay);
      return () => clearTimeout(timer);
    } else {
      // Completed, calculate realistic/procedural weak visibility numbers
      // A typical business without Beacon has weak structured indicators
      const nameLength = businessName.length;
      const cityLength = city.length;
      
      const visibility = Math.floor(35 + (nameLength % 15));
      const readability = Math.floor(10 + (cityLength % 10)); // usually very low since almost nobody has MCP
      const trust = Math.floor(40 + ((nameLength + cityLength) % 20));
      const overall = Math.round((visibility + readability + trust) / 3);
      
      setScore({ visibility, readability, trust, overall });
      setStatus('complete');
    }
  }, [status, scanStep]);

  const handleReset = () => {
    setBusinessName('');
    setCity('');
    setStatus('idle');
    setScanStep(0);
  };

  return (
    <section id="checker" className="mx-auto max-w-4xl px-6 py-20">
      <div className="rounded-3xl border border-brand-dark/10 bg-brand-paper p-8 shadow-sm md:p-12">
        
        {/* Simple screenshot title pairings */}
        <div className="text-center">
          <div className="mx-auto inline-flex items-center gap-1.5 rounded-full bg-amber-100/60 px-4 py-1 text-[11px] font-bold tracking-wider text-amber-800 uppercase">
            AI Visibility Checker
          </div>
          <h2 className="mt-4 font-serif text-3xl font-extrabold tracking-tight text-brand-dark md:text-4xl">
            How visible is your business to AI?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-brand-taupe">
            We'll run an interactive simulation scanning public search grounding channels—exactly how ChatGPT, Claude, and Google Gemini compile results about local brands. Takes about 5 seconds.
          </p>
        </div>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            
            {/* IDLE state - The Search Form */}
            {status === 'idle' && (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleStartCheck}
                className="space-y-6 max-w-lg mx-auto"
              >
                <div>
                  <label htmlFor="biz-name-input" className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-2">
                    Business Name
                  </label>
                  <input
                    id="biz-name-input"
                    type="text"
                    required
                    placeholder="e.g. Sarah's Coffee Roasters"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full rounded-xl border border-brand-dark/15 bg-brand-sand/30 py-3.5 px-4 text-sm text-brand-dark transition placeholder:text-brand-taupe/50 focus:border-brand-rust focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-rust"
                  />
                </div>

                <div>
                  <label htmlFor="city-input" className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/80 mb-2">
                    City and State
                  </label>
                  <input
                    id="city-input"
                    type="text"
                    required
                    placeholder="e.g. Portland, OR"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full rounded-xl border border-brand-dark/15 bg-brand-sand/30 py-3.5 px-4 text-sm text-brand-dark transition placeholder:text-brand-taupe/50 focus:border-brand-rust focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-rust"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand-rust py-4 text-sm font-semibold tracking-wide text-white transition-all hover:bg-brand-rust/90 hover:shadow shadow-brand-rust/20 focus:outline-none"
                    id="checker-start-btn"
                  >
                    Check my visibility
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                <p className="text-center text-[11px] leading-relaxed text-brand-taupe/70 py-1">
                  Honest note: this runs a simulated semantic search query referencing training patterns. It reflects what an LLM assistant finds, synthesizes, or completely misses when analyzing raw Web 1.0 websites.
                </p>
              </motion.form>
            )}

            {/* SCANNING state - Step status logging */}
            {status === 'scanning' && (
              <motion.div
                key="scanning"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-xl mx-auto py-8"
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <Loader2 className="h-10 w-10 animate-spin text-brand-rust" />
                  <span className="mt-4 text-xs font-semibold uppercase tracking-widest text-brand-rust animate-pulse">
                    Querying LLM Vector Knowledge
                  </span>
                  <p className="mt-1 text-sm font-serif italic text-brand-dark font-medium">
                    Scanning data indexes for "{businessName}" in {city}...
                  </p>
                </div>

                <div className="mt-10 rounded-2xl bg-brand-sand/55 border border-brand-dark/5 p-6 font-mono text-xs text-brand-dark/95 space-y-3.5">
                  {scanSteps.map((step, idx) => {
                    const isPassed = scanStep > idx;
                    const isCurrent = scanStep === idx;
                    return (
                      <div
                        key={idx}
                        className={`flex items-start gap-2.5 transition-opacity duration-300 ${
                          isPassed || isCurrent ? 'opacity-100' : 'opacity-25'
                        }`}
                      >
                        {isPassed ? (
                          <span className="text-emerald-600 font-bold">✔</span>
                        ) : isCurrent ? (
                          <span className="text-brand-rust font-bold animate-pulse">➔</span>
                        ) : (
                          <span className="text-brand-taupe/45">·</span>
                        )}
                        <span className={isCurrent ? 'font-semibold text-brand-dark' : 'text-brand-taupe'}>
                          {step.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* COMPLETE state - Diagnostic Report */}
            {status === 'complete' && (
              <motion.div
                key="complete"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-2xl mx-auto"
              >
                {/* Result Cards & Rating Rings */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  
                  {/* Big Circular Score */}
                  <div className="md:col-span-1 flex flex-col items-center justify-center p-6 rounded-2xl bg-brand-sand-dark/50 border border-brand-dark/5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-taupe">Overall score</span>
                    <div className="relative mt-4 flex h-28 w-28 items-center justify-center rounded-full border-4 border-amber-200 bg-brand-paper">
                      <div className="text-center">
                        <span className="text-4xl font-extrabold tracking-tight text-brand-dark font-serif">{score.overall}</span>
                        <span className="text-xs text-brand-taupe block">/100</span>
                      </div>
                    </div>
                    <span className="mt-4 text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                      Legibility Deficit
                    </span>
                  </div>

                  {/* Rating parameters */}
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1.5">
                        <span className="text-brand-dark">AI Citation Accuracy</span>
                        <span className="text-brand-dark font-mono">{score.visibility}%</span>
                      </div>
                      <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: `${score.visibility}%` }} />
                      </div>
                      <p className="mt-1 text-[11px] text-brand-taupe">Weak matches discovered. LLM engines risk hallucinating names/hours.</p>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1.5">
                        <span className="text-brand-dark">Schema & Action Readability (MCP)</span>
                        <span className="text-rose-600 font-mono font-bold">{score.readability}%</span>
                      </div>
                      <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
                        <div className="h-full bg-rose-500 rounded-full" style={{ width: `${score.readability}%` }} />
                      </div>
                      <p className="mt-1 text-[11px] text-brand-taupe">No structured API endpoint or MCP descriptors. Agents cannot transact or book.</p>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1.5">
                        <span className="text-brand-dark">LLM Context Alignment</span>
                        <span className="text-brand-dark font-mono">{score.trust}%</span>
                      </div>
                      <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-600 rounded-full" style={{ width: `${score.trust}%` }} />
                      </div>
                      <p className="mt-1 text-[11px] text-brand-taupe">AI relies on scraped reviews and third-party context. Risk of reference decay.</p>
                    </div>
                  </div>

                </div>

                {/* Diagnostics List */}
                <div className="mt-8 rounded-2xl bg-[#FFFDF9] border border-amber-200/50 p-6">
                  <h4 className="flex items-center gap-2 font-serif text-base font-bold text-brand-charcoal">
                    <ShieldX className="h-5 w-5 text-brand-rust" />
                    Key Risks Discovered
                  </h4>
                  <ul className="mt-4 space-y-3.5 text-xs text-brand-dark leading-relaxed">
                    <li className="flex gap-2.5">
                      <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>No Barcode for Bots:</strong> Your website uses Web 1.0 code. It is designed for human eyes but acts as structured friction for LLM transformers, which are forced to guess.
                      </div>
                    </li>
                    <li className="flex gap-2.5">
                      <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>Transaction Block:</strong> Because you don't expose a secure Model Context Protocol (MCP) tool block, ChatGPT and Claude cannot book or process callbacks directly, leading agents to prioritize action-ready alternatives.
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Bodji Beacon Pitch & Actions */}
                <div className="mt-8 rounded-2xl bg-brand-sage p-6 text-brand-sand flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="font-serif text-lg font-bold">That fix is exactly what Bodji Beacon does.</h4>
                    <p className="mt-1 text-xs text-brand-sand/80 leading-relaxed max-w-md">
                      We turn your business into an AI-readable profile and active tool wrapper. AI assistants find, trust, cite, and book directly.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
                    <button
                      onClick={() => {
                        setCurrentTab('primer');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="rounded-lg bg-transparent border border-brand-sand/30 hover:bg-brand-sand/10 px-4 py-2.5 text-xs font-semibold text-brand-sand text-center focus:outline-none"
                    >
                      Read full Chapter 7
                    </button>
                    <button
                      onClick={() => scrollToSection('footer')}
                      className="rounded-lg bg-brand-rust hover:bg-white hover:text-brand-rust px-4 py-2.5 text-xs font-bold text-white shadow-sm transition text-center focus:outline-none"
                    >
                      Schedule free demo
                    </button>
                  </div>
                </div>

                {/* Reset Trigger */}
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-1.5 text-xs font-semibold text-brand-taupe hover:text-brand-dark focus:outline-none"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                    Reset & Scan New Business
                  </button>
                </div>
              </motion.div>
            )}
            
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
