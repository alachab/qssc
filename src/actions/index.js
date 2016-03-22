/*
 * action types
 */
export const USER_LOGIN   = 'USER_LOGIN';
export const UPDATE_IQAMA = 'UPDATE_IQAMA';

/*
 * action creators
 */
export function logIn(pass) {
  return { type: USER_LOGIN, pass }
}


export function updateIqama(salat, time) {
  return { type: UPDATE_IQAMA, payload : {salat, time} }
}
