import Image, { StaticImageData } from 'next/image'
import React from 'react'
interface Props{
    photo:StaticImageData,
    title:string,
    desc:string
}
const Career = (props:Props) => {
  return (
    <div className='bg-teal-100 p-[16px] border-2 border-teal-500 space-y-5'>
        <div className='relative'>
            <Image src={props.photo} alt=''/>
        </div>
        <div className='space-y-1'>
            <p className='font-bold text-xl'>{props.title}</p>
            <p className='text-sm text-zinc-700 '>{props.desc}</p>
        </div>
    </div>
  )
}

export default Career
