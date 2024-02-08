import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaEnvelopeSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhoneSquareAlt,
  FaPinterestSquare,
  FaTwitterSquare,
} from "react-icons/fa";

export function Contact({ baseColor, settings, email }) {
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
    <div className="p-4 mt-10 border-t border-gray-100 flex flex-col lg:flex-row justify-around">
      <div className="my-6 text-center">
        <p className="text-lg font-bold text-gray-700">Connect with Us</p>
        <div className="flex justify-around space-x-2 mt-2">
          {settings.enableFacebook && (
            <Link href={settings.facebookLink}>
              <FaFacebookSquare className="text-blue-600 text-5xl h-full w-auto hover:scale-110 hover:cursor-pointer transition" />
            </Link>
          )}
          {settings.enableInstagram && (
            <Link href={settings.instagramLink}>
              <FaInstagramSquare className="text-pink-500 text-5xl h-full w-auto hover:scale-110 hover:cursor-pointer transition" />
            </Link>
          )}
          {settings.enableTwitter && (
            <Link href={settings.twitterLink}>
              <FaTwitterSquare className="text-blue-400 text-5xl h-full w-auto hover:scale-110 hover:cursor-pointer transition" />
            </Link>
          )}
          {settings.enablePinterest && (
            <Link href={settings.pinterestLink}>
              <FaPinterestSquare className="text-red-600 text-5xl h-full w-auto hover:scale-110 hover:cursor-pointer transition" />
            </Link>
          )}
          {settings.enablePhone && (
            <Link href={`tel:${settings.phone}`}>
              <FaPhoneSquareAlt className="text-green-500 text-5xl h-full w-auto hover:scale-110 hover:cursor-pointer transition" />
            </Link>
          )}
          {settings.enableEmail && (
            <Link href={`mailto:${email}`}>
              <FaEnvelopeSquare className="text-gray-500 text-5xl h-full w-auto hover:scale-110 hover:cursor-pointer transition" />
            </Link>
          )}
        </div>
      </div>
      <div className="my-6 text-center">
        <p className="text-lg font-bold text-gray-700">
          Be the first to know about new listings!
        </p>
        <div className="mt-2">
          <div className="relative mb-6 flex">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <FaEnvelope className="text-gray-500" />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-200 outline-gray-300 text-gray-800 text-sm rounded-l-lg w-full ps-10 p-2.5"
              placeholder="name@email.com"
            />
            <button
              className={`px-2 py-1 rounded-r-md text-white ${colorVariants[baseColor]}`}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
