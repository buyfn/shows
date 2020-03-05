import React from 'react';
import { Link } from 'react-router-dom';

import './EpisodeList.scss';

const EpisodeList = ({ episodes }) => {
  if (episodes) {
    return (
      <div className="episode-list-container">
        <h2>Episodes</h2>
        <ul className="episode-list">
          {episodes.map(( episodeData ) => {
            return (
              <li key={episodeData.id} className="episode-item-container">
                <Episode {...episodeData} />
              </li>
            )})}
        </ul>
      </div>
    );
  }

  return null;
};

const Episode = ({
  id,
  name,
  image,
  summary,
}) => {
  return (
    <div>
      {image && (
        <img alt="" src={image.medium} />
      )}

      <Link to={`/episode/${id}`}>
        <h3>{name}</h3>
      </Link>
      
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
};

export default EpisodeList;
