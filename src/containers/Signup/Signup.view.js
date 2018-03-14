import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import InputFields from 'components/InputFields';

import { fields } from './Signup.constants';

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
        <div className="signup-header-container">
          <p className="header-title">Signup</p>
        </div>
        <form>
          <div className="signup-inputs-container">
            {fields.map((field) => (
              <InputFields
                key={field.name}
                field={field}
              />
            ))}
          </div>
        </form>
      </div>
    );
  }
}

Signup.defaultProps = {};

Signup.propTypes = {};

const mapDispatchToProps = {};

export default connect(SignupSelector, mapDispatchToProps)(Signup);
