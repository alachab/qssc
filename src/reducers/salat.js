import {UPDATE_IQAMA} from '../actions';

const salat = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_IQAMA :
      console.log('reducers ', action);
      return {
        iqama : action.payload.iqama,
        time : action.payload.time
      }

    default:
      return state
  }
}

export default salat;
