"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export function ProductCarousel({ car }) {
  const allCarImages = [car.mainImage, ...car.images];

  let thumbnailCarouselOptions = {
    fixedWidth: 100,
    gap: 16,
    rewind: true,
    pagination: false,
    arrows: false,
    onMounted: function () {
      this.sync(mainSlider.current.splide);
    },
  };

  let mainCarouselOptions = {
    type: "fade",
    rewind: true,
    pagination: false,
    arrows: false,
  };

  const mainSlider = useRef();
  const thumbnailSlider = useRef();

  const handelChange = (id) => {
    if (mainSlider.current) {
      mainSlider.current.go(id);
    }
  };

  useEffect(() => {
    if (mainSlider.current && thumbnailSlider.current) {
      mainSlider.current.sync(thumbnailSlider.current.splide);
    }
  }, [mainSlider, thumbnailSlider]);

  return (
    <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
      <div className="sticky top-0 overflow-hidden ">
        <div className="relative mb-6 lg:mb-10 lg:h-96">
          <Splide options={{ ...mainCarouselOptions }} ref={mainSlider}>
            {allCarImages.map((image, index) => (
              <SplideSlide key={index}>
                <Image
                  className="object-contain w-full lg:h-full"
                  src={image}
                  alt=""
                  width={500}
                  height={500}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <Splide
          options={{ ...thumbnailCarouselOptions }}
          className="-mx-2 flex flex-row"
          ref={thumbnailSlider}
        >
          {allCarImages.map((image, index) => (
            <SplideSlide
              key={index}
              onClick={() => handelChange(index)}
              className={`w-1/2 sm:w-1/4 border border-gray-200 hover:border-teal-400 hover:opacity-100
                opacity-60
               transition-all`}
            >
              <Image
                src={image}
                alt=""
                width={300}
                height={300}
                className="h-full w-auto"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}
