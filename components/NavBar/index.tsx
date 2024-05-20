"use client"
import Image from "next/image"
import Link from "next/link"
import codelify from "@/public/codelify2.0.png"
import hamburger from "@/public/hamburger-white.svg"
import x from "@/public/x-logo.png"
import { useState } from "react"

const NavBar = () => {
  const [hidden, setHidden] = useState(false)
  const handleClick = () => {
    setHidden(!hidden)
  }

  return (
    <div className='relative z-10'>
      <div className='absolute top-0 left-0 right-0'>
        <div className='flex items-center justify-between px-6 md:px-14 lg:px-20 w-full  text-white z-[1]'>
          <Link href='/' className='my-6 md:my-8 lg:my-10'>
            <Image
              src={codelify}
              alt='codelify-logo'
              height={26}
              width={128}
              className='hover:scale-105'
            />
          </Link>
          <div className='hidden gap-10 lg:flex'>
            <Link href='/services' className='hover:underline'>
              Services
            </Link>
            <Link href='/about' className='hover:underline'>
              About Us
            </Link>
            <Link href='/teams' className='hover:underline'>
              Teams
            </Link>
          </div>
          <div className='p-[10.5px] z-[1] lg:hidden'>
            {hidden ? (
              <Image
                src={x}
                alt='x'
                width={18}
                height={25}
                onClick={handleClick}
              />
            ) : (
              <Image
                src={hamburger}
                alt='hamburger-logo'
                width={20}
                height={20}
                onClick={handleClick}
              />
            )}
          </div>
        </div>
        {hidden ? (
          <div>
            <div className='py-6 gap-6 z-[2] flex flex-col bg-white px-6 md:px-14 lg:px-20'>
              <Link href='/services' className='hover:underline'>
                Services
              </Link>
              <Link href='/about' className='hover:underline'>
                About Us
              </Link>
              <Link href='/teams' className='hover:underline'>
                Teams
              </Link>
            </div>
            <div className='p-[10.5px] hidden'>
              <Image
                src={hamburger}
                alt='hamburger-logo'
                width={20}
                height={20}
                onClick={handleClick}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default NavBar
