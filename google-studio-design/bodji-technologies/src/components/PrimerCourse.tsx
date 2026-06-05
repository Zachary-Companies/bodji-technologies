/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, BookOpen, Calendar, HelpCircle, ArrowRight, CornerDownRight, CheckSquare } from 'lucide-react';
import { chapters } from '../data';
import { Chapter, ContentSection } from '../types';

interface PrimerCourseProps {
  onBackToMain: () => void;
  initialChapterId?: number;
}

export default function PrimerCourse({ onBackToMain, initialChapterId = 1 }: PrimerCourseProps) {
  const [selectedChapterId, setSelectedChapterId] = useState(initialChapterId);

  const activeChapter = chapters.find(c => c.id === selectedChapterId) || chapters[0];

  useEffect(() => {
    // Scroll smoothly to top of lesson when chapter changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedChapterId]);

  return (
    <div className="min-h-screen bg-[#FCFAF2] py-8 px-4 sm:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        
        {/* Editorial Action Bar */}
        <div className="mb-10 flex items-center justify-between border-b border-brand-dark/5 pb-4">
          <button
            onClick={onBackToMain}
            className="group inline-flex items-center gap-2 rounded-lg border border-brand-dark/15 bg-brand-paper px-4.5 py-2 text-xs font-semibold text-brand-dark transition-all hover:bg-brand-dark hover:text-brand-sand focus:outline-none"
            id="primer-back-btn"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to main site
          </button>
          
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-brand-rust">
            <BookOpen className="h-4 w-4 animate-bounce" />
            7-Min Mini Course
          </div>
        </div>

        {/* Outer Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Chapter Selector Sidebar (Left Col) */}
          <aside className="lg:col-span-3.5 space-y-6">
            <div className="border-b-2 border-brand-dark/10 pb-4">
              <h1 className="font-serif text-2xl font-extrabold text-brand-dark tracking-tight">
                Bodji Beacon
              </h1>
              <span className="mt-1 block text-sky-850 font-bold uppercase tracking-widest text-[11px] text-brand-rust">
                A 7-Min Primer
              </span>
            </div>

            {/* List of chapters corresponding to exact text layout */}
            <nav className="flex flex-col gap-1 sm:grid sm:grid-cols-2 lg:flex lg:flex-col">
              {chapters.map((chap) => {
                const isSelected = chap.id === selectedChapterId;
                return (
                  <button
                    key={chap.id}
                    onClick={() => setSelectedChapterId(chap.id)}
                    className={`group flex items-start gap-4 rounded-lg py-3 px-3.5 text-left text-xs transition duration-200 focus:outline-none ${
                      isSelected
                        ? 'bg-brand-paper shadow-sm border border-brand-dark/10 text-brand-rust font-semibold scale-[1.02]'
                        : 'text-brand-taupe hover:bg-brand-paper/50 hover:text-brand-dark'
                    }`}
                    id={`chapter-nav-${chap.id}`}
                  >
                    <span className={`font-mono text-[10px] font-bold ${isSelected ? 'text-brand-rust' : 'text-brand-taupe/65'}`}>
                      {chap.chapterNum}
                    </span>
                    <span className="leading-tight tracking-tight text-[12.5px]">
                      {chap.title}
                    </span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Chapter Reading Block (Right Col) */}
          <main className="lg:col-span-8.5 bg-brand-paper rounded-2xl border border-brand-dark/10 p-6 sm:p-10 md:p-14 shadow-sm min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                
                {/* Chapter metadata tag */}
                <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100/50 border border-amber-200 px-3 py-1 text-[10px] font-bold tracking-widest text-amber-900 uppercase">
                  Chapter {activeChapter.chapterNum}
                </div>

                {/* Primary page-turning header */}
                <h2 className="font-serif text-3xl font-extrabold tracking-tight text-brand-charcoal sm:text-4xl md:text-[2.65rem] leading-[1.15]">
                  {activeChapter.title}
                </h2>
                
                <p className="font-serif italic text-brand-taupe text-base sm:text-lg border-b border-brand-dark/5 pb-6">
                  {activeChapter.subtitle}
                </p>

                {/* Paragraph elements flow */}
                <div className="space-y-6 pt-2">
                  {activeChapter.content.map((sec: ContentSection, idx: number) => {
                    
                    if (sec.type === 'paragraph') {
                      return (
                        <p key={idx} className="font-serif text-[15.5px] sm:text-[17px] leading-relaxed text-brand-dark/90">
                          {sec.text}
                        </p>
                      );
                    }

                    if (sec.type === 'quote') {
                      return (
                        <blockquote key={idx} className="pl-5 border-l-3 border-brand-rust py-1.5 my-6">
                          <p className="font-serif font-semibold italic text-[16px] sm:text-[18px] text-brand-rust leading-relaxed">
                            {sec.text}
                          </p>
                        </blockquote>
                      );
                    }

                    if (sec.type === 'bullet_list') {
                      return (
                        <ul key={idx} className="space-y-4 my-6">
                          {sec.items?.map((item, iIdx) => (
                            <li key={iIdx} className="flex gap-3 text-[14.5px] sm:text-[16px]">
                              <span className="text-brand-rust font-bold select-none shrink-0 mt-1">➔</span>
                              <span className="font-serif text-brand-charcoal/95 leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      );
                    }

                    if (sec.type === 'box_cta') {
                      return (
                        <div key={idx} className="mt-10 rounded-2xl bg-brand-charcoal p-6 sm:p-10 text-brand-sand block shadow-md border border-stone-850">
                          <h4 className="font-serif text-xl sm:text-2xl font-bold tracking-tight">
                            {sec.ctaTitle}
                          </h4>
                          <p className="mt-3.5 text-xs sm:text-[13.5px] leading-relaxed text-brand-sand/80 font-medium">
                            {sec.ctaDesc}
                          </p>
                          <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a
                              href="mailto:hello@beacon.bodjitechnologies.ai?subject=Schedule Meeting with Bodji Technologies"
                              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-rust px-6 py-3.5 text-xs font-bold text-white transition-all hover:bg-brand-rust/80 focus:outline-none text-center"
                            >
                              <Calendar className="h-4 w-4" />
                              Schedule a meeting
                            </a>
                            <button
                              onClick={onBackToMain}
                              className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-sand/35 hover:bg-brand-sand/10 px-6 py-3.5 text-xs font-bold text-brand-sand transition-all focus:outline-none"
                            >
                              See a real example
                            </button>
                          </div>
                        </div>
                      );
                    }

                    return null;
                  })}
                </div>

                {/* Chapter Pagination Footers */}
                <div className="mt-14 pt-8 border-t border-brand-dark/5 flex items-center justify-between">
                  {selectedChapterId > 1 ? (
                    <button
                      onClick={() => setSelectedChapterId(prev => prev - 1)}
                      className="flex items-center gap-1.5 text-xs font-semibold text-brand-taupe hover:text-brand-dark focus:outline-none"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Prev Chapter
                    </button>
                  ) : <div />}

                  {selectedChapterId < chapters.length ? (
                    <button
                      onClick={() => setSelectedChapterId(prev => prev + 1)}
                      className="group flex items-center gap-1.5 text-xs font-bold text-brand-rust hover:text-brand-dark focus:outline-none"
                    >
                      Next Chapter
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  ) : (
                    <button
                      onClick={onBackToMain}
                      className="rounded-lg bg-teal-50 text-brand-sage border border-brand-sage/20 px-3.5 py-1.5 text-xs font-semibold hover:bg-brand-sage hover:text-white"
                    >
                      Complete & return to main page
                    </button>
                  )}
                </div>

              </motion.div>
            </AnimatePresence>
          </main>

        </div>

      </div>
    </div>
  );
}
