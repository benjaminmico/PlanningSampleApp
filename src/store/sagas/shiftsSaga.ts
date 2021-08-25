import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import listingShifts from '../../api/listingShifts';
import * as actionsTypes from '../actions/types/shiftsActionTypes';
import * as actions from '../actions/shifts';
import postShift from '../../api/postShift';
import deleteShift from '../../api/deleteShift';
import putShift from '../../api/putShift';

function* onLoadShifts() {
  try {
    yield put(actions.shiftsRequest());
    const {data, error} = yield call(listingShifts);

    if (data) {
      yield put(actions.getShiftsSuccess(data));
    }
    if (error) {
      yield put(actions.shiftsFailure(error));
    }
  } catch (error) {
    yield put(actions.shiftsFailure(error));
  }
}

function* onPostShift(body: any) {
  try {
    yield put(actions.shiftsRequest());
    const {data, error} = yield call(postShift, body);

    if (data) {
      yield put(actions.postShiftSuccess(data));
    }
    if (error) {
      yield put(actions.shiftsFailure(error));
    }
  } catch (error) {
    yield put(actions.shiftsFailure(error));
  }
}

function* onPutShift(id: any) {
  try {
    yield put(actions.shiftsRequest());
    const {data, error} = yield call(putShift, id);
    if (data) {
      yield put(actions.putShiftSuccess(data));
    }
    if (error) {
      yield put(actions.shiftsFailure(error));
    }
  } catch (error) {
    yield put(actions.shiftsFailure(error));
  }
}

function* onDeleteShift(id: any) {
  try {
    yield put(actions.shiftsRequest());
    const {data, error} = yield call(deleteShift, id);

    if (data) {
      yield put(actions.postShiftSuccess(data));
    }
    if (error) {
      yield put(actions.shiftsFailure(error));
    }
  } catch (error) {
    yield put(actions.shiftsFailure(error));
  }
}

function* watchOnLoadShifts() {
  yield takeEvery(actionsTypes.GET_SHIFTS, onLoadShifts);
  yield takeEvery(actionsTypes.POST_SHIFT, onPostShift);
  yield takeEvery(actionsTypes.PUT_SHIFT, onPutShift);
  yield takeEvery(actionsTypes.DELETE_SHIFT, onDeleteShift);
}

export default function* shiftsSaga() {
  yield all([fork(watchOnLoadShifts)]);
}
