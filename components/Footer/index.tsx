import Image from "next/image"
import codelify from "@/public/codelify2.0.png"
import mLogo from "@/public/m-logo.png"
import beLogo from "@/public/be-logo.png"
import ballLogo from "@/public/ball-logo.png"
import { Montserrat } from "next/font/google"
import cn from "classnames"
import Link from "next/link"

const montserratFont = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

const Footer = () => {
  return (
    <section className='px-6 md:px-14 lg:px-20'>
      <div className='grid pt-16 pb-12 md:grid-cols-2 md:gap-x-4 lg:grid-cols-4 lg:gap-12 lg:pt-24'>
        <div className='grid gap-4 justify-items-center md:justify-items-start'>
          <Image
            src={codelify}
            alt=''
            height={32}
            width={120}
            className='mix-blend-multiply'
          />
          <p
            className={cn(
              "text-center text-sm text-[#333333] md:text-left md:text-[15px] lg:text-base",
              montserratFont.className
            )}
          >
            At Codelify, we empower businesses with innovative digital marketing
            solutions designed to drive success. Connect with us and transform
            your digital presence today.
          </p>
          <div className='flex gap-6 pb-10'>
            <Image src={mLogo} alt='logo1' />
            <Image src={beLogo} alt='logo2' />
            <Image src={ballLogo} alt='logo3' />
          </div>
        </div>
        <div className='text-center pb- md:text-left'>
          <h2 className='text-2xl text-[#26262C] pb-6'>Services</h2>
          <div
            className={cn(
              "grid gap-1 pb-4 text-sm text-[#333333] md:text-[15px] lg:text-base",
              montserratFont.className
            )}
          >
            <h3>SEO</h3>
            <h3>Online Marketing</h3>
            <h3>Digital Strategy</h3>
            <h3>Advertising</h3>
          </div>
        </div>
        <div className='text-center pb- md:text-left'>
          <h2 className='text-2xl text-black pb-6'>Agency</h2>
          <div
            className={cn(
              "grid gap-1 pb-4 text-sm text-[#333333] md:text-[15px] lg:text-base",
              montserratFont.className
            )}
          >
            <Link href='/about'>
              <h3>About Us</h3>
            </Link>
            <Link href='/teams'>
              <h3>Our Team</h3>
            </Link>
            <Link href='#ContactForm'>
              <h3>Contact Us</h3>
            </Link>
          </div>
        </div>
        <div className='text-center pb- md:text-left'>
          <h2 className='text-2xl text-black pb-6'>Contact Info</h2>
          <div
            className={cn(
              "grid gap-1 pb-4 text-sm text-[#333333] md:text-[15px] lg:text-base",
              montserratFont.className
            )}
          >
            <h3>123 Demo St, Lakeland, FL 45678, United States.</h3>
            <h3>+1 123-456-7890</h3>
            <h3>mail@example.com</h3>
          </div>
        </div>
      </div>
      <hr />
      <h4
        className={cn(
          "py-10 text-sm text-[#333333] text-center",
          montserratFont.className
        )}
      >
        © 2024 Digital Marketing Agency | Powered by Digital Marketing Agency
      </h4>
    </section>
  )
}

export default Footer
