'use client';

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

const PAIRS = [
  {
    label: "Portrait Session",
    before: "/gallery/portraits/Savindi%20Edit/IMG_5277%20-%20Copy.jpg",
    after: "/gallery/portraits/Savindi%20Edit/IMG_5089.jpg",
    beforeAlt: "Raw unedited portrait photo",
    afterAlt: "Professionally edited portrait by Numesh Ravindra",
  },
  {
    label: "Birthday Shoot",
    before: "/gallery/portraits/Sathya%20Birthday%20shoot/1%20(1).jpg",
    after: "/gallery/portraits/Anu%20Karunathilaka/IMG_1.jpg",
    beforeAlt: "Raw unedited event photo",
    afterAlt: "Colour graded edited photo by Numesh Ravindra",
  },
  {
    label: "Outdoor Portrait",
    before: "/gallery/portraits/amandi%20Edit/10.jpg",
    after: "/gallery/portraits/Manavi%20photo%20shoot/Cover.jpg",
    beforeAlt: "Raw outdoor photo",
    afterAlt: "Final edited outdoor portrait by Numesh Ravindra",
  },
];

function Slider({ pair }) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef(null);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = (e) => { e.preventDefault(); setDragging(true); };
  const onTouchStart = () => setDragging(true);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      updatePosition(clientX);
    };
    const onUp = () => setDragging(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
  }, [dragging, updatePosition]);

  return (
    <div
      ref={containerRef}
      className="bas-slider"
      onMouseDown={(e) => { updatePosition(e.clientX); onMouseDown(e); }}
      onTouchStart={(e) => { updatePosition(e.touches[0].clientX); onTouchStart(); }}
      style={{ cursor: dragging ? 'grabbing' : 'ew-resize' }}
    >
      {/* AFTER (full base layer) */}
      <div className="bas-after-wrap">
        <Image src={pair.after} alt={pair.afterAlt} fill style={{ objectFit: 'cover' }} quality={85} />
        <div className="bas-after-label">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
            <circle cx="12" cy="13" r="4"/>
          </svg>
          EDITED
        </div>
      </div>

      {/* BEFORE (clipped left layer) */}
      <div className="bas-before-wrap" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image src={pair.before} alt={pair.beforeAlt} fill style={{ objectFit: 'cover' }} quality={85} />
        <div className="bas-before-label">RAW</div>
      </div>

      {/* Divider line */}
      <div className="bas-divider" style={{ left: `${position}%` }}>
        <div className="bas-divider-line" />
        <div className="bas-handle">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfterSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bas-root animate-fade-in">
      {/* Header */}
      <div className="bas-header">
        <span className="bas-tag">The Editing Difference</span>
        <h2 className="section-title">Raw vs. Edited</h2>
        <p className="section-desc">
          Drag the slider to see the transformation — from a raw camera capture to a fully colour-graded, professional image.
        </p>
      </div>

      {/* Tab selector */}
      <div className="bas-tabs">
        {PAIRS.map((p, i) => (
          <button
            key={i}
            className={`bas-tab ${i === active ? 'bas-tab-active' : ''}`}
            onClick={() => setActive(i)}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div className="bas-slider-wrap">
        <Slider key={active} pair={PAIRS[active]} />
        <p className="bas-hint">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 9l-3 3 3 3M19 9l3 3-3 3M15 6l-6 12"/>
          </svg>
          Drag left or right to compare
        </p>
      </div>

      <style jsx>{`
        .bas-root {
          padding: 80px 4%;
          text-align: center;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .bas-header { margin-bottom: 36px; }
        .bas-tag {
          display: inline-block;
          background: rgba(212,175,55,0.1);
          border: 1px solid rgba(212,175,55,0.25);
          color: var(--accent);
          padding: 6px 18px;
          border-radius: 50px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        /* Tabs */
        .bas-tabs {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .bas-tab {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.5);
          padding: 8px 22px;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .bas-tab:hover { border-color: rgba(212,175,55,0.3); color: rgba(255,255,255,0.8); }
        .bas-tab-active {
          background: rgba(212,175,55,0.12) !important;
          border-color: var(--accent) !important;
          color: var(--accent) !important;
        }

        /* Slider */
        .bas-slider-wrap {
          max-width: 900px;
          margin: 0 auto;
        }
        .bas-slider {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 2;
          border-radius: 20px;
          overflow: hidden;
          user-select: none;
          touch-action: pan-y;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.07);
        }

        /* After layer */
        .bas-after-wrap {
          position: absolute;
          inset: 0;
        }
        .bas-after-label {
          position: absolute;
          bottom: 16px;
          right: 16px;
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(212,175,55,0.9);
          color: #000;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 2px;
          padding: 5px 12px;
          border-radius: 50px;
          text-transform: uppercase;
        }

        /* Before layer */
        .bas-before-wrap {
          position: absolute;
          inset: 0;
          transition: clip-path 0.0s;
        }
        .bas-before-label {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(0,0,0,0.65);
          color: rgba(255,255,255,0.8);
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 2px;
          padding: 5px 12px;
          border-radius: 50px;
          text-transform: uppercase;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.15);
        }

        /* Divider */
        .bas-divider {
          position: absolute;
          top: 0;
          bottom: 0;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          pointer-events: none;
          z-index: 10;
        }
        .bas-divider-line {
          width: 2px;
          flex: 1;
          background: linear-gradient(to bottom, transparent 0%, #fff 20%, #fff 80%, transparent 100%);
          opacity: 0.9;
        }
        .bas-handle {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
          color: #000;
          gap: 0;
        }

        /* Hint */
        .bas-hint {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 14px;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.5px;
        }

        @media (max-width: 640px) {
          .bas-root { padding: 60px 4%; }
          .bas-slider { aspect-ratio: 4/3; border-radius: 14px; }
        }
      `}</style>
    </section>
  );
}
