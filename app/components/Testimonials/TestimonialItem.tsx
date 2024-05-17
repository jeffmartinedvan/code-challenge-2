import Image, { StaticImageData } from "next/image"

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
      <Image src={rating} alt='' height={23} width={60} />
      <p className='font-Montserrat text-white'>{testimony}</p>
      <div className='flex gap-4 items-center'>
        <Image src={profileImg} alt='' height={40} width={40} />
        <p className='text-sm text-white'>{name}</p>
      </div>
    </div>
  )
}

export default TestimonialItem
