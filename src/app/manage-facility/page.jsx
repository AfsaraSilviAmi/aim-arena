
import ManageFacilityCard from '@/components/ManageFacilityCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const ManageFacilities = async() => {
    const session = await auth.api.getSession({
  headers: await headers()
})
const user = session?.user
const res = await fetch(`http://localhost:8000/my-facilities/${user.email}`
)

const facilities = await res.json()


    return (
        <div>
           <h1>Manage Facilities</h1>
           <div>
            {
                facilities.map(facility =><ManageFacilityCard key={facility._id} facility={facility}></ManageFacilityCard>)
            }
           </div>
          
        </div>
    );
};

export default ManageFacilities;