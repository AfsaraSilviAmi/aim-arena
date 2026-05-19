import Image from 'next/image';
import React from 'react';
import DeleteButton from './DeleteButton';
import EditModal from './EditModal';
import { FaBasketball, FaLocationDot } from 'react-icons/fa6';
import { IoIosFootball } from 'react-icons/io';
import { MdPool, MdSportsTennis, MdSportsVolleyball } from 'react-icons/md';
import { GiCricketBat } from 'react-icons/gi';
import { Button, Card, Chip } from '@heroui/react';



const ManageFacilityCard = ({facility}) => {
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
             <Card>
                <div className="relative w-full h-50">
                 <Image
                   src={facility.imageUrl}
                   alt={facility.facilityName}
                   fill
                   className="object-cover rounded-xl"
                 />
               </div>
                <p className='text-3xl font-bebas text-center'>{facility.facilityName}</p>
                <div className='flex justify-center'>
                   <div className='items-center flex gap-3'>
                    <Chip className='bg-[#023047] px-6'><p className='text-[#8ecae6] text-3xl font-bebas'> ${facility.price}</p></Chip>
                   <span className='text-gray-700'>/Per Hour</span>
                   </div>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-700 mt-1 text-lg">
  <div className="flex items-center gap-1">
    {iconMap[facility.type]}
    <p>{facility.type}</p>
  </div>

  <div className="w-1 h-5 bg-gray-300"></div>

  <div className='flex items-center gap-1'><FaLocationDot /><p>{facility.location}</p></div>
</div>
<div>
    <div className='text-center text-gray-700 text-md space-y-2'>
    <p>Capacity: {facility.capacity}</p>
    <p>Time Slot: {facility.time}</p>
    <p className='line-clamp-2 text-sm'>{facility.description}</p>
</div>
</div>
           
            <div className='flex justify-between'>
                 
             <EditModal facility={facility}></EditModal>
             <DeleteButton facilityId={facility._id} facility={facility}></DeleteButton>
            </div>
              </Card>

        </div>
    );
};

export default ManageFacilityCard;