'use client';

import { useState } from "react";
import Link from "next/link";

const FAQS = [
  {
    q: "How far in advance should I book?",
    a: "For weddings, I recommend booking at least 3–6 months in advance as dates fill up quickly, especially during peak season (December–April). For portrait and event sessions, 2–4 weeks notice is usually enough. Contact me early to secure your preferred date!"
  },
  {
    q: "What areas do you cover in Sri Lanka?",
    a: "I am based in Mawanella but travel island-wide. I have shot in Colombo, Kandy, Galle, Nuwara Eliya, Kurunegala, Jaffna, and many more locations. Travel costs may apply for distant locations — contact me to discuss."
  },
  {
    q: "How long does it take to receive my photos?",
    a: "Wedding highlight previews are delivered within 3 days. Full edited wedding galleries are delivered within 4–6 weeks. Portrait and event sessions are typically delivered within 1–2 weeks. All photos are delivered via a private online gallery link."
  },
  {
    q: "What is your payment process?",
    a: "A 30% advance deposit is required to confirm and secure your booking date. The remaining balance is due on the day of the shoot. I accept bank transfers and cash payments."
  },
  {
    q: "Can I request specific shots or poses?",
    a: "Absolutely! I encourage clients to share mood boards, Pinterest boards, or specific ideas before the session. I'll work with your vision while also bringing my own creative perspective to ensure a unique and personal result."
  },
  {
    q: "Do you provide photo albums or prints?",
    a: "Yes! Premium photobooks and printed albums are available as add-ons for wedding packages. All clients receive high-resolution digital downloads that are perfect for printing at any size."
  },
  {
    q: "What happens if it rains on the day of the shoot?",
    a: "For outdoor portrait and lifestyle sessions, we can reschedule at no extra charge if the weather is unsuitable. For weddings, I always have a backup plan and the skill to work with any lighting conditions — rain can actually create beautiful, dramatic shots!"
  },
  {
    q: "How many photos will I receive?",
    a: "Portrait sessions typically include 30–60 fully edited images. Wedding packages include 300–600+ edited photos depending on the package. All photos are professionally retouched and colour graded before delivery."
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="faq-root animate-fade-in">

      {/* Header */}
      <div className="faq-header">
        <span className="faq-tag">Common Questions</span>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-desc">
          Everything you need to know before booking your session.
        </p>
      </div>

      {/* FAQ List */}
      <div className="faq-list">
        {FAQS.map((item, i) => (
          <div
            key={i}
            className={`faq-item ${open === i ? "faq-open" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => toggle(i)}
              aria-expanded={open === i}
            >
              <span className="faq-q-text">{item.q}</span>
              <span className="faq-icon">
                <svg
                  width="18" height="18" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2.5"
                  style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </button>
            <div className={`faq-answer-wrap ${open === i ? "faq-answer-open" : ""}`}>
              <p className="faq-answer">{item.a}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="faq-cta">
        <p className="faq-cta-text">Still have a question?</p>
        <Link href="/contact" className="faq-cta-btn">Get in Touch</Link>
      </div>

      <style jsx>{`
        .faq-root {
          padding: 90px 4%;
          max-width: 860px;
          margin: 0 auto;
        }

        /* Header */
        .faq-header { text-align: center; margin-bottom: 56px; }
        .faq-tag {
          display: inline-block;
          background: rgba(212,175,55,0.08);
          border: 1px solid rgba(212,175,55,0.22);
          color: var(--accent);
          padding: 6px 18px;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        /* List */
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 56px;
        }

        /* Item */
        .faq-item {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.3s ease;
        }
        .faq-open {
          border-color: rgba(212,175,55,0.25);
          background: rgba(212,175,55,0.03);
        }

        /* Question button */
        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 22px 24px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          min-height: 44px;
        }
        .faq-q-text {
          font-size: 0.97rem;
          font-weight: 600;
          color: rgba(255,255,255,0.85);
          line-height: 1.5;
          letter-spacing: 0.2px;
        }
        .faq-open .faq-q-text { color: #fff; }
        .faq-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.5);
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        .faq-open .faq-icon {
          background: rgba(212,175,55,0.12);
          border-color: rgba(212,175,55,0.3);
          color: var(--accent);
        }

        /* Answer */
        .faq-answer-wrap {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }
        .faq-answer-open {
          max-height: 300px;
        }
        .faq-answer {
          padding: 0 24px 22px;
          font-size: 0.92rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.8;
          margin: 0;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 16px;
        }

        /* CTA */
        .faq-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          padding: 32px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          text-align: center;
        }
        .faq-cta-text {
          font-size: 0.97rem;
          color: rgba(255,255,255,0.45);
          margin: 0;
        }
        .faq-cta-btn {
          background: var(--accent);
          color: #000;
          padding: 11px 28px;
          border-radius: 50px;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .faq-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(212,175,55,0.35);
        }

        /* Responsive */
        @media (max-width: 640px) {
          .faq-root { padding: 60px 5%; }
          .faq-question { padding: 18px 16px; }
          .faq-answer { padding: 0 16px 18px; padding-top: 14px; }
          .faq-q-text { font-size: 0.9rem; }
          .faq-cta { flex-direction: column; padding: 24px 16px; }
        }
      `}</style>
    </section>
  );
}
