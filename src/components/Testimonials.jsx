import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "If your company needs CRM, you are in safe hands with Comsense. What I really like about them is that they've always maintained 'we make mistakes, but only once'. Having worked with them for multi-country implementations, they have never let us down.",
      author: "Rohit Dhall",
      position: "Lead-Brand activation, Reebok India"
    },
    {
      quote: "The Comsense Team have been a pleasure to work with, nothing is ever too much and together both our Teams have come up with solutions when challenges are faced. The Comsense team's passion for data is evident in the insight and analysis shared. Having these insights are so important as it allows as a business to make the right decisions based off the data provided.",
      author: "Broghan Ross",
      position: "Manager Digital Activations Ecommerce, CRM & Membership, Adidas South Africa"
    },
    {
      quote: "It has been great working with Comsense so far. The team is really supportive and helps us with regular insights to improve our ROI. There have been instances when the team has gone out of their way to ensure that our campaigns are delivered on time, and I really look forward to a long and successful relationship with them.",
      author: "Vaibhav Bhardwaj",
      position: "Brand Activation Manager, Reebok India"
    }
    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  if (testimonials.length === 0) {
    return <div>No testimonials available.</div>;
  }

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl mb-10">Testimonials Speak Of The Success We've Nurtured</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }} >
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-11 text-center text-black rounded-2xl">
                <p className="text-lg italic">"{testimonial.quote}"</p>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm">{testimonial.position}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
