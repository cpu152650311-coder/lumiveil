import Link from 'next/link';

const productLinks = [
  { label: 'Lumivex Apex', href: '/products' },
  { label: 'Lumivex Pulse', href: '/products' },
  { label: 'Lumivex Core', href: '/products' },
  { label: 'Accessories', href: '/products' },
  { label: 'Compare Models', href: '/products#comparison' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Technology', href: '/technology' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Warranty', href: '#' },
  { label: 'Returns', href: '#' },
];

const socialLinks = [
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h-3.308l-7.955 8.435L3.686 2.25H.08l7.03 9.65-7.03 7.85h3.31l6.391-6.775 5.198 6.775h3.606l-7.403-10.15 7.06-7.6z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-light">
      <div className="max-w-site mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="font-outfit text-xl font-bold text-text-primary mb-3">Lumivex</div>
          <p className="text-sm text-text-muted leading-relaxed max-w-[240px]">
            Clinical-grade smartwatches combining titanium durability with AI health intelligence. Wear the Future. Live the Moment.
          </p>
          <div className="flex gap-3 mt-4">
            {socialLinks.map((link, i) => (
              <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-4">Products</h4>
          <ul className="space-y-2">
            {productLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.href} className="text-sm text-text-muted hover:text-accent transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-4">Company</h4>
          <ul className="space-y-2">
            {companyLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.href} className="text-sm text-text-muted hover:text-accent transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-4">Legal</h4>
          <ul className="space-y-2">
            {legalLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.href} className="text-sm text-text-muted hover:text-accent transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-site mx-auto px-6 pb-8 text-center text-xs text-text-muted border-t border-border-light pt-6">
        &copy; {new Date().getFullYear()} Lumivex. All rights reserved.
      </div>
    </footer>
  );
}
