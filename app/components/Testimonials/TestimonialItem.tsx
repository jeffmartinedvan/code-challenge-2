import Image, { StaticImageData } from "next/image"

interface TestimonialItemProps {
  logo: StaticImageData
  rating: string
  review: string
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({
  logo,
  rating,
  review,
}) => {
  return (
    <div className='flex flex-col items-center gap-2 py-4 px-2 md:flex-row'>
      <div className='md:self-start'>
        <Image src={logo} alt='' height={36} width={36} />
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-4xl font-bold font-Montserrat'>{rating}</p>
        <p className='text-sm text-[#76767F]'>{review}</p>
      </div>
    </div>
  )
}

export default TestimonialItem
