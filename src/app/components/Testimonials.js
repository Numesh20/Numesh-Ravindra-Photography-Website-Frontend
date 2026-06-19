'use client';

const TESTIMONIALS = [
  {
    name: "Anu Karunathilaka",
    role: "Portrait Photography Client",
    review: "Numesh captured every beautiful moment of my special day perfectly. His eye for detail and ability to catch candid emotions is truly outstanding. I will treasure these photos forever!",
    rating: 5,
    initial: "A",
    color: "#d4af37",
  },
  {
    name: "Manavi Vihara",
    role: "Portrait Photography Client",
    review: "The portrait session was an amazing experience. Numesh made me feel so comfortable in front of the camera. The final photos were absolutely stunning — beyond my expectations!",
    rating: 5,
    initial: "M",
    color: "#e879f9",
  },
  {
    name: "Savindi Thathsara",
    role: "Outdoor Portrait Client",
    review: "I was amazed by how Numesh used natural lighting to create such magical photos. Every shot tells a story. Highly recommend him for portrait sessions!",
    rating: 5,
    initial: "S",
    color: "#22d3ee",
  },
  {
    name: "Amandi Rathnayake",
    role: "Photography Session Client",
    review: "Working with Numesh was an absolute pleasure. His creative vision and professional approach gave me photos that are truly one of a kind. Five stars without hesitation!",
    rating: 5,
    initial: "A",
    color: "#f97316",
  },
];

function StarRating({ count }) {
  return (
    <div className="testimonial-stars">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="star">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials-section animate-fade-in">
      <div className="testimonials-header">
        <h2 className="section-title">What Clients Say</h2>
        <p className="section-desc">Real words from real people who trusted me with their precious moments.</p>
      </div>

      <div className="testimonials-grid">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="testimonial-card">
            {/* Quote mark */}
            <div className="testimonial-quote-mark">"</div>

            {/* Stars */}
            <StarRating count={t.rating} />

            {/* Review text */}
            <p className="testimonial-text">{t.review}</p>

            {/* Client info */}
            <div className="testimonial-client">
              <div className="testimonial-avatar" style={{ background: t.color }}>
                {t.initial}
              </div>
              <div className="testimonial-client-info">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
