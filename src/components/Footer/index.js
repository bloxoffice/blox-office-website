import React from 'react';

import bloxofficeFooter from 'assets/images/bloxoffice-footer.png';
import facebook from 'assets/images/facebook.png';
import twitter from 'assets/images/twitter.png';
import youtube from 'assets/images/youtube.png';
import medium from 'assets/images/medium.png';
import telegram from 'assets/images/telegram.png';

import './Footer.scss';

const Footer = () => (
  <div className="footer-container">
    <div className="footer-inner">
      <div className="box1">
        <img src={bloxofficeFooter} alt="bloxoffice-footer" className="bloxoffice-footer" />
      </div>
      <div className="box2">
        <div className="footer-link">BLOG</div>
        <div className="footer-link">SEARCH</div>
        <div className="footer-link">TERMS&CONDITIONS</div>
        <div className="footer-link">PRIVACY POLICY</div>
        <div className="footer-link">CONTACT US</div>
      </div>
      <div className="box3">
        <img src={medium} alt="medium" className="footer-share-icons" />
        <img src={telegram} alt="telegram" className="footer-share-icons" />
        <img src={twitter} alt="twitter" className="footer-share-icons" />
        <img src={facebook} alt="facebook" className="footer-share-icons" />
        <img src={youtube} alt="youtube" className="footer-share-icons" style={{ marginRight: 0 }} />
      </div>
    </div>
  </div>
);

export default Footer;
