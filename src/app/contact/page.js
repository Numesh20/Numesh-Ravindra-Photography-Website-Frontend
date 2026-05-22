'use client';

import { useState } from "react";

const FAQ_ITEMS = [
  {
    id: 1,
    question: "Do you sell limited edition prints?",
    answer: "Yes, all fine art landscape and architectural images are available in numbered limited editions. They are printed on archival museum-grade papers (Hahnemühle Photo Rag) and come with signed certificates of authenticity."
  },
  {
    id: 2,
    question: "Are you available for international assignments?",
    answer: "Absolutely. I travel extensively for architectural projects, commercial brand shoots, and editorial portfolios. Please submit an inquiry with your location, scope, and timeline to discuss details."
  },
  {
    id: 3,
    question: "What is your typical turnaround time for commercial shoots?",
    answer: "For standard commercial and architectural shoots, high-resolution edited proof sheets are provided within 7 days, and final retouched deliverables are sent within 14-21 business days, depending on project scale."
  },
  {
    id: 4,
    question: "Can I license your photos for digital or print media?",
    answer: "Yes. Many of my images are available for digital and print commercial licensing. Please send the details of the image you want to license and where it will be published via the contact form."
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", type: "Fine Art Print", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", type: "Fine Art Print", message: "" });
    }, 600);
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
            Whether you are looking to purchase a limited edition print, commission a custom commercial architectural shoot, or discuss an editorial assignment, I would love to hear from you.
          </p>
          
          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-detail-text">
                <h4>Email</h4>
                <p>studio@numeshravindra.com</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-detail-text">
                <h4>Location</h4>
                <p>Colombo, Sri Lanka (Available Worldwide)</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div className="contact-detail-text">
                <h4>Instagram</h4>
                <p>@numesh_ravindra</p>
              </div>
            </div>
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
                  <option value="Fine Art Print">Fine Art Print Purchase</option>
                  <option value="Commercial Shoot">Commercial / Architectural Shoot</option>
                  <option value="Editorial Assignment">Editorial Assignment</option>
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
                  placeholder="Describe your project, desired print size, or assignment timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Inquiry</button>
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
    </div>
  );
}
