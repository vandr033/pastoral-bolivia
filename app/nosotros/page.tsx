import React from 'react'
import coord from "@/public/assets/images/coordinadoras/1.png"
import coord2 from "@/public/assets/images/coordinadoras/2.png"
import coord3 from "@/public/assets/images/coordinadoras/3.png"
import Image from 'next/image'
import NosotrosFotos from '@/components/nosotros'
import marina from "@/public/assets/images/iconos/Avatar - 3.png"
import ximena from "@/public/assets/images/iconos/Avatar - 3-1.png"
import padre from "@/public/assets/images/iconos/Avatar - 3-2.png"
import logochico from "@/public/assets/images/iconos/image 9.png"
import Coordinadores from '@/components/coordinadores'
import scz from "@/public/assets/images/parroquias/Capture.1.png"
import tarija from "@/public/assets/images/parroquias/Capture.png"
type Props = {}
const Nosotros = (props: Props) => {
  return (
    <div className='w-full flex flex-col mb-24'>
<header className='flex flex-col w-full items-center justify-center'>
            <h1 className='text-5xl font-semibold text-black mt-12 mb-12'>Coordinadores de Nuestra Comunidad </h1>
        </header>      <div className='flex flex-row max-h-[30%] gap-2 justify-center'>
        <NosotrosFotos nombres='Ros Mery Roca, Katya Talavera, Virginia Paz' foto={coord} ubicacion='Parroquia La Macarena'/>
        <NosotrosFotos nombres='Marina Poveda, Iver Cladera' foto={coord2} ubicacion='Parroquia Espíritu Santo'/>
        <NosotrosFotos nombres=' Jessie Pedraza y Ximena López' foto={coord3} ubicacion='Modalidad Virtual'/>
      </div>
      <h1 className='text-black text-center font-bold text-[30px] my-12'>Contactanos</h1>
      <h1 className='text-[#d99cfb] text-center font-bold text-[25px] mb-12 mt-0'>Santa Cruz</h1>
      {/*I need a div with two columns that is centered  */}
      <div className='flex flex-row justify-center gap-12'>
        <Coordinadores nombre='Marina Poveda' foto={marina} parroquia='Modalidad Presencial' numero={'70032902'}/>
        <Coordinadores nombre='Ximena López' foto={ximena} parroquia='Modalidad Virtual' numero={'75002421'}/>
      </div>
      {/*I need a div with two columns that is centered  */}
      <div className='flex flex-row mt-5 self-center gap-24'>
        <h3 className='text-black font-semibold text-lg'>
        Santa Cruz de la Sierra<br/>
Localidad: Santa Cruz de la Sierra <br/>
Diócesis: Santa Cruz <br/>
Coordinadoras: Marina Poveda, Ximena López
        </h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48242.266467427726!2d-63.18772844692179!3d-17.799200758630434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e8818e8bc9bf%3A0x1e512f12fcbcb2a2!2sParroquia%20Espiritu%20Santo!5e0!3m2!1sen!2sbo!4v1709183812293!5m2!1sen!2sbo" width="350" height="225" style={{border:0}} loading="lazy" ></iframe>
      </div>
      <h1 className='text-[#d99cfb] text-center font-bold text-[25px] mb-12 mt-0'>Tarija</h1>
      <div className='flex flex-row justify-center gap-12 mt-12 '>
        <Coordinadores nombre='Padre Luis Miguel Ortega Morales' foto={logochico} parroquia='' numero={''}/>
        <Coordinadores nombre='Padre Alexander Vega Aguirre' foto={padre} parroquia='' numero=''/>
      </div>

      <div className='flex flex-row mt-5 self-center gap-24'>
        <h3 className='text-black font-semibold text-lg'>
        Tarija <br/>
Localidad: Tarija <br/>
Diócesis: Tarija <br/>
Coordinadores: Padre Alexander Vega Aguirre, <br/>Padre Luis Miguel Ortega Morales <br/>
Parroquias: San Lorenzo, Capilla San Juan de Dios <br/>
Teléfono: 77195103
        </h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.2730566871614!2d-64.75210412394405!3d-21.41850968638374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94064a45cf8f2815%3A0xb18e96428a78f6b6!2sIglesia%20San%20Lorenzo!5e0!3m2!1sen!2sbo!4v1709184445758!5m2!1sen!2sbo" width="350" height="225" style={{border:0}}></iframe>
        </div>


    </div>
    )
}

export default Nosotros