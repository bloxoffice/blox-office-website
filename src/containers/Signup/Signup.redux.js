import {
  initialState,
  SIGNUPSUCCESS,
  SIGNUPREQUEST,
} from './Signup.constants';

export const SignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUPREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SIGNUPSUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
