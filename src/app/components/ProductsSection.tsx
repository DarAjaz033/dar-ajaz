"use client";
import { useState, useEffect, useRef } from "react";
import { Heart, ShoppingBag, Eye } from "lucide-react";

const allProducts = [
  {
    id: 1,
    name: "Nakano Lounge Chair",
    material: "Premium Teak & Linen",
    price: 4800,
    originalPrice: null,
    badge: "New",
    category: "living",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
  },
  {
    id: 2,
    name: "Meridian Dining Table",
    material: "Solid Oak · 180cm",
    price: 8500,
    originalPrice: 11000,
    badge: "Sale",
    category: "dining",
    image: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=600&q=80",
  },
  {
    id: 3,
    name: "Serene Bed Frame",
    material: "Walnut Wood · King",
    price: 12400,
    originalPrice: null,
    badge: null,
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=600&q=80",
  },
  {
    id: 4,
    name: "Palermo Sofa",
    material: "Italian Leather · 3-Seat",
    price: 18900,
    originalPrice: null,
    badge: "Bestseller",
    category: "living",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  },
  {
    id: 5,
    name: "Azure Outdoor Set",
    material: "Teak & Rope Weave",
    price: 7200,
    originalPrice: 9500,
    badge: "Sale",
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80",
  },
  {
    id: 6,
    name: "Marble Console Table",
    material: "Carrara Marble & Brass",
    price: 6800,
    originalPrice: null,
    badge: "New",
    category: "living",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
  },
  {
    id: 7,
    name: "Alto Dining Chair",
    material: "Saddle Leather · Set of 2",
    price: 3600,
    originalPrice: null,
    badge: null,
    category: "dining",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80",
  },
  {
    id: 8,
    name: "Zen Wardrobe",
    material: "Oak & Smoked Glass",
    price: 15500,
    originalPrice: null,
    badge: "Exclusive",
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80",
  },
];

const tabs = ["All", "Living", "Dining", "Bedroom", "Outdoor"];

interface ProductsSectionProps {
  onAddToCart?: (product: { id: number; name: string; price: number }) => void;
}

export default function ProductsSection({ onAddToCart }: ProductsSectionProps) {
  const [activeTab, setActiveTab] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeTab === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === activeTab.toLowerCase());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".product-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = "translateY(0)";
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [activeTab]);

  return (
    <section className="products-section" id="living">
      <div className="products-header">
        <div>
          <div className="section-label">Curated for You</div>
          <h2 className="section-title">
            Featured <em>Pieces</em>
          </h2>
        </div>
        <div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "#888", fontWeight: 300, maxWidth: "320px", lineHeight: 1.8, textAlign: "right" }}>
            Each piece in our collection is selected for its exceptional quality, 
            sustainability, and timeless design.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
        <div className="filter-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`filter-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid" ref={sectionRef}>
        {filtered.map((product) => (
          <div
            key={product.id}
            className="product-card"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
          >
            <div className="product-card-image-wrap">
              <img
                src={product.image}
                alt={product.name}
                className="product-card-img"
                loading="lazy"
              />
              {product.badge && (
                <span className={`product-badge ${product.badge === "Sale" ? "sale" : ""}`}>
                  {product.badge}
                </span>
              )}
              <div className="product-card-actions">
                <button
                  aria-label="Add to wishlist"
                  style={{
                    background: "none",
                    border: "1px solid rgba(255,255,255,0.3)",
                    color: "#fff",
                    padding: "10px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s",
                    flexShrink: 0,
                  }}
                >
                  <Heart size={14} strokeWidth={1.5} />
                </button>
                <button
                  className="primary-btn"
                  onClick={() => onAddToCart?.({ id: product.id, name: product.name, price: product.price })}
                >
                  Add to Cart
                </button>
                <button
                  aria-label="Quick view"
                  style={{
                    background: "none",
                    border: "1px solid rgba(255,255,255,0.3)",
                    color: "#fff",
                    padding: "10px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s",
                    flexShrink: 0,
                  }}
                >
                  <Eye size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>
            <div className="product-card-info">
              <h3 className="product-card-name">{product.name}</h3>
              <div className="product-card-material">{product.material}</div>
              <div className="product-card-price">
                Dhs. {product.price.toLocaleString()}
                {product.originalPrice && (
                  <span className="original">Dhs. {product.originalPrice.toLocaleString()}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All CTA */}
      <div style={{ textAlign: "center", marginTop: "56px" }}>
        <a href="#" className="btn-primary" style={{ display: "inline-flex" }}>
          View All Products
        </a>
      </div>
    </section>
  );
}
