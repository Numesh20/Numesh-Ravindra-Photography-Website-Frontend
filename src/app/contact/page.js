import ContactClient from "./ContactClient";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is your typical turnaround time for wedding photos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For wedding coverages, we provide a preview highlights gallery within 3 days so you can share memories with family. The complete set of high-resolution retouched digital photos and your premium physical photobook are delivered within 4-6 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "Are you available for photography sessions outside Mawanella?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! I travel all over Sri Lanka for weddings, wildlife expeditions, events, and portrait sessions. Whether your shoot is in Kandy, Colombo, Galle, or any other district, we can arrange travel details."
      }
    },
    {
      "@type": "Question",
      "name": "Do you sell fine art prints of your wildlife photography?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! High-resolution fine-art prints of wildlife captured in Sri Lankan national parks (like Yala, Wilpattu, and Minneriya) are available. Please contact me to discuss print sizes and framing options."
      }
    },
    {
      "@type": "Question",
      "name": "How do we book a wedding or event photography session?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can book by filling out the form on this page or contacting me directly via WhatsApp at +94704574568. To secure your wedding date, we require a 30% advance deposit along with a signed booking agreement."
      }
    }
  ]
};

export const metadata = {
  title: "Contact & Book a Session | Numesh Ravindra Photography",
  description: "Get in touch with Numesh Ravindra to book your wedding, portrait, wildlife, or event photography session in Sri Lanka. Mawanella-based, available island-wide. Responds within 24 hours.",
  keywords: [
    "Book photographer Sri Lanka",
    "Contact Numesh Ravindra",
    "Mawanella photographer contact",
    "Wedding photography inquiry Sri Lanka",
    "Hire photographer Kegalle",
    "Photography pricing Sri Lanka"
  ],
  alternates: {
    canonical: "https://www.numeshravindra.me/contact",
  },
  openGraph: {
    title: "Contact & Book a Session | Numesh Ravindra Photography",
    description: "Get in touch with Numesh Ravindra to book your wedding, portrait, wildlife, or event photography session in Sri Lanka. Responds within 24 hours.",
    url: "https://www.numeshravindra.me/contact",
    siteName: "Numesh Ravindra Photography",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Contact Numesh Ravindra Photography — Book a Session",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Book a Session | Numesh Ravindra Photography",
    description: "Book a wedding, portrait, event, or wildlife photography session in Sri Lanka. Responds within 24 hours.",
    images: ["https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <ContactClient />
    </>
  );
}
