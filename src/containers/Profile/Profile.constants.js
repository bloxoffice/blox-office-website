import { validateTextInput } from 'utils/validations';

export const fields = {
  main: [{
    name: 'firstName',
    label: 'First Name',
    required: true,
    type: 'text',
    validate: (val) => validateTextInput('firstName', 'First Name', true, true, val, 'text'),
  }, {
    name: 'emailAddress',
    label: 'Email Address',
    required: true,
    type: 'email',
    validate: (val) => validateTextInput('emailAddress', 'Email Address', true, true, val, 'email'),
  }, {
    name: 'dob',
    label: 'Date Of Birth',
    required: false,
    type: 'date',
    validate: (val) => validateTextInput('dob', 'Date Of Birth', false, false, val, 'date'),
  }, {
    name: 'address',
    label: 'Address',
    required: false,
    type: 'textArea',
    validate: (val) => validateTextInput('address', 'Address', false, false, val, 'text'),
  }, {
    name: 'zipcode',
    label: 'Zipcode',
    required: false,
    type: 'number',
    validate: (val) => validateTextInput('zipcode', 'Zipcode', false, false, val, 'number'),
  }, {
    name: 'country',
    label: 'Country',
    required: false,
    type: 'text',
    validate: (val) => validateTextInput('country', 'Country', false, false, val, 'text'),
  }],
  uploads: [{
    name: 'proofOfAddress',
    label: 'Proof of Address',
    required: false,
    type: 'text',
    validate: (val) => validateTextInput('proofOfAddress', 'Proof of Address', false, false, val, 'text'),
  }, {
    name: 'proofOfIdentity',
    label: 'Proof of Identity',
    required: false,
    type: 'text',
    validate: (val) => validateTextInput('proofOfIdentity', 'Proof of Identity', false, false, val, 'text'),
  }],
};
