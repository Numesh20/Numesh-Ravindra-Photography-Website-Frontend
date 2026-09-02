import BlogClient from "./BlogClient";

export const metadata = {
  title: "Photography Blog | Tips, Guides & Insights",
  description: "Photography tips, wedding venue guides, portrait advice, and wildlife photography stories from professional photographer Numesh Ravindra in Sri Lanka.",
  keywords: [
    "photography blog Sri Lanka",
    "wedding photography tips Sri Lanka",
    "best wedding venues Sri Lanka",
    "portrait photography tips",
    "wildlife photography Sri Lanka",
    "photographer blog Mawanella",
  ],
  alternates: { canonical: "https://www.numeshravindra.me/blog" },
  openGraph: {
    title: "Photography Blog | Numesh Ravindra Photography",
    description: "Tips, guides, and stories from behind the lens — written for clients and photography enthusiasts in Sri Lanka.",
    url: "https://www.numeshravindra.me/blog",
    siteName: "Numesh Ravindra Photography",
    locale: "en_LK",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
