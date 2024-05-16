import NavBar from "@/components/NavBar"
import Hero from "./components/Hero"
import Overview from "./components/Overview"
import Filler from "@/components/Filler"
import Services from "./components/Services"
import Footer from "@/components/Footer"
import Testimonials from "./components/Testimonials"

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Overview />
      <Filler />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  )
}
