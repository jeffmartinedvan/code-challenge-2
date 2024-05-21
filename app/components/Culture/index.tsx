import { Montserrat } from "next/font/google"
import cn from "classnames"

const montserratFont = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

const Culture = () => {
  return (
    <section className='text-center'>
      <div className='pb-4 text-[#3535DE] text-3xl text-center md:pt-2'>
        Our Culture
      </div>
      <div
        className={cn(
          "bg-[#F4F4F5] text-[#76767F] text-sm md:text-base lg:text-xl p-4 mt-6 mx-6 md:mx-14 lg:mx-20 rounded-md",
          montserratFont.className
        )}
      >
        At Codelify, our culture is built on collaboration, creativity, and
        continuous learning. We foster an environment where ideas can flourish,
        encouraging our team to think outside the box and stay ahead of industry
        trends. We believe in the power of teamwork and value each
        individual&apos;s contribution to our collective success. Our commitment
        to professional development ensures that our team is always equipped
        with the latest skills and knowledge to deliver cutting-edge solutions
        for our clients.
      </div>
    </section>
  )
}

export default Culture
