import React from 'react';
import PropTypes from 'prop-types';

import bloxofficeHero from 'assets/images/movie-making-02-01.svg';
import bloxofficeTitle from 'assets/images/bloxoffice-title@3x.png';
import { validateTextInput } from 'utils/validations';

import Timer from '../../../../components/Timer/index';

import './WhitelistInfo.scss';

class WhitelistInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      whitelistEmail: '',
      emailError: '',
    };
  }


  handleEmailInput = (e) => {
    if (this.state.emailError !== '') {
      const emailValidation = validateTextInput('whitelistEmail', 'Whitelist Email', true, true, this.state.whitelistEmail, 'email');
      if (emailValidation.isValid) {
        this.setState({
          emailError: '',
        });
      }
    }
    this.setState({
      whitelistEmail: e.target.value,
    });
  };

  handleJoinWhitelist = () => {
    const emailValidation = validateTextInput('whitelistEmail', 'Whitelist Email', true, true, this.state.whitelistEmail, 'email');
    this.setState({
      emailError: emailValidation.message,
    }, () => {
      if (emailValidation.isValid) {
        this.props.handleJoinWhitelist(this.state.whitelistEmail);
      }
    });
  };


  render() {
    const { emailError } = this.state;
    return (
      <div className="wli-container" ref={(el) => { this.whiteListElement = el; }}>
        <div className="wli-content">
          <div className="wli-logo-container">
            <img src={bloxofficeHero} alt="bloxoffice-Hero" className="bloxoffice-hero" />
          </div>
          <div className="wli-info">
            <img src={bloxofficeTitle} alt="bloxoffice-Title" className="bloxoffice-title" />
            <p className="decentralised-movie">
              Decentralised movie experience
              powered by Blockchain
            </p>
            <div className="email-form">
              <input
                type="text"
                placeholder="Email address"
                className="email-input"
                onChange={this.handleEmailInput}
                style={{
                  border: emailError !== '' ? '1px solid #8f232b' : 'solid 1px #ebebeb',
                }}
              />
              <button onClick={this.handleJoinWhitelist} className="whitelist-btn">JOIN WAITLIST</button>
              <p className="waitlist-error">{emailError}</p>
            </div>
            <div className="timer-container">
              <p className="pre-sales-label">PRE-SALE STARTS IN</p>
              <Timer date="04/15/2018 22:00:00" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

WhitelistInfo.defaultProps = {
  handleJoinWhitelist: () => {},
};

WhitelistInfo.propTypes = {
  handleJoinWhitelist: PropTypes.func,
};

export default WhitelistInfo;
