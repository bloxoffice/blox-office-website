export const NOTIFICATIONCHANGE = 'NOTIFICATIONCHANGE';

export const CentralNotificationReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTIFICATIONCHANGE:
      return {
        msg: action.msg,
      };
    default:
      return state;
  }
};
