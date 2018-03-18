import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import Header from 'components/Header';
import InputFields from 'components/InputFields';

import { ChangePasswordSelector } from './ChangePassword.redux';
import { fields } from './ChangePassword.constants';
import './ChangePassword.style.scss';

class ChangePassword extends Component {
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

  handleElScroll = () => {};

  render() {
    const { errors } = this.state;

    return (
      <div className="change-password-container">
        <Header
          handleElScroll={this.handleElScroll}
        />
        <div className="change-password-content">
          <h1 className="change-password-header">Change Password</h1>
          {fields.map((field) => (
            <InputFields
              key={field.name}
              field={field}
              handleChange={this.handleChange}
              error={errors[field.name]}
            />
          ))}
        </div>
      </div>
    );
  }
}

ChangePassword.propTypes = {};

const mapDispatchToProps = {};

export default connect(ChangePasswordSelector, mapDispatchToProps)(ChangePassword);
