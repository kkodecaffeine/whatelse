import React from 'react';
import { Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedNavigation } from './Navigation'
import { ConnectedSignIn } from './SignIn'
import { ConnectedSignUp } from './SignUp'
import { store } from '../store';
import { history } from '../store/history';
import { Redirect } from 'react-router';

const RouteGuard = Component => ({ match }) =>
    !store.getState().session.authenticated ?
        <Redirect to="/" /> :
        <Component match={match} />;

export const Main = () => (
    <Router history={history}>
        <Provider store={store}>
            <div className="container mt-3">
                <ConnectedNavigation />
                <Route exact path="/" component={ConnectedSignIn} />
                <Route exact path="/signup" component={ConnectedSignUp} />
            </div>
        </Provider>
    </Router>
);