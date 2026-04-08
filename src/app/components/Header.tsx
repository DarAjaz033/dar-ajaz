"use client";
import { useState, useEffect } from "react";
import { Search, ShoppingBag, Heart, Menu, X } from "lucide-react";

interface HeaderProps {
  cartCount?: number;
  onCartOpen?: () => void;
  onSearchOpen?: () => void;
}

export default function Header({ cartCount = 0, onCartOpen, onSearchOpen }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Collections", href: "#collections" },
    { label: "Living", href: "#living" },
    { label: "Dining", href: "#dining" },
    { label: "Bedroom", href: "#bedroom" },
    { label: "Outdoor", href: "#outdoor" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <span>✦ Complimentary delivery across UAE on orders above Dhs. 2,000 &nbsp;|&nbsp; Bespoke furniture consultations available ✦</span>
      </div>

      {/* Main Header */}
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-inner">
          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>

          {/* Nav Left */}
          <nav aria-label="Main navigation">
            <ul className="nav-links">
              {navItems.slice(0, 3).map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logo */}
          <a href="/" className="header-logo">
            Dar <span>Ajaz</span>
          </a>

          {/* Nav Right + Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "36px" }}>
            <nav aria-label="Secondary navigation">
              <ul className="nav-links">
                {navItems.slice(3).map((item) => (
                  <li key={item.label}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header-actions">
              <button onClick={onSearchOpen} aria-label="Search">
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button aria-label="Wishlist">
                <Heart size={18} strokeWidth={1.5} />
              </button>
              <button
                onClick={onCartOpen}
                aria-label={`Cart (${cartCount} items)`}
                style={{ position: "relative" }}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-8px",
                      right: "-8px",
                      background: "var(--color-accent)",
                      color: "var(--color-dark)",
                      borderRadius: "50%",
                      width: "18px",
                      height: "18px",
                      fontSize: "0.6rem",
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
        <button
          style={{
            position: "absolute",
            top: "28px",
            right: "28px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--color-dark)",
          }}
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} strokeWidth={1.5} />
        </button>
        <a href="/" style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "var(--color-accent)", marginBottom: "8px", letterSpacing: "0.08em" }}>
          Dar Ajaz
        </a>
        {navItems.map((item) => (
          <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)}>
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
