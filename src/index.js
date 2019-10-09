import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import * as reducers from "./state/reducers";
import logger from "redux-logger";

import "bulma/css/bulma.css";
import "./styles.scss";

const bigStore = combineReducers({
  car: reducers.carReducer,
  shop: reducers.storeReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  bigStore,
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  composeEnhancer(applyMiddleware(logger))
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
