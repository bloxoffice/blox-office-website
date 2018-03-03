import React from 'react';

import bloxofficeHero from 'assets/images/bloxoffice-hero.png';
import bloxofficeTitle from 'assets/images/bloxoffice-title.png';

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
      </div>
    </div>
  </div>
);

WhitelistInfo.defaultProps = {};

WhitelistInfo.propTypes = {};

export default WhitelistInfo;
