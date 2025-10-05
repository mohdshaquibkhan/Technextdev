import React from "react";

export default function ServicesSection() {
  const services = [
    {
      title: "Digital Marketing",
      description: "Lorem dolor amet consectetur read adipiscing any more elit.",
      icon: "https://cdn-icons-png.flaticon.com/512/929/929416.png",
    },
    {
      title: "SEO Analytics",
      description: "Lorem dolor amet consectetur read adipiscing any more elit.",
      icon: "https://cdn-icons-png.flaticon.com/512/2103/2103658.png",
    },
    {
      title: "Social Marketing",
      description: "Lorem dolor amet consectetur read adipiscing any more elit.",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    },
  ];

  return (
    <section className="px-6 py-12 bg-white">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
          WHY SERVICES US
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4">
          Use SEO To Drive Growth At Your Business
        </h2>
        <p className="mt-4 text-gray-500 italic">
          Pellentesque ut vehicula sapien dictumst. Maecenas ante.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className="flex items-center mb-4">
              <img
                src={service.icon}
                alt={service.title}
                className="w-10 h-10"
              />
              <h3 className="ml-3 text-lg font-semibold">{service.title}</h3>
            </div>
            <p className="text-gray-500 mb-4">{service.description}</p>
            <a
              href="#"
              className="text-purple-600 font-semibold flex items-center hover:underline"
            >
              READ MORE <span className="ml-2">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
