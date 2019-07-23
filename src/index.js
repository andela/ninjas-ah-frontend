import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-snapshot';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
