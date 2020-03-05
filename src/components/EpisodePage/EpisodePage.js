import React from 'react';

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
      <>
        {image && (
          <img alt={`"${name}" episode cover`} src={image.original} />
        )}

        <h1>{name}</h1>

        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </>
    );
  }
}

export default EpisodePage;
