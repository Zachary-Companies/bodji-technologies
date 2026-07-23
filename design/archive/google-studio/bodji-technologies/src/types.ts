/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ContentSection {
  type: 'paragraph' | 'bullet_list' | 'quote' | 'box_cta';
  text?: string;
  items?: string[];
  ctaTitle?: string;
  ctaDesc?: string;
  ctaButtonText?: string;
}

export interface Chapter {
  id: number;
  chapterNum: string;
  title: string;
  subtitle: string;
  content: ContentSection[];
}

export interface Solution {
  id: string;
  name: string;
  tag: string;
  tagline: string;
  description: string;
  benefits: string[];
  colorTheme: 'sage' | 'rust' | 'taupe';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BusinessCheckResult {
  businessName: string;
  city: string;
  scores: {
    visibility: number; // overall AI index score
    readability: number; // MCP/action schema score
    trust: number; // LLM citation alignment score
  };
  checks: {
    title: string;
    status: 'success' | 'warning' | 'pending' | 'checking';
    details: string;
    source: string;
  }[];
  recommendations: string[];
}
