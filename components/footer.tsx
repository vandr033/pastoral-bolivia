
import React from 'react'
import Image from 'next/image'
import logo from "@/public/assets/images/Group 331.png"
import wa from "@/public/assets/whatsapp-logo-fill-svgrepo-com.svg"
const Footer = () => {
  return (
    <footer className="w-full py-5 sm:py-10 bg-[#f2f2f0]"> {/* Container */}
      <h2 className="sr-only">Footer</h2>
      <div className="flex flex-col-reverse sm:flex-row md:justify-between lg:justify-around">

        {/* :SITE NAME & SOCIAL NETWORKS */}
        <div className="relative mt-14 sm:mt-0 flex flex-col justify-center items-center text-gray-500">
          {/* ::Site name */}
          <div className='flex flex-row mt-16'>
            <Image src={logo} width={100} height={50} alt=''/>
          <h1 className="font-title text-xl text-center font-semibold mt-[10px] pl-3">Pastoral del Duelo Bolivia</h1>
          </div>
          {/* ::Social & copyright */}
          <div className=" flex flex-col items-center">
            {/* :::Social */}
            <span className="inline-flex mt-6 w-full justify-center md:justify-start md:w-auto">
              {/* Facebook */}
              <a href="#link" className="text-gray-200">
                <span className="sr-only">Facebook</span>
                <svg fill="#d99cfb" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              {/* Linkedin */}
              <a href="#link" className="ml-3 text-gray-200">
                <span className="sr-only">Linkedin</span>
                <svg fill="#d99cfb" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-6 h-6" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
              {/* Linkedin */}
              <a href="#link" className="ml-3 text-gray-200">
                <span className="sr-only">Linkedin</span>
                <Image width={24} height={24} src={wa} alt=''/>
              </a>
            </span>

            {/* :::Copyright */}
            {/* <span className="py-4 text-xs">&copy;2021, Fancy Tailwind All Rights Reserved.</span> */}
          </div>
          {/* ::Mobile separator line */}
          <span className="sm:hidden absolute -top-4 left-1/2 w-1/4 h-px bg-gray-400 transform -translate-x-1/2" aria-hidden="true"/>
        </div>

        {/* :NAVIGATION */}
        <div className="grid grid-cols-3 gap-5 text-black">
          {/* ::Navigation */}
          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4">
            <h3 className="py-1.5 md:py-4 text-center sm:text-left text-xl text-[#d99cfb] font-bold tracking-wide">Nosotros</h3>
            <nav className="flex justify-around md:flex-col font-medium list-none">
              <li><a href="#link" className="hover:text-gray-200">Nosotros</a></li>
            </nav>
          </div>
          {/* ::Navigation */}
          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4">
            <h3 className="py-1.5 md:py-4 text-center sm:text-left text-xl text-[#d99cfb] font-bold tracking-wide">Articulos</h3>
            <nav className="flex justify-around md:flex-col font-medium list-none">
              <li><a href="#link" className="hover:text-gray-200">Articulos de Interes</a></li>
              <li><a href="#link" className="hover:text-gray-200">Videos</a></li>
              <li><a href="#link" className="hover:text-gray-200">Novedades</a></li>
              <li><a href="#link" className="hover:text-gray-200">Publicaciones</a></li>
            </nav>
          </div>
          {/* ::Navigation */}
          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4">
            <h3 className="py-1.5 md:py-4 text-center sm:text-left text-xl text-[#d99cfb] font-bold tracking-wide">Ciclos</h3>
            <nav className="flex justify-around md:flex-col font-medium list-none">

              <li><a href="/virtual" className="hover:text-gray-200">Modalidad Virtual</a></li>
              <li><a href="/presencial" className="hover:text-gray-200">Modalidad Presencial</a></li>
            </nav>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer


