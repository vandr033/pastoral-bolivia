import React from 'react'
import Image from 'next/image'
type Props = {
    
    img: string;
    title: string;
    date: string;
    publisher: string
    link: string;
}

const VideoComponent = (props: Props) => {
  return (
<div className='bg-[#F2F2F0] rounded-lg flex flex-col px-4 pb-4 mb-12'>
            <Image src={props.img} alt="alt" width={350} height={200} />
            <h1 className='text-lg font-semibold text-black opacity-80'>{props.title}</h1>
            <h1 className='text-base font-semibold text-[#d58dfd]'>{props.publisher}</h1>
            <h1 className='text-base font-semibold text-[#d58dfd]'>{props.date}</h1>
            </div>  )
}

export default VideoComponent