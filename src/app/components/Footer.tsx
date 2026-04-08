import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        {/* Brand */}
        <div>
          <div className="footer-brand-name">
            Dar <span>Ajaz</span>
          </div>
          <p className="footer-brand-desc">
            Crafting extraordinary living spaces through the art of fine furniture. 
            Each piece tells a story of uncompromising craftsmanship, 
            sustainable materials, and timeless design — made for those who 
            appreciate the beauty of thoughtful living.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">
              <Instagram size={15} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook size={15} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Twitter/X">
              <Twitter size={15} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube size={15} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="footer-heading">Shop</h3>
          <ul className="footer-links">
            {["New Arrivals", "Living Room", "Dining Room", "Bedroom", "Outdoor", "Lighting", "Accessories", "Sale"].map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="footer-heading">Information</h3>
          <ul className="footer-links">
            {["Our Story", "Craftsmanship", "Sustainability", "Showroom", "Trade Programme", "Careers", "Press"].map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="footer-heading">Customer Care</h3>
          <ul className="footer-links">
            {["Contact Us", "Shipping & Delivery", "Returns & Exchanges", "Track Order", "Care Guide", "FAQ", "Privacy Policy"].map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "28px" }}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.62rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                marginBottom: "8px",
              }}
            >
              Showroom
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                color: "rgba(255,255,255,0.5)",
                fontWeight: 300,
                lineHeight: 1.8,
              }}
            >
              Dubai Design District<br />
              Building 6, D3<br />
              Dubai, UAE<br />
              <br />
              +971 4 XXX XXXX<br />
              hello@darajaz.ae
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {currentYear} Dar Ajaz — Premium Furniture & Home Decor. All rights reserved.
        </p>
        <div className="footer-payment">
          {["VISA", "MC", "AMEX", "Apple Pay", "Cash"].map((p) => (
            <span key={p} className="footer-payment-icon">{p}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
