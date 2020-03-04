import React from 'react';

const EpisodeList = ({ episodes }) => {
  if (episodes) {
    return (
      <>
        <h2>Episodes</h2>
        <ul>
          {episodes.map(({ id, ...episodeData }) => {
            return (
              <li key={id}>
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
  name,
  image,
  summary,
}) => {
  return (
    <div>
      {image && (
        <img alt="" src={image.medium} />
      )}

      <h3>{name}</h3>
      
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
};

export default EpisodeList;
