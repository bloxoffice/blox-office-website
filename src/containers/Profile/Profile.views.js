import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from 'components/Header';
import InputFields from 'components/InputFields';
import TextAreaField from 'components/TextAreaField';
import UploadField from 'components/UploadField';
import bharath from 'assets/images/bharath.jpeg';

import './Profile.style.scss';
import { ProfileSelector } from './Profile.redux';
import { fields } from './Profile.constants';

class Profile extends Component {
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
      <div className="profile-container">
        <Header
          handleElScroll={this.handleElScroll}
        />
        <div className="profile-content">
          <div style={{ display: 'grid' }}>
            {fields.main.map((field) => {
              if (field.type === 'textArea') {
                return (
                  <TextAreaField
                    key={field.name}
                    field={field}
                    handleChange={this.handleChange}
                    error={errors[field.name]}
                  />
                );
              }
              return (
                <InputFields
                  key={field.name}
                  field={field}
                  handleChange={this.handleChange}
                  error={errors[field.name]}
                />
              );
            })}
          </div>
          <div>
            <img
              src={bharath}
              alt="bharath"
              className="profile-dp"
            />
            <button className="change-image-btn">Change Image</button>
            <div style={{ marginTop: 60 }}>
              {fields.uploads.map((field) => (
                <UploadField
                  key={field.name}
                  field={field}
                  handleChange={this.handleChange}
                  error={errors[field.name]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {};

const mapDispatchToProps = {};

export default connect(ProfileSelector, mapDispatchToProps)(Profile);
