import React from "react";

import { cars } from "@/data/data";
import { ProductCarousel } from "@/app/components/cars/ProductCarousel";
import { CarSpecs } from "@/app/components/cars/CarSpecs";

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
    <main className="py-10 font-poppins min-h-screen">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex flex-wrap mb-24 -mx-4">
          <ProductCarousel car={currentCar} />
          <div className="w-full px-4 md:w-1/2">
            <div className="lg:pl-20">
              <div className="mb-6 ">
                <h2 className="max-w-xl mt-6 mb-6 text-xl font-bold leading-loose tracking-wide text-gray-700 md:text-2xl">
                  {currentCar.brand +
                    " " +
                    currentCar.model +
                    " " +
                    currentCar.year}
                </h2>
                {currentCar.showPrice && (
                  <p className="inline-block text-2xl font-semibold text-gray-700 ">
                    <span>{currentCar.pricePerMonth} a.e.d Per Month</span>
                  </p>
                )}
              </div>
              <CarSpecs specs={currentCar} />

              <div className="flex gap-4 mb-6">
                <a
                  href="#"
                  className="w-full px-4 py-3 text-center text-gray-100 bg-teal-600 border border-transparent hover:border-teal-500 hover:text-teal-700 hover:bg-teal-100 rounded-xl"
                >
                  Contact Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
// export async function getProps({ params }) {
//   // const res = await fetch('https://.../cars')
//   // const cars = await res.json()

//   const car = cars.find((car) => car.slug == params.slug);

//   return {
//     props: {
//       car,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every 10 seconds
//     revalidate: 10, // In seconds
//   };
// }

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
// export async function getStaticPaths() {
//   // const res = await fetch('https://.../cars')
//   // const cars = await res.json()

//   // Get the paths we want to pre-render based on posts
//   const paths = cars.map((car) => ({
//     params: { slug: car.slug },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: 'blocking' } will server-render pages
//   // on-demand if the path doesn't exist.
//   return { paths, fallback: "blocking" };
// }
