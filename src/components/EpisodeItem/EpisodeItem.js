import React from 'react';
import { Link } from 'react-router-dom';

import './EpisodeItem.scss';

const Episode = ({
  id,
  name,
  image,
}) => {
  return (
    <div className="episode-item">
      <Link to={`/episode/${id}`}>
        {image && (
          <div className="episode-cover">
            <img
              className="episode-image"
              alt={`"${name}" episode cover`}
              src={image.medium}
            />
          </div>
        )}

        <h3>{name}</h3>
      </Link>
    </div>
  );
};

export default Episode;
