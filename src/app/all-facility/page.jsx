import FacilityCard from '@/components/FacilityCard';
import React from 'react';

const AllFacilityPage = async() => {
    const res = await fetch("http://localhost:8000/facilities")
    const facilities = await res.json()
    return (
        <div className='my-10'>
            <div>
                <h1 className='font-bebas text-4xl text-center'>Check Out All Of Our Facilities</h1>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    facilities.map(facility =><FacilityCard key={facility._id} facility={facility}></FacilityCard>)
                }
            </div>
        </div>
    );
};

export default AllFacilityPage;