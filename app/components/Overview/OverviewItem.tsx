import Card from "@/components/Card"
import Image, { StaticImageData } from "next/image"
import { Montserrat } from "next/font/google"
import cn from "classnames"

const montserratFont = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

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
      <Image src={logo} alt='logo' height={24} width={24} />
      <p className='text-xl'>{title}</p>
      <p
        className={cn(
          "text-sm text-[#333333] font-thin",
          montserratFont.className
        )}
      >
        {description}
      </p>
    </Card>
  )
}

export default OverviewItem
