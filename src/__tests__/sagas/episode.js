import { expectSaga } from 'redux-saga-test-plan';

import * as api from '../../api';
import episodeSaga from '../../sagas/episode';
import {
  EPISODE_FETCH_REQUESTED,
  EPISODE_FETCH_SUCCEEDED,
  EPISODE_FETCH_FAILED
} from '../../constants/actionTypes';

const episodeData = {
  id: '1',
  name: 'test episode name',
  image: {},
  summary: 'test episode summary',
};

describe('episode saga', () => {
  it('dispatches EPISODE_FETCH_SUCCEDED on successful request', () => {
    api.getEpisodeData = jest.fn().mockResolvedValue({
      data: episodeData
    });
  
    return expectSaga(episodeSaga)
      .put({
        type: EPISODE_FETCH_SUCCEEDED,
        payload: episodeData
      })
      .dispatch({
        type: EPISODE_FETCH_REQUESTED,
        payload: { episodeID: episodeData.id },
      })
      .run();
  });

  it('dispatches EPISODE_FETCH_FAILED on failed request', () => {
    api.getEpisodeData = jest.fn().mockRejectedValue({ message: 'fail' });

    return expectSaga(episodeSaga)
      .put({
        type: EPISODE_FETCH_FAILED,
        payload: { errorMsg: 'fail' },
      })
      .dispatch({
        type: EPISODE_FETCH_REQUESTED,
        payload: { episodeID: episodeData.id },
      })
      .run();
  });
});
