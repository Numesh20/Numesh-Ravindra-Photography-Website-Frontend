'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: '/',         label: 'Home' },
  { href: '/gallery',  label: 'Gallery' },
  { href: '/services', label: 'Services' },
  { href: '/about',    label: 'About' },
  { href: '/contact',  label: 'Contact' },
];

export default function Navbar() {
  const pathname   = usePathname();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [progress, setProgress]   = useState(0);

  // Scroll handler — navbar bg + scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollY  = window.scrollY;
      const docH     = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollY > 30);
      setProgress(docH > 0 ? Math.min((scrollY / docH) * 100, 100) : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      {/* ── Scroll Progress Bar ── */}
      <div className="nb-progress-track">
        <div className="nb-progress-bar" style={{ width: `${progress}%` }} />
      </div>

      {/* ── Main Navbar ── */}
      <nav className={`nb-nav ${scrolled ? 'nb-scrolled' : ''}`}>

        {/* Logo */}
        <Link href="/" className="nb-logo">
          <Image
            src="/logo.png"
            alt="Numesh Ravindra Photography"
            width={160}
            height={40}
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="nb-links">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nb-link ${isActive(href) ? 'nb-active' : ''}`}
            >
              {label}
              <span className="nb-link-line" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA + Hamburger */}
        <div className="nb-right">
          <Link href="/contact" className="nb-book-btn">
            Book Now
          </Link>
          <button
            className={`nb-hamburger ${menuOpen ? 'nb-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ── Mobile Full-Screen Menu ── */}
      <div className={`nb-mobile-menu ${menuOpen ? 'nb-menu-active' : ''}`}>
        {/* Close button */}
        <button
          className="nb-mobile-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Mobile Links */}
        <nav className="nb-mobile-nav">
          {NAV_LINKS.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              className={`nb-mobile-link ${isActive(href) ? 'nb-mobile-active' : ''}`}
              style={{ animationDelay: menuOpen ? `${i * 0.07}s` : '0s' }}
              onClick={() => setMenuOpen(false)}
            >
              <span className="nb-mobile-num">0{i + 1}</span>
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Footer */}
        <div className="nb-mobile-footer">
          <Link href="/contact" className="nb-mobile-cta" onClick={() => setMenuOpen(false)}>
            📸 Book a Session
          </Link>
          <div className="nb-mobile-socials">
            <a href="https://wa.me/94704574568" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100090941785767" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@numesh_ravindra" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
          <p className="nb-mobile-location">📍 Mawanella, Sri Lanka · Available Island-wide</p>
        </div>
      </div>

      <style jsx>{`
        /* ── Progress Bar ── */
        .nb-progress-track {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          z-index: 2000;
          background: rgba(255,255,255,0.05);
        }
        .nb-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--accent) 0%, #f0d060 100%);
          transition: width 0.1s linear;
          box-shadow: 0 0 8px rgba(212,175,55,0.6);
        }

        /* ── Navbar ── */
        .nb-nav {
          position: fixed;
          top: 2px;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 4%;
          height: 70px;
          background: rgba(8,8,10,0.5);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .nb-scrolled {
          background: rgba(8,8,10,0.95) !important;
          border-color: rgba(255,255,255,0.1) !important;
          box-shadow: 0 4px 30px rgba(0,0,0,0.4) !important;
        }

        /* ── Logo ── */
        .nb-logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }
        .nb-logo:hover { opacity: 0.85; }

        /* ── Desktop Links ── */
        .nb-links {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .nb-link {
          position: relative;
          padding: 6px 14px;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .nb-link:hover { color: #fff; }
        .nb-active { color: var(--accent) !important; }
        .nb-link-line {
          position: absolute;
          bottom: 0;
          left: 50%;
          right: 50%;
          height: 1.5px;
          background: var(--accent);
          border-radius: 2px;
          transition: left 0.25s ease, right 0.25s ease;
        }
        .nb-link:hover .nb-link-line,
        .nb-active .nb-link-line {
          left: 14px;
          right: 14px;
        }

        /* ── Right Side ── */
        .nb-right {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
        }

        /* ── Book Now Button ── */
        .nb-book-btn {
          display: inline-flex;
          align-items: center;
          padding: 8px 22px;
          background: var(--accent);
          color: #000;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 50px;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .nb-book-btn:hover {
          background: #f0d060;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(212,175,55,0.4);
        }

        /* ── Hamburger ── */
        .nb-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          z-index: 1001;
        }
        .nb-hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }
        .nb-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .nb-open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nb-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── Mobile Menu ── */
        .nb-mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 1500;
          background: rgba(6,6,8,0.98);
          backdrop-filter: blur(24px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 40px 4%;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease;
        }
        .nb-menu-active {
          opacity: 1 !important;
          pointer-events: all !important;
        }
        .nb-mobile-close {
          position: absolute;
          top: 28px;
          right: 4%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .nb-mobile-close:hover { background: rgba(255,255,255,0.12); }

        .nb-mobile-nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          width: 100%;
        }
        .nb-mobile-link {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 2.2rem;
          font-weight: 200;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          padding: 10px 24px;
          width: 100%;
          text-align: center;
          justify-content: center;
          transition: color 0.25s ease, transform 0.25s ease;
          animation: nb-slide-in 0.4s ease both;
        }
        @keyframes nb-slide-in {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nb-mobile-link:hover,
        .nb-mobile-active {
          color: var(--accent) !important;
          transform: scale(1.03);
        }
        .nb-mobile-num {
          font-size: 0.7rem;
          color: var(--accent);
          font-weight: 700;
          letter-spacing: 1px;
          opacity: 0.7;
        }

        .nb-mobile-footer {
          position: absolute;
          bottom: 40px;
          left: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding: 0 24px;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 24px;
        }
        .nb-mobile-cta {
          background: var(--accent);
          color: #000;
          padding: 12px 32px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .nb-mobile-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(212,175,55,0.4);
        }
        .nb-mobile-socials {
          display: flex;
          gap: 16px;
          align-items: center;
        }
        .nb-mobile-socials a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .nb-mobile-socials a:hover {
          background: rgba(212,175,55,0.12);
          border-color: var(--accent);
          color: var(--accent);
        }
        .nb-mobile-location {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.3);
          letter-spacing: 1px;
          text-align: center;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .nb-book-btn { display: none; }
        }
        @media (max-width: 768px) {
          .nb-links { display: none; }
          .nb-hamburger { display: flex; }
          .nb-book-btn { display: none; }
        }
        @media (min-width: 769px) {
          .nb-mobile-menu { display: none; }
        }
      `}</style>
    </>
  );
}
