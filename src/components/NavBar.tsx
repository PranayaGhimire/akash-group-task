'use client'
import Link from 'next/link'
import React from 'react'
import { IoMenu } from "react-icons/io5";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { navLinks } from '@/constants/navLinks';
import { usePathname } from 'next/navigation';
const NavBar = () => {
   const pathname = usePathname();
  return (
    <nav className='flex justify-between px-10 items-center bg-gradient-to-bl from-zinc-700 to-zinc-900  h-16 text-white'>
        <p className='font-bold'>Pranaya Labs</p>
        <div className='hidden md:flex space-x-10 '>
            {navLinks.map((navLink,index)=>{
                const isActive = pathname === navLink.route;
                return <div key={index} className=''>
                    <Link href={navLink.route} 
                    className={`font-semibold  ${isActive && 'text-teal-400'}`}>
                        {navLink.name}
                    </Link>
                    {isActive && <hr className='mt-2 w-8 border-2 border-teal-400  ' />}
                </div>} 
            )}          
        </div>
                <Link href={'/contactUs'}>
            <button className='w-36 bg-teal-500 hover:bg-teal-600 cursor-pointer p-1.5 rounded-[16px]'>
                Start A Project
            </button>
        </Link>
        <Sheet>
            <SheetTrigger asChild>
                <IoMenu className='md:hidden text-xl' />   
            </SheetTrigger>
            <SheetContent className='w-full bg-gradient-to-tl from-zinc-700 to-zinc-900 text-white '>
                <SheetHeader>
                    <SheetTitle className='text-white'>Pranaya Labs</SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                <div className='space-y-3 p-[16px]'>
                    {navLinks.map((navLink,index)=>{
                        const isActive = pathname === navLink.route;
                        return <div key={index} className=''>
                            <Link href={navLink.route} className={`font-semibold  ${isActive && 'text-teal-400'}`}>
                                    {navLink.name}
                            </Link>
                            {isActive && <hr className='mt-2 w-8 border-2 border-teal-400  ' />}
                        </div> }
                     )}    
                </div>
               
            </SheetContent>
        </Sheet>
    </nav>
  )
}

export default NavBar
