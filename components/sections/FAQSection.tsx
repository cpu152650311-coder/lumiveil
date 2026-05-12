'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  subtitle: string;
  questions: FAQItem[];
}

export default function FAQSection({ title, subtitle, questions }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-bg-main py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary text-center">{title}</h2>
        {subtitle && <p className="text-text-muted text-lg text-center mt-2 mb-10">{subtitle}</p>}
        <div className="space-y-3">
          {questions.map((q, i) => (
            <div key={i} className="bg-white rounded-card border border-border-light shadow-card overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center gap-4 font-outfit font-semibold text-text-primary hover:bg-accent-light/30 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{q.question}</span>
                <svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  className={`shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                >
                  <path d="M4 6l4 4 4-4" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === i ? 'pb-4 max-h-96' : 'max-h-0'}`}>
                <p className="text-text-muted leading-relaxed">{q.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
