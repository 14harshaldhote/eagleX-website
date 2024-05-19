import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/eagleXt.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-deepBlue py-2' : 'bg-deepBlue p-4 md:p-6 lg:p-11'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="eagleX" className={`transition-all duration-300 ${isScrolled ? 'h-12 md:h-16 lg:h-auto' : 'h-12 md:h-16 lg:h-auto'} w-32 md:w-44 ml-4 md:ml-8 lg:ml-14`} />

        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? 'Close' : 'Menu'}
        </button>

        <nav className={`w-full md:w-auto md:pr-11 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row md:space-x-4 lg:space-x-8 mt-4 md:mt-0">
            <li><Link to="/" className="text-customLink hover:text-white">Home</Link></li>
            <li><Link to="/blog" className="text-customLink hover:text-white">Blog</Link></li>
            <li><Link to="/services" className="text-customLink hover:text-white">Services</Link></li>
            {/* <li><Link to="/portfolio" className="text-customLink hover:text-white">Portfolio</Link></li> */}
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
