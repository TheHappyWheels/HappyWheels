import Link from "next/link";
import React from "react";

export function Footer({ websiteData, footerLinks }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between text-center">
        <span className="text-sm text-gray-500 sm:text-center">
          © {year}{" "}
          <Link href="/" className="hover:underline">
            {websiteData?.name}™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center justify-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          {footerLinks.map((link, index) => (
            <li key={index} className="hover:text-gray-700 transition">
              <Link href={link.link} className="me-4 md:me-6">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
