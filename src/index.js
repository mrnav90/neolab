'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { routes, store } from './configs';
import wowjs from 'wowjs';
import 'wowjs/css/libs/animate.css';
import './styles/main.scss';

new wowjs.WOW().init();

ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
