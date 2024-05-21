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
        description='Learn more about Codelify, where innovation, expertise, and client-centric strategies come together to transform your digital marketing experience.'
      />
      <Overview />
      <History />
      <Culture />
      <Teams />
      <Footer />
    </section>
  )
}

export default About
