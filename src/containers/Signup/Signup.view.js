import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import InputFields from 'components/InputFields';

import { fields } from './Signup.constants';
import { signInUser } from './Signup.actions';
import { SignupSelector } from './Signup.redux';

import './Signup.scss';

class Signup extends React.Component {
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
    const { password, confirmPassword } = this.state;
    let isValid = true;
    const errors = {};

    if (password !== confirmPassword) {
      isValid = false;
      errors.confirmPassword = 'Password did not match';
    }

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
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.emailAddress,
          phone: this.state.phone,
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
        <div className="signup-header-container">
          <p className="header-title">Signup</p>
        </div>
        <div className="signup-inputs-container">
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
          By clicking SIGNUP, you Agree to the Bloxoffice
          Privacy Policy & Terms & Conditons
        </p>
        <button
          className="signup-btn"
          type="submit"
          onClick={this.handleSignin}
        >
          {isLoading && (
            <i className="fa fa-spinner fa-spin" />
          )}
          {!isLoading && (
            <span>signup</span>
          )}
        </button>
        <p className="login-redirect">
          Already registered? <Link to="/login">LOGIN</Link>
        </p>
      </div>
    );
  }
}

Signup.defaultProps = {};

Signup.propTypes = {
  signInUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapDispatchToProps = {
  signInUser,
};

export default connect(SignupSelector, mapDispatchToProps)(Signup);
