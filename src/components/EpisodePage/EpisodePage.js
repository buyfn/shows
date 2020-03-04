import React from 'react';

class EpisodePage extends React.Component {
  componentDidMount() {
    const episodeID = this.props.match.params.episodeID;
    this.props.fetchEpisode(episodeID);
  }

  render() {
    const { image, name, summary } = this.props;

    return (
      <>
        {image && (
          <img alt="" src={image.original} />
        )}

        <h1>{name}</h1>
        
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </>
    );
  }
}

export default EpisodePage;
