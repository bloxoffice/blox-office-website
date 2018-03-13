import { combineReducers } from 'redux';
import { HomeReducer } from 'containers/Home/Home.redux';
import { CentralNotificationReducer } from 'containers/CentralNotifications/CentralNotifications.redux';

export default combineReducers({
  home: HomeReducer,
  centralNotification: CentralNotificationReducer,
});
