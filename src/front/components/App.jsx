import React from "react";
import { Route, Router, NavLink, Link, Switch } from "react-router-dom"; // Switch: Route가 중복되는 것이 있으면 첫 번째 요소만 렌더링
import { history } from "../store/history";
import { ConnectedSignIn } from "./SignIn";
import { ConnectedSignUp } from "./SignUp";

const app = () => {
  return (
    
        <ul className="tabs teal">
          <li className="tab col s3">
            <NavLink to="/" className="white-text">
              login
            </NavLink>
          </li>
          <li className="tab col s3">
            <NavLink to="/signUp" className="white-text">
              register
            </NavLink>
          </li>
        </ul>
      
  );
};

export const App = app;
