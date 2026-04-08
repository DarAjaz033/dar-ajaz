"use client";
import { useEffect, useRef } from "react";
import { ShieldCheck, Palette, Repeat, Clock } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "10-Year Warranty",
    desc: "Every piece comes with our comprehensive decade-long warranty, covering structural integrity and finish quality.",
  },
  {
    icon: Palette,
    title: "Fully Customisable",
    desc: "Choose your fabric, finish, dimension, and configuration. Every piece can be made uniquely yours.",
  },
  {
    icon: Repeat,
    title: "Easy Returns",
    desc: "Not completely in love? We offer hassle-free returns within 30 days, no questions asked.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "We commit to delivery timelines and honour them. White glove installation included at no extra cost.",
  },
];

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".why-card");
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
    <section className="why-section">
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "0" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Why Dar Ajaz
          </div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            The <em>Dar Ajaz</em> Promise
          </h2>
          <p
            className="section-desc"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            We believe great furniture is more than aesthetics — it's about quality 
            you can feel, service you can trust, and a relationship that lasts.
          </p>
        </div>

        <div className="why-grid" ref={sectionRef}>
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="why-card"
                style={{
                  opacity: 0,
                  transform: "translateY(20px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                }}
              >
                <div className="why-icon">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="why-title">{f.title}</h3>
                <p className="why-desc">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
