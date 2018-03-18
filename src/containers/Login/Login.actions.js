import { SIGNINREQUEST, SIGNINSUCCESS } from './Login.constants';

export const signInUser = (payload) => (dispatch) => {
  dispatch({
    type: SIGNINREQUEST,
  });

  console.log('payload', payload);

  setTimeout(() => {
    dispatch({
      type: SIGNINSUCCESS,
    });
  }, 30000);
};
