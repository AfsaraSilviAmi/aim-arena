"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = ["/banner.jpg", "/banner2.jpg", "/banner3.jpg", "/banner4.jpg"];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="my-10 relative">
      <section
        className="relative h-[70vh] flex items-center justify-center text-center text-white rounded-xl transition-all duration-700"
        style={{
          backgroundImage: `url(${images[index]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0 rounded-xl"></div>

       
        <button
          onClick={prevSlide}
          className="absolute left-4 text-white text-4xl z-20"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 text-white text-4xl z-20"
        >
          ❯
        </button>

        <div className="max-w-7xl mx-auto px-5 z-10">
          <div className="space-y-4">
            <h1 className="font-bebas text-3xl md:text-5xl">
              Book Your Game Anytime, Anywhere
            </h1>
            <p className="md:w-155">
              Discover and book top sports facilities near you with ease.
              From football fields to indoor courts.
            </p>
          </div>

          <Link href="/all-facility">
            <Button className="font-bebas bg-linear-to-r from-[#023047] via-[#219ebc] to-[#8ecae6] text-2xl py-6 px-7 border-[#ffb703] border-2 mt-10 animate-bounce">
              Explore Facilities
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Banner;