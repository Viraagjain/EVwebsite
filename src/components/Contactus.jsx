import React from "react";
import './contactus.css';
const contact = require('../images/contact.png');
const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className="contact-bg">
        <h3>Get in Touch with Us</h3>
        <h2>contact us</h2>
        <div className="line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          iste facilis quos impedit fuga nobis modi debitis laboriosam velit
          reiciendis quisquam alias corporis, maxime enim, optio ab dolorum
          sequi qui.
        </p>
      </div>

      <div className="contact-body">
        <div className="contact-info">
          <div>
            <span>
              <i className="fas fa-mobile-alt"></i>
            </span>
            <span>Phone No.</span>
            <span className="text">+91 77070 58080</span>
          </div>
          <div>
            <span>
              <i className="fas fa-envelope-open"></i>
            </span>
            <span>E-mail</span>
            <span className="text">info@evpump.co.in</span>
          </div>
          <div>
            <span>
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <span>Address</span>
            <span className="text">
              SAI TRADE CENTER, RAILWAY STATION ROAD, AURANGABAD-431 005
            </span>
          </div>
          <div>
            <span>
              <i className="fas fa-clock"></i>
            </span>
            <span>Opening Hours</span>
            <span className="text">Monday - Friday (9:00 AM to 5:00 PM)</span>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
              />
            </div>
            <div>
              <input
                type="email"
                className="form-control"
                placeholder="E-mail"
              />
              <input type="text" className="form-control" placeholder="Phone" />
            </div>
            <textarea
              rows="5"
              placeholder="Message"
              className="form-control"
            ></textarea>
            <input type="submit" className="send-btn" value="send message" />
          </form>

          <div>
            <img src={contact} alt="" />
          </div>
        </div>
      </div>

      <div className="map">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.488524021388!2d75.30815651015189!3d19.861583281434417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb98593e85dde3%3A0x766ed0b4697a7351!2sSai%20Trade%20Center!5e0!3m2!1sen!2sin!4v1709211289043!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
