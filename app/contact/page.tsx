'use client';

import { useState } from 'react';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  orderNumber: string;
  topic: string;
  message: string;
  file: File | null;
}

interface FormErrors {
  name?: string;
  email?: string;
  topic?: string;
  message?: string;
}

const FAQ_ITEMS = [
  {
    question: 'How do I set up my Lumivex for the first time?',
    answer:
      'Download the Lumivex app from the App Store or Google Play. Open the app, create an account, and tap "Add Device." Hold the side button on your Lumivex for 3 seconds until the screen lights up, then follow the in-app pairing instructions. Setup typically takes under 2 minutes.',
  },
  {
    question: "My watch isn't syncing — what should I do?",
    answer:
      'First, ensure Bluetooth is enabled on your phone and the Lumivex app is running in the background. Try toggling Bluetooth off and on. If the issue persists, open the app, go to Settings › Device, and tap "Forget Device," then re-pair. A watch restart (hold side button 10 seconds) resolves most sync issues.',
  },
  {
    question: 'How do I return or exchange my order?',
    answer:
      'We offer a 30-day hassle-free return policy. Log in to your account, navigate to Orders, and select "Return or Exchange." Print the prepaid shipping label and drop off at any UPS location. Refunds are processed within 5–7 business days of receiving your return.',
  },
  {
    question: 'Is my health data stored securely?',
    answer:
      'Absolutely. All health data is encrypted end-to-end using AES-256 encryption. Your data is stored on SOC 2 Type II certified servers and is never sold to third parties. You can export or permanently delete your data at any time from the app under Settings › Privacy.',
  },
  {
    question: 'How do I update the firmware?',
    answer:
      'Firmware updates are delivered automatically via the Lumivex app. Ensure your watch has at least 30% battery and is connected to your phone. Open the app and tap the banner notification, or go to Settings › Device › Firmware Update. Keep the watch near your phone during the update (approx. 5 minutes).',
  },
  {
    question: 'What is the battery life and how do I extend it?',
    answer:
      'Lumivex offers up to 7 days of battery life in standard mode and 14 days in power-saving mode. To extend battery life, reduce screen brightness, disable always-on display, and limit GPS usage to workouts only. These settings are accessible under Settings › Battery in the app.',
  },
  {
    question: 'Can I swim or shower with my Lumivex?',
    answer:
      'Yes! Lumivex is rated 5ATM water resistant, meaning it can withstand water pressure up to 50 meters. It is safe for swimming, showering, and rain. We recommend rinsing with fresh water after exposure to salt water or chlorine to maintain the seal and finish.',
  },
  {
    question: 'How accurate is the health tracking?',
    answer:
      'Lumivex uses medical-grade sensors validated against clinical standards. Heart rate accuracy is within ±2 BPM, SpO2 within ±2%, and sleep tracking has been validated in a third-party study with 94% accuracy. For critical health decisions, always consult a healthcare professional.',
  },
  {
    question: 'How do I cancel or modify my order?',
    answer:
      'Orders can be modified or cancelled within 1 hour of placement. Log in to your account, go to Orders, and select "Modify" or "Cancel." After 1 hour, orders enter fulfillment and cannot be changed — in that case, use our return process once the item arrives.',
  },
  {
    question: 'Do you offer international shipping?',
    answer:
      'We ship to over 40 countries worldwide. International shipping typically takes 7–14 business days. Import duties and taxes may apply depending on your country and are the responsibility of the recipient. Free shipping is available on orders over $150 to select regions.',
  },
];

