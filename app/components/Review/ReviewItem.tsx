import Image, { StaticImageData } from "next/image"
import { Montserrat } from "next/font/google"
import cn from "classnames"

const montserratFont = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

interface ReviewItemProps {
  logo: StaticImageData
  rating: string
  review: string
}

const ReviewItem: React.FC<ReviewItemProps> = ({ logo, rating, review }) => {
  return (
    <div className='flex flex-col items-center gap-2 py-4 px-2 md:flex-row'>
      <div className='md:self-start'>
        <Image src={logo} alt='logo' height={36} width={36} />
      </div>
      <div className='flex flex-col items-center'>
        <p className={cn("text-4xl font-bold", montserratFont.className)}>
          {rating}
        </p>
        <p
          className={cn(
            "text-sm text-[#76767F] font-semibold",
            montserratFont.className
          )}
        >
          {review}
        </p>
      </div>
    </div>
  )
}

export default ReviewItem
