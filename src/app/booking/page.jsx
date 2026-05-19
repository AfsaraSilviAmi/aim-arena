import { CancelBooking } from '@/components/CancelBooking';
import { auth } from '@/lib/auth';
import { Card, Chip } from '@heroui/react';
import { Clock } from 'lucide-react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { FaBasketball } from 'react-icons/fa6';

const BookingPage = async() => {
    const session = await auth.api.getSession({
        headers: await headers()
    })

     const {token} = await auth.api.getToken({
      headers: await headers()
    })
    const user = session?.user
    const res = await fetch(`http://localhost:8000/bookings/${user?.id}`, {
        headers: {
             authorization: `Bearer ${token}`
        }
    })
    const bookings = await res.json()
    return (
        <div className='my-7'>
          <div className='flex justify-center my-5'>
              <h1 className='font-bebas text-4xl flex gap-2'><FaBasketball/>My Bookings<FaBasketball/></h1>
          </div>
          <p className='text-gray-500 text-center'>Monitor your bookings, schedules, and reservation status anytime.</p>
            <div>
                {
                bookings.length === 0? (<div className='font-bebas text-4xl flex items-center justify-center h-[50vh]'>
                    <h1>You have not booked anything yet!</h1>
                </div>): (<div className='grid gap-4 my-5'>
                    {
                         bookings.map(booking =><div key={booking._id}>
                  <Card>
                     <div className='grid md:grid-cols-5 gap-4'>
                    <div className='relative w-full h-60 col-span-2'>
                         <Image src={booking?.imageUrl} alt={booking.facilityName} fill className="object-cover rounded-xl"></Image>
                    </div>
                   <div className='col-span-2 space-y-3'>
                     <p className='font-bebas text-3xl'>{booking.facilityName}</p>
                     <div className='space-y-2'>
                        <p><span className='font-semibold'>Bookind Id: </span>{booking.facilityId}</p>
                        <p><span className='font-semibold'>Booking Date: </span>{booking?.bookingDate}</p>
                        <p><span className='font-semibold'>Time Slot: </span>{booking?.timeSlot}</p>
                        <p><span className='font-semibold'>Total Amount: </span><span className='text-green-600 font-bebas text-2xl'>${booking.totalPrice}</span></p>
                        <Chip color="warning" className='font-bebas text-xl'>
        <Clock width={12} />
        <Chip.Label>{booking.status}</Chip.Label>
      </Chip>
                     </div>
                   </div>
                   <div className='col-span-1 flex md:justify-end'>
                    <CancelBooking bookingId={booking._id} booking={booking}></CancelBooking>
                   </div>
                   </div>
                  </Card>
                 </div>)
                    }
                </div>)
                }
            </div>
        </div>
    );
};

export default BookingPage;