'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Application, Home, Introduction } from '../containers';

export default (
  <Route path="/" component={Application}>
      <IndexRoute component={Home}/>
      <Route path="/introduction" component={Introduction}/>
  </Route>
);
