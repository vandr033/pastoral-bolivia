import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
type Props = {
    nombres: string,
    foto: StaticImport,
    ubicacion: string,
}

const NosotrosFotos = ({nombres, foto, ubicacion}: Props) => {
  return (
    <div className='w-[35%] flex flex-col bg-[#d48efb] items-center p-4'>
      <h1 className='text-black text-left font-bold text-xl'>{nombres}</h1>
      <Image src={foto} alt='' width={450} height={225} ></Image>
      <h1 className='text-black text-left font-bold text-3xl'>{ubicacion}</h1>
      <div className='flex flex-row'></div>
    </div>
    )
}

export default NosotrosFotos