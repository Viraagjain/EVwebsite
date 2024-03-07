import React from "react";
import "./home.css";
import Carousel from "./carousel";
const landing = require("../images/charging.gif");

const Home = () => {
  return (
    <div className="home-container">
      <div className="landing-container">
        <div className="right-content">
          <img src={landing} alt="landing" />
        </div>
        <div className="right-info">
          <h1>India's Fastest Growing EV Charging Network</h1>
          <p>
            Welcome to our innovative EV Pump Company, where we are at the
            forefront of revolutionizing the electric vehicle charging
            landscape. As a leading player in the industry, we take pride in
            contributing to the growth of sustainable transportation by
            providing cutting-edge EV charging solutions.
          </p>
          <h3>Our Commitment to Sustainability</h3>
          <p>
            Driven by our commitment to sustainability, we are dedicated to
            reducing the carbon footprint of transportation. By establishing a
            robust network of EV charging stations, we aim to encourage more
            people to make the switch to electric vehicles, contributing to
            cleaner air and a greener future.
          </p>
          <h3>State-of-the-Art Charging Solutions</h3>
          <p>
            Our state-of-the-art charging solutions are designed to meet the
            diverse needs of electric vehicle owners. Whether you are a city
            dweller, a long-distance traveler, or a commercial fleet operator,
            our charging stations are strategically located to provide
            convenient and efficient charging options.
          </p>
        </div>
      </div>
      <div className="models-container">
        <h2>Our Models</h2>
        <Carousel />
      </div>
    </div>
  );
};

export default Home;

