import Image from "next/image"
import Link from "next/link"
import codelify from "@/public/codelify-white.svg"
import hamburger from "@/public/hamburger-white.svg"

const NavBar = () => {
  return (
    <div className='flex items-center justify-between absolute px-6 w-full left-0 text-white'>
      <div className='flex py-[14px]'>
        <Image src={codelify} alt='codelify-logo' height={32} />
      </div>
      <div className='px-[10.5px] md:invisible'>
        <Image src={hamburger} alt='hamburger-logo' width={20} height={20} />
      </div>
    </div>
  )
}

export default NavBar
