import React from 'react';

const DataAnalytics = () => {
  return (
    <div className="data-analytics-container">
      <div className="container mx-auto py-8 px-4">
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
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-8 flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 md:mb-4 text-left border-b-4 border-deepBlue pb-2">Service Offerings</h3>
          </div>
          <div className="md:w-3/4 text-left p-4 md:p-8 lg:p-16">
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
      <style jsx>{`
        .data-analytics-container {
          margin-top: 11rem; /* Adjust the margin-top as per the height of your header */
        }

        @media (min-width: 768px) {
          .data-analytics-container {
            margin-top: 8rem; /* Adjust for medium screens */
          }
        }

        @media (min-width: 1024px) {
          .data-analytics-container {
            margin-top: 10rem; /* Adjust for large screens */
          }
        }

        .bg-white {
          padding: 1rem;
        }

        .md\\:w-1\\/2 {
          width: 100%;
        }

        .md\\:pl-8 {
          padding-left: 2rem;
        }

        .md\\:w-1\\/4 {
          width: 100%;
        }

        .md\\:w-3\\/4 {
          width: 100%;
        }

        .md\\:p-8 {
          padding: 2rem;
        }

        .lg\\:p-16 {
          padding: 4rem;
        }
      `}</style>
    </div>
  );
};

export default DataAnalytics;
