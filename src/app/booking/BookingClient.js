"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import AvailabilityCalendar from "../components/AvailabilityCalendar";

const SERVICE_ID  = "service_mqgvptj";
const TEMPLATE_ID = "template_xfytr0h";
const PUBLIC_KEY  = "4adMArwJqy9jB6J5D";

const SERVICES = [
  {
    id: "wedding",
    icon: "",
    title: "Wedding Photography",
    desc: "Full day or half day wedding coverage",
    packages: [
      { label: "Basic – Rs. 100,000", value: "Basic (Rs. 100,000)" },
      { label: "Standard – Rs. 125,000", value: "Standard (Rs. 125,000)" },
      { label: "Premium – Rs. 150,000", value: "Premium (Rs. 150,000)" },
    ],
  },
  {
    id: "portrait",
    icon: "",
    title: "Portrait Session",
    desc: "Studio or outdoor portrait photography",
    packages: [{ label: "Portrait Session – Rs. 8,000", value: "Portrait Session (Rs. 8,000)" }],
  },
  {
    id: "event",
    icon: "",
    title: "Event Coverage",
    desc: "Up to 4 hours of professional event photography",
    packages: [{ label: "Event Coverage – Rs. 25,000", value: "Event Coverage (Rs. 25,000)" }],
  },
  {
    id: "outdoor",
    icon: "",
    title: "Outdoor / Lifestyle",
    desc: "Natural lifestyle photography in scenic locations",
    packages: [{ label: "Outdoor/Lifestyle – Rs. 12,000", value: "Outdoor/Lifestyle (Rs. 12,000)" }],
  },
];

const STEPS = ["Service", "Details", "Your Info", "Confirm"];

