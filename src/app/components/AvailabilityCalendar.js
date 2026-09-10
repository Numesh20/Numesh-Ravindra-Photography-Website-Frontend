'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BOOKED_DATES, DATE_NOTES } from '../booking/bookedDates';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function toKey(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

export default function AvailabilityCalendar({ compact = false }) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [hoveredDate, setHoveredDate] = useState(null);
  const router = useRouter();

  const bookedSet = new Set(BOOKED_DATES);

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const todayKey = toKey(today.getFullYear(), today.getMonth(), today.getDate());

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  // Prevent going back before current month
  const canGoPrev = viewYear > today.getFullYear() || viewMonth > today.getMonth();

  const handleDateClick = (day) => {
    const key = toKey(viewYear, viewMonth, day);
    const isPast = key < todayKey;
    const isBooked = bookedSet.has(key);
    if (isPast || isBooked) return;
    router.push(`/booking?date=${key}`);
  };

  // Build calendar grid cells
  const cells = [];
  // Leading empty cells
  for (let i = 0; i < firstDay; i++) cells.push(null);
  // Day cells
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  // Trailing empty cells to complete last row
  while (cells.length % 7 !== 0) cells.push(null);

  const rows = [];
  for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7));

  return (
    <section className={`ac-root ${compact ? 'ac-compact' : ''}`}>
      {!compact && (
        <div className="ac-header">
          <span className="ac-tag">Real-Time Availability</span>
          <h2 className="section-title">Check Available Dates</h2>
          <p className="section-desc">
            Click any available date to go straight to the booking form with the date pre-filled.
            Booked dates are shown in red.
          </p>
        </div>
      )}

      <div className="ac-card">
        {/* Month navigation */}
        <div className="ac-nav">
          <button
            className="ac-nav-btn"
            onClick={prevMonth}
            disabled={!canGoPrev}
            aria-label="Previous month"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <div className="ac-month-label">
            <span className="ac-month-name">{MONTHS[viewMonth]}</span>
            <span className="ac-year">{viewYear}</span>
          </div>
          <button className="ac-nav-btn" onClick={nextMonth} aria-label="Next month">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

        {/* Day headers */}
        <div className="ac-days-header">
          {DAYS.map(d => <span key={d} className="ac-day-name">{d}</span>)}
        </div>

        {/* Calendar grid */}
        <div className="ac-grid">
          {rows.map((row, ri) =>
            row.map((day, ci) => {
              if (!day) return <div key={`e-${ri}-${ci}`} className="ac-cell ac-empty" />;
              const key = toKey(viewYear, viewMonth, day);
              const isPast = key < todayKey;
              const isToday = key === todayKey;
              const isBooked = bookedSet.has(key);
              const isAvailable = !isPast && !isBooked;
              const note = DATE_NOTES[key];
              const isHovered = hoveredDate === key;

              return (
                <div
                  key={key}
                  className={[
                    'ac-cell',
                    isPast ? 'ac-past' : '',
                    isToday ? 'ac-today' : '',
                    isBooked ? 'ac-booked' : '',
                    isAvailable ? 'ac-available' : '',
                    isHovered && isAvailable ? 'ac-hovered' : '',
                  ].join(' ')}
                  onClick={() => handleDateClick(day)}
                  onMouseEnter={() => setHoveredDate(key)}
                  onMouseLeave={() => setHoveredDate(null)}
                  title={isBooked ? (note || 'Booked') : isAvailable ? 'Click to book this date' : ''}
                >
                  <span className="ac-day-num">{day}</span>
                  {isBooked && <span className="ac-booked-dot" />}
                  {isAvailable && <span className="ac-avail-dot" />}
                  {isToday && <span className="ac-today-label">Today</span>}
                </div>
              );
            })
          )}
        </div>

        {/* Legend */}
        <div className="ac-legend">
          <div className="ac-legend-item">
            <span className="ac-legend-dot ac-legend-avail" />
            <span>Available — click to book</span>
          </div>
          <div className="ac-legend-item">
            <span className="ac-legend-dot ac-legend-booked" />
            <span>Booked</span>
          </div>
          <div className="ac-legend-item">
            <span className="ac-legend-dot ac-legend-past" />
            <span>Past</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ac-root { padding: ${compact ? '0' : '80px 4%'}; }
        .ac-compact .ac-card { margin: 0; }

        .ac-header { text-align: center; margin-bottom: 40px; }
        .ac-tag {
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

        /* Card */
        .ac-card {
          max-width: 640px;
          margin: 0 auto;
          background: rgba(18,18,22,0.9);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          padding: 28px;
          backdrop-filter: blur(12px);
        }

        /* Nav */
        .ac-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }
        .ac-nav-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .ac-nav-btn:hover:not(:disabled) {
          background: rgba(212,175,55,0.12);
          border-color: var(--accent);
          color: var(--accent);
        }
        .ac-nav-btn:disabled { opacity: 0.25; cursor: not-allowed; }
        .ac-month-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }
        .ac-month-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-main);
          letter-spacing: 0.5px;
        }
        .ac-year {
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        /* Days header */
        .ac-days-header {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
          margin-bottom: 8px;
        }
        .ac-day-name {
          text-align: center;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          padding: 4px 0;
        }

        /* Grid */
        .ac-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
        }
        .ac-cell {
          position: relative;
          aspect-ratio: 1;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: default;
          transition: all 0.18s ease;
          border: 1px solid transparent;
        }
        .ac-empty { background: transparent; border: none; }

        /* Past */
        .ac-past { opacity: 0.22; }
        .ac-past .ac-day-num { color: var(--text-muted); }

        /* Today */
        .ac-today {
          border-color: var(--accent);
          background: rgba(212,175,55,0.08);
        }
        .ac-today-label {
          position: absolute;
          bottom: 3px;
          font-size: 0.48rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: var(--accent);
          text-transform: uppercase;
        }

        /* Booked */
        .ac-booked {
          background: rgba(239,68,68,0.08);
          border-color: rgba(239,68,68,0.2);
          cursor: not-allowed;
        }
        .ac-booked .ac-day-num { color: rgba(239,68,68,0.7); }
        .ac-booked-dot {
          position: absolute;
          bottom: 5px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(239,68,68,0.8);
        }

        /* Available */
        .ac-available {
          cursor: pointer;
          background: rgba(255,255,255,0.02);
        }
        .ac-available .ac-day-num { color: var(--text-main); }
        .ac-avail-dot {
          position: absolute;
          bottom: 5px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(34,197,94,0.6);
        }
        .ac-hovered {
          background: rgba(212,175,55,0.12) !important;
          border-color: rgba(212,175,55,0.4) !important;
          transform: scale(1.08);
        }
        .ac-hovered .ac-day-num { color: var(--accent) !important; }

        /* Day number */
        .ac-day-num {
          font-size: 0.88rem;
          font-weight: 600;
          color: rgba(255,255,255,0.6);
          line-height: 1;
        }

        /* Legend */
        .ac-legend {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-top: 22px;
          flex-wrap: wrap;
        }
        .ac-legend-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.45);
        }
        .ac-legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .ac-legend-avail { background: rgba(34,197,94,0.7); }
        .ac-legend-booked { background: rgba(239,68,68,0.7); }
        .ac-legend-past { background: rgba(255,255,255,0.15); }

        @media (max-width: 480px) {
          .ac-card { padding: 18px 14px; }
          .ac-day-num { font-size: 0.78rem; }
          .ac-legend { gap: 12px; }
        }
      `}</style>
    </section>
  );
}
