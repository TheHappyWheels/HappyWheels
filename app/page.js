"use client";
import { Hero } from "./components/home/Hero";

import { websiteData, heroOptions } from "@/data/data";
import { RecentCars } from "./components/home/RecentCars";
// import { Contact } from "./components/home/Contact";

export default function Home() {
  return (
    <main>
      <div className="">
        <Hero baseColor={websiteData.baseColor} heroOptions={heroOptions} />
        <RecentCars baseColor={websiteData.baseColor} />
        {/* <Contact /> */}
      </div>
    </main>
  );
}
