import BookingCard from '@/components/BookingCard';
import { auth } from '@/lib/auth';
import { Card, Chip } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import { FaBasketball, FaLocationDot } from 'react-icons/fa6';
import { GiCricketBat } from 'react-icons/gi';
import { IoIosFootball } from 'react-icons/io';
import { IoArrowBack } from 'react-icons/io5';
import { MdPool, MdSportsTennis, MdSportsVolleyball } from 'react-icons/md';

const FacilitiesDetailsPage = async({params}) => {
    const {id} = await params;
    const {token} = await auth.api.getToken({
      headers: await headers()
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${id}`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    if (!res.ok) {
    notFound();
  }
    const facility = await res.json()
      const iconMap = {
       Basketball: <FaBasketball />,
       Football: <IoIosFootball />,
       Tennis: <MdSportsTennis />,
       Swimming: <MdPool/>,
       Volleyball: <MdSportsVolleyball />,
       Cricket: <GiCricketBat />,
     };

    return (
        <div>
          
             <Link href={"/all-facility"} className='flex items-center gap-4 hover:text-blue-500 mt-3'><IoArrowBack />Go Back to All Facilities</Link>
             <div className='grid md:grid-cols-3 gap-3 my-5'>
                 <Card className='md:col-span-2'>
               <div className="relative w-full h-75">
  <Image
    src={facility.imageUrl}
    alt={facility.facilityName}
    fill
    className="object-cover rounded-xl"
  />
</div>
               <p className='text-4xl font-bebas text-center'>{facility.facilityName}</p>
                               <div className='flex justify-center'>
                                  <div className='items-center flex gap-3'>
                                   <Chip className='bg-[#023047] px-6'><p className='text-[#8ecae6] text-3xl font-bebas'> ${facility.price}</p></Chip>
                                  <span className='text-gray-700 dark:text-gray-400'>/Per Hour</span>
                                  </div>
                               </div>
                               <div className="flex items-center justify-center gap-3 text-gray-700 dark:text-gray-400 mt-3 text-lg">
                 <div className="flex items-center gap-1">
                   {iconMap[facility.type]}
                   <p>{facility.type}</p>
                 </div>
               
                 <div className="w-1 h-5 bg-gray-300"></div>
               
                 <div className='flex items-center gap-1'><FaLocationDot /><p>{facility.location}</p></div>
                 </div>
                 <div className='flex items-center justify-center text-gray-700 dark:text-gray-400 gap-3 text-lg'>
                    <p>Capacity: {facility.capacity}</p>
                    
                 </div>
                 <div className='flex items-center justify-center text-gray-700 dark:text-gray-400 gap-3 text-lg'>
                    <p>Time Slot: {facility.time}</p>
                    
                 </div>
                 <div className='my-3'>
                    <p className='font-bebas text-center text-3xl'>Overview</p>
                    <p className='text-center text-gray-700 dark:text-gray-400'>{facility.description}</p>
                 </div>
                 
              </Card>
             <BookingCard facility={facility} className="md:col-span-1"></BookingCard>
             </div>
              
        </div>
    );
};

export default FacilitiesDetailsPage;