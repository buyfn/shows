import {
  SHOW_FETCH_REQUESTED,
  SHOW_FETCH_SUCCEEDED,
  SHOW_FETCH_FAILED,
} from '../constants/actionTypes';

export const fetchShowRequest = showID => ({
  type: SHOW_FETCH_REQUESTED,
  payload: { showID },
});

export const fetchShowSuccess = data => ({
  type: SHOW_FETCH_SUCCEEDED,
  payload: { ...data }
});

export const fetchShowFailure = errorMsg => ({
  type: SHOW_FETCH_FAILED,
  payload: { errorMsg },
});
