'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'background 0.3s ease, box-shadow 0.3s ease, border-bottom 0.3s ease',
    background: scrolled ? 'rgba(248, 250, 252, 0.92)' : 'transparent',
    boxShadow: scrolled ? '0 4px 24px rgba(14, 165, 233, 0.10), 0 1px 4px rgba(15, 23, 42, 0.06)' : 'none',
    borderBottom: scrolled ? '1px solid #E2E8F0' : '1px solid transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
  };

  const innerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    height: '72px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '32px',
  };

  const logoStyle: React.CSSProperties = {
    fontFamily: 'Outfit, sans-serif',
    fontWeight: 800,
    fontSize: '1.5rem',
    letterSpacing: '-0.03em',
    color: '#0F172A',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexShrink: 0,
  };

  const logoAccentStyle: React.CSSProperties = {
    color: '#0EA5E9',
  };

  const logoIconStyle: React.CSSProperties = {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  };

  const desktopLinksStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    flex: 1,
    justifyContent: 'center',
  };

  const getLinkStyle = (href: string): React.CSSProperties => ({
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    fontSize: '0.9375rem',
    color: pathname === href ? '#0EA5E9' : '#0F172A',
    textDecoration: 'none',
    padding: '8px 14px',
    borderRadius: '8px',
    transition: 'color 0.2s ease, background 0.2s ease',
    background: pathname === href ? '#E0F2FE' : 'transparent',
    position: 'relative',
  });

  const ctaStyle: React.CSSProperties = {
    fontFamily: 'Outfit, sans-serif',
    fontWeight: 600,
    fontSize: '0.9375rem',
    color: '#ffffff',
    textDecoration: 'none',
    padding: '10px 22px',
    borderRadius: '10px',
    background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
    boxShadow: '0 2px 12px rgba(14, 165, 233, 0.35)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    flexShrink: 0,
    display: 'inline-block',
    letterSpacing: '0.01em',
  };

  const hamburgerStyle: React.CSSProperties = {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '8px',
    background: 'transparent',
    border: 'none',
    outline: 'none',
  };

  const barStyle = (open: boolean, index: number): React.CSSProperties => {
    const base: React.CSSProperties = {
      width: '22px',
      height: '2px',
      background: '#0F172A',
      borderRadius: '2px',
      transition: 'transform 0.3s ease, opacity 0.3s ease',
      display: 'block',
    };
    if (open) {
      if (index === 0) return { ...base, transform: 'translateY(7px) rotate(45deg)' };
      if (index === 1) return { ...base, opacity: 0 };
      if (index === 2) return { ...base, transform: 'translateY(-7px) rotate(-45deg)' };
    }
    return base;
  };

  const mobileMenuStyle: React.CSSProperties = {
    position: 'fixed',
    top: '72px',
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(248, 250, 252, 0.98)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    zIndex: 999,
    display: 'flex',
    flexDirection: 'column',
    padding: '32px 24px',
    gap: '8px',
    transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    overflowY: 'auto',
  };

  const mobileLinkStyle = (href: string): React.CSSProperties => ({
    fontFamily: 'Outfit, sans-serif',
    fontWeight: 600,
    fontSize: '1.25rem',
    color: pathname === href ? '#0EA5E9' : '#0F172A',
    textDecoration: 'none',
    padding: '16px 20px',
    borderRadius: '12px',
    background: pathname === href ? '#E0F2FE' : 'transparent',
    display: 'block',
    transition: 'background 0.2s ease, color 0.2s ease',
    borderBottom: '1px solid #E2E8F0',
  });

  const mobileCTAStyle: React.CSSProperties = {
    fontFamily: 'Outfit, sans-serif',
    fontWeight: 700,
    fontSize: '1.125rem',
    color: '#ffffff',
    textDecoration: 'none',
    padding: '16px 24px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
    boxShadow: '0 4px 16px rgba(14, 165, 233, 0.35)',
    display: 'block',
    textAlign: 'center',
    marginTop: '16px',
  };

  return (
    <nav style={navStyle} role="navigation" aria-label="Main navigation">
      <div style={innerStyle}>
        <Link href="/" style={logoStyle} aria-label="Lumivex Home">
          <span style={logoIconStyle} aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="2" />
              <circle cx="9" cy="9" r="3" fill="white" />
              <line x1="9" y1="2" x2="9" y2="4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="9" y1="13.5" x2="9" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="2" y1="9" x2="4.5" y2="9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="13.5" y1="9" x2="16" y2="9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
          Lumi<span style={logoAccentStyle}>vex</span>
        </Link>

        <div
          style={desktopLinksStyle}
          className="lumivex-desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={getLinkStyle(link.href)}
              onMouseEnter={(e) => {
                if (pathname !== link.href) {
                  (e.currentTarget as HTMLAnchorElement).style.background = '#F0F9FF';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#0EA5E9';
                }
              }}
              onMouseLeave={(e) => {
                if (pathname !== link.href) {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#0F172A';
                }
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link
            href="/products"
            style={ctaStyle}
            className="lumivex-cta"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 20px rgba(14, 165, 233, 0.45)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 2px 12px rgba(14, 165, 233, 0.35)';
            }}
          >
            Shop Now
          </Link>

          <button
            style={{ ...hamburgerStyle, display: 'flex' }}
            className="lumivex-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span style={barStyle(menuOpen, 0)} />
            <span style={barStyle(menuOpen, 1)} />
            <span style={barStyle(menuOpen, 2)} />
          </button>
        </div>
      </div>

      <div style={mobileMenuStyle} aria-hidden={!menuOpen}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={mobileLinkStyle(link.href)}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/products" style={mobileCTAStyle}>
          Shop Now
        </Link>
        <div style={{ marginTop: '32px', padding: '20px', background: '#F0F9FF', borderRadius: '12px' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#64748B', margin: 0, lineHeight: 1.6 }}>
            <strong style={{ color: '#0EA5E9', fontFamily: 'Outfit, sans-serif' }}>Lumivex</strong> — Wear the Future. Live the Moment.
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .lumivex-hamburger { display: none !important; }
          .lumivex-desktop-nav { display: flex !important; }
        }
        @media (max-width: 767px) {
          .lumivex-desktop-nav { display: none !important; }
          .lumivex-hamburger { display: flex !important; }
          .lumivex-cta { padding: 8px 16px !important; font-size: 0.875rem !important; }
        }
      `}</style>
    </nav>
  );
}