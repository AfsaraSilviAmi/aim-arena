import React from 'react';
import FacilityCard from './FacilityCard';
import { IoIosFootball } from 'react-icons/io';

const FeaturedSection = async() => {
     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`)
    const facilities = await res.json()
    return (
        <div>
            <div className='flex justify-center'>
                <h1 className='font-bebas text-4xl flex items-center gap-3'><IoIosFootball  className="animate-bounce"/>Featured Facilities<IoIosFootball  className="animate-bounce"/></h1>
            </div>
            <p className='text-gray-500 text-center'>Discover featured sports venues with premium quality, great locations, and easy booking.</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    facilities.map(facility => <FacilityCard key={facility._id} facility={facility}></FacilityCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedSection;