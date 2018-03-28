import React from 'react';
import PropTypes from 'prop-types';

import InputFields from 'components/InputFields';

import { fields } from './Signup.constants';

import './Signup.scss';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      emailAddress: props.whitelistEmail,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.whitelistEmail !== this.props.whitelistEmail) {
      this.setState({
        emailAddress: nextProps.whitelistEmail,
      });
    }
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

  handleSignup = () => {
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
          address: '',
          zipcode: '',
          country: '',
          password: this.state.password,
        };

        this.props.signupUser(payload, this.props.redirectToSignin);
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
        <div className="signup-header-container">
          <p className="header-title">Signup</p>
        </div>
        <div className="signup-inputs-container">
          {fields.map((field) => (
            <InputFields
              key={field.name}
              value={this.state[field.name]}
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
          onClick={this.handleSignup}
        >
          {isLoading && (
            <i className="fa fa-spinner fa-spin" />
          )}
          {!isLoading && (
            <span>signup</span>
          )}
        </button>
        <p className="login-redirect">
          Already registered? <button className="clean-btn" onClick={this.props.redirectToSignin}>LOGIN</button>
        </p>
      </div>
    );
  }
}

Signup.defaultProps = {
  redirectToSignin: () => {},
  whitelistEmail: undefined,
};

Signup.propTypes = {
  signupUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  redirectToSignin: PropTypes.func,
  whitelistEmail: PropTypes.any,
};

export default Signup;
