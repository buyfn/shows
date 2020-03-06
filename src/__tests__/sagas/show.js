import { expectSaga } from 'redux-saga-test-plan';

import * as api from '../../api';
import showSaga from '../../sagas/show';
import { SHOW_FETCH_REQUESTED, SHOW_FETCH_SUCCEEDED, SHOW_FETCH_FAILED } from '../../constants/actionTypes';

const showData = {
  id: '1',
  name: 'test show name',
  image: {},
  summary: 'test show summary',
};
const episodes = [];

describe('show saga', () => {
  it('dispatches SHOW_FETCH_SUCCEDED on successful request', () => {
    api.getShowData = jest.fn().mockResolvedValue({
      data: showData
    });
    api.getShowEpisodes = jest.fn().mockResolvedValue({ data: [] });
  
    return expectSaga(showSaga)
      .put({
        type: SHOW_FETCH_SUCCEEDED,
        payload: { ...showData, episodes },
      })
      .dispatch({
        type: SHOW_FETCH_REQUESTED,
        payload: { showID: showData.id },
      })
      .run();
  });

  it('dispatches SHOW_FETCH_FAILED on failed request', () => {
    api.getShowData = jest.fn().mockRejectedValue({ message: 'fail' });

    return expectSaga(showSaga)
      .put({
        type: SHOW_FETCH_FAILED,
        payload: { errorMsg: 'fail' },
      })
      .dispatch({
        type: SHOW_FETCH_REQUESTED,
        payload: { showID: showData.id },
      })
      .run();
  });
});
