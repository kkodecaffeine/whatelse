import React from "react";
import { Route, Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedNavigation } from "./Navigation";
import { ConnectedSignIn } from "./SignIn";
import { ConnectedSignUp } from "./SignUp";
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

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div className="container white z-depth-2">
        <ul className="tabs teal">
          <li className="tab col s3">
            <a className="white-text active" href="#signIn">
              {" "}
              login
            </a>
          </li>
          <li className="tab col s3">
            <a className="white-text" href="#signUp">
              register
            </a>
          </li>
        </ul>
        <ConnectedNavigation />
        <Route exact path="/" component={ConnectedSignIn} />
        <Route exact path="/signUp" component={ConnectedSignUp} />
      </div>
    </Provider>
  </Router>
);
