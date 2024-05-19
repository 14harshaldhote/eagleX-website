import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optionally handle form submission, e.g., sending data to an API
    console.log('Form submitted:', formData);
  };

  return (
    <section className="w-full mt-20 md:mt-28">
      <div className="flex flex-col md:flex-row justify-center items-center bg-deepBlue py-12 px-4 md:px-20 lg:px-44">
        <div className="w-full md:w-1/2 max-w-lg text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-semibold text-customLink">Contact Us</h2>
          <p className="text-customLink">Start your Voyage towards Meaningful Results</p>
        </div>
        <form className="w-full md:w-1/2 max-w-lg space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-customLink">Your Name*</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Your Name" 
              required 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-customLink">Your Email*</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Your Email" 
              required 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-customLink">Your Mobile</label>
            <input 
              type="text" 
              id="mobile" 
              name="mobile" 
              value={formData.mobile} 
              onChange={handleChange} 
              placeholder="Your Mobile"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-customLink">Company Name</label>
            <input 
              type="text" 
              id="company" 
              name="company" 
              value={formData.company} 
              onChange={handleChange} 
              placeholder="Company Name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-customLink">Your Message*</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Your Message" 
              required 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-300 text-black font-bold py-2 px-4 rounded-2xl">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
