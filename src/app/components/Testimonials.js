'use client';

import { useState, useEffect, useRef } from "react";

// Google Business review link — easily updated with direct Google Place ID / shortlink
export const GOOGLE_REVIEW_URL = "https://www.google.com/search?q=Numesh+Ravindra+Photography+Mawanella";
export const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Numesh+Ravindra+Photography+Mawanella";

const TESTIMONIALS = [
  {
    name: "Anu Karunathilaka",
    role: "Wedding Client",
    location: "Kegalle",
    review: "Numesh captured every beautiful moment of our special day perfectly. His eye for detail and ability to catch candid emotions is truly outstanding. Every photo tells our story. We will treasure these memories forever!",
    rating: 5,
    initial: "A",
    color: "#d4af37",
    service: "Wedding Photography",
    date: "June 2024",
    verified: true,
  },
  {
    name: "Manavi Vihara",
    role: "Portrait Client",
    location: "Colombo",
    review: "The portrait session was an amazing experience. Numesh made me feel so comfortable and natural in front of the camera. The final photos were absolutely stunning — far beyond my expectations!",
    rating: 5,
    initial: "M",
    color: "#a78bfa",
    service: "Portrait Session",
    date: "August 2024",
    verified: true,
  },
  {
    name: "Savindi Thathsara",
    role: "Outdoor Shoot Client",
    location: "Kandy",
    review: "I was amazed by how Numesh used natural lighting to create such magical photos. Every shot tells a story. He was patient, creative, and truly professional. Highly recommend for portrait sessions!",
    rating: 5,
    initial: "S",
    color: "#34d399",
    service: "Outdoor / Lifestyle",
    date: "October 2024",
    verified: true,
  },
  {
    name: "Amandi Rathnayake",
    role: "Portrait Client",
    location: "Mawanella",
    review: "Working with Numesh was an absolute pleasure. His creative vision and professional approach gave me photos that are truly one of a kind. He knew exactly the right angles and lighting. Five stars without hesitation!",
    rating: 5,
    initial: "A",
    color: "#fb923c",
    service: "Portrait Session",
    date: "December 2024",
    verified: true,
  },
  {
    name: "Sathya",
    role: "Birthday Shoot Client",
    location: "Mawanella",
    review: "Our birthday shoot was so much fun and the photos came out beautifully! Numesh has a great energy and made the whole experience enjoyable. The edited photos were delivered quickly and looked incredible.",
    rating: 5,
    initial: "S",
    color: "#60a5fa",
    service: "Event / Birthday",
    date: "July 2025",
    verified: true,
  },
];

function GoogleGLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
      <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
    </svg>
  );
}

function VerifiedBadge() {
  return (
    <span className="tr-verified-pill" title="Verified Client Review">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="#38bdf8">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
      <span>Verified</span>
    </span>
  );
}

