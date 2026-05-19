'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, FieldError, Input, Label, TextField } from '@heroui/react';

import React, { useState } from 'react';
import { IoIosFootball } from 'react-icons/io';
import { toast } from 'react-toastify';

const BookingCard = ({facility}) => {
    const {
            data: session,
            isPending
        } = authClient.useSession()

        const [hours, setHours] = useState(1)
         const [date, setDate] = useState("");
    if (isPending) return null;
    const user = session?.user
    const pricePerHour = Number(facility.price);
    const totalPrice = Number(facility.price)*Number(hours)

    const handleBooking = async(e) =>{
        e.preventDefault();
        const form = e.target;
        const bookingData = {
            facilityId: facility._id,
            facilityName: facility.facilityName,
            timeSlot: facility.time,
            imageUrl: facility.imageUrl,
            userId: user.id,
            userImage: user.image,
            userName: user.name,
            userEmail: user.email,

            bookingDate: date,
            hours: Number(form.hours.value),
            pricePerHour,
            totalPrice,
            status: "pending"
           

        }
        
        const {data:tokenData} = await authClient.token()
        const res = await fetch(`http://localhost:8000/bookings`,{
             method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${tokenData?.token}`
                
            },
            body: JSON.stringify(bookingData)
        })
        const data = res.json()

        if(data){
            toast.success("Your Booking is Sucessful")
        }
        else{
            toast.error(error.message)
        }

    }
    return (
        <div>
            <Card>
                <div className='flex justify-center'>
                    <h1 className='font-bebas text-3xl text-center flex gap-1'><IoIosFootball  className="animate-bounce" />Book Here<IoIosFootball  className="animate-bounce"/></h1>
                </div>
                <form onSubmit={handleBooking} className='space-y-5'>
                    <TextField>
  <label className='font-bebas text-lg'>Facility Name</label>
  <Input value={facility.facilityName} readOnly />
</TextField>
                    <TextField>
  <label className='font-bebas text-lg'>Email</label>
  <Input value={user?.email || ""} readOnly />
</TextField>
 <TextField>
  <label className='font-bebas text-lg'>Price Per Hour (USD)</label>
  <Input value={pricePerHour} readOnly />
</TextField>
                    <TextField>
  <label className='font-bebas text-lg'>Time SLot</label>
  <Input value={facility.time} readOnly />
  
</TextField>
                    <div>
          <TextField name={date} isRequired>
              <Label className='font-bebas text-lg'><span className='text-red-400'>Enter</span> Booking Date</Label>
          
              <Input
                type="date"
                className="rounded-2xl"
                 onChange={(e) => setDate(e.target.value)}
              />
          
              <FieldError/>
            </TextField>
        </div>

         <div className='flex flex-col'>
          <TextField name="hours" isRequired>
            <Label className='font-bebas text-lg'><span className='text-red-400'>Enter </span>Hours</Label>
          <Input
        
            type="number"
            min={1}
            value={hours}
            onChange={(e) => setHours(e.target.value)}
           
          />
          </TextField>
        </div>
          <div className="font-bebas text-3xl">
         <span className=' text-[#8ecae6] p-2 rounded-lg bg-[#023047]'> Total Price: ${totalPrice}</span>
        </div>
         <Button
          type="submit"
         className={`font-bebas w-full bg-linear-to-r from-[#023047] via-[#219ebc] to-[#8ecae6] text-2xl py-6 px-7 border-[#ffb703] border-2 mt-10 transition-all duration-300 hover:scale-110 hover:from-[#ffb703] hover:to-blue-200 hover:border-blue-500 animate__animated animate__pulse animate__infinite animate__slow`}
        >
          Confirm Booking
        </Button>
                </form>

            </Card>
        </div>
    );
};

export default BookingCard;