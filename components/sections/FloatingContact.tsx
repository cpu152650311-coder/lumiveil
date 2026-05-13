'use client';

import { useState } from 'react';
import ContactModal from './ContactModal';

interface FloatingContactProps {
  label?: string;
  className?: string;
}

export default function FloatingContact({ label = 'Contact', className = '' }: FloatingContactProps) {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className={`fixed bottom-6 right-6 z-[1999] bg-primary text-white font-outfit font-semibold px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2 ${className}`}
        aria-label="Open contact form"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        </svg>
        <span className="hidden sm:inline">{label}</span>
      </button>
      <ContactModal isOpen={show} onClose={() => setShow(false)} />
    </>
  );
}

interface ContactButtonProps {
  label: string;
  variant?: 'accent' | 'outline';
}

export function ContactButton({ label, variant = 'accent' }: ContactButtonProps) {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className={variant === 'accent' ? 'btn-accent' : 'btn-outline'}
      >
        {label}
      </button>
      <ContactModal isOpen={show} onClose={() => setShow(false)} />
    </>
  );
}
