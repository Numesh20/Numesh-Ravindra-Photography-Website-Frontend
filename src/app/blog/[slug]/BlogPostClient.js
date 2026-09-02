"use client";

import Image from "next/image";
import Link from "next/link";
import { POSTS } from "../posts";

const CATEGORY_COLORS = {
  Wedding: "#d4af37",
  Portrait: "#a78bfa",
  Wildlife: "#34d399",
  Events: "#60a5fa",
  "Pre-Wedding": "#f43f5e",
};

function renderContent(content) {
  const lines = content.split("\n");
  const elements = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    if (line.startsWith("## ")) {
      elements.push(<h2 key={key++} className="bp-h2">{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={key++} className="bp-h3">{line.slice(4)}</h3>);
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(<p key={key++} className="bp-bold">{line.slice(2, -2)}</p>);
    } else if (line.startsWith("- ")) {
      const items = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(<li key={items.length}>{lines[i].trim().slice(2)}</li>);
        i++;
      }
      i--;
      elements.push(<ul key={key++} className="bp-ul">{items}</ul>);
    } else {
      // Handle inline bold
      const parts = line.split(/\*\*(.*?)\*\*/g);
      if (parts.length > 1) {
        elements.push(
          <p key={key++} className="bp-p">
            {parts.map((part, j) =>
              j % 2 === 1 ? <strong key={j}>{part}</strong> : part
            )}
          </p>
        );
      } else {
        // Handle inline links like [text](/path)
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        if (linkRegex.test(line)) {
          const linkedParts = [];
          let lastIndex = 0;
          let match;
          const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
          while ((match = regex.exec(line)) !== null) {
            if (match.index > lastIndex) {
              linkedParts.push(line.slice(lastIndex, match.index));
            }
            linkedParts.push(
              <Link key={match.index} href={match[2]} className="bp-link">
                {match[1]}
              </Link>
            );
            lastIndex = match.index + match[0].length;
          }
          if (lastIndex < line.length) linkedParts.push(line.slice(lastIndex));
          elements.push(<p key={key++} className="bp-p">{linkedParts}</p>);
        } else {
          elements.push(<p key={key++} className="bp-p">{line}</p>);
        }
      }
    }
  }

  return elements;
}

