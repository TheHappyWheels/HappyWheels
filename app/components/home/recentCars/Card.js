import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export function Card({ image, name, link, baseColor }) {
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
    <div className="max-w-sm bg-white rounded-lg shadow m-auto">
      <Link href={link}>
        <Image
          className="rounded-t-lg w-full h-auto"
          src={image}
          alt={name}
          height={200}
          width={200}
        />
      </Link>
      <div className="p-5">
        <Link href={link}>
          <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 line-clamp-2">
            {name}
          </h5>
        </Link>
        <Link
          href={link}
          className={`inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none ${colorVariants[baseColor]}`}
        >
          Read more
          <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
}
