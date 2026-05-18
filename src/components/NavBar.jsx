'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Dropdown, Label } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
     const pathname = usePathname()
     const {
        data: session,
        isPending
    } = authClient.useSession()
if (isPending) return null;
const user = session?.user
const handleLogOut = async() =>{
await authClient.signOut()
}

    return (
        <div>
             <nav className="sticky top-0 z-40 w-full border-b border-separator backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <Link href={"/"}><div className='text-xl flex items-center font-semibold'>
            <Image src={"/logo.png"} alt="logo" width={40} height={40}></Image> <span className='italic bg-gradient-to-r from-[#023047] via-[#219ebc] to-[#8ecae6] bg-clip-text text-transparent'>Aim<span>Arena</span></span>
          </div></Link>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li>
           <Link className={`${pathname === '/' ? 'text-[#ffb703] border-b-[#fb8500] border-b' : ''}`} href={"/"}>Home</Link>

          </li>
          <li>
            <Link className={`${pathname === '/all-facility' ? 'text-[#ffb703] border-b-[#fb8500] border-b' : ''}`}  href={"/all-facility"}>All Facilities</Link>
          </li>
          <li>
            <Link className={`${pathname === '/booking' ? 'text-[#ffb703] border-b-[#fb8500] border-b' : ''}`}  href={"/booking"}>My Bookings</Link>
          </li>
          <li>
            <Link className={`${pathname === '/add-facility' ? 'text-[#ffb703] border-b-[#fb8500] border-b' : ''}`}  href={"/add-facility"}>Add Facility</Link>
          </li>
          <li>
            <Link className={`${pathname === '/manage-facility' ? 'text-[#ffb703] border-b-[#fb8500] border-b' : ''}`}  href={"/manage-facility"}>Manage Facilities</Link>
          </li>
        </ul>
        {
            user? (<div>  <Dropdown>
      <Button aria-label="Menu" className="bg-transparent">
        <Avatar>
        <Avatar.Image alt={user.name} src={user.image} />
        <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
      </Avatar>
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="new-file" textValue="New file">
           <Link className={`font-semibold ${pathname === '/booking' ? 'text-[#ffb703] border-b-[#fb8500] border-b' : ''}`}  href={"/booking"}>My Bookings</Link>
          </Dropdown.Item>
          <Dropdown.Item id="copy-link" textValue="Copy link">
            <Link className={`font-semibold ${pathname === '/add-facility' ? 'text-[#ffb703] border-b-[#fb8500] border-b' : ''}`}  href={"/add-facility"}>Add Facility</Link>
          </Dropdown.Item>
          <Dropdown.Item id="edit-file" textValue="Edit file">
            <Link className={`font-semibold ${pathname === '/manage-facility' ? 'text-[#ffb703] border-b-[#fb8500] border-b' : ''}`}  href={"/manage-facility"}>Manage My Facilities</Link>
          </Dropdown.Item>
          <Dropdown.Item
  id="logout"
  textValue="Logout"
  variant="danger"
  onAction={handleLogOut}
  className='text-red-400 font-semibold'
>
  Logout
</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown></div>): (<div><Link href={"/login"}><Button  className={`font-bebas bg-linear-to-r from-[#023047] via-[#219ebc] to-[#8ecae6] text-lg py-3 px-7 border-[#ffb703] border-2 transition-all duration-300 hover:scale-105 hover:from-[#ffb703] hover:to-blue-200 hover:border-blue-500 animate__animated animate__pulse animate__infinite animate__slow`}>Login</Button></Link></div>)
        }
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
          <li>
           <Link className={`${pathname === '/' ? 'text-[#ffb703] border-b-[#fb8500] border-b' : ''}`} href={"/"}>Home</Link>

          </li>
          <li>
            <Link className={`${pathname === '/all-facility' ? 'text-[#ffb703] border-b-[#fb8500] border-b' : ''}`}  href={"/all-facility"}>All Facilities</Link>
          </li>
          <li>
            <Link className={`${pathname === '/booking' ? 'text-[#ffb703] border-b-[#fb8500] border-b' : ''}`}  href={"/booking"}>My Bookings</Link>
          </li>
          <li>
            <Link className={`${pathname === '/add-facility' ? 'text-[#ffb703] border-b-[#fb8500] border-b' : ''}`}  href={"/add-facility"}>Add Facility</Link>
          </li>
          <li>
            <Link className={`${pathname === '/manage-facility' ? 'text-[#ffb703] border-b-[#fb8500] border-b' : ''}`}  href={"/manage-facility"}>Manage My Facilities</Link>
          </li>
          </ul>
        </div>
      )}
    </nav>
        </div>
    );
};

export default NavBar;