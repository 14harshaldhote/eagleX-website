import React from 'react';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Portfolio from '../components/Portfolio';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <Testimonials />
      <Portfolio />
    </div>
  );
};

export default Home;
