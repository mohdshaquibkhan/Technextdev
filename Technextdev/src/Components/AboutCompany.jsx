import React from "react";
import { motion } from "framer-motion";
import companyVideo from "../assets/Business Meeting.mp4"
import { useNavigate } from "react-router-dom";




export default function AboutCompany() {
   const navigate = useNavigate();


  return (
    <section className="px-6 py-16 bg-purple-50 relative overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Column - Image */}
        <div className="relative flex justify-center">
         <video
  src={companyVideo}
  autoPlay
  loop
  muted
  playsInline
  className="rounded-2xl w-[90%] md:w-[75%] shadow-xl z-10"
/>


          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-10 left-1/2 -translate-x-1/2 text-6xl md:text-8xl font-extrabold text-purple-200 z-0 select-none"
          >
            ABOUT COMPANY
          </motion.h3>

          {/* Floating Elements */}
          <div className="absolute top-10 left-6 bg-white px-4 py-2 shadow rounded-lg text-sm font-medium z-20">
            5 Stars <br />
            <span className="text-xs text-purple-600">Read Our Success Stories</span>
          </div>

          <div className="absolute bottom-6 left-6 bg-white px-4 py-2 shadow rounded-lg text-sm font-medium z-20">
             Insights <br />
            <span className="text-xs text-gray-500">Last 7 days</span>
          </div>
        </div>

        {/* Right Column - Content */}
        <div>
          <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
            ABOUT COMPANY
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            Skills To Improve Your <br /> Company Brand
          </h2>

          <p className="mt-4 text-gray-600">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at layout the point
            established fact that.
          </p>

          {/* Stats */}
          <div className="mt-8 flex flex-col sm:flex-row gap-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full border-4 border-purple-300 flex items-center justify-center text-xl font-bold text-purple-700">
                65%
              </div>
              <p className="font-semibold">Paid Search <br /> Marketing</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full border-4 border-purple-600 flex items-center justify-center text-xl font-bold text-purple-700">
                95%
              </div>
              <p className="font-semibold">Search Engine <br /> Optimization</p>
            </div>
          </div>

          {/* CTA Button */}
          <button 
          onClick={() => navigate("/landing")}
          className="mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full flex items-center gap-2 shadow-md transition">
            EXPLORE MORE <span className="text-lg">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}
