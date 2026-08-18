"use client";

import Image from "next/image";
import Link from "next/link";

const SPECIALTIES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    ),
    title: "Wedding Photography",
    desc: "Capturing the most precious moments of your special day with timeless elegance."
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4"></circle>
        <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path>
      </svg>
    ),
    title: "Portrait Sessions",
    desc: "Expressive, natural portraits that reveal the true character of every individual."
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
    title: "Wildlife Photography",
    desc: "Tracking nature's finest moments across Sri Lanka's national parks and reserves."
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    ),
    title: "Event Coverage",
    desc: "Documenting corporate events, functions, and celebrations with precision."
  }
];

const GEAR = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
        <circle cx="12" cy="13" r="4"></circle>
      </svg>
    ),
    category: "Camera Body",
    items: ["Sony Alfa A7 III — 24.2MP Full-Frame Mirrorless"]
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="5"></circle>
        <circle cx="12" cy="12" r="1"></circle>
      </svg>
    ),
    category: "Lenses",
    items: [
      "Sony FE 24-70mm f/2.8 GM II",
      "Sony FE 85mm f/1.2 GM — Portrait",
      "Sony FE 50mm f/1.2 GM — Event",
      "Sony FE 200-600mm f/5.6-6.3 G — Wildlife"
    ]
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
    category: "Lighting & Support",
    items: [
      "Profoto B10X Location Lighting",
      "Gitzo Carbon Fibre Tripod",
      "DJI Mavic 3 Pro — Aerial Drone"
    ]
  }
];

const TIMELINE = [
  { year: "2023", title: "The Beginning", desc: "Picked up a camera for the first time and immediately fell in love with the art of photography." },
  { year: "2024", title: "Going Professional", desc: "Shot my first wedding and portrait collections, building a reputation for quality and creativity across Sri Lanka." },
  { year: "2025", title: "Growing Portfolio", desc: "Expanded into wildlife, events, and aerial photography. Now trusted by hundreds of clients island-wide." }
];

