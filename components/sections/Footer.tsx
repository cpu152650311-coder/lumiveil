import Link from 'next/link';

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

const legalLinks = [
  { label: 'Privacy Policy', href: '/legal' },
  { label: 'Terms of Service', href: '/legal' },
  { label: 'Warranty', href: '/legal' },
  { label: 'Returns', href: '/legal' },
];

interface SocialLink { label: string; href: string; icon: React.ReactNode; }
const socialLinks: SocialLink[] = [];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-light">
      <div className="max-w-site mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="font-outfit text-xl font-bold text-text-primary mb-3">Lumivex</div>
          <p className="text-sm text-text-muted leading-relaxed max-w-[240px]">
            Clinical-grade smartwatches combining titanium durability with AI health intelligence. Wear the Future. Live the Moment.
          </p>
          {socialLinks.length > 0 && (
            <div className="flex gap-3 mt-4">
              {socialLinks.map((link, i) => (
                <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors">
                  {link.icon}
                </a>
              ))}
            </div>
          )}
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
