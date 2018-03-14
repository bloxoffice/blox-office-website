import React from 'react';
import PropTypes from 'prop-types';

import './InputFields.scss';

const InputField = ({ field, error }) => (
  <div className="inputfield-container">
    <label htmlFor={field.name}>{field.label}</label>
    <input id={field.name} name={field.name} />
    <p>{error}</p>
  </div>
);

InputField.defaultProps = {
  field: {
    label: '',
    name: '',
    required: true,
    validate: () => {},
  },
  error: '',
};

InputField.propTypes = {
  field: PropTypes.object,
  error: PropTypes.string,
};

export default InputField;
