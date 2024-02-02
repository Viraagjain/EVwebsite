import React from 'react';
import './contactus.css';
const contact = require('./contact.gif');

const ContactUs = () => {
  return (
    <div className="contact-form">
      <div className="container">
        <div className="main">
          <div className="content">
            <h2>Contact Us</h2>
            <form action="#" method="post">
              <input type="text" name="name" placeholder="Enter Your Name" />
              <input type="email" name="email" placeholder="Enter Your Email" />
              <textarea name="message" placeholder="Your Message"></textarea>
              <button type="submit" className="btn">
                Send <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
          <div className="form-img">
            <img src={contact} alt="contact" />
          </div>
          <div className="address-card">
            <h3>Our Address</h3>
            <p>123 Street, City</p>
            <p>Country</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

