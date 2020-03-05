import React from 'react';

import EpisodeList from '../EpisodeList';

import './ShowPage.scss';

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
      <main className="show">
        <div className="show__info">
          {image && (
            <div className="show__cover">
              <img
                className="show__image"
                alt={`"${name}" show cover`}
                src={image.original}
              />
            </div>
          )}

          <div className="show__description">
            <h1 className="show__title">{name}</h1>
            <div className="show__summary" dangerouslySetInnerHTML={{ __html: summary }} />
          </div>
        </div>

        <EpisodeList episodes={episodes} />
      </main>
    );
  }
}

export default ShowPage;
