import React from 'react';

import bloxofficeFooter from 'assets/images/bloxoffice-footer@3x.png';
import facebook from 'assets/images/facebook.svg';
import twitter from 'assets/images/twitter.svg';
// import youtube from 'assets/images/youtube.svg';
import medium from 'assets/images/medium.svg';
import telegram from 'assets/images/telegram.svg';
import gitHub from 'assets/images/github_2.svg';

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
        <a target="_blank" href="https://medium.com/bloxoffice"><img src={medium} alt="medium" className="footer-share-icons" /></a>
        <a target="_blank" href="https://t.me/joinchat/HtwpshKacbV88nf7iTBtUQ"><img src={telegram} alt="telegram" className="footer-share-icons" /></a>
        <a target="_blank" href="https://twitter.com/blox_office"><img src={twitter} alt="twitter" className="footer-share-icons" /></a>
        <a target="_blank" href="https://www.facebook.com/bloxoffice"><img src={facebook} alt="facebook" className="footer-share-icons" /></a>
        <a target="_blank" href="https://github.com/bloxoffice"><img src={gitHub} alt="gitHub" className="footer-share-icons-1" style={{ marginRight: 0 }} /></a>
      </div>
    </div>
  </div>
);

export default Footer;
