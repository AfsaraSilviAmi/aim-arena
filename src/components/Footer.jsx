import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className=''>
           <footer className="relative overflow-hidden">
    <div className="absolute inset-0 -z-10 pointer-events-none">
  <svg
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="100%" height="100%" fill="#000507" />

    {/* SOFT FLOATING SHAPES */}
    <g opacity="0.10" filter="blur(0.5px)">
      
      <circle cx="13" cy="20" r="10" fill="#219ebc" />
      <circle cx="80" cy="25" r="12" fill="#8ecae6" />
      
    

    </g>
  </svg>
</div>
      <div className="relative z-10 w-11/12 mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="logo"
                width={50}
                height={50}
                className=""
              />
              <span className='italic bg-gradient-to-r from-[#023047] via-[#219ebc] to-[#8ecae6] bg-clip-text text-transparent font-semibold text-xl'>Aim<span>Arena</span></span>
            </div>

            <p className="text-sm leading-relaxed text-white max-w-md">
             AimArena connects players with sports facilities, making it simple to book fields, courts, and arenas anytime. Built for every game, every player.
            </p>
          </div>

         
          <div>
            <h3 className="font-bebas text-xl text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-white">
              <li>
              <span className='font-bebas'>Email</span> afsarasilvisports@gmail.com
              </li>
              <li>
                <span className='font-bebas'>Phone</span> +01234567890
              </li>
              <li>
                <span className='font-bebas'>Location</span> Sports Streets, Bangladesh
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bebas text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-white">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#ffb703] transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/all-facility"
                   className="hover:text-[#ffb703] transition"
                >
                  All Facilities
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                   className="hover:text-[#ffb703] transition"
                >
                  My Booking
                </Link>
              </li>
              <li>
                <Link
                  href="/add-facility"
                   className="hover:text-[#ffb703] transition"
                >
                  Add Facility
                </Link>
              </li>
              <li>
                <Link
                  href="/manage-facility"
                   className="hover:text-[#ffb703] transition"
                >
                  Manage My Facility
                </Link>
              </li>
            </ul>
          </div>

         
          <div className="space-y-4">
            <h3 className="text-xl font-bebas text-white">
              Social Links
            </h3>
          <div className='text-white flex gap-4 text-lg'>
           <Link href="/"> <FaXTwitter /></Link>
           <Link href="/"> <FaFacebookF /></Link>
           <Link href="/"> <FaInstagram /></Link>
           <Link href="/"> <BsWhatsapp /></Link>
          </div>
          </div>
        </div>

       
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        
        <div className="mt-6 text-white text-xs flex justify-center">
          <p>© {new Date().getFullYear()} AimArena. All rights reserved by Ami.</p>

          
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;