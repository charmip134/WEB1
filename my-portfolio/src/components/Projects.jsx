import React from 'react';


const Projects = () => {
  return (
    <div className="projects">
    <h1>My Projects</h1>

    {/* Project 1 */}
    <div className="project">
      <h2>Project 1: Web design</h2>
      <img src="company website.jpg" alt="Project 1" />
      <p><strong>Role:</strong> Backend Developer</p>
      <p><strong>Description:</strong> Designed the company’s website using PHP, improving user experience and responsiveness. Implemented a modern layout and enhanced the site’s performance.</p>
      <p><strong>Outcome:</strong> Increased user engagement by 20% and reduced page load time by 40%.</p>
    </div>
    
    {/* Project 2 */}
    <div className="project">
      <h2>Project 2: E-commerce Platform</h2>
      <img src="download.png" alt="Project 2" />
      <p><strong>Role:</strong> Full Stack Developer</p>
      <p><strong>Description:</strong> Developed a full-stack e-commerce platform using Node.js and React. Integrated payment gateways and created an inventory management system.</p>
      <p><strong>Outcome:</strong> Successfully launched the platform, generating $10k in sales within the first month.</p>
    </div>

    {/* Project 3 */}
    <div className="project">
      <h2>Project 3: Mobile App Development</h2>
      <img src="mobile development.jpg" alt="Project 3" />
      <p><strong>Role:</strong> Mobile App Developer</p>
      <p><strong>Description:</strong> Built a cross-platform mobile application using React , allowing users to track fitness activities and set personal goals.</p>
      <p><strong>Outcome:</strong> Over 1,000 downloads within the first week of launch with an average rating of 4.8/5 on app stores.</p>
    </div>
  </div>
);
};

export default Projects;
