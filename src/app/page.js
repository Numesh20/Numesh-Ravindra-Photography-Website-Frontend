'use client';

import Link from "next/link";
import Image from "next/image";
import StatsSection from "./components/StatsSection";


const ALBUMS = [
  {
    slug: "anu-karunathilaka",
    title: "Anu Karunathilaka",
    description: "A beautiful romantic wedding photography collection.",
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
  }
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=90"
          alt="Hero background"
          fill
          priority
          className="hero-bg"
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
        />
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">Numesh Ravindra Photography</h1>
          <p className="hero-subtitle">Weddings • Wildlife • Events • Portraits</p>
          <button
            className="hero-cta"
            onClick={() => document.getElementById('albums').scrollIntoView({ behavior: 'smooth' })}
          >
            View Gallery
          </button>
        </div>
        <div
          className="scroll-down"
          onClick={() => document.getElementById('albums').scrollIntoView({ behavior: 'smooth' })}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </div>
      </section>

      {/* Stats Dashboard */}
      <StatsSection />

      {/* Albums Section */}
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
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="album-cover-img"
                  />
                  <div className="album-overlay">
                    <span className="album-view-btn">View Album →</span>
                  </div>
                  <div className="album-badge">{album.count} photos</div>
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

      <style jsx>{`
        .albums-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 28px;
          padding: 0 4%;
          max-width: 1300px;
          margin: 0 auto;
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
        .album-card:hover .album-cover-img {
          transform: scale(1.06);
        }
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
        .album-card:hover .album-overlay {
          opacity: 1;
        }
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
        .album-info {
          padding: 18px 20px 22px;
        }
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
      `}</style>
    </main>
  );
}
