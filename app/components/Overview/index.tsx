import consultingLogo from "@/public/consulting-logo.png"
import marketingLogo from "@/public/marketing-logo.png"
import designLogo from "@/public/design-logo.png"
import OverviewItem from "./OverviewItem"
import { Montserrat } from "next/font/google"
import cn from "classnames"

const montserratFont = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

const CardItemList = [
  {
    logo: consultingLogo,
    title: "Consulting",
    description:
      "Strategic guidance to optimize digital performance and drive growth.",
  },
  {
    logo: marketingLogo,
    title: "Marketing",
    description:
      "Comprehensive digital marketing solutions to boost visibility and engagement.",
  },
  {
    logo: designLogo,
    title: "Design",
    description:
      "Creative and user-friendly digital design for optimal user experiences.",
  },
]

const Overview = () => {
  return (
    <section className='grid gap-4 pt-12 px-6 md:px-14 lg:grid-cols-4 lg:px-20'>
      <p className='pb-4 text-[#3535DE] lg:col-span-1 md:pt-2'>WHAT WE DO</p>
      <div className='lg:col-span-3'>
        <h2 className='text-3xl text-black max-w-[540px] pb-6 md:text-5xl lg:text-6xl'>
          Full-service Internet Marketing Solutions
        </h2>
        <p
          className={cn(
            "text-sm text-[#333333] text-justify mb-5 md:text-base",
            montserratFont.className
          )}
        >
          At Codelify, we offer a full-service internet marketing solution
          designed to cover every aspect of your digital presence. Our holistic
          approach integrates consulting, marketing, and design to provide a
          seamless and effective strategy tailored to your business needs.
        </p>
        <div className='grid md:grid-cols-3 gap-2'>
          {CardItemList.map((item, index) => (
            <OverviewItem
              key={index}
              logo={item.logo}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Overview
