import React, { useState } from 'react';
import satishImage from '../assets/images/satish.jpeg'; // Ensure you have relevant images
import kenImage from '../assets/images/kenj.jpeg'; // Ensure you have relevant images
import mohendraImage from '../assets/images/mohend.jpeg'; // Ensure you have relevant images
import jeffImage from '../assets/images/jeff.jpeg'; // Ensure you have relevant images
import subodhImage from '../assets/images/subodh.jpeg'; // Ensure you have relevant images
import './custom.css';

const leaders = [
  {
    id: 1,
    name: 'Satish Sable',
    title: 'Founder',
    image: satishImage,
    description: `
      A versatile experienced professional and entrepreneur in Information Technology, Business Enablement Services and Business Analysis. 
      The key to my success has been the 15 enriching years of experience and learning, inculcated within the IT and ITES space. 
      Have crafted a profitable business by concentrating on a basic yet persuasive objective: supporting our clients' success, 
      that comprises of distinct international client base, from small – medium businesses to large companies.
      
      I have been able to accomplish this by means of careful, strategic investments in technology, processes, and—most significantly—people.
    `,
  },
  {
    id: 2,
    name: 'Ken Jourdan',
    title: 'Managing Partner - USA',
    image: kenImage,
    description: `
      Ken has been in information management, sales and operation for twenty years. Ken has been involved in three major service bureaus in his career, 
      providing outsourcing services to clients such as Iron Mountain (the world’s largest records storage company), Citibank, Siemens, Chase Manhattan Bank, 
      United Healthcare, Globe Life Insurance, and many others.
      
      Ken has been involved in finding outsourcing solutions to customers with Real Estate Title Search services, Forms processing, 
      Data Capture requirements in the US, Mexico, China and India.
      
      Ken Jourdan is based out of our office at Las Vegas – Nevada and manages our Sales and Local Operations.
    `,
  },
  {
    id: 3,
    name: 'Mohendra Sarkar',
    title: 'CEO',
    image: mohendraImage,
    description: `
      Mohendra possesses 30 years of global experience in the BPO/KPO industry, spread across Title Insurance Services, Tax Certification, Appraisal Review, Mortgage Services, Health Care, Telecom, Insurance (Life and Pensions), Structured Finance and Finance & Accounting.
      
      Mohendra has been instrumental in driving strategic projects in evolving technologies space, key ones being Robotics, Automation, Digital Transformation and Analytics & Insight, having demonstrated exemplary excellence in delivering pioneering outcomes and unprecedented results in terms of improved customer experience, better efficiency, augmented revenue and effective process control and compliance.
      
      He is leading Ardur Technology LLC as it's CEO.
    `,
  },
  {
    id: 4,
    name: 'Jeff Zazzaro',
    title: 'Director Technology Partner',
    image: jeffImage,
    description: `
      Jeff Zazzaro is a data and technology executive with over 25 years of experience across data management, data engineering and software development.
      
      Jeff is skilled in developing and overseeing technical and data management projects in alignment with client goals. He has a proven track record of directing the effective delivery of IT and data services and processes.
      
      In addition to driving stakeholder value throughout his numerous leadership roles, Zazzaro boasts 25+ years of management experience.
      
      Zazzaro earned his Bachelor’s Degree from University of South Carolina.
    `,
  },
  {
    id: 5,
    name: 'Subodh Karkare',
    title: 'Chief Operating Officer',
    image: subodhImage,
    description: `
      Subodh as a COO has been instrumental in formulating and implement business operations and process controls across the various services, establishing policies that promote company culture and vision, and oversee operations of the company and the work of executives.
      
      He also has been analysing the current processes to identify process improvement and innovation to drive efficiency and cost reduction for our clients.
      
      In his previous role – Subodh has been performing the Center Head role for a private entity engaged with providing Skill based Training for the Banking sector having a nationwide presence.
    `,
  },
];

const Leader = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);

  const handleLeaderClick = (leader) => {
    setSelectedLeader(leader);
  };

  const handleCloseModal = () => {
    setSelectedLeader(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-semibold text-center mb-12">Leadership</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {leaders.map((leader) => (
          <div
            key={leader.id}
            className="group bg-white text-black p-20 m-2 rounded-lg shadow-lg cursor-pointer w-96 transform transition-transform duration-300 ease-in-out hover:bg-deepBlue hover:text-white leader-card"
            onClick={() => handleLeaderClick(leader)}
          >
            <div className="flex justify-center mb-4">
              <div className="rounded-full p-1 bg-customLink group-hover:bg-white">
                <img src={leader.image} alt={leader.name} className="w-32 h-32 rounded-full object-cover" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center relative z-10">{leader.name}</h3>
            <p className="text-center text-gray-600 group-hover:text-white relative z-10">{leader.title}</p>
          </div>
        ))}
      </div>

      {selectedLeader && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto relative">
            <button
              className="absolute top-2 right-2 text-red-600 text-2xl"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row">
              <div className="md:flex-shrink-0">
                <img src={selectedLeader.image} alt={selectedLeader.name} className="w-full h-full object-cover rounded-lg mb-4" />
              </div>
              <div className="md:ml-6">
                <h3 className="text-2xl font-semibold mb-2">{selectedLeader.name}</h3>
                <p className="text-lg text-gray-700 mb-4">{selectedLeader.title}</p>
                <p className="text-gray-700 whitespace-pre-line">{selectedLeader.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leader;
