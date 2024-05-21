import Card from "@/components/Card"
import { Montserrat } from "next/font/google"
import cn from "classnames"

const montserratFont = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

const milestone = [
  {
    year: "2020",
    events: [
      {
        name: "Foundation Year",
        description:
          "Codelify Digital established with the mission to provide innovative digital solutions.",
      },
      {
        name: "First Major Client",
        description:
          "Secured first major client, delivering comprehensive digital marketing services.",
      },
    ],
  },
  {
    year: "2021",
    events: [
      {
        name: "Team Expansion",
        description:
          "Grew the team to 20 professionals across various digital specialties.",
      },
      {
        name: "Service Expansion",
        description:
          "Introduced new services including mobile app development & branding.",
      },
      {
        name: "Award Recognition",
        description:
          "Received an industry award for outstanding web development.",
      },
    ],
  },
  {
    year: "2022",
    events: [
      {
        name: "Client Milestone",
        description:
          "Reached 100 clients, showcasing trust & reliability in digital services.",
      },
      {
        name: "Global Reach",
        description:
          "Expanded services to international markets, enhancing global presence.",
      },
      {
        name: "Community Engagement",
        description:
          "Launched community initiatives to support local businesses & startups.",
      },
    ],
  },
  {
    year: "2023",
    events: [
      {
        name: "Technological Innovation",
        description:
          "Integrated AI & ML into service offerings to enhance client solutions.",
      },
      {
        name: "Sustainability Focus",
        description:
          "Implemented eco-friendly practices in digital operations.",
      },
      {
        name: "Industry Leadership",
        description:
          "Recognized as digital solutions leader, driving innovation & success continuously.",
      },
    ],
  },
]

const History = () => {
  return (
    <div className='grid py-12 px-6 md:px-14 lg:px-20'>
      <p className='pb-10 text-[#3535DE] text-3xl text-center md:pt-2'>
        OUR HISTORY
      </p>
      <div>
        <div className='grid gap-2 text-center lg:grid-cols-2'>
          {milestone.map((milestone, index) => (
            <Card key={index}>
              <p className='text-3xl text-[#3535DE]'>{milestone.year}</p>
              {milestone.events.map((events, index) => (
                <div key={index}>
                  <p className='text-xl text-black'>{events.name}</p>
                  <p
                    className={cn(
                      "text-sm text-[#333333]",
                      montserratFont.className
                    )}
                  >
                    {events.description}
                  </p>
                </div>
              ))}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default History
