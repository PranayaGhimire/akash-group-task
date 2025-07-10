import Image from 'next/image'
import React from 'react'
import aboutUs from "../../assets/aboutUs.jpg";
const AboutUsPage = () => {
  return (
    <div className='h-250'>
        <div className='flex flex-col  md:flex-row gap-10 mt-20'>
            <div className='w-full pl-[16px] md:pl-60 space-y-5'>
                <div className='space-y-2'>
                    <hr className='w-20 border-2 border-teal-500' />
                    <p className='text-zinc-600 text-sm font-bold'>Company Profile</p>
                </div>
                <p className='text-4xl text-teal-700 font-bold leading-12'>Create A Strong Business Presence</p>
                <p className='leading-7 text-zinc-600'>Combining our unrivaled specialism in specific digital activities with a strategic & differentiated approach, Aakash Labs is able to meet the increasingly complex needs of clients in an effortless yet productive manner in the constantly evolving digital landscape.</p>
                <button className='w-28 bg-teal-500 hover:bg-teal-600 cursor-pointer p-2 rounded-[16px] text-white'>
                    See All
                </button>
            </div>
            <div className='w-full h-100 relative '>
                <Image src={aboutUs} alt='' fill/>
            </div>
        </div>
        <div className='space-y-10'>
            <p className='text-4xl text-teal-700 font-bold'>The Team</p>
        </div>
    </div>
  )
}

export default AboutUsPage
