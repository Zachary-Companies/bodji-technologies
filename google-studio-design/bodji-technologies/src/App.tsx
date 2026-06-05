/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VisibilityChecker from './components/VisibilityChecker';
import ProductCarousel from './components/ProductCarousel';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PrimerCourse from './components/PrimerCourse';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'landing' | 'primer'>('landing');

  const scrollToSection = (sectionId: string) => {
    // If we're inside the primer tab, navigate to landing first, then scroll
    if (currentTab !== 'landing') {
      setCurrentTab('landing');
      setTimeout(() => {
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-brand-sand selection:bg-brand-rust/25 selection:text-brand-rust">
      <Header 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        scrollToSection={scrollToSection} 
      />

      {currentTab === 'landing' ? (
        <main className="animate-fade-in">
          {/* Main Hero platform block */}
          <Hero 
            setCurrentTab={setCurrentTab} 
            scrollToSection={scrollToSection} 
          />

          {/* Simulated AI Search visibility scanner */}
          <VisibilityChecker 
            setCurrentTab={setCurrentTab} 
            scrollToSection={scrollToSection} 
          />

          {/* Sliding horizontal solutions section */}
          <ProductCarousel 
            scrollToSection={scrollToSection} 
          />

          {/* Interactive Accordion FAQs */}
          <FAQ />

          {/* News Banner subscription & grouping links footer */}
          <Footer 
            setCurrentTab={setCurrentTab} 
            scrollToSection={scrollToSection} 
          />
        </main>
      ) : (
        <main className="animate-fade-in">
          {/* Detailed interactive chapter reading booklet */}
          <PrimerCourse 
            onBackToMain={() => {
              setCurrentTab('landing');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            initialChapterId={1}
          />
        </main>
      )}
    </div>
  );
}
