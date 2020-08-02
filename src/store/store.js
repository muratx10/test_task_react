import { applyMiddleware, compose, createStore } from 'redux';
import { reducer } from './reducers/reducer';
import { sagaWatcher } from './sagas/sagas';
import ReduxDevTools from '../utils/reduxDevTool';
import createSagaMiddleware from 'redux-saga';

const logger = store => action => next => {
  const res = action(next);
  console.log(res);
  // console.log(store.getState());
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, compose(applyMiddleware(logger, sagaMiddleware), ReduxDevTools.instrument()));

sagaMiddleware.run(sagaWatcher);
// const store = createStore(rootReducer, compose(applyMiddleware(logger), ReduxDevTools.instrument()));


export default store;
