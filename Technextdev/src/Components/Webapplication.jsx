import React, { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import applicationimg from "../assets/application.png"; 

const MobileWebApplication = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Should I develop a mobile app or a web app?",
      answer:
        "It depends on your target audience and business goals. Mobile apps offer better performance and offline capabilities, while web apps are accessible across all devices without installation.",
    },
    {
      question: "How much does it cost to develop an app?",
      answer:
        "Costs vary based on features, complexity, and platform. A simple app may cost less, while a fully-featured, multi-platform app requires a bigger budget.",
    },
    {
      question: "What technologies do you use for app development?",
      answer:
        "We use modern frameworks like React Native, Flutter, and Progressive Web Apps (PWA) for cross-platform development, and native technologies for platform-specific apps.",
    },
  ];

  const features = [
    "Custom Mobile App Development",
    "Responsive Web Applications",
    "User-Centered Design & UX",
    "Analytics & Performance Tracking",
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-50 text-gray-900 flex flex-col justify-center items-center text-center min-h-[60vh] px-4 sm:px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
            Mobile & Web Application Development
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Build powerful, scalable, and user-friendly applications for mobile
            and web platforms to grow your business.
          </p>

          <Link
            to="/"
            className="inline-block bg-blue-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-blue-50 py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Why Choose Our App Development Services?
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We build robust applications with modern technologies, focusing on
            scalability, performance, and a seamless user experience.
          </p>

          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="text-blue-600" size={20} />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <img
            src={applicationimg}
            alt="Mobile & Web Application"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-800">
                  {faq.question}
                </span>
                {openFAQ === index ? (
                  <ChevronUp className="text-blue-600" />
                ) : (
                  <ChevronDown className="text-blue-600" />
                )}
              </button>

              {openFAQ === index && (
                <div className="px-5 pb-5 text-gray-600 border-t border-gray-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MobileWebApplication;
