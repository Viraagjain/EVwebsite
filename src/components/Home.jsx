import React from 'react';
import './home.css';
const landing = require('./charging.gif');
const Home = () => {
  return (
    <div className="home-container">
      <div className="left-content">
        <h1>India's Fastest Growing EV Charging Network</h1>
        <p>Include any additional information or description here.</p>
      </div>
      <div className="right-content">
      <img src={landing} alt="landing" />
      </div>
    </div>
  );
}

export default Home;
