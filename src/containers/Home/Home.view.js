import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';

import Header from 'components/Header';
import Footer from 'components/Footer';
import WhitelistInfo from './components/WhitelistInfo';
import BusinessPlan from './components/BusinessPlan';
// import PlatformInfo from './components/PlatformInfo';
import WhitePaperInfo from './components/WhitePaperInfo';
import TokenomicsInfo from './components/TokenomicsInfo';
// import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Signup from '../Signup';
import Login from '../Login';

import { HomeSelector } from './Home.redux';
// import { joinWhitelist } from './Home.actions';
import { signupUser } from '../Signup/Signup.actions';
import { signInUser } from '../Login/Login.actions';

import './Home.style.scss';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
      modalScreen: 'signup',
      whitelistEmail: undefined,
    };
  }

  componentDidMount() {
    this.refElements = {
      about: this.whiteListInfo.whiteListElement,
      whitepaper: this.whitepaperInfo.whitepaperElement,
      tokenomics: this.tokenomicsInfo.tokenomicsElement,
      // roadmap: this.roadmap.roadmapElement,
      team: this.team.teamElement,
    };

    if (this.props.location.state) {
      this.handleElScroll(this.props.location.state.section);
    }
  }

  handleElScroll = (key) => {
    scrollToComponent(this.refElements[key], {
      offset: -10,
      align: 'top',
      duration: 500,
      ease: 'inCirc',
    });
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  joinWhitelist = (email) => {
    this.setState({
      whitelistEmail: email,
      isModalOpen: true,
      modalScreen: 'signup',
    });
  };


  render() {
    const { centralNotification } = this.props;
    const { isModalOpen, modalScreen, whitelistEmail } = this.state;
    const hiddenClass = centralNotification.message ? '' : 'hidden';
    return (
      <div className="pageContainer">
        <div className={`central-notification ${hiddenClass}`}>{centralNotification.message}</div>
        <Header
          handleElScroll={this.handleElScroll}
          openModal={this.openModal}
        />
        <WhitelistInfo
          handleJoinWhitelist={this.joinWhitelist}
          ref={(el) => { this.whiteListInfo = el; }}
        />
        <BusinessPlan />
        {/* <PlatformInfo /> */}
        <WhitePaperInfo ref={(el) => { this.whitepaperInfo = el; }} />
        <TokenomicsInfo ref={(el) => { this.tokenomicsInfo = el; }} />
        {/* <Roadmap ref={(el) => { this.roadmap = el; }} /> */}
        <Team ref={(el) => { this.team = el; }} />
        <Footer />
        <div className="footer-bg" />
        <div>
          <div className={`modal-fade-in ${isModalOpen ? '' : 'close'}`} />
          <div className={`modal-box ${isModalOpen ? '' : 'close'}`}>
            <div className="modal-dialog">
              <button onClick={this.closeModal} className="modal-close-btn clean-btn">
                <span className="fa fa-times" />
              </button>
              {modalScreen === 'signup' && (
                <Signup
                  whitelistEmail={whitelistEmail}
                  signupUser={this.props.signupUser}
                  isLoading={this.props.isSignupLoading}
                  redirectToSignin={() => { this.setState({ modalScreen: 'signin' }); }}
                />
              )}
              {modalScreen === 'signin' && (
                <Login
                  signInUser={this.props.signInUser}
                  isLoading={this.props.isSigninLoading}
                  redirectToSignup={() => { this.setState({ modalScreen: 'signup' }); }}
                  redirectToDashboard={() => { this.props.history.push('/dashboard'); }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.defaultProps = {
  centralNotification: {},
  isSignupLoading: false,
  isSigninLoading: false,
};

Home.propTypes = {
  // joinWhitelist: PropTypes.func.isRequired,
  centralNotification: PropTypes.object,
  signupUser: PropTypes.func.isRequired,
  isSignupLoading: PropTypes.bool,
  signInUser: PropTypes.func.isRequired,
  isSigninLoading: PropTypes.bool,
  history: PropTypes.any.isRequired,
  location: PropTypes.any.isRequired,
};

const mapDispatchToProps = {
  // joinWhitelist,
  signupUser,
  signInUser,
};

export default connect(HomeSelector, mapDispatchToProps)(Home);
