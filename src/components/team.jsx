import React from 'react';
import './team.css';
const team1=require('../images/Team1.jpeg');
const team2=require('../images/Team2.jpeg');
const Team = () => {
  return (
    <div className="wrapper">
      <h1>Our Team</h1>
      <div className="team">
        {/* Team Member 1 */}
        <div className="team_member">
          <div className="team_img">
            <img src={team1} alt="Team_image" />
          </div>
          <h3>Sujit Jain</h3>
          <p className="role">CEO and Founder</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum
            aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.
          </p>
        </div>

        {/* Team Member 2 */}
        <div className="team_member">
          <div className="team_img">
            <img src={team2} alt="Team_image" />
          </div>
          <h3>Rounak Jain</h3>
          <p className="role">Co-Founder</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum
            aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
