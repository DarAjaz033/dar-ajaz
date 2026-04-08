import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dar Ajaz — Luxury Furniture & Home Decor | Dubai, UAE",
  description: "Dar Ajaz offers premium luxury furniture and bespoke home decor crafted from the finest materials. Elevate your living spaces with timeless elegance. Serving Dubai, Abu Dhabi & across the UAE.",
  keywords: "luxury furniture Dubai, premium home decor UAE, bespoke furniture, Dar Ajaz, teak furniture UAE",
  openGraph: {
    title: "Dar Ajaz — Luxury Furniture & Home Decor",
    description: "Premium luxury furniture crafted from the finest materials. Timeless elegance for your home.",
    type: "website",
    locale: "en_AE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
