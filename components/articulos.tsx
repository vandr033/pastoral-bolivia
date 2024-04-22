import React from 'react'
import Image from 'next/image'
import img from '@/public/assets/images/voluntarias.webp';
import Link from 'next/link';
type Props = {
    img: string;
    title: string;
    author: string;
    date: string;
    content: string;
    link: string;
}

const ArticulosComponent = (props: Props) => {
  return (
    <Link href={props.link}>
<div className='w-full bg-white flex flex-row rounded-3xl '>
    <div className='w-1/5 relative'>
    <Image src={props.img} alt='voluntarias'  layout='fill'
    objectFit='contain' className=' py-4 pl-4 ' />
    </div>
            <div className='flex flex-col py-4 pl-4'>
            <h1 className='text-3xl font-semibold text-[#bbbbba] '>
            {props.title}
            </h1>
            <h3 className='text-lg text-[#d99cfb]'>
                {props.author} <br /> {props.date}
            </h3>
            <p className='text-lg text-black'>
                {props.content}
            </p>
            </div>
        </div>
        </Link>)
}

export default ArticulosComponent