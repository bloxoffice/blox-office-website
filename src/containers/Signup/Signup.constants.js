import { validateTextInput } from 'utils/validations';

export const fields = [{
  name: 'firstName',
  label: 'Frist Name',
  required: true,
  type: 'text',
  validate: (val) => validateTextInput('firstName', 'Frist Name', true, true, val, 'text'),
}, {
  name: 'lastName',
  label: 'Last Name',
  required: true,
  type: 'text',
  validate: (val) => validateTextInput('lastName', 'Last Name', true, true, val, 'text'),
}, {
  name: 'emailAddress',
  label: 'Email Address',
  required: true,
  type: 'email',
  validate: (val) => validateTextInput('emailAddress', 'Email Address', true, true, val, 'email'),
}, {
  name: 'phone',
  label: 'Phone',
  required: true,
  type: 'tel',
  validate: (val) => validateTextInput('phone', 'Phone', true, true, val, 'phone'),
}, {
  name: 'password',
  label: 'Password',
  required: true,
  type: 'password',
  validate: (val) => validateTextInput('password', 'Password', true, true, val, 'password'),
}, {
  name: 'confirmPassword',
  label: 'Confirm Password',
  required: true,
  type: 'password',
  validate: (val) => validateTextInput('confirmPassword', 'Confirm Password', false, false, val, 'password'),
}];

export const initialState = {
  isLoading: false,
};

export const SIGNUPREQUEST = 'SIGNUPREQUEST';
export const SIGNUPSUCCESS = 'SIGNUPSUCCESS';
export const SIGNUPFAIL = 'SIGNUPFAIL';
