import React from 'react';
import './component.css';

const blogPosts = [
  {
    id: 1,
    title: 'Web design trends 2025',
    day: '15',
    month: 'Jan',
    tag: 'Web Design',
    image: '/blog1.jpg',
    excerpt: 'The Importance of Responsive Design in 2025...',
    linkedinUrl: 'https://www.linkedin.com/posts/thapeloboya_webdesign-trends2025-uxdesign-activity-7285541985464033282-sjM1?utm_source=share&utm_medium=member_android', // Add the LinkedIn post URL
  },
  {
    id: 2,
    title: '3 Key Principles',
    day: '20',
    month: 'Jan',
    tag: 'Web Design',
    image: '/blog2.jpg',
    excerpt: 'How to Choose the Right Content Management System (CMS) for Your Website...',
    linkedinUrl: 'https://www.linkedin.com/posts/thapeloboya_webdesign-conversionoptimization-uxdesign-activity-7287394683662594048-Z4o2?utm_source=share&utm_medium=member_android', // Add the LinkedIn post URL
  },
  {
    id: 3,
    title: 'Web Design Trends 2025',
    day: '10',
    month: 'Feb',
    tag: 'Web Design',
    image: '/blog3.jpg',
    excerpt: 'Power of mobile first design...',
    linkedinUrl: 'https://www.linkedin.com/posts/thapeloboya_mobilefirstdesign-webdevelopment-userexperience-activity-7290673712712806400-MlSr?utm_source=share&utm_medium=member_android', // Add the LinkedIn post URL
  },
];

const BlogPage = () => {
  return (
    <div className="blog-container">
      <p className="blog-header">News</p>
      <h2 className="blog-title">Latest Blog Posts</h2>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <a href={post.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <div className="image-container">
                <img src={post.image} alt={post.title} className="blog-image" />
                <div className="overlay-content">
                  <div className="date-container">
                    <div className="day">{post.day}</div>
                    <div className="month">{post.month}</div>
                  </div>
                  <div className="bottom-content">
                    <span className="tag">{post.tag}</span>
                    <h2 className="post-title">{post.title}</h2>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
