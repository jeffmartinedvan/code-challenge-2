import Card from "@/components/Card"
import Image, { StaticImageData } from "next/image"

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
        <Image src={logo} alt='' height={24} width={24} />
      </div>
      <p className='text-xl'>{title}</p>
      <p className='text-sm font-Montserrat text-[#76767F]'>{description}</p>
    </Card>
  )
}

export default ServiceItem
