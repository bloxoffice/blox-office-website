import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import bloxOffice from 'assets/images/bloxoffice@3x.png';

import './Header.scss';

const Header = ({ handleElScroll }) => (
  <div className="header-container">
    <div className="header-content">
      <div className="box-1">
        <img src={bloxOffice} alt="BloxOffice" className="main-logo" />
      </div>
      <div className="box-1 links-container">
        <div className="link-items">
          <button className="link-btn" onClick={() => { handleElScroll('about'); }}>About</button>
        </div>
        <div className="link-items">
          <button className="link-btn" onClick={() => { handleElScroll('whitepaper'); }}>Whitepaper</button>
        </div>
        <div className="link-items">
          <button className="link-btn" onClick={() => { handleElScroll('tokenomics'); }}>Tokenomics</button>
        </div>
        {/* <div className="link-items">
          <button className="link-btn" onClick={() => { handleElScroll('roadmap'); }}>Roadmap</button>
        </div> */}
        <div className="link-items">
          <button className="link-btn" onClick={() => { handleElScroll('team'); }}>Team</button>
        </div>
      </div>
      {/* <div className="link-items login-btn-container">
        <Link to="/login"><p>Login/Signup</p></Link>
      </div> */}
    </div>
  </div>
);

Header.defaultProps = {
  handleElScroll: () => {},
};

Header.propTypes = {
  handleElScroll: PropTypes.func,
};

export default Header;
