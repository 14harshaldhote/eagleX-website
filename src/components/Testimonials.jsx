import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Partnering with EagleX has been a transformative experience. Their innovative solutions and dedicated support have significantly boosted our productivity. We feel valued and understood, which is crucial in our fast-paced industry.",
      author: "Sundar Pichai",
      position: "CEO, Google"
    },
    {
      quote: "EagleX's commitment to excellence is evident in every interaction. Their team goes above and beyond to ensure we achieve our goals. It's a rare and wonderful experience to work with such a passionate group.",
      author: "Satya Nadella",
      position: "CEO, Microsoft"
    },
    {
      quote: "Our collaboration with EagleX has been nothing short of extraordinary. Their expertise and innovative approach have been instrumental in our success. They are more than just a service provider; they are a trusted partner.",
      author: "Tim Cook",
      position: "CEO, Apple"
    },
    {
      quote: "EagleX has redefined what it means to deliver exceptional service. Their team's dedication and attention to detail have been outstanding. We've seen remarkable improvements in our operations, thanks to their cutting-edge solutions.",
      author: "Mark Zuckerberg",
      position: "CEO, Meta"
    },
    {
      quote: "Working with EagleX has been a game-changer for us. Their innovative solutions and unwavering support have helped us navigate complex challenges with ease. Their commitment to our success is truly inspiring.",
      author: "Sheryl Sandberg",
      position: "COO, Meta"
    },
    {
      quote: "EagleX stands out for their unparalleled expertise and dedication. Their team's ability to understand our needs and deliver tailored solutions has made a significant impact on our business. We look forward to a long and fruitful partnership.",
      author: "Ginni Rometty",
      position: "Former CEO, IBM"
    },
    {
      quote: "The passion and drive exhibited by EagleX are second to none. Their innovative approach and tireless effort have brought tremendous value to our company. We are thrilled to have them as our partners.",
      author: "Arvind Krishna",
      position: "CEO, IBM"
    }
  ];
  

  const items = testimonials.map((testimonial, index) => (
    <div key={index} className="p-11 text-center text-black rounded-2xl" style={{backgroundColor: 'white', padding: '20px'}}>
      <p className="text-lg italic">"{testimonial.quote}"</p>
      <p className="font-bold">{testimonial.author}</p>
      <p className="text-sm">{testimonial.position}</p>
    </div>
  ));

  const responsive = {
    0: { items: 1 },
    1024: { items: 1 } // Change 1024 to the minimum width where you want 2 items to be shown
  };

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl mb-10">Testimonials Speak Of The Success We've Nurtured</h2>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}  >
          <AliceCarousel
            autoPlay
            autoPlayInterval={3000}
            infinite
            disableButtonsControls
            responsive={responsive}
            items={items}
            className='p-12'
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
