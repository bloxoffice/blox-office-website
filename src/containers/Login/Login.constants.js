import { validateTextInput } from 'utils/validations';

export const fields = [{
  name: 'emailAddress',
  label: 'Email Address',
  required: true,
  type: 'email',
  validate: (val) => validateTextInput('emailAddress', 'Email Address', true, true, val, 'email'),
}, {
  name: 'password',
  label: 'Password',
  required: true,
  type: 'password',
  validate: (val) => validateTextInput('password', 'Password', true, true, val, 'password'),
}];

export const initialState = {
  isLoading: false,
};

export const SIGNINREQUEST = 'SIGNINREQUEST';
export const SIGNINSUCCESS = 'SIGNINSUCCESS';
export const SIGNINFAIL = 'SIGNINFAIL';
export const SIGNOUTSUCCESS = 'SIGNOUTSUCCESS';
