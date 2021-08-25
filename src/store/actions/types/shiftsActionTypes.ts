import {ShiftInput} from '../../../components/modals/ShiftForm';
import {IShift} from '../../../types/shifts';

export const SET_SHIFTS = 'shiftsActionTypes/SET_SHIFTS';
export interface SetShiftsAction {
  type: typeof SET_SHIFTS;
  shifts: IShift[];
}

export const GET_SHIFTS = 'shiftsActionTypes/GET_SHIFTS';
export interface GetShiftsAction {
  type: typeof GET_SHIFTS;
}

export const POST_SHIFT = 'shiftsActionTypes/POST_SHIFT';
export interface PostShiftsAction {
  type: typeof POST_SHIFT;
  body: ShiftInput;
}

export const PUT_SHIFT = 'shiftsActionTypes/PUT_SHIFT';
export interface PutShiftsAction {
  type: typeof PUT_SHIFT;
  id: number;
}

export const DELETE_SHIFT = 'shiftsActionTypes/DELETE_SHIFT';
export interface DeleteShiftsAction {
  type: typeof DELETE_SHIFT;
  id: number;
}

export const SHIFTS_REQUEST = 'shiftsActionTypes/GET_SHIFTS_REQUEST';
export interface GetShiftsRequestAction {
  type: typeof SHIFTS_REQUEST;
}

export const GET_SHIFTS_SUCCESS = 'shiftsActionTypes/GET_SHIFTS_SUCCESS';
export interface GetShiftsSuccessAction {
  type: typeof GET_SHIFTS_SUCCESS;
  shifts: IShift[];
}

export const POST_SHIFT_SUCCESS = 'shiftsActionTypes/POST_SHIFT_SUCCESS';
export interface PostShiftsSuccessAction {
  type: typeof POST_SHIFT_SUCCESS;
  shift: IShift;
}

export const PUT_SHIFT_SUCCESS = 'shiftsActionTypes/PUT_SHIFT_SUCCESS';
export interface PutShiftsSuccessAction {
  type: typeof PUT_SHIFT_SUCCESS;
  shift: IShift;
}

export const DELETE_SHIFT_SUCCESS = 'shiftsActionTypes/DELETE_SHIFT_SUCCESS';
export interface DeleteShiftsSuccessAction {
  type: typeof DELETE_SHIFT_SUCCESS;
  shiftId: number;
}

export const SHIFTS_FAILURE = 'shiftsActionTypes/SHIFTS_FAILURE';
export interface ShiftsFailureAction {
  type: typeof SHIFTS_FAILURE;
  error: Error | string | null;
}

export type ShiftsAction =
  | SetShiftsAction
  | GetShiftsAction
  | PostShiftsAction
  | PutShiftsAction
  | DeleteShiftsAction
  | GetShiftsRequestAction
  | PutShiftsSuccessAction
  | PostShiftsSuccessAction
  | DeleteShiftsSuccessAction
  | GetShiftsSuccessAction
  | ShiftsFailureAction;
