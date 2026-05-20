"use client"
import { authClient } from '@/lib/auth-client';
import { Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField, Select } from '@heroui/react';
import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';

const EditModal = ({facility}) => {
    const onSubmit = async(e)=>{
        e.preventDefault()
         const formData = new FormData(e.currentTarget);
                const updatedFacility = Object.fromEntries(formData.entries())
                 const {data:tokenData} = await authClient.token()
                const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${facility._id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${tokenData?.token}`
                    },
                    body: JSON.stringify(updatedFacility)
                })
                const data = await res.json()
                if(data){
                    toast.success("Facility has been Updated")
                    window.location.reload()
        
                }
                else{
                    toast.error("Nothing was Updated")
                }
        
        
            
        
    }
    return (
        <div>
             <Modal>
      <Button className="text-[#023047] bg-[#8ecae6] font-bebas text-xl"><FaEdit />Update Facility</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-lg">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
              <FaEdit />
              </Modal.Icon>
              <Modal.Heading className='font-bebas text-2xl'>Update Facility</Modal.Heading>
              
            </Modal.Header>
            <Modal.Body className="p-4 ">
              <Surface variant="default">
               <form onSubmit={onSubmit}
                           className="space-y-8"
                         >
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            
                             <div className="md:col-span-2">
                               <TextField name="facilityName" isRequired defaultValue={facility.facilityName}>
                                 <Label>Facility Name</Label>
                                 <Input placeholder="Enter Your Facility Name" className="rounded-2xl" />
                                 <FieldError />
                               </TextField>
                             </div>
               
                            
                <div>
                               <Select
                                 name="type"
                                 isRequired
                                 className="w-full"
                                 placeholder="Select Facility Type"
                                 defaultValue={facility.type}
                               >
                                 <Label>Facility Type</Label>
                                 <Select.Trigger className="rounded-2xl">
                                   <Select.Value />
                                   <Select.Indicator />
                                 </Select.Trigger>
                                 <Select.Popover>
                                   <ListBox>
                                     <ListBox.Item id="Football" textValue="Football">
                                       Football turf
                                       <ListBox.ItemIndicator />
                                     </ListBox.Item>
                                     <ListBox.Item id="Tennis" textValue="Tennis">
                                       Tennis court
                                       <ListBox.ItemIndicator />
                                     </ListBox.Item>
                                     <ListBox.Item id="Swimming" textValue="Swimming">
                                       Swimming lane
                                       <ListBox.ItemIndicator />
                                     </ListBox.Item>
                                     <ListBox.Item id="Cricket" textValue="Cricket">
                                       Cricket feild
                                       <ListBox.ItemIndicator />
                                     </ListBox.Item>
                                     <ListBox.Item id="Basketball" textValue="Basketball">
                                       Basketball court
                                       <ListBox.ItemIndicator />
                                     </ListBox.Item>
                                     <ListBox.Item id="Volleyball" textValue="Volleyball">
                                       Volleyball court
                                       <ListBox.ItemIndicator />
                                     </ListBox.Item>
                                   </ListBox>
                                 </Select.Popover>
                               </Select>
                             </div>
                            
                             <TextField name="location" isRequired defaultValue={facility.location}>
                                 <Label>Location</Label>
                                 <Input placeholder="Enter Location" className="rounded-2xl" />
                                 <FieldError />
                               </TextField>
               
                             
                             <TextField name="price" type="number" isRequired defaultValue={facility.price}>
                               <Label>Price Per Hour (USD)</Label>
                               <Input
                                 type="number"
                                 placeholder="Enter Price"
                                 className="rounded-2xl"
                               />
                               <FieldError />
                             </TextField>
               
                            
                             <TextField name="capacity" isRequired defaultValue={facility.capacity}>
                               <Label>Capacity</Label>
                               <Input
                                 placeholder="Enter Capacity"
                                 className="rounded-2xl"
                               />
                               <FieldError />
                             </TextField>
               
                            
                          <div>
                 <TextField name="time" isRequired defaultValue={facility.time}>
                   <Label>Available Time Slot</Label>
               
                   <Input
                     type="text"
                     placeholder='ex- 9 am - 10 am'
                     className="rounded-2xl"
                   />
               
                   <FieldError />
                 </TextField>
               </div>
                            
               
                            
                             <div>
                               <TextField name="imageUrl" isRequired defaultValue={facility.imageUrl}>
                                 <Label>Image URL</Label>
                                 <Input
                                   type="url"
                                   placeholder="Enter Image URL"
                                   className="rounded-2xl"
                                 />
                                 <FieldError />
                               </TextField>
                             </div>
               
                           
                             <div className="md:col-span-2">
                               <TextField name="description" isRequired defaultValue={facility.description}>
                                 <Label>Description</Label>
                                 <TextArea
                                   placeholder="Describe the facility..."
                                   className="rounded-3xl"
                                 />
                                 <FieldError />
                               </TextField>
               
               
                             </div>
                           </div>
               
                          
               
                           <Button
                             type="submit"
                             variant="outline"
                            
                             className={`font-bebas bg-linear-to-r from-[#023047] via-[#219ebc] to-[#8ecae6] text-2xl py-6 px-7 border-[#ffb703] border-2 mt-10 transition-all duration-300 hover:scale-105 hover:from-[#ffb703] hover:to-blue-200 hover:border-blue-500 animate__animated animate__pulse animate__infinite animate__slow w-full text-white`}
                           >
                             Update Facility
                           </Button>
                         </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
        </div>
    );
};

export default EditModal;