export default function AboutClient() {
  return (
    <div className="ap-root animate-fade-in">

      {/* ── Hero ── */}
      <section className="ap-hero">
        <div className="ap-hero-bg" />
        <div className="ap-hero-content">
          <p className="ap-hero-eyebrow">The Story Behind the Lens</p>
          <h1 className="ap-hero-title">The Photographer</h1>
          <p className="ap-hero-sub">Behind the lens and the creative philosophy.</p>
        </div>
      </section>

      {/* ── Bio Grid ── */}
      <section className="ap-bio-section">
        <div className="ap-bio-grid">

          {/* Photo */}
          <div className="ap-photo-wrap">
            <div className="ap-photo-frame">
              <Image
                src="/IMG_7530.PNG"
                alt="Numesh Ravindra — Professional Photographer Sri Lanka"
                fill
                priority
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
            <div className="ap-photo-badge">
              <span className="ap-badge-dot" />
              <span>Available for Bookings</span>
            </div>
          </div>

          {/* Text */}
          <div className="ap-bio-text">
            <p className="ap-bio-tag">ABOUT ME</p>
            <h2 className="ap-bio-name">Numesh Ravindra</h2>
            <p className="ap-bio-role">Photographer · Mawanella, Sri Lanka</p>

            <p className="ap-bio-para">
              I am a 22-year-old passionate photographer based in Mawanella, Sri Lanka.
              My journey with the camera began in 2023, and from the very first click of the shutter,
              I knew photography was more than a hobby — it was a calling.
            </p>

            <blockquote className="ap-quote">
              "Every photograph is a certificate of presence. I don't just take pictures — I preserve moments that will be cherished forever."
            </blockquote>

            <p className="ap-bio-para">
              My home in Mawanella — surrounded by the lush greenery and rich culture of Sri Lanka —
              deeply influences my style. Whether I am capturing the golden-hour glow at a wedding,
              tracking wildlife in Yala National Park, or creating expressive portraits in a studio,
              I am always searching for that one perfect moment that tells a story no words can describe.
            </p>

            {/* Stats */}
            <div className="ap-stats-row">
              <div className="ap-stat">
                <span className="ap-stat-num">3+</span>
                <span className="ap-stat-label">Years</span>
              </div>
              <div className="ap-stat-divider" />
              <div className="ap-stat">
                <span className="ap-stat-num">50+</span>
                <span className="ap-stat-label">Clients</span>
              </div>
              <div className="ap-stat-divider" />
              <div className="ap-stat">
                <span className="ap-stat-num">104+</span>
                <span className="ap-stat-label">Photos</span>
              </div>
              <div className="ap-stat-divider" />
              <div className="ap-stat">
                <span className="ap-stat-num">5</span>
                <span className="ap-stat-label">Albums</span>
              </div>
            </div>

            <Link href="/contact" className="ap-cta">
              Book a Session
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Specialties ── */}
      <section className="ap-spec-section">
        <div className="ap-section-header">
          <h2>What I Do</h2>
          <p>Four disciplines, one creative vision.</p>
        </div>
        <div className="ap-spec-grid">
          {SPECIALTIES.map((s, i) => (
            <div key={i} className="ap-spec-card">
              <div className="ap-spec-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="ap-timeline-section">
        <div className="ap-section-header">
          <h2>My Journey</h2>
          <p>From first shutter click to professional photographer.</p>
        </div>
        <div className="ap-timeline">
          {TIMELINE.map((t, i) => (
            <div key={i} className="ap-timeline-item">
              <div className="ap-timeline-year">{t.year}</div>
              <div className="ap-timeline-line">
                <div className="ap-timeline-dot" />
                {i < TIMELINE.length - 1 && <div className="ap-timeline-bar" />}
              </div>
              <div className="ap-timeline-content">
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Gear ── */}
      <section className="ap-gear-section">
        <div className="ap-section-header">
          <h2>Creative Toolkit</h2>
          <p>The instruments used to translate vision into tangible pixels.</p>
        </div>
        <div className="ap-gear-grid">
          {GEAR.map((g, i) => (
            <div key={i} className="ap-gear-card">
              <div className="ap-gear-icon">{g.icon}</div>
              <h3 className="ap-gear-cat">{g.category}</h3>
              <ul className="ap-gear-list">
                {g.items.map((item, j) => (
                  <li key={j}>
                    <span className="ap-gear-bullet">▸</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="ap-cta-banner">
        <div className="ap-cta-content">
          <h2>Ready to Create Something Beautiful?</h2>
          <p>Let's work together to capture your most precious moments.</p>
          <div className="ap-cta-btns">
            <Link href="/contact" className="ap-cta-btn-primary">Book a Session</Link>
            <Link href="/gallery" className="ap-cta-btn-outline">View Gallery</Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .ap-root { min-height: 100vh; }

        /* ── Hero ── */
        .ap-hero {
          position: relative;
          padding: 140px 4% 80px;
          text-align: center;
          overflow: hidden;
        }
        .ap-hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 60% at 30% 50%, rgba(212,175,55,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 50% 70% at 70% 30%, rgba(212,175,55,0.04) 0%, transparent 60%);
          pointer-events: none;
        }
        .ap-hero-content { position: relative; z-index: 2; }
        .ap-hero-eyebrow {
          font-size: 0.78rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 600;
          margin-bottom: 20px;
        }
        .ap-hero-title {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 200;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-main);
          margin-bottom: 16px;
          line-height: 1.1;
        }
        .ap-hero-sub {
          color: var(--text-muted);
          font-size: 1rem;
          letter-spacing: 1px;
        }

        /* ── Bio ── */
        .ap-bio-section { max-width: 1200px; margin: 0 auto; padding: 60px 4% 80px; }
        .ap-bio-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 70px; align-items: start; }
        .ap-photo-wrap { position: sticky; top: 100px; }
        .ap-photo-frame {
          position: relative;
          aspect-ratio: 3/4;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          box-shadow: 0 30px 80px rgba(0,0,0,0.5);
        }
        .ap-photo-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: center;
          margin-top: 20px;
          padding: 10px 20px;
          background: rgba(34,197,94,0.06);
          border: 1px solid rgba(34,197,94,0.15);
          border-radius: 50px;
          font-size: 0.82rem;
          color: #22c55e;
          font-weight: 600;
        }
        .ap-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          animation: pulse-green 2s infinite;
          box-shadow: 0 0 6px rgba(34,197,94,0.8);
        }
        @keyframes pulse-green {
          0%,100% { box-shadow: 0 0 6px rgba(34,197,94,0.6); }
          50% { box-shadow: 0 0 14px rgba(34,197,94,1); }
        }
        .ap-bio-tag {
          font-size: 0.72rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 700;
          margin-bottom: 14px;
        }
        .ap-bio-name {
          font-size: 2.8rem;
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-main);
          margin-bottom: 8px;
          line-height: 1.1;
        }
        .ap-bio-role {
          font-size: 0.88rem;
          color: var(--accent);
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 28px;
        }
        .ap-bio-para {
          color: var(--text-muted);
          font-size: 0.97rem;
          line-height: 1.85;
          margin-bottom: 20px;
        }
        .ap-quote {
          border-left: 3px solid var(--accent);
          padding: 16px 24px;
          margin: 28px 0;
          background: rgba(212,175,55,0.04);
          border-radius: 0 12px 12px 0;
          font-style: italic;
          color: var(--text-main);
          font-size: 0.97rem;
          line-height: 1.75;
        }
        .ap-stats-row {
          display: flex;
          align-items: center;
          margin: 36px 0;
          background: var(--surface-color);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 20px 0;
        }
        .ap-stat { flex: 1; text-align: center; padding: 0 12px; }
        .ap-stat-num { display: block; font-size: 2rem; font-weight: 800; color: var(--accent); line-height: 1; margin-bottom: 6px; }
        .ap-stat-label { display: block; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1.5px; color: var(--text-muted); font-weight: 600; }
        .ap-stat-divider { width: 1px; height: 40px; background: var(--border-color); flex-shrink: 0; }
        .ap-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--accent);
          color: #000;
          padding: 14px 30px;
          border-radius: 50px;
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .ap-cta:hover { transform: translateY(-3px); box-shadow: 0 12px 30px rgba(212,175,55,0.4); }

        /* ── Specialties ── */
        .ap-spec-section {
          padding: 80px 4%;
          background: rgba(255,255,255,0.01);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }
        .ap-section-header { text-align: center; margin-bottom: 50px; }
        .ap-section-header h2 { font-size: 2.2rem; font-weight: 300; text-transform: uppercase; letter-spacing: 3px; color: var(--text-main); margin-bottom: 10px; }
        .ap-section-header p { color: var(--text-muted); font-size: 0.95rem; }
        .ap-spec-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; max-width: 1200px; margin: 0 auto; }
        .ap-spec-card {
          background: var(--surface-color);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 32px 24px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .ap-spec-card:hover { border-color: var(--accent); transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.3); }
        .ap-spec-icon {
          width: 60px; height: 60px; border-radius: 16px;
          background: rgba(212,175,55,0.08); border: 1px solid rgba(212,175,55,0.15);
          display: flex; align-items: center; justify-content: center;
          color: var(--accent); margin: 0 auto 20px; transition: all 0.3s ease;
        }
        .ap-spec-card:hover .ap-spec-icon { background: rgba(212,175,55,0.15); box-shadow: 0 0 20px rgba(212,175,55,0.2); }
        .ap-spec-card h3 { font-size: 0.95rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--text-main); margin-bottom: 12px; }
        .ap-spec-card p { font-size: 0.85rem; color: var(--text-muted); line-height: 1.7; }

        /* ── Timeline ── */
        .ap-timeline-section { padding: 80px 4%; max-width: 900px; margin: 0 auto; }
        .ap-timeline { display: flex; flex-direction: column; }
        .ap-timeline-item { display: grid; grid-template-columns: 80px 40px 1fr; gap: 0 24px; align-items: start; }
        .ap-timeline-year { text-align: right; font-size: 1.1rem; font-weight: 800; color: var(--accent); padding-top: 6px; letter-spacing: 1px; }
        .ap-timeline-line { display: flex; flex-direction: column; align-items: center; padding-top: 10px; }
        .ap-timeline-dot { width: 14px; height: 14px; border-radius: 50%; background: var(--accent); border: 3px solid var(--bg-color); box-shadow: 0 0 0 2px var(--accent); flex-shrink: 0; }
        .ap-timeline-bar { width: 2px; flex: 1; min-height: 60px; background: linear-gradient(to bottom, var(--accent), rgba(212,175,55,0.1)); margin-top: 6px; }
        .ap-timeline-content { padding-bottom: 40px; }
        .ap-timeline-content h3 { font-size: 1.1rem; font-weight: 700; color: var(--text-main); margin-bottom: 8px; padding-top: 4px; }
        .ap-timeline-content p { color: var(--text-muted); font-size: 0.92rem; line-height: 1.75; }

        /* ── Gear ── */
        .ap-gear-section { padding: 80px 4%; background: rgba(255,255,255,0.01); border-top: 1px solid var(--border-color); }
        .ap-gear-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1100px; margin: 0 auto; }
        .ap-gear-card { background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 20px; padding: 32px 28px; transition: all 0.3s ease; }
        .ap-gear-card:hover { border-color: rgba(212,175,55,0.3); transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.3); }
        .ap-gear-icon { width: 52px; height: 52px; border-radius: 14px; background: rgba(212,175,55,0.08); border: 1px solid rgba(212,175,55,0.15); display: flex; align-items: center; justify-content: center; color: var(--accent); margin-bottom: 20px; }
        .ap-gear-cat { font-size: 0.78rem; text-transform: uppercase; letter-spacing: 2px; color: var(--accent); font-weight: 700; margin-bottom: 14px; }
        .ap-gear-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
        .ap-gear-list li { font-size: 0.87rem; color: var(--text-muted); line-height: 1.5; display: flex; align-items: flex-start; gap: 8px; }
        .ap-gear-bullet { color: var(--accent); flex-shrink: 0; margin-top: 1px; font-size: 0.7rem; }

        /* ── CTA Banner ── */
        .ap-cta-banner {
          margin: 80px 4%;
          border-radius: 28px;
          background: linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.03) 100%);
          border: 1px solid rgba(212,175,55,0.15);
          padding: 70px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .ap-cta-banner::before {
          content: '';
          position: absolute;
          top: -40%; left: -20%; width: 60%; height: 200%;
          background: radial-gradient(ellipse, rgba(212,175,55,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .ap-cta-content { position: relative; z-index: 2; }
        .ap-cta-banner h2 { font-size: 2.2rem; font-weight: 300; text-transform: uppercase; letter-spacing: 2px; color: var(--text-main); margin-bottom: 14px; }
        .ap-cta-banner p { color: var(--text-muted); font-size: 1rem; margin-bottom: 36px; }
        .ap-cta-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .ap-cta-btn-primary {
          background: var(--accent); color: #000; padding: 14px 32px; border-radius: 50px;
          font-size: 0.88rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
          text-decoration: none; transition: all 0.3s ease;
        }
        .ap-cta-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 12px 30px rgba(212,175,55,0.4); }
        .ap-cta-btn-outline {
          background: transparent; color: var(--text-main); padding: 13px 32px; border-radius: 50px;
          border: 1px solid var(--border-color); font-size: 0.88rem; font-weight: 600;
          letter-spacing: 1.5px; text-transform: uppercase; text-decoration: none; transition: all 0.3s ease;
        }
        .ap-cta-btn-outline:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-3px); }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .ap-bio-grid { grid-template-columns: 1fr; gap: 40px; }
          .ap-photo-wrap { position: static; max-width: 400px; margin: 0 auto; }
          .ap-spec-grid { grid-template-columns: repeat(2, 1fr); }
          .ap-gear-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .ap-hero-title { font-size: 3rem; }
          .ap-spec-grid { grid-template-columns: 1fr; }
          .ap-timeline-item { grid-template-columns: 60px 30px 1fr; gap: 0 12px; }
          .ap-cta-banner { padding: 40px 24px; }
          .ap-cta-banner h2 { font-size: 1.6rem; }
          .ap-bio-name { font-size: 2rem; }
        }
      `}</style>
    </div>
  );
}
