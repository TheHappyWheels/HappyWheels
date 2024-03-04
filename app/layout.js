import "./globals.css";
import { Shrikhand, Montserrat } from "next/font/google";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

import { client } from "@/lib/sanity";

const shrikhand = Shrikhand({
  subsets: ["latin"],
  variable: "--font-shrikhand",
  weight: "400",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

async function getWebsiteData() {
  const websiteData = await client.fetch(`*[_type=="settings"][0] {
    "logoUrl":logo.asset->url,
    baseColor,
    name,
    description,
    keywords,
  }`);

  if (websiteData == null) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return websiteData;
}

async function getFooterLinks() {
  const footerLinks = await client.fetch(`*[_type=="footerLinks"] {
    link,
    title
  }`);

  if (footerLinks == null) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return footerLinks;
}

export const metadata = {
  title: "Happy Wheels",
  description: "car rental company website",
  keywords: [
    "car",
    "rental",
    "company",
    "happy",
    "wheels",
    "rent",
    "rental",
    "car rental",
    "car rent",
    "happy wheels",
    "happywheels",
  ],
};

export default async function RootLayout({ children }) {
  const websiteData = await getWebsiteData();
  const footerLinks = await getFooterLinks();

  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${montserrat.className} min-h-screen`}>
        <Navbar font={shrikhand.className} websiteData={websiteData} />
        {children}
        <Footer websiteData={websiteData} footerLinks={footerLinks} />
      </body>
    </html>
  );
}
