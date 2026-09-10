'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const SERVICES = [
  {
    id: 'wedding-basic',
    category: 'Wedding',
    name: 'Wedding — Basic',
    basePrice: 100000,
    description: 'Half day coverage (5 hrs) · 150+ edited photos',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    id: 'wedding-standard',
    category: 'Wedding',
    name: 'Wedding — Standard',
    basePrice: 125000,
    description: 'Full day coverage (10 hrs) · 300+ edited photos',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    id: 'wedding-premium',
    category: 'Wedding',
    name: 'Wedding — Premium',
    basePrice: 150000,
    description: 'Full day coverage (12 hrs) · 500+ photos · Photobook',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    id: 'portrait',
    category: 'Portrait',
    name: 'Portrait Session',
    basePrice: 8000,
    description: '2 hrs · 25 retouched photos · Outdoor or studio',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    id: 'event',
    category: 'Event',
    name: 'Event Coverage',
    basePrice: 25000,
    description: 'Up to 4 hrs · Candid & formal shots · Online gallery',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    id: 'outdoor',
    category: 'Outdoor',
    name: 'Outdoor / Lifestyle',
    basePrice: 12000,
    description: '3 hrs · 50+ lifestyle photos · Multiple locations',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    id: 'corporate',
    category: 'Corporate',
    name: 'Corporate / Product',
    basePrice: 20000,
    description: '4 hrs · 40+ photos · Commercial usage rights',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
];

const LOCATION_ADDONS = [
  { id: 'mawanella', label: 'Mawanella / Kegalle', fee: 0 },
  { id: 'kandy', label: 'Kandy', fee: 2000 },
  { id: 'colombo', label: 'Colombo', fee: 5000 },
  { id: 'galle', label: 'Galle / South', fee: 8000 },
  { id: 'nuwara', label: 'Nuwara Eliya / Hill Country', fee: 6000 },
  { id: 'other', label: 'Other location', fee: 4000 },
];

const ADDONS = [
  { id: 'photobook', label: 'Premium Photobook', fee: 15000 },
  { id: 'prewedding', label: 'Pre-Wedding Shoot', fee: 12000 },
  { id: 'drone', label: 'Aerial / Drone Coverage', fee: 10000 },
  { id: 'sameday', label: 'Same-Day Highlights Edit', fee: 8000 },
  { id: 'extrahr', label: 'Extra Hour of Coverage', fee: 5000 },
  { id: 'prints', label: 'Printed Photo Set (20 prints)', fee: 5000 },
];

function formatPrice(n) {
  return 'Rs. ' + n.toLocaleString('en-LK');
}

