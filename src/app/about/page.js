import Image from "next/image";

export const metadata = {
  title: "About | Numesh Ravindra Photography",
  description: "Learn more about Numesh Ravindra's journey, philosophy, gear, and professional wedding, wildlife, event, and portrait photography.",
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
            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1200&q=80" 
            alt="Numesh Ravindra Profile Portrait" 
            fill
            className="about-image"
            priority
          />
        </div>
        
        <div className="about-text">
          <h2>Numesh Ravindra</h2>
          <p>
            I am a professional photographer based in Mawanella, Sri Lanka, specializing in capturing weddings, wildlife, social events, and expressive portrait photography.
          </p>
          
          <div className="about-quote">
            "Photography is not just about capturing a subject. It is about freezing a heartbeat, telling a story, and saving a fragment of emotion forever."
          </div>
          
          <p>
            With years of experience documenting the vibrant beauty of Sri Lanka, my work spans from the intimate celebrations of weddings to the raw, untamed habitats of our wildlife parks. Whether shooting a couple in golden hour light or tracking wildlife in Yala, I am dedicated to finding the perfect shot.
          </p>
          <p>
            I serve clients throughout Mawanella, Kandy, Colombo, and across the island, providing a tailored, premium experience that ensures your precious moments are preserved with outstanding visual quality and care.
          </p>
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
            <h4>Camera Bodies</h4>
            <ul>
              <li>Sony A7R V (61MP Full-Frame)</li>
              <li>Sony A7 IV (Backup & Event Body)</li>
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
              <li>DJI Mavic 3 Pro (Aerial Drone shots)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
