'use client'
import { authClient } from '@/lib/auth-client';
import { TrashBin } from '@gravity-ui/icons';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
import { toast } from 'react-toastify';

const DeleteButton = ({facilityId, facility}) => {
   
     const handleDelete = async() =>{
       const {data:tokenData} = await authClient.token()
        const res = await fetch(`http://localhost:8000/facilities/${facilityId}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${tokenData?.token}`
            }
        })
        const data = await res.json()
        if(data){
          toast.error("Facility has been deleted")
           window.location.reload()
        }
        else{
          toast.warning("Deletion failed")
        }
    }
    return (
        <div>
             <AlertDialog>
                  <Button variant="danger-soft" className="font-bebas text-xl"><TrashBin />Delete Facility</Button>
                  <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                      <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                          <AlertDialog.Icon status="danger" />
                          <AlertDialog.Heading>Delete Facility permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                          <p>
                            This will permanently delete <strong>{facility.facilityName}</strong> and all of its
                            data. This action cannot be undone.
                          </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                          <Button slot="close" variant="tertiary">
                            Cancel
                          </Button>
                          <Button onClick={handleDelete} slot="close" variant="danger-soft">
                            Confirm Delete
                          </Button>
                        </AlertDialog.Footer>
                      </AlertDialog.Dialog>
                    </AlertDialog.Container>
                  </AlertDialog.Backdrop>
                </AlertDialog>
        </div>
    );
};

export default DeleteButton;