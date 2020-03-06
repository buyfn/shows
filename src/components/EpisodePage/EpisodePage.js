import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchEpisodeRequest } from '../../actions';

import './EpisodePage.scss';

const EpisodePage = ({
  match: { params: { episodeID } },
  fetchingState,
  errorMsg,
  image,
  name,
  summary,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEpisodeRequest(episodeID));
  }, [dispatch, episodeID]);

  if (fetchingState === 'fetching') {
    return 'Fetching data...';
  }

  if (fetchingState === 'failed') {
    return errorMsg;
  }

  return (
    <main className="episode-page">
      {image && (
        <div className="episode-cover">
          <img
            className="episode-image"
            alt={`"${name}" episode cover`}
            src={image.original}
          />
        </div>
      )}

      <div className="episode-info">
        <h1 className="episode-title">{name}</h1>
        <div
          className="episode-description"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
      </div>
    </main>
  );
}

export default EpisodePage;
