import urls from 'constants/urls';

import { JOINWHITELIST } from './Home.constants';
import { notificationAction } from '../CentralNotifications/CentralNotifications.actions';

export const joinWhitelist = (email) => (dispatch) => {
  console.log('email', email);
  fetch(`${urls.baseUrl}${urls.sendEmail}${email}`, {
    method: 'GET',
    body: {
      email,
    },
  }).then((response) => response.json())
    .then((res, err) => {
      console.log('res', res, 'err', err);
      notificationAction(dispatch, {
        message: `${email} successfully added to waitlist`,
      });
    })
    .catch((error) => {
      console.log('error', error);
      notificationAction(dispatch, {
        message: 'Error occured in adding your email to waitlist. Try again',
      });
    });
  dispatch({
    type: JOINWHITELIST,
  });
};
