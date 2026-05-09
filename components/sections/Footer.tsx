import Link from 'next/link';

const productLinks = [
  { label: 'Lumivex Arc', href: '/products' },
  { label: 'Lumivex Halo', href: '/products' },
  { label: 'Lumivex Pulse', href: '/products' },
  { label: 'Accessories', href: '/products' },
  { label: 'Compare Models', href: '/products' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Technology', href: '/technology' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '#' },
  { label: 'Contact', href: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Warranty', href: '/warranty' },
  { label: 'Returns', href: '/returns' },
];

const socialLinks = [
  {
    label: 'Twitter / X',
    href: 'https://twitter.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h-3.308l-7.955 8.435L3.686 2.25H.08l7.03 9.65-7.03 7.85h3.31l6.391-6.775 5.198 6.775h3.606l-7.403-10.15 7.06-7.6z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ background: '#1e293b', color: '#ffffff', padding: '64px 0 32px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
        <div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>Lumivex</div>
          <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.6, maxWidth: '240px' }}>Clinical-grade smartwatches designed in Helsinki. Wear the future, live the data.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
            {socialLinks.map((link, i) => (
              <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" style={{ color: '#94A3B8' }}>{link.icon}</a>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#CBD5E1' }}>Products</div>
          {productLinks.map((link, i) => (
            <Link key={i} href={link.href} style={{ display: 'block', fontSize: '14px', color: '#94A3B8', textDecoration: 'none', marginBottom: '8px' }}>{link.label}</Link>
          ))}
        </div>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#CBD5E1' }}>Company</div>
          {companyLinks.map((link, i) => (
            <Link key={i} href={link.href} style={{ display: 'block', fontSize: '14px', color: '#94A3B8', textDecoration: 'none', marginBottom: '8px' }}>{link.label}</Link>
          ))}
        </div>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#CBD5E1' }}>Legal</div>
          {legalLinks.map((link, i) => (
            <Link key={i} href={link.href} style={{ display: 'block', fontSize: '14px', color: '#94A3B8', textDecoration: 'none', marginBottom: '8px' }}>{link.label}</Link>
          ))}
        </div>
      </div>
      <div style={{ borderTop: '1px solid #334155', marginTop: '40px', paddingTop: '24px', textAlign: 'center', fontSize: '13px', color: '#64748B', maxWidth: '1280px', margin: '40px auto 0', padding: '24px 24px 0' }}>
        &copy; {new Date().getFullYear()} Lumivex. All rights reserved.
      </div>
    </footer>
  );
}
