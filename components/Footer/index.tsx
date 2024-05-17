import Image from "next/image"
import codelify from "@/public/codelify-black.svg"
import mLogo from "@/public/m-logo.png"
import beLogo from "@/public/be-logo.png"
import ballLogo from "@/public/ball-logo.png"
import Card from "../Card"

const Footer = () => {
  return (
    <section>
      <div className='grid pt-16 pb-12 md:grid-cols-2 md:gap-x-4 lg:grid-cols-4 lg:gap-12 lg:pt-24'>
        <div className='grid gap-4 justify-items-center md:justify-items-start'>
          <Image
            src={codelify}
            alt=''
            height={32}
            width={100}
            className='mix-blend-multiply'
          />
          <p className='text-center text-sm text-[#76767F] font-Montserrat md:text-left md:text-[15px] lg:text-base'>
            Volutpat commodo at dictum amet tincidunt facilisis id lorem eu
            vitae cursus auctor laoreet fermentum.
          </p>
          <div className='flex gap-6 pb-10'>
            <Image src={mLogo} alt='' />
            <Image src={beLogo} alt='' />
            <Image src={ballLogo} alt='' />
          </div>
        </div>
        <div className='text-center pb- md:text-left'>
          <h2 className='text-2xl text-[#26262C] pb-6'>Services</h2>
          <div className='grid gap-1 pb-4 text-sm text-[#76767F] font-Montserrat md:text-[15px] lg:text-base'>
            <h3>SEO</h3>
            <h3>Online Marketing</h3>
            <h3>Digital Strategy</h3>
            <h3>Advertising</h3>
          </div>
        </div>
        <div className='text-center pb- md:text-left'>
          <h2 className='text-2xl text-[#26262C] pb-6'>Agency</h2>
          <div className='grid gap-1 pb-4 text-sm text-[#76767F] font-Montserrat md:text-[15px] lg:text-base'>
            <h3>About Us</h3>
            <h3>Our Team</h3>
            <h3>Contact Us</h3>
          </div>
        </div>
        <div className='text-center pb- md:text-left'>
          <h2 className='text-2xl text-[#26262C] pb-6'>Contact Info</h2>
          <div className='grid gap-1 pb-4 text-sm text-[#76767F] font-Montserrat md:text-[15px] lg:text-base'>
            <h3>123 Demo St, Lakeland, FL 45678, United States.</h3>
            <h3>+1 123-456-7890</h3>
            <h3>mail@example.com</h3>
          </div>
        </div>
      </div>
      <hr />
      <h6 className='py-10 text-sm text-[#76767F] font-Montserrat text-center'>
        © 2024 Digital Marketing Agency | Powered by Digital Marketing Agency
      </h6>
    </section>
  )
}

export default Footer
