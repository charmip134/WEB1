import React from 'react';
 

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and modern web applications using the latest technologies.',
    
  },
  {
    title: 'Mobile App Development',
    description: 'Creating user-friendly mobile applications for both iOS and Android platforms.',
   
  },
  {
    title: 'General Programming',
    description: 'Providing programming solutions, automation scripts, and software consulting.',
 
  },
];

const Services = () => {
  return (
    <div className="services">
      <h1 className="services-title">Our Services</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;