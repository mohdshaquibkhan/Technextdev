import React from "react";
import { ArrowRight, Mail, Phone, Facebook, Twitter, Youtube, Linkedin, CalendarDays, ArrowUp } from "lucide-react";

import rocket from "../assets/rocket.png"; 
   import { motion } from "framer-motion";
   import logo from "../assets/logo.png"

export default function Footer() {
  return (
    <footer className="bg-[#0b0c52] text-white relative overflow-hidden">
      {/* Top CTA Section */}
      <div className="relative bg-gradient-to-r from-[#6A4DFF] to-[#8A63FF] rounded-b-[2rem] px-10 md:px-20 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Image */}
        <div className="flex items-center justify-center w-full md:w-auto">
          
        </div>

        {/* Middle: Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Stay Connected With <br /> Cutting Edge IT
          </h2>
        </div>

        {/* Right: Button */}
        <div className="flex items-center justify-center gap-3">
          <button className="flex items-center gap-3 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
            TALK TO A SPECIALIST <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Rocket Icon (absolute top-right) */}
    

{/* Rocket Icon (animated floating top-right) */}
<motion.img
  src={rocket}
  alt="rocket"
  className="absolute right-6 top-6 w-16 md:w-24 rotate-12"
  animate={{
    y: [0, -15, 0], // Moves up and down
    rotate: [12, 20, 12], // Slight rotation effect
  }}
  transition={{
    duration: 3, // Speed of the animation
    repeat: Infinity, // Loops forever
    ease: "easeInOut",
  }}
/>

      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="">
              <div className=""></div>
            </div>
             <img
                      src = {logo}
                      className='h-8 w-8'
                      />
            <h3 className="text-2xl font-semibold">TechNextSolution</h3>
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Phasellus ultricies aliquam volutpat ullamcorper laoreet neque,
            a lacinia curabitur lacinia mollis.
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
            <li>› Digtek About</li>
            <li>› Our Services</li>
            <li>› Our Blogs</li>
            <li>› FAQ’S</li>
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
      <button className="absolute bottom-8 right-8 bg-[#6A4DFF] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#5534e4] transition">
        <ArrowUp />
      </button>
    </footer>
  );
}
