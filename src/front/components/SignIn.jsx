import React from "react";
import * as mutations from "../store/mutations";
import { connect } from "react-redux";

const SignInComponent = ({ authenticateUser, authenticated }) => {
  return (
    <div id="signIn" className="col s12">
      <form className="col s12" onSubmit={authenticateUser}>
        <div className="form-container">
          <h3 className="teal-text">Hello</h3>
          <div className="row">
            <div className="input-field col s12">
              <input type="email" name="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input type="password" name="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <br />
          <center>
            <button
              className="btn waves-effect waves-light teal"
              type="submit"
              disabled={authenticated === `PROCESSING`}
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
    let email = e.target[`email`].value;
    let password = e.target[`password`].value;
    dispatch(mutations.requestAuthenticateUser(email, password));
  },
});

export const ConnectedSignIn = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInComponent);
