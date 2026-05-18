import BookingCard from '@/components/BookingCard';
import { Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaBasketball, FaLocationDot } from 'react-icons/fa6';
import { GiCricketBat } from 'react-icons/gi';
import { IoIosFootball } from 'react-icons/io';
import { IoArrowBack } from 'react-icons/io5';
import { MdPool, MdSportsTennis, MdSportsVolleyball } from 'react-icons/md';

const FacilitiesDetailsPage = async({params}) => {
    const {id} = await params;
    const res = await fetch(`http://localhost:8000/facilities/${id}`)
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
          
             <Link href={"/all-facility"} className='flex items-center gap-4'><IoArrowBack />Go Back to All Facilities</Link>
             <div className='grid grid-cols-3'>
                 <Card className='col-span-2'>
                <Image src={facility.imageUrl} alt={facility.facilityName} width={100} height={100} className='w-full h-[50%]'></Image>
               <p className='text-3xl font-bebas text-center'>{facility.facilityName}</p>
                               <div className='flex justify-center'>
                                  <div className='items-center flex gap-3'>
                                   <Chip className='bg-[#023047] px-6'><p className='text-[#8ecae6] text-3xl font-bebas'> ${facility.price}</p></Chip>
                                  <span className='text-gray-700'>/Per Hour</span>
                                  </div>
                               </div>
                               <div className="flex items-center justify-center gap-3 text-gray-700 mt-3 text-lg">
                 <div className="flex items-center gap-1">
                   {iconMap[facility.type]}
                   <p>{facility.type}</p>
                 </div>
               
                 <div className="w-1 h-5 bg-gray-300"></div>
               
                 <div className='flex items-center gap-1'><FaLocationDot /><p>{facility.location}</p></div>
                 </div>
              </Card>
             <BookingCard facility={facility} className="col-span-1"></BookingCard>
             </div>
              
        </div>
    );
};

export default FacilitiesDetailsPage;