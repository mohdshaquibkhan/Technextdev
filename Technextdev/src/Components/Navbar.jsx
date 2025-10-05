import React, {useState} from 'react'
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png"


function Navbar() {
     const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=' bg-[#6A4DFF] shadow-md  w-full relative z-50'>
        <div className='container mx-auto px-4 flex justify-between items-center h-16'>

          <div className="flex items-center space-x-2">
          <img
          src = {logo}
          className='h-8 w-8'
          />
          <div className="text-2xl font-bold text-white">TechNextSolutions</div>
          </div>
          
        

        {/*Desktop view */}
        <ul className='hidden md:flex space-x-8 font-medium text-white '>
            <li className='hover:text-black-600 cursor-pointer'>Home</li>
            <li className='hover:text-black-600 cursor-pointer'>About</li>
            <li className='hover:text-black-600 cursor-pointer'>Services</li>
            <li className='hover:text-black-600 cursor-pointer'>Contact</li>
        </ul>

        {/* mobile view*/}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
          {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 py-4 px-6 font-medium text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">About</li>
            <li className="hover:text-blue-600 cursor-pointer">Services</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
        </div>
    </nav>
  )
}

export default Navbar