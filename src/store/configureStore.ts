import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const logger = (store: any) => (next: any) => (action: any) => {
  next(action);
  console.log(action, store.getState());
};
const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware, logger)),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
