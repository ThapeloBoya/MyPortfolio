import React from 'react';
import './component.css'; // Import the corresponding CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faPenNib,  faPaintbrush } from '@fortawesome/free-solid-svg-icons'; // Solid icon



const ServiceApp = () => {
  return (
    <>
    <div className="service-container" id='services'>
      <section className="services">
        <div className="service-column">
        <FontAwesomeIcon icon={faPaintbrush} className="custom-icon"/>
          <h2>Digital Design</h2>
          <p>My digital design services focus on creating <strong>interactive</strong> and <strong>visually appealing</strong> assets, including social media content, ads, motion graphics, and UI designs, enhancing user engagement across digital platforms.</p>
        </div>

        <div className="service-column">
        <FontAwesomeIcon icon={faCloud} className="custom-icon" />
          <h2>Web development</h2>
          <p>I provide <strong>web development</strong> services, building responsive, <strong>visually appealing</strong> websites that align with your brand. From design to optimization, I deliver seamless user experiences for portfolios, e-commerce, and corporate sites.</p>
        </div>

        <div className="service-column">
        <FontAwesomeIcon icon={faPenNib} className="custom-icon" />
          <h2>Graphic Design</h2>
          <p>
          I specialize in creating visually engaging designs that communicate ideas effectively. From logos to promotional content, I blend <strong>creativity</strong> and <strong>strategy</strong>to deliver designs that reflect your brand and resonate with your audience.
          </p>
        </div>
      </section>
    </div>
  </>
  );
};

export default ServiceApp;
