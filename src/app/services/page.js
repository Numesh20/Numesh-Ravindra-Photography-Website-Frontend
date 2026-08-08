export const metadata = {
  title: "Photography Services & Pricing Packages | Numesh Ravindra Photography",
  description: "Explore photography service pricing packages in Sri Lanka. Tailored options for weddings, professional event coverage, outdoor/studio portrait sessions, and wildlife prints.",
  keywords: [
    "Wedding photography packages Sri Lanka",
    "Portrait photography prices Sri Lanka",
    "Event photography rates Mawanella",
    "Photographer cost Sri Lanka",
    "Photography services pricing"
  ],
  alternates: {
    canonical: "https://www.numeshravindra.me/services",
  },
  openGraph: {
    title: "Photography Services & Pricing Packages | Numesh Ravindra Photography",
    description: "Explore photography service pricing packages in Sri Lanka. Tailored options for weddings, professional event coverage, outdoor/studio portrait sessions, and wildlife prints.",
    url: "https://www.numeshravindra.me/services",
    siteName: "Numesh Ravindra Photography",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Photography Services & Pricing — Numesh Ravindra Photography",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photography Services & Pricing | Numesh Ravindra Photography",
    description: "Wedding, portrait, event & wildlife photography packages in Sri Lanka. Based in Mawanella, available island-wide.",
    images: ["https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
};

export default function Services() {
  return (
    <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '60px 4%' }} className="animate-fade-in">
      <header className="about-header">
        <h1 className="section-title">Photography Services</h1>
        <p className="section-desc">Tailored photography packages for your special moments.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
        {/* Package 1 */}
        <div className="gear-card">
          <div className="gear-icon" style={{ color: 'var(--accent)', marginBottom: '15px' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
            </svg>
          </div>
          <h4>Wedding Package</h4>
          <p style={{ color: 'var(--accent)', fontSize: '1.6rem', margin: '15px 0', fontWeight: 'bold' }}>LKR 150,000+</p>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--accent)' }}>•</span> Full day wedding coverage
            </li>
            <li style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--accent)' }}>•</span> Unlimited high-res edited photos
            </li>
            <li style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--accent)' }}>•</span> Premium physical photobook
            </li>
            <li style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--accent)' }}>•</span> Free outdoor pre-shoot session
            </li>
          </ul>
        </div>

        {/* Package 2 */}
        <div className="gear-card">
          <div className="gear-icon" style={{ color: 'var(--accent)', marginBottom: '15px' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h4>Portrait Session</h4>
          <p style={{ color: 'var(--accent)', fontSize: '1.6rem', margin: '15px 0', fontWeight: 'bold' }}>LKR 10,000</p>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--accent)' }}>•</span> 2 hours outdoor or studio session
            </li>
            <li style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--accent)' }}>•</span> 25 professionally retouched photos
            </li>
            <li style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--accent)' }}>•</span> High-resolution digital delivery
            </li>
            <li style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--accent)' }}>•</span> 2 outfit changes
            </li>
          </ul>
        </div>

        {/* Package 3 */}
        <div className="gear-card">
          <div className="gear-icon" style={{ color: 'var(--accent)', marginBottom: '15px' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </div>
          <h4>Event Coverage</h4>
          <p style={{ color: 'var(--accent)', fontSize: '1.6rem', margin: '15px 0', fontWeight: 'bold' }}>LKR 25,000</p>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--accent)' }}>•</span> Up to 4 hours of live event coverage
            </li>
            <li style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--accent)' }}>•</span> High-quality candid & formal shots
            </li>
            <li style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--accent)' }}>•</span> Next-day social highlights delivery
            </li>
            <li style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--accent)' }}>•</span> Shareable online guest link
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
