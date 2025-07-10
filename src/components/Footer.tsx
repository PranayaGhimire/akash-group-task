import { navLinks } from '@/constants/navLinks'
import Link from 'next/link'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaPhoneSquareAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='p-[16px] bg-gradient-to-l from-zinc-700 to-zinc-900 text-white'>
        <div className='flex flex-col  ml-5  md:flex-row space-y-5 md:space-y-0   md:justify-evenly'>
            <div className='space-y-5'>
                <p className='text-teal-500'>Pranaya Labs</p>
                <p className='flex space-x-2 items-center'><SiGmail className='bg-red-500 p-1 text-2xl' /> <span>pranayaghimire88083@gmail.com</span></p>
                <p className='flex space-x-2 items-center'><FaPhoneSquareAlt className='bg-teal-500 p-1 text-2xl' /> <span>+977 9840505684</span></p>
            </div>
            <div>
                <p className='text-teal-500 font-semibold'>Quick Links</p>
                 <div className='space-y-3 p-[16px]'>
                    {navLinks.map((navLink,index)=>
                        <div key={index} className=''>
                            <Link
                                href={navLink.route} className={`font-semibold`}>
                                {navLink.name}
                            </Link>
                        </div> 
                    )}    
                </div>
            </div>
            <div className='space-y-5'>
                <p className='text-teal-500 font-semibold'>Get Connected</p>
                <div className='flex flex-wrap space-x-3 space-y-3'>
                    <Link href={'https://www.facebook.com/pranaya.ghimire.9'}>
                        <FaFacebook className='text-xl text-blue-600' />
                    </Link>
                    <Link href={'https://www.instagram.com/pranaya_ghimire/'}>
                         <FaInstagramSquare className='text-xl bg-gradient-to-bl from-pink-700 to-orange-700' />
                    </Link>
                    <Link href={'https://github.com/PranayaGhimire'}>
                         <FaGithub className='text-xl' />
                    </Link>
                    <Link href={'https://www.linkedin.com/in/pranaya-ghimire-8774a7253/'}>
                        <FaLinkedin className='text-xl text-blue-500' />
                    </Link>
                    <Link href={'https://x.com/Pranaya_ghimire'}>
                          <FaXTwitter className='text-xl' />
                    </Link>
                </div>
            </div>
        </div>
        <p className='ml-5 md:text-center'>&copy;2025 | All Rights Reserved </p>
    </div>
  )
}

export default Footer
