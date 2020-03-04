import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setEpisode } from '../../actions';

const EpisodeList = ({ episodes }) => {
  if (episodes) {
    return (
      <>
        <h2>Episodes</h2>
        <ul>
          {episodes.map(( episodeData ) => {
            return (
              <li key={episodeData.id}>
                <EpisodeContainer {...episodeData} />
              </li>
            )})}
        </ul>
      </>
    );
  }

  return null;
};

const mapDispatchToProps = dispatch => ({
  setEpisode: (episodeData) => dispatch(setEpisode(episodeData)),
});

const Episode = ({
  id,
  name,
  image,
  summary,
  setEpisode,
}) => {
  return (
    <div>
      {image && (
        <img alt="" src={image.medium} />
      )}

      <Link
        onClick={() => setEpisode({ id, name, image, summary }) }
        to={`/episode/${id}`}
      >
        <h3>{name}</h3>
      </Link>
      
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
};

const EpisodeContainer = connect(
  null,
  mapDispatchToProps,
)(Episode);

export default EpisodeList;
