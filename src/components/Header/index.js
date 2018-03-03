import React from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import bloxOffice from 'assets/images/bloxoffice.png';

import './Header.scss';

const Header = () => (
  <div className="header-container">
    <div className="header-content">
      <div className="box-1">
        <img src={bloxOffice} alt="BloxOffice" className="main-logo" />
      </div>
      <div className="box-1 links-container">
        <div className="link-items">
          About
        </div>
        <div className="link-items">
          Whitepaper
        </div>
        <div className="link-items">
          Tokenomics
        </div>
        <div className="link-items">
          Roadmap
        </div>
        <div className="link-items">
          Team
        </div>
      </div>
      <div className="link-items login-btn-container">
        Login/Signup
      </div>
    </div>
  </div>
);

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
