import React, { useState } from "react";

export default function ExpandableSections() {
  const [active, setActive] = useState(1);

  const sections = [
    { id: 1, title: "Rising Stars Obscure", subtitle: "Real-time Analytics", color: "from-[#6a11cb] to-[#2575fc]" },
    { id: 2, title: "Digital Marketing", subtitle: "Creative Campaigns", color: "from-[#667eea] to-[#764ba2]" },
    { id: 3, title: "Instantly Analyze", subtitle: "Data-driven Insights", color: "from-[#8e2de2] to-[#4a00e0]" },
    { id: 4, title: "Web & Mobile", subtitle: "Responsive Design", color: "from-[#43cea2] to-[#185a9d]" },
    { id: 5, title: "Email Marketing", subtitle: "Targeted Growth", color: "from-[#fc00ff] to-[#00dbde]" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col items-center justify-center px-4">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12">
        We Are A Creative Digital Marketing Agency
      </h2>

      {/* Cards Row */}
      <div className="flex gap-5 w-full max-w-7xl justify-center items-stretch">
        {sections.map((section) => (
          <div
            key={section.id}
            onMouseEnter={() => setActive(section.id)}
            onMouseLeave={() => setActive(1)}
            className={`relative transition-all duration-500 ease-in-out rounded-3xl overflow-hidden cursor-pointer shadow-xl flex flex-col justify-center items-center text-white ${
              active === section.id ? "flex-[2.5]" : "flex-[1]"
            } bg-gradient-to-r ${section.color}`}
            style={{ height: "350px", minWidth: "180px" }}
          >
            {/* Circle Number */}
            <div className="absolute top-6 right-6 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">
              {section.id.toString().padStart(2, "0")}
            </div>

            {/* Content */}
            <div className="text-center px-4">
              <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
              {active === section.id && (
                <p className="text-sm opacity-90">{section.subtitle}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
