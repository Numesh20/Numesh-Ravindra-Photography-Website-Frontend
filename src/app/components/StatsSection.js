'use client';

const ALBUM_STATS = [
  { name: "Anu Karunathilaka", count: 26, color: "#d4af37" },
  { name: "Amandi Rathnayake", count: 22, color: "#e879f9" },
  { name: "Manavi Vihara", count: 20, color: "#22d3ee" },
  { name: "Savindi Thathsara", count: 16, color: "#f97316" },
];

const TOTAL = ALBUM_STATS.reduce((acc, a) => acc + a.count, 0);
const CIRCUMFERENCE = 2 * Math.PI * 50;

// Build donut segments
let cumOffset = 0;
const segments = ALBUM_STATS.map(album => {
  const dash = (album.count / TOTAL) * CIRCUMFERENCE;
  const seg = { ...album, dash, offset: -cumOffset };
  cumOffset += dash;
  return seg;
});

const maxCount = Math.max(...ALBUM_STATS.map(a => a.count));

// Activity line chart — cumulative photos Jan→Dec (estimated)
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const ACTIVITY = [2, 6, 10, 16, 22, 28, 36, 44, 54, 64, 74, 84];
const W = 800, H = 100;

const chartPoints = ACTIVITY.map((val, i) => {
  const x = (i / (ACTIVITY.length - 1)) * W;
  const y = H - (val / ACTIVITY[ACTIVITY.length - 1]) * H * 0.85;
  return { x, y };
});
const polylineStr = chartPoints.map(p => `${p.x},${p.y}`).join(' ');
const polygonStr = `0,${H} ${polylineStr} ${W},${H}`;

export default function StatsSection() {
  return (
    <section className="sd-root animate-fade-in">
      {/* Header */}
      <div className="sd-header">
        <span style={{ fontSize: '1.4rem' }}></span>
        <h2 className="sd-title">Photography Stats &amp; Analytics</h2>
      </div>

      {/* Top Row */}
      <div className="sd-top-row">

        {/* Card 1 — Info list */}
        <div className="sd-card sd-info-card">
          <p className="sd-card-label" style={{ color: '#e879f9' }}>Numesh Ravindra's Photography Stats</p>
          <div className="sd-stat-list">
            {[
              ['📷', 'Total Photos', TOTAL],
              ['📁', 'Total Albums', 4],
              ['⭐', 'Years Active', '3+'],
              ['🗓️', 'Started Since', 2023],
              ['📍', 'Location', 'Sri Lanka'],
            ].map(([icon, label, val]) => (
              <div className="sd-stat-row" key={label}>
                <span className="sd-stat-icon">{icon}</span>
                <span className="sd-stat-label">{label}:</span>
                <span className="sd-stat-val">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2 — Contribution strip */}
        <div className="sd-card sd-contrib-card">
          <div className="sd-contrib-item">
            <span className="sd-contrib-num" style={{ color: '#e879f9' }}>{TOTAL}</span>
            <span className="sd-contrib-lbl">Total Photos</span>
            <span className="sd-contrib-sub">2023 – Present</span>
          </div>
          <div className="sd-contrib-divider" />
          <div className="sd-contrib-item">
            <svg viewBox="0 0 44 44" width="72" height="72">
              <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
              <circle cx="22" cy="22" r="18" fill="none" stroke="#d4af37" strokeWidth="4"
                strokeDasharray="100 113" strokeDashoffset="0"
                strokeLinecap="round" transform="rotate(-90 22 22)"
              />
              <text x="22" y="26" textAnchor="middle" fill="#d4af37" fontSize="10" fontWeight="bold">A+</text>
            </svg>
            <span className="sd-contrib-lbl" style={{ color: '#d4af37' }}>Photo Grade</span>
            <span className="sd-contrib-sub">Professional</span>
          </div>
          <div className="sd-contrib-divider" />
          <div className="sd-contrib-item">
            <span className="sd-contrib-num" style={{ color: '#d4af37' }}>4</span>
            <span className="sd-contrib-lbl">Albums</span>
            <span className="sd-contrib-sub">Collections</span>
          </div>
        </div>
      </div>

      {/* Middle Row */}
      <div className="sd-mid-row">

        {/* Card 3 — Donut Chart */}
        <div className="sd-card">
          <p className="sd-card-label" style={{ color: '#e879f9' }}>Photos by Album</p>
          <div className="sd-donut-wrap">
            <svg width="130" height="130" viewBox="0 0 130 130">
              {segments.map((seg, i) => (
                <circle key={i}
                  cx="65" cy="65" r="50"
                  fill="none"
                  stroke={seg.color}
                  strokeWidth="18"
                  strokeDasharray={`${seg.dash} ${CIRCUMFERENCE}`}
                  strokeDashoffset={seg.offset}
                  transform="rotate(-90 65 65)"
                />
              ))}
              <text x="65" y="62" textAnchor="middle" fill="white" fontSize="16" fontWeight="800">{TOTAL}</text>
              <text x="65" y="78" textAnchor="middle" fill="#a0a0ab" fontSize="9">total photos</text>
            </svg>
            <div className="sd-legend">
              {ALBUM_STATS.map((a, i) => (
                <div className="sd-legend-item" key={i}>
                  <span className="sd-legend-dot" style={{ background: a.color }} />
                  <span>{a.name.split(' ')[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 4 — Bar Chart */}
        <div className="sd-card sd-bar-card">
          <p className="sd-card-label" style={{ color: '#e879f9' }}>Photos per Album</p>
          <div className="sd-bars">
            {ALBUM_STATS.map((a, i) => (
              <div className="sd-bar-row" key={i}>
                <span className="sd-bar-name">{a.name.split(' ')[0]}</span>
                <div className="sd-bar-track">
                  <div className="sd-bar-fill" style={{
                    width: `${(a.count / maxCount) * 100}%`,
                    background: a.color
                  }} />
                </div>
                <span className="sd-bar-count">{a.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom — Line Chart */}
      <div className="sd-card sd-graph-card">
        <p className="sd-card-label">Numesh Ravindra's Photo Journey (2023 – 2026)</p>
        <svg viewBox={`0 0 ${W} ${H + 24}`} width="100%" height="140" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map(i => (
            <line key={i} x1="0" y1={H * i / 4} x2={W} y2={H * i / 4}
              stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          ))}
          {/* Area */}
          <polygon points={polygonStr} fill="url(#lineGrad)" />
          {/* Line */}
          <polyline points={polylineStr} fill="none" stroke="#22d3ee" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round" />
          {/* Dots */}
          {chartPoints.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="4" fill="#22d3ee" stroke="#08080a" strokeWidth="2" />
          ))}
          {/* Month labels */}
          {MONTHS.map((m, i) => (
            <text key={i}
              x={(i / (MONTHS.length - 1)) * W} y={H + 20}
              textAnchor="middle" fill="#a0a0ab" fontSize="11"
            >{m}</text>
          ))}
        </svg>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>2023 · Started Photography</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: '600' }}>2026 · 84+ Photos</span>
        </div>
      </div>
    </section>
  );
}
