'use client';

import { useState, useEffect, useRef } from "react";

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
  },
];

function StarRating({ count }) {
  return (
    <div className="tr-stars">
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
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [active]);

  const t = TESTIMONIALS[active];

  return (
    <section className="tr-root animate-fade-in">

      {/* ── Header ── */}
      <div className="tr-header">
        <span className="tr-tag">Client Reviews</span>
        <h2 className="section-title">What Clients Say</h2>
        <p className="section-desc">
          Real words from real people who trusted me with their precious moments.
        </p>

        {/* Trust Badges */}
        <div className="tr-badges">
          <div className="tr-badge">
            <div className="tr-badge-stars">
              {Array.from({length:5}).map((_,i)=><span key={i} className="tr-star tr-star-filled">★</span>)}
            </div>
            <span className="tr-badge-text">5.0 Average Rating</span>
          </div>
          <div className="tr-badge-sep">·</div>
          <div className="tr-badge">
            <span className="tr-badge-text">50+ Happy Clients</span>
          </div>
          <div className="tr-badge-sep">·</div>
          <div className="tr-badge">
            <span className="tr-badge-text">100% Satisfaction</span>
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
            <div className="tr-quote">"</div>
            <div className="tr-service-tag">{t.service}</div>
          </div>

          <StarRating count={t.rating} />

          <p className="tr-review">"{t.review}"</p>

          <div className="tr-client">
            <div className="tr-avatar" style={{ background: t.color }}>
              {t.initial}
            </div>
            <div className="tr-client-info">
              <span className="tr-name">{t.name}</span>
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

      {/* ── All Reviews Preview ── */}
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

      {/* ── CTA ── */}
      <div className="tr-cta">
        <p className="tr-cta-text">Worked with me? Share your experience!</p>
        <a
          href="https://g.page/r/review"
          target="_blank"
          rel="noopener noreferrer"
          className="tr-cta-btn"
        >
          Leave a Google Review
        </a>
      </div>

      <style jsx>{`
        .tr-root {
          padding: 90px 4%;
          text-align: center;
        }

        /* Header */
        .tr-header { margin-bottom: 56px; }
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

        /* Trust Badges */
        .tr-badges {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 20px;
        }
        .tr-badge { display: flex; align-items: center; gap: 8px; }
        .tr-badge-sep { color: rgba(255,255,255,0.2); font-size: 1.2rem; }
        .tr-badge-text {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.5);
          font-weight: 600;
          letter-spacing: 0.5px;
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
          padding: 40px 36px;
          text-align: left;
          transition: opacity 0.25s ease;
          min-height: 300px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .tr-card-fade { opacity: 0; }
        .tr-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .tr-quote {
          font-size: 4rem;
          line-height: 0.8;
          color: var(--accent);
          font-family: Georgia, serif;
          opacity: 0.6;
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
          color: rgba(255,255,255,0.7);
          line-height: 1.8;
          font-style: italic;
          margin: 0 0 28px;
          flex: 1;
        }
        .tr-client {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-top: 20px;
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
        .tr-name {
          font-size: 0.92rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.3px;
        }
        .tr-role {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.3px;
        }
        .tr-date {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.25);
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
          margin-bottom: 36px;
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

        /* CTA */
        .tr-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          padding: 28px 32px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          max-width: 600px;
          margin: 0 auto;
        }
        .tr-cta-text {
          font-size: 0.92rem;
          color: rgba(255,255,255,0.5);
          margin: 0;
        }
        .tr-cta-btn {
          background: transparent;
          border: 1px solid rgba(212,175,55,0.4);
          color: var(--accent);
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-decoration: none;
          text-transform: uppercase;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .tr-cta-btn:hover {
          background: var(--accent);
          color: #000;
          transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 640px) {
          .tr-carousel { gap: 12px; }
          .tr-card { padding: 28px 20px; min-height: auto; }
          .tr-nav { width: 36px; height: 36px; }
          .tr-cta { flex-direction: column; }
        }
      `}</style>
    </section>
  );
}
