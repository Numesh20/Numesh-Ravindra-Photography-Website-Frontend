'use client';

import Link from "next/link";

const ALBUMS = [
  {
    slug: "anu-karunathilaka",
    title: "Anu Karunathilaka",
    description: "A beautiful romantic wedding photography collection.",
    cover: "/gallery/Anu Karunathilaka/IMG_1.jpg",
    count: 26,
    icon: "💍"
  },
  {
    slug: "manavi-photo-shoot",
    title: "Manavi Vihara",
    description: "An elegant portrait and studio photography session.",
    cover: "/gallery/Manavi photo shoot/Cover.jpg",
    count: 20,
    icon: "🎭"
  },
  {
    slug: "savindi-edit",
    title: "Savindi Thathsara",
    description: "A stunning outdoor portrait photography session.",
    cover: "/gallery/Savindi Edit/IMG_5089.jpg",
    count: 16,
    icon: "✨"
  },
  {
    slug: "amandi-edit",
    title: "Amandi Rathnayake",
    description: "A beautiful curated photography collection.",
    cover: "/gallery/amandi Edit/10.jpg",
    count: 22,
    icon: "📷"
  }
];

export default function GalleryPage() {
  return (
    <main style={{ minHeight: '100vh', padding: '120px 4% 80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="animate-fade-in">

        {/* Page Header */}
        <header style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 className="section-title">Photo Albums</h1>
          <p className="section-desc" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Browse through curated collections of photography work from across Sri Lanka.
          </p>
        </header>

        {/* Albums Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}>
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
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                      display: 'block'
                    }}
                    className="album-cover-img"
                  />
                  <div className="album-overlay">
                    <span className="album-view-btn">View Album →</span>
                  </div>
                  <div className="album-badge">{album.count} photos</div>
                  <div className="album-icon">{album.icon}</div>
                </div>
                <div className="album-info">
                  <h2 className="album-title">{album.title}</h2>
                  <p className="album-desc">{album.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
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
        .album-card:hover .album-cover-img {
          transform: scale(1.08);
        }
        .album-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.45);
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
          background: rgba(0,0,0,0.7);
          color: var(--accent);
          padding: 4px 12px;
          border-radius: 50px;
          font-size: 0.78rem;
          font-weight: 600;
          z-index: 3;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .album-icon {
          position: absolute;
          top: 16px;
          left: 16px;
          font-size: 1.6rem;
          z-index: 3;
          background: rgba(0,0,0,0.6);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(8px);
        }
        .album-info {
          padding: 20px 22px 24px;
        }
        .album-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 8px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .album-desc {
          color: var(--text-muted);
          font-size: 0.88rem;
          line-height: 1.6;
          margin: 0;
        }
      `}</style>
    </main>
  );
}
