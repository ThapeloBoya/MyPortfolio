import React from 'react';
import './component.css'; // Import the corresponding CSS



const AboutApp = () => {
  return (
    <>
    <div className='about-container'>
    <p className="portfolio-header">About Me</p>
    <h2 className="portfolio-title">A sneak peak into me</h2>
    <div className="wrapper" id='about'>
    <div className="content">
      <p className='about-title'>About me</p>
      <h2>"Design speaks <br/>your brand’s identity."</h2>
      <p className='about-info'>I’m a Johannesburg-based freelance web developer and multimedia designer, specializing in digital design, web development, and graphic design. With a strong focus on creating visually compelling and functional designs, I am committed to mastering my craft and delivering impactful digital solutions that resonate with audiences. My work is driven by the belief that design is more than just aesthetics—it’s about creating meaningful experiences that connect with users on a deeper level.</p><br/>
      <p>I approach every project with an eye for detail, ensuring that every pixel, color, and interaction serves a purpose. Whether I’m building a website from the ground up or designing a brand identity, I aim to craft designs that are not only beautiful but also functional, user-friendly, and aligned with the client’s vision and goals.</p><br/>
      <p className='about-info'>You can’t improve what you don’t measure.</p>
    {/*<a href='header.js'><button className='about-button'>MORE ABOUT ME</button></a>*/}
    </div>
  </div>
    </div>

  </>
  );
};

export default AboutApp;
