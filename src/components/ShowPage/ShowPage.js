import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { random } from 'lodash';

import EpisodeList from '../EpisodeList';
import { fetchShowRequest } from '../../actions';

import './ShowPage.scss';

const ShowPage = ({
  match: { params: { showID } },
  fetchingState,
  errorMsg,
  image,
  name,
  summary,
  episodes,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = showID === 'random' ? random(0, 46559) : showID;
    dispatch(fetchShowRequest(id));
  }, [dispatch, showID]);

  if (fetchingState === 'initial') {
    return 'initial';
  }

  if (fetchingState === 'fetching') {
    return 'Fetching data...';
  }

  if (fetchingState === 'failed') {
    return errorMsg;
  }

  return (
    <main className="show-page">
      <div className="show__info">
        {image && (
          <div className="show__cover">
            <img
              className="show__image"
              alt={`"${name}" show cover`}
              src={image.original}
            />
          </div>
        )}

        <div className="show__description">
          <h1 className="show__title">{name}</h1>
          <div className="show__summary" dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
      </div>

      {episodes && <EpisodeList episodes={episodes} />}
    </main>
  );
}

export default ShowPage;
