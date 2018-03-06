import React from 'react';

import bloxofficeHero from 'assets/images/bloxoffice-hero.png';
import bloxofficeTitle from 'assets/images/bloxoffice-title.png';

import Timer from '../Timer';

import './WhitelistInfo.scss';

const WhitelistInfo = () => (
  <div className="wli-container">
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
          />
          <button className="whitelist-btn">JOIN WHITELIST</button>
        </div>
        <div>
          <p className="pre-sales-label">Pre-sales starts in</p>
          <Timer date="04/15/2018 22:00:00" />
        </div>
      </div>
    </div>
  </div>
);

WhitelistInfo.defaultProps = {};

WhitelistInfo.propTypes = {};

export default WhitelistInfo;
