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
import DashBoard from 'components/DashBoard';
import Login from 'components/Login';
import Security from 'components/Security';
import Profile from 'components/Profile';
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
        <Login />
        <Footer />
        <div className="footer-bg" />
      </div>
    );
  }
}

Home.propTypes = {};

const mapDispatchToProps = {};

export default connect(HomeSelector, mapDispatchToProps)(Home);
