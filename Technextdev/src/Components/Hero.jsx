
import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import hero from "../assets/hero.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";

export default function Hero() {
  return (
    <section className="relative bg-[#6A4DFF] text-white overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Floating Icon Left */}
      <motion.div
        className="absolute top-6 left-4 md:top-12 md:left-12"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={icon1}
          alt="megaphone"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
        />
      </motion.div>

      {/* Floating Icon Right */}
      <motion.div
        className="absolute top-6 right-4 md:top-12 md:right-12"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={icon2}
          alt="lightning"
          className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16"
        />
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center gap-8">
        {/* Center Heading */}
        <h1 className="relative text-6xl sm:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 text-center tracking-wide">
          <span className="absolute top-1 left-1 text-black opacity-30">BOOST NOW</span>
          BOOST NOW
        </h1>

        {/* Content Row */}
        <div className="grid md:grid-cols-3 items-center gap-8 mt-6 w-full max-w-6xl">
          {/* Left */}
          <div className="space-y-3 sm:space-y-4 text-left order-2 md:order-1">
            <p className="uppercase tracking-widest text-sm sm:text-base">
              Go for Advertising
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Think Digital
            </h2>
            <p className="text-gray-200 text-sm sm:text-base md:text-lg">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised.
            </p>
          </div>

          {/* Center Image */}
          <div className="relative flex justify-center order-1 md:order-2">
            <motion.img
              src={hero}
              alt="hero"
              className="w-64 sm:w-80 md:w-[400px] lg:w-[480px] h-auto object-contain z-10"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Circular Play Button */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center">
              <motion.div
                className="absolute w-full h-full rounded-full border border-white flex items-center justify-center text-[10px] sm:text-xs text-center leading-tight uppercase tracking-wider"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                PLAY INTRO VIDEO • PLAY INTRO VIDEO •
              </motion.div>
              <button className="relative z-20 bg-white/20 backdrop-blur-md rounded-full p-4 sm:p-5 border-2 border-white flex items-center justify-center hover:scale-110 transition">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="text-left space-y-4 order-3">
            <p className="text-gray-200 text-sm sm:text-base md:text-lg">
              There Are Many Variations Of Passages Of Lorem Ipsum Available,
              But The Majority Have Suffered Alteration In Some Form, By
              Injected.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-sm">Trustpilot</span>
            </div>
          </div>
        </div>
      </div>

      {/*Moving Banner Bottom */}
      {/*Crossing Moving Banners Bottom */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden">
  {/* Top Line (White Background) */}
  <motion.div
    className="flex whitespace-nowrap font-bold text-xl bg-white text-black py-3"
    animate={{ x: ["0%", "-100%"] }}
    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
  >
    {/* Repeat content for seamless loop */}
    {Array(10).fill("✦ THE BEST SOULTION").map((text, i) => (
      <span key={i} className="px-6">{text}</span>
    ))}
  </motion.div>

  {/* Bottom Line (Lime Background, opposite direction) */}
  <motion.div
    className="flex whitespace-nowrap font-bold text-xl bg-lime-400 text-black py-3"
    animate={{ x: ["-100%", "0%"] }}
    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
  >
    {Array(10).fill("✦ THE BEST SOULTION").map((text, i) => (
      <span key={i} className="px-6">{text}</span>
    ))}
  </motion.div>
</div>

    </section>
  );
}
