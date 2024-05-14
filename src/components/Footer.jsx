import React from 'react';
import logo from '../assets/images/eagleXt.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <footer className=" text-black px-4 sm:px-10 py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6">
        <div className="flex justify-center sm:justify-start align-center">
          {/* <img src={logo} alt="eagleX" className="h-12 w-auto " /> */}
        </div>
        
        {/* Company Info Section */}
        <div>
          <h4 className="font-bold text-lg mb-3">About</h4>
          <ul className="space-y-1">
            <li>Our story</li>
            <li>Partner ecosystem</li>
            <li>Team</li>
            <li>Soul of eagleX</li>
          </ul>
        </div>

        {/* Solutions Section */}
        <div>
          <h4 className="font-bold text-lg mb-3">Solutions</h4>
          <ul className="space-y-1">
            <li>Sports Retail</li>
            <li>Healthcare</li>
            <li>AI </li>
            <li>Public Sectors</li>
            <li>Offshore Development Center</li>
          </ul>
        </div>

        {/* Careers Section */}
        <div >
          <h4 className="font-bold text-lg mb-3 text-center sm:text-left">Careers</h4>
          <ul className="space-y-1 text-center sm:text-left">
            <li>Opening</li>
          </ul>
          </div>
          
        
      </div>
      {/* About, Solutions, Careers Sections */}

      <div className="col-span-1 sm:col-span-3 sm:mt-4  m-11">
          <div className=" flex justify-between text-center sm:text-left mt-10 border-t border-gray-700 pt-3">
            <span>© 2024 eagleX. All rights reserved.</span>
           
            <div className="flex justify-center sm:justify-start space-x-4 mt-2">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FacebookIcon style={{ color: 'black' }} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon style={{ color: 'black' }} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramIcon style={{ color: 'black' }} />
              </a>
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                <GitHubIcon style={{ color: 'black' }} />
              </a>
            
          </div>
          </div>
        </div>
      {/* </div> */}
    </footer>

  );
};

export default Footer;
