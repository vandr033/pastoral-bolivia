import publicacion from '@/public/assets/images/publicacion.png';
import compraVirtual from '@/public/assets/images/iconos/Export Pdf.png';
import comprafisica from '@/public/assets/images/iconos/Open Book.png'
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import Link from 'next/link';
type Props = {}

const Publicaciones = (props: Props) => {
  return (
    <>
    <div className='flex flex-col w-full min-h-screen p-4 gap-10 relative'>
        <header className='flex flex-col w-full items-center justify-center'>
            <h1 className='text-5xl font-semibold text-black '>Publicaciones</h1>
        </header>
        <div className='grid grid-cols-2 gap-2 items-center justify-items-center mb-64'>
            <div className='flex flex-col w-[60%] gap-4' >
                <div className='relative bg-white '>
                <Image src={publicacion} alt='publicacion' />
                <div className='absolute bottom-0 left-0 w-full h-[20%] bg-white bg-opacity-80 text-black text-center text-lg'>
                    Duelos Para la Esperanza <br /> Mateo Bautista
                </div>
                </div>
                <div className=' bg-white p-4 flex flex-row justify-center items-center'>
                    <h1 className='text-2xl font-semibold text-[#d58dfd]'>Compra Virtual (PDF)</h1>
                    <Image src={compraVirtual} alt='compraVirtual' width={75} height={75} />
                </div>
                <div className=' bg-white p-4 flex flex-row justify-center items-center'>
                    <h1 className='text-2xl font-semibold text-[#d58dfd]'>Compra Libro Fisico</h1>
                    <Image src={comprafisica} alt='compraVirtual' width={75} height={75} />
                </div>
            </div>
        </div>
        <Link href= 'https://pastoralduelo.org/libros/' className='mb-24 bg-[#d58dfd] rounded-xl text-center text-white font-semibold text-2xl w-[50%] p-8 absolute bottom-0 left-1/2 transform -translate-x-1/2'>Ver Todos Los Libros Escritos Por Mateo Bautista</Link>
    </div>
    </>
  )
}

export default Publicaciones
