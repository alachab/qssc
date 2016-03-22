import {UPDATE_IQAMA} from '../actions';

const salat = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_IQAMA :
      console.log('reducers ', action);
      return {
        salat : action.payload.salat,
        time : action.payload.time
      }

    default:
      return state
  }
}

export default salat;
