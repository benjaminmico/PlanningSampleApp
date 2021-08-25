import {IUser} from './../../../types/users';

export const SET_USERS = 'usersActionTypes/SET_USERS';
export interface SetUsersAction {
  type: typeof SET_USERS;
  users: IUser[];
}

export const GET_USERS = 'usersActionTypes/GET_USERS';
export interface GetUsersAction {
  type: typeof GET_USERS;
}

export const GET_USERS_REQUEST = 'usersActionTypes/GET_USERS_REQUEST';
export interface GetUsersRequestAction {
  type: typeof GET_USERS_REQUEST;
}

export const GET_USERS_SUCCESS = 'usersActionTypes/GET_USERS_SUCCESS';
export interface GetUsersSuccessAction {
  type: typeof GET_USERS_SUCCESS;
  users: IUser[];
}

export const GET_USERS_FAILURE = 'usersActionTypes/GET_USERS_FAILURE';
export interface GetUsersFailureAction {
  type: typeof GET_USERS_FAILURE;
  error: Error | string | null;
}

export type UsersAction =
  | SetUsersAction
  | GetUsersAction
  | GetUsersRequestAction
  | GetUsersSuccessAction
  | GetUsersFailureAction;
