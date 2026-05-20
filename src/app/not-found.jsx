import Link from "next/link";
import React from "react";
import { IoIosFootball } from "react-icons/io";
import { FaBasketballBall } from "react-icons/fa";
import { MdSportsTennis } from "react-icons/md";
import { FaVolleyball } from "react-icons/fa6";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4">

      {/* ICONS */}
      <div className="flex gap-6 text-5xl mb-6 text-[#219ebc]">
        <FaVolleyball  className="animate-bounce" />
        <FaBasketballBall className="animate-pulse" />
        <MdSportsTennis className="animate-bounce" />
      </div>

     
      <div className="flex items-center gap-4 text-[#023047] font-bebas">

        <span className="text-7xl">4</span>

        <IoIosFootball className="text-6xl text-[#219ebc] animate-spin-slow" />

        <span className="text-7xl">4</span>
      </div>

     
      <h2 className="text-3xl font-bebas mt-4 text-[#023047]">
        Oops! This Route Doesn’t Exist
      </h2>

      
      <p className="text-gray-500 mt-3 max-w-md">
        The page you are looking for might have been moved, deleted, or never
        existed in the AimArena.
      </p>

     
      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-[#219ebc] text-white font-bold rounded-xl hover:scale-105 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;