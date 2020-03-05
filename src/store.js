import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import { saga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnchancers(
    applyMiddleware(sagaMiddleware),
  ),
);

sagaMiddleware.run(saga);

export default store;
