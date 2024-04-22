import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Link from 'next/link'
type Props = {
    nombre:string,
    foto:StaticImport
    parroquia:string,
    numero:string
}

const Coordinadores = ({nombre, foto, parroquia, numero}: Props) => {
    if(numero!=''){
  return (
<div className='flex flex-col w-[32%] gap-5'>
        <div className='flex flex-row'>
          <Image src={foto} alt='' ></Image>
          <h1 className='text-black text-start font-bold text-[20px] ml-3'>{nombre} <br/> {numero} </h1>
        </div>
        <p className='text-[25px] text-gray-700'>{parroquia}</p>
        <button  className='bg-[#00A854] text-white py-2 px-12 rounded-lg'>        <Link href={`https://api.whatsapp.com/send/?phone=591${numero}&text&type=phone_number&app_absent=0`} className='w-full' target='_blank'>
Ir al Whatsapp        </Link>
</button>
      </div>  )
    }else{
        return (
            <div className='flex flex-col w-[32%] gap-8'>
                    <div className='flex flex-row items-center'>
                      <Image src={foto} alt='' ></Image>
                      <h1 className='text-black text-center font-bold text-[20px] ml-3 '>{nombre} </h1>
                    </div>
                    <p className='text-[25px] text-gray-700'>{parroquia}</p>
                  </div>  )
    }
}

export default Coordinadores