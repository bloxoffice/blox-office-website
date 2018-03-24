import { createStructuredSelector } from 'reselect';

import { inititalState } from './Home.constants';

const getCentralNotification = (state) => state.centralNotification.msg;

export const HomeSelector = createStructuredSelector({
  centralNotification: getCentralNotification,
  isSignupLoading: (state) => state.signup.isLoading,
  isSigninLoading: (state) => state.login.isLoading,
});

/* eslint-disable */
export const HomeReducer = (state = inititalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
