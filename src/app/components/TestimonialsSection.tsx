"use client";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    text: "Dar Ajaz transformed our villa completely. The quality of their teak dining table is unparalleled — it's been 3 years and it still looks brand new. The craftsmanship truly speaks for itself.",
    author: "Sarah Al Mansoori",
    location: "Dubai Hills Estate",
    rating: 5,
  },
  {
    id: 2,
    text: "I was looking for a statement sofa for my majlis and found exactly what I needed. The team was incredibly helpful with customisation, and delivery was seamless. Highly recommend.",
    author: "Ahmed Al Rashidi",
    location: "Abu Dhabi",
    rating: 5,
  },
  {
    id: 3,
    text: "The bespoke wardrobe they designed for our master bedroom is simply stunning. Perfect attention to detail, beautiful materials, and it fits the space perfectly. Worth every dirham.",
    author: "Priya Sharma",
    location: "Palm Jumeirah",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".testimonial-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = "translateY(0)";
              }, i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="testimonials-section">
      <div className="section-label" style={{ justifyContent: "center" }}>
        Client Stories
      </div>
      <h2 className="section-title" style={{ textAlign: "center" }}>
        What Our <em>Clients Say</em>
      </h2>
      <p
        className="section-desc"
        style={{ margin: "0 auto", textAlign: "center" }}
      >
        Hundreds of UAE families and businesses trust Dar Ajaz to furnish 
        their most cherished spaces.
      </p>

      <div className="testimonials-grid" ref={sectionRef}>
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="testimonial-card"
            style={{
              opacity: 0,
              transform: "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div className="testimonial-quote">"</div>
            <div className="testimonial-stars">{"★".repeat(t.rating)}</div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <strong>{t.author}</strong>
              {t.location}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
