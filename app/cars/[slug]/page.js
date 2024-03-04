import React from "react";

import { ProductCarousel } from "@/app/components/cars/ProductCarousel";
import { CarSpecs } from "@/app/components/cars/CarSpecs";
import { CarFeatures } from "@/app/components/cars/CarFeatures";
import Link from "next/link";

import { cars } from "@/data/data";
import { websiteData } from "@/data/data";
import { Cost } from "@/app/components/cars/Cost";

export async function generateStaticParams() {
  return cars.map((car) => ({
    slug: car.slug,
  }));
}

// async function getProps({ params }) {
//   return currentCar = cars.find((car) => car.slug == params.slug);
// }

export default function Page({ params }) {
  const currentCar = cars.find((car) => car.slug == params.slug);
  return (
    <main className="py-10 font-poppins min-h-dvh">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex flex-wrap mb-8 -mx-4">
          <ProductCarousel car={currentCar} />
          <div className="w-full px-4 md:w-1/2">
            <div className="lg:pl-8">
              <h2 className="mt-6 mb-4 text-3xl font-bold text-gray-800">
                {currentCar.brand +
                  " " +
                  currentCar.model +
                  " " +
                  currentCar.year}
              </h2>
              <Cost
                daily={currentCar.pricePerDay}
                weekly={currentCar.pricePerWeek}
                monthly={currentCar.pricePerMonth}
                websiteData={websiteData}
              />
              <CarSpecs specs={currentCar} />
            </div>
          </div>
        </div>
        <CarFeatures features={currentCar.features} />
      </div>
    </main>
  );
}
