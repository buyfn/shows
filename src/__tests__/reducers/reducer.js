import reducer from '../../reducers';
import { SHOW_FETCH_REQUESTED, SHOW_FETCH_SUCCEEDED, SHOW_FETCH_FAILED } from '../../constants/actionTypes';

const initialState = {
  show: {},
  episode: {},
  fetchingState: 'initial',
  errorMsg: null,
};

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('show', () => {
    it('handles SHOW_FETCH_REQUESTED', () => {
      const action = {
        type: SHOW_FETCH_REQUESTED,
        payload: { showID: '1' },
      };

      expect(reducer(initialState, action))
        .toEqual({
          ...initialState,
          fetchingState: 'fetching',
          errorMsg: null
        });
    });

    it('handles SHOW_FETCH_SUCCEEDED', () => {
      const action = {
        type: SHOW_FETCH_SUCCEEDED,
        payload: { showID: '1', name: 'test name' }
      };

      expect(reducer(initialState, action))
        .toEqual({
          ...initialState,
          fetchingState: 'fetched',
          show: action.payload,
        });
    });

    it('handles SHOW_FETCH_FAILED', () => {
      const action = {
        type: SHOW_FETCH_FAILED,
        payload: { errorMsg: 'error' }
      };

      expect(reducer(initialState, action))
        .toEqual({
          ...initialState,
          fetchingState: 'failed',
          errorMsg: 'error',
        });
    });
  });

  describe('episode', () => {});
});
