/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Network, ArrowRight, BookOpen, Search, HelpCircle } from 'lucide-react';

interface HeaderProps {
  currentTab: 'landing' | 'primer';
  setCurrentTab: (tab: 'landing' | 'primer') => void;
  scrollToSection: (sectionId: string) => void;
}

export default function Header({ currentTab, setCurrentTab, scrollToSection }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-sand-dark bg-brand-sand/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo / Brand Name */}
        <button
          onClick={() => {
            setCurrentTab('landing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2.5 text-left focus:outline-none"
          id="header-logo-btn"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-dark text-brand-sand transition-all duration-300 group-hover:bg-brand-rust">
            <Network className="h-5 w-5 animate-pulse" />
          </div>
          <div>
            <span className="font-serif text-lg font-bold tracking-tight text-brand-dark">
              Bodji <span className="font-sans text-sm font-medium text-brand-taupe">Technologies</span>
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-dark/70">
          <button
            onClick={() => {
              setCurrentTab('landing');
              setTimeout(() => scrollToSection('solutions'), 100);
            }}
            className="transition-colors hover:text-brand-dark"
            id="nav-link-solutions"
          >
            Products
          </button>
          <button
            onClick={() => {
              setCurrentTab('landing');
              setTimeout(() => scrollToSection('checker'), 100);
            }}
            className="flex items-center gap-1.5 transition-colors hover:text-brand-dark"
            id="nav-link-checker"
          >
            <Search className="h-4 w-4 text-brand-rust" />
            AI Visibility Checker
          </button>
          <button
            onClick={() => {
              setCurrentTab('primer');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex items-center gap-1.5 tracking-tight transition-colors hover:text-brand-dark ${
              currentTab === 'primer' ? 'text-brand-rust font-semibold' : ''
            }`}
            id="nav-link-primer"
          >
            <BookOpen className="h-4 w-4" />
            7-Min Primer
          </button>
          <button
            onClick={() => {
              setCurrentTab('landing');
              setTimeout(() => scrollToSection('faqs'), 100);
            }}
            className="flex items-center gap-1 transition-colors hover:text-brand-dark"
            id="nav-link-faqs"
          >
            <HelpCircle className="h-4 w-4" />
            Common Qs
          </button>
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-4">
          {currentTab === 'landing' ? (
            <button
              onClick={() => scrollToSection('checker')}
              className="group hidden sm:flex items-center gap-1.5 rounded-full bg-brand-dark px-4.5 py-2 text-xs font-semibold tracking-wide text-brand-sand transition-all hover:bg-brand-rust focus:outline-none"
              id="cta-checker-header"
            >
              Check your AI Visibility
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          ) : (
            <button
              onClick={() => {
                setCurrentTab('landing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex items-center gap-1.5 rounded-full border border-brand-dark/25 px-4 py-2 text-xs font-medium text-brand-dark transition-all hover:bg-brand-dark hover:text-brand-sand focus:outline-none"
              id="cta-main-site-header"
            >
              Back to Main Site
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
