"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    setTimeout(() => {
      el.style.transition = "opacity 1.2s ease, transform 1.2s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200);
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Background */}
      <div className="hero-bg" />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1800&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4,
        }}
      />
      <div className="hero-overlay" />

      {/* Decorative lines */}
      <div
        style={{
          position: "absolute",
          right: "8%",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          opacity: 0.25,
        }}
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            style={{
              width: "1px",
              height: `${20 + i * 8}px`,
              background: "#fff",
              marginLeft: `${i * 12}px`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-eyebrow animate-fadeIn delay-1">
          Luxury Furniture & Decor — UAE
        </div>
        <h1 className="hero-title" ref={titleRef}>
          Where <em>Craft</em><br />Meets<br />Elegance
        </h1>
        <p className="hero-subtitle animate-fadeInUp delay-3">
          Discover our curated collection of premium furniture, handcrafted 
          from the world's finest materials. Each piece is a testament 
          to artisanal excellence.
        </p>
        <div className="flex gap-4 animate-fadeInUp delay-4">
          <a href="#collections" className="btn-primary">
            Explore Collections <ArrowRight size={14} strokeWidth={2} />
          </a>
          <button className="btn-outline" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Play size={14} strokeWidth={2} fill="currentColor" /> Our Story
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(28,20,12,0.7)",
          backdropFilter: "blur(12px)",
          padding: "24px 40px",
          display: "flex",
          justifyContent: "center",
          gap: "80px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {[
          { num: "2,400+", label: "Products" },
          { num: "15+", label: "Years of Craft" },
          { num: "98%", label: "Client Satisfaction" },
          { num: "UAE's", label: "Finest Showroom" },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.6rem",
                color: "var(--color-accent)",
                lineHeight: 1,
                marginBottom: "6px",
                fontWeight: 300,
              }}
            >
              {stat.num}
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
