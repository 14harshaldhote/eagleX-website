import React from 'react';

const ContactPage = () => {
  const locations = [
    {
      city: "Pune",
      name: "eagleX Pvt. Ltd.",
      address: "IndiQube Park Plaza, NDA Road , Shivane, Pune 411005",
      phone: "+91 (20) 6749 5900",
      email: "info@eaglexpune.com"
    },
    {
      city: "USA",
      name: "eagleX LLC",
      address: "8000 Avalon Blvd, Suites 264, Alpharetta, GA 30009",
      phone: "+1 (239) 383-1618",
      email: "info@eaglexus.com"
    },
    {
      city: "Betul",
      name: "eagleX Betul Office",
      address: "24/6 New Market, Near Betul Station, Betul, MP 460001",
      phone: "+91 (7141) 233 425",
      email: "contact@eaglexbetul.com"
    }
  ];

  return (
    <div className="bg-white text-black p-5 md:p-10">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-3xl font-bold text-center mb-6 md:mb-10">Our Global Locations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {locations.map((location, index) => (
            <div key={index} className="p-4 md:p-6 bg-customLink rounded-lg">
              <h3 className="text-xl md:text-2xl font-semibold">{location.city}</h3>
              <p className="my-2"><strong>{location.name}</strong></p>
              <p className="my-1">{location.address}</p>
              <p className="my-1">Phone: {location.phone}</p>
              <p className="my-1">Email: {location.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
