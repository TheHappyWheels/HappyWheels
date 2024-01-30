import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Navbar({ websiteData }) {
  return (
    <nav
      className={`bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200`}
    >
      <div
        className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4`}
      >
        <Link
          href="/"
          className={`flex items-center space-x-3 rtl:space-x-reverse`}
        >
          <Image
            src={websiteData?.logo}
            className={`h-20 w-auto`}
            alt={`${websiteData.name} Logo`}
            height={64}
            width={64}
          />
          <span
            className={`self-center text-2xl font-semibold whitespace-nowrap`}
          >
            {websiteData.name}
          </span>
        </Link>
        <div
          className={`flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse`}
        >
          <button
            type="button"
            className={`text-white bg-${websiteData.baseColor}-700 hover:bg-${websiteData.baseColor}-800 focus:ring-4 focus:outline-none focus:ring-${websiteData.baseColor}-300 font-medium rounded-lg text-sm px-4 py-2 text-center`}
          >
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
}
