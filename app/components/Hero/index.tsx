import Image from "next/image"
import Link from "next/link"
import arrowImage from "@/public/arrow.png"
import bgImage from "@/public/bg-base-img.jpg"
import bgOverlay from "@/public/bg-img-overlay.png"
import { Montserrat } from "next/font/google"
import cn from "classnames"

const montserratFont = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

const Hero = () => {
  return (
    <section className='flex flex-col text-white h-screen pt-[100px]'>
      <div className='absolute top-0 left-0 w-full h-full -z-[3]'>
        <Image
          src={bgImage}
          alt='Hero Image'
          className='h-full w-full object-cover'
        />
      </div>

      <div className='absolute bottom-0 right-0 w-full h-full -z-[2] opacity-60 bg-blue-900' />

      <div className='absolute bottom-0 right-0 w-full h-max-screen -z-[1]'>
        <Image src={bgOverlay} alt='Overlay Image' className='-z-20' />
      </div>

      <div className='flex flex-col text-center px-6 md:px-14 md:max-w-[750px] md:text-left lg:px-20'>
        <div className='my-8'>
          <h6 className='tracking-widest text-sm'>WELCOME TO CODELIFY</h6>
        </div>
        <div>
          <h1 className='text-3xl mb-6 md:text-5xl lg:text-7xl'>
            Leading Internet Marketing Agency Based on Batam.
          </h1>
        </div>
        <div>
          <p
            className={cn(
              "text-sm tracking-widest pb-10 md:text-lg",
              montserratFont.className
            )}
          >
            Welcome to Codelify, a premier digital internet marketing agency
            dedicated to helping businesses thrive in the digital landscape.Our
            mission is to empower brands through innovative and data-driven
            marketing strategies.
          </p>
        </div>
        <div className='flex flex-col gap-10 items-center md:flex-row'>
          <div className='w-full bg-[#3535DE] px-[22px] py-[13px] text-white rounded-lg md:w-fit'>
            <Link href='#ContactForm' className='whitespace-nowrap'>
              Get a Free Quote
            </Link>
          </div>
          <div className='flex gap-4 items-center'>
            <div>
              <Link href='/services'>Learn more about our services</Link>
            </div>
            <div>
              <Image src={arrowImage} alt='arrow logo' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
