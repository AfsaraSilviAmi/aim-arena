'use client'
import React, { useState } from 'react';
import FacilityCard from './FacilityCard';
import {Label, SearchField, Dropdown, Header, Button} from '@heroui/react';
import { CiFilter } from 'react-icons/ci';

export default function SearchAndFilter({ initialData }) {
  const [facilities, setFacilities] = useState(initialData);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");

  const fetchFacilities = async (searchValue, typeValue) => {
    const query = new URLSearchParams();

    if (searchValue) query.append("search", searchValue);
    if (typeValue && typeValue !== "All") query.append("type", typeValue);

    const res = await fetch(
      `http://localhost:8000/facilities?${query.toString()}`
    );

    const data = await res.json();
    setFacilities(data);
  };

 
  const handleSearchClick = () => {
  fetchFacilities(search, type);
};

  const handleTypeChange = (keys) => {
    const selected = Array.from(keys)[0] || "All";
    setType(selected);
    fetchFacilities(search, selected);
  };

  return (
    <div>

      <div className="md:flex justify-between space-y-3">

      
       <SearchField>
  <Label className='font-bebas text-xl'>Search Facilities</Label>

  <SearchField.Group>
    <SearchField.Input
      className="w-80"
      placeholder="Search by facility name..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    
    <Button
      onClick={handleSearchClick}
      className="px-4 py-2 rounded-xl bg-[#219ebc] text-white hover:bg-[#8ecae6]"
    >
      Search
    </Button>

  </SearchField.Group>
</SearchField>
     
        <Dropdown>
         
            <Button className="px-4 py-2 rounded-xl border text-black bg-white text-xl shadow flex items-center gap-2 font-bebas">
              {type === "All" ? "All Types" : type}<CiFilter />
            </Button>
         
          <Dropdown.Popover className="min-w-55">
            <Dropdown.Menu
              selectionMode="single"
              selectedKeys={new Set([type])}
              onSelectionChange={handleTypeChange}
            >
              <Dropdown.Section>
                <Header>Filter By Type</Header>

                <Dropdown.Item id="All">All Types</Dropdown.Item>
                <Dropdown.Item id="Football">Football</Dropdown.Item>
                <Dropdown.Item id="Basketball">Basketball</Dropdown.Item>
                <Dropdown.Item id="Cricket">Cricket</Dropdown.Item>
                <Dropdown.Item id="Tennis">Tennis</Dropdown.Item>
                <Dropdown.Item id="Swimming">Swimming</Dropdown.Item>
                <Dropdown.Item id="Volleyball">Volleyball</Dropdown.Item>

              </Dropdown.Section>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>

      </div>

     
      { facilities.length > 0 ? 
      ( <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
         { 
         facilities.map(facility =><FacilityCard key={facility._id} facility={facility}></FacilityCard>) }
          </div> ):
           (<div className='flex justify-center font-bebas text-5xl items-center h-[50vh]'>
             <h1>The facility you are looking for can not be found! Please Search Another</h1> 
             </div>) }

    </div>
  );
}