import Image from "next/image"
import filler from "@/public/image-filler.webp"

const Filler = () => {
  return (
    <div className='w-full'>
      <Image src={filler} alt='filler' />
    </div>
  )
}

export default Filler
