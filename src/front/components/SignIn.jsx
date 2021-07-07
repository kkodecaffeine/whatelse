import React from "react";
import * as mutations from "../store/mutations";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const SignInComponent = ({ authenticateUser, authenticated }) => {
  return (
    <div id="signIn" className="col s12">
      <form className="col s12">
        <div className="form-container">
          <h3 className="teal-text">Hello</h3>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <br />
          <center>
            <button
              className="btn waves-effect waves-light teal"
              type="submit"
              disabled={authenticated === `PROCESSING`}
              name="action"
            >
              Connect
            </button>
            <br />
            <br />
            <a href="">Forgotten password?</a>
          </center>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = ({ session }) => ({
  authenticated: session.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  authenticateUser(e) {
    e.preventDefault();
    let username = e.target[`username`].value;
    let password = e.target[`password`].value;
    dispatch(mutations.requestAuthenticateUser(username, password));
  },
});

export const ConnectedSignIn = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInComponent);
