import {IShift} from './../../types/shifts';
import * as actions from '../actions/types/shiftsActionTypes';

export interface IShiftsState {
  shifts: IShift[];
  loading: boolean;
  error: Error | string | null;
}

const initialState: IShiftsState = {
  shifts: [],
  loading: false,
  error: null,
};

export default function shiftsReducer(
  state: IShiftsState = initialState,
  action: actions.ShiftsAction,
): IShiftsState {
  switch (action.type) {
    case actions.SET_SHIFTS:
    case actions.SHIFTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_SHIFTS_SUCCESS:
      return {
        ...state,
        shifts: action.shifts,
        loading: false,
      };
    case actions.POST_SHIFT_SUCCESS:
      return {
        ...state,
        shifts: [...state.shifts, action.shift],
        loading: false,
      };
    case actions.DELETE_SHIFT_SUCCESS:
      return {
        ...state,
        shifts: state.shifts.filter(shift => shift.id !== action.shiftId),
        loading: false,
      };
    case actions.SHIFTS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
}
