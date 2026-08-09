"use client";

import Link from "next/link";
import { useState } from "react";

const WEDDING_PACKAGES = [
  {
    name: "Basic",
    price: "Rs. 100,000",
    badge: null,
    color: "#888",
    features: [
      "Half day wedding coverage (5 hrs)",
      "150+ professionally edited photos",
      "Online digital gallery",
      "High-resolution downloads",
      "7-day delivery",
    ],
  },
  {
    name: "Standard",
    price: "Rs. 125,000",
    badge: "Most Popular",
    color: "#d4af37",
    features: [
      "Full day wedding coverage (10 hrs)",
      "300+ professionally edited photos",
      "Online digital gallery",
      "High-resolution downloads",
      "Pre-shoot consultation",
      "5-day delivery",
    ],
  },
  {
    name: "Premium",
    price: "Rs. 150,000",
    badge: "Best Value",
    color: "#f0d060",
    features: [
      "Full day wedding coverage (12 hrs)",
      "500+ professionally edited photos",
      "Premium physical photobook",
      "Free outdoor pre-shoot session",
      "Online digital gallery",
      "Same-week delivery",
      "Priority support",
    ],
  },
];

const OTHER_SERVICES = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Portrait Session",
    price: "Rs. 8,000",
    description: "Professional portrait photography for individuals, couples, or families.",
    features: [
      "2 hours studio or outdoor session",
      "25 professionally retouched photos",
      "High-resolution digital delivery",
      "2 outfit changes allowed",
    ],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    title: "Event Coverage",
    price: "Rs. 25,000",
    description: "Comprehensive photography for all types of events and celebrations.",
    features: [
      "Up to 4 hours of live coverage",
      "High-quality candid & formal shots",
      "Next-day social highlights delivery",
      "Shareable online guest gallery",
    ],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Outdoor / Lifestyle",
    price: "Rs. 12,000",
    description: "Natural, relaxed lifestyle photography in beautiful outdoor settings.",
    features: [
      "3 hours outdoor session",
      "50+ edited lifestyle photos",
      "Multiple locations available",
      "High-resolution digital delivery",
    ],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Corporate / Product",
    price: "Rs. 20,000",
    description: "Professional corporate headshots and product photography for your business.",
    features: [
      "4 hours commercial session",
      "Clean studio or on-location",
      "40+ edited professional photos",
      "Commercial usage rights included",
    ],
  },
];

