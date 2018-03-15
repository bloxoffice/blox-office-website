import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';

import Header from 'components/Header';
import Footer from 'components/Footer';
import WhitelistInfo from './components/WhitelistInfo';
import PlatformInfo from './components/PlatformInfo';
import WhitePaperInfo from './components/WhitePaperInfo';
import TokenomicsInfo from './components/TokenomicsInfo';
// import Roadmap from './components/Roadmap';
import Team from './components/Team';

import { HomeSelector } from './Home.redux';
import { joinWhitelist } from './Home.actions';

import './Home.style.scss';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.refElements = {
      about: this.whiteListInfo.whiteListElement,
      whitepaper: this.whitepaperInfo.whitepaperElement,
      tokenomics: this.tokenomicsInfo.tokenomicsElement,
      // roadmap: this.roadmap.roadmapElement,
      team: this.team.teamElement,
    };
  }

  handleElScroll = (key) => {
    scrollToComponent(this.refElements[key], {
      offset: -10,
      align: 'top',
      duration: 500,
      ease: 'inCirc',
    });
  };


  render() {
    const { centralNotification } = this.props;
    const hiddenClass = centralNotification.message ? '' : 'hidden';
    return (
      <div className="pageContainer">
        <div className={`central-notification ${hiddenClass}`}>{centralNotification.message}</div>
        <Header
          handleElScroll={this.handleElScroll}
        />
        <WhitelistInfo
          handleJoinWhitelist={this.props.joinWhitelist}
          ref={(el) => { this.whiteListInfo = el; }}
        />
        <PlatformInfo />
        <WhitePaperInfo ref={(el) => { this.whitepaperInfo = el; }} />
        <TokenomicsInfo ref={(el) => { this.tokenomicsInfo = el; }} />
        {/* <Roadmap ref={(el) => { this.roadmap = el; }} /> */}
        <Team ref={(el) => { this.team = el; }} />
        <Footer />
        <div className="footer-bg" />
      </div>
    );
  }
}

Home.defaultProps = {
  centralNotification: {},
};

Home.propTypes = {
  joinWhitelist: PropTypes.func.isRequired,
  centralNotification: PropTypes.object,
};

const mapDispatchToProps = {
  joinWhitelist,
};

export default connect(HomeSelector, mapDispatchToProps)(Home);
