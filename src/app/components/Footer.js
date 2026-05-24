'use client';

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer animate-fade-in">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>NUMESH RAVINDRA</h3>
          <p>
            Capturing timeless moments through a lens. Specializing in Wedding, Wildlife, Event, and Portrait photography. Based in Mawanella, Sri Lanka.
          </p>
        </div>
        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><Link href="/">Gallery</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About Me</Link></li>
            <li><Link href="/contact">Inquire</Link></li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h4>Stay Connected</h4>
          <p>Subscribe to receive updates, photography tips, and session availability.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your Email Address" required aria-label="Email Address" />
            <button type="submit">Join</button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Numesh Ravindra Photography. All rights reserved.</p>
        <div className="social-icons">
          {/* Facebook Icon */}
          <a href="https://www.facebook.com/profile.php?id=100090941785767" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          {/* TikTok Icon */}
          <a href="https://www.tiktok.com/@numesh_ravindra" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
            </svg>
          </a>
          {/* WhatsApp Icon */}
          <a href="https://wa.me/94704574568" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </a>
          {/* Instagram Icon */}
          <a href="https://instagram.com/numesh_ravindra" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
