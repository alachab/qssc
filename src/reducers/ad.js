import {UPDATE_AD} from '../actions';

const ad = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_AD :
      console.log('reducers ', action);
      return {
        content : action.content
      }

    default:
      return state
  }
}

export default ad;
