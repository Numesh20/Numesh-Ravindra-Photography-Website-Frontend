"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const ALBUM_DATA = {
  "anu-karunathilaka": {
    title: "Anu Karunathilaka",
    folder: "Anu Karunathilaka",
    description: "A beautiful romantic wedding photography collection.",
    icon: "",
    photos: [
      { id: 1, filename: "IMG_1.jpg" },
      { id: 2, filename: "IMG_7000.jpg" },
      { id: 3, filename: "IMG_7156.jpg" },
      { id: 4, filename: "IMG_7166.jpg" },
      { id: 5, filename: "IMG_7212.jpg" },
      { id: 6, filename: "IMG_7220.jpg" },
      { id: 7, filename: "IMG_7238.jpg" },
      { id: 8, filename: "IMG_7309.jpg" },
      { id: 9, filename: "IMG_7323.jpg" },
      { id: 10, filename: "IMG_7329.jpg" },
      { id: 11, filename: "IMG_735.jpg" },
      { id: 12, filename: "IMG_7351.jpg" },
      { id: 13, filename: "IMG_7353.jpg" },
      { id: 14, filename: "IMG_7355.jpg" },
      { id: 15, filename: "IMG_7356.jpg" },
      { id: 16, filename: "IMG_7358.jpg" },
      { id: 17, filename: "IMG_736.jpg" },
      { id: 18, filename: "IMG_7360.jpg" },
      { id: 19, filename: "IMG_7361.jpg" },
      { id: 20, filename: "IMG_7365.jpg" },
      { id: 21, filename: "IMG_7366.jpg" },
      { id: 22, filename: "IMG_7368.jpg" },
      { id: 23, filename: "IMG_7370.jpg" },
      { id: 24, filename: "IMG_800.jpg" },
      { id: 25, filename: "Soft Romantic Wedding Photo Collage.jpg" },
      { id: 26, filename: "Untitled-1.jpg" },
    ]
  },
  "manavi-photo-shoot": {
    title: "Manavi Photo Shoot",
    folder: "Manavi photo shoot",
    description: "An elegant portrait and studio photography session.",
    icon: "",
    photos: [
      { id: 1, filename: "Cover.jpg" },
      { id: 2, filename: "DSC_0038.jpg" },
      { id: 3, filename: "DSC_0041.jpg" },
      { id: 4, filename: "DSC_0043.jpg" },
      { id: 5, filename: "DSC_0060.jpg" },
      { id: 6, filename: "DSC_0061.jpg" },
      { id: 7, filename: "DSC_0062.jpg" },
      { id: 8, filename: "DSC_0067.jpg" },
      { id: 9, filename: "DSC_0069.jpg" },
      { id: 10, filename: "DSC_0071.jpg" },
      { id: 11, filename: "DSC_0081.jpg" },
      { id: 12, filename: "DSC_0084.jpg" },
      { id: 13, filename: "DSC_0098.jpg" },
      { id: 14, filename: "DSC_01.jpg" },
      { id: 15, filename: "DSC_0100.jpg" },
      { id: 16, filename: "DSC_0101.jpg" },
      { id: 17, filename: "DSC_0103.jpg" },
      { id: 18, filename: "DSC_0108.jpg" },
      { id: 19, filename: "DSC_0119.jpg" },
      { id: 20, filename: "DSC_02.jpg" },
    ]
  },
  "savindi-edit": {
    title: "Savindi",
    folder: "Savindi Edit",
    description: "A stunning outdoor portrait photography session.",
    icon: "",
    photos: [
      { id: 1, filename: "IMG_5089.jpg" },
      { id: 2, filename: "IMG_5277 - Copy.jpg" },
      { id: 3, filename: "IMG_5296.jpg" },
      { id: 4, filename: "IMG_5306.jpg" },
      { id: 5, filename: "IMG_5312.jpg" },
      { id: 6, filename: "IMG_5319.jpg" },
      { id: 7, filename: "IMG_5320.jpg" },
      { id: 8, filename: "IMG_5322.jpg" },
      { id: 9, filename: "IMG_5329.jpg" },
      { id: 10, filename: "IMG_5339.jpg" },
      { id: 11, filename: "IMG_5350.jpg" },
      { id: 12, filename: "IMG_5358.jpg" },
      { id: 13, filename: "IMG_5361.jpg" },
      { id: 14, filename: "IMG_5373.jpg" },
      { id: 15, filename: "IMG_5389.jpg" },
      { id: 16, filename: "IMG_5390.jpg" },
    ]
  },
  "amandi-edit": {
    title: "Amandi",
    folder: "amandi Edit",
    description: "A beautiful curated photography collection.",
    icon: "",
    photos: [
      { id: 1, filename: "10.jpg" },
      { id: 2, filename: "20.jpg" },
      { id: 3, filename: "30.jpg" },
      { id: 4, filename: "40.jpg" },
      { id: 5, filename: "50.jpg" },
      { id: 6, filename: "60.jpg" },
      { id: 7, filename: "70.jpg" },
      { id: 8, filename: "80.jpg" },
      { id: 9, filename: "90.jpg" },
      { id: 10, filename: "100.jpg" },
      { id: 11, filename: "110.jpg" },
      { id: 12, filename: "120.jpg" },
      { id: 13, filename: "130.jpg" },
      { id: 14, filename: "140.jpg" },
      { id: 15, filename: "150.jpg" },
      { id: 16, filename: "160.jpg" },
      { id: 17, filename: "170.jpg" },
      { id: 18, filename: "180.jpg" },
      { id: 19, filename: "190.jpg" },
      { id: 20, filename: "200.jpg" },
      { id: 21, filename: "210.jpg" },
      { id: 22, filename: "220.jpg" },
    ]
  },
  "sathya-birthday-shoot": {
    title: "Sathya Birthday Shoot",
    folder: "Sathya Birthday shoot",
    description: "A vibrant and joyful birthday photography session.",
    icon: "",
    photos: [
      { id: 1,  filename: "1 (1).jpg" },
      { id: 2,  filename: "1 (2).jpg" },
      { id: 3,  filename: "1 (3).jpg" },
      { id: 4,  filename: "1 (4).jpg" },
      { id: 5,  filename: "1 (5).jpg" },
      { id: 6,  filename: "1 (6).jpg" },
      { id: 7,  filename: "1 (7).jpg" },
      { id: 8,  filename: "1 (8).jpg" },
      { id: 9,  filename: "1 (9).jpg" },
      { id: 10, filename: "1 (10).jpg" },
      { id: 11, filename: "1 (11).jpg" },
      { id: 12, filename: "1 (12).jpg" },
      { id: 13, filename: "1 (13).jpg" },
      { id: 14, filename: "1 (14).jpg" },
      { id: 15, filename: "1 (15).jpg" },
      { id: 16, filename: "1 (16).jpg" },
      { id: 17, filename: "1 (17).jpg" },
      { id: 18, filename: "1 (18).jpg" },
      { id: 19, filename: "1 (19).jpg" },
      { id: 20, filename: "1 (20).jpg" },
    ]
  }
};

