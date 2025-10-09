// File: src/components/AboutUs.jsx
import React from "react";
import aboutusimg from "../assets/aboutusnavar.png";

const AboutUs = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-center py-12 px-4 sm:px-6 md:px-20 lg:px-28">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-purple-600">
          About Us
        </h2>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
          Welcome to our digital space! We are a passionate team focused on
          crafting elegant, responsive, and user-friendly web experiences.
          <br />
          <br />
          Our mission is to blend creative design with cutting-edge technology
          to deliver impactful results. Whether it’s building a brand identity
          or designing your dream website — we love turning ideas into reality.
          <br />
          <br />
          At our core, we believe that every project tells a story. That’s why
          we take the time to understand your goals, audience, and vision —
          ensuring every pixel and every line of code works together to create
          something meaningful.
          <br />
          <br />
          From startups taking their first digital steps to established brands
          seeking a fresh perspective, we provide end-to-end digital solutions
          that inspire, engage, and perform.
          <br />
          <br />
          Our team thrives on collaboration, creativity, and continuous
          learning. We stay ahead of trends, explore new tools, and push
          boundaries to make sure your digital presence stands out in today’s
          competitive world.
          <br />
          <br />
          Let’s build something extraordinary — together.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src={aboutusimg}
          alt="Team working together"
          className="rounded-3xl  w-4/5 sm:w-3/4 md:w-[90%] lg:w-full max-w-2xl transition-transform duration-300 "
        />
      </div>
    </section>
  );
};

export default AboutUs;
