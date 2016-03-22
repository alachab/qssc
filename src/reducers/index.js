import { combineReducers } from 'redux';
import admin from './admin';
import salat from './salat';

const qsscApp = combineReducers({
  admin,
  salat
})

export default qsscApp;
