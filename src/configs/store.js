'use strict';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';

export default createStore(
  combineReducers({

  }),
  {},
  applyMiddleware(reduxThunk)
);
