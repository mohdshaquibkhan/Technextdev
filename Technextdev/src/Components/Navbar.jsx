import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Define your navigation links in one place
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/aboutus" },
    { name: "Services", path: "/services" },
    { name: "Contacts", path: "/ContactUs" },
  ];

  return (
    <nav className="bg-[#6A4DFF] shadow-md w-full relative z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <img src={logo} className="h-8 w-8" alt="Logo" />
          <div className="text-2xl font-bold text-white">TechNextSolutions</div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 font-medium text-white">
          {navLinks.map((link) => (
            <li
              key={link.name}
              onClick={() => navigate(link.path)}
              className={`cursor-pointer transition-colors duration-200 ${
                location.pathname === link.path
                  ? "text-yellow-300 border-b-2 border-yellow-300"
                  : "hover:text-gray-200"
              }`}
            >
              {link.name}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full">
            <ul className="flex flex-col space-y-4 py-4 px-6 font-medium text-gray-700">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  onClick={() => {
                    navigate(link.path);
                    setIsOpen(false); // close menu on click
                  }}
                  className={`cursor-pointer transition-colors duration-200 ${
                    location.pathname === link.path
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
