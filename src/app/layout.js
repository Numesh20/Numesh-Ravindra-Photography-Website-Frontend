import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Numesh Ravindra Photography | Portfolio",
  description: "Explore the photography portfolio of Numesh Ravindra in Mawanella, Sri Lanka. Specializing in wedding, wildlife, event, and portrait photography.",
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
