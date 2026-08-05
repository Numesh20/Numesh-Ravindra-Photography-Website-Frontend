'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // Only show once per browser session
    const shown = sessionStorage.getItem('splash_shown');
    if (shown) return;

    setVisible(true);

    // Start closing animation after 2.8s
    const closeTimer = setTimeout(() => setClosing(true), 2800);

    // Remove from DOM after exit animation
    const removeTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('splash_shown', '1');
    }, 3700);

    return () => {
      clearTimeout(closeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`sp-root ${closing ? 'sp-closing' : ''}`} aria-hidden="true">

      {/* Film grain */}
      <div className="sp-grain" />

      {/* Gold light sweep */}
      <div className="sp-sweep" />

      {/* Center content */}
      <div className="sp-center">
        <div className="sp-logo-wrap">
          <Image
            src="/logo.png"
            alt="Numesh Ravindra Photography"
            width={300}
            height={75}
            style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
            priority
          />
        </div>

        <div className="sp-line" />

        <p className="sp-tagline">Capturing moments that last forever</p>

        <p className="sp-location">✦ &nbsp;Mawanella, Sri Lanka&nbsp; ✦</p>
      </div>

      {/* Corner accents */}
      <div className="sp-corner sp-tl" />
      <div className="sp-corner sp-tr" />
      <div className="sp-corner sp-bl" />
      <div className="sp-corner sp-br" />

      <style jsx global>{`
        body.splash-open {
          overflow: hidden;
        }
      `}</style>

      <style jsx>{`
        .sp-root {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: #06060a;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .sp-closing {
          animation: sp-exit 0.85s cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }
        @keyframes sp-exit {
          0%   { transform: translateY(0);     opacity: 1; }
          100% { transform: translateY(-105%); opacity: 0; }
        }

        /* Film grain */
        .sp-grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E");
          animation: sp-grain 0.4s steps(2) infinite;
          pointer-events: none;
        }
        @keyframes sp-grain {
          0%   { transform: translate(0, 0); }
          25%  { transform: translate(-4%, 3%); }
          50%  { transform: translate(3%, -2%); }
          75%  { transform: translate(-2%, 4%); }
          100% { transform: translate(2%, -3%); }
        }

        /* Gold sweep */
        .sp-sweep {
          position: absolute;
          top: 0; bottom: 0;
          left: -100%;
          width: 60%;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(212,175,55,0.04) 30%,
            rgba(212,175,55,0.12) 50%,
            rgba(212,175,55,0.04) 70%,
            transparent 100%
          );
          animation: sp-sweep 1.4s ease 0.2s forwards;
          pointer-events: none;
        }
        @keyframes sp-sweep {
          0%   { left: -60%; }
          100% { left: 140%; }
        }

        /* Center content */
        .sp-center {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
          text-align: center;
          padding: 0 40px;
        }

        /* Logo */
        .sp-logo-wrap {
          opacity: 0;
          transform: translateY(22px);
          animation: sp-rise 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
        }

        /* Gold line */
        .sp-line {
          height: 1px;
          width: 0;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          animation: sp-line-grow 0.9s ease 1s forwards;
        }
        @keyframes sp-line-grow {
          to { width: 220px; }
        }

        /* Tagline */
        .sp-tagline {
          font-size: 0.73rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          font-weight: 400;
          opacity: 0;
          animation: sp-rise 0.65s ease 1.2s forwards;
        }

        /* Location */
        .sp-location {
          font-size: 0.68rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(212,175,55,0.65);
          font-weight: 600;
          opacity: 0;
          animation: sp-rise 0.6s ease 1.55s forwards;
        }

        @keyframes sp-rise {
          to { opacity: 1; transform: translateY(0); }
        }

        /* Corner accents */
        .sp-corner {
          position: absolute;
          width: 28px;
          height: 28px;
          border-color: rgba(212,175,55,0.3);
          border-style: solid;
          opacity: 0;
          animation: sp-rise 0.5s ease 0.6s forwards;
        }
        .sp-tl { top: 36px;    left: 36px;    border-width: 1px 0 0 1px; }
        .sp-tr { top: 36px;    right: 36px;   border-width: 1px 1px 0 0; }
        .sp-bl { bottom: 36px; left: 36px;    border-width: 0 0 1px 1px; }
        .sp-br { bottom: 36px; right: 36px;   border-width: 0 1px 1px 0; }

        @media (max-width: 480px) {
          .sp-tl { top: 20px; left: 20px; }
          .sp-tr { top: 20px; right: 20px; }
          .sp-bl { bottom: 20px; left: 20px; }
          .sp-br { bottom: 20px; right: 20px; }
          .sp-tagline { letter-spacing: 2px; font-size: 0.65rem; }
        }
      `}</style>
    </div>
  );
}
