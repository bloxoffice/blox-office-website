import { combineReducers } from 'redux';
import { HomeReducer } from 'containers/Home/Home.redux';
import { CentralNotificationReducer } from 'containers/CentralNotifications/CentralNotifications.redux';
import { SignupReducer } from 'containers/Signup/Signup.redux';
import { LoginReducer } from 'containers/Login/Login.redux';

export default combineReducers({
  home: HomeReducer,
  centralNotification: CentralNotificationReducer,
  signup: SignupReducer,
  login: LoginReducer,
});
