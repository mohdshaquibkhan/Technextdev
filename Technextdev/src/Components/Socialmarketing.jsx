import React, { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import marketingImg from "../assets/socialmedia.png"; 

const SocialMarketing = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Which social platforms should my business focus on?",
      answer:
        "It depends on your audience and goals. We help identify where your customers are most active — whether it’s Instagram, Facebook, LinkedIn, X (Twitter), or TikTok — and create a strategy that maximizes engagement and ROI.",
    },
    {
      question: "Do you offer both paid and organic marketing services?",
      answer:
        "Yes! We manage both organic campaigns to build brand trust and paid ad strategies to boost visibility and conversions.",
    },
    {
      question: "Can you help with content creation for social media?",
      answer:
        "Absolutely. Our creative team designs engaging visuals, videos, and copy that align with your brand’s tone and marketing goals.",
    },
  ];

  const features = [
    "Social Media Strategy & Planning",
    "Content Creation & Scheduling",
    "Ad Campaign Management (Meta, Google, LinkedIn, etc.)",
    "Audience Growth & Engagement Tracking",
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-50 text-gray-900 flex flex-col justify-center items-center text-center min-h-[60vh] px-4 sm:px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
            Social Media Marketing
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Build your brand, engage your audience, and grow your business
            through powerful social media strategies tailored for your goals.
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
            Why Choose Our Social Marketing Services?
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We help you connect with your audience, increase brand visibility,
            and drive measurable results through creative and data-driven social
            media marketing campaigns.
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
            src={marketingImg}
            alt="Social Media Marketing"
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

export default SocialMarketing;
