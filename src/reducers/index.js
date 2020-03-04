import {
  EPISODE_FETCH_SUCCEEDED,
  SHOW_FETCH_SUCCEEDED,
} from '../constants/actionTypes';

const initialState = {
  show: {},
  episode: {},
  isFetching: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FETCH_SUCCEEDED:
      return {
        ...state,
        show: { ...action.payload }
      }
    case EPISODE_FETCH_SUCCEEDED:
      return {
        ...state,
        episode: { ...action.payload }
      }
    default:
      return state;
  }
};

export default reducer;
