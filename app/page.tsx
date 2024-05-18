import NavBar from "@/components/NavBar"
import Hero from "./components/Hero"
import Overview from "./components/Overview"
import Filler from "@/app/components/Filler"
import Service from "./components/Service"
import Footer from "@/components/Footer"
import Testimonials from "./components/Testimonials"
import Review from "./components/Review"
import ContactForm from "./components/ContactForm"
import Tagline from "./components/Tagline"
import Culture from "./components/Culture"

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Tagline />
      <Overview />
      <Culture />
      <Filler />
      <Service />
      <Review />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  )
}
