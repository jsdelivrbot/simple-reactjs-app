import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';

import allReducers from "./reducers"
import App from "./components/App";

const store = createStore(
  allReducers,
  applyMiddleware(promise,createLogger())
  ); 

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>  ,
  document.querySelector(".container")
);
