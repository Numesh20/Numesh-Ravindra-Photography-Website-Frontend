'use client';

import Image from "next/image";

const INSTAGRAM_URL = "https://instagram.com/numesh_ravindra";

const INSTA_POSTS = [
  {
    id: 1,
    img: "/gallery/portraits/Anu%20Karunathilaka/IMG_1.jpg",
    caption: "Golden hour tones and natural smiles in Kegalle",
    alt: "Numesh Ravindra Photography on Instagram - Portrait Session",
  },
  {
    id: 2,
    img: "/gallery/portraits/Manavi%20photo%20shoot/Cover.jpg",
    caption: "Studio elegance and timeless portraits",
    alt: "Numesh Ravindra Photography on Instagram - Studio Session",
  },
  {
    id: 3,
    img: "/gallery/portraits/Savindi%20Edit/IMG_5089.jpg",
    caption: "Surrounded by nature in Kandy hills",
    alt: "Numesh Ravindra Photography on Instagram - Outdoor Shoot",
  },
  {
    id: 4,
    img: "/gallery/portraits/amandi%20Edit/10.jpg",
    caption: "Candid moments that tell a story",
    alt: "Numesh Ravindra Photography on Instagram - Curated Portrait",
  },
  {
    id: 5,
    img: "/gallery/portraits/Sathya%20Birthday%20shoot/1%20(1).jpg",
    caption: "Vibrant birthday celebration frames",
    alt: "Numesh Ravindra Photography on Instagram - Birthday Shoot",
  },
  {
    id: 6,
    img: "/gallery/portraits/Anu%20Karunathilaka/IMG_7212.jpg",
    caption: "Dreamy evening light and pure joy",
    alt: "Numesh Ravindra Photography on Instagram - Golden Hour",
  },
];

function InstagramIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function InstagramSection() {
  return (
    <section className="ig-root animate-fade-in" aria-labelledby="ig-title">
      {/* ── Header ── */}
      <div className="ig-header">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ig-tag"
        >
          <InstagramIcon size={14} />
          <span>@numesh_ravindra</span>
        </a>
        <h2 id="ig-title" className="section-title">
          Follow On Instagram
        </h2>
        <p className="section-desc">
          Daily frames, behind-the-scenes moments, and recent client stories from across Sri Lanka.
        </p>
      </div>

      {/* ── Grid ── */}
      <div className="ig-grid">
        {INSTA_POSTS.map((post) => (
          <a
            key={post.id}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ig-card"
            aria-label={`View Instagram post: ${post.caption}`}
          >
            <div className="ig-img-wrap">
              <Image
                src={post.img}
                alt={post.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                style={{ objectFit: "cover" }}
                quality={75}
              />
              <div className="ig-overlay">
                <div className="ig-overlay-content">
                  <span className="ig-icon-circle">
                    <InstagramIcon size={20} />
                  </span>
                  <span className="ig-view-label">View Post</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* ── Bottom CTA ── */}
      <div className="ig-cta-wrap">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ig-btn"
        >
          <InstagramIcon size={18} />
          <span>Follow @numesh_ravindra</span>
        </a>
      </div>

      <style jsx>{`
        .ig-root {
          padding: 80px 4% 90px;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* Header */
        .ig-header {
          margin-bottom: 44px;
        }
        .ig-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid rgba(212, 175, 55, 0.25);
          color: var(--accent);
          padding: 6px 18px;
          border-radius: 50px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          text-decoration: none;
          margin-bottom: 18px;
          transition: all 0.3s ease;
        }
        .ig-tag:hover {
          background: rgba(212, 175, 55, 0.16);
          border-color: var(--accent);
          transform: translateY(-2px);
        }

        /* Grid */
        .ig-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
          max-width: 1300px;
          margin: 0 auto 40px;
        }
        .ig-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          display: block;
          text-decoration: none;
        }
        .ig-card:hover {
          transform: translateY(-4px);
          border-color: rgba(212, 175, 55, 0.4);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
        }

        .ig-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
        }
        .ig-img-wrap :global(img) {
          transition: transform 0.5s ease;
        }
        .ig-card:hover .ig-img-wrap :global(img) {
          transform: scale(1.08);
        }

        /* Hover Overlay */
        .ig-overlay {
          position: absolute;
          inset: 0;
          background: rgba(8, 8, 10, 0.65);
          backdrop-filter: blur(2px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 2;
        }
        .ig-card:hover .ig-overlay {
          opacity: 1;
        }
        .ig-overlay-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: #fff;
        }
        .ig-icon-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(212, 175, 55, 0.2);
          border: 1px solid var(--accent);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ig-view-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #fff;
        }

        /* Bottom CTA */
        .ig-cta-wrap {
          display: flex;
          justify-content: center;
        }
        .ig-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.04);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 13px 32px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .ig-btn:hover {
          background: var(--accent);
          border-color: var(--accent);
          color: #000;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(212, 175, 55, 0.3);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .ig-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
          }
        }
        @media (max-width: 640px) {
          .ig-root {
            padding: 60px 4% 70px;
          }
          .ig-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .ig-btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
