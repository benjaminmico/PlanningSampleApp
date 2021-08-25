import {combineReducers} from 'redux';
import shiftsReducer from './shiftsReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  shifts: shiftsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
