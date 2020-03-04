import React from 'react';

class EpisodePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Episode page: {this.props.match.params.episodeID}</h1>
    );
  }
}

export default EpisodePage;
