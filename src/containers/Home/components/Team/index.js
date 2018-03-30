import React from 'react';
import PropTypes from 'prop-types';

import bharath from 'assets/images/bharath.jpeg';
import arko from 'assets/images/arko.jpeg';
import rashad from 'assets/images/rashad.jpeg';
import linkedin from 'assets/images/linkedin.png';

import './Team.scss';

const members = [{
  photo: bharath,
  alt: 'bharath',
  name: 'BHARATH KADALURI',
  role: 'Co-Founder',
  desc: 'Blockchain Technology Influencer adept at developing complicated distributed systems',
  email: 'bharath@bloxoffice.io',
  linkedinUrl: 'https://www.linkedin.com/in/bharath-kadaluri-abb5275a/',
}, {
  photo: arko,
  alt: 'arko',
  name: 'ARKO GANGULI',
  role: 'Co-Founder',
  desc: 'Blockchain expert and regulations specialist',
  email: 'arko@bloxoffice.io',
  linkedinUrl: 'https://www.linkedin.com/in/arko-ganguli/',
}, {
  photo: rashad,
  alt: 'rashad',
  name: 'RASHAD HASAN',
  role: 'Co-Founder',
  desc: 'Market Maker and Crypto- Evangelist\n',
  email: 'rashad@bloxoffice.io',
  linkedinUrl: 'https://www.linkedin.com/in/therashadhasan/',
}];

const Member = ({ member }) => (
  <div className="Background">
    <div>
      <img src={member.photo} alt={member.alt} className="member-photo" />
      <div className="member-content">
        <h1 className="member-name">{member.name}</h1>
        <p className="member-role">{member.role}</p>
        <a href={member.linkedinUrl}><img src={linkedin} alt={member.name} className="Shape" /></a>
        {/* <p className="member-desc">{member.desc}</p>
        <p className="member-email"><span className="fa fa-envelope-o mail-icon" />{member.email}</p> */}
      </div>
    </div>
  </div>
);

Member.propTypes = {
  member: PropTypes.object.isRequired,
};

class Team extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="team-container" ref={(el) => { this.teamElement = el; }}>
        <p className="team-heading">OUR TEAM</p>
        <div className="team-content">
          {members.map((member) => (
            <Member
              key={member.alt}
              member={member}
            />
          ))}
        </div>
      </div>
    );
  }
}

Team.defaultProps = {};

Team.propTypes = {};

export default Team;
