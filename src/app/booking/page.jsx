import { CancelBooking } from '@/components/CancelBooking';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const BookingPage = async() => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user
    const res = await fetch(`http://localhost:8000/bookings/${user?.id}`)
    const bookings = await res.json()
    return (
        <div>
            <h1>My Bookings</h1>
            <div>
                {
                bookings.length === 0? (<div>
                    <h1>You have not booked anything yet</h1>
                </div>): (<div>
                    {
                         bookings.map(booking =><div key={booking._id}>
                   <div className='flex'>
                     <Image src={booking?.imageUrl} alt={booking.facilityName} width={100} height={100}></Image>
                   <div>
                     <p>{booking.facilityName}</p>
                     <div>
                        <p>{booking.facilityId}</p>
                        <p>{booking?.bookingDate}</p>
                        <p>{booking?.timeSlot}</p>
                        <p>{booking.totalPrice}</p>
                        <p>{booking.status}</p>
                     </div>
                   </div>
                   <div>
                    <CancelBooking bookingId={booking._id}></CancelBooking>
                   </div>
                   </div>
                 </div>)
                    }
                </div>)
                }
            </div>
        </div>
    );
};

export default BookingPage;