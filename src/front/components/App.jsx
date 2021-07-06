import React from "react";
import { Route, Router, Link, Switch } from "react-router-dom"; // Switch: Route가 중복되는 것이 있으면 첫 번째 요소만 렌더링
import { history } from "../store/history";
import { ConnectedSignIn } from "./SignIn";
import { ConnectedSignUp } from "./SignUp";

const app = () => {
  return (
    <Router history={history}>
      <div className="container white z-depth-2">
        <ul className="tabs teal">
          <li className="tab col s3">
            <Link to="/signIn" className="white-text active">
              login
            </Link>
          </li>
          <li className="tab col s3">
            <Link to="/signUp" className="white-text">
              register
            </Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/signIn" component={ConnectedSignIn} />
          <Route exact path="/signUp" component={ConnectedSignUp} />
        </Switch>
      </div>
    </Router>
  );
};

export const App = app;
