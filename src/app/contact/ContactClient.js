"use client";

import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const SERVICE_ID  = 'service_mqgvptj';
const TEMPLATE_ID = 'template_xfytr0h';
const PUBLIC_KEY  = '4adMArwJqy9jB6J5D';

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

export default function ContactClient() {
  const [formData, setFormData]   = useState({ name: '', email: '', type: 'Wedding Photography', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]     = useState(false);
  const [error, setError]         = useState('');
  const [activeFaq, setActiveFaq] = useState(null);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name:    formData.name,
          email:   formData.email,
          type:    formData.type,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      setSubmitted(true);
      setFormData({ name: '', email: '', type: 'Wedding Photography', message: '' });
    } catch (err) {
      setError('Sorry, something went wrong. Please try WhatsApp instead.');
    } finally {
      setSending(false);
    }
  };

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="contact-page animate-fade-in">
      <div className="contact-grid">
        {/* Info panel */}
        <div className="contact-info-panel">
          <h2>Get in Touch</h2>
          <p>
            Whether you want to book a wedding shoot, schedule a portrait session, capture an event, or purchase wildlife prints, I would love to hear from you. Feel free to reach out via the form, WhatsApp, or social media!
          </p>
          
          <div className="contact-details">
            <a href="mailto:numesh.ravindra.photography@gmail.com" className="contact-detail-item">
              <div className="contact-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-detail-text">
                <h4>Email</h4>
                <p>numesh.ravindra.photography@gmail.com</p>
              </div>
            </a>

            <div className="contact-detail-item">
              <div className="contact-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-detail-text">
                <h4>Location</h4>
                <p>Mawanella, Sri Lanka (Available Island-wide)</p>
              </div>
            </div>

            <a href="https://wa.me/94704574568" target="_blank" rel="noopener noreferrer" className="contact-detail-item">
              <div className="contact-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <div className="contact-detail-text">
                <h4>WhatsApp</h4>
                <p>+94 70 457 4568</p>
              </div>
            </a>

            <a href="https://www.facebook.com/profile.php?id=100090941785767" target="_blank" rel="noopener noreferrer" className="contact-detail-item">
              <div className="contact-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </div>
              <div className="contact-detail-text">
                <h4>Facebook</h4>
                <p>Numesh Ravindra Photography</p>
              </div>
            </a>

            <a href="https://www.tiktok.com/@numesh_ravindra" target="_blank" rel="noopener noreferrer" className="contact-detail-item">
              <div className="contact-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </div>
              <div className="contact-detail-text">
                <h4>TikTok</h4>
                <p>@numesh_ravindra</p>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-panel">
          <h3>Booking & Inquiry Form</h3>
          
          {submitted ? (
            <div className="form-success-msg">
              <h4>Thank you for your message!</h4>
              <p style={{ fontSize: '0.85rem', marginTop: '5px', color: 'rgba(34, 197, 94, 0.85)' }}>
                I will review your inquiry and get back to you within 24-48 hours.
              </p>
            </div>
          ) : (
            <form className="inquiry-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="type">Inquiry Type</label>
                <select 
                  id="type"
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                >
                  <option value="Wedding Photography">Wedding Photography</option>
                  <option value="Wildlife Prints & Sessions">Wildlife Prints & Sessions</option>
                  <option value="Event Coverage">Event Coverage</option>
                  <option value="Portrait Session">Portrait Session</option>
                  <option value="Other">Other Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message & Details</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  required
                  placeholder="Describe your event date, location, or photography needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              {error && (
                <p style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '10px' }}>{error}</p>
              )}
              <button type="submit" className="submit-btn" disabled={sending}>
                {sending ? '⏳ Sending...' : 'Send Inquiry'}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <section className="faq-section">
        <h3 className="faq-title">Frequently Asked Questions</h3>
        <div className="faq-list">
          {FAQ_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className={`faq-item ${activeFaq === item.id ? "active" : ""}`}
            >
              <button className="faq-question" onClick={() => toggleFaq(item.id)}>
                {item.question}
                <svg className="faq-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Google Maps Section */}
      <section style={{ padding: '60px 4% 80px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h3 className="section-title">Find Me Here</h3>
          <p className="section-desc">Based in Mawanella, Sri Lanka — Available island-wide for all shoots.</p>
        </div>

        <div style={{
          borderRadius: '20px',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          position: 'relative'
        }}>
          {/* Map Header */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            borderBottom: '1px solid rgba(255,255,255,0.08)'
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span style={{ color: 'var(--text)', fontWeight: '600', fontSize: '0.9rem' }}>
              Mawanella, Kegalle District, Sri Lanka
            </span>
          </div>

          {/* Google Maps Embed */}
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

          {/* Map Footer */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            padding: '14px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px',
            borderTop: '1px solid rgba(255,255,255,0.08)'
          }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              📷 Studio & outdoor sessions available in Mawanella
            </span>
            <a
              href="https://maps.google.com/?q=Mawanella,+Sri+Lanka"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--accent)',
                fontSize: '0.85rem',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
