import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import './Signup.scss';
import { SignupSelector } from './Signup.redux';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        Signup page
      </div>
    );
  }
}

Signup.defaultProps = {};

Signup.propTypes = {};

const mapDispatchToProps = {};

export default connect(SignupSelector, mapDispatchToProps)(Signup);
