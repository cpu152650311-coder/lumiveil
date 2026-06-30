'use client';

import { useState, useEffect, useCallback, FormEvent } from 'react';
import Link from 'next/link';

const CONTACT_EMAIL = 'hello@lumivex.com';
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [topic, setTopic] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const reset = useCallback(() => {
    setName('');
    setEmail('');
    setCompany('');
    setTopic('General Inquiry');
    setMessage('');
    setStatus('idle');
    setErrorMsg('');
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!name.trim() || !email.trim()) {
      setErrorMsg('Name and email are required.');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, company, topic, message }),
      });
      if (!res.ok) throw new Error(`Server responded with ${res.status}`);
      setStatus('success');
    } catch {
      setErrorMsg('Something went wrong. Please try again or email us directly at hello@lumivex.com.');
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Contact form">
      <div className="absolute inset-0 bg-text-primary/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto z-10 animate-in">
        <button
          onClick={() => { onClose(); reset(); }}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-bg-main hover:bg-primary-light text-text-muted hover:text-primary transition-colors z-10"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>

        {status === 'success' ? (
          <div className="p-10 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="font-outfit text-2xl font-bold text-text-primary mb-2">Message Sent!</h3>
            <p className="text-text-muted mb-6">We typically respond within 2 hours during business hours.</p>
            <button onClick={() => { onClose(); setTimeout(reset, 300); }} className="btn-accent">Close</button>
          </div>
        ) : (
          <>
            <div className="p-6 border-b border-border-light">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center text-lg">💬</div>
                <div>
                  <h3 className="font-outfit text-xl font-bold text-text-primary">Get in Touch</h3>
                  <p className="text-sm text-text-muted">We typically respond within 2 hours.</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-name" className="block text-sm font-medium text-text-primary mb-1">Name *</label>
                  <input id="modal-name" name="name" type="text" required value={name} onChange={(e) => { setName(e.target.value); if (errorMsg) setErrorMsg(''); }}
                    className="w-full px-4 py-3 rounded-xl border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all text-sm" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="modal-email" className="block text-sm font-medium text-text-primary mb-1">Email *</label>
                  <input id="modal-email" name="email" type="email" required value={email} onChange={(e) => { setEmail(e.target.value); if (errorMsg) setErrorMsg(''); }}
                    className="w-full px-4 py-3 rounded-xl border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all text-sm" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="modal-company" className="block text-sm font-medium text-text-primary mb-1">Company (optional)</label>
                <input id="modal-company" name="company" type="text" value={company} onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all text-sm" placeholder="Your company" />
              </div>
              <div>
                <label htmlFor="modal-topic" className="block text-sm font-medium text-text-primary mb-1">Topic</label>
                <select id="modal-topic" name="topic" value={topic} onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all text-sm bg-white">
                  {['General Inquiry', 'Product Question', 'Bulk / Wholesale', 'Partnership', 'Press / Media', 'Technical Support'].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="modal-message" className="block text-sm font-medium text-text-primary mb-1">Message *</label>
                <textarea id="modal-message" name="message" rows={4} required value={message} onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all text-sm resize-y" placeholder="Tell us what you need..." />
              </div>

              {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

              <button type="submit" disabled={status === 'loading'}
                className="btn-accent w-full text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed">
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </button>
              <p className="text-xs text-text-muted text-center">
                By submitting, you agree to our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>. We never share your data.
              </p>
            </form>
          </>
        )}
      </div>

      <style>{`
        @keyframes modal-in {
          from { opacity: 0; transform: scale(0.95) translateY(12px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-in { animation: modal-in 0.25s cubic-bezier(0.22, 1, 0.36, 1); }
      `}</style>
    </div>
  );
}
