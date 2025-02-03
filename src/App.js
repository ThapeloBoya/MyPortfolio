import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Import Bootstrap JS

// Import WhatsAppWidget Component
import WhatsAppWidget from './components/WhatsAppWidget';

// Import NewsletterPopup Component
//import NewsletterPopup from './components/NewsletterPopup';

// Lazy load the components
const Loading = React.lazy(() => import('./components/Loading'));
const Navbar = React.lazy(() => import('./components/NavbarComponent'));
const AboutApp = React.lazy(() => import('./components/AboutComponent'));
const Header = React.lazy(() => import('./components/HeaderComponent'));
const Services = React.lazy(() => import('./components/ServicesComponent'));
const Portfolio = React.lazy(() => import('./components/PortfolioComponent'));
const Testimonials = React.lazy(() => import('./components/TestimonialComponent'));
const BlogPage = React.lazy(() => import('./components/BlogComponent'));
const ContactUs = React.lazy(() => import('./components/ContactComponent'));
const Footer = React.lazy(() => import('./components/FooterComponent'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHoveringNavbar, setIsHoveringNavbar] = useState(false);
  const componentRefs = useRef([]);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const scrolled =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollPercentage(scrolled);

      setIsScrolling(scrolled > 10 && scrolled < 98);

      const pageBottom = window.scrollY + window.innerHeight;
      componentRefs.current.forEach((ref) => {
        if (ref && ref.getBoundingClientRect().top + window.scrollY < pageBottom) {
          ref.classList.add('visible');
        } else if (ref) {
          ref.classList.remove('visible');
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    const navbar = document.querySelector('.navbar');
    navbar?.addEventListener('mouseenter', () => setIsHoveringNavbar(true));
    navbar?.addEventListener('mouseleave', () => setIsHoveringNavbar(false));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      navbar?.removeEventListener('mouseenter', () => setIsHoveringNavbar(true));
      navbar?.removeEventListener('mouseleave', () => setIsHoveringNavbar(false));
    };
  }, []);

  if (isLoading) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Loading />
      </Suspense>
    );
  }

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div className="tag" ref={(el) => (componentRefs.current[0] = el)}>
                  <Header />
                </div>
                <div className="tag" ref={(el) => (componentRefs.current[1] = el)}>
                  <Services />
                </div>
                <div className="tag" ref={(el) => (componentRefs.current[2] = el)}>
                  <AboutApp />
                </div>
                <div className="tag" ref={(el) => (componentRefs.current[3] = el)}>
                  <Portfolio />
                </div>
                <div className="tag" ref={(el) => (componentRefs.current[4] = el)}>
                  <Testimonials />
                </div>
                <div className="tag" ref={(el) => (componentRefs.current[5] = el)}>
                  <BlogPage />
                </div>
                <div className="tag" ref={(el) => (componentRefs.current[6] = el)}>
                  <ContactUs />
                </div>
                <div className="tag" ref={(el) => (componentRefs.current[7] = el)}>
                  <Footer />
                </div>
              </div>
            }
          />
        </Routes>
      </Suspense>

      {/* Add the Newsletter Popup here  //<NewsletterPopup />
*/}
      
      <WhatsAppWidget /> {/* Add the WhatsApp widget here */}

      <div
        className={isHoveringNavbar ? 'navbar-cursor' : 'custom-cursor'}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      ></div>

      <div className={`scroll-percentage ${isScrolling ? 'show' : ''}`}>
        {Math.round(scrollPercentage)}%
      </div>
    </div>
  );
}

export default App;
