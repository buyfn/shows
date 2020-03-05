import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import { EPISODE_FETCH_REQUESTED } from '../constants/actionTypes';
import { fetchEpisodeSuccess, fetchEpisodeFailure } from '../actions';
import { getEpisodeData } from '../api';

function* fetchEpisode(action) {
  const { episodeID } = action.payload;

  try {
    const { data: {
      id,
      name,
      image,
      summary,
    } } = yield call(getEpisodeData, episodeID);

    yield put(fetchEpisodeSuccess({
      id,
      name,
      image,
      summary,
    }));
  } catch (error) {
    yield(put(fetchEpisodeFailure(error.message)));
  }
}

export default function* saga() {
  yield takeLatest(EPISODE_FETCH_REQUESTED, fetchEpisode);
};
