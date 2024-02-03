import { Hero } from "./components/home/Hero";

import { websiteData, heroOptions } from "@/data/data";

export default function Home() {
  return (
    <main>
      <div className="h-screen">
        <Hero baseColor={websiteData.baseColor} heroOptions={heroOptions} />
      </div>
    </main>
  );
}
