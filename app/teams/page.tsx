import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import Overlay from "@/components/Overlay"
import Team from "../components/Team"

const Teams = () => {
  return (
    <section>
      <NavBar />
      <Overlay
        title='Our Team'
        description='Meet our dedicated team of experts, passionate about delivering innovative digital marketing solutions and exceptional results for your business.'
      />
      <Team />
      <Footer />
    </section>
  )
}

export default Teams
