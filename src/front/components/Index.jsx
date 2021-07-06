import React from "react";
import { Route, Router, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedNavigation } from "./Navigation";
import { App } from "./App";
import { store } from "../store";
import { history } from "../store/history";
import { Redirect } from "react-router";

const RouteGuard =
  (Component) =>
  ({ match }) =>
    !store.getState().session.authenticated ? (
      <Redirect to="/" />
    ) : (
      <Component match={match} />
    );

export const Index = () => (
  // <Router history={history}>
  //   <Provider store={store}>
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  //   </Provider>
  // </Router>

  <Provider store={store}>
    <App />
  </Provider>
);
