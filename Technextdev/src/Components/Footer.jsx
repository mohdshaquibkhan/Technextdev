import React from "react";
import { ArrowRight, Mail, Phone, Facebook, Twitter, Youtube, Linkedin, ArrowUp } from "lucide-react";
import rocket from "../assets/rocket.png"; 
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate('/ContactUs')
  }

  const isActive = (path) => location.pathname === path;

  return (
    <footer className="bg-[#0b0c52] text-white relative overflow-hidden">
      {/* Top CTA Section */}
      <div className="relative bg-gradient-to-r from-[#6A4DFF] to-[#8A63FF] rounded-b-[2rem] px-10 md:px-20 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Stay Connected With <br /> Cutting Edge IT
          </h2>
        </div>
        <div className="flex items-center justify-center gap-3">
          <button 
            onClick={handleClick}
            className="flex items-center gap-3 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
            TALK TO A SPECIALIST <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <motion.img
          src={rocket}
          alt="rocket"
          className="absolute right-6 top-6 w-16 md:w-24 rotate-12"
          animate={{
            y: [0, -15, 0],
            rotate: [12, 20, 12], 
          }}
          transition={{
            duration: 3, 
            ease: "easeInOut",
            repeat: Infinity, 
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} className='h-8 w-8' alt="logo" />
            <h3 className="text-2xl font-semibold">TechNextSolution</h3>
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Our mission is to blend creative design with cutting-edge technology to deliver
            impactful results. Whether it’s building a brand identity or designing your dream 
            website — we love turning ideas into reality.
          </p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Youtube, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-gray-500 rounded hover:bg-white hover:text-[#6A4DFF] transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 border-b border-purple-500 pb-1 inline-block">
            Quick Links
          </h4>
          <ul className="space-y-3 text-gray-300">
            <li
              onClick={() => navigate("/aboutus")}
              className={isActive("/aboutus") ? "text-[#6A4DFF] font-bold" : ""}
            >
              › TechNextSolutions About
            </li>
            <li
              onClick={() => navigate("/services")}
              className={isActive("/services") ? "text-[#6A4DFF] font-bold" : ""}
            >
              › Our Services
            </li>
            
            <li
              onClick={() => navigate("/TechnextSolutionFAQ")}
              className={isActive("/TechnextSolutionFAQ") ? "text-[#6A4DFF] font-bold" : ""}
            >
              › FAQ’S
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-xl font-semibold mb-4 border-b border-purple-500 pb-1 inline-block">
            Contact Us
          </h4>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <Mail size={18} /> info@example.com
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} /> +208–666–0112
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-3 py-2 mt-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 bg-transparent outline-none text-gray-700 px-2"
              />
              <button className="bg-[#6A4DFF] text-white p-2 rounded-full">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-8 right-8 bg-[#6A4DFF] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#5534e4] transition"
      >
        <ArrowUp />
      </button>
    </footer>
  );
}
