'use client'
import { IContactUs } from '@/types/types';
import React from 'react'
import {useForm} from 'react-hook-form';
const ContactUsForm = () => {
    const {register,handleSubmit} = useForm<IContactUs>();
    const onSubmit = (data:IContactUs) => {
        console.log(data);
    }
  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full  space-y-5'>
            <p className='text-3xl font-bold text-teal-800'>Drop A Line</p>
            <div className='md:flex md:space-x-5 space-y-5 md:space-y-0'>
                <input {...register('name')} placeholder='Name' 
                className='w-full bg-teal-100 border-2 border-teal-400 px-[16px] py-[8px] rounded-[8px]'/>
                <input {...register('email')} type='email' placeholder='Email' 
                className='w-full bg-teal-100 border-2 border-teal-400 px-[16px] py-[8px] rounded-[8px]'/>
            </div>
            <div className=' md:flex md:space-x-5 space-y-5 md:space-y-0'>
                <input  {...register('phoneNumber')} type='number' placeholder='Phone Number' 
                className='w-full bg-teal-100 border-2 border-teal-400 px-[16px] py-[8px] rounded-[8px]'/>
                <select {...register('service')} 
                className='w-full bg-teal-100 border-2 border-teal-400 px-[16px] py-[8px] rounded-[8px]'>
                    <option value="">Choose Service</option>
                    <option value="Website Development">Website Development</option>
                    <option value="App Development">App Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                </select>
            </div>
            <input {...register('companyName')} placeholder='Company Name' 
            className='w-full bg-teal-100 border-2 border-teal-400 px-[16px] py-[8px] rounded-[8px]'/>
            <textarea {...register('message')} 
            placeholder='Message Here' className='w-full block bg-teal-100 border-2 border-teal-400 px-[16px] py-[8px] rounded-[8px]'/>
            <button className='w-full bg-teal-500 text-white p-2 rounded-md cursor-pointer hover:bg-teal-600'>
                Submit
            </button>
        </form>
    </>
  )
}

export default ContactUsForm
