import React from "react";

import { ProductCarousel } from "@/app/components/cars/ProductCarousel";
import { CarSpecs } from "@/app/components/cars/CarSpecs";
import { CarFeatures } from "@/app/components/cars/CarFeatures";
import Link from "next/link";

import { cars } from "@/data/data";
import { websiteData } from "@/data/data";

export async function generateStaticParams() {
  return cars.map((car) => ({
    slug: car.slug,
  }));
}

// async function getProps({ params }) {
//   return currentCar = cars.find((car) => car.slug == params.slug);
// }

export default function Page({ params }) {
  const colorVariants = {
    red: "bg-red-700 hover:bg-red-800 focus:ring-red-600",
    orange: "bg-orange-700 hover:bg-orange-800 focus:ring-orange-600",
    amber: "bg-amber-700 hover:bg-amber-800 focus:ring-amber-600",
    yellow: "bg-yellow-700 hover:bg-yellow-800 focus:ring-yellow-600",
    lime: "bg-lime-700 hover:bg-lime-800 focus:ring-lime-600",
    green: "bg-green-700 hover:bg-green-800 focus:ring-green-600",
    emerald: "bg-emerald-700 hover:bg-emerald-800 focus:ring-emerald-600",
    teal: "bg-teal-700 hover:bg-teal-800 focus:ring-teal-600",
    cyan: "bg-cyan-700 hover:bg-cyan-800 focus:ring-cyan-600",
    sky: "bg-sky-700 hover:bg-sky-800 focus:ring-sky-600",
    blue: "bg-blue-700 hover:bg-blue-800 focus:ring-blue-600",
    indigo: "bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-600",
    violet: "bg-violet-700 hover:bg-violet-800 focus:ring-violet-600",
    purple: "bg-purple-700 hover:bg-purple-800 focus:ring-purple-600",
    fuchsia: "bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-fuchsia-600",
    pink: "bg-pink-700 hover:bg-pink-800 focus:ring-pink-600",
    rose: "bg-rose-700 hover:bg-rose-800 focus:ring-rose-600",
  };
  const currentCar = cars.find((car) => car.slug == params.slug);
  return (
    <main className="py-10 font-poppins">
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
              {currentCar.showPrice && (
                <p className="inline-block text-xl font-semibold text-gray-700 mb-4">
                  <span className="text-2xl font-bold">
                    {currentCar.pricePerMonth}
                  </span>{" "}
                  a.e.d Per Month
                </p>
              )}
              <CarSpecs specs={currentCar} />
              <button
                type="button"
                className={`text-white w-full ${
                  colorVariants[websiteData.baseColor]
                } focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-3 text-center`}
              >
                <Link href={`#`}>Contact Us</Link>
              </button>
            </div>
          </div>
        </div>
        <CarFeatures features={currentCar.features} />
      </div>
    </main>
  );
}
