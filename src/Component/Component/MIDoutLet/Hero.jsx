import React, { useState } from "react"; 
import BannerImage from "../../../assets/banner-img-1.png";

const Hero = ({ handleSearch }) => {
  const [searchText, setsearchText] = useState(""); 
  return (
    <div className="px-4 py-12 lg:p-16 mt-4 rounded-2xl border border-gray-300 shadow-md ring-2 ring-white max-w-screen-xl mx-auto">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-extrabold text-xl lg:text-5xl">
          Dependable Care, Backed by Trusted
          <br />
          <span className="inline-block">Professionals.</span>
        </h1>
        <p className="font-medium lg:py-4">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
          <span className="block">
            Whether it's a routine checkup or urgent consultation, book
            appointments in minutes and receive quality care you can trust.
          </span>
        </p>

     
        <form
          onSubmit={(e) => handleSearch(e, searchText)}
          className="flex flex-col md:flex-row justify-center items-center w-full max-w-3xl mx-auto space-y-2 md:space-y-0 md:space-x-2 mb-6 px-3"
        >
          <input
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
            type="text"
            placeholder="Search any Doctor"
            className="bg-white border border-gray-300 rounded-2xl shadow-md w-full md:w-2/3 px-4 py-2"
          />
          <button
            type="submit"
            className="bg-[#176AE5] rounded-2xl px-4 py-2 text-white font-semibold shadow-md cursor-pointer"
          >
            Search Now
          </button>
        </form>
      </div>

      <div className="grid lg:grid-cols-2 mx-auto gap-5 justify-center w-full">
        <img src={BannerImage} alt="" className="object-contain" />
        <img src={BannerImage} alt="" className="object-contain" />
      </div>
    </div>
  );
};

export default Hero;
