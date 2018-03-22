import React from 'react';
// import PropTypes from 'prop-types';

import userGroups from 'assets/images/user-groups.png';
import videoPlaylist from 'assets/images/video-playlist.png';
import moviewTicket from 'assets/images/movie-ticket.png';
import refundSvg from 'assets/images/refund.svg';
import intelligenceImg from 'assets/images/intelligence.png';

import './BusinessPlan.styles.scss';

const BusinessPlan = () => (
  <section className="business-plan">
    <div className="container">
      <div className="plan-title">Title goes here</div>
      <div className="user-groups plan-circles">
        <img className="img-responsive" src={userGroups} alt="user-groups" />
        <div className="plan-details hidden-xs">
          <p className="plan-name">Movie Crowdsale Platform</p>
          <p className="details">
              You fill in our free application form, provide us with authority to act on your behalf to track your superannuation down and specify the payment details of where you’d like the refund deposited.
          </p>
        </div>
      </div>
      <div className="video-playlist plan-circles">
        <img className="img-responsive" src={videoPlaylist} alt="video platlist" />
        <div className="plan-details hidden-xs">
          <p className="plan-name">Streaming Platform</p>
          <p className="details">
              Annuacion will track down any missing information for you, submit your claim to the Australian Tax Office and relay any additional requirements to you through your annuacion account.
          </p>
        </div>
      </div>
      <div className="movie-ticket plan-circles">
        <img className="img-responsive" src={moviewTicket} alt="movie-ticket" />
        <div className="plan-details hidden-xs">
          <p className="plan-name">Movie Ticket Exchange</p>
          <p className="details">
              One a refund estimate has been provided to us by the USA Tax Office we will notify you of the details of your return minus any associated fees.
          </p>
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
          <h3>Intellectual Property Platform</h3>
          <p>Within 8-12 weeks (usually) you will receive the sum of your refund into your nominated bank account minus our commission.</p>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  </section>
);

BusinessPlan.propTypes = {};

export default BusinessPlan;
