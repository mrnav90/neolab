'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Application, Home } from '../containers';

export default (
  <Route path="/" component={ Application }>
    <IndexRoute component={ Home } />
  </Route>
);
