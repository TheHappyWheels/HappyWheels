import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Navbar({ websiteData, font }) {
  const colorVariants = {
    red: "bg-red-700 hover:bg-red-800 focus:ring-red-300",
    orange: "bg-orange-700 hover:bg-orange-800 focus:ring-orange-300",
    amber: "bg-amber-700 hover:bg-amber-800 focus:ring-amber-300",
    yellow: "bg-yellow-700 hover:bg-yellow-800 focus:ring-yellow-300",
    lime: "bg-lime-700 hover:bg-lime-800 focus:ring-lime-300",
    green: "bg-green-700 hover:bg-green-800 focus:ring-green-300",
    emerald: "bg-emerald-700 hover:bg-emerald-800 focus:ring-emerald-300",
    teal: "bg-teal-700 hover:bg-teal-800 focus:ring-teal-300",
    cyan: "bg-cyan-700 hover:bg-cyan-800 focus:ring-cyan-300",
    sky: "bg-sky-700 hover:bg-sky-800 focus:ring-sky-300",
    blue: "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300",
    indigo: "bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-300",
    violet: "bg-violet-700 hover:bg-violet-800 focus:ring-violet-300",
    purple: "bg-purple-700 hover:bg-purple-800 focus:ring-purple-300",
    fuchsia: "bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-fuchsia-300",
    pink: "bg-pink-700 hover:bg-pink-800 focus:ring-pink-300",
    rose: "bg-rose-700 hover:bg-rose-800 focus:ring-rose-300",
  };
  return (
    <nav
      className={`bg-white w-full z-20 top-0 start-0 border-b border-gray-200`}
    >
      <div
        className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2`}
      >
        <Link
          href="/"
          className={`flex items-center space-x-3 rtl:space-x-reverse`}
        >
          <Image
            src={websiteData?.logoUrl}
            className={`h-16 w-auto`}
            alt={`${websiteData?.name} Logo`}
            height={32}
            width={32}
          />
          <span
            className={`self-center whitespace-nowrap ${font} text-xl sm:text-2xl md:text-3xl`}
          >
            {websiteData?.name}
          </span>
        </Link>
        <div
          className={`flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse`}
        >
          <a
            className={`text-white ${
              colorVariants[websiteData?.baseColor]
            } focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-3 py-2 text-center`}
            target="_blank"
            href={`https://wa.me/+971547516354`}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
