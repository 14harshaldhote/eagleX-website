import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/eagleXt.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-deepBlue p-4 md:p-6 lg:p-11">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="eagleX" className="h-12 md:h-16 lg:h-auto w-32 md:w-44 ml-4 md:ml-8 lg:ml-14" />

        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? 'Close' : 'Menu'}
        </button>

        <nav className={`w-full md:w-auto md:pr-11 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row md:space-x-4 lg:space-x-8 mt-4 md:mt-0">
            <li><Link to="/" className="text-customLink hover:text-white">Home</Link></li>
            <li><Link to="/blog" className="text-customLink hover:text-white">Blog</Link></li>

            <li><Link to="/services" className="text-customLink hover:text-white">Services</Link></li>
            <li><Link to="/portfolio" className="text-customLink hover:text-white">Portfolio</Link></li>
            <li><Link to="/about" className="text-customLink hover:text-white">About</Link></li>

            <li>
              <Link to="/contact" className="mt-4 md:mt-0 px-3 py-2 rounded-2xl text-sm font-medium bg-customLink text-black transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
