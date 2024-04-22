import publicacion from '@/public/assets/images/publicacion.png';
import compraVirtual from '@/public/assets/images/iconos/Export Pdf.png';
import comprafisica from '@/public/assets/images/iconos/Open Book.png'
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import Link from 'next/link';
import rosmery from '@/public/assets/images/Rosmery.png';
import marina from '@/public/assets/images/marina.png';
import ximena from '@/public/assets/images/Ximena.gif';
import entrvista from '@/public/assets/images/entrevista.png';
import img from '@/public/assets/images/voluntarias.webp';
import VideoComponent from '@/components/videos';
type Props = {}
type video = {
    img: string;
    title: string;
    date: string;
    publisher: string
    link: string;
}
const videos: video[] = [
    {
        img: ximena.src,
        title: 'Testimonio Ximena Lopez',
        date: 'Noviembre 2023',
        publisher: 'Ximena Lopez',
        link: 'https://youtu.be/7gn8u8Uk51Q?si=Q7Tm2hvbRl7WWT6-'
    },
    {
        img: marina.src,
        title: 'Entrevista con Marina Poveda',
        date: '8 de Octubre 2023',
        publisher: 'Radio Info - Ver En Facebook',
        link: 'https://www.facebook.com/100083185576188/posts/pfbid0woFKJe8nXksSvZhWxPG9sDaktARG4nCBh57gRaeV1duiH6xqGdPRk33SZV1MrWWpl/?mibextid=cr9u03'
    },
    {
        img: rosmery.src,
        title: 'Testimonio Ros Mery Roca',
        date: 'Enero 2024',
        publisher: 'Ros Mery Roca',
        link: 'https://www.facebook.com/'
    },
    {
        img: entrvista.src,
        title:'Entrevista Katya Talavera y Marina Poveda',
        date: '14 de Octubre 2023',
        publisher: 'Maggy Talavera - Ver En Facebook',
        link: 'https://fb.watch/nGB9TsJwol/?mibextid=j8LeHn'
    }
]
const Videos = (props: Props) => {
  return (
    <div className='flex flex-col w-full min-h-screen p-4 gap-10 relative'>
        <header className='flex flex-col w-full items-center justify-center'>
            <h1 className='text-5xl font-semibold text-black '>Videos</h1>
        </header>
        <div className='grid grid-cols-2 gap-4 items-center justify-items-center '>
            {videos.map((video, index) => (
                <VideoComponent
                    key={index}
                    img={video.img}
                    title={video.title}
                    date={video.date}
                    publisher={video.publisher}
                    link={video.link}
                />
            ))
            }
        </div>
    </div>
  )
}

export default Videos