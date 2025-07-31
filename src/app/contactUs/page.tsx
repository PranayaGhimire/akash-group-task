import ContactUsForm from '@/components/ContactUsForm'
import React from 'react'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { IoLocation } from 'react-icons/io5'
import { SiGmail } from 'react-icons/si'

const ContactUsPage = () => {
  return (
    <div className=''>
        <div className='w-[98%] bg-teal-700 h-90 text-white flex flex-col justify-center items-center space-y-3'>
            <p className='font-semibold text-xl'>Contact Us</p>
            <p className='font-bold text-5xl'>Get In Touch</p>
        </div>
        <div className='space-y-5 md:flex p-5 md:p-24 md:space-x-10'>
            <div className='w-full space-y-5 '>
                <p className='text-3xl font-bold text-teal-800'>Contact Us</p>
                <p className='text-zinc-700'>We at Pranaya Labs can provide you with unparalleled insight and digital marketing analysis. For assistance with any inquiries, or if you require our services, reach out to us at: </p>
                <div className='flex space-x-3 items-center'>
                    <FaPhoneSquareAlt className='bg-teal-500 text-white p-1 text-3xl rounded-full' />
                    <div className='flex flex-col space-x-1'>
                        <p className='font-semibold'>Call Us</p>
                        <p className='text-zinc-700'>+977 9840505684</p>
                    </div>
                </div>
                <div className='flex space-x-3 items-center'>
                    <SiGmail className='bg-red-500 text-white p-1 text-3xl rounded-full' />
                    <div className='flex flex-col space-x-1'>
                        <p className='font-semibold'>Email</p>
                        <p className='text-zinc-700'>pranayaghimire88083@gmail.com</p>
                    </div>
                </div>
                <div className='flex space-x-3 items-center'>
                    <IoLocation className='bg-cyan-500 text-white p-1 text-3xl rounded-full' />
                    <div className='flex flex-col space-x-1'>
                        <p className='font-semibold'>Address</p>
                        <p className='text-zinc-700'>SS Plaza, 3rd Floor, Jwalakhel, Lalitpur, Nepal</p>
                    </div>
                </div>
            </div>
            <ContactUsForm/>
        </div>
        <div className='p-[28px] flex flex-col items-center space-y-10'>
            <p className='text-3xl font-bold text-teal-800'>Find Us At</p>
            <div className='md:flex  md:justify-evenly md:space-x-12 space-y-10'>
                <div className='w-70 flex flex-col items-center space-y-3'>
                    <IoLocation className='bg-cyan-500 text-white p-1 text-3xl rounded-full' />
                    <div className='flex flex-col items-center space-x-1'>
                        <p className='font-semibold'>Address</p>
                        <p className='text-zinc-700 text-center'>SS Plaza, 3rd Floor, Jwalakhel, Lalitpur, Nepal</p>
                    </div>
                </div>
                <div className='w-70 flex flex-col items-center space-y-3'>
                    <SiGmail className='bg-red-500 text-white p-1 text-3xl rounded-full' />
                    <div className='flex flex-col items-center space-x-1'>
                        <p className='font-semibold'>Mail</p>
                        <p className='text-zinc-700 text-center'>pranayaghimire88083@gmail.com</p>
                    </div>
                </div>
                <div className='w-70 flex flex-col items-center space-y-3'>
                     <FaPhoneSquareAlt className='bg-teal-500 text-white p-1 text-3xl rounded-full' />
                    <div className='flex flex-col items-center space-x-1'>
                        <p className='font-semibold'>Phone</p>
                        <p className='text-zinc-700 text-center'>+977 9840505684</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default ContactUsPage
