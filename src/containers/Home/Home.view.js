import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
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
        <div className="content">
        </div>
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {};

const mapDispatchToProps = {};

export default connect(HomeSelector, mapDispatchToProps)(Home);
