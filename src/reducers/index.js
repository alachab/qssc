import { combineReducers } from 'redux';
import admin from './admin';
import salat from './salat';
import ad from './ad';

const qsscApp = combineReducers({
  admin,
  salat,
  ad
})

export default qsscApp;
