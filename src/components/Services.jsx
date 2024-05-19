import React from 'react';
import servicesImage from '../assets/images/services.png';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section className="py-12">
      <div className="bg-deepBlue w-full pt-11">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-6 md:p-12 lg:p-20">
          <div className="hero-content text-white flex-1 md:mr-10 lg:mr-20 mb-6 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-left">Our Services</h2>
            <p className="text-lg md:text-xl text-left">We provide a range of services to meet your needs.</p>
          </div>
          <div className="flex-shrink-0">
            <img src={servicesImage} alt="Services" className="max-w-xs md:max-w-md lg:max-w-lg" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="bg-white p-4 sm:p-6 rounded-lg  mb-8">
          <h3 className="text-4xl font-semibold mb-4 text-center">Our Core Services</h3>
          <div className="flex flex-wrap justify-center gap-6 p-20">
            <Link to="/services/digital-solutions" className="group block w-full md:w-1/3 p-11 bg-white shadow-lg rounded-lg transition-transform transform hover:-translate-y-2">
              <h4 className="text-xl font-semibold mb-2 text-center">Digital Solutions</h4>
              <p className="text-gray-700 text-center">Ardur Technology is a Data-Techno Solutions Company that provides specialized technology oriented solutions to the small-medium</p>
            </Link>
            <Link to="/services/it-services" className="group block w-full md:w-1/3 p-11 bg-white shadow-lg rounded-lg transition-transform transform hover:-translate-y-2">
              <h4 className="text-xl font-semibold mb-2 text-center">IT Services</h4>
              <p className="text-gray-700 text-center">Use of Cloud VMs for Development, Testing and Training: Includes support and testing of large scale web applications such as e-commerce sites</p>
            </Link>
            <Link to="/services/data-analytics" className="group block w-full md:w-1/3 p-11 bg-white shadow-lg rounded-lg transition-transform transform hover:-translate-y-2">
              <h4 className="text-xl font-semibold mb-2 text-center">Data Analytics</h4>
              <p className="text-gray-700 text-center">The process of converting large amounts of unstructured raw data, retrieved from different sources to a data product useful</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
