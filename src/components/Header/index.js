import React from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import bloxOffice from 'assets/images/bloxoffice.png';
import bharath from 'assets/images/bharath.jpeg';

import './Header.scss';
import './App.scss'

const Header = () => (
  <div className="App container-fluid">
    <header className="App-Header">
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img className="" src={bloxOffice} alt="" />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span>BLOXOFFICE   </span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nvbr" id="navbarNav">
            <ul className="navbar-nav menu-img">
              <li className="nav-item menu-Pad active">
                <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item menu-Pad">
                <a className="nav-link" href="#">Whitepaper</a>
              </li>
              <li className="nav-item menu-Pad">
                <a className="nav-link" href="#">Tokenomics</a>
              </li>
              <li className="nav-item menu-Pad">
                <a className="nav-link" href="#">Roadmap</a>
              </li>
              <li className="nav-item menu-Pad">
                <a className="nav-link" href="#">Team</a>
              </li>
              <li className="nav-item menu-Pad">
                  <label className="ursNmHdr">
                    bharath
                  </label>
                  <img src={bharath} className="BitmapHdr rounded-circle"/>
              </li>
              <li className="nav-item menu-Pad">
                <button type="" className="sign_up">Login/SignUp</button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  </div>
);

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
