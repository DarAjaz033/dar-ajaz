"use client";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    label: "Featured",
    title: "Living Room Collection",
    desc: "Sophisticated sofas, armchairs & coffee tables",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=80",
    span: 2,
    href: "#living",
  },
  {
    id: 2,
    label: "New Arrivals",
    title: "Dining Essentials",
    desc: "Tables & chairs for every occasion",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
    span: 1,
    href: "#dining",
  },
  {
    id: 3,
    label: "Bestseller",
    title: "Bedroom Sanctuary",
    desc: "Beds, wardrobes & bedside tables",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    span: 1,
    href: "#bedroom",
  },
  {
    id: 4,
    label: "Exclusive",
    title: "Outdoor Living",
    desc: "Weather-resistant luxury for your exterior",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    span: 1,
    href: "#outdoor",
  },
];

export default function CategoriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".category-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = "translateY(0)";
              }, i * 120);
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
    <section className="section" id="collections">
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "48px",
        }}
      >
        <div>
          <div className="section-label">Explore</div>
          <h2 className="section-title">
            Our <em>Collections</em>
          </h2>
        </div>
        <a
          href="#"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.68rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--color-dark)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            borderBottom: "1px solid var(--color-dark)",
            paddingBottom: "4px",
            transition: "color 0.3s, border-color 0.3s",
          }}
        >
          View All <ArrowRight size={13} />
        </a>
      </div>

      {/* Grid */}
      <div className="categories-grid" ref={sectionRef}>
        {categories.map((cat, i) => (
          <a
            key={cat.id}
            href={cat.href}
            className="category-card"
            style={{
              gridColumn: cat.span > 1 ? `span ${cat.span}` : undefined,
              opacity: 0,
              transform: "translateY(24px)",
              transition: `opacity 0.7s ease, transform 0.7s ease`,
              textDecoration: "none",
            }}
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="category-card-img"
              loading={i === 0 ? "eager" : "lazy"}
            />
            <div className="category-card-overlay" />
            <div className="category-card-content">
              <div className="category-card-label">{cat.label}</div>
              <h3 className="category-card-title">{cat.title}</h3>
              <div className="category-card-link">
                Shop Now <ArrowRight size={12} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
