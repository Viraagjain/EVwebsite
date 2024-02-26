import React from 'react';
import station from '../images/station.jpeg'; 
import './aboutus.css';
const Aboutus = () => {
  return (
    <div>
      <h1>EV Pump®: A Global Leader in Integrated Technology</h1>
      <img
        src={station}
        alt="Charge Zone Logo"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
}

export default Aboutus;