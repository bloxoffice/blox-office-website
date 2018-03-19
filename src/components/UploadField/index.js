import React from 'react';
import PropTypes from 'prop-types';

import './UploadField.scss';

const UploadField = ({ field, error, handleChange }) => (
  <div className="uploadfield-container">
    <label htmlFor={field.name} className="upload-label">{field.label}</label>
    <div className="upload-fields-container">
      <div style={{ display: 'grid' }}>
        <input
          type="text"
          id={field.name}
          name={field.name}
          className={`upload-field ${(error && error !== '') ? 'error-border' : ''}`}
          onChange={(e) => {
            handleChange(field.name, e.target.value);
          }}
        />
      </div>
      <div style={{ display: 'grid' }}>
        <button className="upload-btn">Upload</button>
      </div>
    </div>
    <p className="error-msg">{error}</p>
  </div>
);

UploadField.defaultProps = {
  field: {
    label: '',
    name: '',
    required: true,
    validate: () => {},
  },
  error: '',
  handleChange: () => {},
};

UploadField.propTypes = {
  field: PropTypes.object,
  error: PropTypes.string,
  handleChange: PropTypes.func,
};

export default UploadField;
