'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { href: '/',         label: 'Home' },
    { href: '/gallery',  label: 'Gallery' },
    { href: '/services', label: 'Services' },
    { href: '/about',    label: 'About' },
    { href: '/contact',  label: 'Contact' },
  ];

  return (
    <>
      <nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        style={{
          transition: "background-color 0.3s ease, border-color 0.3s ease",
          backgroundColor: scrolled ? "rgba(8, 8, 10, 0.97)" : "rgba(8, 8, 10, 0.6)",
          borderColor: scrolled ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.05)"
        }}
      >
        {/* Logo */}
        <div className="logo">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Numesh Ravindra Photography"
              width={180}
              height={44}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>
        </div>

        {/* Desktop nav links */}
        <div className="nav-links">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                href === '/'
                  ? pathname === '/' ? 'active' : ''
                  : pathname.startsWith(href) ? 'active' : ''
              }
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`mobile-nav-link ${
                href === '/'
                  ? pathname === '/' ? 'active' : ''
                  : pathname.startsWith(href) ? 'active' : ''
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          {/* Contact info inside mobile menu */}
          <div className="mobile-menu-footer">
            <a href="https://wa.me/94704574568" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              📱 WhatsApp: +94 70 457 4568
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
