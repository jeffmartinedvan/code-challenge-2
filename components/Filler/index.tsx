import Image from "next/image"
import filler from "@/public/image-filler.webp"

const Filler = () => {
  return (
    <div className='w-screen -translate-x-6 md:-translate-x-14 lg:-translate-x-20'>
      <Image src={filler} alt='' />
    </div>
  )
}

export default Filler
