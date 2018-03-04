import React from 'react';
import Proptypes from 'prop-types';

import crowdSale from 'assets/images/crowd-sale.png';
import ipPlatform from 'assets/images/ip-platform.png';
import videoPlay from 'assets/images/video_play.png';
import tickets from 'assets/images/tickets.png';

import './PlatformInfo.scss';

const Platformitems = ({
  plititle, plidesc, plilogo, plialt,
}) => (
  <div className="pli-items">
    <div className="pli-item1">
      <img src={plilogo} alt={plialt} />
    </div>
    <div className="pli-item2">
      <p className="pli-title">{plititle}</p>
      <p className="pli-desc">{plidesc}</p>
    </div>
  </div>
);

Platformitems.propTypes = {
  plititle: Proptypes.string.isRequired,
  plidesc: Proptypes.string.isRequired,
  plilogo: Proptypes.any.isRequired,
  plialt: Proptypes.string.isRequired,
};

const PlatformInfo = () => (
  <div className="pli-container">
    <div className="pli-content">
      <Platformitems
        plititle="Movie Crowdsale Platform"
        plidesc="One sentence about the platform goes here and there here and here"
        plilogo={crowdSale}
        plialt="crowd-sale"
      />
      <Platformitems
        plititle="Intellectual Property Platform"
        plidesc="One sentence about the platform goes here and there here and here"
        plilogo={ipPlatform}
        plialt="ip-platform"
      />
      <Platformitems
        plititle="Streaming Platform"
        plidesc="One sentence about the platform goes here and there here and here"
        plilogo={videoPlay}
        plialt="video-play"
      />
      <Platformitems
        plititle="Movie Ticket Exchange"
        plidesc="One sentence about the platform goes here and there here and here"
        plilogo={tickets}
        plialt="tickets"
      />
    </div>
  </div>
);

PlatformInfo.defaultProps = {};

PlatformInfo.propTypes = {};

export default PlatformInfo;
