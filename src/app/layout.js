import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import MobileActionBar from "./components/MobileActionBar";
import SplashScreen from "./components/SplashScreen";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://www.numeshravindra.me'),
  title: {
    default: "Numesh Ravindra Photography | Wedding & Portrait Photographer Sri Lanka",
    template: "%s | Numesh Ravindra Photography",
  },
  description: "Professional photographer in Mawanella, Sri Lanka specializing in wedding, portrait, wildlife & event photography. 50+ happy clients. Available island-wide. Book your session today!",
  keywords: [
    "photographer in Sri Lanka",
    "wedding photographer Sri Lanka",
    "wedding photographer Mawanella",
    "portrait photographer Sri Lanka",
    "event photographer Kandy",
    "wildlife photographer Sri Lanka",
    "professional photographer Kegalle",
    "photography packages Sri Lanka",
    "Numesh Ravindra Photography",
    "best photographer Sri Lanka",
    "affordable wedding photography Sri Lanka",
    "outdoor photoshoot Sri Lanka",
  ],
  authors: [{ name: 'Numesh Ravindra', url: 'https://www.numeshravindra.me' }],
  creator: 'Numesh Ravindra',
  publisher: 'Numesh Ravindra Photography',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_LK',
    url: 'https://www.numeshravindra.me',
    siteName: 'Numesh Ravindra Photography',
    title: 'Numesh Ravindra Photography | Wedding & Portrait Photographer Sri Lanka',
    description: 'Professional photographer in Mawanella, Sri Lanka. Specializing in weddings, portraits, wildlife & events. Available island-wide. Book now!',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Numesh Ravindra Photography — Professional Photographer Sri Lanka',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Numesh Ravindra Photography | Sri Lanka',
    description: 'Professional wedding, portrait & wildlife photographer. Based in Mawanella, available island-wide across Sri Lanka.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.numeshravindra.me',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "name": "Numesh Ravindra Photography",
    "description": "Professional photographer in Mawanella, Sri Lanka specializing in wedding, portrait, wildlife and event photography. Available island-wide.",
    "image": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "@id": "https://www.numeshravindra.me/#organization",
    "url": "https://www.numeshravindra.me",
    "telephone": "+94704574568",
    "email": "numesh.ravindra.photography@gmail.com",
    "priceRange": "Rs. 8,000 - Rs. 150,000",
    "currenciesAccepted": "LKR",
    "paymentAccepted": "Cash, Bank Transfer",
    "areaServed": {
      "@type": "Country",
      "name": "Sri Lanka"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mawanella",
      "addressLocality": "Mawanella",
      "addressRegion": "Kegalle",
      "postalCode": "71500",
      "addressCountry": "LK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 7.2513,
      "longitude": 80.4437
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Photography Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wedding Photography", "description": "Full day wedding photography coverage" }, "priceSpecification": { "@type": "PriceSpecification", "price": "100000", "priceCurrency": "LKR" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Portrait Session", "description": "Studio and outdoor portrait photography" }, "priceSpecification": { "@type": "PriceSpecification", "price": "8000", "priceCurrency": "LKR" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Event Coverage", "description": "Professional event photography" }, "priceSpecification": { "@type": "PriceSpecification", "price": "25000", "priceCurrency": "LKR" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Outdoor / Lifestyle Photography", "description": "Natural outdoor lifestyle photography" }, "priceSpecification": { "@type": "PriceSpecification", "price": "12000", "priceCurrency": "LKR" } }
      ]
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=100090941785767",
      "https://www.tiktok.com/@numesh_ravindra"
    ],
    "knowsAbout": [
      "Wedding Photography",
      "Wildlife Photography",
      "Portrait Photography",
      "Event Photography",
      "Outdoor Lifestyle Photography",
      "Corporate Photography"
    ]
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G4CESK5Z5L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G4CESK5Z5L');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "How far in advance should I book a photographer in Sri Lanka?", "acceptedAnswer": { "@type": "Answer", "text": "For weddings, book at least 3–6 months in advance. For portrait and event sessions, 2–4 weeks notice is usually enough." } },
              { "@type": "Question", "name": "What areas does Numesh Ravindra Photography cover?", "acceptedAnswer": { "@type": "Answer", "text": "Based in Mawanella, available island-wide across Sri Lanka including Colombo, Kandy, Galle, Nuwara Eliya and more." } },
              { "@type": "Question", "name": "How long does it take to receive wedding photos in Sri Lanka?", "acceptedAnswer": { "@type": "Answer", "text": "Wedding highlights within 3 days. Full edited gallery within 4–6 weeks. Portrait sessions within 1–2 weeks." } },
              { "@type": "Question", "name": "What is the payment process for photography sessions?", "acceptedAnswer": { "@type": "Answer", "text": "A 30% advance deposit is required to confirm your date. The remaining balance is due on the day of the shoot." } },
              { "@type": "Question", "name": "How many photos will I receive?", "acceptedAnswer": { "@type": "Answer", "text": "Portrait sessions include 30–60 edited images. Wedding packages include 300–600+ edited photos depending on the package." } }
            ]
          }) }}
        />
        <SplashScreen />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <MobileActionBar />
      </body>
    </html>
  );
}
