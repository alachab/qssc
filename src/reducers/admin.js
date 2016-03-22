import {USER_LOGIN} from '../actions';

const admin = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN :
      console.log('reducers ', action);
      return {
        loggedIn : action.pass
      }
    default:
      return state
  }
}

export default admin;
