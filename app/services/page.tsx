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
        description="Discover Codelify's comprehensive suite of services designed to enhance your digital presence and drive business growth."
      />
      <Service />
      <Footer />
    </section>
  )
}

export default Services
