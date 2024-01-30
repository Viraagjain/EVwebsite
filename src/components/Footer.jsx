// import React from 'react';
// import './footer.css'; 
// import '@fortawesome/fontawesome-free/css/all.min.css';
// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="row">
//           <div className="footer-col">
//             <h4>company</h4>
//             <ul>
//               <li><a href="#">about us</a></li>
//               <li><a href="#">our services</a></li>
//               <li><a href="#">privacy policy</a></li>
//               <li><a href="#">affiliate program</a></li>
//             </ul>
//           </div>
//           <div className="footer-col">
//             <h4>get help</h4>
//             <ul>
//               <li><a href="#">FAQ</a></li>
//               <li><a href="#">shipping</a></li>
//               <li><a href="#">returns</a></li>
//               <li><a href="#">order status</a></li>
//               <li><a href="#">payment options</a></li>
//             </ul>
//           </div>
//           <div className="footer-col">
//             <h4>online shop</h4>
//             <ul>
//               <li><a href="#">watch</a></li>
//               <li><a href="#">bag</a></li>
//               <li><a href="#">shoes</a></li>
//               <li><a href="#">dress</a></li>
//             </ul>
//           </div>
//           <div className="footer-col">
//             <h4>follow us</h4>
//             <div className="social-links">
//               <a href="#"><i className="fab fa-facebook-f"></i></a>
//               <a href="#"><i className="fab fa-twitter"></i></a>
//               <a href="#"><i className="fab fa-instagram"></i></a>
//               <a href="#"><i className="fab fa-linkedin-in"></i></a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>About Us</h4>
            <ul>
              <li><a href="#">Company Overview</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Product Solutions</a></li>
              <li><a href="#">Consulting</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Sales Inquiries</a></li>
              <li><a href="#">Partnerships</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

