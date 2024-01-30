import "./globals.css";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

import { websiteData, footerLinks } from "@/data/data";

export const metadata = {
  title: websiteData.name,
  description: websiteData.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar websiteData={websiteData} />
        {children}
        <Footer websiteData={websiteData} footerLinks={footerLinks} />
      </body>
    </html>
  );
}
