import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import Overlay from "@/components/Overlay"
import Service from "../components/Service"

const Services = () => {
  return (
    <section>
      <NavBar />
      <Overlay
        title='Services'
        description='Sollicitudin eros nulla mus donec quisque convallis integer condimentum volutpat.'
      />
      <Service />
      <Footer />
    </section>
  )
}

export default Services
