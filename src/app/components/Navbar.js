'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} style={{
      transition: "background-color 0.3s ease, border-color 0.3s ease",
      backgroundColor: scrolled ? "rgba(8, 8, 10, 0.9)" : "rgba(8, 8, 10, 0.6)",
      borderColor: scrolled ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.05)"
    }}>
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
      <div className="nav-links">
        <Link href="/" className={pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link href="/gallery" className={pathname.startsWith("/gallery") ? "active" : ""}>
          Gallery
        </Link>
        <Link href="/services" className={pathname === "/services" ? "active" : ""}>
          Services
        </Link>
        <Link href="/about" className={pathname === "/about" ? "active" : ""}>
          About
        </Link>
        <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
