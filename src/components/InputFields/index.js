import React from 'react';
import PropTypes from 'prop-types';

import './InputFields.scss';

const InputField = ({
  field, error, handleChange, value,
}) => (
  <div className="inputfield-container">
    <label htmlFor={field.name} className="input-label">{field.label}</label>
    <input
      id={field.name}
      name={field.name}
      type={field.type}
      value={value}
      className={`input-field ${(error && error !== '') ? 'error-border' : ''}`}
      onChange={(e) => {
        handleChange(field.name, e.target.value);
      }}
    />
    <p className="error-msg">{error}</p>
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
  handleChange: () => {},
  value: '',
};

InputField.propTypes = {
  field: PropTypes.object,
  error: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.any,
};

export default InputField;
