import React from 'react';

const DigitalSolutions = () => {
  return (
    <div className="container mx-auto py-8 px-4 pt-24">
      <h2 className="text-3xl font-bold mb-4 border-b-4 border-deepBlue pb-2">Digital Solutions</h2>
      <div className="flex flex-wrap md:flex-nowrap mb-8">
        <div className="md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0">
          {/* <img src="/path/to/your/image.png" alt="Digital Transformation" className="w-full h-auto mb-4" /> */}
        </div>
        <div className="md:w-1/2 pl-0 md:pl-4">
          <h3 className="text-2xl font-semibold mb-2">Digital Transformation and Digital Enablement</h3>
          <p className="text-gray-700 mb-4">
            Ardur Technology is a Data-Techno Solutions Company that provides specialized technology oriented solutions to the small-medium sized enterprises to execute a digital transformation in their business processes.
          </p>
          <p className="text-gray-700 mb-4">
            With the expansion of the Information Technology market, Ardur Technology being a technology driven company guarantees that our technical solutions are best suitable for our customers business requirements.
          </p>
          <h4 className="text-xl font-semibold mb-2">Agile Ways of Working</h4>
          <p className="text-gray-700 mb-4">
            It’s not about technology, it’s about making sense out of technology.
          </p>
          <p className="text-gray-700 mb-4">
            Our Technology Transformation Strategies encompasses higher business expedition, acceleration of evolution’s, empowerment of the current workforce, training knowledge management and developing the appetite knowledge capability in an organization.
          </p>
          <p className="text-gray-700 mb-4">
            We serve organizations with our state of the art solutions that encompass two of the leading technologies in this arena – Intelligent Data Capture and Robotics Process Automation.
          </p>
          <div className="flex justify-center">
            <img src="/path/to/agile-method-image.png" alt="Agile Method" className="w-full h-auto md:w-3/4 lg:w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalSolutions;
