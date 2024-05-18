import Image from "next/image"
import Link from "next/link"
import codelify from "@/public/codelify-white.svg"
import hamburger from "@/public/hamburger-white.svg"
import x from "@/public/x-logo.png"

const NavBar = () => {
  return (
    <div className='flex items-center justify-between absolute px-6 md:px-14 lg:px-20 w-full left-0 text-white'>
      <div className='py-[14px]'>
        <Image src={codelify} alt='codelify-logo' height={64} width={58} />
      </div>
      <div className='hidden text-sm'>
        <Link href='/'>Home</Link>
        <Link href='/services'>Services</Link>
        <Link href='/about-us'>About Us</Link>
        <Link href='/teams'>Teams</Link>
      </div>
      <div className='p-[10.5px] lg:hidden'>
        <Image src={hamburger} alt='hamburger-logo' width={20} height={20} />
        <Image src={x} alt='x' width={18} height={25} className='hidden' />
      </div>
    </div>
  )
}

export default NavBar
