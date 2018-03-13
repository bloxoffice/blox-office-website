import { NOTIFICATIONCHANGE } from './CentralNotifications.redux';

export const notificationAction = (dispatch, msg) => {
  dispatch({
    type: NOTIFICATIONCHANGE,
    msg,
  });

  setTimeout(() => {
    dispatch({
      type: NOTIFICATIONCHANGE,
      msg: {},
    });
  }, 10000);
};
