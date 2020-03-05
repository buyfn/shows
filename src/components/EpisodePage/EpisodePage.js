import React from 'react';

import './EpisodePage.scss';

class EpisodePage extends React.Component {
  componentDidMount() {
    const episodeID = this.props.match.params.episodeID;
    this.props.fetchEpisode(episodeID);
  }

  render() {
    const { image, name, summary, fetchingState, errorMsg } = this.props;

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
}

export default EpisodePage;
