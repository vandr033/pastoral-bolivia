import React from 'react'
import Link from 'next/link'
import CiclosComponents from '@/components/ciclosComponents';
type Props = {}
type Virtuales = {
    iframeSrc: string;
    fechaInicio: string;
    fechaInscripcion: string;
    ubicacion: string;
    informacionNecesaria: string;
}
const Ciclos: Virtuales[] = [
    {
        iframeSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7846423.651546418!2d-68.84784508736185!3d-16.20698811952281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf8977bba295%3A0x1c9ec2bb0115edbf!2sBolivia!5e0!3m2!1sen!2sbo!4v1709311608171!5m2!1sen!2sbo",

        fechaInicio:'3 de Abril 2024',
        fechaInscripcion: '1 de Marzo 2024 - 3 de abril',
        ubicacion:'Modalidad Virtual',
        informacionNecesaria: 'Nos reuniremos en la plataforma de Zoom, el link de la reunión será enviado a su correo electronico o numero de telefono'
    }
]
const Virtual = (props: Props) => {
  return (
    <div className='flex flex-col w-full min-h-screen p-4 gap-10 relative px-12'>
        <header className='flex flex-col w-full items-center justify-center'>
            <h1 className='text-5xl font-semibold text-black '>Fechas de Inicio de Ciclos Virtuales 2024</h1>
        </header>
        {Ciclos.map((ciclo, index) => (
            <CiclosComponents
                key={index}
                iframeSrc={ciclo.iframeSrc}
                fechaInicio={ciclo.fechaInicio}
                fechaInscripcion={ciclo.fechaInscripcion}
                ubicacion={ciclo.ubicacion}
                informacionNecesaria={ciclo.informacionNecesaria}
            />
        ))}
        <Link href= 'https://api.whatsapp.com/send/?phone=59170032902&text&type=phone_number&app_absent=0' className='bg-[#00a854] rounded-xl text-center text-white font-semibold text-xl w-[50%] p-8 absolute bottom-10 left-1/2 transform -translate-x-1/2'>Comunicarse Con Encargada De Ciclo</Link>

    </div>
    )
}


export default Virtual