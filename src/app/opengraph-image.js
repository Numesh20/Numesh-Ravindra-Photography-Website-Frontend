import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Numesh Ravindra Photography | Wedding & Portrait Photographer Sri Lanka';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0a0c 0%, #1a1408 50%, #0a0a0c 100%)',
          position: 'relative',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Gold decorative top border */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, transparent, #d4af37, #f0d060, #d4af37, transparent)',
          }}
        />

        {/* Gold decorative bottom border */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, transparent, #d4af37, #f0d060, #d4af37, transparent)',
          }}
        />

        {/* Corner decorations */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '40px',
            width: '60px',
            height: '60px',
            borderTop: '2px solid #d4af37',
            borderLeft: '2px solid #d4af37',
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '40px',
            width: '60px',
            height: '60px',
            borderTop: '2px solid #d4af37',
            borderRight: '2px solid #d4af37',
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '40px',
            width: '60px',
            height: '60px',
            borderBottom: '2px solid #d4af37',
            borderLeft: '2px solid #d4af37',
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '40px',
            width: '60px',
            height: '60px',
            borderBottom: '2px solid #d4af37',
            borderRight: '2px solid #d4af37',
            opacity: 0.6,
          }}
        />

        {/* Camera icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '28px',
            opacity: 0.5,
          }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 300,
            color: '#ffffff',
            letterSpacing: '0.04em',
            textAlign: 'center',
            lineHeight: 1.1,
            marginBottom: '8px',
          }}
        >
          Numesh Ravindra
        </div>

        {/* PHOTOGRAPHY subtitle */}
        <div
          style={{
            fontSize: '20px',
            fontWeight: 400,
            color: '#d4af37',
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: '36px',
          }}
        >
          Photography
        </div>

        {/* Gold divider */}
        <div
          style={{
            width: '120px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
            marginBottom: '36px',
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: '22px',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.65)',
            letterSpacing: '0.08em',
            textAlign: 'center',
            marginBottom: '16px',
          }}
        >
          Wedding · Portrait · Wildlife · Events
        </div>

        {/* Location */}
        <div
          style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
        >
          Mawanella, Sri Lanka · Available Island-Wide
        </div>
      </div>
    ),
    { ...size }
  );
}

