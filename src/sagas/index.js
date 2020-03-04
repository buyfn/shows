import {
  all,
} from 'redux-saga/effects';

import episodeSaga from './episode';
import showSaga from './show';

export function* saga() {
  yield all([
    showSaga(),
    episodeSaga(),
  ]);
};
