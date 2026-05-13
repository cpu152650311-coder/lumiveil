'use client';

import Link from 'next/link';
import { useState } from 'react';
import ContactModal from './ContactModal';

const productLinks = [
  { label: 'Lumivex Apex', href: '/products/lumivex-apex' },
  { label: 'Lumivex Apex Sport', href: '/products/lumivex-apex-sport' },
  { label: 'Lumivex Pulse', href: '/products/lumivex-pulse' },
  { label: 'Lumivex Core', href: '/products/lumivex-core' },
  { label: 'Compare All Models', href: '/products' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Technology', href: '/technology' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <footer className="bg-white border-t border-border-light">
        <div className="max-w-site mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="font-outfit text-xl font-bold text-text-primary mb-3">Lumivex</div>
            <p className="text-sm text-text-muted leading-relaxed max-w-[240px]">
              Clinical-grade smartwatches combining titanium durability with AI health intelligence. Wear the Future. Live the Moment.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-text-muted hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-text-muted hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@lumivex.com" className="text-sm text-text-muted hover:text-primary transition-colors">
                  hello@lumivex.com
                </a>
              </li>
              <li>
                <a href="tel:+18555864839" className="text-sm text-text-muted hover:text-primary transition-colors">
                  +1 (855) LUMIVEX
                </a>
              </li>
              <li>
                <button
                  onClick={() => setShowContact(true)}
                  className="text-sm text-primary font-semibold hover:opacity-80 transition-opacity mt-1"
                >
                  Send us a message →
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-site mx-auto px-6 pb-8 text-center text-xs text-text-muted border-t border-border-light pt-6">
          &copy; {new Date().getFullYear()} Lumivex. All rights reserved.
        </div>
      </footer>
      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
    </>
  );
}
