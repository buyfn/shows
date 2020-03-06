import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from '../../store';

import ShowPage from '../../components/ShowPage/ShowPage';

describe('ShowPage', () => {
  const props = {
    match: {
      params: { showID: '1' }
    },
    summary: 'test show summary',
    name: 'test show name',
    image: {
      medium: 'img.jpg',
      original: 'img.jpg'
    },
  };

  it('renders correctlly', () => {
    const tree = renderer
      .create(
        <Provider store={store}><ShowPage {...props}/></Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});