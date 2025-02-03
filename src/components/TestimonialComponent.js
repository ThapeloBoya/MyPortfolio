import React, { useState } from "react";
import "./component.css"; // Add your CSS here

const REVIEWS = [
  { id: 6, name: "Sibongile M", role: "E-commerce", avatar: "https://i.pravatar.cc/150?img=13", review: "The team delivered a stunning website and optimized our digital marketing strategy. We've seen a significant boost in traffic and conversions..." },
  { id: 0, name: "Thabo N", role: "Startups", avatar: "https://i.pravatar.cc/150?img=19", review: "They crafted a beautiful, user-friendly website and helped us grow our online presence with targeted SEO and marketing..." },
  { id: 2, name: "Emily D", role: "Retailer", avatar: "https://i.pravatar.cc/150?img=8", review: "From concept to launch, the team was responsive and efficient. Our new website is sleek and performs well on all devices...." },
  { id: 3, name: "Jabu L", role: "Consulting", avatar: "https://i.pravatar.cc/150?img=61", review: "They listened to our needs and delivered a fantastic website. Their digital marketing has brought in high-quality leads." },
  { id: 13, name: "Jack T", role: "Fashion", avatar: "https://i.pravatar.cc/150?img=57", review: "The website is exactly what we wanted, and their digital marketing expertise has helped us reach more customers than ever before...." },
  { id: 4, name: "Kabelo T", role: "Project Management", avatar: "https://i.pravatar.cc/150?img=42", review: "Their SEO and targeted ad campaigns have significantly increased our return on investment and customer engagement" },
  { id: 10, name: "Charlotte W", role: "Healthcare", avatar: "https://i.pravatar.cc/150?img=21", review: "The team was transparent throughout the process, and our new website has brought fantastic results for our business." },
  { id: 11, name: "Lungile K", role: "Engineering", avatar: "https://i.pravatar.cc/150?img=18", review: "They’ve consistently delivered results. Our website is easy to navigate, and their marketing strategies have increased leads." },
];

const Testimonials = () => {
  const [counter, setCounter] = useState(0);

  const handleNext = () => {
    setCounter((prevCounter) => (prevCounter + 1) % REVIEWS.length);
  };

  const handlePrev = () => {
    setCounter((prevCounter) => (prevCounter - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <div className="app">
            <p className="testimonial-header">Testimonials</p>
            <h2 className="testimonial-title">Feedback from Clients</h2>
      <main className="slider-main">
        <button onClick={handlePrev} className="nav-left">❮</button>

        <section className="slider-content">
          <div className="reviews">
            {REVIEWS.map((review, idx) => (
              <div
                key={review.id}
                className={`review-card ${idx === counter ? "active" : ""}`}
              >
                <blockquote>{`"${review.review}"`}</blockquote>
                <div className="details">
                  <div>
                    <p className="name">{review.name} | <span className="role">{review.role}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <button onClick={handleNext} className="nav-right">❯</button>
      </main>
      <div className="dots">
        {REVIEWS.map((_, idx) => (
          <span key={idx} className={idx === counter ? "active" : ""} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
