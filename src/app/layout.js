import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Numesh Ravindra Photography | Premium Fine Art Portfolio",
  description: "Explore the fine art photography portfolio of Numesh Ravindra. Specializing in landscape, portrait, street, and architectural photography.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