export default function AlbumClient({ albumSlug }) {
  const album = ALBUM_DATA[albumSlug];
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const getPhotoSrc = (folder, filename) =>
    `/gallery/portraits/${encodeURIComponent(folder)}/${encodeURIComponent(filename)}`;

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const next = (e) => {
    e?.stopPropagation();
    if (album) {
      setLightboxIndex((lightboxIndex + 1) % album.photos.length);
    }
  };
  const prev = (e) => {
    e?.stopPropagation();
    if (album) {
      setLightboxIndex((lightboxIndex - 1 + album.photos.length) % album.photos.length);
    }
  };

  useEffect(() => {
    const handler = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIndex]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [lightboxIndex]);

  if (!album) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1>Album not found</h1>
          <Link href="/gallery" style={{ color: 'var(--accent)' }}>← Back to Gallery</Link>
        </div>
      </main>
    );
  }

  const activePhoto = lightboxIndex !== null ? album.photos[lightboxIndex] : null;

  return (
    <main style={{ minHeight: '100vh', padding: '120px 4% 80px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }} className="animate-fade-in">

        {/* Back link */}
        <Link href="/gallery" className="album-back-link">
          ← All Albums
        </Link>

        {/* Header */}
        <header style={{ textAlign: 'center', margin: '40px 0 50px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '12px' }}>{album.icon}</div>
          <h1 className="section-title">{album.title}</h1>
          <p className="section-desc">{album.description}</p>
          <p style={{ color: 'var(--accent)', fontSize: '0.85rem', marginTop: '8px', fontWeight: '600' }}>
            {album.photos.length} photos
          </p>
        </header>

        {/* Photo Grid */}
        <div className="album-photo-grid">
          {album.photos.map((photo, index) => (
            <div
              key={photo.id}
              className="album-photo-item"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={getPhotoSrc(album.folder, photo.filename)}
                alt={`${album.title} - Photo ${photo.id}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                className="album-photo-img"
                quality={80}
                priority={index < 4}
                loading={index < 4 ? 'eager' : 'lazy'}
              />
              <div className="album-photo-overlay">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </div>
              <div className="album-photo-num">{photo.id}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activePhoto && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-backdrop"></div>

          <button className="lightbox-close-btn" onClick={closeLightbox} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <button className="lightbox-nav-btn lightbox-prev" onClick={prev} aria-label="Previous">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button className="lightbox-nav-btn lightbox-next" onClick={next} aria-label="Next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image-section">
              <Image
                src={getPhotoSrc(album.folder, activePhoto.filename)}
                alt={`${album.title} - Photo ${activePhoto.id}`}
                fill
                sizes="(max-width: 768px) 100vw, 70vw"
                style={{ objectFit: 'contain' }}
                className="lightbox-img"
                priority
              />
            </div>
            <div className="lightbox-info-section">
              <div className="lightbox-meta">
                <h3>{album.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '8px' }}>
                  Photo {lightboxIndex + 1} of {album.photos.length}
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '6px' }}>
                   Sri Lanka
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '4px' }}>
                   Sony Alfa A7 III
                </p>
              </div>
              <div className="lightbox-footer">
                <span>{album.title}</span>
                <span>NUMESH RAVINDRA PHOTOGRAPHY</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .album-back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--accent);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          transition: gap 0.2s ease;
        }
        .album-back-link:hover { gap: 14px; }

        .album-photo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 14px;
        }
        .album-photo-item {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
          border-radius: 10px;
          cursor: pointer;
          background: rgba(255,255,255,0.05);
        }
        .album-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
          display: block;
        }
        .album-photo-item:hover .album-photo-img {
          transform: scale(1.06);
        }
        .album-photo-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .album-photo-item:hover .album-photo-overlay {
          opacity: 1;
        }
        .album-photo-num {
          position: absolute;
          bottom: 8px;
          right: 10px;
          color: rgba(255,255,255,0.5);
          font-size: 0.75rem;
          font-weight: 600;
        }
      `}</style>
    </main>
  );
}
