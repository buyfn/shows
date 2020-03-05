import React from 'react';

import Episode from '../EpisodeItem';

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

export default EpisodeList;
