import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Numesh Ravindra | Book Photography Session",
  description: "Get in touch with Numesh Ravindra to book your wedding, portrait, wildlife, or event photography session in Sri Lanka. Mawanella-based, available island-wide.",
  keywords: [
    "Book photographer Sri Lanka",
    "Contact Numesh Ravindra",
    "Mawanella photographer contact",
    "Wedding photography inquiry Sri Lanka",
    "Hire photographer Kegalle",
    "Photography pricing Sri Lanka"
  ],
  alternates: {
    canonical: "https://numesh-ravindra-photography-website.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Numesh Ravindra | Book Photography Session",
    description: "Get in touch with Numesh Ravindra to book your wedding, portrait, wildlife, or event photography session in Sri Lanka.",
    url: "https://numesh-ravindra-photography-website.vercel.app/contact",
    siteName: "Numesh Ravindra Photography",
    locale: "en_LK",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
