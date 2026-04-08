"use client";
import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="newsletter-section" id="contact">
      <div className="section-label" style={{ justifyContent: "center", color: "var(--color-accent)" }}>
        Stay Connected
      </div>

      {!submitted ? (
        <>
          <h2 className="newsletter-title">
            Discover <em>New Arrivals</em><br />Before Anyone Else
          </h2>
          <p className="newsletter-desc">
            Join our exclusive circle and receive early access to new collections, 
            private sale events, and interior design inspiration.
          </p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
            <button type="submit">
              Subscribe <ArrowRight size={13} style={{ display: "inline", marginLeft: "6px" }} />
            </button>
          </form>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              color: "rgba(255,255,255,0.25)",
              marginTop: "16px",
              letterSpacing: "0.06em",
            }}
          >
            No spam. Unsubscribe anytime. Your privacy is respected.
          </p>
        </>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
          <CheckCircle size={48} strokeWidth={1} color="var(--color-accent)" />
          <h2 className="newsletter-title" style={{ marginBottom: 0 }}>
            Thank You!
          </h2>
          <p className="newsletter-desc">
            You&apos;re now part of the Dar Ajaz family. Watch your inbox for exclusive content.
          </p>
        </div>
      )}
    </section>
  );
}
