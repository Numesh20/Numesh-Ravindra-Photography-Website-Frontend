import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Numesh Ravindra | Professional Photographer Sri Lanka",
  description: "Learn more about Numesh Ravindra, a professional photographer based in Mawanella, Sri Lanka. Specializing in weddings, wildlife, events, and portrait photography since 2023.",
  keywords: [
    "About Numesh Ravindra",
    "Sri Lanka photographer biography",
    "Mawanella photographer story",
    "Professional photographer profile Sri Lanka",
    "Sony Alfa A7 III photographer"
  ],
  alternates: {
    canonical: "https://numesh-ravindra-photography-website.vercel.app/about",
  },
  openGraph: {
    title: "About Numesh Ravindra | Professional Photographer Sri Lanka",
    description: "Learn more about Numesh Ravindra, a professional photographer based in Mawanella, Sri Lanka.",
    url: "https://numesh-ravindra-photography-website.vercel.app/about",
    siteName: "Numesh Ravindra Photography",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "About Numesh Ravindra — Professional Photographer Sri Lanka",
      },
    ],
    locale: "en_LK",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Numesh Ravindra | Professional Photographer Sri Lanka",
    description: "Learn more about Numesh Ravindra, a professional photographer based in Mawanella, Sri Lanka. Specializing in weddings, wildlife, events & portraits.",
    images: ["https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
