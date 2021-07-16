import React from "react";
import { Route, Router } from "react-router-dom";
import { Provider } from "react-redux";
import { App } from "./App";
import { store } from "../store";
import { history } from "../store/history";
import { Redirect } from "react-router";
import { ConnectedSignIn } from "./SignIn";
import { ConnectedSignUp } from "./SignUp";

const RouteGuard =
  (Component) =>
  ({ match }) =>
    !store.getState().session.authenticated ? (
      <Redirect to="/" />
    ) : (
      <Component match={match} />
    );

export const Index = () => (
  <Router history={history}>
    <Provider store={store}>
      <div className="container white z-depth-2">
        <App />
        <Route exact path="/" component={ConnectedSignIn} />
        <Route exact path="/signup" component={ConnectedSignUp} />
      </div>
    </Provider>
  </Router>
);
