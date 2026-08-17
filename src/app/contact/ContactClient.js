"use client";

import { useState } from "react";
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_mqgvptj';
const TEMPLATE_ID = 'template_xfytr0h';
const PUBLIC_KEY = '4adMArwJqy9jB6J5D';

const FAQ_ITEMS = [
  {
    id: 1,
    question: "What is your typical turnaround time for wedding photos?",
    answer: "For wedding coverages, we provide a preview highlights gallery within 3 days so you can share memories with family. The complete set of high-resolution retouched digital photos and your premium physical photobook are delivered within 4-6 weeks."
  },
  {
    id: 2,
    question: "Are you available for photography sessions outside Mawanella?",
    answer: "Yes! I travel all over Sri Lanka for weddings, wildlife expeditions, events, and portrait sessions. Whether your shoot is in Kandy, Colombo, Galle, or any other district, we can arrange travel details."
  },
  {
    id: 3,
    question: "Do you sell fine art prints of your wildlife photography?",
    answer: "Yes! High-resolution fine-art prints of wildlife captured in Sri Lankan national parks (like Yala, Wilpattu, and Minneriya) are available. Please select the 'Wildlife Prints & Sessions' option in the form to discuss print sizes and framing options."
  },
  {
    id: 4,
    question: "How do we book a wedding or event photography session?",
    answer: "You can book by filling out the form on this page or contacting me directly via WhatsApp at +94704574568. To secure your wedding date, we require a 30% advance deposit along with a signed booking agreement."
  }
];

