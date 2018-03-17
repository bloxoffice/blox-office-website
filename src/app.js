import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import Router from './routes';
import configureStore from './store/configureStore';
import './app.scss';

const store = configureStore();

const history = createHistory();

const App = () => (
  <Router />
);

render(
  (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  ),
  document.getElementById('root')
);
