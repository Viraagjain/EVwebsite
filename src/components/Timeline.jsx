import React from 'react';
import './timeline.css';
import tm2 from '../images/pr2.jpg';
import tm3 from '../images/pr3.jpg';
import tm4 from '../images/pr4.jpg'; 
import tm5 from '../images/pr6.jpg'; 
import tm6 from '../images/pr10.jpg'; 

const Timeline = () => {
  return (
    <div className="container">
      <div className="timeline">
        <ul>
          <li>
            <div className="timeline-content">
              <img src={tm2} alt="Team 2" />
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <img src={tm3} alt="Team 3" />
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <img src={tm4} alt="Team 4" />
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <img src={tm5} alt="Team 5" />
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <img src={tm6} alt="Team 6" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
