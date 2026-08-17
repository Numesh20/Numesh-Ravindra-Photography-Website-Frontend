'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const STATS = [
  { value: 3,   suffix: "+", label: "Years of Experience",   icon: "📅", desc: "Capturing moments since 2022" },
  { value: 50,  suffix: "+", label: "Happy Clients",          icon: "🤝", desc: "Trusted by families & couples" },
  { value: 104, suffix: "+", label: "Photos in Portfolio",    icon: "📸", desc: "Across 5 curated albums" },
  { value: 15,  suffix: "+", label: "Events Covered",         icon: "🎉", desc: "Weddings, birthdays & more" },
  { value: 100, suffix: "%", label: "Client Satisfaction",    icon: "⭐", desc: "5-star rated service" },
  { value: 9,   suffix: "",  label: "Districts Covered",      icon: "📍", desc: "Available island-wide in Sri Lanka" },
];

const ACHIEVEMENTS = [
  {
    icon: "💍",
    title: "Wedding Specialist",
    desc: "Delivered stunning wedding albums with full-day coverage and premium photobooks for couples across Sri Lanka.",
  },
  {
    icon: "🌿",
    title: "Island-Wide Coverage",
    desc: "Traveled to 9+ districts — from Colombo to Galle, Kandy to Jaffna — to capture your most important moments.",
  },
  {
    icon: "🎯",
    title: "Fast Turnaround",
    desc: "Wedding highlights delivered within 3 days. Full gallery within 4-6 weeks. Always on time, every time.",
  },
  {
    icon: "🏆",
    title: "Professional Equipment",
    desc: "Shooting with Sony Alpha A7 III full-frame camera for sharp, high-resolution images in any lighting condition.",
  },
];

function AnimatedNumber({ target, suffix, start }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const duration = 2000;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target]);

  return <>{current}{suffix}</>;
}

export default function StatsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="ss-root">

      {/* ── Stats Grid ── */}
      <div className="ss-header animate-fade-in">
        <span className="ss-tag">📊 By The Numbers</span>
        <h2 className="section-title">Achievements &amp; Stats</h2>
        <p className="section-desc">
          Every number tells a story — here's what 3+ years of passion and dedication looks like.
        </p>
      </div>

      <div className="ss-stats-grid animate-fade-in">
        {STATS.map((stat, i) => (
          <div key={i} className="ss-stat-card">
            <div className="ss-stat-icon">{stat.icon}</div>
            <div className="ss-stat-number">
              <AnimatedNumber target={stat.value} suffix={stat.suffix} start={visible} />
            </div>
            <p className="ss-stat-label">{stat.label}</p>
            <p className="ss-stat-desc">{stat.desc}</p>
          </div>
        ))}
      </div>

      {/* ── Achievements ── */}
      <div className="ss-achieve-wrap animate-fade-in">
        <span className="ss-tag">🏅 Why Choose Me</span>
        <h2 className="section-title" style={{ marginBottom: '48px' }}>What Sets Me Apart</h2>
        <div className="ss-achieve-grid">
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} className="ss-achieve-card">
              <div className="ss-achieve-icon">{a.icon}</div>
              <h3 className="ss-achieve-title">{a.title}</h3>
              <p className="ss-achieve-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA Strip ── */}
      <div className="ss-cta animate-fade-in">
        <p className="ss-cta-text">Ready to create beautiful memories together?</p>
        <Link href="/booking" className="ss-cta-btn">📅 Book Your Session</Link>
      </div>

      <style jsx>{`
        /* ── Root ── */
        .ss-root {
          padding: 90px 4%;
          background: linear-gradient(180deg, transparent 0%, rgba(212,175,55,0.03) 50%, transparent 100%);
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        /* ── Header ── */
        .ss-header { text-align: center; margin-bottom: 56px; }
        .ss-tag {
          display: inline-block;
          background: rgba(212,175,55,0.1);
          border: 1px solid rgba(212,175,55,0.25);
          color: var(--accent);
          padding: 6px 18px;
          border-radius: 50px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        /* ── Stats Grid ── */
        .ss-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1100px;
          margin: 0 auto 90px;
        }
        .ss-stat-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 32px 24px;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .ss-stat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(212,175,55,0.05) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .ss-stat-card:hover {
          border-color: rgba(212,175,55,0.3);
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.3);
        }
        .ss-stat-card:hover::before { opacity: 1; }
        .ss-stat-icon {
          font-size: 2rem;
          margin-bottom: 16px;
          display: block;
        }
        .ss-stat-number {
          font-size: 2.8rem;
          font-weight: 800;
          color: var(--accent);
          line-height: 1;
          margin-bottom: 10px;
          letter-spacing: -1px;
        }
        .ss-stat-label {
          font-size: 0.88rem;
          font-weight: 700;
          color: rgba(255,255,255,0.75);
          letter-spacing: 0.5px;
          margin: 0 0 8px;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 1px;
        }
        .ss-stat-desc {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.35);
          line-height: 1.5;
          margin: 0;
        }

        /* ── Achievements ── */
        .ss-achieve-wrap {
          text-align: center;
          max-width: 1100px;
          margin: 0 auto 60px;
        }
        .ss-achieve-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .ss-achieve-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 32px 28px;
          text-align: left;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ss-achieve-card:hover {
          border-color: rgba(212,175,55,0.25);
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.25);
        }
        .ss-achieve-icon {
          font-size: 2.2rem;
          width: 56px;
          height: 56px;
          background: rgba(212,175,55,0.08);
          border: 1px solid rgba(212,175,55,0.15);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ss-achieve-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
          letter-spacing: 0.3px;
        }
        .ss-achieve-desc {
          font-size: 0.87rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.7;
          margin: 0;
        }

        /* ── CTA ── */
        .ss-cta {
          text-align: center;
          padding: 48px 24px;
          background: rgba(212,175,55,0.05);
          border: 1px solid rgba(212,175,55,0.12);
          border-radius: 20px;
          max-width: 700px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .ss-cta-text {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.75);
          font-weight: 500;
          margin: 0;
          text-align: left;
        }
        .ss-cta-btn {
          background: var(--accent);
          color: #000;
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none;
          padding: 13px 28px;
          border-radius: 50px;
          transition: all 0.3s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .ss-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(212,175,55,0.4);
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .ss-stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .ss-stats-grid { grid-template-columns: 1fr 1fr; gap: 14px; }
          .ss-achieve-grid { grid-template-columns: 1fr; }
          .ss-cta { flex-direction: column; text-align: center; }
          .ss-cta-text { text-align: center; }
          .ss-stat-number { font-size: 2.2rem; }
        }
      `}</style>
    </section>
  );
}
