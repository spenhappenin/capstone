import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import flash from './flash';
import userEvents from './userEvents';

const rootReducer = combineReducers({
  routing: routerReducer,
   user,
   flash,
   userEvents
 });

export default rootReducer;
