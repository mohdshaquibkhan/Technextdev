import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ServicesSection from './Components/ServicesSection';
import AboutCompany from './Components/AboutCompany';
import CaseStudies from "./Components/CaseStudies";
import Footer from "./Components/Footer";
import ServicesPage from "./Components/Digitalmarketing";
import MobileWebApplication from "./Components/Webapplication";
import SocialMarketing from "./Components/Socialmarketing";
import LandingPage from "./Components/Landingpage";
import AboutUs from "./Components/Aboutusnavbar";
import Services from "./Components/Servicesnavbar";
import ContactUs from "./Components/ContactUs";
import TechnextSolutionFAQ from "./Components/Faqs"

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ServicesSection />
              <AboutCompany />
              <CaseStudies />
              
            </>
          }
        />

        {/* Services Page Route */}
        <Route path="/services/digital-marketing" element={<ServicesPage />} />
        <Route path="/services/application" element={<MobileWebApplication />} />
        <Route path="services/socialmarketing" element={< SocialMarketing/>} />
         <Route path="/landing" element={< LandingPage/>} />
         <Route path="/aboutus" element={< AboutUs/>} />
         <Route path="/services" element={< Services />} />
         <Route path="/ContactUs" element={< ContactUs />} />
         <Route path="/TechnextSolutionFAQ" element={< TechnextSolutionFAQ />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
