import { initialState, SIGNINREQUEST, SIGNINSUCCESS, SIGNINFAIL } from './Login.constants';

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
    case SIGNINFAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
