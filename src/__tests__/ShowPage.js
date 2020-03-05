import React from 'react';
import renderer from 'react-test-renderer';

import ShowPage from '../components/ShowPage/ShowPage';

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

  let tree;
  const fetchShowMock = jest.fn();

  beforeAll(() => {
    tree = renderer
      .create(<ShowPage {...props} fetchShow={fetchShowMock} />)
      .toJSON();
  });

  it('calls "fetchShow" with correct argument', () => {
    expect(fetchShowMock).toHaveBeenCalledWith('1');
    expect(fetchShowMock.mock.calls.length).toEqual(1);
  });

  it('renders correctlly', () => {
    expect(tree).toMatchSnapshot();
  });
});