import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

import { cars } from "@/data/data";
import { Results } from "./hero/Results";

export function Hero({ baseColor, heroOptions }) {
  // const colorVariants = {
  //   red: "bg-red-700 hover:bg-red-800 focus:ring-red-300",
  //   orange: "bg-orange-700 hover:bg-orange-800 focus:ring-orange-300",
  //   amber: "bg-amber-700 hover:bg-amber-800 focus:ring-amber-300",
  //   yellow: "bg-yellow-700 hover:bg-yellow-800 focus:ring-yellow-300",
  //   lime: "bg-lime-700 hover:bg-lime-800 focus:ring-lime-300",
  //   green: "bg-green-700 hover:bg-green-800 focus:ring-green-300",
  //   emerald: "bg-emerald-700 hover:bg-emerald-800 focus:ring-emerald-300",
  //   teal: "bg-teal-700 hover:bg-teal-800 focus:ring-teal-300",
  //   cyan: "bg-cyan-700 hover:bg-cyan-800 focus:ring-cyan-300",
  //   sky: "bg-sky-700 hover:bg-sky-800 focus:ring-sky-300",
  //   blue: "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300",
  //   indigo: "bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-300",
  //   violet: "bg-violet-700 hover:bg-violet-800 focus:ring-violet-300",
  //   purple: "bg-purple-700 hover:bg-purple-800 focus:ring-purple-300",
  //   fuchsia: "bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-fuchsia-300",
  //   pink: "bg-pink-700 hover:bg-pink-800 focus:ring-pink-300",
  //   rose: "bg-rose-700 hover:bg-rose-800 focus:ring-rose-300",
  // };

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchFocus, setIsSearchFocus] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length > 2) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    //creating a new array consists of each item's brand and model
    const completeData = cars.map((item) => ({
      text: item.brand + " " + item.model + " " + item.year,
      image: item.mainImage,
      slug: item.slug,
    }));
    if (searchTerm.length > 2) {
      const newResults = completeData
        .filter((item) => item.text.toLowerCase().includes(searchTerm))
        .map((item) => item);
      setResults(newResults);
    }
  }, [searchTerm]);

  return (
    <section
      style={{ backgroundImage: `url(${heroOptions.image})` }}
      className={`bg-center bg-no-repeat bg-gray-500 bg-blend-multiply`}
    >
      <div
        className={`px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56`}
      >
        <h1
          className={`mb-4 text-3xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl`}
        >
          {heroOptions.title}
        </h1>
        <p
          className={`mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 text-balance`}
        >
          {heroOptions.description}
        </p>
        <div className="w-2/3 m-auto flex flex-col relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            onInput={(e) => handleSearch(e)}
            onSelect={() => setIsSearchFocus(true)}
            onBlur={() => setIsSearchFocus(false)}
            type="text"
            placeholder="Search for your dream car..."
            className={`p-2 pl-11 text-gray-700 bg-gray-200 ${
              isOpen && isSearchFocus ? "rounded-t-lg" : "rounded-lg delay-100"
            } outline-none transition-all`}
          />
          <div
            className={`absolute overflow-y-scroll scrollbar-hide top-full w-full bg-white rounded-b-lg shadow-lg ${
              isOpen && isSearchFocus ? "max-h-60" : "max-h-0"
            } transition-all`}
          >
            {isOpen && isSearchFocus && <Results results={results} />}
          </div>
        </div>
      </div>
    </section>
  );
}
