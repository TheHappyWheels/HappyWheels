import Link from "next/link";
import React from "react";

export function Cost({ daily, weekly, monthly, websiteData }) {
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
  return (
    <div className="w-full p-5 my-5 border border-gray-300 rounded-xl flex flex-col items-center ">
      <h2 className="text-xl text-gray-700 font-bold mb-5 text-center">
        Rental Cost
      </h2>
      <table className="w-full mb-5 text-center">
        <tr>
          <th className="border px-4 py-2 text-lg font-bold">Monthly</th>
          <th className="border px-4 py-2 text-lg font-bold">Weekly</th>
          <th className="border px-4 py-2 text-lg font-bold">Daily</th>
        </tr>
        <tr>
          <td className="border px-4 py-2 text-lg">{monthly}</td>
          <td className="border px-4 py-2 text-lg">{weekly}</td>
          <td className="border px-4 py-2 text-lg">{daily}</td>
        </tr>
      </table>
      <a
        target="_blank"
        className={`text-white w-full ${
          colorVariants[websiteData?.baseColor]
        } focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-3 text-center`}
        href={`https://wa.me/+971547516354`}
      >
        Enquire Now
      </a>
    </div>
  );
}
