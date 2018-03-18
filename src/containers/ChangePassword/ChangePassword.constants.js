import { validateTextInput } from 'utils/validations';

export const fields = [{
  name: 'oldPassword',
  label: 'Old Password',
  required: true,
  type: 'password',
  validate: (val) => validateTextInput('oldPassword', 'Old Password', true, true, val, 'password'),
}, {
  name: 'newPassword',
  label: 'New Password',
  required: true,
  type: 'password',
  validate: (val) => validateTextInput('newPassword', 'New Password', true, true, val, 'password'),
}, {
  name: 'confirmPassword',
  label: 'Confirm Password',
  required: true,
  type: 'password',
  validate: (val) => validateTextInput('confirmPassword', 'Confirm Password', true, true, val, 'password'),
}];
