import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/eagleXt.png';
import './Header.css';

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
    <>
      <div className={`fixed top-0 w-full z-50 navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container mx-auto flex justify-between items-center">
          <img src={logo} alt="eagleX" className="logo" />

          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isOpen ? 'Close' : 'Menu'}
          </button>

          <nav className={`menu ${isOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row md:space-x-4 lg:space-x-8 mt-4 md:mt-0">
              <li><Link to="/" className="text-customLink hover:text-white">Home</Link></li>
              <li><Link to="/blog" className="text-customLink hover:text-white">Blog</Link></li>
              <li><Link to="/services" className="text-customLink hover:text-white">Services</Link></li>
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

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={toggleMenu}>X</button>
            <ul className="flex flex-col space-y-4">
              <li><Link to="/" className="text-black hover:text-deepBlue" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/blog" className="text-black hover:text-deepBlue" onClick={toggleMenu}>Blog</Link></li>
              <li><Link to="/services" className="text-black hover:text-deepBlue" onClick={toggleMenu}>Services</Link></li>
              <li><Link to="/about" className="text-black hover:text-deepBlue" onClick={toggleMenu}>About</Link></li>
              <li>
                <Link to="/contact" className="px-3 py-2 rounded-2xl text-sm font-medium bg-customLink text-black transition-colors duration-300" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
