import { SIGNUPREQUEST, SIGNUPSUCCESS } from './Signup.constants';

export const signupUser = (payload) => (dispatch) => {
  dispatch({
    type: SIGNUPREQUEST,
  });

  console.log('payload', payload);

  setTimeout(() => {
    dispatch({
      type: SIGNUPSUCCESS,
    });
  }, 30000);
};
