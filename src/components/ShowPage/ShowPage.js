import React from 'react';

import EpisodeList from '../EpisodeList';

class ShowPage extends React.Component {
  componentDidMount() {
    const showID = this.props.match.params.showID;
    this.props.fetchShow(showID);
  }

  render() {
    const {
      image,
      name,
      summary,
      episodes,
      fetchingState,
      errorMsg
    } = this.props;

    if (fetchingState === 'fetching') {
      return 'Fetching data...';
    }

    if (fetchingState === 'failed') {
      return errorMsg;
    }

    return (
      <main>
        {image && (
          <img alt="" src={this.props.image.medium} />
        )}

        <h1>{name}</h1>

        <div dangerouslySetInnerHTML={{ __html: summary }} />

        <EpisodeList episodes={episodes} />
      </main>
    );
  }
}

export default ShowPage;
