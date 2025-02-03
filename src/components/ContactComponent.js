import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Solid icons

const ContactUs = () => {
  const form = useRef();

  // Function to send the email using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eym5ibd", // Replace with your EmailJS service ID
        "template_3ak2p7k", // Replace with your EmailJS template ID
        form.current,
        "0EBOAQ-bPGuLvZMa7" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!"); // Success message
          form.current.reset(); // Reset the form after sending
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again."); // Error message
        }
      );
  };

  return (
    <footer className="contact-footer" id='contact'>
      <div className="contact-container">
        {/* Header Section */}
        <p className="portfolio-header">Contact Me</p>
        <h2 className="portfolio-title">Let's Get In Touch</h2>

        {/* Contact Information and Map */}
        <div className="contact-content">
          {/* Right section: Contact Details and Google Map */}
          <div className="info-container contact-details">
            {/* Contact Details */}
            <p>
              <FontAwesomeIcon icon={faPhoneAlt} /> Phone: +27 81 010 0997
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> Email: wecodelife@gmail.com
            </p>
            <p className="address">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Address: 74 Igqili St, Ehlanzeni, Thembisa, 1691
            </p>

            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2420.039226340226!2d28.27658731602237!3d-25.97790297071087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95759b9ab00f67%3A0xbe1b01387d10efb9!2s74%20Igqili%20St%2C%20Ehlanzeni%2C%20Thembisa%2C%201691!5e0!3m2!1sen!2sza!4v1675438582380!5m2!1sen!2sza"
              width="100%"
              height="250"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              className="map"
            ></iframe>
          </div>

          {/* Left section: Contact Form */}
          <div className="form-container">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  id="phone"
                  name="user_phone"
                  placeholder="Your Phone Number"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="form-input"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactUs;
