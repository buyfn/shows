import {
  all,
  call,
  put,
  takeLatest
} from 'redux-saga/effects';

import { SHOW_FETCH_REQUESTED } from '../constants/actionTypes';
import { fetchShowSuccess } from '../actions';
import { getShowData, getShowEpisodes } from '../api';

function* fetchShow(action) {
  const { showID } = action.payload;

  const [showData, { data: episodes }] = yield all([
    call(getShowData, showID),
    call(getShowEpisodes, showID),
  ]);

  const { data: {
    id,
    name,
    image,
    summary,
  } } = showData;

  yield put(fetchShowSuccess({
    id,
    name,
    image,
    summary,
    episodes
  }));
}

export default function* saga() {
  yield takeLatest(SHOW_FETCH_REQUESTED, fetchShow);
};
