import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';

import App from '../App';

test('renders without crashing', () => {
  ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.createElement('div'),
  );
});
