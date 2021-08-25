import {all} from 'redux-saga/effects';
import userSaga from './usersSaga';
import shiftsSaga from './shiftsSaga';

export default function* rootSaga() {
  yield all([userSaga(), shiftsSaga()]);
}
