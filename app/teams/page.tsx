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
        description='Sollicitudin eros nulla mus donec quisque convallis integer condimentum volutpat.'
      />
      <Team />
      <Footer />
    </section>
  )
}

export default Teams
