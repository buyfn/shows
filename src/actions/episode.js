import {
  EPISODE_FETCH_REQUESTED,
  EPISODE_FETCH_SUCCEEDED,
  EPISODE_FETCH_FAILED,
} from '../constants/actionTypes';

export const fetchEpisodeRequest = episodeID => ({
  type: EPISODE_FETCH_REQUESTED,
  payload: { episodeID },
});

export const fetchEpisodeSuccess = data => ({
  type: EPISODE_FETCH_SUCCEEDED,
  payload: { ...data },
});

export const fetchEpisodeFailure = errorMsg => ({
  type: EPISODE_FETCH_FAILED,
  payload: { errorMsg },
});
