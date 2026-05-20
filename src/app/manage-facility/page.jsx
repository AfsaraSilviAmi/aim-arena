
import ManageFacilityCard from '@/components/ManageFacilityCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';
import { IoTennisballSharp } from 'react-icons/io5';

const ManageFacilities = async() => {
    const session = await auth.api.getSession({
  headers: await headers()
})
 const {token} = await auth.api.getToken({
      headers: await headers()
    })
const user = session?.user
const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-facilities/${user.email}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })

const facilities = await res.json()


    return (
        <div className='my-5'>
           <div className='flex justify-center my-5'>
                         <h1 className='font-bebas text-4xl flex gap-2'><IoTennisballSharp  className="animate-bounce"/>Manage my Facilities<IoTennisballSharp  className="animate-bounce"/></h1>
                     </div>
          <div>
            {
                facilities.length === 0 ? (<div className='flex justify-center items-center h-[50vh] font-bebas text-4xl'>
                    <h1>You have not added any facilities yet. You can add in the Add Facility!</h1>
                </div>) : ( <div className='grid md:grid-cols-3 gap-4'>
            {
                facilities.map(facility =><ManageFacilityCard key={facility._id} facility={facility}></ManageFacilityCard>)
            }
           </div>)
            }
          </div>
          
        </div>
    );
};

export default ManageFacilities;