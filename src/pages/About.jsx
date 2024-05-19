import React from 'react';
import blog from '../assets/images/blog.png'; // Ensure you have a relevant image
import Leader from '../components/Leader';

const About = () => {
  return (
    <section className=" py-12">
      <div className="bg-deepBlue w-full pt-11">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-6 md:p-12 lg:p-20">
          <div className="hero-content text-white flex-1 md:mr-10 lg:mr-20 mb-6 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-left">About Us</h2>
            <p className="text-lg md:text-xl text-left">We align all our individual efforts to deliver quality service.</p>
          </div>
          <div className="flex-shrink-0">
            <img src={blog} alt="blog" className="max-w-xs md:max-w-md lg:max-w-lg" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 ">

        <div className=" p-16 sm:p-16 rounded-lg  mb-8">
          <div className='h-56 px-56'>
            <p className="text-4xl sm:text-4xl font-semibold mb-4 text-center ">Our Vision</p>
            <p className='text-center p-16'>
              Our vision is to become a premier and preferred partner to our clients by being a global provider of top-notch business outsourcing services across several verticals. Ardur will be a premier partner of choice in transforming businesses to succeed.
            </p>
          </div>

        </div>
        <div>
          <Leader />
        </div>




        <div className="bg-white p-4 sm:p-11 rounded-lg shadow-md mb-8 flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 md:mb-4 text-left border-b-4 border-deepBlue pb-2">Our Story</h3>
          </div>
          <div className="md:w-3/4 text-left p-20">
            <p className="text-gray-700 mb-4">
              "At EagleX, we are passionate about leveraging technology to create innovative software solutions that drive business success. Founded in 2018, our company is built on the principles of excellence, integrity, and collaboration. Our team of experienced professionals is dedicated to transforming your ideas into reality."
            </p>
            {/* <img src={teamImage} alt="Our Team" className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4" /> */}
            <p className="text-gray-700">
              Since our inception, we have consistently delivered high-quality solutions that meet the evolving needs of our clients. Our commitment to continuous improvement and staying at the forefront of technological advancements has earned us a reputation as a trusted partner in the industry.
            </p>
          </div>
        </div>

        {/* Our Experience Section */}
        <div className="bg-white p-4 sm:p-11 rounded-lg shadow-md mb-8 flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 md:mb-4 text-left border-b-4 border-deepBlue pb-2">Our Expertise, Your Assurance</h3>
          </div>
          <div className="md:w-3/4 text-left p-20">
            <p className="text-gray-700 mb-4 ">
              We are experienced in implementing and matching the best people, processes and technology with your business needs. This ensures absolute security and peace of mind for your business.
            </p>
          </div>
        </div>
        <div className="bg-white p-4 sm:p-11 rounded-lg shadow-md mb-8 flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 md:mb-4 text-left border-b-4 border-deepBlue pb-2">Our DNA</h3>
          </div>
          <div className="md:w-3/4 text-left p-20">
            <p className="text-gray-700 mb-4 ">
              From ardour tech, we bring a rich history of technological innovation and a deep understanding of the challenges businesses face today. Our DNA is rooted in a passion for problem-solving and a relentless pursuit of excellence.
            </p>
          </div>
        </div>





      </div>
    </section>
  );
};

export default About;