const TOPICS = [
  { value: '', label: 'Select a topic...' },
  { value: 'order-status', label: 'Order Status' },
  { value: 'technical-support', label: 'Technical Support' },
  { value: 'returns', label: 'Returns & Exchanges' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'press', label: 'Press & Media' },
  { value: 'general', label: 'General Inquiry' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    orderNumber: '',
    topic: '',
    message: '',
    file: null,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [fileName, setFileName] = useState<string>('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else {
      const emailParts = formData.email.split('@');
      if (emailParts.length !== 2 || !emailParts[1].includes('.')) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }
    if (!formData.topic) {
      newErrors.topic = 'Please select a topic.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, file }));
    setFileName(file ? file.name : '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', orderNumber: '', topic: '', message: '', file: null });
    setErrors({});
    setSubmitted(false);
    setFileName('');
  };

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const leftFaqs = FAQ_ITEMS.slice(0, 5);
  const rightFaqs = FAQ_ITEMS.slice(5, 10);

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#F8FAFC', minHeight: '100vh' }}>
      <Navigation />

      {/* ── HERO ── */}
      <section
        style={{
          background: '#ffffff',
          borderBottom: '1px solid #E2E8F0',
          minHeight: '280px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '48px 24px',
            width: '100%',
          }}
        >
          {/* Breadcrumb */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '24px',
              fontSize: '14px',
              color: '#94A3B8',
            }}
          >
            <Link href="/" style={{ color: '#94A3B8', textDecoration: 'none' }}>
              Home
            </Link>
            <span style={{ color: '#CBD5E1' }}>›</span>
            <span style={{ color: '#0EA5E9', fontWeight: 500 }}>Contact</span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 700,
              color: '#0F172A',
              margin: '0 0 16px 0',
              lineHeight: 1.15,
            }}
          >
            We&apos;re Here to{' '}
            <span style={{ color: '#0EA5E9' }}>Help</span>
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: '#64748B',
              margin: '0 0 36px 0',
              maxWidth: '560px',
              lineHeight: 1.6,
            }}
          >
            Have a question, need support, or want to explore a partnership? Reach out — our team
            typically responds within a few hours.
          </p>

          {/* Support Channel Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              alignItems: 'center',
            }}
          >
            {/* Live Chat — filled */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#0EA5E9',
                color: '#ffffff',
                borderRadius: '100px',
                padding: '10px 20px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(14,165,233,0.35)',
              }}
            >
              <span>💬</span>
              <span>Live Chat — Online Now</span>
            </div>

            {/* Email — ghost */}
            <a
              href="mailto:hello@lumivex.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                color: '#0F172A',
                border: '1.5px solid #CBD5E1',
                borderRadius: '100px',
                padding: '10px 20px',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
            >
              <span>📧</span>
              <span>Email — hello@lumivex.com</span>
            </a>

            {/* Phone — ghost */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                color: '#0F172A',
                border: '1.5px solid #CBD5E1',
                borderRadius: '100px',
                padding: '10px 20px',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              <span>📞</span>
              <span>Phone — Mon-Fri 9am-6pm EST</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section style={{ padding: '80px 24px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ marginBottom: '48px' }}>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#0EA5E9',
                margin: '0 0 10px 0',
              }}
            >
              Get in Touch
            </p>
            <h2
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(26px, 4vw, 40px)',
                fontWeight: 700,
                color: '#0F172A',
                margin: '0 0 12px 0',
              }}
            >
              Send Us a Message
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', margin: 0, maxWidth: '500px' }}>
              Fill out the form and we&apos;ll get back to you within 1–2 business hours.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 3fr) minmax(0, 2fr)',
              gap: '48px',
              alignItems: 'start',
            }}
          >
            {/* LEFT: Form */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                border: '1px solid #E2E8F0',
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div
                    style={{
                      width: '72px',
                      height: '72px',
                      background: 'linear-gradient(135deg, #0EA5E9, #38BDF8)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 24px',
                      fontSize: '32px',
                    }}
                  >
                    ✓
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '26px',
                      fontWeight: 700,
                      color: '#0F172A',
                      margin: '0 0 12px 0',
                    }}
                  >
                    Message Sent!
                  </h3>
                  <p style={{ color: '#64748B', fontSize: '16px', margin: '0 0 32px 0', lineHeight: 1.6 }}>
                    Thanks for reaching out, {formData.name.split(' ')[0]}! We&apos;ve received your message and
                    will reply to {formData.email} within 1–2 business hours.
                  </p>
                  <button
                    onClick={handleReset}
                    style={{
                      background: '#0EA5E9',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '10px',
                      padding: '12px 28px',
                      fontSize: '15px',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '20px',
                      marginBottom: '20px',
                    }}
                  >
                    {/* Name */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '13px',
                          fontWeight: 600,
                          color: '#374151',
                          marginBottom: '6px',
                          letterSpacing: '0.3px',
                        }}
                      >
                        Full Name <span style={{ color: '#EF4444' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          border: `1.5px solid ${errors.name ? '#EF4444' : '#E2E8F0'}`,
                          borderRadius: '10px',
                          fontSize: '15px',
                          color: '#0F172A',
                          background: '#F8FAFC',
                          outline: 'none',
                          boxSizing: 'border-box',
                          transition: 'border-color 0.2s',
                        }}
                      />
                      {errors.name && (
                        <p style={{ color: '#EF4444', fontSize: '12px', margin: '4px 0 0 0' }}>
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '13px',
                          fontWeight: 600,
                          color: '#374151',
                          marginBottom: '6px',
                          letterSpacing: '0.3px',
                        }}
                      >
                        Email Address <span style={{ color: '#EF4444' }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          border: `1.5px solid ${errors.email ? '#EF4444' : '#E2E8F0'}`,
                          borderRadius: '10px',
                          fontSize: '15px',
                          color: '#0F172A',
                          background: '#F8FAFC',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                      {errors.email && (
                        <p style={{ color: '#EF4444', fontSize: '12px', margin: '4px 0 0 0' }}>
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '20px',
                      marginBottom: '20px',
                    }}
                  >
                    {/* Order Number */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '13px',
                          fontWeight: 600,
                          color: '#374151',
                          marginBottom: '6px',
                          letterSpacing: '0.3px',
                        }}
                      >
                        Order Number{' '}
                        <span style={{ color: '#94A3B8', fontWeight: 400 }}>(optional)</span>
                      </label>
                      <input
                        type="text"
                        name="orderNumber"
                        value={formData.orderNumber}
                        onChange={handleChange}
                        placeholder="LMX-123456"
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          border: '1.5px solid #E2E8F0',
                          borderRadius: '10px',
                          fontSize: '15px',
                          color: '#0F172A',
                          background: '#F8FAFC',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>

                    {/* Topic */}
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '13px',
                          fontWeight: 600,
                          color: '#374151',
                          marginBottom: '6px',
                          letterSpacing: '0.3px',
                        }}
                      >
                        Topic <span style={{ color: '#EF4444' }}>*</span>
                      </label>
                      <select
                        name="topic"
                        value={formData.topic}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          border: `1.5px solid ${errors.topic ? '#EF4444' : '#E2E8F0'}`,
                          borderRadius: '10px',
                          fontSize: '15px',
                          color: formData.topic ? '#0F172A' : '#94A3B8',
                          background: '#F8FAFC',
                          outline: 'none',
                          boxSizing: 'border-box',
                          cursor: 'pointer',
                          appearance: 'none',
                        }}
                      >
                        {TOPICS.map((t) => (
                          <option key={t.value} value={t.value} disabled={t.value === ''}>
                            {t.label}
                          </option>
                        ))}
                      </select>
                      {errors.topic && (
                        <p style={{ color: '#EF4444', fontSize: '12px', margin: '4px 0 0 0' }}>
                          {errors.topic}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: '20px' }}>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#374151',
                        marginBottom: '6px',
                        letterSpacing: '0.3px',
                      }}
                    >
                      Message <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe your issue or question in detail. The more context you provide, the faster we can help."
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        border: `1.5px solid ${errors.message ? '#EF4444' : '#E2E8F0'}`,
                        borderRadius: '10px',
                        fontSize: '15px',
                        color: '#0F172A',
                        background: '#F8FAFC',
                        outline: 'none',
                        resize: 'vertical',
                        lineHeight: 1.6,
                        boxSizing: 'border-box',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    />
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '4px',
                      }}
                    >
                      {errors.message ? (
                        <p style={{ color: '#EF4444', fontSize: '12px', margin: 0 }}>
                          {errors.message}
                        </p>
                      ) : (
                        <span />
                      )}
                      <span style={{ fontSize: '12px', color: '#94A3B8' }}>
                        {formData.message.length} / 2000
                      </span>
                    </div>
                  </div>

                  {/* File Attachment */}
                  <div style={{ marginBottom: '28px' }}>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#374151',
                        marginBottom: '6px',
                        letterSpacing: '0.3px',
                      }}
                    >
                      Attach a Photo{' '}
                      <span style={{ color: '#94A3B8', fontWeight: 400 }}>
                        (optional — for device issues)
                      </span>
                    </label>
                    <label
                      htmlFor="file-upload"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 16px',
                        border: '1.5px dashed #CBD5E1',
                        borderRadius: '10px',
                        background: '#F8FAFC',
                        cursor: 'pointer',
                        transition: 'border-color 0.2s',
                      }}
                    >
                      <span style={{ fontSize: '20px' }}>📎</span>
                      <span style={{ fontSize: '14px', color: fileName ? '#0F172A' : '#94A3B8' }}>
                        {fileName || 'Click to upload — PNG, JPG, GIF up to 10MB'}
                      </span>
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/png,image/jpeg,image/gif"
                      onChange={handleFileChange}
                      style={{ display: 'none' }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    style={{
                      width: '100%',
                      padding: '14px 24px',
                      background: submitting
                        ? '#7DD3FC'
                        : 'linear-gradient(135deg, #0EA5E9, #0284C7)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '16px',
                      fontWeight: 700,
                      cursor: submitting ? 'not-allowed' : 'pointer',
                      letterSpacing: '0.3px',
                      boxShadow: submitting ? 'none' : '0 4px 16px rgba(14,165,233,0.4)',
                      transition: 'all 0.2s',
                      fontFamily: 'Outfit, sans-serif',
                    }}
                  >
                    {submitting ? 'Sending...' : 'Send Message →'}
                  </button>

                  <p style={{ fontSize: '12px', color: '#94A3B8', textAlign: 'center', margin: '14px 0 0 0' }}>
                    We respond within 1–2 business hours · Mon–Fri 9am–6pm EST
                  </p>
                </form>
              )}
            </div>

            {/* RIGHT: Support Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Response Time Card */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #0EA5E9 0%, #0369A1 100%)',
                  borderRadius: '20px',
                  padding: '32px',
                  color: '#ffffff',
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>⚡</div>
                <h3
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '20px',
                    fontWeight: 700,
                    margin: '0 0 8px 0',
                  }}
                >
                  Fast Response Guarantee
                </h3>
                <p style={{ fontSize: '14px', opacity: 0.9, margin: '0 0 20px 0', lineHeight: 1.6 }}>
                  Our support team is committed to responding to every inquiry within 1–2 business
                  hours during operating hours.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { label: 'Avg. First Response', value: '47 minutes' },
                    { label: 'Resolution Rate', value: '96.4%' },
                    { label: 'Customer Satisfaction', value: '4.9 / 5.0' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'rgba(255,255,255,0.15)',
                        borderRadius: '8px',
                        padding: '8px 12px',
                      }}
                    >
                      <span style={{ fontSize: '13px', opacity: 0.85 }}>{stat.label}</span>
                      <span style={{ fontSize: '14px', fontWeight: 700 }}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '28px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#0F172A',
                    margin: '0 0 20px 0',
                  }}
                >
                  Contact Details
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { icon: '📧', label: 'General Support', value: 'hello@lumivex.com' },
                    { icon: '🤝', label: 'Partnerships', value: 'partners@lumivex.com' },
                    { icon: '📧', label: 'Press & Media', value: 'press@lumivex.com' },
                    { icon: '📍', label: 'Headquarters', value: 'Helsinki, Finland' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '20px' }}>{item.icon}</span>
                      <div>
                        <div style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '2px' }}>{item.label}</div>
                        <div style={{ fontSize: '15px', fontWeight: 500, color: '#0F172A' }}>{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}