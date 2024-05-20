"use client"
import Card from "@/components/Card"
import useTeam from "@/hooks/useTeam"
import Image from "next/image"
import { Montserrat } from "next/font/google"
import cn from "classnames"

const montserratFont = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

const Team = () => {
  const teamMembers = useTeam()

  return (
    <div className='grid gap-10 py-10 px-6 md:px-14 lg:px-20'>
      <p className='text-[#3535DE] text-center text-3xl'>Meet the Team</p>
      <div className='flex flex-col lg:flex-row justify-center gap-2 text-center md:gap-4 lg:gap-6'>
        {teamMembers.map((member, index) => (
          <Card>
            <div key={index} className='flex flex-col gap-4 items-center'>
              <Image
                src={member.picture}
                alt={member.name}
                width={100}
                height={100}
                className='rounded-full'
              />
              <p className='text-xl'>{member.name}</p>
              <p
                className={cn(
                  "text-sm text-[#76767F]",
                  montserratFont.className
                )}
              >
                {member.position}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Team
