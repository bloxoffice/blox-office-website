import urls from 'constants/urls';
import { setCookie } from 'utils/CookieUtils';
import { SIGNINREQUEST, SIGNINSUCCESS, SIGNINFAIL } from './Login.constants';

export const signInUser = (payload, sch, ech) => (dispatch) => {
  dispatch({
    type: SIGNINREQUEST,
  });

  fetch(`${urls.baseUrl1}${urls.signin}`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: '*/*',
    }),
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((response) => {
      if (response) {
        setCookie('sessionId', response.sessionId, response.expiry);
        dispatch({
          type: SIGNINSUCCESS,
        });
        if (sch) { sch(); }
      } else {
        dispatch({
          type: SIGNINFAIL,
          error: 'Error in signin',
        });
        if (ech) { ech(); }
      }
    })
    .catch((err) => {
      if (err) {
        dispatch({
          type: SIGNINFAIL,
          error: 'Error in signin',
        });
        if (ech) { ech(); }
      }
    });
};
