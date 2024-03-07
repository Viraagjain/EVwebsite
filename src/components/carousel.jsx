import React, { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./carousel.css"; 
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

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12];

const NextArrow = ({ onClick }) => (
  <div className="arrow next" onClick={onClick}>
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev" onClick={onClick}>
    <FaArrowLeft />
  </div>
);

const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Carousel">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={idx === imageIndex ? "slide activeSlide" : "slide"}
          >
            <img src={img} alt={`Model ${idx + 2}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
