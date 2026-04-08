"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, Award, Leaf, Truck, HeartHandshake } from "lucide-react";

export default function AboutSection() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateX(0)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" id="about">
      {/* Image Side */}
      <div
        className="about-image-side"
        ref={leftRef}
        style={{
          opacity: 0,
          transform: "translateX(-30px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=900&q=80"
          alt="Dar Ajaz craftsmanship"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* Floating stat card */}
        <div className="about-image-overlay">
          <div className="about-stat-number">15+</div>
          <div className="about-stat-label">Years of Artisanal Excellence</div>
          <div
            style={{
              marginTop: "16px",
              paddingTop: "16px",
              borderTop: "1px solid var(--color-border)",
            }}
          >
            <div className="about-stat-number" style={{ fontSize: "2rem" }}>2,400+</div>
            <div className="about-stat-label">Unique Furniture Pieces</div>
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div
        className="about-content-side"
        ref={rightRef}
        style={{
          opacity: 0,
          transform: "translateX(30px)",
          transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
        }}
      >
        <div className="section-label" style={{ color: "var(--color-accent)" }}>
          <span style={{ background: "var(--color-accent)", width: "30px", height: "1px", display: "inline-block", marginRight: "12px" }} />
          Our Story
        </div>
        <h2 className="section-title" style={{ color: "#fff", marginBottom: "24px" }}>
          The Art of <em>Fine</em><br />Living
        </h2>
        <p className="section-desc" style={{ color: "rgba(255,255,255,0.6)", maxWidth: "100%" }}>
          Founded with a passion for exceptional craftsmanship, Dar Ajaz has been 
          transforming UAE homes and hospitality spaces with furniture that transcends 
          trends. We source only the finest sustainable materials — solid teak, 
          premium leather, Italian marble — and pair them with master artisans who 
          bring decades of expertise to every joint, finish, and detail.
        </p>

        <div className="about-features">
          {[
            {
              icon: <Award size={18} strokeWidth={1.5} />,
              title: "Premium Craftsmanship",
              desc: "Every piece handcrafted to exacting standards by master artisans with decades of expertise.",
            },
            {
              icon: <Leaf size={18} strokeWidth={1.5} />,
              title: "Sustainably Sourced",
              desc: "We use only certified sustainable timber and eco-conscious materials for a greener future.",
            },
            {
              icon: <Truck size={18} strokeWidth={1.5} />,
              title: "White Glove Delivery",
              desc: "Free delivery and professional installation across all UAE emirates.",
            },
            {
              icon: <HeartHandshake size={18} strokeWidth={1.5} />,
              title: "Bespoke Service",
              desc: "Custom dimensions, finishes, and fabrics. Your vision, our craft.",
            },
          ].map((f) => (
            <div key={f.title} className="about-feature">
              <div
                style={{
                  color: "var(--color-accent)",
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {f.icon}
                <span className="about-feature-title">{f.title}</span>
              </div>
              <p className="about-feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          style={{
            marginTop: "40px",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            color: "var(--color-accent)",
            fontFamily: "var(--font-body)",
            fontSize: "0.68rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderBottom: "1px solid var(--color-accent)",
            paddingBottom: "4px",
            transition: "opacity 0.3s",
          }}
        >
          Book a Showroom Visit <ArrowRight size={13} />
        </a>
      </div>
    </section>
  );
}
