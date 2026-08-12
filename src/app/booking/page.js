import BookingClient from "./BookingClient";

export const metadata = {
  title: "Book a Session | Numesh Ravindra Photography",
  description: "Book your photography session with Numesh Ravindra. Wedding, portrait, event, and outdoor photography available island-wide across Sri Lanka.",
  alternates: {
    canonical: "https://www.numeshravindra.me/booking",
  },
  openGraph: {
    title: "Book a Photography Session | Numesh Ravindra Photography",
    description: "Book your wedding, portrait, event or outdoor photography session. Based in Mawanella, available island-wide across Sri Lanka.",
    url: "https://www.numeshravindra.me/booking",
    siteName: "Numesh Ravindra Photography",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Book a Photography Session — Numesh Ravindra Photography",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
};

export default function BookingPage() {
  return <BookingClient />;
}
