import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import './Login.scss';
import { LoginSelector } from './Login.redux';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        Login page
      </div>
    );
  }
}

Login.defaultProps = {};

Login.propTypes = {};

const mapDispatchToProps = {};

export default connect(LoginSelector, mapDispatchToProps)(Login);
