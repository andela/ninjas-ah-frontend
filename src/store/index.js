import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import initialState from './initialState';
import reducers from '../reducers';

const hostname = window.location.hostname;
const isLocal = hostname === 'localhost' || hostname === '127.0.0.1';

export default createStore(
  combineReducers(reducers),
  initialState,
  isLocal ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
);
