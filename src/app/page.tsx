import Image from "next/image";
import Link from "next/link";
import image from "../assets/WhatweDo.4a238bb.jpeg";
import whoWeAre from "../assets/whoweare.svg";
import whatWeDo from "../assets/whatwedo.svg";
import whyDoWeDoIt from "../assets/whydowedoit.svg";
import { FaArrowRight, FaPhoneSquareAlt } from "react-icons/fa";
import ContactUsForm from "@/components/ContactUsForm";
import { IoLocation } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
export default function Home() {
  return (
    <div className="">
        <div className="flex flex-col justify-center items-center space-y-5 bg-cyan-500 h-170 p-[28px] text-white">
            <p className=" font-bold text-5xl">Grow <span className="text-yellow-500">Your</span> Business With Us </p>
            <p className="text-xl text-center">Pranaya Labs combines technology with business intelligence to catalyze change and deliver data driven results. We're a dynamic team of passionate people with technical, creative & digital expertise.</p>
            <p className="text-xl">where technology meets marketing</p>
            <Link href={'/contactUs'} >
              <button className="w-50 h-12 bg-amber-600 hover:bg-amber-700 rounded-[16px] p-2 cursor-pointer">
                   Get Free Consultation 
              </button>
            </Link>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-5  ">
            <div className="p-5 md:ml-40  w-full space-y-10">
                <p className="font-bold text-4xl">Our experienced team is committed to grow your business with online leads, calls, conversion and revenue.</p>
                <div className="flex space-x-3" >
                    <div className="w-24 md:w-12 h-12 relative">
                          <Image src={whoWeAre} alt="" fill className="absolute"/>
                    </div>
                    <div className="space-y-2">
                        <p className="font-bold">WHO WE ARE</p>
                        <p className="text-zinc-600">A unique blend of creative, editorial, digital and technical experts obsessed with getting quantifiable results.</p>
                    </div>
                </div>
                <div className="flex space-x-3" >
                    <div className="w-24 md:w-12 h-12 relative">
                          <Image src={whatWeDo} alt="" fill className="absolute"/>
                    </div>
                    <div className="space-y-2">
                        <p className="font-bold">WHAT WE DO</p>
                        <p className="text-zinc-600">Converge at the intersection of technology and human behavior. We capitalize on the perks of data-driven marketing.</p>
                    </div>
                </div>
                <div className="flex space-x-3" >
                    <div className="w-12 h-12 relative">
                          <Image src={whyDoWeDoIt} alt="" fill className="absolute"/>
                    </div>
                    <div className="space-y-2">
                        <p className="font-bold">WHY DO WE DO IT </p>
                        <p className="text-zinc-600">Passion for excellence drives us. Curiosity keeps us alive.</p>
                    </div>
                </div>
            </div>
            <div className="md:w-[60%]  h-150 relative my-5">
                <Image src={image} alt="" fill className="absolute "/>
                <Link href={'/aboutUs'} className="w-50 absolute -bottom-10 right-0 bg-teal-500 p-[16px]  text-white ">
                    <div className="">
                        <p className="ml-3">Explore</p>
                        <div className="flex space-x-5 items-center justify-center">
                            <p className="font-semibold">More About Us</p>
                            <FaArrowRight />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
         <div className='space-y-5 md:flex space-x-20 p-[28px] my-20  md:my-0 md:p-[170px]'>
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
    </div>
  );
}
