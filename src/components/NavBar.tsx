'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { navLinks } from '@/constants/navLinks';
const NavBar = () => {
    const [selectedNav,setSelectedNav] = useState('Home');
  return (
    <nav className='flex justify-around items-center bg-gradient-to-bl from-zinc-700 to-zinc-900  h-16 text-white'>
        <p className='font-bold'>Pranaya Labs</p>
        <div className='hidden md:flex space-x-10 '>
            {navLinks.map((navLink,index)=>
                <div key={index} className=''>
                    <Link onClick={() => setSelectedNav(navLink.name)} 
                        href={navLink.route} className={`font-semibold  ${selectedNav === navLink.name && 'text-teal-400'}`}>
                        {navLink.name}
                    </Link>
                    {selectedNav === navLink.name && <hr className='mt-2 w-8 border-2 border-teal-400  ' />}
                </div> 
            )}          
        </div>
        <Sheet>
            <SheetTrigger asChild>
                <IoMenu className='md:hidden text-xl' />   
            </SheetTrigger>
            <SheetContent className='w-full bg-gradient-to-tl from-zinc-700 to-zinc-900 text-white '>
                <SheetHeader>
                    <SheetTitle className='text-white'>Pranaya App</SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                <div className='space-y-3 p-[16px]'>
                      {navLinks.map((navLink,index)=>
                <div key={index} className=''>
                    <Link onClick={() => setSelectedNav(navLink.name)} 
                        href={navLink.route} className={`font-semibold  ${selectedNav === navLink.name && 'text-teal-400'}`}>
                        {navLink.name}
                    </Link>
                    {selectedNav === navLink.name && <hr className='mt-2 w-8 border-2 border-teal-400  ' />}
                </div> 
            )}    
                </div>
               
            </SheetContent>
        </Sheet>
    </nav>
  )
}

export default NavBar
