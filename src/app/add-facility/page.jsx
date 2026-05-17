'use client'
import { Button, FieldError, Input, Label, ListBox, TextArea, TextField, Select, Card } from '@heroui/react';
import React from 'react';
import { toast } from 'react-toastify';


const AddFacility = () => {
    const onSubmit = async(e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const facilities = Object.fromEntries(formData.entries())

        const res = await fetch(`http://localhost:8000/facilities`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(facilities)
        })
        const data = await res.json()
        if(data){
            toast.success("Facility has been added")

        }
        else{
            toast.error("Data could not be added")
        }


    }
    return (
        <div>
            <div className='my-5'>
            <div className='mb-5'>
                <h1 className='font-semibold text-4xl text-center font-bebas'>Add Your Facility</h1>
            </div>
            <Card className='bg-gray-50'>
                <form onSubmit={onSubmit}
            className="p-8 space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             
              <div className="md:col-span-2">
                <TextField name="facilityName" isRequired>
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
                >
                  <Label>Facility Type</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Football" textValue="Football">
                        Football
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Tennis" textValue="Tennis">
                        Tennis
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Swimming" textValue="Swimming">
                        Swimming
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Cricket" textValue="Cricket">
                        Cricket
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Basketball" textValue="Basketball">
                        Basketball
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Volleyball" textValue="Volleyball">
                        Volleyball
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>
             
              <TextField name="location" isRequired>
                  <Label>Location</Label>
                  <Input placeholder="Enter Location" className="rounded-2xl" />
                  <FieldError />
                </TextField>

              
              <TextField name="price" type="number" isRequired>
                <Label>Price Per Hour (USD)</Label>
                <Input
                  type="number"
                  placeholder="Enter Price"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

             
              <TextField name="capacity" isRequired>
                <Label>Capacity</Label>
                <Input
                  placeholder="Enter Capacity"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

             
           <div>
  <TextField name="time" isRequired>
    <Label>Available Time Slot</Label>

    <Input
      type="time"
      className="rounded-2xl"
    />

    <FieldError />
  </TextField>
</div>
             

             
              <div>
                <TextField name="imageUrl" isRequired>
                  <Label>Image URL</Label>
                  <Input
                    type="url"
                    placeholder="Enter Image URL"
                    className="rounded-2xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label>Description</Label>
                  <TextArea
                    placeholder="Describe the facility..."
                    className="rounded-3xl"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Buttons */}

            <Button
              type="submit"
              variant="outline"
             
              className={`font-bebas bg-linear-to-r from-[#023047] via-[#219ebc] to-[#8ecae6] text-2xl py-6 px-7 border-[#ffb703] border-2 mt-10 transition-all duration-300 hover:scale-105 hover:from-[#ffb703] hover:to-blue-200 hover:border-blue-500 animate__animated animate__pulse animate__infinite animate__slow w-full text-white`}
            >
              Add Facility
            </Button>
          </form>
            </Card>
        </div>

        </div>
    );
};

export default AddFacility;