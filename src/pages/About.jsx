import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2>About Us</h2>
        <div className='text-left  '>
          <h3>
            Our Story
          </h3>

        <p>"At EagleX, we are passionate about leveraging technology to create innovative software solutions that drive business success. Founded in 2018, our company is built on the principles of excellence, integrity, and collaboration. Our team of experienced professionals is dedicated to transforming your ideas into reality."</p>

        </div>
        <p>
        Our DNA
        From aurdur tech 
        </p>
        {/* Add more about content here */}
      </div>
      <p>

Our Vision
To become the world’s most renowned global consulting firm providing best-of-breed custom data solutions to empower our customers to make data-driven decisions
      </p>
    </section>
  );
};

export default About;
