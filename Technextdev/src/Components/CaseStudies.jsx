import React, { useState } from "react";

export default function ExpandableSections() {
  const [active, setActive] = useState(1);

  const sections = [
    { id: 1, title: "Ignite Your Brand’s Potential", subtitle: "Unlock real-time insights and strategies that drive growth, enhance engagement, and transform your digital presence into measurable success", color: "from-[#6a11cb] to-[#2575fc]" },
    { id: 2, title: "Social Media Marketing: Building Brands Through Engagement", subtitle: "Harness the power of digital channels to connect with audiences, boost brand visibility, and achieve measurable business results through data-driven strategies and creative content", color: "from-[#667eea] to-[#764ba2]" },
    { id: 3, title: "Social Media Marketing: Building Brands Through Engagement", subtitle: "Leverage the power of social platforms to connect with your audience, increase brand awareness, and drive meaningful interactions that convert followers into loyal customers.", color: "from-[#8e2de2] to-[#4a00e0]" },
    { id: 4, title: "Web & Mobile Application Development: Innovating for a Digital World", subtitle: "Create seamless, user-friendly, and high-performing applications that empower businesses to engage customers and enhance digital experiences across all devices", color: "from-[#43cea2] to-[#185a9d]" },
    { id: 5, title: "Email Marketing: Connecting Directly with Your Audience", subtitle: "Engage customers with personalized, targeted emails that build relationships, boost conversions, and keep your brand top of mind.", color: "from-[#fc00ff] to-[#00dbde]" },
  ];

  const handleClick = (id) => {
    if (window.innerWidth < 768) {
      setActive(active === id ? null : id); // toggle on mobile
    }
  };

  return (
    <section className="bg-gradient-to-b from-purple-50 to-white flex flex-col items-center justify-center px-4 pt-8 pb-12 md:pt-10">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-8 md:mb-12 px-4">
        We Are A Creative Digital Marketing Agency
      </h2>

      {/* Cards */}
      <div
        className="flex flex-col md:flex-row gap-5 w-full max-w-7xl justify-center items-stretch
                   overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scrollbar-hide"
      >
        {sections.map((section) => (
          <div
            key={section.id}
            onMouseEnter={() => window.innerWidth >= 768 && setActive(section.id)}
            onMouseLeave={() => window.innerWidth >= 768 && setActive(1)}
            onClick={() => handleClick(section.id)}
            className={`relative transition-all duration-500 ease-in-out rounded-3xl overflow-hidden cursor-pointer shadow-xl flex flex-col justify-center items-center text-white
              ${active === section.id ? "md:flex-[2.5] flex-[1.2]" : "md:flex-[1] flex-[1]"}
              bg-gradient-to-r ${section.color} w-full md:w-auto snap-center`}
            style={{ height: "350px", minWidth: "180px" }}
          >
            {/* Circle Number */}
            <div className="absolute top-6 right-6 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">
              {section.id.toString().padStart(2, "0")}
            </div>

            {/* Content */}
            <div className="text-center px-4">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {section.title}
              </h3>
              {(active === section.id || window.innerWidth < 768) && (
                <p
                  className={`text-sm opacity-90 transition-all duration-300 ${
                    active === section.id ? "max-h-40" : "max-h-0 md:max-h-full"
                  } overflow-hidden`}
                >
                  {section.subtitle}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
