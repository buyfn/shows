import React from 'react';
import { Link } from 'react-router-dom';

const EpisodeList = ({ episodes }) => {
  if (episodes) {
    return (
      <>
        <h2>Episodes</h2>
        <ul>
          {episodes.map(( episodeData ) => {
            return (
              <li key={episodeData.id}>
                <Episode {...episodeData} />
              </li>
            )})}
        </ul>
      </>
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
