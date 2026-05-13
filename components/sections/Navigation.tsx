'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Products', href: '/products' },
  { label: 'Technology', href: '/technology' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-border-light shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-site mx-auto px-6 h-[72px] flex items-center justify-between gap-8">
        <Link href="/" className="font-outfit text-xl font-extrabold text-text-primary tracking-tight shrink-0" aria-label="Lumivex Home">
          Lumi<span className="text-primary">vex</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-primary bg-primary-light'
                  : 'text-text-primary hover:text-primary hover:bg-primary-light/40'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 rounded-lg hover:bg-primary-light/50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`block w-[22px] h-[2px] bg-text-primary rounded-sm transition-all duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-[22px] h-[2px] bg-text-primary rounded-sm transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-[22px] h-[2px] bg-text-primary rounded-sm transition-all duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`fixed inset-x-0 top-[72px] bottom-0 bg-white/95 backdrop-blur-xl z-[999] flex flex-col p-6 gap-2 overflow-y-auto transition-transform duration-350 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-outfit text-lg font-semibold px-5 py-4 rounded-xl transition-colors border-b border-border-light ${
              pathname === link.href ? 'text-primary bg-primary-light' : 'text-text-primary'
            }`}
          >
            {link.label}
          </Link>
        ))}
        <div className="mt-6 p-5 bg-primary-light rounded-xl">
          <p className="text-sm text-text-muted leading-relaxed">
            <strong className="text-primary font-outfit">Lumivex</strong> — Wear the Future. Live the Moment.
          </p>
        </div>
      </div>
    </nav>
  );
}
