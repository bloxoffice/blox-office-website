import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import bloxOffice from 'assets/images/bitmap@3x_latest.png';
import userPlaceholder from 'assets/images/userPlaceholder.png';

import './Header.scss';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
      isUerMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  };

  render() {
    const { handleElScroll, isLoggedin } = this.props;
    const { isMenuOpen, isUerMenuOpen } = this.state;

    return (
      <div className="header-container">
        {isUerMenuOpen && (
          <div className="user-menu-container">
            <div>
              <button onClick={this.props.handleSignout} className="signout-btn clean-btn">Sign out</button>
            </div>
          </div>
        )}
        <div className="header-content">
          <div className="box-1">
            <img src={bloxOffice} alt="BloxOffice" className="main-logo" />
            <button className="menu-icon-btn" onClick={this.toggleMenu}>
              <span
                className="fa fa-bars menu-icon"
              />
            </button>
          </div>
          <div className={`menu-links-container ${isMenuOpen ? 'open' : ''}`}>
            <div className="box-1 links-container">
              {!isLoggedin && (
                <div className="link-items">
                  <button className="link-btn" onClick={() => { handleElScroll('about'); }}>About</button>
                </div>
              )}
              {!isLoggedin && (
                <div className="link-items">
                  <button className="link-btn" onClick={() => { handleElScroll('whitepaper'); }}>Whitepaper</button>
                </div>
              )}
              {!isLoggedin && (
                <div className="link-items">
                  <button className="link-btn" onClick={() => { handleElScroll('tokenomics'); }}>Tokenomics</button>
                </div>
              )}
              {/* <div className="link-items">
          <button className="link-btn" onClick={() => { handleElScroll('roadmap'); }}>Roadmap</button>
        </div> */}
              {!isLoggedin && (
                <div className="link-items">
                  <button className="link-btn clean-btn" onClick={() => { handleElScroll('team'); }}>Team</button>
                </div>
              )}
              {!isLoggedin && (
                <div className="link-items login-btn-container">
                  <button onClick={this.props.openModal} className="clean-btn link-btn"><p>Login/Signup</p></button>
                </div>
              )}
              {isLoggedin && (
                <div className="profile-pic-container">
                  <button
                    className="clean-btn"
                    onClick={() => {
                      this.setState({ isUerMenuOpen: !this.state.isUerMenuOpen });
                    }}
                  >
                    <img src={userPlaceholder} alt="user" className="profile-pic" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.defaultProps = {
  handleElScroll: () => {},
  openModal: () => {},
  isLoggedin: false,
  handleSignout: () => {},
};

Header.propTypes = {
  handleElScroll: PropTypes.func,
  openModal: PropTypes.func,
  isLoggedin: PropTypes.bool,
  handleSignout: PropTypes.func,
};

export default Header;
