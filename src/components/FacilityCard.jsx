import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaBasketball, FaLocationDot } from 'react-icons/fa6';
import { GiCricketBat } from 'react-icons/gi';
import { IoIosFootball } from 'react-icons/io';
import { MdPool, MdSportsTennis, MdSportsVolleyball } from 'react-icons/md';

const FacilityCard = ({facility}) => {
    const iconMap = {
  Basketball: <FaBasketball />,
  Football: <IoIosFootball />,
  Tennis: <MdSportsTennis />,
  Swimming: <MdPool/>,
  Volleyball: <MdSportsVolleyball />,
  Cricket: <GiCricketBat />,
};
    return (
        <div className='my-4'>
            <Card>
                <div>
                    <Image src={facility.imageUrl} alt={facility.facilityName} width={120} height={120} className='w-[90%] mx-auto rounded-lg object-cover'></Image>
                </div>
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
            <Link href={`/all-facility/${facility._id}`}><Button className={`font-bebas bg-linear-to-r from-[#023047] via-[#219ebc] to-[#8ecae6] text-2xl py-6 px-5 border-[#ffb703] border-2 mt-4 transition-all duration-300 hover:scale-105 hover:from-[#ffb703] hover:to-blue-200 hover:border-blue-500 animate__animated animate__pulse animate__infinite animate__slow w-full`}>Book Now</Button></Link>
            </Card>
        </div>
    );
};

export default FacilityCard;