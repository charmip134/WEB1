import React from 'react';
import profileImage from '../assets/profile.jpeg';


const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>

      {/* Profile Section */}
      <div className="about-container">
        <img src={profileImage} alt="Profile" className="profile-image" />

        <div className="about-text">
          <h2><p>Myself Charmi Patel</p></h2>
          <p>
            I am Student and I completed my B.tech in IT engineering.
          </p>
            <p>In Centennial college I take software engineering Fast-track course, which is one year course.</p> 
          <p>
            I'm constantly seeking to improve and innovate, both personally and professionally.
          </p>
      
          {/* Link to Resume PDF */}
          <a href="/resume.docx" download className="resume-link">
            Download My Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
