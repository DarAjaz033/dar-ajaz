export default function MarqueeSection() {
  const items = [
    "Solid Teak Wood",
    "Italian Marble",
    "Premium Leather",
    "Handwoven Fabrics",
    "Brushed Brass",
    "Reclaimed Oak",
    "Natural Rattan",
    "Fine Linen",
  ];

  const doubled = [...items, ...items];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div key={i} className="marquee-item">
            {item}
            <span className="dot" />
          </div>
        ))}
      </div>
    </div>
  );
}
