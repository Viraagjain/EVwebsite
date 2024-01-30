import React from 'react';
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import './home.css';

const Home = () => {
  return (
    <>
      <MouseParallax>
        <p className="parallax-text">I'm reacting to mouse move</p>
      </MouseParallax>

      <ScrollParallax>
        <p className="parallax-text">I'm reacting to scroll</p>
      </ScrollParallax>
    </>
  );
}

export default Home;

