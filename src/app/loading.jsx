import React from "react";
import { IoIosFootball } from "react-icons/io";
import { FaBasketballBall } from "react-icons/fa";
import { MdSportsTennis } from "react-icons/md";

export default function Loading() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">

      <div className="flex gap-6 text-6xl text-[#219ebc]">
        <IoIosFootball className="animate-bounce" />
        <FaBasketballBall className="animate-spin" />
        <MdSportsTennis className="animate-bounce" />
      </div>

      <h1 className="mt-6 text-4xl font-bebas text-[#023047]">
        Loading Arena...
      </h1>

      <p className="text-gray-500 mt-2">
        Preparing your sports experience
      </p>

      <div className="w-64 h-2 bg-gray-200 rounded-full mt-6 overflow-hidden">
        <div className="h-full w-1/2 bg-[#219ebc] animate-pulse rounded-full"></div>
      </div>

    </div>
  );
}