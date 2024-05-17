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
    description: "Pretium accumsan in ipsum convallis pellentesque metus",
  },
  {
    logo: marketingLogo,
    title: "Marketing",
    description: "Lobortis integer nec neque facilisis lacus amet neque",
  },
  {
    logo: designLogo,
    title: "Design",
    description: "Ut ac viverra tortor ut scelerisque tortor senectus",
  },
]

const Overview = () => {
  return (
    <section className='py-12 grid md:grid-cols-4 md:pt-20 mt:pb-16'>
      <p className='pb-4 text-[#3535DE] md:col-span-1 md:pt-2'>WHAT WE DO</p>
      <div className='md:col-span-3'>
        <h2 className='text-3xl text-[#26262C] max-w-[540px] pb-6 md:text-5xl lg:text-6xl'>
          Full-service Internet Marketing Solutions
        </h2>
        <p
          className={cn(
            "text-sm leading-6 text-[#76767f] text-justify mb-4 md:mb-16 md:text-base",
            montserratFont.className
          )}
        >
          Consequat enim mollis mauris vulputate phasellus neque, eros turpis et
          eu adipiscing id tempor, nascetur elit vitae molestie pulvinar viverra
          ut eu lectus mi velit cras integer tristique aliquam proin porta
          tellus elit neque mi velit sed pharetra morbi proin.
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
