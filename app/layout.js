import "./globals.css";
import { Shrikhand, Montserrat } from "next/font/google";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

import { websiteData, footerLinks } from "@/data/data";

export const metadata = {
  title: websiteData.name,
  description: websiteData.description,
};

const shrikhand = Shrikhand({
  subsets: ["latin"],
  variable: "--font-shrikhand",
  weight: "400",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={montserrat.className}>
        <Navbar font={shrikhand.className} websiteData={websiteData} />
        {children}
        <Footer websiteData={websiteData} footerLinks={footerLinks} />
      </body>
    </html>
  );
}
