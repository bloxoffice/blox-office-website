import React from 'react';
import PropTypes from 'prop-types';

import InputFields from 'components/InputFields';

import './Login.scss';
import { fields } from './Login.constants';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: {},
    };
  }

  handleChange = (name, val) => {
    this.setState({
      [name]: val,
    });
  };

  validatePayload = () => {
    let isValid = true;
    const errors = {};

    fields.forEach((field) => {
      const fieldValidReturn = field.validate(this.state[field.name]);
      if (!fieldValidReturn.isValid) {
        isValid = false;
        errors[field.name] = fieldValidReturn.message;
      }
    });

    return {
      isValid,
      errors,
    };
  };

  handleSignin = () => {
    const {
      isValid,
      errors,
    } = this.validatePayload();
    if (isValid) {
      this.setState({
        errors: {},
      }, () => {
        const payload = {
          email: this.state.emailAddress,
          password: this.state.password,
        };

        this.props.signInUser(payload, this.props.redirectToDashboard);
      });
    } else {
      this.setState({
        errors,
      });
    }
  };

  render() {
    const { errors } = this.state;
    const { isLoading } = this.props;

    return (
      <div style={{ paddingBottom: 30 }}>
        <div className="login-header-container">
          <p className="header-title">LOGIN</p>
        </div>
        <div className="login-inputs-container">
          {fields.map((field) => (
            <InputFields
              key={field.name}
              field={field}
              handleChange={this.handleChange}
              error={errors[field.name]}
            />
          ))}
        </div>
        <p className="privacy-policy">
          Forgot Passowrd?
        </p>
        <button
          className="login-btn"
          type="submit"
          onClick={this.handleSignin}
        >
          {isLoading && (
            <i className="fa fa-spinner fa-spin" />
          )}
          {!isLoading && (
            <span>signin</span>
          )}
        </button>
        <p className="login-redirect">
          Don<span>&#39;</span>t have an account? <button className="clean-btn" onClick={this.props.redirectToSignup}>SIGNUP</button>
        </p>
      </div>
    );
  }
}

Login.defaultProps = {
  redirectToSignup: () => {},
  redirectToDashboard: () => {},
};

Login.propTypes = {
  signInUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  redirectToSignup: PropTypes.func,
  redirectToDashboard: PropTypes.func,
};

export default Login;
