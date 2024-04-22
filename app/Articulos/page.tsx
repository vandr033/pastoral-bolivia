import Image from 'next/image'
import React from 'react'
import img from '@/public/assets/images/voluntarias.webp'
import imgLibro from '@/public/assets/images/libro.png'
import ArticulosComponent from '@/components/articulos'
type Props = {}
type articulo = {
    img: string;
    title: string;
    Author: string;
    date: string;
    content: string;
    link: string;
}

const articulos: articulo[] = [
    {
        img: img.src,
        title: 'Resurrección: Grupo parroquial de mutua ayuda en duelo',
        Author: 'Aida Dominguez - El Deber',
        date: '1ero de Noviembre 2023',
        content: 'En Santa Cruz, hay siete coordinadoras que promueven la Pastoral del Duelo, un ministerio de ayuda, capacitado, iluminativo, celebrativo, creativo y organizado',
        link: 'https://eldeber.com.bo/para-ellas/resurreccion-grupo-parroquial-de-mutua-ayuda-en-duelo_345467'
    },
    {
        img: imgLibro.src,
        title: 'Los Hermanos También Hacen el Duelo',
        Author: 'Padre Mateo Bautista',
        date: 'Capitulo Escrito por: Jessie Pedraza',
        content:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link: 'https://eldeber.com.bo/para-ellas/resurreccion-grupo-parroquial-de-mutua-ayuda-en-duelo_345467'
    },
    {
        img: imgLibro.src,
        title: 'Sin Perdón Nunca Se Sana del Duelo',
        Author: 'Padre Mateo Bautista',
        date: 'Capitulo Escrito por: Marina Poveda',
        content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        link: 'https://eldeber.com.bo/para-ellas/resurreccion-grupo-parroquial-de-mutua-ayuda-en-duelo_345467'
    }
]
const Articulos = (props: Props) => {
  return (
    <div className='flex flex-col w-full min-h-screen p-4 gap-10'>
        <header className='flex flex-col w-full items-center justify-center'>
            <h1 className='text-5xl font-semibold text-black '>Artículos de Interés </h1>
        </header>
        {articulos.map((articulo, index) => (
            <ArticulosComponent
                key={index}
                img={articulo.img}
                title={articulo.title}
                author={articulo.Author}
                date={articulo.date}
                content={articulo.content}
                link={articulo.link}
            />
        ))
        }

    </div>
    )
}

export default Articulos