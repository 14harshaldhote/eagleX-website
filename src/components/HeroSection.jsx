import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import person from '../assets/images/person.jpg';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const words = ['Software Solutions', 'AI Innovations', 'Technologies', 'Strategies'];

  useEffect(() => {
    const typingIndex = loopNum % words.length;
    const fullText = words[typingIndex];

    function manageTyping() {
      if (isDeleting) {
        setText(current => current.substring(0, current.length - 1));
      } else {
        setText(current => fullText.substring(0, current.length + 1));
      }
    }

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    const timer = setTimeout(manageTyping, isDeleting ? 200 : 150);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words]);

  return (
    <div className="bg-deepBlue flex flex-col md:flex-row justify-between items-center p-6 md:p-12 lg:p-20">
      <div className="hero-content text-white flex-1 md:mr-10 lg:mr-20 mb-6 md:mb-0">
        <p className='text-2xl md:text-3xl lg:text-4xl'>
          Empowering your projects with cutting-edge <span style={{ color: '#DBE5F3', fontWeight: 'bold' }}>{text}</span><span>|</span>
        </p>
      </div>
      <div className="hero-image flex-1">
        <img src={person} alt="Dashboard" className='rounded-lg bg-clay-500 shadow-lg shadow-blue-500/90' />
      </div>
    </div>
  );
};

export default HeroSection;
