import React from 'react';
import * as mutations from '../store/mutations';
import { connect } from 'react-redux';

const SignUpComponent = ({ requestCreateUserAccount, authenticated }) => {
  return (
    <div id="signUp" className="col s12">
      <form className="col s12" onSubmit={requestCreateUserAccount}>
        <div className="form-container">
          <h3 className="teal-text">Welcome</h3>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" class="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email-confirm" type="email" className="validate" />
              <label htmlFor="email-confirm">Email Confirmation</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="password-confirm"
                type="password"
                className="validate"
              />
              <label htmlFor="password-confirm">Password Confirmation</label>
            </div>
          </div>
          <center>
            {/* {authenticated == mutations.USERNAME_RESERVED ? (
              <p>A user by that name already exists.</p>
            ) : null} */}
            <button
              className="btn waves-effect waves-light teal"
              type="submit"
              name="action"
            >
              Submit
            </button>
          </center>
        </div>
      </form>
    </div>
  );
};
    
    // return <div className="card p-3 col-6">
    //     <h2>
    //         Complete the following form to create a new account.
    //     </h2>

    //     <form onSubmit={requestCreateUserAccount}>
    //         <label>
    //             <span>User Name</span>
    //             <input type="text" placeholder="username" name="username" defaultValue="Morty" className="form-control" />
    //         </label>
    //         <label>
    //             <span>Password</span>
    //             <input type="text" placeholder="password" name="password" defaultValue="COURAGE" className="form-control mt-2" />
    //         </label>

    //         {authenticated == mutations.USERNAME_RESERVED ? <p>A user by that name already exists.</p> : null}
    //         <button type="submit" className="form-control mt-2 btn btn-primary">Sign Up</button>
    //     </form>

    // </div>

const mapStateToProps = state => ({
    authenticated: state.session.authenticated
});

const mapDispatchToProps = (dispatch) => ({
    requestCreateUserAccount(e) {
        e.preventDefault();
        let username = e.target[`username`].value;
        let password = e.target[`password`].value;
        console.log("Creating!", username, password);
        dispatch(mutations.requestCreateUserAccount(username, password));
    }
})

export const ConnectedSignUp = connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);