export default function PriceCalculator() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('mawanella');
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [total, setTotal] = useState(0);
  const [animating, setAnimating] = useState(false);

  const service = SERVICES.find(s => s.id === selectedService);
  const location = LOCATION_ADDONS.find(l => l.id === selectedLocation);

  useEffect(() => {
    if (!service) { setTotal(0); return; }
    const base = service.basePrice;
    const locFee = location?.fee ?? 0;
    const addonTotal = selectedAddons.reduce((sum, id) => {
      const a = ADDONS.find(x => x.id === id);
      return sum + (a?.fee ?? 0);
    }, 0);
    setAnimating(true);
    const t = setTimeout(() => {
      setTotal(base + locFee + addonTotal);
      setAnimating(false);
    }, 150);
    return () => clearTimeout(t);
  }, [selectedService, selectedLocation, selectedAddons]);

  const toggleAddon = (id) => {
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const waMessage = service
    ? `Hi Numesh! I used the price calculator on your website. I'm interested in the ${service.name} package${location?.fee ? ` (${location.label})` : ''}${selectedAddons.length ? ` with add-ons: ${selectedAddons.map(id => ADDONS.find(a => a.id === id)?.label).join(', ')}` : ''}. Estimated total: ${formatPrice(total)}. Can we discuss further?`
    : `Hi Numesh! I'd like to enquire about your photography packages.`;

  return (
    <section className="pc-root">
      <div className="pc-wrap">
        {/* Header */}
        <div className="pc-header">
          <span className="pc-tag">Instant Estimate</span>
          <h2 className="section-title">Photography Price Calculator</h2>
          <p className="section-desc">
            Select your service, location, and any add-ons to get an instant price estimate.
            No commitment — just a quick idea of what your session might cost.
          </p>
        </div>

        <div className="pc-grid">
          {/* Left — Inputs */}
          <div className="pc-inputs">

            {/* Step 1: Service */}
            <div className="pc-step">
              <div className="pc-step-label">
                <span className="pc-step-num">1</span>
                Choose Service
              </div>
              <div className="pc-service-grid">
                {SERVICES.map(s => (
                  <button
                    key={s.id}
                    className={`pc-service-btn ${selectedService === s.id ? 'pc-service-active' : ''}`}
                    onClick={() => setSelectedService(s.id)}
                  >
                    <span className="pc-svc-icon">{s.icon}</span>
                    <span className="pc-svc-name">{s.name}</span>
                    <span className="pc-svc-desc">{s.description}</span>
                    <span className="pc-svc-price">{formatPrice(s.basePrice)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Location */}
            <div className="pc-step">
              <div className="pc-step-label">
                <span className="pc-step-num">2</span>
                Shoot Location
              </div>
              <div className="pc-location-grid">
                {LOCATION_ADDONS.map(loc => (
                  <button
                    key={loc.id}
                    className={`pc-loc-btn ${selectedLocation === loc.id ? 'pc-loc-active' : ''}`}
                    onClick={() => setSelectedLocation(loc.id)}
                  >
                    <span>{loc.label}</span>
                    <span className="pc-loc-fee">
                      {loc.fee === 0 ? 'No travel fee' : `+${formatPrice(loc.fee)}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Add-ons */}
            <div className="pc-step">
              <div className="pc-step-label">
                <span className="pc-step-num">3</span>
                Add-ons (optional)
              </div>
              <div className="pc-addon-grid">
                {ADDONS.map(addon => (
                  <button
                    key={addon.id}
                    className={`pc-addon-btn ${selectedAddons.includes(addon.id) ? 'pc-addon-active' : ''}`}
                    onClick={() => toggleAddon(addon.id)}
                  >
                    <span className="pc-addon-check">
                      {selectedAddons.includes(addon.id) ? '✓' : '+'}
                    </span>
                    <span className="pc-addon-label">{addon.label}</span>
                    <span className="pc-addon-fee">+{formatPrice(addon.fee)}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Result */}
          <div className="pc-result-wrap">
            <div className="pc-result">
              <div className="pc-result-glow" />

              {!service ? (
                <div className="pc-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(212,175,55,0.3)" strokeWidth="1.5">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                    <circle cx="12" cy="13" r="4"/>
                  </svg>
                  <p>Select a service to see your estimate</p>
                </div>
              ) : (
                <>
                  <div className="pc-result-top">
                    <span className="pc-result-tag">Your Estimate</span>
                    <h3 className="pc-result-service">{service.name}</h3>
                    <p className="pc-result-desc">{service.description}</p>
                  </div>

                  <div className="pc-breakdown">
                    <div className="pc-breakdown-row">
                      <span>Base price</span>
                      <span>{formatPrice(service.basePrice)}</span>
                    </div>
                    {location && location.fee > 0 && (
                      <div className="pc-breakdown-row">
                        <span>Travel — {location.label}</span>
                        <span>+{formatPrice(location.fee)}</span>
                      </div>
                    )}
                    {selectedAddons.map(id => {
                      const a = ADDONS.find(x => x.id === id);
                      return a ? (
                        <div key={id} className="pc-breakdown-row">
                          <span>{a.label}</span>
                          <span>+{formatPrice(a.fee)}</span>
                        </div>
                      ) : null;
                    })}
                    <div className="pc-breakdown-divider" />
                    <div className={`pc-total-row ${animating ? 'pc-total-anim' : ''}`}>
                      <span>Estimated Total</span>
                      <span className="pc-total-price">{formatPrice(total)}</span>
                    </div>
                    <p className="pc-disclaimer">
                      Final price confirmed after consultation. 30% advance to book.
                    </p>
                  </div>

                  <div className="pc-result-actions">
                    <a
                      href={`https://wa.me/94704574568?text=${encodeURIComponent(waMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pc-wa-btn"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.554 4.122 1.527 5.854L.05 23.5l5.82-1.527A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.887 9.887 0 0 1-5.03-1.374l-.362-.215-3.737.98.998-3.645-.237-.376A9.891 9.891 0 0 1 2.106 12C2.106 6.537 6.537 2.106 12 2.106S21.894 6.537 21.894 12 17.463 21.894 12 21.894z"/>
                      </svg>
                      Send This Quote on WhatsApp
                    </a>
                    <Link href="/booking" className="pc-book-btn">
                      Book This Package
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pc-root {
          padding: 80px 4%;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .pc-wrap { max-width: 1300px; margin: 0 auto; }

        .pc-header {
          text-align: center;
          margin-bottom: 50px;
        }
        .pc-tag {
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

        /* Layout */
        .pc-grid {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 32px;
          align-items: start;
        }

        /* Steps */
        .pc-step { margin-bottom: 32px; }
        .pc-step-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          margin-bottom: 14px;
        }
        .pc-step-num {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--accent);
          color: #000;
          font-size: 0.75rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Service buttons */
        .pc-service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 10px;
        }
        .pc-service-btn {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 16px;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .pc-service-btn:hover {
          border-color: rgba(212,175,55,0.3);
          background: rgba(212,175,55,0.04);
        }
        .pc-service-active {
          border-color: var(--accent) !important;
          background: rgba(212,175,55,0.1) !important;
        }
        .pc-svc-icon { color: var(--accent); margin-bottom: 4px; }
        .pc-svc-name {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-main);
          line-height: 1.3;
        }
        .pc-svc-desc {
          font-size: 0.72rem;
          color: var(--text-muted);
          line-height: 1.4;
        }
        .pc-svc-price {
          font-size: 0.82rem;
          font-weight: 800;
          color: var(--accent);
          margin-top: 4px;
        }

        /* Location buttons */
        .pc-location-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
          gap: 8px;
        }
        .pc-loc-btn {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 12px 14px;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
          gap: 3px;
          font-size: 0.83rem;
          color: rgba(255,255,255,0.7);
          font-weight: 500;
        }
        .pc-loc-btn:hover { border-color: rgba(212,175,55,0.3); }
        .pc-loc-active {
          border-color: var(--accent) !important;
          background: rgba(212,175,55,0.08) !important;
          color: var(--text-main) !important;
        }
        .pc-loc-fee {
          font-size: 0.72rem;
          color: var(--accent);
          font-weight: 600;
        }

        /* Add-on buttons */
        .pc-addon-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 8px;
        }
        .pc-addon-btn {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 12px 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 10px;
          text-align: left;
        }
        .pc-addon-btn:hover { border-color: rgba(212,175,55,0.3); }
        .pc-addon-active {
          border-color: var(--accent) !important;
          background: rgba(212,175,55,0.08) !important;
        }
        .pc-addon-check {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 1.5px solid rgba(212,175,55,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--accent);
          flex-shrink: 0;
          transition: all 0.2s;
        }
        .pc-addon-active .pc-addon-check {
          background: var(--accent);
          color: #000;
          border-color: var(--accent);
        }
        .pc-addon-label {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.75);
          font-weight: 500;
          flex: 1;
        }
        .pc-addon-fee {
          font-size: 0.75rem;
          color: var(--accent);
          font-weight: 700;
          white-space: nowrap;
        }

        /* Result panel */
        .pc-result-wrap { position: sticky; top: 100px; }
        .pc-result {
          position: relative;
          background: linear-gradient(135deg, rgba(25,22,10,0.95) 0%, rgba(15,15,12,0.98) 100%);
          border: 1px solid rgba(212,175,55,0.25);
          border-radius: 24px;
          padding: 32px 28px;
          overflow: hidden;
          min-height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .pc-result-glow {
          position: absolute;
          top: -60px;
          right: -60px;
          width: 200px;
          height: 200px;
          background: radial-gradient(ellipse, rgba(212,175,55,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Placeholder */
        .pc-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          text-align: center;
          padding: 20px 0;
        }
        .pc-placeholder p {
          color: rgba(255,255,255,0.3);
          font-size: 0.9rem;
        }

        /* Result content */
        .pc-result-tag {
          display: inline-block;
          background: rgba(212,175,55,0.1);
          border: 1px solid rgba(212,175,55,0.2);
          color: var(--accent);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 50px;
          margin-bottom: 10px;
        }
        .pc-result-service {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 4px;
        }
        .pc-result-desc {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        /* Breakdown */
        .pc-breakdown {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 20px;
        }
        .pc-breakdown-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.6);
          margin-bottom: 8px;
        }
        .pc-breakdown-divider {
          height: 1px;
          background: rgba(255,255,255,0.08);
          margin: 12px 0;
        }
        .pc-total-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-main);
          transition: opacity 0.15s ease;
        }
        .pc-total-anim { opacity: 0; }
        .pc-total-price {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--accent);
          letter-spacing: -0.5px;
        }
        .pc-disclaimer {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.25);
          margin-top: 10px;
          text-align: center;
        }

        /* Actions */
        .pc-result-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .pc-wa-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #25d366;
          color: #fff;
          font-weight: 800;
          font-size: 0.85rem;
          padding: 14px 20px;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.25s ease;
          text-align: center;
        }
        .pc-wa-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(37,211,102,0.35);
        }
        .pc-book-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          color: var(--accent);
          border: 1px solid rgba(212,175,55,0.3);
          font-weight: 700;
          font-size: 0.85rem;
          padding: 13px 20px;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.25s ease;
          text-align: center;
        }
        .pc-book-btn:hover {
          background: rgba(212,175,55,0.08);
          border-color: var(--accent);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .pc-grid { grid-template-columns: 1fr; }
          .pc-result-wrap { position: static; }
        }
        @media (max-width: 640px) {
          .pc-root { padding: 60px 4%; }
          .pc-service-grid { grid-template-columns: 1fr 1fr; }
          .pc-addon-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