export default function BookingClient() {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [form, setForm] = useState({
    date: "",
    time: "",
    location: "",
    notes: "",
    name: "",
    phone: "",
    email: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const searchParams = useSearchParams();

  // Pre-fill date from URL query param (e.g. /booking?date=2025-12-25)
  useEffect(() => {
    const urlDate = searchParams.get('date');
    if (urlDate) {
      setForm((prev) => ({ ...prev, date: urlDate }));
    }
  }, [searchParams]);


  const service = SERVICES.find((s) => s.id === selectedService);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const canNext = () => {
    if (step === 0) return !!selectedService && !!selectedPackage;
    if (step === 1) return !!form.date && !!form.location;
    if (step === 2) return !!form.name && !!form.phone && !!form.email;
    return true;
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          service: service?.title,
          package: selectedPackage,
          date: form.date,
          time: form.time || "Flexible",
          location: form.location,
          notes: form.notes || "None",
          message: ` NEW BOOKING REQUEST\n\nService: ${service?.title}\nPackage: ${selectedPackage}\nDate: ${form.date}\nTime: ${form.time || "Flexible"}\nLocation: ${form.location}\nNotes: ${form.notes || "None"}\n\nClient: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}`,
        },
        PUBLIC_KEY
      );
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or contact via WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bk-root">
        <div className="bk-success animate-fade-in">
          <div className="bk-success-icon"></div>
          <h1 className="bk-success-title">Booking Request Sent!</h1>
          <p className="bk-success-sub">
            Thank you <strong>{form.name}</strong>! Your booking request for{" "}
            <strong>{service?.title}</strong> on <strong>{form.date}</strong> has been received.
            <br /><br />
            I'll get back to you within <strong>24 hours</strong> to confirm your session.
          </p>
          <div className="bk-success-details">
            <div className="bk-success-row"><span>Service</span><strong>{service?.title}</strong></div>
            <div className="bk-success-row"><span>Package</span><strong>{selectedPackage}</strong></div>
            <div className="bk-success-row"><span>Date</span><strong>{form.date}</strong></div>
            <div className="bk-success-row"><span>Location</span><strong>{form.location}</strong></div>
          </div>
          <div className="bk-success-btns">
            <Link href="/" className="bk-btn-primary">Back to Home</Link>
            <a href="https://wa.me/94704574568" target="_blank" rel="noopener noreferrer" className="bk-btn-secondary">
              WhatsApp Me
            </a>
          </div>
        </div>
        <style jsx>{successStyles}</style>
      </div>
    );
  }

  return (
    <div className="bk-root">

      {/* ── Hero ── */}
      <section className="bk-hero">
        <div className="bk-hero-glow" />
        <div className="bk-hero-content animate-fade-in">
          <span className="bk-eyebrow">
            <span className="bk-eyebrow-dot" />
            Quick &amp; Easy · Secure Booking
          </span>
          <h1 className="bk-hero-title">Book Your <span>Session</span></h1>
          <p className="bk-hero-sub">
            Fill in the form below and I'll confirm your booking within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Availability Calendar ── */}
      <section style={{ padding: '40px 4% 0', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(212,175,55,0.1)',
            border: '1px solid rgba(212,175,55,0.25)',
            color: 'var(--accent)',
            padding: '5px 16px',
            borderRadius: '50px',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '10px',
          }}>Availability</span>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '6px' }}>
            Check Available Dates
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
            Click any green date to pre-fill it in the booking form below.
          </p>
        </div>
        <AvailabilityCalendar compact />
      </section>

      {/* ── Stepper ── */}
      <div className="bk-stepper-wrap">
        <div className="bk-stepper">
          {STEPS.map((s, i) => (
            <div key={s} className={`bk-step ${i <= step ? "bk-step-done" : ""} ${i === step ? "bk-step-active" : ""}`}>
              <div className="bk-step-circle">
                {i < step ? "✓" : i + 1}
              </div>
              <span className="bk-step-label">{s}</span>
              {i < STEPS.length - 1 && <div className={`bk-step-line ${i < step ? "bk-line-done" : ""}`} />}
            </div>
          ))}
        </div>
      </div>

      {/* ── Form Card ── */}
      <div className="bk-form-wrap">
        <div className="bk-card animate-fade-in">

          {/* ── STEP 0: Service Selection ── */}
          {step === 0 && (
            <div className="bk-step-body">
              <h2 className="bk-step-title">Choose Your Service</h2>
              <p className="bk-step-desc">Select the type of photography session you'd like to book.</p>
              <div className="bk-services-grid">
                {SERVICES.map((svc) => (
                  <button
                    key={svc.id}
                    className={`bk-service-card ${selectedService === svc.id ? "bk-service-selected" : ""}`}
                    onClick={() => { setSelectedService(svc.id); setSelectedPackage(svc.packages[0].value); }}
                  >
                    <span className="bk-svc-icon">{svc.icon}</span>
                    <span className="bk-svc-title">{svc.title}</span>
                    <span className="bk-svc-desc">{svc.desc}</span>
                  </button>
                ))}
              </div>

              {selectedService && service?.packages.length > 1 && (
                <div className="bk-pkg-wrap">
                  <label className="bk-label">Select Package</label>
                  <div className="bk-pkg-grid">
                    {service.packages.map((pkg) => (
                      <button
                        key={pkg.value}
                        className={`bk-pkg-btn ${selectedPackage === pkg.value ? "bk-pkg-selected" : ""}`}
                        onClick={() => setSelectedPackage(pkg.value)}
                      >
                        {pkg.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── STEP 1: Date & Details ── */}
          {step === 1 && (
            <div className="bk-step-body">
              <h2 className="bk-step-title">Session Details</h2>
              <p className="bk-step-desc">Tell me when and where you'd like your session.</p>
              <div className="bk-fields">
                <div className="bk-field">
                  <label className="bk-label">Preferred Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="bk-input"
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div className="bk-field">
                  <label className="bk-label">Preferred Time</label>
                  <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className="bk-input"
                  />
                </div>
                <div className="bk-field bk-field-full">
                  <label className="bk-label">Location / Venue *</label>
                  <input
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="e.g. Kandy, Royal Palace Hotel, Yala National Park..."
                    className="bk-input"
                  />
                </div>
                <div className="bk-field bk-field-full">
                  <label className="bk-label">Additional Notes</label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any special requirements, style preferences, or questions..."
                    className="bk-input bk-textarea"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 2: Personal Info ── */}
          {step === 2 && (
            <div className="bk-step-body">
              <h2 className="bk-step-title">Your Information</h2>
              <p className="bk-step-desc">How can I reach you to confirm the booking?</p>
              <div className="bk-fields">
                <div className="bk-field bk-field-full">
                  <label className="bk-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="bk-input"
                  />
                </div>
                <div className="bk-field">
                  <label className="bk-label">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+94 7X XXX XXXX"
                    className="bk-input"
                  />
                </div>
                <div className="bk-field">
                  <label className="bk-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bk-input"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 3: Confirmation ── */}
          {step === 3 && (
            <div className="bk-step-body">
              <h2 className="bk-step-title">Confirm Your Booking</h2>
              <p className="bk-step-desc">Please review your details before submitting.</p>
              <div className="bk-summary">
                <div className="bk-summary-row">
                  <span>Service</span><strong>{service?.icon} {service?.title}</strong>
                </div>
                <div className="bk-summary-row">
                  <span>Package</span><strong>{selectedPackage}</strong>
                </div>
                <div className="bk-summary-row">
                  <span>Date</span><strong>{form.date}</strong>
                </div>
                <div className="bk-summary-row">
                  <span>Time</span><strong>{form.time || "Flexible"}</strong>
                </div>
                <div className="bk-summary-row">
                  <span>Location</span><strong>{form.location}</strong>
                </div>
                {form.notes && (
                  <div className="bk-summary-row">
                    <span>Notes</span><strong>{form.notes}</strong>
                  </div>
                )}
                <div className="bk-summary-divider" />
                <div className="bk-summary-row">
                  <span>Name</span><strong>{form.name}</strong>
                </div>
                <div className="bk-summary-row">
                  <span>Phone</span><strong>{form.phone}</strong>
                </div>
                <div className="bk-summary-row">
                  <span>Email</span><strong>{form.email}</strong>
                </div>
              </div>
              <p className="bk-note">
                After submitting, I will confirm your booking within <strong>24 hours</strong> via phone or email.
                A <strong>30% advance deposit</strong> is required to secure your date.
              </p>
              {error && <p className="bk-error">{error}</p>}
            </div>
          )}

          {/* ── Navigation Buttons ── */}
          <div className="bk-nav">
            {step > 0 && (
              <button className="bk-btn-back" onClick={() => setStep((s) => s - 1)}>
                ← Back
              </button>
            )}
            {step < 3 ? (
              <button
                className={`bk-btn-next ${!canNext() ? "bk-btn-disabled" : ""}`}
                onClick={() => canNext() && setStep((s) => s + 1)}
                disabled={!canNext()}
              >
                Continue →
              </button>
            ) : (
              <button
                className="bk-btn-submit"
                onClick={handleSubmit}
                disabled={submitting}
              >
                {submitting ? "Sending…" : " Submit Booking Request"}
              </button>
            )}
          </div>

        </div>
      </div>

      <style jsx>{mainStyles}</style>
    </div>
  );
}

const mainStyles = `
  .bk-root { background: var(--bg); color: var(--text); min-height: 100vh; }

  /* Hero */
  .bk-hero {
    position: relative;
    padding: 120px 4% 70px;
    text-align: center;
    overflow: hidden;
    background: linear-gradient(135deg, #0a0a0c 0%, #111108 60%, #0a0a0c 100%);
  }
  .bk-hero-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 60% 50% at 50% 40%, rgba(212,175,55,0.08) 0%, transparent 70%);
    pointer-events: none;
  }
  .bk-hero-content { position: relative; z-index: 2; max-width: 600px; margin: 0 auto; }
  .bk-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(212,175,55,0.08);
    border: 1px solid rgba(212,175,55,0.2);
    border-radius: 50px;
    padding: 8px 20px;
    font-size: 0.78rem;
    letter-spacing: 1.5px;
    color: rgba(212,175,55,0.9);
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 24px;
  }
  .bk-eyebrow-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: #d4af37;
    box-shadow: 0 0 8px rgba(212,175,55,0.8);
    animation: pulse-gold 2s infinite;
    flex-shrink: 0;
  }
  @keyframes pulse-gold {
    0%,100% { box-shadow: 0 0 6px rgba(212,175,55,0.8); }
    50% { box-shadow: 0 0 14px rgba(212,175,55,1); }
  }
  .bk-hero-title {
    font-size: clamp(2rem, 5vw, 3.8rem);
    font-weight: 200;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #fff;
    margin: 0 0 16px;
    line-height: 1.1;
  }
  .bk-hero-title span { color: var(--accent); font-weight: 700; }
  .bk-hero-sub { color: rgba(255,255,255,0.5); font-size: 0.95rem; line-height: 1.7; margin: 0; }

  /* Stepper */
  .bk-stepper-wrap {
    padding: 40px 4% 0;
    display: flex;
    justify-content: center;
  }
  .bk-stepper {
    display: flex;
    align-items: center;
    gap: 0;
    max-width: 700px;
    width: 100%;
  }
  .bk-step {
    display: flex;
    align-items: center;
    flex: 1;
    position: relative;
  }
  .bk-step-circle {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(255,255,255,0.06);
    border: 2px solid rgba(255,255,255,0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.82rem;
    font-weight: 700;
    color: rgba(255,255,255,0.35);
    flex-shrink: 0;
    transition: all 0.3s ease;
    z-index: 1;
  }
  .bk-step-active .bk-step-circle {
    background: var(--accent);
    border-color: var(--accent);
    color: #000;
    box-shadow: 0 0 16px rgba(212,175,55,0.45);
  }
  .bk-step-done .bk-step-circle {
    background: rgba(212,175,55,0.15);
    border-color: var(--accent);
    color: var(--accent);
  }
  .bk-step-label {
    font-size: 0.72rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.3);
    margin-left: 10px;
    white-space: nowrap;
    font-weight: 600;
  }
  .bk-step-active .bk-step-label,
  .bk-step-done .bk-step-label { color: var(--accent); }
  .bk-step-line {
    flex: 1;
    height: 1px;
    background: rgba(255,255,255,0.1);
    margin: 0 12px;
    transition: background 0.3s ease;
  }
  .bk-line-done { background: var(--accent); }

  /* Form Card */
  .bk-form-wrap {
    padding: 40px 4% 80px;
    display: flex;
    justify-content: center;
  }
  .bk-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 24px;
    padding: 48px 40px;
    width: 100%;
    max-width: 780px;
  }
  .bk-step-body { margin-bottom: 40px; }
  .bk-step-title {
    font-size: 1.6rem;
    font-weight: 700;
    color: #fff;
    margin: 0 0 10px;
    letter-spacing: 0.3px;
  }
  .bk-step-desc {
    color: rgba(255,255,255,0.45);
    font-size: 0.92rem;
    margin: 0 0 32px;
    line-height: 1.6;
  }

  /* Service Cards */
  .bk-services-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 32px;
  }
  .bk-service-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px;
    padding: 24px;
    cursor: pointer;
    transition: all 0.25s ease;
    text-align: left;
  }
  .bk-service-card:hover {
    border-color: rgba(212,175,55,0.35);
    background: rgba(212,175,55,0.04);
    transform: translateY(-3px);
  }
  .bk-service-selected {
    border-color: var(--accent) !important;
    background: rgba(212,175,55,0.07) !important;
    box-shadow: 0 0 0 1px var(--accent), 0 8px 24px rgba(0,0,0,0.25) !important;
  }
  .bk-svc-icon { font-size: 1.8rem; }
  .bk-svc-title {
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.3px;
  }
  .bk-svc-desc {
    font-size: 0.82rem;
    color: rgba(255,255,255,0.4);
    line-height: 1.5;
  }

  /* Package Buttons */
  .bk-pkg-wrap { margin-top: 8px; }
  .bk-label {
    display: block;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.45);
    margin-bottom: 12px;
  }
  .bk-pkg-grid { display: flex; flex-direction: column; gap: 10px; }
  .bk-pkg-btn {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 14px 20px;
    color: rgba(255,255,255,0.65);
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    text-align: left;
    transition: all 0.2s ease;
  }
  .bk-pkg-btn:hover { border-color: var(--accent); color: #fff; }
  .bk-pkg-selected {
    border-color: var(--accent) !important;
    background: rgba(212,175,55,0.08) !important;
    color: var(--accent) !important;
  }

  /* Fields */
  .bk-fields {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .bk-field { display: flex; flex-direction: column; gap: 8px; }
  .bk-field-full { grid-column: 1 / -1; }
  .bk-input {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 14px 18px;
    color: #fff;
    font-size: 0.92rem;
    outline: none;
    transition: border-color 0.2s ease;
    font-family: inherit;
    width: 100%;
    box-sizing: border-box;
    color-scheme: dark;
  }
  .bk-input:focus { border-color: var(--accent); }
  .bk-input::placeholder { color: rgba(255,255,255,0.25); }
  .bk-textarea { resize: vertical; min-height: 110px; }

  /* Summary */
  .bk-summary {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 24px;
  }
  .bk-summary-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
  }
  .bk-summary-row span {
    font-size: 0.82rem;
    color: rgba(255,255,255,0.4);
    letter-spacing: 0.5px;
    flex-shrink: 0;
    min-width: 80px;
  }
  .bk-summary-row strong {
    font-size: 0.92rem;
    color: #fff;
    text-align: right;
    font-weight: 600;
  }
  .bk-summary-divider {
    height: 1px;
    background: rgba(255,255,255,0.07);
    margin: 4px 0;
  }
  .bk-note {
    font-size: 0.85rem;
    color: rgba(255,255,255,0.4);
    line-height: 1.7;
    background: rgba(212,175,55,0.05);
    border: 1px solid rgba(212,175,55,0.12);
    border-radius: 12px;
    padding: 16px 20px;
  }
  .bk-error {
    color: #ff6b6b;
    font-size: 0.88rem;
    margin-top: 12px;
    padding: 12px 16px;
    background: rgba(255,107,107,0.08);
    border: 1px solid rgba(255,107,107,0.2);
    border-radius: 10px;
  }

  /* Navigation */
  .bk-nav {
    display: flex;
    gap: 14px;
    justify-content: flex-end;
    padding-top: 8px;
    border-top: 1px solid rgba(255,255,255,0.06);
  }
  .bk-btn-back {
    background: transparent;
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 50px;
    padding: 13px 28px;
    color: rgba(255,255,255,0.6);
    font-size: 0.88rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .bk-btn-back:hover { border-color: rgba(255,255,255,0.35); color: #fff; }
  .bk-btn-next {
    background: var(--accent);
    border: none;
    border-radius: 50px;
    padding: 13px 36px;
    color: #000;
    font-size: 0.88rem;
    font-weight: 800;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .bk-btn-next:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(212,175,55,0.4); }
  .bk-btn-disabled {
    opacity: 0.35 !important;
    cursor: not-allowed !important;
    transform: none !important;
    box-shadow: none !important;
  }
  .bk-btn-submit {
    background: linear-gradient(135deg, #d4af37, #f0d060);
    border: none;
    border-radius: 50px;
    padding: 14px 40px;
    color: #000;
    font-size: 0.9rem;
    font-weight: 800;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .bk-btn-submit:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(212,175,55,0.45); }
  .bk-btn-submit:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

  /* Responsive */
  @media (max-width: 640px) {
    .bk-card { padding: 28px 20px; }
    .bk-services-grid { grid-template-columns: 1fr; }
    .bk-fields { grid-template-columns: 1fr; }
    .bk-stepper { overflow-x: auto; padding-bottom: 8px; }
    .bk-step-label { display: none; }
    .bk-nav { flex-direction: column-reverse; }
    .bk-btn-next, .bk-btn-submit, .bk-btn-back { width: 100%; text-align: center; }
  }
`;

const successStyles = `
  .bk-root { background: var(--bg); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 40px 4%; }
  .bk-success {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(212,175,55,0.2);
    border-radius: 24px;
    padding: 60px 48px;
    max-width: 580px;
    width: 100%;
    text-align: center;
    box-shadow: 0 0 60px rgba(212,175,55,0.08);
  }
  .bk-success-icon { font-size: 4rem; margin-bottom: 24px; }
  .bk-success-title { font-size: 2rem; font-weight: 700; color: var(--accent); margin: 0 0 16px; }
  .bk-success-sub { color: rgba(255,255,255,0.55); font-size: 0.95rem; line-height: 1.8; margin-bottom: 36px; }
  .bk-success-details {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px;
    padding: 20px 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 36px;
    text-align: left;
  }
  .bk-success-row { display: flex; justify-content: space-between; gap: 16px; }
  .bk-success-row span { font-size: 0.82rem; color: rgba(255,255,255,0.4); }
  .bk-success-row strong { font-size: 0.9rem; color: #fff; }
  .bk-success-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  .bk-btn-primary {
    background: var(--accent); color: #000;
    padding: 13px 32px; border-radius: 50px;
    font-size: 0.88rem; font-weight: 800;
    letter-spacing: 1px; text-decoration: none;
    transition: all 0.3s ease;
  }
  .bk-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(212,175,55,0.4); }
  .bk-btn-secondary {
    background: transparent; color: #fff;
    padding: 12px 32px; border-radius: 50px;
    border: 1px solid rgba(255,255,255,0.2);
    font-size: 0.88rem; font-weight: 600;
    text-decoration: none; letter-spacing: 1px;
    transition: all 0.3s ease;
  }
  .bk-btn-secondary:hover { border-color: var(--accent); color: var(--accent); }
`;
