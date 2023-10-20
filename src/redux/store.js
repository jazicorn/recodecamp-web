'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var toolkit_1 = require('@reduxjs/toolkit');
//import { createStore, applyMiddleware, combineReducers } from 'redux';
// import monitorReducersEnhancer from './enhancers/monitorReducers'
//import thunkMiddleware from 'redux-thunk'
var authSlice_ts_1 = require('./slices/authSlice.ts');
var dashboardSlice_ts_1 = require('./slices/dashboardSlice.ts');
var store = (0, toolkit_1.configureStore)({
  reducer: {
    authentication: authSlice_ts_1.authSlice.reducer,
    dashboard: dashboardSlice_ts_1.dashboardSlice.reducer,
    devTools: process.env.NODE_ENV !== 'production',
  },
});
exports.default = store;
