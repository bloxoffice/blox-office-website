import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import InputFields from 'components/InputFields';

import './Login.scss';
import { LoginSelector } from './Login.redux';
import { fields } from './Login.constants';
import { signInUser } from './Login.actions';

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

        this.props.signInUser(payload);
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
      <div>
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
          Don<span>&#39;</span>t have an account? <Link to="/signup">SIGNUP</Link>
        </p>
      </div>
    );
  }
}

Login.defaultProps = {};

Login.propTypes = {
  signInUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapDispatchToProps = {
  signInUser,
};

export default connect(LoginSelector, mapDispatchToProps)(Login);
