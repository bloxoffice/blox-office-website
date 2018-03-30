import React from 'react';
// import PropTypes from 'prop-types';

import userGroups from 'assets/images/user-groups.png';
import videoPlaylist2 from 'assets/images/video_play3@.png';
import moviewTicket2 from 'assets/images/tickets@3x.png';
import refundSvg from 'assets/images/refund.svg';
import intelligenceImg from 'assets/images/intelligence.png';

import './BusinessPlan.styles.scss';

const BusinessPlan = () => (
  <section className="business-plan">
    <div className="container">
      <div className="plan-title zoom">How It Works</div>
      <div className="user-groups plan-circles">
        <div className="tooltip zoom1">
          <img className="img-responsive zoom" src={userGroups} alt="user-groups" />
          <div className="plan-details hidden-xs tooltiptext">
            <p className="plan-name ">Movie Crowdsale Platform</p>
            <p className="details ">Create your movie project on the platform and raise capital through pre-sale of tickets. The funds would be disbursed to the creator in stages.</p>
          </div>
          <div className="plan-details-mcp hidden-xs">
            <p className="plan-name ">Movie Crowdsale Platform</p>
            <p className="details ">Create your movie project on the platform and raise capital through pre-sale of tickets. The funds would be disbursed to the creator in stages.</p>
          </div>
        </div>
      </div>
      <div className="user-groups plan-circles">
        <div className="tooltip zoom1">
          <img className="img-responsive zoom" src={videoPlaylist2} alt="user-groups" />
          <div className="plan-details-2 hidden-xs tooltiptext">
            <p className="plan-name ">Streaming Platform</p>
            <p className="details ">After production, the movie would be streamed on the platform through p2p. Users will use the tickets to consume the content</p>
          </div>
          <div className="plan-details-vp hidden-xs">
            <p className="plan-name ">Streaming Platform</p>
            <p className="details ">After production, the movie would be streamed on the platform through p2p. Users will use the tickets to consume the content</p>
          </div>
        </div>
      </div>
      <div className="user-groups plan-circles">
        <div className="tooltip zoom1">
          <img className="img-responsive zoom" src={moviewTicket2} alt="user-groups" />
          <div className="plan-details hidden-xs tooltiptext">
            <p className="plan-name ">Movie Ticket Exchange</p>
            <p className="details ">Trade and exchange different movie tickets on T-Exchange</p>
          </div>
          <div className="plan-details-mcp hidden-xs">
            <p className="plan-name ">Movie Ticket Exchange</p>
            <p className="details ">Trade and exchange different movie tickets on T-Exchange</p>
          </div>
        </div>
      </div>
      <div className="refund plan-circles">
        <img className="img-responsive" src={refundSvg} alt="refund" />
      </div>
      <div className="property-platform">
        <div className="col-sm-2 platform">
          <img className="img-responsive" src={intelligenceImg} alt="platform" />
        </div>
        <div className="col-sm-10 platform-detail">
          <span className="Intellectual-Propert">Intellectual Property Platform</span>
          <p className="Within-8-12-weeks-u">Store, Transfer, Performance, Music, Distribution Rights for your project on Blockchain</p>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  </section>
);

BusinessPlan.propTypes = {};

export default BusinessPlan;
