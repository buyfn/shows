import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from '../../store';

import EpisodePage from '../../components/EpisodePage/EpisodePage';

describe('EpisodePage', () => {
  const props = {
    match: {
      params: { episodeID: '1' }
    },
    summary: 'test episode summary',
    name: 'test episode name',
    image: {
      medium: 'img.jpg',
      original: 'img.jpg'
    },
  };

  it('renders correctlly', () => {
    const tree = renderer
      .create(
        <Provider store={store}><EpisodePage {...props}/></Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
