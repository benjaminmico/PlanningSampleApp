import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import getUsers from '../../api/getUsers';
import * as actionsTypes from '../actions/types/usersActionTypes';
import * as actions from '../actions/users';

function* onLoadUsers() {
  try {
    yield put(actions.getUsersRequest());
    const {data, error} = yield call(getUsers);
    if (data) {
      yield put(actions.getUsersSuccess(data));
    }
    if (error) {
      yield put(actions.getUsersFailure(error));
    }
  } catch (error) {
    yield put(actions.getUsersFailure(error));
  }
}

function* watchOnLoadUsers() {
  yield takeEvery(actionsTypes.GET_USERS, onLoadUsers);
}

export default function* usersSaga() {
  yield all([fork(watchOnLoadUsers)]);
}
