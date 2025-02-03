import React, { useState } from 'react';
import './component.css'; // External CSS file for styling

const Portfolio = () => {
  const portfolioItems = [
    {
      title: 'Unrefined',
      description: 'Description of Project 1.',
      image: '/unrefined.png',
      tag: 'dev',
      link: 'https://thapeloboya.github.io/unrefined/', // Add the live link
    },
    {
      title: 'Thito Mining',
      description: 'Description of Project 1.',
      image: './thito.png',
      tag: 'dev',
      link: 'https://thapeloboya.github.io/TithoMining/', // Add the live link
    },
    {
      title: 'Cafe uhuru',
      description: 'Description of Project 1.',
      image: '/cafeuhuru.png',
      tag: 'dev',
      link: 'https://thapeloboya.github.io/cafeuhuru/cafeuhuru-main/main/', // Add the live link
    },
    {
      title: 'Vukanathi Investments',
      description: 'Description of Project 1.',
      image: '/vukanathi.png',
      tag: 'dev',
      link: 'https://thapeloboya.github.io/vukananthi/', // Add the live link
    },
    // Add more projects with their respective links...
  ];

  const itemsToShow = 3; // Number of items to display at a time
  const [startIndex, setStartIndex] = useState(0);

  // Handle navigation
  const handleNext = () => {
    if (startIndex + itemsToShow < portfolioItems.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  // Get items to display based on current start index
  const currentItems = portfolioItems.slice(startIndex, startIndex + itemsToShow);

  return (
    <>
      <section className="portfolio-section" id="projects">
        <div className="container">
          <p className="portfolio-header">Portfolio</p>
          <h2 className="portfolio-title">Past Designs & Projects</h2>
          <div className="portfolio-grid">
            {currentItems.map((item, index) => (
              <div className="portfolio-item" key={index}>
                <img src={item.image} alt={item.title} className="portfolio-image" />
                <p className="portfolio-item-tag">{item.tag}</p>
                <h3 className="portfolio-item-title">{item.title}</h3>
                <p className="portfolio-item-description">{item.description}</p>
                <div className='profile-button'>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <button className="portfolio-item-button">VIEW LIVE</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination Controls */}
          <div className="pagination">
            <button
              className="pagination-btn"
              disabled={startIndex === 0}
              onClick={handlePrev}
            >
              &larr;
            </button>
            <button
              className="pagination-btn"
              disabled={startIndex + itemsToShow >= portfolioItems.length}
              onClick={handleNext}
            >
              &rarr;
            </button>
          </div>
        </div>
      </section>
      <div className="feedback-container">
        <div className="feedback-box">
          <h3 className="feedback-title">Key elements of a<br /> successful brand</h3>
          <p className="feedback-text">
            A successful brand or rebrand requires clear identity, consistency, 
            and a deep understanding of the target audience. It includes 
            developing a strong visual identity (logos, color schemes, typography), 
            defining your brand’s voice, and establishing a cohesive message across 
            all touchpoints.
            <br /> <br />
            For a rebrand, it's important to evaluate the current 
            perception, refresh the look and feel while maintaining core values, 
            and ensure alignment with new market positioning. This builds trust 
            and a lasting connection with customers.
          </p>
          <a href="header.js">
            <button className="about-button">MY SERVICES</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
