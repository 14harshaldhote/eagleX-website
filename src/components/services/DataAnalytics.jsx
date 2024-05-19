import React from 'react';
// import dataAnalyticsImage from '../assets/images/data-analytics.png'; // Add a relevant image

const DataAnalytics = () => {
  return (
    <div className="container mx-auto py-8 px-4 pt-44">
      <h2 className="text-3xl font-bold mb-4">Data Analytics</h2>
      <div className="flex flex-col md:flex-row mb-8">
        <div className="md:w-1/2 mb-4 md:mb-0">
          {/* <img src={dataAnalyticsImage} alt="Data Analytics" className="w-full h-auto rounded-lg shadow-md" /> */}
        </div>
        <div className="md:w-1/2 md:pl-8">
          <p className="text-gray-700 mb-4">
            The volume of data that one has to deal with has exploded to unimaginable levels in the past decade, and at the same time, the price of data storage has systematically reduced.
          </p>
          <p className="text-gray-700 mb-4">
            Private companies and research institutions capture terabytes of data about their users’ interactions, business, social media, and also sensors from devices such as mobile phones and automobiles. The challenge of this era is to make sense of this sea of data. This is where big data analytics comes into picture.
          </p>
        </div>
      </div>
      <div className="bg-white p-4 sm:p-11 rounded-lg shadow-md mb-8 flex flex-col md:flex-row">
        <div className="md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 md:mb-4 text-left border-b-4 border-deepBlue pb-2">Service Offerings</h3>
        </div>
        <div className="md:w-3/4 text-left p-20">
          <h4 className="text-xl font-semibold mb-2">Enterprise Data Warehouse</h4>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Data Archiving</li>
            <li>ELT Offload Architecture</li>
            <li>Datastore, Governance & Security Management</li>
            <li>Self Service BI / Discovery</li>
          </ul>
          <h4 className="text-xl font-semibold mb-2">Data Science</h4>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Strategy & Roadmap</li>
            <li>Prototyping & Tool Evaluation</li>
            <li>Data Integration, Access & Services</li>
            <li>Construction & Go-Live Enablement</li>
          </ul>
          <h4 className="text-xl font-semibold mb-2">Analytics</h4>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Real-time Ingestion</li>
            <li>Scalable Data Processing & Storage</li>
            <li>Analytics, Dashboarding & Alerting</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DataAnalytics;
