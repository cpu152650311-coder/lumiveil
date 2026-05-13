import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-bg-main text-text-primary">
      <div className="max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-text-muted">404</p>
        <h1 className="mt-4 text-4xl font-bold">Page not found</h1>
        <p className="mt-4 text-text-muted">The page you are looking for does not exist or has been moved.</p>
        <Link href="/" className="inline-flex mt-8 rounded-full bg-accent px-6 py-3 text-white font-medium">Return home</Link>
      </div>
    </main>
  );
}
