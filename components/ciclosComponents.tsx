import React from 'react'
import Link from 'next/link'
type Props = {
    iframeSrc: string;
    fechaInscripcion: string;
    fechaInicio: string;
    ubicacion: string;
    informacionNecesaria: string;
}

const CiclosComponents = (props: Props) => {
  return (
<Link href=''>
            <div className='w-full bg-white flex flex-row rounded-3xl '>
                <iframe src={props.iframeSrc} width="350" height="225" style={{border:0}} loading="lazy" ></iframe>
            <div className='flex flex-col py-4 pl-4'>
            <h1 className='text-3xl font-semibold text-[#bbbbba] '>
            Fecha de Inscripcion: {props.fechaInscripcion}
            <br/>
            Fecha de Inicio: {props.fechaInicio}
            </h1>
            <h3 className='text-2xl text-[#d99cfb]'>
                {props.ubicacion}
                <br /> 
            </h3>
            <p className='text-lg text-black'>
            Informacion Necesaria: 
            <br />
            {props.informacionNecesaria}
            </p>
            </div>
        </div>
        </Link>  )
}

export default CiclosComponents