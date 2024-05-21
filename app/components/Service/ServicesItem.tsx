import Card from "@/components/Card"
import Image, { StaticImageData } from "next/image"
import { Montserrat } from "next/font/google"
import cn from "classnames"

const montserratFont = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

interface ServiceItemProps {
  logo: StaticImageData
  title: string
  description: string
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  logo,
  title,
  description,
}) => {
  return (
    <Card>
      <div>
        <Image src={logo} alt='logo' height={24} width={24} />
      </div>
      <p className='text-xl'>{title}</p>
      <p className={cn("text-sm text-[#333333]", montserratFont.className)}>
        {description}
      </p>
    </Card>
  )
}

export default ServiceItem
