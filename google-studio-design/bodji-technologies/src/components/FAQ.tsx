/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { faqs } from '../data';
import { FAQItem } from '../types';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('mcp-endpoint');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="mx-auto max-w-4xl px-6 py-20 border-t border-brand-dark/5">
      
      {/* Editorial Title Block */}
      <div className="text-center pb-12">
        <div className="mx-auto inline-flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-brand-rust">
          <MessageSquare className="h-5 w-5" />
        </div>
        <h2 className="mt-4 font-serif text-3xl font-extrabold tracking-tight text-brand-dark md:text-4xl">
          Common questions
        </h2>
        <p className="mt-3.5 text-sm font-medium text-brand-taupe leading-relaxed">
          A few things business owners usually ask before getting started.
        </p>
      </div>

      {/* Structured Accordion Grid */}
      <div className="mt-4 border-t border-brand-dark/10 divide-y divide-brand-dark/10">
        {faqs.map((faq: FAQItem) => {
          const isOpen = openId === faq.id;
          return (
            <div key={faq.id} className="py-4 sm:py-5.5 first:pt-0">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="flex w-full items-center justify-between gap-4 text-left font-serif text-base font-extrabold text-brand-dark tracking-tight sm:text-lg hover:text-brand-rust transition duration-200 focus:outline-none"
                aria-expanded={isOpen}
                id={`faq-btn-${faq.id}`}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-brand-taupe/85 transform transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-brand-rust' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 text-xs sm:text-sm text-brand-taupe leading-relaxed max-w-3xl pr-6 font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

    </section>
  );
}
