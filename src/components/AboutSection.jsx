import Image from "next/image";
import React from "react";
import { IoTennisballSharp } from "react-icons/io5";

const AboutSection = () => {
  return (
    <section className="py-24">
           <div className="my-5">
            <div className="flex justify-center">
             <h1 className='font-bebas text-4xl flex gap-2'><IoTennisballSharp  className="animate-bounce"/>About Aim Arena<IoTennisballSharp  className="animate-bounce"/></h1>
           </div>
           <p className="text-center text-gray-500">Know All About AimArena and get the best sports facilities available only for you.</p>
           </div>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center my-10">

     
        <div>

          <h1 className="text-5xl font-bebas text-[#023047] leading-tight mt-4">
            Book Premium Sports Facilities Anytime, Anywhere
          </h1>

          <p className="text-gray-600 mt-6 leading-8 text-lg">
            AimArena helps sports lovers discover and book top-quality
            facilities for football, cricket, basketball, swimming,
            tennis, volleyball, and more.
          </p>

          <p className="text-gray-500 mt-4 leading-8">
            Whether you want a quick evening match with friends or a
            professional training environment, AimArena connects you
            with the best sports venues around you.
          </p>

         
          <div className="grid grid-cols-3 gap-6 mt-10">

            <div className="bg-[#f1f9fc] rounded-3xl p-6 text-center shadow-md hover:scale-105 transition">
              <h2 className="text-4xl font-bebas text-[#219ebc]">
                10+
              </h2>
              <p className="text-gray-500 mt-2">Facilities (you can add more)</p>
            </div>

            <div className="bg-[#f1f9fc] rounded-3xl p-6 text-center shadow-md hover:scale-105 transition">
              <h2 className="text-4xl font-bebas text-[#219ebc]">
                20+
              </h2>
              <p className="text-gray-500 mt-2">Bookings</p>
            </div>

            <div className="bg-[#f1f9fc] rounded-3xl p-6 text-center shadow-md hover:scale-105 transition">
              <h2 className="text-4xl font-bebas text-[#219ebc]">
                24/7
              </h2>
              <p className="text-gray-500 mt-2">Access</p>
            </div>

          </div>
        </div>

       
       <div className="relative h-auto lg:h-162.5 mt-10 lg:mt-0">

 
  <div className="relative lg:absolute top-0 right-0 w-full lg:w-[75%] h-62.5 sm:h-80 lg:h-100 rounded-[30px] overflow-hidden shadow-2xl">
    <Image
      src="https://i.ibb.co.com/VWWdZRGz/11-Ways-To-Enjoy-Swimming-In-A-Crowded-Lane.jpg"
      alt="Pool"
      fill
      className="object-cover"
    />
  </div>

  <div className="relative lg:absolute mt-6 lg:mt-0 lg:bottom-10 left-0 w-full lg:w-[55%] h-55 sm:h-65 rounded-[30px] overflow-hidden border-8 border-white shadow-2xl">
    <Image
      src="https://i.ibb.co.com/n8j59vRV/photo-1546519638-68e109498ffc.jpg"
      alt="Basketball"
      fill
      className="object-cover"
    />
  </div>

 
  <div className="relative lg:absolute mt-6 lg:mt-0 lg:bottom-0 lg:right-8 bg-white shadow-2xl rounded-3xl px-6 py-5 border border-gray-100">

    <p className="text-[#219ebc] text-sm uppercase tracking-[3px]">
      Trusted By Athletes
    </p>

    <h2 className="text-3xl lg:text-4xl font-bebas text-[#023047] mt-2">
      Best Sports Platform
    </h2>

  </div>

</div>
      </div>
    </section>
  );
};

export default AboutSection;