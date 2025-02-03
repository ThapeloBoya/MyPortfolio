import React from 'react';
import './component.css'; // Assuming you put the SCSS in a file named Footer.scss

const Footer = () => {
  return (
    <footer className="section footer">
      <div className="footer__header">
        <a href="/" className="footer__logo">
          <span className="logo primary"></span>
        </a>
        <ul className="social">
          <li className="social__item">
            <a href="https://youtube.com/@ThapeloB-t7s" target="_blank" className="btn social">
              <span className="icon twitter"></span>
            </a>
          </li>
          <li className="social__item">
            <a href="https://za.linkedin.com/in/thapeloboya" target="_blank" className="btn social">
              <span className="icon youtube"></span>
            </a>
          </li>
          <li className="social__item">
            <a href="https://www.facebook.com/people/Thapelo-Boya/pfbid0p4EG3YyjGGHpC1vCNVPKXwvX1LLYy1ThQCgszBy23Lv9zXEVHHi3QNFP1rKqKBbvl/" target="_blank" className="btn social">
              <span className="icon telegram"></span>
            </a>
          </li>
          <li className="social__item">
            <a href="https://api.whatsapp.com/send/?phone=27670651600&text=Hello&type=phone_number&app_absent=0" target="_blank" className="btn social">
              <span className="icon whatsapp"></span>
            </a>
          </li>
        </ul>
      </div>
<ul className="footer__list">
  <li className="footer__item active">
    <a href="#home" className="footer__link">Home</a>
  </li>
  <li className="footer__item">
    <a href="#about" className="footer__link">About</a>
  </li>
  <li className="footer__item">
    <a href="#services" className="footer__link">Services</a>
  </li>
  <li className="footer__item">
    <a href="#projects" className="footer__link">Projects</a>
  </li>
  <li className="footer__item">
    <a href="#contact" className="footer__link">Contact</a>
  </li>
</ul>

      <div className="footer__copyright">
        <p className="desc copyright">© All rights reserved | Wecode</p>
      </div>
    </footer>
  );
};

export default Footer;
