import { createStructuredSelector } from 'reselect';
import { initialState, SIGNINREQUEST, SIGNINSUCCESS } from './Login.constants';

export const LoginSelector = createStructuredSelector({
  isLoading: (state) => state.login.isLoading,
});

export const LoginReducer = (state = initialState, action) => {
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
