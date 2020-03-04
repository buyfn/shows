import React from 'react';

import EpisodeList from '../EpisodeList';

class ShowPage extends React.Component {
  componentDidMount() {
    const showID = this.props.match.params.showID;
    this.props.fetchShows(showID);
  }

  render() {
    return (
      <main>
        {this.props.image && (
          <img alt="" src={this.props.image.medium} />
        )}

        <h1>{this.props.name}</h1>

        <div dangerouslySetInnerHTML={{ __html: this.props.summary }} />

        <EpisodeList episodes={this.props.episodes} />
      </main>
    );
  }
}

export default ShowPage;
