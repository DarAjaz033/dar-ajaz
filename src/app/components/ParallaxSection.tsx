"use client";
import { ArrowRight } from "lucide-react";

export default function ParallaxSection() {
  return (
    <section className="parallax-section">
      <div className="parallax-bg" />
      <div className="parallax-overlay" />
      <div className="parallax-content">
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.65rem",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
          }}
        >
          <span style={{ width: "30px", height: "1px", background: "var(--color-accent)", display: "inline-block" }} />
          Bespoke Service
        </div>
        <h2>
          Design Your <em>Dream</em><br />Living Space
        </h2>
        <p>
          Book a complimentary consultation with our interior design team. 
          We&apos;ll help you select, customise, and place furniture that perfectly 
          suits your space and lifestyle.
        </p>
        <a href="#contact" className="btn-primary" style={{ margin: "0 auto" }}>
          Book Free Consultation <ArrowRight size={14} />
        </a>
      </div>
    </section>
  );
}
