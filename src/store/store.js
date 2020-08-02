import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReduxDevTools from '../utils/reduxDevTool';
import { reducer } from './reducers/reducer';
import { sagaWatcher } from './sagas/sagas';

const logger = store => action => next => {
  action(next);
  console.log('%c▼----------STATE----------▼', 'color: green; font-size: 20px');
  console.log(store.getState());
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, compose(applyMiddleware(logger, sagaMiddleware), ReduxDevTools.instrument()));

sagaMiddleware.run(sagaWatcher);

export default store;
