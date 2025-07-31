import Image, { StaticImageData } from 'next/image'
import React from 'react'
interface Props {
    photo:StaticImageData,
    name:string,
    post:string
}
const Team = (props:Props) => {
  return (
    <div className='w-50 space-y-5'>
        <div className='w-50 h-50  relative'>
            <Image src={`https://avatar.iran.liara.run/username?username=${props.name}`} alt='' fill className='rounded-full'/>
        </div>
        <div>
            <p className='font-bold text-xl'>{props.name}</p>
            <p className='text-zinc-600 text-xl'>{props.post}</p>
        </div>
    </div>
  )
}

export default Team
