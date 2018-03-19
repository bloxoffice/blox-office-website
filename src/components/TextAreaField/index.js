import React from 'react';
import PropTypes from 'prop-types';

import './TextAreaField.scss';

const TextAreaField = ({ field, error, handleChange }) => (
  <div className="textareafield-container">
    <label htmlFor={field.name} className="textarea-label">{field.label}</label>
    <textarea
      id={field.name}
      name={field.name}
      className={`textarea-field ${(error && error !== '') ? 'error-border' : ''}`}
      onChange={(e) => {
        handleChange(field.name, e.target.value);
      }}
    />
    <p className="error-msg">{error}</p>
  </div>
);

TextAreaField.defaultProps = {
  field: {
    label: '',
    name: '',
    required: true,
    validate: () => {},
  },
  error: '',
  handleChange: () => {},
};

TextAreaField.propTypes = {
  field: PropTypes.object,
  error: PropTypes.string,
  handleChange: PropTypes.func,
};

export default TextAreaField;
