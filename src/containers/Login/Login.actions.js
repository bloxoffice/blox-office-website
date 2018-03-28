import urls from 'constants/urls';
import { setCookie, getCookie, eraseCookie } from 'utils/CookieUtils';
import { SIGNINREQUEST, SIGNINSUCCESS, SIGNINFAIL, SIGNOUTSUCCESS } from './Login.constants';

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

export const signoutUser = (sch) => (dispatch) => {
  const sesseionId = getCookie('sessionId');

  fetch(`${urls.baseUrl1}${urls.signout}`, {
    method: 'GET',
    headers: new Headers({
      'X-AUTH-HEADER': sesseionId,
    }),
  }).then(() => {
    eraseCookie('sessionId');
    dispatch({
      type: SIGNOUTSUCCESS,
    });
    if (sch) { sch(); }
  }).catch(() => {
    eraseCookie('sessionId');
    dispatch({
      type: SIGNOUTSUCCESS,
    });
    if (sch) { sch(); }
  });
};
