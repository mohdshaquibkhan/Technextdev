import React from "react";
import { Briefcase, Code, Palette, Globe } from "lucide-react";

const services = [
  {
    icon: <Briefcase className="w-10 h-10 text-indigo-500" />,
    title: "Business Strategy",
    description:
      "We help you craft effective business strategies to grow your brand and reach new markets.",
  },
  {
    icon: <Code className="w-10 h-10 text-indigo-500" />,
    title: "Web Development",
    description:
      "Custom, responsive websites built with modern frameworks to ensure fast performance.",
  },
  {
    icon: <Palette className="w-10 h-10 text-indigo-500" />,
    title: "UI/UX Design",
    description:
      "Clean, user-friendly designs that deliver seamless experiences across all devices.",
  },
  {
    icon: <Globe className="w-10 h-10 text-indigo-500" />,
    title: "Digital Marketing",
    description:
      "Targeted digital campaigns that increase your visibility and drive conversions.",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Our Services
        </h2>
        <p className="text-gray-600 mb-12">
          We provide a wide range of digital services to help your business grow.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-lg rounded-2xl p-6 transition-transform transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