export default function BlogPostClient({ slug }) {
  const post = POSTS.find((p) => p.slug === slug);
  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  if (!post) {
    return (
      <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#fff", marginBottom: "16px" }}>Article not found</h1>
          <Link href="/blog" style={{ color: "var(--accent)" }}>← Back to Blog</Link>
        </div>
      </main>
    );
  }

  const catColor = CATEGORY_COLORS[post.category] || "#d4af37";

  return (
    <div className="bp-root">

      {/* ── Hero ── */}
      <section className="bp-hero">
        <div className="bp-hero-img-wrap">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
            quality={85}
            priority
          />
          <div className="bp-hero-overlay" />
        </div>
        <div className="bp-hero-content animate-fade-in">
          <Link href="/blog" className="bp-back">← All Articles</Link>
          <span className="bp-cat-tag" style={{ background: catColor }}>{post.category}</span>
          <h1 className="bp-hero-title">{post.title}</h1>
          <div className="bp-hero-meta">
            <span>{post.date}</span>
            <span className="bp-meta-dot">·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* ── Article Body ── */}
      <div className="bp-body-wrap">
        <article className="bp-article animate-fade-in">
          <p className="bp-lead">{post.excerpt}</p>
          <div className="bp-content">
            {renderContent(post.content)}
          </div>
        </article>

        {/* ── Sidebar ── */}
        <aside className="bp-sidebar animate-fade-in">
          <div className="bp-sidebar-card">
            <p className="bp-sidebar-label">Book a Session</p>
            <p className="bp-sidebar-desc">
              Ready to create beautiful photos? I'm available island-wide across Sri Lanka.
            </p>
            <Link href="/booking" className="bp-sidebar-btn">Book Now</Link>
            <Link href="/services" className="bp-sidebar-link">View Pricing →</Link>
          </div>

          <div className="bp-sidebar-card bp-sidebar-contact">
            <p className="bp-sidebar-label">Quick Contact</p>
            <a href="https://wa.me/94704574568" target="_blank" rel="noopener noreferrer" className="bp-wa-btn">
              WhatsApp Me
            </a>
            <a href="mailto:numesh.ravindra.photography@gmail.com" className="bp-email-link">
              numesh.ravindra.photography@gmail.com
            </a>
          </div>
        </aside>
      </div>

      {/* ── Related Posts ── */}
      {related.length > 0 && (
        <section className="bp-related">
          <p className="bp-related-label">More Articles</p>
          <div className="bp-related-grid">
            {related.map((rp) => (
              <Link key={rp.slug} href={`/blog/${rp.slug}`} className="bp-related-card">
                <div className="bp-related-img">
                  <Image
                    src={rp.cover}
                    alt={rp.title}
                    fill
                    style={{ objectFit: "cover" }}
                    quality={70}
                  />
                </div>
                <div className="bp-related-body">
                  <span className="bp-related-cat" style={{ color: CATEGORY_COLORS[rp.category] || "#d4af37" }}>
                    {rp.category}
                  </span>
                  <h3 className="bp-related-title">{rp.title}</h3>
                  <p className="bp-related-meta">{rp.date} · {rp.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <style jsx>{`
        .bp-root { background: var(--bg); color: var(--text); min-height: 100vh; }

        /* Hero */
        .bp-hero {
          position: relative;
          height: 55vh; min-height: 400px;
          display: flex; align-items: flex-end;
          padding: 0 4% 56px;
        }
        .bp-hero-img-wrap { position: absolute; inset: 0; }
        .bp-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%);
        }
        .bp-hero-content {
          position: relative; z-index: 2;
          max-width: 820px; display: flex;
          flex-direction: column; gap: 14px;
        }
        .bp-back {
          font-size: 0.78rem; font-weight: 700;
          color: rgba(255,255,255,0.6); letter-spacing: 1px;
          text-transform: uppercase; text-decoration: none;
          transition: color 0.2s ease;
        }
        .bp-back:hover { color: var(--accent); }
        .bp-cat-tag {
          display: inline-block;
          color: #000; font-size: 0.68rem; font-weight: 800;
          letter-spacing: 1px; text-transform: uppercase;
          padding: 5px 14px; border-radius: 50px;
          align-self: flex-start;
        }
        .bp-hero-title {
          font-size: clamp(1.6rem, 4vw, 2.8rem);
          font-weight: 700; color: #fff;
          line-height: 1.25; margin: 0;
          letter-spacing: 0.2px;
        }
        .bp-hero-meta {
          display: flex; align-items: center; gap: 8px;
          font-size: 0.82rem; color: rgba(255,255,255,0.5);
        }
        .bp-meta-dot { color: rgba(255,255,255,0.25); }

        /* Body */
        .bp-body-wrap {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 48px;
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 4% 80px;
          align-items: start;
        }

        /* Article */
        .bp-article {}
        .bp-lead {
          font-size: 1.12rem;
          color: rgba(255,255,255,0.65);
          line-height: 1.85;
          margin: 0 0 36px;
          padding-bottom: 36px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          font-style: italic;
        }
        .bp-content { display: flex; flex-direction: column; gap: 0; }
        :global(.bp-h2) {
          font-size: 1.5rem; font-weight: 700;
          color: #fff; margin: 40px 0 16px;
          letter-spacing: 0.2px; line-height: 1.3;
        }
        :global(.bp-h3) {
          font-size: 1.15rem; font-weight: 700;
          color: var(--accent); margin: 28px 0 12px;
          letter-spacing: 0.5px;
        }
        :global(.bp-p) {
          font-size: 0.97rem; color: rgba(255,255,255,0.65);
          line-height: 1.85; margin: 0 0 16px;
        }
        :global(.bp-bold) {
          font-size: 0.97rem; font-weight: 700;
          color: rgba(255,255,255,0.8); margin: 0 0 10px;
        }
        :global(.bp-ul) {
          list-style: none; padding: 0;
          margin: 0 0 20px; display: flex;
          flex-direction: column; gap: 10px;
        }
        :global(.bp-ul li) {
          font-size: 0.95rem; color: rgba(255,255,255,0.6);
          line-height: 1.65; padding-left: 20px;
          position: relative;
        }
        :global(.bp-ul li::before) {
          content: '—';
          position: absolute; left: 0;
          color: var(--accent); font-weight: 700;
        }
        :global(.bp-link) {
          color: var(--accent); text-decoration: underline;
          text-decoration-color: rgba(212,175,55,0.4);
          text-underline-offset: 3px;
        }
        :global(.bp-link:hover) { text-decoration-color: var(--accent); }

        /* Sidebar */
        .bp-sidebar { display: flex; flex-direction: column; gap: 20px; position: sticky; top: 100px; }
        .bp-sidebar-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px; padding: 28px 24px;
          display: flex; flex-direction: column; gap: 14px;
        }
        .bp-sidebar-contact { border-color: rgba(37,211,102,0.15); background: rgba(37,211,102,0.03); }
        .bp-sidebar-label {
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          color: var(--accent); margin: 0;
        }
        .bp-sidebar-desc {
          font-size: 0.85rem; color: rgba(255,255,255,0.45);
          line-height: 1.65; margin: 0;
        }
        .bp-sidebar-btn {
          background: var(--accent); color: #000;
          padding: 11px 20px; border-radius: 50px;
          font-size: 0.82rem; font-weight: 800;
          letter-spacing: 1px; text-transform: uppercase;
          text-decoration: none; text-align: center;
          transition: all 0.2s ease;
        }
        .bp-sidebar-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(212,175,55,0.35); }
        .bp-sidebar-link {
          font-size: 0.8rem; color: var(--accent);
          text-decoration: none; font-weight: 600;
          letter-spacing: 0.5px; text-align: center;
        }
        .bp-wa-btn {
          background: #25D366; color: #000;
          padding: 11px 20px; border-radius: 50px;
          font-size: 0.82rem; font-weight: 800;
          letter-spacing: 1px; text-transform: uppercase;
          text-decoration: none; text-align: center;
          transition: all 0.2s ease;
        }
        .bp-wa-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(37,211,102,0.35); }
        .bp-email-link {
          font-size: 0.75rem; color: rgba(255,255,255,0.35);
          text-decoration: none; word-break: break-all;
          text-align: center; line-height: 1.5;
        }

        /* Related */
        .bp-related {
          padding: 0 4% 80px;
          max-width: 1100px; margin: 0 auto;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 56px;
        }
        .bp-related-label {
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          color: var(--accent); margin-bottom: 24px;
        }
        .bp-related-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .bp-related-card {
          display: flex; gap: 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px; overflow: hidden;
          text-decoration: none; color: inherit;
          transition: all 0.3s ease;
          padding: 16px;
        }
        .bp-related-card:hover { border-color: rgba(212,175,55,0.25); transform: translateY(-3px); }
        .bp-related-img {
          position: relative; width: 100px; height: 72px;
          border-radius: 10px; overflow: hidden; flex-shrink: 0;
        }
        .bp-related-body { display: flex; flex-direction: column; gap: 6px; justify-content: center; }
        .bp-related-cat { font-size: 0.7rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
        .bp-related-title { font-size: 0.88rem; font-weight: 700; color: #fff; line-height: 1.4; margin: 0; }
        .bp-related-meta { font-size: 0.72rem; color: rgba(255,255,255,0.3); }

        /* Responsive */
        @media (max-width: 900px) {
          .bp-body-wrap { grid-template-columns: 1fr; }
          .bp-sidebar { position: static; }
          .bp-related-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 580px) {
          .bp-hero { height: 50vh; padding: 0 4% 36px; }
          .bp-hero-title { font-size: 1.5rem; }
        }
      `}</style>
    </div>
  );
}
