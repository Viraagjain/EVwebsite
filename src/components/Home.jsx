import React from "react";
import "./home.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Img1 from "../images/model2.jpg";
import Img2 from "../images/model3.jpg";
import Img3 from "../images/model4.jpg";
import Img4 from "../images/model5.jpg";
import Img5 from "../images/model6.jpg";
import Img6 from "../images/model7.jpg";
import Img7 from "../images/model8.jpg";
import Img8 from "../images/model9.jpg";
import Img9 from "../images/model10.jpg";
import Img10 from "../images/model11.jpg";
import Img11 from "../images/model12.jpg";
import Img12 from "../images/model13.jpg";

const landing = require("../images/charging.gif");

const Home = () => {
  const carouselImages1 = [Img1, Img2, Img3];
  const carouselImages2 = [Img4, Img5, Img6];
  const carouselImages3 = [Img7, Img8, Img9];
  const carouselImages4 = [Img10,Img11, Img12];

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
            dweller, a long-distance traveler, or a commercial fleet operator, our
            charging stations are strategically located to provide convenient and
            efficient charging options.
          </p>
        </div>
      </div>

      {/* Carousels Container */}
      <div className="carousel-container">
        <div className="carousel-pair">
          <Carousel data-bs-theme="dark" showThumbs={false}>
          {carouselImages1.map((image, index) => (
            <div key={index} className="carousel-card">
              <div className="card-content">
                <img src={image} alt={`carousel-1-${index}`} />
              </div>
            </div>
          ))}
        </Carousel>

          <Carousel data-bs-theme="dark" showThumbs={false}>
          {carouselImages2.map((image, index) => (
            <div key={index} className="carousel-card">
              <div className="card-content">
                <img src={image} alt={`carousel-2-${index}`} />
              </div>
            </div>
          ))}
        </Carousel>
        </div>

        <div className="carousel-pair">
          <Carousel data-bs-theme="dark" showThumbs={false}>
          {carouselImages3.map((image, index) => (
            <div key={index} className="carousel-card">
              <div className="card-content">
                <img src={image} alt={`carousel-3-${index}`} />
              </div>
            </div>
          ))}
        </Carousel>

          <Carousel data-bs-theme="dark" showThumbs={false}>
          {carouselImages4.map((image, index) => (
            <div key={index} className="carousel-card">
              <div className="card-content">
                <img src={image} alt={`carousel-4-${index}`} />
              </div>
            </div>
          ))}
        </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;

