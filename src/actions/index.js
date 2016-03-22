/*
 * action types
 */
export const USER_LOGIN = 'USER_LOGIN';


/*
 * action creators
 */
export function logIn(pass) {
  return { type: USER_LOGIN, pass }
}
