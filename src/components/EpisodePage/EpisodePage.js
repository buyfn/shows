import React from 'react';

class EpisodePage extends React.Component {
  render() {
    const { name, summary, image } = this.props;

    return (
      <>
        {image && (
          <img alt="" src={image.medium} />
        )}

        <h1>{name}</h1>
        
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </>
    );
  }
}

export default EpisodePage;
