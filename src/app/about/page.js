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
    locale: "en_LK",
    type: "profile",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