export default function ServicesClient() {
  const [activeWedding, setActiveWedding] = useState(1);

  return (
    <div className="sp-root">

      {/* ── Hero ── */}
      <section className="sp-hero">
        <div className="sp-hero-overlay" />
        <div className="sp-hero-content animate-fade-in">
          <p className="sp-eyebrow">
            <span className="sp-eyebrow-dot" />
            Transparent Pricing · No Hidden Fees
          </p>
          <h1 className="sp-hero-title">
            Services &amp; <span>Pricing</span>
          </h1>
          <p className="sp-hero-sub">
            Professional photography packages tailored for your special moments.<br />
            Based in Mawanella · Available island-wide across Sri Lanka 🇱🇰
          </p>
          <div className="sp-hero-badges">
            <span className="sp-badge">✅ Island-wide Travel</span>
            <span className="sp-badge">📸 50+ Happy Clients</span>
            <span className="sp-badge">⭐ 3+ Years Experience</span>
          </div>
        </div>
      </section>

      {/* ── Wedding Packages ── */}
      <section className="sp-section">
        <div className="sp-section-head animate-fade-in">
          <span className="sp-tag">💍 Weddings</span>
          <h2 className="section-title">Wedding Photography Packages</h2>
          <p className="section-desc">
            Choose the perfect package for your dream wedding day. All packages include professionally edited photos delivered via private online gallery.
          </p>
        </div>

        <div className="sp-wedding-grid animate-fade-in">
          {WEDDING_PACKAGES.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`sp-wedding-card ${i === activeWedding ? "sp-wedding-featured" : ""}`}
              onClick={() => setActiveWedding(i)}
              style={{ "--pkg-color": pkg.color }}
            >
              {pkg.badge && (
                <div className="sp-wedding-badge">{pkg.badge}</div>
              )}
              <div className="sp-wedding-top">
                <h3 className="sp-wedding-name">{pkg.name}</h3>
                <div className="sp-wedding-price">{pkg.price}</div>
                <p className="sp-wedding-per">per wedding</p>
              </div>
              <ul className="sp-wedding-features">
                {pkg.features.map((f, j) => (
                  <li key={j}>
                    <span className="sp-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="sp-wedding-btn">
                Book This Package
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Other Services ── */}
      <section className="sp-section sp-section-alt">
        <div className="sp-section-head animate-fade-in">
          <span className="sp-tag">📷 Other Services</span>
          <h2 className="section-title">More Photography Services</h2>
          <p className="section-desc">
            From portraits to corporate shoots — professional photography for every occasion.
          </p>
        </div>

        <div className="sp-services-grid animate-fade-in">
          {OTHER_SERVICES.map((svc) => (
            <div key={svc.title} className="sp-service-card">
              <div className="sp-service-icon">{svc.icon}</div>
              <div className="sp-service-info">
                <div className="sp-service-top">
                  <h3 className="sp-service-title">{svc.title}</h3>
                  <span className="sp-service-price">{svc.price}</span>
                </div>
                <p className="sp-service-desc">{svc.description}</p>
                <ul className="sp-service-features">
                  {svc.features.map((f, i) => (
                    <li key={i}>
                      <span className="sp-check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="sp-service-btn">
                  Book Now →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="sp-cta animate-fade-in">
        <div className="sp-cta-inner">
          <h2 className="sp-cta-title">Ready to Create Something Beautiful?</h2>
          <p className="sp-cta-sub">
            Get in touch today and let's plan your perfect photography session.
          </p>
          <div className="sp-cta-btns">
            <Link href="/contact" className="sp-cta-primary">
              📩 Book a Session
            </Link>
            <a href="https://wa.me/94704574568" target="_blank" rel="noopener noreferrer" className="sp-cta-secondary">
              💬 WhatsApp Me
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ── Root ── */
        .sp-root { background: var(--bg); color: var(--text); }

        /* ── Hero ── */
        .sp-hero {
          position: relative;
          min-height: 55vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0a0a0c 0%, #111108 50%, #0a0a0c 100%);
          overflow: hidden;
          text-align: center;
          padding: 120px 4% 80px;
        }
        .sp-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 60% at 50% 40%, rgba(212,175,55,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .sp-hero-overlay {
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .sp-hero-content {
          position: relative;
          z-index: 2;
          max-width: 700px;
        }
        .sp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(212,175,55,0.08);
          border: 1px solid rgba(212,175,55,0.2);
          border-radius: 50px;
          padding: 8px 20px;
          font-size: 0.78rem;
          letter-spacing: 1.5px;
          color: rgba(212,175,55,0.9);
          text-transform: uppercase;
          font-weight: 600;
          margin-bottom: 28px;
        }
        .sp-eyebrow-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #d4af37;
          box-shadow: 0 0 8px rgba(212,175,55,0.8);
          animation: pulse-gold 2s infinite;
          flex-shrink: 0;
        }
        @keyframes pulse-gold {
          0%,100% { box-shadow: 0 0 6px rgba(212,175,55,0.8); }
          50% { box-shadow: 0 0 14px rgba(212,175,55,1); }
        }
        .sp-hero-title {
          font-size: clamp(2.2rem, 5vw, 4rem);
          font-weight: 200;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #fff;
          margin: 0 0 20px;
          line-height: 1.1;
        }
        .sp-hero-title span {
          color: var(--accent);
          font-weight: 700;
        }
        .sp-hero-sub {
          color: rgba(255,255,255,0.55);
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 32px;
        }
        .sp-hero-badges {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .sp-badge {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50px;
          padding: 7px 18px;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.7);
          letter-spacing: 0.5px;
        }

        /* ── Sections ── */
        .sp-section {
          padding: 90px 4%;
          max-width: 1300px;
          margin: 0 auto;
        }
        .sp-section-alt {
          max-width: 100%;
          background: rgba(255,255,255,0.015);
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .sp-section-alt > * {
          max-width: 1300px;
          margin-left: auto;
          margin-right: auto;
        }
        .sp-section-head {
          text-align: center;
          margin-bottom: 56px;
        }
        .sp-tag {
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

        /* ── Wedding Grid ── */
        .sp-wedding-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: stretch;
        }
        .sp-wedding-card {
          position: relative;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 40px 32px;
          cursor: pointer;
          transition: all 0.35s ease;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .sp-wedding-card:hover {
          border-color: var(--pkg-color, var(--accent));
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.35);
        }
        .sp-wedding-featured {
          border-color: var(--pkg-color, var(--accent)) !important;
          background: rgba(212,175,55,0.05) !important;
          box-shadow: 0 0 0 1px var(--pkg-color, var(--accent)), 0 24px 60px rgba(0,0,0,0.4) !important;
          transform: translateY(-8px) scale(1.02) !important;
        }
        .sp-wedding-badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--accent);
          color: #000;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 5px 18px;
          border-radius: 50px;
          white-space: nowrap;
        }
        .sp-wedding-top { text-align: center; }
        .sp-wedding-name {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin: 0 0 16px;
        }
        .sp-wedding-price {
          font-size: 2.4rem;
          font-weight: 800;
          color: var(--pkg-color, var(--accent));
          line-height: 1;
          margin-bottom: 6px;
          letter-spacing: -1px;
        }
        .sp-wedding-per {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.3);
          margin: 0;
          letter-spacing: 0.5px;
        }
        .sp-wedding-features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }
        .sp-wedding-features li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.65);
          line-height: 1.5;
        }
        .sp-check {
          color: var(--accent);
          font-weight: 700;
          font-size: 0.9rem;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .sp-wedding-btn {
          display: block;
          text-align: center;
          background: var(--pkg-color, var(--accent));
          color: #000;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none;
          padding: 14px 24px;
          border-radius: 50px;
          transition: all 0.3s ease;
          margin-top: auto;
        }
        .sp-wedding-btn:hover {
          opacity: 0.85;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(212,175,55,0.35);
        }

        /* ── Other Services Grid ── */
        .sp-services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          padding: 0 4%;
          max-width: 1300px;
          margin: 0 auto;
        }
        .sp-service-card {
          display: flex;
          gap: 24px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 32px;
          transition: all 0.3s ease;
        }
        .sp-service-card:hover {
          border-color: rgba(212,175,55,0.35);
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.3);
        }
        .sp-service-icon {
          color: var(--accent);
          flex-shrink: 0;
          margin-top: 4px;
          width: 40px;
        }
        .sp-service-info {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }
        .sp-service-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        .sp-service-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text);
          margin: 0;
          letter-spacing: 0.5px;
        }
        .sp-service-price {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--accent);
          white-space: nowrap;
          letter-spacing: -0.5px;
        }
        .sp-service-desc {
          color: rgba(255,255,255,0.45);
          font-size: 0.87rem;
          line-height: 1.6;
          margin: 0;
        }
        .sp-service-features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .sp-service-features li {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.5;
        }
        .sp-service-btn {
          display: inline-block;
          margin-top: 8px;
          color: var(--accent);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-decoration: none;
          transition: gap 0.2s ease, opacity 0.2s ease;
        }
        .sp-service-btn:hover { opacity: 0.75; }

        /* ── CTA Banner ── */
        .sp-cta {
          padding: 90px 4%;
          text-align: center;
          background: linear-gradient(135deg, rgba(212,175,55,0.06) 0%, transparent 60%);
          border-top: 1px solid rgba(212,175,55,0.12);
        }
        .sp-cta-inner { max-width: 650px; margin: 0 auto; }
        .sp-cta-title {
          font-size: clamp(1.6rem, 3.5vw, 2.6rem);
          font-weight: 700;
          color: #fff;
          margin: 0 0 16px;
          line-height: 1.2;
        }
        .sp-cta-sub {
          color: rgba(255,255,255,0.5);
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 36px;
        }
        .sp-cta-btns {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .sp-cta-primary {
          background: var(--accent);
          color: #000;
          font-size: 0.88rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none;
          padding: 15px 36px;
          border-radius: 50px;
          transition: all 0.3s ease;
        }
        .sp-cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(212,175,55,0.4);
        }
        .sp-cta-secondary {
          background: transparent;
          color: #fff;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none;
          padding: 14px 36px;
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 50px;
          transition: all 0.3s ease;
        }
        .sp-cta-secondary:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: translateY(-3px);
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .sp-wedding-grid { grid-template-columns: 1fr; }
          .sp-wedding-featured { transform: none !important; }
          .sp-services-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .sp-service-card { flex-direction: column; }
          .sp-hero { padding: 100px 4% 60px; }
        }
      `}</style>
    </div>
  );
}
