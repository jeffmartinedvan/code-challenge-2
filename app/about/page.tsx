import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import Overlay from "@/components/Overlay"
import History from "../components/History"
import Culture from "../components/Culture"
import Teams from "../components/Team"
import Overview from "../components/Overview"

const About = () => {
  return (
    <section>
      <NavBar />
      <Overlay
        title='About'
        description='Sollicitudin eros nulla mus donec quisque convallis integer condimentum volutpat.'
      />
      <Overview />
      <History />
      <Teams />
      <Culture />
      <Footer />
    </section>
  )
}

export default About
