import Image from "next/image"
import bgOverlay from "@/public/bg-img-overlay.png"
import { Montserrat } from "next/font/google"
import cn from "classnames"
import { title } from "process"

const montserratFont = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

interface OverlayProps {
  title: string
  description: string
}

const Overlay: React.FC<OverlayProps> = ({ title, description }) => {
  return (
    <section className='relative h-[40vh] pt-[100px] md:h-[50vh]'>
      <div className='absolute bottom-0 right-0 w-full h-full -z-[2] bg-blue-950' />
      <div className='absolute bottom-0 right-0 w-full -z-[1]'>
        <Image src={bgOverlay} alt='Overlay Image' className='-z-20' />
      </div>
      <div className='flex flex-col pt-8 text-white gap-6 px-6 md:px-14 md:pt-12 md:max-w-[600px] lg:px-20'>
        <p className='text-3xl md:text-6xl'>{title}</p>
        <h2 className={cn("text-sm md:text-base", montserratFont.className)}>
          {description}
        </h2>
      </div>
    </section>
  )
}

export default Overlay
