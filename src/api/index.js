import axios from 'axios';

export const getShowData = showID =>
  axios.get(`http://api.tvmaze.com/shows/${showID}`);

export const getShowEpisodes = showID =>
  axios.get(`http://api.tvmaze.com/shows/${showID}/episodes`);

export const getEpisodeData = episodeID =>
  axios.get(`http://api.tvmaze.com/episodes/${episodeID}`);
