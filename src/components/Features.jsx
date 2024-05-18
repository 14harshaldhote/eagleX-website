import React from 'react';
import './Features.css';
const Features = () => {
  const features = [
    {
      title: "Ideate",
      description: "We turn your ideas into actionable plans, ensuring every concept is nurtured from inception to realization.",
      expertise: "Our Expertise",
      areas: "Consulting | Design Thinking",
    },
    {
      title: "Innovate",
      description: "Building the foundation for scalable, innovative solutions that meet market demands and exceed expectations.",
      expertise: "Our Expertise",
      areas: "Engineering | Data Science",
    },
    {
      title: "Execute",
      description: "Seamlessly integrating technology and creativity to deliver robust, user-centric solutions.",
      expertise: "Our Expertise",
      areas: "Development | UX/UI Design",
    },
    {
      title: "Grow",
      description: "Leveraging analytics and insights to continuously improve and grow your digital presence.",
      expertise: "Success Stories",
      areas: "E-commerce | FinTech | Healthcare",
    }
  ];

  return (
    <section className=" features py-12 px-4  text-black text-center ">
      <div className="container mx-auto">
        <h2 className='underline decoration-deepBlue'>What We Do Best</h2>
        <h3 className="text-2xl mb-10 text-bold  ">Nurturing Digital Outcomes In Four Steps</h3>
        <div className="flex flex-wrap justify-center ">
          {features.map((feature, index) => (
            <div key={index} className="bg-customLink border border-gray-8 rounded-lg p-11 m-4 max-w-xs flex-1 ">
              <h4 className="text-xl font-semibold mb-4">{feature.title}</h4>
              <p className="mb-4 text-left">{feature.description}</p>
              <p className="font-bold">{feature.expertise}</p>
              <p className='text-left p-2'>{feature.areas}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
