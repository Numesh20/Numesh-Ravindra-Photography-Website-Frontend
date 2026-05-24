'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

const IMAGES = [
  {
    id: 1,
    title: "Golden Hour Couple",
    category: "Wedding",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    location: "Mawanella, Sri Lanka",
    exif: { camera: "Sony A7R V", lens: "FE 85mm f/1.2 GM", aperture: "f/1.2", shutter: "1/400s", iso: "100" }
  },
  {
    id: 2,
    title: "Emotional Embrace",
    category: "Wedding",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    location: "Kandy, Sri Lanka",
    exif: { camera: "Sony A7R V", lens: "FE 50mm f/1.2 GM", aperture: "f/2.0", shutter: "1/200s", iso: "100" }
  },
  {
    id: 3,
    title: "The King of Yala",
    category: "Wildlife",
    src: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80",
    location: "Yala National Park, Sri Lanka",
    exif: { camera: "Sony A7R V", lens: "FE 200-600mm f/5.6-6.3 G", aperture: "f/6.3", shutter: "1/1000s", iso: "400" }
  },
  {
    id: 4,
    title: "Morning Songbird",
    category: "Wildlife",
    src: "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?auto=format&fit=crop&w=1200&q=80",
    location: "Mawanella, Sri Lanka",
    exif: { camera: "Sony A7R V", lens: "FE 90mm f/2.8 Macro G", aperture: "f/4.0", shutter: "1/500s", iso: "200" }
  },
  {
    id: 5,
    title: "Vibrant Festivities",
    category: "Event",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    location: "Colombo, Sri Lanka",
    exif: { camera: "Sony A7R V", lens: "FE 24-70mm f/2.8 GM II", aperture: "f/2.8", shutter: "1/160s", iso: "1600" }
  },
  {
    id: 6,
    title: "Grand Stage Presentation",
    category: "Event",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    location: "BMICH - Colombo, Sri Lanka",
    exif: { camera: "Sony A7R V", lens: "FE 24-70mm f/2.8 GM II", aperture: "f/4.0", shutter: "1/125s", iso: "800" }
  },
  {
    id: 7,
    title: "Amber Studio Profile",
    category: "Portrait",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    location: "Studio - Mawanella, Sri Lanka",
    exif: { camera: "Sony A7R V", lens: "FE 85mm f/1.2 GM", aperture: "f/1.2", shutter: "1/200s", iso: "100" }
  },
  {
    id: 8,
    title: "Natural Light Study",
    category: "Portrait",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
    location: "Ella, Sri Lanka",
    exif: { camera: "Sony A7R V", lens: "FE 50mm f/1.2 GM", aperture: "f/1.2", shutter: "1/160s", iso: "200" }
  }
];

const CATEGORIES = ["All", "Wedding", "Wildlife", "Event", "Portrait"];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImageIndex, setLightboxImageIndex] = useState(null);

  // Filter images
  const filteredImages = activeCategory === "All" 
    ? IMAGES 
    : IMAGES.filter(img => img.category === activeCategory);

  // Lightbox controls
  const openLightbox = (id) => {
    const index = IMAGES.findIndex(img => img.id === id);
    setLightboxImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImageIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (lightboxImageIndex !== null) {
      setLightboxImageIndex((lightboxImageIndex + 1) % IMAGES.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (lightboxImageIndex !== null) {
      setLightboxImageIndex((lightboxImageIndex - 1 + IMAGES.length) % IMAGES.length);
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxImageIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage(e);
      if (e.key === "ArrowLeft") prevImage(e);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImageIndex]);

  // Prevent scroll when lightbox open
  useEffect(() => {
    if (lightboxImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [lightboxImageIndex]);

  const activeImage = lightboxImageIndex !== null ? IMAGES[lightboxImageIndex] : null;

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
        />
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">Numesh Ravindra Photography</h1>
          <p className="hero-subtitle">Weddings • Wildlife • Events • Portraits</p>
          <button className="hero-cta" onClick={() => document.getElementById("gallery").scrollIntoView()}>
            View Gallery
          </button>
        </div>
        <div className="scroll-down" onClick={() => document.getElementById("gallery").scrollIntoView()}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <div className="section-intro animate-fade-in">
          <h2 className="section-title">Selected Works</h2>
          <p className="section-desc">A curated collection of captured moments from journeys around Sri Lanka.</p>
        </div>

        {/* Category Filters */}
        <div className="filter-bar animate-fade-in">
          {CATEGORIES.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="gallery-item animate-fade-in"
              onClick={() => openLightbox(image.id)}
            >
              <div className="gallery-item-inner">
                <Image 
                  src={image.src} 
                  alt={image.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-item-overlay">
                  <div className="gallery-item-info">
                    <h3 className="gallery-item-title">{image.title}</h3>
                    <div className="gallery-item-location">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {image.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Immersive Lightbox */}
      {activeImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-backdrop"></div>
          
          <button className="lightbox-close-btn" onClick={closeLightbox} aria-label="Close Lightbox">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <button className="lightbox-nav-btn lightbox-prev" onClick={prevImage} aria-label="Previous Image">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <button className="lightbox-nav-btn lightbox-next" onClick={nextImage} aria-label="Next Image">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image-section">
              <img 
                src={activeImage.src} 
                alt={activeImage.title} 
                className="lightbox-img"
              />
            </div>
            
            <div className="lightbox-info-section">
              <div className="lightbox-meta">
                <h3>{activeImage.title}</h3>
                <div className="location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {activeImage.location}
                </div>
                
                <h4 className="lightbox-specs-title">Camera Settings</h4>
                <div className="spec-grid">
                  <div className="spec-item">
                    <span className="spec-label">Camera</span>
                    <span className="spec-value">{activeImage.exif.camera}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Lens</span>
                    <span className="spec-value">{activeImage.exif.lens}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Aperture</span>
                    <span className="spec-value">{activeImage.exif.aperture}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Exposure</span>
                    <span className="spec-value">{activeImage.exif.shutter}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">ISO</span>
                    <span className="spec-value">{activeImage.exif.iso}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Category</span>
                    <span className="spec-value">{activeImage.category}</span>
                  </div>
                </div>
              </div>
              
              <div className="lightbox-footer">
                <span>Selected Works</span>
                <span>NUMESH RAVINDRA PHOTOGRAPHY</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
