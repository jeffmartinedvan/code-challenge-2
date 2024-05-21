import React from "react"
import digitalStrategyLogo from "@/public/digital-strategy-logo.png"
import advertisingLogo from "@/public/advertising-logo.png"
import onlineMarketingLogo from "@/public/online-marketing-logo.png"
import seoLogo from "@/public/seo-logo.png"
import ServiceItem from "./ServicesItem"
import { Montserrat } from "next/font/google"
import cn from "classnames"

const montserratFont = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

const ServiceItemList = [
  {
    logo: digitalStrategyLogo,
    title: "Digital Strategy",
    description:
      "Crafting customized plans to achieve your business goals in the digital landscape. We analyze trends, set objectives, and map out a clear path to success.",
  },
  {
    logo: advertisingLogo,
    title: "Advertising",
    description:
      "Creating impactful ad campaigns that reach and engage your target audience. Our strategies maximize reach, boost brand awareness, and drive sales.",
  },
  {
    logo: onlineMarketingLogo,
    title: "Online Marketing",
    description:
      "Utilizing diverse online channels to promote your brand and drive conversions. From email marketing to social media, we ensure your message resonates.",
  },
  {
    logo: seoLogo,
    title: "Search Engine Optimization",
    description:
      "Enhancing your website’s visibility and ranking to attract more organic traffic. Our experts use the latest techniques to improve search engine performance.",
  },
]

const Service = () => {
  return (
    <section className='my-9 px-6 md:px-14 lg:px-20'>
      <p className='text-sm mb-5 text-[#3535DE] text-center tracking-widest'>
        OUR SERVICES
      </p>
      <h2 className='text-3xl text-center text-black pb-2 md:text-5xl lg:whitespace-nowrap leading-tight'>
        Take Your Business to the next Level
      </h2>
      <p
        className={cn(
          "text-sm font-extralight text-center text-[#333333] tracking-widest mb-8 md:mb-16 md:text-base",
          montserratFont.className
        )}
      >
        Our comprehensive services include SEO Optimization, online marketing,
        digital strategy and cutting-edge advertising to drive your digital
        success.
      </p>
      <div className='grid gap-2 md:grid-cols-2'>
        {ServiceItemList.map((item, index) => (
          <ServiceItem
            key={index}
            logo={item.logo}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Service