function StarRating({ count }) {
  return (
    <div className="tr-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`tr-star ${i < count ? "tr-star-filled" : "tr-star-empty"}`}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);

  const goTo = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActive(index);
      setIsAnimating(false);
    }, 250);
  };

  const next = () => goTo((active + 1) % TESTIMONIALS.length);
  const prev = () => goTo((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 6000);
    return () => clearInterval(timerRef.current);
  }, [active]);

  const t = TESTIMONIALS[active];

  return (
    <section className="tr-root animate-fade-in" id="reviews">

      {/* ── Header ── */}
      <div className="tr-header">
        <span className="tr-tag">Client Reviews</span>
        <h2 className="section-title">What Clients Say</h2>
        <p className="section-desc">
          Real words from real people who trusted me with their precious moments.
        </p>

        {/* ── Google Trust Card Header ── */}
        <div className="tr-google-badge-bar">
          <div className="tr-google-badge-card">
            <div className="tr-google-logo-wrap">
              <GoogleGLogo size={28} />
            </div>
            <div className="tr-google-rating-info">
              <div className="tr-google-rating-top">
                <span className="tr-google-score">5.0</span>
                <div className="tr-google-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="tr-star tr-star-filled">★</span>
                  ))}
                </div>
                <span className="tr-google-verified-tag">Google Verified</span>
              </div>
              <p className="tr-google-sub">
                Based on 50+ 5-star customer ratings across Sri Lanka
              </p>
            </div>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tr-google-write-link"
            >
              Write a Review
            </a>
          </div>
        </div>
      </div>

      {/* ── Carousel ── */}
      <div className="tr-carousel">

        {/* Nav Prev */}
        <button className="tr-nav tr-nav-prev" onClick={prev} aria-label="Previous review">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Card */}
        <div className={`tr-card ${isAnimating ? "tr-card-fade" : ""}`}>
          <div className="tr-card-top">
            <div className="tr-card-google-source">
              <GoogleGLogo size={16} />
              <span className="tr-source-label">Google Review</span>
            </div>
            <div className="tr-service-tag">{t.service}</div>
          </div>

          <StarRating count={t.rating} />

          <p className="tr-review">"{t.review}"</p>

          <div className="tr-client">
            <div className="tr-avatar" style={{ background: t.color }}>
              {t.initial}
            </div>
            <div className="tr-client-info">
              <div className="tr-name-row">
                <span className="tr-name">{t.name}</span>
                {t.verified && <VerifiedBadge />}
              </div>
              <span className="tr-role">{t.role} · {t.location}</span>
            </div>
            <div className="tr-date">{t.date}</div>
          </div>
        </div>

        {/* Nav Next */}
        <button className="tr-nav tr-nav-next" onClick={next} aria-label="Next review">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* ── Dots ── */}
      <div className="tr-dots">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            className={`tr-dot ${i === active ? "tr-dot-active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>

      {/* ── All Reviews Preview Mini Avatars ── */}
      <div className="tr-all">
        {TESTIMONIALS.map((item, i) => (
          <button
            key={i}
            className={`tr-mini ${i === active ? "tr-mini-active" : ""}`}
            onClick={() => goTo(i)}
          >
            <div className="tr-mini-avatar" style={{ background: item.color }}>{item.initial}</div>
            <span className="tr-mini-name">{item.name.split(" ")[0]}</span>
          </button>
        ))}
      </div>

      {/* ── Google Reviews Action Banner ── */}
      <div className="tr-google-cta-box">
        <div className="tr-google-cta-left">
          <div className="tr-google-cta-icon">
            <GoogleGLogo size={32} />
          </div>
          <div className="tr-google-cta-text">
            <h4>Have you worked with Numesh Ravindra?</h4>
            <p>Your honest feedback helps future clients choose with confidence.</p>
          </div>
        </div>
        <div className="tr-google-cta-actions">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="tr-btn-google-primary"
          >
            <GoogleGLogo size={18} />
            <span>Write a Google Review</span>
          </a>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="tr-btn-google-secondary"
          >
            View on Google Maps
          </a>
        </div>
      </div>

      <style jsx>{`
        .tr-root {
          padding: 90px 4%;
          text-align: center;
        }

        /* Header */
        .tr-header { margin-bottom: 48px; }
        .tr-tag {
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

        /* Google Trust Badge Bar */
        .tr-google-badge-bar {
          display: flex;
          justify-content: center;
          margin-top: 24px;
        }
        .tr-google-badge-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 50px;
          padding: 10px 24px 10px 18px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          max-width: 650px;
          width: 100%;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .tr-google-logo-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          flex-shrink: 0;
        }
        .tr-google-rating-info {
          text-align: left;
          flex: 1;
        }
        .tr-google-rating-top {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .tr-google-score {
          font-size: 1.1rem;
          font-weight: 800;
          color: #fff;
          line-height: 1;
        }
        .tr-google-stars {
          display: flex;
          gap: 2px;
          font-size: 0.95rem;
          color: var(--accent);
          line-height: 1;
        }
        .tr-google-verified-tag {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: #38bdf8;
          background: rgba(56,189,248,0.1);
          border: 1px solid rgba(56,189,248,0.25);
          padding: 2px 8px;
          border-radius: 50px;
        }
        .tr-google-sub {
          font-size: 0.76rem;
          color: rgba(255,255,255,0.45);
          margin: 4px 0 0;
        }
        .tr-google-write-link {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: var(--accent);
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 50px;
          border: 1px solid rgba(212,175,55,0.3);
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .tr-google-write-link:hover {
          background: var(--accent);
          color: #000;
        }

        /* Stars */
        .tr-stars { display: flex; gap: 4px; justify-content: flex-start; margin-bottom: 18px; }
        .tr-star { font-size: 1.1rem; line-height: 1; }
        .tr-star-filled { color: var(--accent); }
        .tr-star-empty { color: rgba(255,255,255,0.15); }

        /* Carousel */
        .tr-carousel {
          display: flex;
          align-items: center;
          gap: 24px;
          max-width: 780px;
          margin: 0 auto 28px;
        }

        /* Card */
        .tr-card {
          flex: 1;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          padding: 36px 32px;
          text-align: left;
          transition: opacity 0.25s ease;
          min-height: 290px;
          display: flex;
          flex-direction: column;
          gap: 0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
        }
        .tr-card-fade { opacity: 0; }
        .tr-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .tr-card-google-source {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 4px 12px;
          border-radius: 50px;
        }
        .tr-source-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.75);
        }
        .tr-service-tag {
          background: rgba(212,175,55,0.08);
          border: 1px solid rgba(212,175,55,0.2);
          color: var(--accent);
          padding: 4px 14px;
          border-radius: 50px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .tr-review {
          font-size: 1rem;
          color: rgba(255,255,255,0.72);
          line-height: 1.8;
          font-style: italic;
          margin: 0 0 24px;
          flex: 1;
        }
        .tr-client {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,0.07);
        }
        .tr-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1rem;
          color: #000;
          flex-shrink: 0;
        }
        .tr-client-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
          flex: 1;
        }
        .tr-name-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .tr-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.3px;
        }
        .tr-verified-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: #38bdf8;
          background: rgba(56,189,248,0.1);
          padding: 2px 6px;
          border-radius: 4px;
        }
        .tr-role {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.3px;
        }
        .tr-date {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        /* Nav Buttons */
        .tr-nav {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }
        .tr-nav:hover {
          background: rgba(212,175,55,0.1);
          border-color: var(--accent);
          color: var(--accent);
        }

        /* Dots */
        .tr-dots {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-bottom: 32px;
        }
        .tr-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .tr-dot-active {
          background: var(--accent);
          width: 24px;
          border-radius: 4px;
        }

        /* All Reviews Mini Avatars */
        .tr-all {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }
        .tr-mini {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          cursor: pointer;
          opacity: 0.4;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .tr-mini:hover { opacity: 0.7; }
        .tr-mini-active { opacity: 1 !important; transform: translateY(-3px); }
        .tr-mini-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.9rem;
          color: #000;
        }
        .tr-mini-name {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.5);
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        /* Google Reviews CTA Banner */
        .tr-google-cta-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 32px 36px;
          background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(212,175,55,0.04) 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          max-width: 820px;
          margin: 0 auto;
          text-align: left;
          flex-wrap: wrap;
        }
        .tr-google-cta-left {
          display: flex;
          align-items: center;
          gap: 18px;
          flex: 1;
          min-width: 280px;
        }
        .tr-google-cta-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .tr-google-cta-text h4 {
          font-size: 1.05rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 4px;
        }
        .tr-google-cta-text p {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.5);
          margin: 0;
          line-height: 1.5;
        }
        .tr-google-cta-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .tr-btn-google-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          color: #1f2937;
          padding: 12px 22px;
          border-radius: 50px;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-decoration: none;
          text-transform: uppercase;
          transition: all 0.25s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.25);
          white-space: nowrap;
        }
        .tr-btn-google-primary:hover {
          background: #f3f4f6;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255,255,255,0.15);
        }
        .tr-btn-google-secondary {
          display: inline-flex;
          align-items: center;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.7);
          padding: 11px 20px;
          border-radius: 50px;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-decoration: none;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .tr-btn-google-secondary:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .tr-google-badge-card {
            border-radius: 20px;
            padding: 16px;
            gap: 12px;
            text-align: center;
            justify-content: center;
          }
          .tr-google-rating-info { text-align: center; }
          .tr-google-rating-top { justify-content: center; }
          .tr-google-write-link { width: 100%; text-align: center; }
          .tr-google-cta-box {
            padding: 24px 20px;
            flex-direction: column;
            text-align: center;
          }
          .tr-google-cta-left {
            flex-direction: column;
            text-align: center;
          }
          .tr-google-cta-actions {
            width: 100%;
            flex-direction: column;
          }
          .tr-btn-google-primary, .tr-btn-google-secondary {
            width: 100%;
            justify-content: center;
          }
        }
        @media (max-width: 640px) {
          .tr-carousel { gap: 10px; }
          .tr-card { padding: 24px 18px; min-height: auto; }
          .tr-nav { width: 36px; height: 36px; }
        }
      `}</style>
    </section>
  );
}
