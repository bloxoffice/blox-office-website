import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import InputFields from 'components/InputFields';

import './Login.scss';
import { LoginSelector } from './Login.redux';
import { fields } from './Login.constants';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="login-header-container">
          <p className="header-title">LOGIN</p>
        </div>
        <form>
          <div className="login-inputs-container">
            {fields.map((field) => (
              <InputFields
                key={field.name}
                field={field}
              />
            ))}
          </div>
        </form>
        <p className="privacy-policy">
          Forgot Passowrd?
        </p>
        <button className="login-btn">signin</button>
        <p className="login-redirect">
          Don<span>&#39;</span>t have an account? <Link to="/login">SIGNUP</Link>
        </p>
      </div>
    );
  }
}

Login.defaultProps = {};

Login.propTypes = {};

const mapDispatchToProps = {};

export default connect(LoginSelector, mapDispatchToProps)(Login);
