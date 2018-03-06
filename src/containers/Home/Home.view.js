import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import WhitelistInfo from 'components/WhitelistInfo';
import PlatformInfo from 'components/PlatformInfo';
import WhitePaperInfo from 'components/WhitePaperInfo';
import TokenomicsInfo from 'components/TokenomicsInfo';
import Roadmap from 'components/Roadmap';
import Team from 'components/Team';
import { HomeSelector } from './Home.redux';

import './Home.style.scss';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="pageContainer">
        <Header />
        <WhitelistInfo />
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

Home.propTypes = {};

const mapDispatchToProps = {};

export default connect(HomeSelector, mapDispatchToProps)(Home);
