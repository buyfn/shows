import React from 'react';
import renderer from 'react-test-renderer';

import EpisodePage from '../components/EpisodePage/EpisodePage';

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

  let tree;
  const fetchEpisodeMock = jest.fn();

  beforeAll(() => {
    tree = renderer
      .create(<EpisodePage {...props} fetchEpisode={fetchEpisodeMock} />)
      .toJSON();
  });

  it('calls "fetchShow" with correct argument', () => {
    expect(fetchEpisodeMock).toHaveBeenCalledWith('1');
    expect(fetchEpisodeMock.mock.calls.length).toEqual(1);
  });

  it('renders correctlly', () => {
    expect(tree).toMatchSnapshot();
  });
});
