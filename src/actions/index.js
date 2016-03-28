/*
 * action types
 */
export const USER_LOGIN   = 'USER_LOGIN';
export const UPDATE_IQAMA = 'UPDATE_IQAMA';
export const UPDATE_AD = 'UPDATE_AD';

/*
 * action creators
 */
export function logIn(pass) {
  return { type: USER_LOGIN, pass }
}


export function updateIqama(iqama, time) {
  return { type: UPDATE_IQAMA, payload : {iqama, time} }
}


export function updateAd(content) {
  return { type: UPDATE_AD, content }
}
