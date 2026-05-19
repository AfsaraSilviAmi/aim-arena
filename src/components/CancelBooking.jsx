"use client";

import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import {AlertDialog, Button} from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function CancelBooking({bookingId, booking}) {
  const router = useRouter()
    const handleCancelBooking = async() =>{
        const {data:tokenData} = await authClient.token()
        const res = await fetch(`http://localhost:8000/bookings/${bookingId}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${tokenData?.token}`
            }
        })
        const data = await res.json()

        if(data){
          toast.warning("Booking has been cancelled")
          router.refresh()

        }else{
          toast.danger("Booking Could Not be Cancelled!")
        }
    }
  return (
    <AlertDialog>
     <Button variant="danger-soft" className="rounded-md">
        <TrashBin />
        Cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Booking permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{booking.facilityName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleCancelBooking} slot="close" variant="danger-soft">
                Confirm Cancellation
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}