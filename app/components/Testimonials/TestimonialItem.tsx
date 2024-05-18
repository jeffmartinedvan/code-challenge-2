import Image, { StaticImageData } from "next/image"
import { Montserrat } from "next/font/google"
import cn from "classnames"

const montserratFont = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

interface TestimonialItemProps {
  rating: StaticImageData
  testimony: string
  profileImg: StaticImageData
  name: string
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({
  rating,
  testimony,
  profileImg,
  name,
}) => {
  return (
    <div className='flex flex-col gap-5'>
      <Image src={rating} alt='rating' height={23} width={60} />
      <p className={cn("text-white", montserratFont.className)}>{testimony}</p>
      <div className='flex gap-4 items-center'>
        <Image src={profileImg} alt='profile-img' height={40} width={40} />
        <p className='text-sm text-white tracking-widest'>{name}</p>
      </div>
    </div>
  )
}

export default TestimonialItem
