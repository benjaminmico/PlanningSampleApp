import {IUser} from '../../types/users';
import * as actions from '../actions/types/usersActionTypes';

export interface IUsersState {
  users: IUser[];
  loading: boolean;
  error: Error | string | null;
}

const initialState: IUsersState = {
  users: [],
  loading: false,
  error: null,
};

export default function usersReducer(
  state: IUsersState = initialState,
  action: actions.UsersAction,
): IUsersState {
  switch (action.type) {
    case actions.SET_USERS:
    case actions.GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
        loading: false,
      };
    case actions.GET_USERS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
}
