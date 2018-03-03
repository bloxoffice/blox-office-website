import { combineReducers } from 'redux';
import { HomeReducer } from 'containers/Home/Home.redux';

export default combineReducers({
  Home: HomeReducer,
});
