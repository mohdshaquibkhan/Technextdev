import React from "react";
import LandingPageImg from "../assets/landingpage.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-16 px-6 md:py-32 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between">
        
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Building Modern Websites & Apps
          </h1>
          <p className="mb-6 text-gray-700 text-base sm:text-lg md:text-xl">
            Technext Solution delivers cutting-edge digital solutions. From responsive websites and mobile apps to UI/UX design and CRM platforms, we help businesses grow efficiently and creatively.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            
          </div>

          <Link
            to="/"
            className="inline-block bg-blue-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src={LandingPageImg}
            alt="Technext Solution"
            className="rounded-xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          Why Choose Technext?
        </h2>
        <div className="grid gap-10 md:grid-cols-3 text-center">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Expert Team</h3>
            <p className="text-gray-600">
              Experienced developers and designers delivering top-quality solutions tailored to your business.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Innovative Solutions</h3>
            <p className="text-gray-600">
              We use the latest technologies to create forward-thinking digital products that stand out.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Customer Focus</h3>
            <p className="text-gray-600">
              Your success is our priority. We provide tailored solutions that align with your business goals.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
