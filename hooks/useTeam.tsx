import { useEffect, useState } from "react"

interface TeamMember {
  id: string
  name: string
  position: string
  picture: string
}

const teamItems = [
  {
    // name: "George Best",
    position: "Executive Chairman",
  },
  {
    // name: "Reynold Annis",
    position: "Chief Executive Officer",
  },
  {
    // name: "Kalie Martha",
    position: "Chief Technology Officer",
  },
  {
    // name: "Rosamond Lyndsay",
    position: "Chief Financial Officer",
  },
  {
    // name: "Sanford Rebecca",
    position: "Chief Marketing Officer",
  },
]

const useTeam = () => {
  const [teamMembersState, setTeamMembersState] = useState<TeamMember[]>([])

  useEffect(() => {
    const storedData = localStorage.getItem("teamMembers")
    if (storedData) {
      setTeamMembersState(JSON.parse(storedData))
    } else {
      const fetchData = async () => {
        try {
          const response = await fetch("https://randomuser.me/api/?results=5")
          const data = await response.json()
          const members = data.results.map((user: any, index: number) => ({
            id: user.login.uuid,
            picture: user.picture.large,
            name: user.name.first,
            ...teamItems[index],
          }))
          setTeamMembersState(members)
          localStorage.setItem("teamMembers", JSON.stringify(members))
        } catch (error) {
          console.error("Error fetching team members:", error)
        }
      }
      fetchData()
    }
  }, [])

  return teamMembersState
}

export default useTeam
