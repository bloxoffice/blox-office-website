import { createStructuredSelector } from 'reselect';

import { inititalState } from './Home.constants';

export const HomeSelector = createStructuredSelector({});

/* eslint-disable */
export const HomeReducer = (state = inititalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
