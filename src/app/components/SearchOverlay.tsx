"use client";
import { useEffect, useRef } from "react";
import { X, Search } from "lucide-react";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const suggestions = [
  "Teak Dining Table",
  "Leather Sofa",
  "Outdoor Lounge Chair",
  "Marble Coffee Table",
  "Bedroom Collection",
];

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className={`search-overlay ${isOpen ? "open" : ""}`} role="dialog" aria-label="Search">
      <button className="search-close" onClick={onClose} aria-label="Close search">
        <X size={24} strokeWidth={1.5} />
      </button>

      <div className="search-input-wrap">
        <span className="search-label">Search Dar Ajaz</span>
        <div style={{ position: "relative" }}>
          <input
            ref={inputRef}
            type="text"
            className="search-input"
            placeholder="What are you looking for?"
            aria-label="Search products"
          />
          <Search
            size={24}
            strokeWidth={1}
            style={{
              position: "absolute",
              right: 0,
              bottom: "18px",
              color: "var(--color-accent)",
            }}
          />
        </div>

        <div style={{ marginTop: "32px" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.62rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#aaa",
              marginBottom: "16px",
            }}
          >
            Popular Searches
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {suggestions.map((s) => (
              <button
                key={s}
                style={{
                  background: "none",
                  border: "1px solid var(--color-border)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  color: "var(--color-mid)",
                  padding: "8px 18px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.borderColor = "var(--color-accent)";
                  (e.target as HTMLElement).style.color = "var(--color-accent)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.borderColor = "var(--color-border)";
                  (e.target as HTMLElement).style.color = "var(--color-mid)";
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
