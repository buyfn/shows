import axios from 'axios';

export const getShowData = showID =>
  axios.get(`https://api.tvmaze.com/shows/${showID}`);

export const getShowEpisodes = showID =>
  axios.get(`https://api.tvmaze.com/shows/${showID}/episodes`);

export const getEpisodeData = episodeID =>
  axios.get(`https://api.tvmaze.com/episodes/${episodeID}`);
