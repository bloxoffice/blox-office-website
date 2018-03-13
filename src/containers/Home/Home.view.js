import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import WhitelistInfo from './components/WhitelistInfo';
import PlatformInfo from './components/PlatformInfo';
import WhitePaperInfo from './components/WhitePaperInfo';
import TokenomicsInfo from './components/TokenomicsInfo';
import Roadmap from './components/Roadmap';
import Team from './components/Team';

import { HomeSelector } from './Home.redux';
import { joinWhitelist } from './Home.actions';

import './Home.style.scss';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { centralNotification } = this.props;
    const hiddenClass = centralNotification.message ? '' : 'hidden';
    return (
      <div className="pageContainer">
        <div className={`central-notification ${hiddenClass}`}>{centralNotification.message}</div>
        <Header />
        <WhitelistInfo
          handleJoinWhitelist={this.props.joinWhitelist}
        />
        <PlatformInfo />
        <WhitePaperInfo />
        <TokenomicsInfo />
        <Roadmap />
        <Team />
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
