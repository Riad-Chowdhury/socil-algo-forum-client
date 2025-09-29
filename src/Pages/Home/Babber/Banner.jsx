import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState(" ");

  return (
    <section className=" relative bg-[url('assets/banner2.jpg')] rounded-2xl bg-cover bg-center h-[500px] flex items-center justify-center px-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-2xl w-full">
        {/* Outside Text */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to Disputo Forum
        </h1>
        <p className="mb-6 text-sm md:text-lg">
          Search through thousands of items and discover the best deals.
        </p>

        {/* Search Box */}
        <form
          onSubmit={(e) => {
            handleSearch(e, searchText);
            setSearchText("");
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="Search here..."
              className="w-full sm:w-2/3 px-4 py-2 border-2 rounded-lg text-black "
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Banner;