const QUICK_LINKS = [
  {
    label: "WhatsApp",
    sub: "+94 70 457 4568",
    href: "https://wa.me/94704574568",
    color: "#25D366",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    )
  },
  {
    label: "Email",
    sub: "numesh.ravindra.photography@gmail.com",
    href: "mailto:numesh.ravindra.photography@gmail.com",
    color: "#d4af37",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    )
  },
  {
    label: "Facebook",
    sub: "Numesh Ravindra Photography",
    href: "https://www.facebook.com/profile.php?id=100090941785767",
    color: "#1877F2",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    )
  },
  {
    label: "TikTok",
    sub: "@numesh_ravindra",
    href: "https://www.tiktok.com/@numesh_ravindra",
    color: "#ff0050",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
      </svg>
    )
  }
];

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', type: 'Wedding Photography', date: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          type: formData.type,
          date: formData.date,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', type: 'Wedding Photography', date: '', message: '' });
    } catch (err) {
      setError('Sorry, something went wrong. Please try WhatsApp instead.');
    } finally {
      setSending(false);
    }
  };

  const toggleFaq = (id) => setActiveFaq(activeFaq === id ? null : id);

  return (
    <div className="cp-root">

      {/* ── Hero Banner ─────────────────────────────── */}
      <section className="cp-hero">
        <div className="cp-hero-overlay" />
        <div className="cp-hero-content animate-fade-in">
          <p className="cp-hero-eyebrow"> Available Island-wide · Sri Lanka</p>
          <h1 className="cp-hero-title">Let's Create Something<br /><span>Timeless Together</span></h1>
          <p className="cp-hero-sub">
            Book a session, ask a question, or just say hello — I'd love to hear from you.
          </p>
          <div className="cp-hero-badges">
            <span className="cp-badge"> Responds within 24 hrs</span>
            <span className="cp-badge"> Bookings Open 2026</span>
            <span className="cp-badge"> Travel Island-wide</span>
          </div>
        </div>
      </section>

      {/* ── Quick Connect Cards ─────────────────────── */}
      <section className="cp-quick-section">
        <div className="cp-quick-grid">
          {QUICK_LINKS.map((q) => (
            <a key={q.label} href={q.href} target="_blank" rel="noopener noreferrer" className="cp-quick-card" style={{ '--qc': q.color }}>
              <div className="cp-quick-icon" style={{ color: q.color }}>{q.icon}</div>
              <div className="cp-quick-info">
                <span className="cp-quick-label">{q.label}</span>
                <span className="cp-quick-sub">{q.sub}</span>
              </div>
              <svg className="cp-quick-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          ))}
        </div>
      </section>

      {/* ── Main Grid: Info + Form ──────────────────── */}
      <section className="cp-main-grid">

        {/* Left — Info Panel */}
        <div className="cp-info-panel animate-fade-in">
          <div className="cp-info-tag">GET IN TOUCH</div>
          <h2 className="cp-info-title">Ready to Book<br />Your Session?</h2>
          <p className="cp-info-desc">
            Whether you're planning a dream wedding, a portrait session, an event, or a wildlife adventure — fill out the form and I'll get back to you within 24 hours with a personalised quote.
          </p>

          <div className="cp-info-details">
            <div className="cp-info-item">
              <div className="cp-info-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4>Based In</h4>
                <p>Mawanella, Kegalle District, Sri Lanka</p>
              </div>
            </div>
            <div className="cp-info-item">
              <div className="cp-info-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div>
                <h4>Working Hours</h4>
                <p>Every Day · 6:00 AM – 11:00 PM</p>
              </div>
            </div>
            <div className="cp-info-item">
              <div className="cp-info-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.4 2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"></path>
                </svg>
              </div>
              <div>
                <h4>WhatsApp</h4>
                <p>+94 70 457 4568</p>
              </div>
            </div>
          </div>

          {/* Availability Notice */}
          <div className="cp-availability">
            <div className="cp-avail-dot"></div>
            <p><strong>Currently accepting bookings</strong> for weddings, portraits & events in 2025.</p>
          </div>
        </div>

        {/* Right — Booking Form */}
        <div className="cp-form-panel animate-fade-in">
          <div className="cp-form-header">
            <h3>Booking & Inquiry Form</h3>
            <p>Fill in your details and I'll send you a personalised package.</p>
          </div>

          {submitted ? (
            <div className="cp-success-msg">
              <div className="cp-success-icon">✓</div>
              <h4>Message Sent!</h4>
              <p>Thank you! I'll get back to you within 24 hours with all the details.</p>
              <button className="cp-reset-btn" onClick={() => setSubmitted(false)}>Send Another Message</button>
            </div>
          ) : (
            <form className="cp-form" onSubmit={handleSubmit}>
              <div className="cp-form-row">
                <div className="cp-field">
                  <label htmlFor="cp-name">Full Name *</label>
                  <input
                    id="cp-name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="cp-field">
                  <label htmlFor="cp-phone">Phone Number</label>
                  <input
                    id="cp-phone"
                    type="tel"
                    placeholder="+94 XX XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="cp-field">
                <label htmlFor="cp-email">Email Address *</label>
                <input
                  id="cp-email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="cp-form-row">
                <div className="cp-field">
                  <label htmlFor="cp-type">Session Type *</label>
                  <select
                    id="cp-type"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option value="Wedding Photography"> Wedding Photography</option>
                    <option value="Portrait Session"> Portrait Session</option>
                    <option value="Event Coverage"> Event Coverage</option>
                    <option value="Wildlife Prints & Sessions"> Wildlife Prints & Sessions</option>
                    <option value="Other"> Other Inquiry</option>
                  </select>
                </div>
                <div className="cp-field">
                  <label htmlFor="cp-date">Event / Session Date</label>
                  <input
                    id="cp-date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
              </div>

              <div className="cp-field">
                <label htmlFor="cp-message">Message & Details *</label>
                <textarea
                  id="cp-message"
                  rows="5"
                  required
                  placeholder="Tell me about your event, location, style preferences, or any special requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              {error && <p className="cp-error">{error}</p>}

              <button type="submit" className="cp-submit-btn" disabled={sending}>
                {sending ? (
                  <><span className="cp-spinner"></span> Sending...</>
                ) : (
                  <>Send Inquiry <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></>
                )}
              </button>

              <p className="cp-form-note">
                Your information is kept private and never shared.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────── */}
      <section className="cp-faq-section">
        <div className="cp-faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know before booking.</p>
        </div>
        <div className="cp-faq-list">
          {FAQ_ITEMS.map((item) => (
            <div key={item.id} className={`cp-faq-item ${activeFaq === item.id ? 'active' : ''}`}>
              <button className="cp-faq-q" onClick={() => toggleFaq(item.id)}>
                <span>{item.question}</span>
                <svg className="cp-faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div className="cp-faq-a">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Google Maps ─────────────────────────────── */}
      <section className="cp-map-section">
        <div className="cp-map-header">
          <h2>Find Me Here</h2>
          <p>Based in Mawanella, Sri Lanka — Available island-wide for all shoots.</p>
        </div>
        <div className="cp-map-wrap">
          <div className="cp-map-topbar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>Mawanella, Kegalle District, Sri Lanka</span>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31680.584705422564!2d80.43510271298828!3d7.252702500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3254c8c06a837%3A0x19c73f2a1e8f1e70!2sMawanella!5e0!3m2!1sen!2slk!4v1718700000000!5m2!1sen!2slk"
            width="100%"
            height="420"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Numesh Ravindra Photography - Mawanella Location"
          ></iframe>
          <div className="cp-map-footer">
            <span>Studio & outdoor sessions available in Mawanella</span>
            <a href="https://maps.google.com/?q=Mawanella,+Sri+Lanka" target="_blank" rel="noopener noreferrer">
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ── Root ── */
        .cp-root {
          min-height: 100vh;
          background: var(--bg-color);
        }

        /* ── Hero ── */
        .cp-hero {
          position: relative;
          min-height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 120px 4% 80px;
          background: linear-gradient(135deg, #08080a 0%, #0d0d14 40%, #0a0a0e 100%);
          overflow: hidden;
        }
        .cp-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 20% 50%, rgba(212,175,55,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 80% 30%, rgba(212,175,55,0.05) 0%, transparent 60%);
          pointer-events: none;
        }
        .cp-hero-overlay {
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.015'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .cp-hero-content {
          position: relative;
          z-index: 2;
          max-width: 700px;
        }
        .cp-hero-eyebrow {
          font-size: 0.8rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 20px;
          font-weight: 600;
        }
        .cp-hero-title {
          font-size: 3.5rem;
          font-weight: 300;
          letter-spacing: -0.02em;
          line-height: 1.15;
          color: var(--text-main);
          margin-bottom: 20px;
          text-transform: uppercase;
        }
        .cp-hero-title span {
          color: var(--accent);
          font-style: italic;
        }
        .cp-hero-sub {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 30px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
        .cp-hero-badges {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .cp-badge {
          background: rgba(212,175,55,0.08);
          border: 1px solid rgba(212,175,55,0.2);
          color: var(--accent);
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        /* ── Quick Connect ── */
        .cp-quick-section {
          max-width: 1200px;
          margin: -40px auto 0;
          padding: 0 4%;
          position: relative;
          z-index: 10;
        }
        .cp-quick-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .cp-quick-card {
          background: var(--surface-color);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 22px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .cp-quick-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--qc, #d4af37) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .cp-quick-card:hover {
          border-color: var(--qc, var(--accent));
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.3);
        }
        .cp-quick-card:hover::before {
          opacity: 0.06;
        }
        .cp-quick-icon {
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }
        .cp-quick-info {
          flex: 1;
          min-width: 0;
          position: relative;
          z-index: 1;
        }
        .cp-quick-label {
          display: block;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 3px;
        }
        .cp-quick-sub {
          display: block;
          font-size: 0.72rem;
          color: var(--text-muted);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .cp-quick-arrow {
          color: var(--text-muted);
          flex-shrink: 0;
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
        }
        .cp-quick-card:hover .cp-quick-arrow {
          color: var(--qc, var(--accent));
          transform: translate(3px, -3px);
        }

        /* ── Main Grid ── */
        .cp-main-grid {
          max-width: 1200px;
          margin: 60px auto 0;
          padding: 0 4%;
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 50px;
          align-items: start;
        }

        /* ── Info Panel ── */
        .cp-info-panel {
          position: sticky;
          top: 100px;
        }
        .cp-info-tag {
          font-size: 0.72rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 700;
          margin-bottom: 16px;
        }
        .cp-info-title {
          font-size: 2.4rem;
          font-weight: 300;
          line-height: 1.2;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-main);
          margin-bottom: 20px;
        }
        .cp-info-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.8;
          margin-bottom: 36px;
        }
        .cp-info-details {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 32px;
        }
        .cp-info-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .cp-info-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(212,175,55,0.08);
          border: 1px solid rgba(212,175,55,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          flex-shrink: 0;
        }
        .cp-info-item h4 {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--text-muted);
          margin-bottom: 4px;
          font-weight: 600;
        }
        .cp-info-item p {
          color: var(--text-main);
          font-size: 0.9rem;
        }
        .cp-availability {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          background: rgba(34,197,94,0.05);
          border: 1px solid rgba(34,197,94,0.15);
          border-radius: 12px;
        }
        .cp-avail-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #22c55e;
          flex-shrink: 0;
          box-shadow: 0 0 0 3px rgba(34,197,94,0.2);
          animation: pulse-green 2s infinite;
        }
        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 0 3px rgba(34,197,94,0.2); }
          50% { box-shadow: 0 0 0 6px rgba(34,197,94,0.1); }
        }
        .cp-availability p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        .cp-availability strong {
          color: #22c55e;
        }

        /* ── Form Panel ── */
        .cp-form-panel {
          background: var(--surface-color);
          border: 1px solid var(--border-color);
          border-radius: 24px;
          overflow: hidden;
        }
        .cp-form-header {
          padding: 36px 40px 28px;
          border-bottom: 1px solid var(--border-color);
          background: rgba(212,175,55,0.03);
        }
        .cp-form-header h3 {
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--text-main);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 6px;
        }
        .cp-form-header p {
          color: var(--text-muted);
          font-size: 0.88rem;
        }
        .cp-form {
          padding: 36px 40px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .cp-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .cp-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .cp-field label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--text-muted);
          font-weight: 600;
        }
        .cp-field input,
        .cp-field select,
        .cp-field textarea {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 13px 16px;
          color: var(--text-main);
          font-family: inherit;
          font-size: 0.92rem;
          outline: none;
          transition: all 0.25s ease;
          width: 100%;
        }
        .cp-field input:focus,
        .cp-field select:focus,
        .cp-field textarea:focus {
          border-color: var(--accent);
          background: rgba(212,175,55,0.04);
          box-shadow: 0 0 0 3px rgba(212,175,55,0.08);
        }
        .cp-field input[type="date"] {
          color-scheme: dark;
        }
        .cp-field select option {
          background: #121215;
        }
        .cp-field textarea {
          resize: vertical;
          min-height: 120px;
        }
        .cp-error {
          color: #ef4444;
          font-size: 0.84rem;
          padding: 10px 14px;
          background: rgba(239,68,68,0.08);
          border: 1px solid rgba(239,68,68,0.2);
          border-radius: 8px;
        }
        .cp-submit-btn {
          background: var(--accent);
          color: #000;
          border: none;
          padding: 16px 32px;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
        }
        .cp-submit-btn:hover:not(:disabled) {
          background: var(--accent-hover);
          box-shadow: 0 8px 24px rgba(212,175,55,0.35);
          transform: translateY(-2px);
        }
        .cp-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .cp-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(0,0,0,0.3);
          border-top-color: #000;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          display: inline-block;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .cp-form-note {
          text-align: center;
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-top: -6px;
        }

        /* ── Success Message ── */
        .cp-success-msg {
          padding: 60px 40px;
          text-align: center;
        }
        .cp-success-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(34,197,94,0.12);
          border: 2px solid rgba(34,197,94,0.3);
          color: #22c55e;
          font-size: 1.8rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        .cp-success-msg h4 {
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 10px;
        }
        .cp-success-msg p {
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .cp-reset-btn {
          background: transparent;
          border: 1px solid var(--accent);
          color: var(--accent);
          padding: 10px 28px;
          border-radius: 8px;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .cp-reset-btn:hover {
          background: var(--accent);
          color: #000;
        }

        /* ── FAQ ── */
        .cp-faq-section {
          max-width: 860px;
          margin: 80px auto 0;
          padding: 0 4%;
        }
        .cp-faq-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .cp-faq-header h2 {
          font-size: 2rem;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }
        .cp-faq-header p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .cp-faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .cp-faq-item {
          background: var(--surface-color);
          border: 1px solid var(--border-color);
          border-radius: 14px;
          overflow: hidden;
          transition: border-color 0.3s ease;
        }
        .cp-faq-item.active {
          border-color: rgba(212,175,55,0.25);
        }
        .cp-faq-q {
          width: 100%;
          padding: 22px 26px;
          background: transparent;
          border: none;
          color: var(--text-main);
          font-size: 1rem;
          font-weight: 500;
          text-align: left;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .cp-faq-q:hover {
          color: var(--accent);
        }
        .cp-faq-icon {
          flex-shrink: 0;
          color: var(--accent);
          transition: transform 0.3s ease;
        }
        .cp-faq-item.active .cp-faq-icon {
          transform: rotate(180deg);
        }
        .cp-faq-a {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.16,1,0.3,1), padding 0.3s ease;
        }
        .cp-faq-item.active .cp-faq-a {
          max-height: 300px;
          padding: 0 26px 22px;
        }
        .cp-faq-a p {
          color: var(--text-muted);
          font-size: 0.93rem;
          line-height: 1.8;
          border-top: 1px solid rgba(255,255,255,0.04);
          padding-top: 16px;
        }

        /* ── Map ── */
        .cp-map-section {
          max-width: 1100px;
          margin: 80px auto 0;
          padding: 0 4% 100px;
        }
        .cp-map-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .cp-map-header h2 {
          font-size: 2rem;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }
        .cp-map-header p {
          color: var(--text-muted);
        }
        .cp-map-wrap {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }
        .cp-map-topbar {
          background: rgba(255,255,255,0.03);
          padding: 14px 22px;
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 1px solid var(--border-color);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-main);
        }
        .cp-map-footer {
          background: rgba(255,255,255,0.03);
          padding: 14px 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          border-top: 1px solid var(--border-color);
          font-size: 0.84rem;
          color: var(--text-muted);
        }
        .cp-map-footer a {
          color: var(--accent);
          font-weight: 600;
          text-decoration: none;
        }
        .cp-map-footer a:hover { text-decoration: underline; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .cp-quick-grid { grid-template-columns: repeat(2, 1fr); }
          .cp-main-grid { grid-template-columns: 1fr; gap: 40px; }
          .cp-info-panel { position: static; }
        }
        @media (max-width: 640px) {
          .cp-hero-title { font-size: 2.2rem; }
          .cp-quick-grid { grid-template-columns: 1fr; }
          .cp-form { padding: 24px 20px; }
          .cp-form-header { padding: 24px 20px 20px; }
          .cp-form-row { grid-template-columns: 1fr; }
          .cp-hero-badges { flex-direction: column; align-items: center; }
        }
      `}</style>
    </div>
  );
}
