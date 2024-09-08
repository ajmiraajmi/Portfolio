
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <nav className="bg-gray-800 p-4 py-8 mb-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">  
          <h1 className="text-white text-xl font-bold ">Ajmira</h1>
        </div>

        <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <ul
          className={`md:flex space-x-12 text-xl md:items-center absolute md:static left-0 w-full bg-gray-800 md:w-auto transition-all duration-300 ease-in ${
            isOpen ? 'top-16' : '-top-96'
          }`}
        >
          <li className="hover:text-gray-300 p-2 md:p-0">
            <Link to="/" className="block md:inline-block text-white">
              Home
            </Link>
          </li>
          <li className="hover:text-gray-300 p-2 md:p-0">
            <Link to="/about" className="block md:inline-block text-white">
              About
            </Link>
          </li>
          <li className="hover:text-gray-300 p-2 md:p-0">
            <Link to="/resume" className="block md:inline-block text-white">
              Resume
            </Link>
          </li>
          <li className="hover:text-gray-300 p-2 md:p-0">
            <Link to="/blog" className="block md:inline-block text-white">
              Blog
            </Link>
          </li>
          <li className="hover:text-gray-300 p-2 md:p-0">
            <Link to="/contact" className="block md:inline-block text-white">
              Contact
            </Link>
          </li>
        </ul>

      
        <div className="hidden md:flex items-center space-x-2 text-white text-xl">
          <FaPhone />
          <span className="text-xl">+880 01842637700</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar