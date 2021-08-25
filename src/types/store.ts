import {IShiftsState} from './../store/reducers/shiftsReducer';
import {IUsersState} from './../store/reducers/usersReducer';

export interface IStoreState {
  users: IUsersState;
  shifts: IShiftsState;
}
