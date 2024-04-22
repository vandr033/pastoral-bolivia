import Link from 'next/link';
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import uturn from "@/public/assets/images/U Turn to Left.svg";
import landingpage from "@/public/assets/images/landing.png";
import ar from "@/public/assets/flags/ar.png";
import bo from "@/public/assets/flags/bo.png";
import cl from "@/public/assets/flags/cl.png";
import co from "@/public/assets/flags/co.png";
import cr from "@/public/assets/flags/cr.png";
import cu from "@/public/assets/flags/cu.png";
import dom from "@/public/assets/flags/dom.png";
import es from "@/public/assets/flags/es.png";
import mx from "@/public/assets/flags/mx.png";
import ve from "@/public/assets/flags/ve.png";
import logogrande from "@/public/assets/images/logogrande.png"
import Image from "next/image";

export default function Home() {
	return (
		<section className="flex flex-col items-start justify-start min-h-screen py-2 min-w-full bg-[#eee9e3]">
		<section className="flex flex-row">
		<section className="flex flex-col">
			<section >
			<h1 className="text-7xl font-bold text-black pt-36 pl-72">Pastoral <br/>del Duelo<br/>Bolivia</h1>
			<button  className="bg-[#d89bf9] hover:bg-[#785888] text-white font-bold py-4 px-4 rounded-[8px] mt-10 ml-72 flex items-center">
				<Link href={'https://pastoralduelo.org/'}> a la Página Internacional <br/> www.pastoralduelo.org </Link>
				<Image className="ml-2 " width={40} height={40} src={uturn} alt=""/>
			</button>
			<button className="bg-[#d89bf9] hover:bg-[#785888] text-white font-bold py-4 px-4 rounded-[8px] mt-10 ml-72 flex items-center">
			¿Qué es el Duelo?<br/> ¿Cómo te podemos ayudar?
				<Link href={'https://pastoralduelo.org/el-proceso-del-duelo/'}><Image className="ml-2 " width={40} height={40} src={uturn} alt=""/></Link>
			</button>
			</section>
		</section>
		<div className="pt-20 pl-12 pb-12">
        <Image  src={landingpage} alt="" className="object-fill" />
      </div>
	  
		</section>
		<div className="w-full bg-[#f2f2f0] text-black items-center text-center pt-3 font-bold">
		Somos parte de una red internacional de apoyo y mutua ayuda
		</div>
		<div className=" w-full bg-[#f2f2f0] flex flex-row h-[200px] px-3">
		<Image className="ml-2 py-14" width={150} height={40} src={dom} alt=""/>
		<Image className="ml-2 py-14" width={150} height={40} src={co} alt=""/>
		<Image className="ml-2 py-14" width={150} height={40} src={cr} alt=""/>
		<Image className="ml-2 py-14" width={150} height={40} src={cu} alt=""/>
		<Image className="ml-2 py-7 " width={200} height={40} src={bo} alt=""/>
		<Image className="ml-2 py-14" width={150} height={40} src={es} alt=""/>
		<Image className="ml-2 py-14" width={150} height={40} src={mx} alt=""/>
		<Image className="ml-2 py-14" width={150} height={40} src={ve} alt=""/>
		<Image className="ml-2 py-14" width={150} height={40} src={ar} alt=""/>
	  </div>
	  <section className="w-full flex flex-row gap-10 px-48 pt-24 pb-10 ">
		<Image src={logogrande} width={350} height={350} alt="" className=""/>
		<div>
		<h1 className="text-black font-bold text-3xl">¿Qué es la Pastoral del Duelo?</h1>
		<p className="text-black text-xl font-semibold pt-5">Como parte de la Pastoral del Duelo, se desarrollan los Grupos Parroquiales de Mutua Ayuda Resurrección. Son guiados por coordinadores debidamente capacitados, quienes acompañan a los dolientes  durante 12 encuentros semanales. Se aplica una metodología empática que  ayuda a elaborar positiva y cristianamente el duelo, sanando las heridas, recuperando la esperanza y viviendo plenamente la Resurrección.</p>
		</div>
	  </section>
		</section>
	);
}
