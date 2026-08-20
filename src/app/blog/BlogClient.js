"use client";

import Image from "next/image";
import Link from "next/link";
import { POSTS } from "./posts";

const CATEGORY_COLORS = {
  Wedding: "#d4af37",
  Portrait: "#a78bfa",
  Wildlife: "#34d399",
  Events: "#60a5fa",
};

export default function BlogClient() {
  const featured = POSTS[0];
  const rest = POSTS.slice(1);

  return (
    <div className="bl-root">

      {/* ── Hero ── */}
      <section className="bl-hero">
        <div className="bl-hero-glow" />
        <div className="bl-hero-content animate-fade-in">
          <span className="bl-eyebrow">Photography Insights</span>
          <h1 className="bl-hero-title">The Blog</h1>
          <p className="bl-hero-sub">
            Tips, guides, and stories from behind the lens. Written for clients,
            photographers, and anyone who loves great photography.
          </p>
        </div>
      </section>

      {/* ── Featured Post ── */}
      <section className="bl-featured-wrap">
        <p className="bl-section-label">Featured Article</p>
        <Link href={`/blog/${featured.slug}`} className="bl-featured">
          <div className="bl-featured-img-wrap">
            <Image
              src={featured.cover}
              alt={featured.title}
              fill
              style={{ objectFit: "cover" }}
              quality={80}
              priority
            />
            <div className="bl-featured-img-overlay" />
            <span
              className="bl-cat-tag"
              style={{ background: CATEGORY_COLORS[featured.category] || "#d4af37" }}
            >
              {featured.category}
            </span>
          </div>
          <div className="bl-featured-body">
            <div className="bl-meta">
              <span>{featured.date}</span>
              <span className="bl-meta-dot">·</span>
              <span>{featured.readTime}</span>
            </div>
            <h2 className="bl-featured-title">{featured.title}</h2>
            <p className="bl-featured-excerpt">{featured.excerpt}</p>
            <span className="bl-read-more">Read Article →</span>
          </div>
        </Link>
      </section>

      {/* ── All Posts Grid ── */}
      <section className="bl-grid-wrap">
        <p className="bl-section-label">More Articles</p>
        <div className="bl-grid">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="bl-card">
              <div className="bl-card-img-wrap">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover" }}
                  quality={75}
                />
                <div className="bl-card-img-overlay" />
                <span
                  className="bl-cat-tag bl-cat-sm"
                  style={{ background: CATEGORY_COLORS[post.category] || "#d4af37" }}
                >
                  {post.category}
                </span>
              </div>
              <div className="bl-card-body">
                <div className="bl-meta bl-meta-sm">
                  <span>{post.date}</span>
                  <span className="bl-meta-dot">·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="bl-card-title">{post.title}</h3>
                <p className="bl-card-excerpt">{post.excerpt}</p>
                <span className="bl-read-more bl-read-more-sm">Read →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bl-cta animate-fade-in">
        <h2 className="bl-cta-title">Ready to Book Your Session?</h2>
        <p className="bl-cta-sub">Professional photography across Sri Lanka — starting from Rs. 8,000.</p>
        <div className="bl-cta-btns">
          <Link href="/booking" className="bl-cta-primary">Book a Session</Link>
          <Link href="/services" className="bl-cta-secondary">View Pricing</Link>
        </div>
      </section>

      <style jsx>{`
        .bl-root { background: var(--bg); color: var(--text); min-height: 100vh; }

        /* Hero */
        .bl-hero {
          position: relative;
          padding: 130px 4% 80px;
          text-align: center;
          overflow: hidden;
        }
        .bl-hero-glow {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 50% at 50% 40%, rgba(212,175,55,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .bl-hero-content { position: relative; z-index: 2; max-width: 600px; margin: 0 auto; }
        .bl-eyebrow {
          display: inline-block;
          background: rgba(212,175,55,0.08);
          border: 1px solid rgba(212,175,55,0.2);
          color: var(--accent);
          padding: 6px 18px; border-radius: 50px;
          font-size: 0.75rem; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          margin-bottom: 20px;
        }
        .bl-hero-title {
          font-size: clamp(3rem, 8vw, 5.5rem);
          font-weight: 200; letter-spacing: 0.08em;
          text-transform: uppercase; color: #fff;
          margin: 0 0 18px; line-height: 1.1;
        }
        .bl-hero-sub {
          color: rgba(255,255,255,0.5);
          font-size: 0.97rem; line-height: 1.75; margin: 0;
        }

        /* Section Labels */
        .bl-section-label {
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          color: var(--accent); margin-bottom: 20px;
        }

        /* Featured */
        .bl-featured-wrap { padding: 60px 4% 0; max-width: 1200px; margin: 0 auto; }
        .bl-featured {
          display: grid; grid-template-columns: 1.2fr 1fr;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px; overflow: hidden;
          text-decoration: none; color: inherit;
          transition: all 0.35s ease;
        }
        .bl-featured:hover {
          border-color: rgba(212,175,55,0.3);
          transform: translateY(-4px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.35);
        }
        .bl-featured-img-wrap {
          position: relative; aspect-ratio: 4/3;
          overflow: hidden;
        }
        .bl-featured-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.2) 0%, transparent 60%);
        }
        .bl-cat-tag {
          position: absolute; top: 16px; left: 16px;
          color: #000; font-size: 0.68rem; font-weight: 800;
          letter-spacing: 1px; text-transform: uppercase;
          padding: 5px 14px; border-radius: 50px;
        }
        .bl-cat-sm { top: 12px; left: 12px; }
        .bl-featured-body {
          padding: 40px 36px;
          display: flex; flex-direction: column;
          justify-content: center; gap: 16px;
        }
        .bl-meta {
          display: flex; align-items: center; gap: 8px;
          font-size: 0.78rem; color: rgba(255,255,255,0.35);
          letter-spacing: 0.5px;
        }
        .bl-meta-sm { font-size: 0.72rem; }
        .bl-meta-dot { color: rgba(255,255,255,0.2); }
        .bl-featured-title {
          font-size: 1.6rem; font-weight: 700;
          color: #fff; line-height: 1.3; margin: 0;
          letter-spacing: 0.2px;
        }
        .bl-featured-excerpt {
          font-size: 0.92rem; color: rgba(255,255,255,0.5);
          line-height: 1.75; margin: 0;
        }
        .bl-read-more {
          font-size: 0.82rem; font-weight: 700;
          color: var(--accent); letter-spacing: 1px;
          text-transform: uppercase; margin-top: 4px;
        }
        .bl-read-more-sm { font-size: 0.78rem; }

        /* Grid */
        .bl-grid-wrap { padding: 60px 4% 80px; max-width: 1200px; margin: 0 auto; }
        .bl-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .bl-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px; overflow: hidden;
          text-decoration: none; color: inherit;
          transition: all 0.3s ease;
          display: flex; flex-direction: column;
        }
        .bl-card:hover {
          border-color: rgba(212,175,55,0.3);
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.3);
        }
        .bl-card-img-wrap {
          position: relative; aspect-ratio: 16/9;
          overflow: hidden;
        }
        .bl-card-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.4) 100%);
        }
        .bl-card-body {
          padding: 24px 22px;
          display: flex; flex-direction: column;
          gap: 10px; flex: 1;
        }
        .bl-card-title {
          font-size: 1.05rem; font-weight: 700;
          color: #fff; line-height: 1.4; margin: 0;
        }
        .bl-card-excerpt {
          font-size: 0.84rem; color: rgba(255,255,255,0.45);
          line-height: 1.65; margin: 0; flex: 1;
        }

        /* CTA */
        .bl-cta {
          text-align: center; padding: 80px 4% 100px;
          background: linear-gradient(180deg, transparent 0%, rgba(212,175,55,0.04) 50%, transparent 100%);
          border-top: 1px solid rgba(212,175,55,0.08);
        }
        .bl-cta-title {
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 700; color: #fff; margin: 0 0 14px;
        }
        .bl-cta-sub {
          color: rgba(255,255,255,0.45); font-size: 0.95rem;
          margin: 0 0 36px; line-height: 1.6;
        }
        .bl-cta-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
        .bl-cta-primary {
          background: var(--accent); color: #000;
          padding: 13px 32px; border-radius: 50px;
          font-size: 0.88rem; font-weight: 800;
          letter-spacing: 1px; text-decoration: none;
          text-transform: uppercase; transition: all 0.3s ease;
        }
        .bl-cta-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(212,175,55,0.4); }
        .bl-cta-secondary {
          background: transparent; color: #fff;
          padding: 12px 32px; border-radius: 50px;
          border: 1px solid rgba(255,255,255,0.2);
          font-size: 0.88rem; font-weight: 600;
          letter-spacing: 1px; text-decoration: none;
          text-transform: uppercase; transition: all 0.3s ease;
        }
        .bl-cta-secondary:hover { border-color: var(--accent); color: var(--accent); }

        /* Responsive */
        @media (max-width: 900px) {
          .bl-featured { grid-template-columns: 1fr; }
          .bl-featured-img-wrap { aspect-ratio: 16/9; }
          .bl-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .bl-grid { grid-template-columns: 1fr; }
          .bl-featured-body { padding: 24px 20px; }
        }
      `}</style>
    </div>
  );
}
