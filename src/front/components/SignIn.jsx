import React from 'react';
import * as mutations from '../store/mutations';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SignInComponent = ({ authenticateUser, authenticated }) => (
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

  // <div className="card p-3 col-6">
  //     <h3 class="teal-text">Hello</h3>
  //     <form onSubmit={authenticateUser}>
  //     <div className="row">
  // 				<div className="input-field col s12">
  // 					<input id="email" type="email" className="validate"/>
  //                     <label for="email">Email</label>
  // 				</div>
  // 			</div>
  //             <div class="row">
  // 				<div class="input-field col s12">
  // 					<input id="password" type="password" class="validate"/>
  // 					<label for="password">Password</label>
  // 				</div>
  // 			</div>
  //         {/* <input type="text" placeholder="username" name="username" className="form-control" />
  //         <input type="password" placeholder="password" name="password" className="form-control mt-2" />
  //         {authenticated === mutations.NOT_AUTHENTICATED ?
  //             <p>
  //                 Signin incorrect.
  //             </p> : null
  //         } */}
  //         <br/>
  // 			<center>
  // 				<button class="btn waves-effect waves-light teal" type="submit" disabled={authenticated === `PROCESSING`} name="action">Connect</button>
  // 				<br/>
  // 				<br/>
  // 				<a href="">Forgotten password?</a>
  // 			</center>
  //         </div>
  //     </form>
  // </div>
);

const mapStateToProps = ({ session }) => ({
    authenticated: session.authenticated
});

const mapDispatchToProps = (dispatch) => ({
    authenticateUser(e) {
        e.preventDefault();
        let username = e.target[`username`].value;
        let password = e.target[`password`].value;
        dispatch(mutations.requestAuthenticateUser(username, password));
    }
});

export const ConnectedSignIn = connect(mapStateToProps, mapDispatchToProps)(SignInComponent);