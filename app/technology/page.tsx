'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';

export default function TechnologyPage() {
  const specsRef = useRef<HTMLDivElement>(null);

  const scrollToSpecs = () => {
    specsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: '#F8FAFC', fontFamily: 'Inter, sans-serif', color: '#1E293B' }}>
      <Navigation />

      {/* ─────────────────────────────────────────
          SECTION 1 — HERO
      ───────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #0C2340 60%, #0EA5E9 100%)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '120px 24px 80px',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 64,
            alignItems: 'center',
          }}
        >
          {/* Left */}
          <div>
            <span
              style={{
                display: 'inline-block',
                backgroundColor: 'rgba(14,165,233,0.2)',
                color: '#38BDF8',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: 'uppercase',
                padding: '6px 14px',
                borderRadius: 20,
                marginBottom: 24,
                border: '1px solid rgba(14,165,233,0.3)',
              }}
            >
              Lumivex Technology
            </span>
            <h1
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              Engineering
              <br />
              <span style={{ color: '#38BDF8' }}>You Can Wear</span>
            </h1>
            <p
              style={{
                fontSize: 18,
                color: '#94A3B8',
                lineHeight: 1.7,
                marginBottom: 40,
                maxWidth: 480,
              }}
            >
              The Lumivex Apex packs clinical-grade sensors, AI-powered health intelligence, and aerospace-grade materials into a watch you'll forget you're wearing — until it saves your life.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <button
                onClick={scrollToSpecs}
                style={{
                  backgroundColor: '#0EA5E9',
                  color: '#FFFFFF',
                  padding: '14px 32px',
                  borderRadius: 12,
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 700,
                  fontSize: 16,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  transition: 'background 0.2s',
                }}
              >
                See the Specs →
              </button>
              <Link
                href="/shop"
                style={{
                  backgroundColor: 'transparent',
                  color: '#E2E8F0',
                  padding: '14px 32px',
                  borderRadius: 12,
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 600,
                  fontSize: 16,
                  border: '1px solid rgba(226,232,240,0.3)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                Shop Apex
              </Link>
            </div>

            {/* Quick trust badges */}
            <div style={{ display: 'flex', gap: 24, marginTop: 48, flexWrap: 'wrap' }}>
              {['FDA-Cleared', 'CE Marked', 'ISO 13485'].map((badge) => (
                <div key={badge} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: '#22C55E',
                    }}
                  />
                  <span style={{ color: '#94A3B8', fontSize: 13, fontWeight: 500 }}>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Exploded Watch Diagram */}
          <div style={{ position: 'relative' }}>
            {/* Outer glow */}
            <div
              style={{
                position: 'absolute',
                inset: -40,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'relative',
                backgroundColor: 'rgba(255,255,255,0.04)',
                borderRadius: 24,
                border: '1px solid rgba(255,255,255,0.08)',
                padding: 32,
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Watch Image */}
              <div style={{ position: 'relative', aspectRatio: '1/1', borderRadius: 16, overflow: 'hidden', marginBottom: 24 }}>
                <Image
                  src="/generated/lumivex-apex.webp"
                  alt="Lumivex Apex exploded view"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>

              {/* Sensor Layer Labels */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {[
                  { label: 'ECG Array', color: '#F59E0B' },
                  { label: 'PPG Cluster', color: '#EC4899' },
                  { label: 'Skin Temp Sensor', color: '#10B981' },
                  { label: 'Barometric Altimeter', color: '#8B5CF6' },
                  { label: 'Gyro/Accel Stack', color: '#0EA5E9' },
                  { label: 'SpO₂ Emitter', color: '#EF4444' },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '6px 10px',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      borderRadius: 8,
                      border: `1px solid ${item.color}40`,
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: item.color,
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ color: '#CBD5E1', fontSize: 11, fontWeight: 500 }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          SECTION 2 — HEALTHCORE AI ENGINE
      ───────────────────────────────────────── */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span
              style={{
                display: 'inline-block',
                backgroundColor: '#E0F2FE',
                color: '#0EA5E9',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: 'uppercase',
                padding: '6px 14px',
                borderRadius: 20,
                marginBottom: 16,
              }}
            >
              AI Intelligence
            </span>
            <h2
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 800,
                color: '#0F172A',
                marginBottom: 16,
              }}
            >
              HealthCore AI Engine
            </h2>
            <p style={{ fontSize: 17, color: '#64748B', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              Seven years of research condensed into a neural processing unit that learns you — and keeps you ahead of what your body is about to tell you.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 64,
              alignItems: 'center',
            }}
          >
            {/* Left — App Screenshot / Dashboard Mock */}
            <div
              style={{
                backgroundColor: '#0F172A',
                borderRadius: 32,
                padding: 28,
                boxShadow: '0 40px 80px rgba(14,165,233,0.15)',
              }}
            >
              {/* Health Score Circle */}
              <div style={{ textAlign: 'center', marginBottom: 28 }}>
                <div
                  style={{
                    width: 140,
                    height: 140,
                    borderRadius: '50%',
                    border: '6px solid #0EA5E9',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    background: 'conic-gradient(#0EA5E9 0deg 295deg, rgba(14,165,233,0.15) 295deg 360deg)',
                    boxShadow: '0 0 40px rgba(14,165,233,0.3)',
                  }}
                >
                  <div
                    style={{
                      width: 118,
                      height: 118,
                      borderRadius: '50%',
                      backgroundColor: '#0F172A',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span style={{ fontFamily: 'Outfit, sans-serif', color: '#FFFFFF', fontSize: 36, fontWeight: 800, lineHeight: 1 }}>82</span>
                    <span style={{ color: '#64748B', fontSize: 11, fontWeight: 500 }}>Health Score</span>
                  </div>
                </div>
                <p style={{ color: '#38BDF8', fontSize: 13, fontWeight: 600, marginTop: 12 }}>Excellent — Top 15%</p>
              </div>

              {/* Metric rows */}
              {[
                { label: 'HRV', value: '62 ms', trend: '+4', up: true, bar: '68%', color: '#10B981' },
                { label: 'Sleep Quality', value: '87%', trend: '+2%', up: true, bar: '87%', color: '#8B5CF6' },
                { label: 'Readiness', value: 'High', trend: '', up: true, bar: '80%', color: '#0EA5E9' },
                { label: 'Stress Index', value: '28', trend: '-5', up: false, bar: '28%', color: '#F59E0B' },
              ].map((metric) => (
                <div key={metric.label} style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ color: '#94A3B8', fontSize: 12, fontWeight: 500 }}>{metric.label}</span>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <span style={{ color: '#E2E8F0', fontSize: 13, fontWeight: 600 }}>{metric.value}</span>
                      {metric.trend && (
                        <span style={{ color: metric.up ? '#22C55E' : '#F59E0B', fontSize: 11 }}>
                          {metric.up ? '▲' : '▼'} {metric.trend}
                        </span>
                      )}
                    </div>
                  </div>
                  <div style={{ height: 4, backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 2 }}>
                    <div
                      style={{
                        height: '100%',
                        width: metric.bar,
                        backgroundColor: metric.color,
                        borderRadius: 2,
                        transition: 'width 1s ease',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Right — Feature blocks */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {[
                {
                  icon: '🔬',
                  title: 'Anomaly Detection',
                  desc: 'Flags deviations from your personal baseline, not population averages. Your normal is the benchmark — making early-warning alerts 3× more relevant than generic thresholds.',
                  color: '#EF4444',
                },
                {
                  icon: '🧠',
                  title: 'Predictive Readiness',
                  desc: 'Combines HRV, sleep architecture, and training load to forecast your next 24-hour performance window. Know before your alarm whether today is a push or recover day.',
                  color: '#8B5CF6',
                },
                {
                  icon: '💤',
                  title: 'Sleep Architecture AI',
                  desc: 'Identifies REM, light, and deep sleep stages with 91% accuracy vs. polysomnography. Tracks sleep debt accumulation and recommends optimal bedtime windows nightly.',
                  color: '#0EA5E9',
                },
                {
                  icon: '📈',
                  title: 'Longitudinal Trend Engine',
                  desc: 'Surfaces week-over-week and month-over-month health trajectories. Correlates lifestyle inputs — exercise, nutrition logs, stress — with biometric outcomes over time.',
                  color: '#10B981',
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  style={{
                    display: 'flex',
                    gap: 20,
                    padding: 24,
                    backgroundColor: '#F8FAFC',
                    borderRadius: 16,
                    border: '1px solid #E2E8F0',
                    transition: 'box-shadow 0.2s',
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      backgroundColor: `${feature.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 22,
                      flexShrink: 0,
                    }}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: 17,
                        fontWeight: 700,
                        color: '#0F172A',
                        marginBottom: 8,
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.6 }}>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          SECTION 3 — SENSOR SUITE
      ───────────────────────────────────────── */}
      <section ref={specsRef} style={{ backgroundColor: '#F8FAFC', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span
              style={{
                display: 'inline-block',
                backgroundColor: '#E0F2FE',
                color: '#0EA5E9',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: 'uppercase',
                padding: '6px 14px',
                borderRadius: 20,
                marginBottom: 16,
              }}
            >
              Hardware
            </span>
            <h2
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 800,
                color: '#0F172A',
                marginBottom: 16,
              }}
            >
              Sensor Suite
            </h2>
            <p style={{ fontSize: 17, color: '#64748B', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              Eight clinical-grade sensors working in concert — each independently validated and collectively smarter than their individual sum.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 24,
            }}
          >
            {[
              {
                icon: '💓',
                name: 'Single-Lead ECG',
                type: 'Cardiac Rhythm',
                accuracy: '98.2% sensitivity (FDA study)',
                context: 'Detects atrial fibrillation in real-time, enabling early stroke-risk intervention before symptoms appear.',
                color: '#EF4444',
              },
              {
                icon: '🫀',
                name: 'PPG Heart Rate',
                type: 'Continuous BPM',
                accuracy: '±2 BPM accuracy',
                context: 'Optical photoplethysmography tracks heart rate 24/7, flagging resting-rate anomalies linked to overtraining or illness.',
                color: '#EC4899',
              },
              {
                icon: '🩺',
                name: 'Cuffless Blood Pressure',
                type: 'Systolic / Diastolic',
                accuracy: '±5 mmHg (AAMI standard)',
                context: 'Pulse transit time algorithm estimates BP without a cuff, enabling hypertension trend tracking between clinical visits.',
                color: '#F59E0B',
              },
              {
                icon: '🌡️',
                name: 'Skin Temperature',
                type: 'Continuous °C',
                accuracy: '±0.1°C resolution',
                context: 'Detects fever onset 90 minutes earlier than oral thermometers and tracks circadian rhythm disruption over time.',
                color: '#10B981',
              },
              {
                icon: '🫁',
                name: 'SpO₂ (Blood Oxygen)',
                type: 'Peripheral O₂ Saturation',
                accuracy: '±1% accuracy',
                context: 'Monitors blood oxygen saturation to detect sleep apnea episodes, altitude effects, and early respiratory decline.',
                color: '#0EA5E9',
              },
              {
                icon: '🧭',
                name: 'Dual-Band GPS (L1+L5)',
                type: 'Location & Altitude',
                accuracy: '2.5m accuracy',
                context: 'L5 band eliminates multipath errors in urban canyons and dense forests, delivering sub-3-meter route precision.',
                color: '#8B5CF6',
              },
              {
                icon: '📐',
                name: 'Gyroscope / Accelerometer',
                type: '6-Axis IMU',
                accuracy: '±0.01°/s gyro drift',
                context: 'Detects 85+ activity types automatically, measures gait asymmetry, and quantifies training load with EPOC estimation.',
                color: '#06B6D4',
              },
              {
                icon: '🌤️',
                name: 'Barometric Altimeter',
                type: 'Altitude & Weather',
                accuracy: '±0.5m elevation',
                context: 'Tracks ascent/descent in real-time for hikers and climbers, and predicts weather changes via pressure-trend analysis.',
                color: '#64748B',
              },
            ].map((sensor) => (
              <div
                key={sensor.name}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 20,
                  padding: 28,
                  border: '1px solid #E2E8F0',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top accent bar */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    backgroundColor: sensor.color,
                    borderRadius: '20px 20px 0 0',
                  }}
                />
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    backgroundColor: `${sensor.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 26,
                    marginBottom: 16,
                  }}
                >
                  {sensor.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 17,
                    fontWeight: 700,
                    color: '#0F172A',
                    marginBottom: 4,
                  }}
                >
                  {sensor.name}
                </h3>
                <p style={{ fontSize: 12, color: '#0EA5E9', fontWeight: 600, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                  {sensor.type}
                </p>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    backgroundColor: '#F0FDF4',
                    color: '#16A34A',
                    fontSize: 12,
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: 20,
                    marginBottom: 14,
                    border: '1px solid #BBF7D0',
                  }}
                >
                  ✓ {sensor.accuracy}
                </div>
                <p style={{ fontSize: 13, color: '#64748B', lineHeight: 1.6 }}>{sensor.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          SECTION 4 — BUILT TO LAST (TIMELINE)
      ───────────────────────────────────────── */}
      <section style={{ backgroundColor: '#0F172A', padding: '100px 24px', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <span
              style={{
                display: 'inline-block',
                backgroundColor: 'rgba(14,165,233,0.2)',
                color: '#38BDF8',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: 'uppercase',
                padding: '6px 14px',
                borderRadius: 20,
                marginBottom: 16,
                border: '1px solid rgba(14,165,233,0.3)',
              }}
            >
              Materials
            </span>
            <h2
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: 16,
              }}
            >
              Built to Last
            </h2>
            <p style={{ fontSize: 17, color: '#94A3B8', maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
              Every material chosen for a reason. Every layer engineered to outlast your ambitions.
            </p>
          </div>

          {/* Timeline */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 0,
              position: 'relative',
            }}
          >
            {/* Connecting line */}
            <div
              style={{
                position: 'absolute',
                top: 40,
                left: '12.5%',
                right: '12.5%',
                height: 2,
                backgroundColor: 'rgba(14,165,233,0.3)',
                zIndex: 0,
              }}
            />

            {[
              {
                step: '01',
                icon: '⚙️',
                title: 'Grade 5 Titanium Case',
                desc: '40% lighter than surgical steel with superior corrosion resistance and hypoallergenic surface — rated for a lifetime of daily wear.',
                color: '#94A3B8',
              },
              {
                step: '02',
                icon: '💎',
                title: 'Sapphire Crystal Display',
                desc: '9H hardness rating — second only to diamond. Anti-reflective coating maintains 98% light transmission in direct sunlight.',
                color: '#38BDF8',
              },
              {
                step: '03',
                icon: '🔗',
                title: 'Fluoro-elastomer Band',
                desc: 'Medical-grade FKM rubber resists sweat, UV, and temperature extremes. Dermatologist-tested, latex-free, and soft against skin.',
                color: '#10B981',
              },
              {
                step: '04',
                icon: '🔋',
                title: 'Solid-State Battery Core',
                desc: '21-day mixed-use life. Non-flammable lithium solid-state cell rated for 1,000 full charge cycles with <5% capacity loss.',
                color: '#F59E0B',
              },
            ].map((item, idx) => (
              <div
                key={item.step}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '0 24px',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {/* Step circle */}
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    backgroundColor: '#1E293B',
                    border: `2px solid ${item.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 32,
                    marginBottom: 24,
                    boxShadow: `0 0 24px ${item.color}40`,
                    position: 'relative',
                  }}
                >
                  {item.icon}
                  <div
                    style={{
                      position: 'absolute',
                      top: -8,
                      right: -8,
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      backgroundColor: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 10,
                      fontWeight: 800,
                      color: '#0F172A',
                      fontFamily: 'Outfit, sans-serif',
                    }}
                  >
                    {idx + 1}
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 18,
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: 12,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          SECTION 5 — PERFORMANCE BENCHMARKS
      ───────────────────────────────────────── */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span
              style={{
                display: 'inline-block',
                backgroundColor: '#E0F2FE',
                color: '#0EA5E9',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: 'uppercase',
                padding: '6px 14px',
                borderRadius: 20,
                marginBottom: 16,
              }}
            >
              Benchmarks
            </span>
            <h2
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 800,
                color: '#0F172A',
                marginBottom: 16,
              }}
            >
              Performance Benchmarks
            </h2>
            <p style={{ fontSize: 17, color: '#64748B', maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
              Numbers that matter. Tested under real-world conditions — not lab best-cases.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 24,
            }}
          >
            {[
              {
                number: '21',
                unit: 'Days',
                label: 'Battery Life (Apex, mixed use)',
                icon: '🔋',
                note: 'GPS + always-on HR',
              },
              {
                number: '50',
                unit: 'm',
                label: 'Water Depth Tested',
                icon: '🌊',
                note: 'ISO 22810:2010 certified',
              },
              {
                number: '−20°C to 60°C',
                unit: '',
                label: 'Operating Temperature',
                icon: '🌡️',
                note: 'Arctic to desert-ready',
              },
              {
                number: '98.2',
                unit: '%',
                label: 'ECG AFib Sensitivity',
                icon: '💓',
                note: 'FDA-cleared study',
              },
              {
                number: '±1',
                unit: '%',
                label: 'SpO₂ Accuracy',
                icon: '🫁',
                note: 'vs. clinical oximetry',
              },
              {
                number: '2.5',
                unit: 'm',
                label: 'GPS Accuracy (L1+L5)',
                icon: '🛰️',
                note: 'Dual-band GNSS',
              },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: 20,
                  padding: 28,
                  border: '1px solid #E2E8F0',
                  textAlign: 'center',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 12 }}>{stat.icon}</div>
                <div
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: stat.number.length > 4 ? 22 : 42,
                    fontWeight: 800,
                    color: '#0EA5E9',
                    lineHeight: 1,
                    marginBottom: 4,
                  }}
                >
                  {stat.number}
                  {stat.unit && (
                    <span style={{ fontSize: stat.number.length > 4 ? 14 : 20, color: '#94A3B8', fontWeight: 600, marginLeft: 2 }}>
                      {stat.unit}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#0F172A',
                    marginBottom: 6,
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </p>
                <p style={{ fontSize: 12, color: '#94A3B8' }}>{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          SECTION 6 — CTA
      ───────────────────────────────────────── */}
      <section style={{ backgroundColor: '#E0F2FE', padding: '100px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          {/* Product image */}
          <div
            style={{
              position: 'relative',
              aspectRatio: '1/1',
              width: 200,
              margin: '0 auto 40px',
              filter: 'drop-shadow(0 20px 40px rgba(14,165,233,0.3))',
            }}
          >
            <Image
              src="/generated/lumivex-apex.webp"
              alt="Lumivex Apex"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>

          <span
            style={{
              display: 'inline-block',
              backgroundColor: '#BAE6FD',
              color: '#0369A1',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: 'uppercase',
              padding: '6px 14px',
              borderRadius: 20,
              marginBottom: 24,
            }}
          >
            Get Started
          </span>

          <h2
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 800,
              color: '#0F172A',
              marginBottom: 20,
              lineHeight: 1.15,
            }}
          >
            Experience the Technology
            <br />
            <span style={{ color: '#0EA5E9' }}>Firsthand</span>
          </h2>

          <p
            style={{
              fontSize: 18,
              color: '#475569',
              lineHeight: 1.7,
              marginBottom: 40,
              maxWidth: 560,
              margin: '0 auto 40px',
            }}
          >
            The Lumivex Apex isn't just a watch — it's a clinical-grade health monitor you wear. See for yourself why 200,000+ users call it the most important device they own.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <Link
              href="/shop"
              style={{
                backgroundColor: '#0EA5E9',
                color: '#FFFFFF',
                padding: '16px 48px',
                borderRadius: 14,
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                fontSize: 18,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                boxShadow: '0 8px 32px rgba(14,165,233,0.35)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
            >
              Shop Lumivex Apex →
            </Link>

            <Link
              href="/whitepaper.pdf"
              style={{
                color: '#0369A1',
                fontSize: 15,
                fontWeight: 600,
                textDecoration: 'underline',
                textUnderlineOffset: 3,
              }}
            >
              Download Tech Whitepaper (PDF)
            </Link>
          </div>

          {/* Trust badges */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 24,
              marginTop: 56,
              flexWrap: 'wrap',
            }}
          >
            {[
              { label: 'FDA-Cleared', icon: '🏥', sub: 'ECG & SpO₂' },
              { label: 'CE Marked', icon: '🇪🇺', sub: 'EU Medical Device' },
              { label: 'ISO 13485', icon: '✅', sub: 'Quality Certified' },
            ].map((badge) => (
              <div
                key={badge.label}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 16,
                  padding: '16px 24px',
                  border: '1px solid #BAE6FD',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  boxShadow: '0 2px 12px rgba(14,165,233,0.1)',
                }}
              >
                <span style={{ fontSize: 24 }}>{badge.icon}</span>
                <div>
                  <p
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: 14,
                      fontWeight: 700,
                      color: '#0F172A',
                      marginBottom: 2,
                    }}
                  >
                    {badge.label}
                  </p>
                  <p style={{ fontSize: 12, color: '#64748B' }}>{badge.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Fine print */}
          <p style={{ fontSize: 12, color: '#94A3B8', marginTop: 32, lineHeight: 1.6 }}>
            *Lumivex Apex is not intended to replace professional medical diagnosis. Always consult a qualified healthcare provider for medical decisions.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}