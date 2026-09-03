"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import StatsSection from "./components/StatsSection";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import InstagramSection from "./components/InstagramSection";

const ALBUMS = [
  {
    slug: "anu-karunathilaka",
    title: "Anu Karunathilaka",
    description: "A joyful 22nd birthday and outdoor portrait photography session.",
    cover: "/gallery/portraits/Anu%20Karunathilaka/IMG_1.jpg",
    count: 26,
  },
  {
    slug: "manavi-photo-shoot",
    title: "Manavi Vihara",
    description: "An elegant portrait and studio photography session.",
    cover: "/gallery/portraits/Manavi%20photo%20shoot/Cover.jpg",
    count: 20,
  },
  {
    slug: "savindi-edit",
    title: "Savindi Thathsara",
    description: "A stunning outdoor portrait photography session.",
    cover: "/gallery/portraits/Savindi%20Edit/IMG_5089.jpg",
    count: 16,
  },
  {
    slug: "amandi-edit",
    title: "Amandi Rathnayake",
    description: "A beautiful curated photography collection.",
    cover: "/gallery/portraits/amandi%20Edit/10.jpg",
    count: 22,
  },
  {
    slug: "sathya-birthday-shoot",
    title: "Sathya Birthday Shoot",
    description: "A vibrant and joyful birthday photography session.",
    cover: "/gallery/portraits/Sathya%20Birthday%20shoot/1%20(1).jpg",
    count: 20,
  },
];

const SPECIALTIES = ["Weddings", "Wildlife", "Portraits", "Events"];

