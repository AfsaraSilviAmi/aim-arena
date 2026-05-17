import { bebas } from "@/app/layout";
import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div>
        <div className="my-10">
             <section
      className="relative h-[70vh] flex items-center justify-center text-center text-white rounded-xl"
      style={{
        backgroundImage: "url('/banner.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
         <div className="absolute inset-0 bg-black/50 z-0 rounded-xl"></div>
        <div className="max-w-7xl mx-auto px-5 z-10">
         <div className="space-y-4">
            <h1 className={`${bebas.className} text-3xl md:text-5xl`}>Book Your Game Anytime, Anywhere</h1>
            <p className="md:w-155">Discover and book top sports facilities near you with ease. From football fields to indoor courts, everything you need to play your game is just a few clicks away.</p>
         </div>
           <Link href={"/all-facilities"}>
            <Button className={`${bebas.className} bg-linear-to-r from-[#023047] via-[#219ebc] to-[#8ecae6] text-2xl py-6 px-7 border-[#ffb703] border-2 mt-10 transition-all duration-300 hover:scale-110 hover:from-[#ffb703] hover:to-blue-200 hover:border-blue-500 animate__animated animate__pulse animate__infinite animate__slow`}>Explore Facilities</Button>
          </Link>
          </div>
         
      </section>
    
           </div>
     

    </div>
  );
};

export default Banner;