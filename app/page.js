"use client";
import { Hero } from "./components/home/Hero";
import { RecentCars } from "./components/home/RecentCars";
import { Contact } from "./components/home/Contact";

import { websiteData, heroOptions, contactOptions, cars } from "@/data/data";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <Hero
        baseColor={websiteData.baseColor}
        settings={heroOptions}
        data={cars}
      />
      <RecentCars baseColor={websiteData.baseColor} data={cars} />
      <Contact
        baseColor={websiteData.baseColor}
        settings={contactOptions}
        email={websiteData.email}
      />
    </main>
  );
}
