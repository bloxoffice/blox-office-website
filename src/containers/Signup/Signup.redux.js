import { createStructuredSelector } from 'reselect';
import {
  initialState,
  SIGNINSUCCESS,
  SIGNINREQUEST,
} from './Signup.constants';

export const SignupSelector = createStructuredSelector({
  isLoading: (state) => state.signup.isLoading,
});

export const SignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNINREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SIGNINSUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
