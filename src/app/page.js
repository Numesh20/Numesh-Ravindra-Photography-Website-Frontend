import HomeClient from "./HomeClient";

export const metadata = {
  title: "Numesh Ravindra Photography | Professional Photographer in Sri Lanka",
  description: "Capture your life's most precious stories with timeless elegance. Numesh Ravindra is a professional photographer based in Mawanella, Sri Lanka, specializing in wedding, portrait, event, and wildlife photography.",
  keywords: [
    "Numesh Ravindra Photography",
    "Photographer Sri Lanka",
    "Wedding Photography Sri Lanka",
    "Mawanella Photographer",
    "Kegalle Photography",
    "Wildlife Photographer Sri Lanka",
    "Portrait Photographer Sri Lanka",
    "Event Photographer Sri Lanka",
    "Best Photographer Sri Lanka"
  ],
  alternates: {
    canonical: "https://numesh-ravindra-photography-website.vercel.app",
  },
  openGraph: {
    title: "Numesh Ravindra Photography | Portfolio",
    description: "TIMELESS WEDDINGS, PORTRAITS, EVENTS & WILDLIFE PHOTOGRAPHY BASED IN SRI LANKA.",
    url: "https://numesh-ravindra-photography-website.vercel.app",
    siteName: "Numesh Ravindra Photography",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Numesh Ravindra Photography Banner",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Numesh Ravindra Photography | Professional Photographer in Sri Lanka",
    description: "Timeless weddings, portraits, events & wildlife photography based in Mawanella, Sri Lanka.",
    images: ["https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
};

export default function Home() {
  return <HomeClient />;
}
