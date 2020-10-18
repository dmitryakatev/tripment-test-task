import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { setTheme } from '@jss-helper';
import { THEME_BASE } from '@themes/base';

import { App } from './containers/App';
import { reducer } from './reducers';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...[thunk])),
);

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

setTheme(THEME_BASE);
