import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import initialState from './initialState';
import reducers from '../reducers';

const { hostname } = window.location;
const isLocal = hostname === 'localhost' || hostname === '127.0.0.1';

export default createStore(
  combineReducers(reducers),
  initialState,
  isLocal ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
);
