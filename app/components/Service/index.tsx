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
      "Ultrices dictum integer quam morbi adipiscing suspendisse neque vel egestas commodo sit felis consectetur integer vitae, at mattis turpis id",
  },
  {
    logo: advertisingLogo,
    title: "Advertising",
    description:
      "Quis purus enim et quam eget sed tellus ut tellus sit lectus mauris suscipit lobortis lectus netus eros, habitasse maecenas diam pellentesque integer non",
  },
  {
    logo: onlineMarketingLogo,
    title: "Online Marketing",
    description:
      "Tellus, tristique euismod at fames lorem ut adipiscing amet gravida fermentum tellus ornare eget sed sit bibendum tincidunt diam, dignissim purus aenean",
  },
  {
    logo: seoLogo,
    title: "Search Engine Optimization",
    description:
      "Id vel lectus amet id amet blandit diam arcu senectus ac commodo, sed est sagittis sed aliquam volutpat blandit quam vitae, rutrum euismod sit",
  },
]

const Service = () => {
  return (
    <section className='my-9 px-6 md:px-14 lg:px-20'>
      <p className='text-sm mb-5 text-[#3535DE] text-center tracking-widest'>
        OUR SERVICES
      </p>
      <h2 className='text-3xl text-center text-[#26262C] pb-2 md:text-5xl lg:whitespace-nowrap leading-tight'>
        Take Your Business to the next Level
      </h2>
      <p
        className={cn(
          "text-sm font-extralight text-center text-[#76767f] tracking-widest mb-8 md:mb-16 md:text-base",
          montserratFont.className
        )}
      >
        Id senectus facilisi enim accumsan ac aliquam suspendisse dapibus morbi
        ut sed pellentesque elementum velit dictum
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
