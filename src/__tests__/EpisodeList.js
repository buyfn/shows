import React from 'react';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import EpisodeList from '../components/EpisodeList';

describe('EpisodeList', () => {
  const episodes = [
    {
      name: 'test episode name',
      id: '1',
      image: {
        medium: 'test.jpg',
        original: 'test.jpg'
      },
    },
    {
      name: 'test episode name 2',
      id: '2',
      image: {
        medium: 'test.jpg',
        original: 'test.jpg'
      },
    }
  ];

  let tree;

  beforeAll(() => {
    tree = renderer
      .create(
        <Router history={createMemoryHistory()}>
          <EpisodeList episodes={episodes}/>)
        </Router>
      )
      .toJSON();
  });

  it('renders correctlly', () => {
    expect(tree).toMatchSnapshot();
  });
});
