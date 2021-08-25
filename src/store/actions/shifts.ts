import {ShiftInput} from '../../components/modals/ShiftForm';
import {IShift} from '../../types/shifts';
import * as actions from './types/shiftsActionTypes';

export function setShifts(shifts: IShift[]): actions.SetShiftsAction {
  return {
    type: actions.SET_SHIFTS,
    shifts,
  };
}

export function getShifts(): actions.GetShiftsAction {
  return {
    type: actions.GET_SHIFTS,
  };
}

export function postShift(body: ShiftInput): actions.PostShiftsAction {
  return {
    type: actions.POST_SHIFT,
    body,
  };
}

export function putShift(id: number): actions.PutShiftsAction {
  return {
    type: actions.PUT_SHIFT,
    id,
  };
}

export function deleteShift(id: number): actions.DeleteShiftsAction {
  return {
    type: actions.DELETE_SHIFT,
    id,
  };
}

export function shiftsRequest(): actions.GetShiftsRequestAction {
  return {
    type: actions.SHIFTS_REQUEST,
  };
}

export function getShiftsSuccess(
  shifts: IShift[],
): actions.GetShiftsSuccessAction {
  return {
    type: actions.GET_SHIFTS_SUCCESS,
    shifts,
  };
}

export function postShiftSuccess(
  shift: IShift,
): actions.PostShiftsSuccessAction {
  return {
    type: actions.POST_SHIFT_SUCCESS,
    shift,
  };
}
export function putShiftSuccess(shift: IShift): actions.PutShiftsSuccessAction {
  return {
    type: actions.PUT_SHIFT_SUCCESS,
    shift,
  };
}

export function deleteShiftsSuccess(
  shiftId: number,
): actions.DeleteShiftsSuccessAction {
  return {
    type: actions.DELETE_SHIFT_SUCCESS,
    shiftId,
  };
}

export function shiftsFailure(
  error: Error | string,
): actions.ShiftsFailureAction {
  return {
    type: actions.SHIFTS_FAILURE,
    error,
  };
}
