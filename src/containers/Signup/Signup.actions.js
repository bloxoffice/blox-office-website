import urls from 'constants/urls';
import { SIGNUPREQUEST, SIGNUPSUCCESS, SIGNUPFAIL } from './Signup.constants';

export const signupUser = (payload, sch, ech) => (dispatch) => {
  dispatch({
    type: SIGNUPREQUEST,
  });

  fetch(`${urls.baseUrl1}${urls.signup}`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: '*/*',
    }),
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((response) => {
      if (response) {
        dispatch({
          type: SIGNUPSUCCESS,
        });
        if (sch) { sch(); }
      } else {
        dispatch({
          type: SIGNUPFAIL,
          error: 'Error in signing up',
        });
        if (ech) { ech(); }
      }
    })
    .catch((err) => {
      if (err) {
        dispatch({
          type: SIGNUPFAIL,
          error: 'Error in signing up',
        });
        if (ech) { ech(); }
      }
    });
};
