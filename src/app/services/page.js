export const metadata = {
  title: "Photography Services & Pricing Packages",
  description: "Explore photography service pricing packages in Sri Lanka. Tailored options for weddings, professional event coverage, outdoor/studio portrait sessions, and wildlife prints.",
  keywords: [
    "Wedding photography packages Sri Lanka",
    "Portrait photography prices Sri Lanka",
    "Event photography rates Mawanella",
    "Photographer cost Sri Lanka",
    "Photography services pricing"
  ],
  alternates: {
    canonical: "https://www.numeshravindra.me/services",
  },
  openGraph: {
    title: "Photography Services & Pricing Packages | Numesh Ravindra Photography",
    description: "Explore photography service pricing packages in Sri Lanka. Tailored options for weddings, professional event coverage, outdoor/studio portrait sessions, and wildlife prints.",
    url: "https://www.numeshravindra.me/services",
    siteName: "Numesh Ravindra Photography",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Photography Services & Pricing — Numesh Ravindra Photography",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photography Services & Pricing | Numesh Ravindra Photography",
    description: "Wedding, portrait, event & wildlife photography packages in Sri Lanka. Based in Mawanella, available island-wide.",
    images: ["https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
};

import ServicesClient from "./ServicesClient";

export default function Services() {
  return <ServicesClient />;
}
