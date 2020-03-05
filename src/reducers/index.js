import {
  EPISODE_FETCH_SUCCEEDED,
  SHOW_FETCH_SUCCEEDED,
  SHOW_FETCH_REQUESTED,
  EPISODE_FETCH_REQUESTED,
  EPISODE_FETCH_FAILED,
  SHOW_FETCH_FAILED,
} from '../constants/actionTypes';

const initialState = {
  show: {},
  episode: {},
  fetchingState: 'initial',  // initial | fetching | fetched | failed
  errorMsg: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EPISODE_FETCH_REQUESTED:
    case SHOW_FETCH_REQUESTED:
      return { ...state, fetchingState: 'fetching', errorMsg: null }
    case SHOW_FETCH_SUCCEEDED:
      return {
        ...state,
        fetchingState: 'fetched',
        show: { ...action.payload }
      }
    case EPISODE_FETCH_SUCCEEDED:
      return {
        ...state,
        fetchingState: 'fetched',
        episode: { ...action.payload }
      }
    case EPISODE_FETCH_FAILED:
    case SHOW_FETCH_FAILED:
      return {
        ...state,
        fetchingState: 'failed',
        errorMsg: action.payload.errorMsg
      }
    default:
      return state;
  }
};

export default reducer;
