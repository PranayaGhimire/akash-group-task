import Image from 'next/image'
import React from 'react'
import career from "../../assets/career-banner.c661e19.png";
import Career from '@/components/Career';
import { careersFirst, careersSecond } from '@/constants/careers';

const CareerPage = () => {
  return (
    <div className=''>
        <div className='relative w-full h-130'>
            <Image src={career} alt='' fill className='object-cover'/>
        </div>
        <div className='flex flex-col md:flex-row md:items-center gap-15 p-[16px] md:p-20'>
            <div className='flex gap-8'>
                <div className='w-full space-y-8'>
                      {careersFirst.map((career,index) => 
                          <Career key={index} photo={career.photo} title={career.title} desc={career.desc} />
                      )}
                </div>
                <div className='w-full space-y-8 mt-5'>
                      {careersSecond.map((career,index) => 
                          <Career key={index} photo={career.photo} title={career.title} desc={career.desc}/>
                      )}
                </div>
            </div>
            <div className='space-y-5'>
                  <p className='text-teal-700 font-bold text-5xl'>Life At Pranaya Labs</p>
                  <p className='text-zinc-700'>Work culture at Pranaya Labs has always been focused to cultivate the learning environment that supports innovation and agility. We thrive in deriving results through teamwork that acknowledges individual contribution to the bigger picture. All ideas are designed and developed by our team from scratch to ensure our company's goal is carried out.</p>
            </div>
        </div>
        <div className='mt-10 mb-30 flex justify-center  '>
            <div className='w-170 space-y-10'>
              <p className='text-teal-700 font-bold text-4xl text-center'>Recent Job Openings</p>
              <p className='text-center text-zinc-700'>We are always looking for creative, talented self-starters to join our family. Check out our open positions and fill out an application</p>
            </div>
        </div>
    
    </div>
  )
}

export default CareerPage
