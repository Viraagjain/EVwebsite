import React, { useState, useEffect } from 'react';
import './loadingscene.css';

const LoadingScene = () => {
  const [chargingPercentage, setChargingPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setChargingPercentage((prevPercentage) =>
        Math.min(prevPercentage + 20, 100)
      );
    }, 300);

    setTimeout(() => {
      clearInterval(interval);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="loading-window">
      <div className="car">
        <div className="strike"></div>
        <div className="strike strike2"></div>
        <div className="strike strike3"></div>
        <div className="strike strike4"></div>
        <div className="strike strike5"></div>
        <div className="car-detail spoiler"></div>
        <div className="car-detail back"></div>
        <div className="car-detail center"></div>
        <div className="car-detail center1"></div>
        <div className="car-detail front"></div>
        <div className="car-detail wheel"></div>
        <div className="car-detail wheel wheel2"></div>
      </div>

      <div className="text">
        <span>Charging </span>
        <span className="dots">{chargingPercentage}%</span>
      </div>
    </div>
  );
};

export default LoadingScene;

