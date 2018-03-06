import React from 'react';
import PropTypes from 'prop-types';

import bharath from 'assets/images/bharath.jpeg';
import arko from 'assets/images/arko.jpeg';
import rashad from 'assets/images/rashad.jpeg';

import './Team.scss';

const members = [{
  photo: bharath,
  alt: 'bharath',
  name: 'BHARATH KADALURI',
  role: 'Co-Founder',
  desc: 'Blockchain Technology Influencer adept at developing complicated distributed systems',
  email: 'bharath@bloxoffice.io',
}, {
  photo: arko,
  alt: 'arko',
  name: 'ARKO GANGULI',
  role: 'Co-Founder',
  desc: 'Blockchain expert and regulations specialist',
  email: 'arko@bloxoffice.io',
}, {
  photo: rashad,
  alt: 'rashad',
  name: 'RASHAD HASAN',
  role: 'Co-Founder',
  desc: 'Market Maker and Crypto- Evangelist\n',
  email: 'rashad@bloxoffice.io',
}];

const Member = ({ member }) => (
  <div>
    <div>
      <img src={member.photo} alt={member.alt} className="member-photo" />
      <div className="member-content">
        <h1 className="member-name">{member.name}</h1>
        <p className="member-role">{member.role}</p>
        <p className="member-desc">{member.desc}</p>
        <p className="member-email"><span className="fa fa-envelope-o mail-icon" />{member.email}</p>
      </div>
    </div>
  </div>
);

Member.propTypes = {
  member: PropTypes.object.isRequired,
};

const Team = () => (
  <div className="team-container">
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

Team.defaultProps = {};

Team.propTypes = {};

export default Team;
