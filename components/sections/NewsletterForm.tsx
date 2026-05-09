'use client';

import { useState, FormEvent } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

function validateEmail(email: string): boolean {
  const parts = email.split('@');
  if (parts.length !== 2) return false;
  const [local, domain] = parts;
  if (!local || local.length < 1) return false;
  if (!domain || !domain.includes('.')) return false;
  const domainParts = domain.split('.');
  if (domainParts.some((p) => p.length < 1)) return false;
  return true;
}

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');

    if (!validateEmail(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus('success');
    setEmail('');
  };

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #F0F9FF 0%, #fff 50%, #F0F9FF 100%)',
        border: '2px solid #BAE6FD',
        borderRadius: '24px',
        padding: '56px 40px',
        textAlign: 'center',
        maxWidth: '680px',
        margin: '0 auto',
        boxShadow: '0 4px 24px rgba(14,165,233,0.08)',
      }}
    >
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '16px',
          backgroundColor: '#E0F2FE',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '26px',
          margin: '0 auto 20px',
        }}
      >
        📬
      </div>

      <h2
        style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: 'clamp(24px, 3vw, 36px)',
          fontWeight: 800,
          color: '#0F172A',
          margin: '0 0 10px',
        }}
      >
        Get the Lumivex Health Brief
      </h2>
      <p
        style={{
          fontSize: '16px',
          color: '#64748B',
          margin: '0 0 32px',
          lineHeight: 1.6,
        }}
      >
        Weekly health insights, product launches, and exclusive subscriber-only discounts.
      </p>

      {status === 'success' ? (
        <div
          style={{
            backgroundColor: '#DCFCE7',
            border: '1px solid #86EFAC',
            borderRadius: '12px',
            padding: '16px 24px',
            color: '#166534',
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 600,
            fontSize: '15px',
          }}
        >
          ✓ You&apos;re in! Check your inbox for a welcome gift.
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: '12px',
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errorMsg) setErrorMsg('');
              }}
              placeholder="Enter your email"
              disabled={status === 'loading'}
              style={{
                flex: '1 1 300px',
                maxWidth: '400px',
                padding: '14px 20px',
                borderRadius: '12px',
                border: errorMsg ? '2px solid #EF4444' : '2px solid #E2E8F0',
                fontSize: '15px',
                fontFamily: 'Inter, sans-serif',
                color: '#0F172A',
                backgroundColor: '#fff',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => {
                if (!errorMsg) e.target.style.borderColor = '#0EA5E9';
              }}
              onBlur={(e) => {
                if (!errorMsg) e.target.style.borderColor = '#E2E8F0';
              }}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                flex: '0 0 auto',
                backgroundColor: status === 'loading' ? '#7DD3FC' : '#0EA5E9',
                color: '#fff',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                fontSize: '15px',
                padding: '14px 28px',
                borderRadius: '12px',
                border: 'none',
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                transition: 'background 0.2s',
                whiteSpace: 'nowrap',
              }}
            >
              {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
            </button>
          </div>

          {errorMsg && (
            <p
              style={{
                color: '#EF4444',
                fontSize: '13px',
                margin: '0 0 8px',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {errorMsg}
            </p>
          )}

          <p style={{ fontSize: '12px', color: '#94A3B8', margin: 0 }}>
            Join 48,000+ health-conscious subscribers. Unsubscribe anytime. No spam, ever.
          </p>
        </form>
      )}
    </div>
  );
}