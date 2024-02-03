//generate functional component for a recently added cars from data.js file and style it using tailwind css
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Card } from "./recentCars/Card";
// Default theme
import "@splidejs/react-splide/css";
//data
import { cars } from "@/data/data";

export function RecentCars({ baseColor }) {
  let carouselOptions = {
    type: "loop",
    autoplay: true,
    pauseOnHover: false,
    interval: 3000,
    arrows: false,
    speed: 500,
    perMove: 1,
    breakpoints: {
      640: {
        perPage: 2,
        gap: "2rem",
      },
      768: {
        perPage: 2,
        gap: "1.5rem",
      },
      1024: {
        perPage: 3,
        gap: "1rem",
      },
      1440: {
        perPage: 3,
        gap: "1rem",
      },
    },
    perPage: 3,
  };
  return (
    <div>
      <h1
        className={`my-8 text-3xl font-extrabold tracking-tight leading-none text-black text-center md:text-5xl lg:text-6xl`}
      >
        Our Latest Cars
      </h1>
      <Splide options={{ ...carouselOptions }} className="my-8">
        {cars?.map((car, index) => (
          <SplideSlide key={index}>
            <Card
              image={car.mainImage}
              name={car.brand + " " + car.model + " " + car.year}
              link={`/cars/${car.slug}`}
              baseColor={baseColor}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
