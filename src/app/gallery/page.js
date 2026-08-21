import GalleryClient from "./GalleryClient";

export const metadata = {
  title: "Photography Albums & Gallery",
  description: "Browse through Numesh Ravindra's photography albums. Capturing stunning weddings, beautiful portraits, professional events, and breathtaking wildlife in Sri Lanka.",
  keywords: [
    "Photography gallery Sri Lanka",
    "Wedding albums Sri Lanka",
    "Portrait portfolio Sri Lanka",
    "Wildlife gallery Sri Lanka",
    "Events photoshoot",
    "Numesh Ravindra portfolio",
    "Mawanella photography albums"
  ],
  alternates: {
    canonical: "https://www.numeshravindra.me/gallery",
  },
  openGraph: {
    title: "Photography Albums & Gallery | Numesh Ravindra Photography",
    description: "Browse through Numesh Ravindra's photography albums. Capturing stunning weddings, beautiful portraits, professional events, and breathtaking wildlife in Sri Lanka.",
    url: "https://www.numeshravindra.me/gallery",
    siteName: "Numesh Ravindra Photography",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Photography Albums & Gallery",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photography Albums & Gallery | Numesh Ravindra Photography",
    description: "Browse wedding albums, portrait collections, event photos & wildlife gallery from Numesh Ravindra Photography in Sri Lanka.",
    images: ["https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
