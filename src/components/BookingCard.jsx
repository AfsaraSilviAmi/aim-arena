'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, FieldError, Input, Label, TextField } from '@heroui/react';

import React, { useState } from 'react';
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

        const res = await fetch(`http://localhost:8000/bookings`,{
             method: "POST",
            headers: {
                "Content-Type": "application/json"
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
                <h1>Book Here</h1>
                <form onSubmit={handleBooking}>
                    <TextField>
  <label>Facility Name</label>
  <Input value={facility.facilityName} readOnly />
</TextField>
                    <TextField>
  <label>Email</label>
  <Input value={user?.email || ""} readOnly />
</TextField>
 <TextField>
  <label>Price Per Hour (USD)</label>
  <Input value={pricePerHour} readOnly />
</TextField>
                    <TextField>
  <label>Time SLot</label>
  <Input value={facility.time} readOnly />
  
</TextField>
                    <div>
          <TextField name={date} isRequired>
              <Label>Booking Date</Label>
          
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
            <Label>Hours</Label>
          <Input
        
            type="number"
            min={1}
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
          </TextField>
        </div>
          <div className="font-bold">
          Total Price: ${totalPrice}
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