export default function HomeClient() {
  const [currentWord, setCurrentWord] = useState(0);
  const [visible, setVisible] = useState(true);
  const [selectedDate, setSelectedDate] = useState("");
  const router = useRouter();

  const todayStr = new Date().toISOString().split('T')[0];

  const handleCheckDate = () => {
    if (selectedDate) {
      router.push(`/booking?date=${selectedDate}`);
    } else {
      router.push('/booking');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % SPECIALTIES.length);
        setVisible(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* ── Hero Section ── */}
      <section className="hero">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=90"
          alt="Hero background — wedding photography by Numesh Ravindra"
          fill
          priority
          className="hero-bg"
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
        />

        {/* Dark overlay */}
        <div className="hero-overlay" />

        {/* Bokeh particles */}
        <div className="hero-bokeh" aria-hidden="true">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`bokeh-dot bokeh-${i}`} />
          ))}
        </div>

        {/* Hero Content */}
        <div className="hero-content animate-fade-in">

          {/* Eyebrow */}
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            <span>Based in Mawanella, Sri Lanka · Available Island-wide</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title">
            <span className="hero-name">Numesh Ravindra</span>
            <span className="hero-title-line2">Photography</span>
          </h1>

          {/* Animated Specialty */}
          <div className="hero-specialty-wrap">
            <span className="hero-specialty-label">Specialising in</span>
            <span
              className="hero-specialty-word"
              style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(10px)' }}
            >
              {SPECIALTIES[currentWord]}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="hero-ctas">
            <button
              className="hero-cta hero-cta-primary"
              onClick={() => document.getElementById('albums').scrollIntoView({ behavior: 'smooth' })}
            >
              View Gallery
            </button>
            <Link href="/contact" className="hero-cta hero-cta-secondary">
              Book a Session
            </Link>
          </div>

          {/* ── Date Availability Widget ── */}
          <div className="hero-date-widget">
            <div className="hdw-label">Check date availability</div>
            <div className="hdw-row">
              <div className="hdw-input-wrap">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="hdw-cal-icon">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <input
                  type="date"
                  className="hdw-input"
                  value={selectedDate}
                  min={todayStr}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  aria-label="Select a date to check availability"
                />
              </div>
              <button className="hdw-btn" onClick={handleCheckDate}>
                {selectedDate ? "Check Now" : "Book a Date"}
              </button>
            </div>
          </div>

          {/* Floating Stat Badges */}
          <div className="hero-badges">
            <div className="hero-badge">
              <span className="hb-num">50+</span>
              <span className="hb-label">Happy Clients</span>
            </div>
            <div className="hero-badge-divider" />
            <div className="hero-badge">
              <span className="hb-num">3+</span>
              <span className="hb-label">Years Experience</span>
            </div>
            <div className="hero-badge-divider" />
            <div className="hero-badge">
              <span className="hb-num">15+</span>
              <span className="hb-label">Event Coverage</span>
            </div>
          </div>
        </div>

        {/* Scroll Down */}
        <div
          className="scroll-down"
          onClick={() => document.getElementById('albums').scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <span className="scroll-label">Scroll</span>
        </div>
      </section>

      {/* ── Specialty Ticker Strip ── */}
      <div className="specialty-strip" aria-hidden="true">
        <div className="specialty-track">
          {["Wedding Photography", "Wildlife Sessions", "Portrait Studio", "Event Coverage", "Fine Art Prints", "Outdoor Sessions", "Wedding Photography", "Wildlife Sessions", "Portrait Studio", "Event Coverage", "Fine Art Prints", "Outdoor Sessions"].map((item, i) => (
            <span key={i} className="strip-item">
              <span className="strip-dot">✦</span> {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Stats Dashboard ── */}
      <StatsSection />

      {/* ── Albums Section ── */}
      <section id="albums" className="gallery-section">
        <div className="section-intro animate-fade-in">
          <h2 className="section-title">Photo Albums</h2>
          <p className="section-desc">Browse through curated collections of photography work from across Sri Lanka.</p>
        </div>

        <div className="albums-grid animate-fade-in">
          {ALBUMS.map((album) => (
            <Link
              key={album.slug}
              href={`/gallery/${album.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="album-card">
                <div className="album-cover">
                  <Image
                    src={album.cover}
                    alt={album.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="album-cover-img"
                  />
                  <div className="album-overlay">
                    <span className="album-view-btn">View Album →</span>
                  </div>
                  <span className="album-badge">{album.count} photos</span>
                </div>
                <div className="album-info">
                  <h3 className="album-title">{album.title}</h3>
                  <p className="album-desc-text">{album.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link href="/gallery" className="hero-cta" style={{ display: 'inline-block', textDecoration: 'none' }}>
            View All Albums
          </Link>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── FAQ ── */}
      <FAQSection />

      {/* ── Instagram Showcase ── */}
      <InstagramSection />

      <style jsx>{`
        /* ── Hero ── */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(6,6,8,0.55) 0%,
            rgba(6,6,8,0.35) 40%,
            rgba(6,6,8,0.7) 80%,
            rgba(6,6,8,0.95) 100%
          );
          z-index: 1;
        }

        /* Bokeh */
        .hero-bokeh { position: absolute; inset: 0; z-index: 2; pointer-events: none; }
        .bokeh-dot {
          position: absolute;
          border-radius: 50%;
          background: rgba(212,175,55,0.12);
          filter: blur(40px);
          animation: bokeh-float 8s ease-in-out infinite;
        }
        .bokeh-0  { width:200px;height:200px;top:10%;left:5%;animation-delay:0s;animation-duration:9s; }
        .bokeh-1  { width:120px;height:120px;top:20%;left:80%;animation-delay:1s;animation-duration:7s; }
        .bokeh-2  { width:180px;height:180px;top:60%;left:15%;animation-delay:2s;animation-duration:11s; }
        .bokeh-3  { width:90px;height:90px;top:70%;left:70%;animation-delay:0.5s;animation-duration:8s; }
        .bokeh-4  { width:150px;height:150px;top:40%;left:50%;animation-delay:3s;animation-duration:10s; }
        .bokeh-5  { width:80px;height:80px;top:5%;left:45%;animation-delay:1.5s;animation-duration:6s; }
        .bokeh-6  { width:220px;height:220px;top:80%;left:40%;animation-delay:4s;animation-duration:12s;background:rgba(212,175,55,0.06); }
        .bokeh-7  { width:100px;height:100px;top:30%;left:90%;animation-delay:2.5s;animation-duration:9s; }
        .bokeh-8  { width:60px;height:60px;top:55%;left:5%;animation-delay:3.5s;animation-duration:7s; }
        .bokeh-9  { width:140px;height:140px;top:15%;left:30%;animation-delay:0.8s;animation-duration:10s; }
        .bokeh-10 { width:110px;height:110px;top:85%;left:85%;animation-delay:2s;animation-duration:8s; }
        .bokeh-11 { width:170px;height:170px;top:45%;left:25%;animation-delay:1.2s;animation-duration:11s;background:rgba(212,175,55,0.08); }
        @keyframes bokeh-float {
          0%,100% { transform: translateY(0) scale(1); opacity:0.6; }
          50% { transform: translateY(-30px) scale(1.1); opacity:1; }
        }

        /* Hero Content */
        .hero-content {
          position: relative;
          z-index: 3;
          text-align: center;
          padding: 0 24px;
          max-width: 900px;
        }
        .hero-eyebrow {
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
          margin-bottom: 32px;
          font-weight: 600;
        }
        .hero-eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #d4af37;
          display: inline-block;
          box-shadow: 0 0 6px rgba(212,175,55,0.8);
          animation: pulse-gold 2s infinite;
        }
        @keyframes pulse-gold {
          0%,100% { box-shadow: 0 0 6px rgba(212,175,55,0.8); }
          50% { box-shadow: 0 0 14px rgba(212,175,55,1); }
        }
        .hero-title {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 28px;
          line-height: 1.1;
        }
        .hero-name {
          font-size: clamp(1.6rem, 5.5vw, 6rem);
          font-weight: 200;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #fff;
          display: block;
          white-space: nowrap;
        }
        .hero-title-line2 {
          font-size: clamp(1.4rem, 3.5vw, 2.8rem);
          font-weight: 400;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--accent);
          display: block;
        }

        /* Cycling Word */
        .hero-specialty-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
        }
        .hero-specialty-label {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.5);
          font-weight: 300;
          letter-spacing: 1px;
        }
        .hero-specialty-word {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 2px;
          text-transform: uppercase;
          transition: opacity 0.4s ease, transform 0.4s ease;
          min-width: 130px;
          text-align: left;
        }

        /* CTA Buttons */
        .hero-ctas {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }
        .hero-cta-primary {
          background: var(--accent) !important;
          color: #000 !important;
          display: inline-flex !important;
          align-items: center;
          gap: 9px;
          padding: 15px 32px !important;
          border: none;
          border-radius: 50px !important;
          font-size: 0.88rem !important;
          font-weight: 700 !important;
          letter-spacing: 1.5px !important;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none !important;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease !important;
        }
        .hero-cta-primary::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -60%;
          width: 40%;
          height: 200%;
          background: rgba(255,255,255,0.3);
          transform: skewX(-20deg);
          transition: left 0.5s ease;
        }
        .hero-cta-primary:hover::after { left: 130%; }
        .hero-cta-primary:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 12px 30px rgba(212,175,55,0.45) !important;
        }
        .hero-cta-secondary {
          background: transparent !important;
          color: #fff !important;
          display: inline-flex !important;
          align-items: center;
          gap: 9px;
          padding: 14px 32px !important;
          border: 1px solid rgba(255,255,255,0.3) !important;
          border-radius: 50px !important;
          font-size: 0.88rem !important;
          font-weight: 600 !important;
          letter-spacing: 1.5px !important;
          text-transform: uppercase;
          text-decoration: none !important;
          transition: all 0.3s ease !important;
          backdrop-filter: blur(8px);
        }
        .hero-cta-secondary:hover {
          border-color: var(--accent) !important;
          color: var(--accent) !important;
          transform: translateY(-3px) !important;
          box-shadow: 0 12px 30px rgba(0,0,0,0.3) !important;
        }

        /* Date Availability Widget */
        .hero-date-widget {
          margin-bottom: 40px;
        }
        .hdw-label {
          font-size: 0.7rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          font-weight: 600;
          margin-bottom: 10px;
        }
        .hdw-row {
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .hdw-input-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }
        .hdw-cal-icon {
          position: absolute;
          left: 14px;
          color: var(--accent);
          pointer-events: none;
          z-index: 2;
        }
        .hdw-input {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.15);
          color: #fff;
          padding: 12px 18px 12px 38px;
          border-radius: 50px;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          outline: none;
          transition: all 0.25s ease;
          backdrop-filter: blur(8px);
          cursor: pointer;
          min-width: 170px;
          color-scheme: dark;
        }
        .hdw-input:focus {
          border-color: var(--accent);
          background: rgba(212,175,55,0.08);
          box-shadow: 0 0 0 3px rgba(212,175,55,0.12);
        }
        .hdw-btn {
          background: var(--accent);
          color: #000;
          border: none;
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .hdw-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(212,175,55,0.4);
        }

        /* Stat Badges */
        .hero-badges {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 18px 32px;
          backdrop-filter: blur(12px);
          width: fit-content;
          margin: 0 auto;
        }
        .hero-badge { text-align: center; padding: 0 28px; }
        .hb-num {
          display: block;
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--accent);
          line-height: 1;
          margin-bottom: 5px;
          letter-spacing: -0.5px;
        }
        .hb-label {
          display: block;
          font-size: 0.72rem;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
        }
        .hero-badge-divider {
          width: 1px;
          height: 40px;
          background: rgba(255,255,255,0.1);
          flex-shrink: 0;
        }

        /* Scroll Indicator */
        .scroll-down {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 4;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          opacity: 0.7;
          transition: opacity 0.3s;
          animation: scroll-bounce 2s infinite;
        }
        .scroll-down:hover { opacity: 1; }
        @keyframes scroll-bounce {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        .scroll-mouse {
          width: 24px;
          height: 38px;
          border: 2px solid rgba(255,255,255,0.4);
          border-radius: 12px;
          display: flex;
          justify-content: center;
          padding-top: 6px;
        }
        .scroll-wheel {
          width: 3px;
          height: 8px;
          background: rgba(255,255,255,0.7);
          border-radius: 2px;
          animation: scroll-wheel 1.5s ease-in-out infinite;
        }
        @keyframes scroll-wheel {
          0% { opacity:1; transform: translateY(0); }
          100% { opacity:0; transform: translateY(10px); }
        }
        .scroll-label {
          font-size: 0.68rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }

        /* ── Specialty Strip ── */
        .specialty-strip {
          background: var(--accent);
          overflow: hidden;
          padding: 12px 0;
          white-space: nowrap;
        }
        .specialty-track {
          display: inline-flex;
          gap: 0;
          animation: strip-scroll 25s linear infinite;
        }
        @keyframes strip-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .strip-item {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #000;
          padding: 0 28px;
        }
        .strip-dot {
          font-size: 0.6rem;
          margin-right: 8px;
        }

        /* ── Albums Grid ── */
        .albums-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          padding: 0 4%;
          max-width: 1300px;
          margin: 0 auto;
        }
        @media (max-width: 640px) {
          .albums-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 0 5%;
          }
          .album-cover { height: 220px; }
        }
        .album-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .album-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
        .album-cover {
          position: relative;
          height: 260px;
          overflow: hidden;
          background: #111;
        }
        .album-cover-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
          display: block;
        }
        .album-card:hover .album-cover-img { transform: scale(1.06); }
        .album-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 2;
        }
        .album-card:hover .album-overlay { opacity: 1; }
        .album-view-btn {
          background: var(--accent);
          color: #000;
          padding: 10px 24px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.5px;
        }
        .album-badge {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background: rgba(0,0,0,0.75);
          color: var(--accent);
          padding: 4px 12px;
          border-radius: 50px;
          font-size: 0.78rem;
          font-weight: 600;
          z-index: 3;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .album-info { padding: 18px 20px 22px; }
        .album-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 7px;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }
        .album-desc-text {
          color: var(--text-muted);
          font-size: 0.87rem;
          line-height: 1.6;
          margin: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .hero-badges { padding: 14px 16px; }
          .hero-badge { padding: 0 10px; }
          .hb-num { font-size: 1.2rem; }
          .hero-ctas { flex-direction: column; align-items: center; gap: 12px; }
          .hero-cta-primary, .hero-cta-secondary { width: 100%; max-width: 260px; justify-content: center; }
          .hero-specialty-wrap { flex-direction: column; gap: 6px; }
          .hero-specialty-word { text-align: center; }
          .gallery-section { padding-bottom: 100px; }
        }
      `}</style>
    </main>
  );
}
