'use client';

import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: '/',         label: 'Home' },
  { href: '/gallery',  label: 'Gallery' },
  { href: '/services', label: 'Services' },
  { href: '/about',    label: 'About Me' },
  { href: '/contact',  label: 'Contact' },
];

const SERVICES = [
  'Wedding Photography',
  'Portrait Sessions',
  'Wildlife Photography',
  'Event Coverage',
  'Aerial (Drone)',
];

const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100090941785767',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@numesh_ravindra',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/94704574568',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/numesh_ravindra',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ft-root">

      {/* ── Top CTA Banner ── */}
      <div className="ft-cta-strip">
        <div className="ft-cta-inner">
          <div className="ft-cta-text">
            <h2>Ready to book your session?</h2>
            <p>Available island-wide across Sri Lanka</p>
          </div>
          <div className="ft-cta-actions">
            <Link href="/contact" className="ft-cta-btn-primary">Book a Session</Link>
            <a href="https://wa.me/94704574568" target="_blank" rel="noopener noreferrer" className="ft-cta-btn-wa">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="ft-main">
        <div className="ft-grid">

          {/* Column 1 — Brand */}
          <div className="ft-col ft-col-brand">
            <div className="ft-logo">
              <Image
                src="/logo.png"
                alt="Numesh Ravindra Photography"
                width={180}
                height={45}
                style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="ft-brand-desc">
              Capturing timeless moments through a lens. Specializing in Wedding, Wildlife, Event, and Portrait photography across Sri Lanka.
            </p>
            <div className="ft-socials">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="ft-social-btn"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div className="ft-col">
            <h4 className="ft-col-title">Navigation</h4>
            <ul className="ft-link-list">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="ft-link">
                    <span className="ft-link-arrow">→</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div className="ft-col">
            <h4 className="ft-col-title">Services</h4>
            <ul className="ft-link-list">
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link href="/services" className="ft-link">
                    <span className="ft-link-arrow">→</span> {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div className="ft-col">
            <h4 className="ft-col-title">Get in Touch</h4>
            <ul className="ft-contact-list">
              <li>
                <span className="ft-contact-icon"></span>
                <span>Mawanella, Kegalle<br />Sri Lanka 71500</span>
              </li>
              <li>
                <span className="ft-contact-icon"></span>
                <a href="tel:+94704574568" className="ft-link">+94 70 457 4568</a>
              </li>
              <li>
                <span className="ft-contact-icon"></span>
                <a href="https://wa.me/94704574568" target="_blank" rel="noopener noreferrer" className="ft-link">WhatsApp Chat</a>
              </li>
              <li>
                <span className="ft-contact-icon"></span>
                <span>Available 7 days a week</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="ft-bottom">
        <div className="ft-bottom-inner">
          <p className="ft-copy">© {year} Numesh Ravindra Photography. All rights reserved.</p>
          <div className="ft-bottom-links">
            <Link href="/contact" className="ft-bottom-link">Book Now</Link>
            <span className="ft-dot">·</span>
            <Link href="/gallery" className="ft-bottom-link">Gallery</Link>
            <span className="ft-dot">·</span>
            <Link href="/about" className="ft-bottom-link">About</Link>
          </div>
          <p className="ft-made">Made with ❤️ in Sri Lanka</p>
        </div>
      </div>

      <style jsx>{`
        /* ── Root ── */
        .ft-root {
          background: #06060a;
          border-top: 1px solid rgba(255,255,255,0.06);
          margin-top: 0;
        }

        /* ── CTA Strip ── */
        .ft-cta-strip {
          background: linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0.04) 100%);
          border-bottom: 1px solid rgba(212,175,55,0.1);
        }
        .ft-cta-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 4%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .ft-cta-text h2 {
          font-size: 1.4rem;
          font-weight: 300;
          letter-spacing: 1px;
          color: var(--text-main);
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .ft-cta-text p {
          font-size: 0.83rem;
          color: var(--text-muted);
          letter-spacing: 1px;
        }
        .ft-cta-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
        }
        .ft-cta-btn-primary {
          background: var(--accent);
          color: #000;
          padding: 12px 28px;
          border-radius: 50px;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .ft-cta-btn-primary:hover {
          background: #f0d060;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(212,175,55,0.35);
        }
        .ft-cta-btn-wa {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(37,211,102,0.1);
          color: #25D366;
          padding: 11px 24px;
          border-radius: 50px;
          border: 1px solid rgba(37,211,102,0.25);
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .ft-cta-btn-wa:hover {
          background: rgba(37,211,102,0.18);
          transform: translateY(-2px);
        }

        /* ── Main Grid ── */
        .ft-main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 64px 4% 48px;
        }
        .ft-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1fr;
          gap: 48px;
        }

        /* Brand column */
        .ft-logo { margin-bottom: 20px; }
        .ft-brand-desc {
          font-size: 0.86rem;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 24px;
        }
        .ft-socials {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .ft-social-btn {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .ft-social-btn:hover {
          background: rgba(212,175,55,0.1);
          border-color: rgba(212,175,55,0.3);
          color: var(--accent);
          transform: translateY(-3px);
        }

        /* Column headers */
        .ft-col-title {
          font-size: 0.7rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 700;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(212,175,55,0.15);
        }

        /* Nav links */
        .ft-link-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ft-link {
          font-size: 0.86rem;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
        }
        .ft-link:hover {
          color: var(--accent);
          gap: 12px;
        }
        .ft-link-arrow {
          font-size: 0.7rem;
          transition: transform 0.2s ease;
          color: var(--accent);
          opacity: 0.5;
        }
        .ft-link:hover .ft-link-arrow {
          transform: translateX(3px);
          opacity: 1;
        }

        /* Contact list */
        .ft-contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .ft-contact-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.86rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.6;
        }
        .ft-contact-icon {
          flex-shrink: 0;
          font-size: 0.9rem;
          margin-top: 1px;
        }

        /* ── Bottom Bar ── */
        .ft-bottom {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 20px 4%;
        }
        .ft-bottom-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .ft-copy {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.25);
        }
        .ft-bottom-links {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .ft-bottom-link {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          transition: color 0.2s ease;
          letter-spacing: 0.5px;
        }
        .ft-bottom-link:hover { color: var(--accent); }
        .ft-dot {
          color: rgba(255,255,255,0.15);
          font-size: 0.7rem;
        }
        .ft-made {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.2);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .ft-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
          .ft-col-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 640px) {
          .ft-grid { grid-template-columns: 1fr; gap: 28px; }
          .ft-col-brand { grid-column: auto; }
          .ft-cta-inner { flex-direction: column; align-items: flex-start; }
          .ft-bottom-inner { flex-direction: column; text-align: center; gap: 10px; }
          .ft-made { display: none; }
        }
      `}</style>
    </footer>
  );
}
