'use client'
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image:
      "https://i.ibb.co.com/5xCG1zmm/Luxury-Indoor-Football-Turf-Design-Ultra-Realistic-4-K-Sports-Arena.jpg",
    title: "Football Arena",
  },
  {
    id: 2,
    image:
      "https://i.ibb.co.com/LXrzyRph/Basketball-Court-Backdrop-Game-Night-Professional-Backdrop-BRP1-333.jpg",
    title: "Basketball Court",
  },
  {
    id: 3,
    image:
      "https://i.ibb.co.com/DPYJH6C5/Padel.jpg",
    title: "Tennis Ground",
  },
  {
    id: 4,
    image:
      "https://i.ibb.co.com/JRPTP5g3/R-cemment-refaite-neuf-la-piscine-de-la-Butte-aux-Cailles-Paris-est-un-petit-bijou-d-art.jpg",
    title: "Swimming Pool",
  },
];

const FacilitySlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const bigCard = slides[current];
  const smallTop = slides[(current + 1) % slides.length];
  const smallBottom = slides[(current + 2) % slides.length];

  return (
    <div className="my-10">
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-4 h-[500px]">
        
    
        <div className="lg:col-span-2 relative rounded-3xl overflow-hidden group">
          <Image
            src={bigCard.image}
            alt={bigCard.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute bottom-6 left-6 z-10 ">
             <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 w-full shadow-xl mb-5">
    <p className="text-white mb-3 font-bebas text-xl">
      Book your favorite sports facility and enjoy premium gameplay experience!
    </p>

    <Link href="/booking">
      <button className="group flex items-center gap-5 justify-between bg-[#ffb703] hover:bg-[#fb8500] text-black px-4 py-3 rounded-xl transition-all duration-300">
        
        <span className="font-bebas text-xl tracking-wide">
          Book Now
        </span>

        <div className="bg-black text-white p-2 rounded-full group-hover:translate-x-1 transition">
          <ArrowUpRight size={18} />
        </div>
      </button>
    </Link>
  </div>
            <h1 className="text-4xl font-bebas text-white">
              {bigCard.title}
            </h1>
            
          </div>

        
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 z-20">
            <button
              onClick={prevSlide}
              className="bg-white/30 backdrop-blur-md p-3 rounded-full text-white hover:scale-110 transition"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={nextSlide}
              className="bg-white/30 backdrop-blur-md p-3 rounded-full text-white hover:scale-110 transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        
        <div className="flex flex-col gap-4">
          
          
          <div className="relative flex-1 rounded-3xl overflow-hidden group">
            <Image
              src={smallTop.image}
              alt={smallTop.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-4 left-4 z-10">
              <h2 className="text-2xl text-white font-bebas">
                {smallTop.title}
              </h2>
            </div>
          </div>

          
          <div className="relative flex-1 rounded-3xl overflow-hidden group">
            <Image
              src={smallBottom.image}
              alt={smallBottom.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-4 left-4 z-10">
              <h2 className="text-2xl text-white font-bebas">
                {smallBottom.title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitySlider;