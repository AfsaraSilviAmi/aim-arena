import FacilityCard from '@/components/FacilityCard';
import SearchAndFilter from '@/components/SearchAndFilter';
import React from 'react';
import { FaBasketball } from 'react-icons/fa6';

const AllFacilityPage = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`, {
    cache: "no-store",
  })
    const facilities = await res.json()
    return (
        <div className='my-10 space-y-3'>
            <div className='flex justify-center'>
                <h1 className='font-bebas text-4xl text-center flex gap-3'><FaBasketball  className="animate-bounce"/>Check Out All Of Our Facilities<FaBasketball  className="animate-bounce"/></h1>

            </div>
            <p className='text-gray-500 text-center'>Check out all our sports facilities and find the perfect place to play, train, and enjoy your favorite game.</p>
            <SearchAndFilter initialData = {facilities}></SearchAndFilter>
        </div>
    );
};

export default AllFacilityPage;