// import React from 'react';
// import station from '../images/station.jpeg'; 
// import './aboutus.css';
// import Team from './team';
// const Aboutus = () => {
//   return (
//     <div>
//       <h1>EV Pump®: A Global Leader in Integrated Technology</h1>
//       <img
//         src={station}
//         alt="Charge Zone Logo"
//         style={{ maxWidth: '100%', height: 'auto' }}
//         />
//         <Team/>
//     </div>
//   );
// }

// export default Aboutus;

import React from 'react';
import station from '../images/station.jpeg';
import './aboutus.css';
import Team from './team';

const Aboutus = () => {
  return (
    <div>
      <div className="aboutus-container">
        <h1 className="heading">EV Pump®: A Global Leader in Integrated Technology</h1>
        <img
          src={station}
          alt="Charge Zone Logo"
          className="logo"
        />
        <p className="description">
          Your description goes here Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="team-container">
        <Team />
      </div>
    </div>
  );
};

export default Aboutus;
