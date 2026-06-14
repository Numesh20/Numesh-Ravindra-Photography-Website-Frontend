import Image from "next/image";

export const metadata = {
  title: "About | Numesh Ravindra Photography",
  description: "Learn more about Numesh Ravindra — a 22-year-old professional photographer from Mawanella, Sri Lanka, specializing in weddings, wildlife, events and portraits.",
};

export default function About() {
  return (
    <div className="about-page animate-fade-in">
      <header className="about-header">
        <h1 className="section-title">The Photographer</h1>
        <p className="section-desc">Behind the lens and the creative philosophy.</p>
      </header>

      <div className="about-grid">
        <div className="about-image-container">
          <Image
            src="/IMG_7530.PNG"
            alt="Numesh Ravindra - Photographer"
            fill
            className="about-image"
            priority
          />
        </div>

        <div className="about-text">
          <h2>Numesh Ravindra</h2>
          <p style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: '600', letterSpacing: '1px', marginBottom: '16px', textTransform: 'uppercase' }}>
            Photographer · Mawanella, Sri Lanka
          </p>

          <p>
            I am a 22-year-old passionate photographer based in Mawanella, Sri Lanka.
            My journey with the camera began in 2023, and from the very first click of the shutter,
            I knew photography was more than a hobby — it was a calling.
          </p>

          <div className="about-quote">
            "Every photograph is a certificate of presence. I don't just take pictures — I preserve moments that will be cherished forever."
          </div>

          <p>
            In just a few years, I have grown from a curious beginner to a professional photographer
            trusted by families, couples, and businesses across Sri Lanka. I specialise in
            <strong style={{ color: 'var(--accent)' }}> Wedding, Portrait, Wildlife, and Event </strong>
            photography, bringing dedication and creative vision to every session.
          </p>

          <p>
            My home in Mawanella — surrounded by the lush greenery and rich culture of Sri Lanka —
            deeply influences my style. Whether I am capturing the golden-hour glow at a wedding,
            tracking wildlife in Yala National Park, or creating expressive portraits in a studio,
            I am always searching for that one perfect moment that tells a story no words can describe.
          </p>

          {/* Stats Row */}
          <div style={{ display: 'flex', gap: '30px', marginTop: '30px', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent)', margin: '0' }}>3+</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '4px 0 0', letterSpacing: '1px', textTransform: 'uppercase' }}>Years</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent)', margin: '0' }}>84+</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '4px 0 0', letterSpacing: '1px', textTransform: 'uppercase' }}>Photos</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent)', margin: '0' }}>4</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '4px 0 0', letterSpacing: '1px', textTransform: 'uppercase' }}>Albums</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent)', margin: '0' }}>22</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '4px 0 0', letterSpacing: '1px', textTransform: 'uppercase' }}>Years Old</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gear & Toolkit Section */}
      <section className="gear-section">
        <h3 className="section-title" style={{ textAlign: 'center', marginBottom: '10px' }}>Creative Toolkit</h3>
        <p className="section-desc" style={{ textAlign: 'center', marginBottom: '40px' }}>The instruments used to translate vision into tangible pixels.</p>

        <div className="gear-grid">
          <div className="gear-card">
            <div className="gear-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </div>
            <h4>Camera Body</h4>
            <ul>
              <li>Sony Alfa A7 III (24.2MP Full-Frame)</li>
            </ul>
          </div>

          <div className="gear-card">
            <div className="gear-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <h4>Prime & Zoom Lenses</h4>
            <ul>
              <li>Sony FE 24-70mm f/2.8 GM II</li>
              <li>Sony FE 85mm f/1.2 GM (Portrait)</li>
              <li>Sony FE 50mm f/1.2 GM (Event)</li>
              <li>Sony FE 200-600mm f/5.6-6.3 G (Wildlife)</li>
            </ul>
          </div>

          <div className="gear-card">
            <div className="gear-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
            </div>
            <h4>Support & Lighting</h4>
            <ul>
              <li>Gitzo Carbon Tripod</li>
              <li>Profoto B10X Location Lighting</li>
              <li>DJI Mavic 3 Pro (Aerial Drone)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
