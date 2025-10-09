import React, { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import DigitalMarketingImg from "../assets/digitalmarketing.png"


const DigitalMarketing = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Why is SEO important for small businesses?",
      answer:
        "SEO helps small businesses improve their visibility on search engines, reach more customers organically, and compete with larger companies without spending heavily on paid ads.",
    },
    {
      question: "How do I choose the best digital marketing agency?",
      answer:
        "Look for an agency with proven results, transparent communication, customized strategies, and positive client testimonials. Always ask for a clear performance report structure.",
    },
    {
      question: "What services are included in digital marketing?",
      answer:
        "Digital marketing includes SEO, SEM, content marketing, social media management, email marketing, and paid advertising on platforms like Google and Meta.",
    },
  ];

  const features = [
    "Comprehensive SEO Optimization",
    "Social Media Campaigns",
    "Content Strategy & Creation",
    "Conversion Tracking & Reporting",
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
    

<section className="bg-purple-50 text-gray-900 flex flex-col justify-center items-center text-center min-h-[60vh] px-4 sm:px-6 md:px-12 lg:px-24 py-12">
  <div className="max-w-3xl">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
      Digital Marketing Services
    </h1>

    <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
      We help your business grow with powerful marketing strategies, 
      data-driven campaigns, and innovative online solutions.
    </p>

    <Link
      to="/"
      className="inline-block bg-purple-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-full shadow-md hover:bg-purple-700 transition duration-300"
    >
      ← Back to Home
    </Link>
  </div>
</section>



      {/* Content Section */}
      <section className=" bg-purple-50 py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-purple-800 mb-4">
            Why Choose Our Digital Marketing Solutions?
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our expert marketing team uses a data-first approach to craft campaigns that bring measurable results.
            Whether you want more leads, better engagement, or higher sales — we’ve got you covered.
          </p>

          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="text-purple-600" size={20} />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <img
            src={DigitalMarketingImg}
            alt="Digital Marketing"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-purple-800 mb-10 text-center">
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
                  <ChevronUp className="text-purple-600" />
                ) : (
                  <ChevronDown className="text-purple-600" />
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

export default DigitalMarketing;
