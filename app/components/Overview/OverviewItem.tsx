import Card from "@/components/Card"
import Image, { StaticImageData } from "next/image"

interface OverviewItemProps {
  logo: StaticImageData
  title: string
  description: string
}

const OverviewItem: React.FC<OverviewItemProps> = ({
  logo,
  title,
  description,
}) => {
  return (
    <Card>
      <Image src={logo} alt='' height={24} width={24} />
      <p className='text-xl'>{title}</p>
      <p className='text-sm font-Montserrat text-[#76767F]'>{description}</p>
    </Card>
  )
}

export default OverviewItem
