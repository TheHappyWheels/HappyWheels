import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Results({ results, setIsResultsFocus }) {
  return (
    <div
      className={`divide-y divide-gray-200 z-40`}
      onFocus={() => setIsResultsFocus(true)}
      onBlur={() => setIsResultsFocus(false)}
    >
      {results.map((result, index) => (
        <Link
          href={`/cars/${result.slug}`}
          key={index}
          className="flex hover:bg-gray-200 hover:cursor-pointer transition"
        >
          <Image
            className="object-cover"
            src={result.image}
            alt={result.slug}
            width={75}
            height={75}
          />
          <p className="my-auto ml-3 text-sm font-medium text-gray-900">
            {result.text}
          </p>
        </Link>
      ))}
    </div>
  );
}
