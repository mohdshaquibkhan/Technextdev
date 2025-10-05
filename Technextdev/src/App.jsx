import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import ServicesSection from './Components/ServicesSection'
import AboutCompany from './Components/AboutCompany'
import CaseStudies from "./Components/CaseStudies";
import Footer from "./Components/Footer";

function App() {
 

  return (
    <div>
     <Navbar />
     <Hero />
     <ServicesSection />
     <AboutCompany />
     <CaseStudies />
     <Footer />
    </div>
  )
}

export default App
