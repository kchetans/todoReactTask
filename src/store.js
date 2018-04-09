import { createStore, applyMiddleware } from 'redux';
import combineReducers from './reducers/index';
import thunkMiddleware from 'redux-thunk';
// import {createLogger} from 'redux-logger';

const store = createStore(
    combineReducers,
  applyMiddleware(
    thunkMiddleware
  )
);

export default store;