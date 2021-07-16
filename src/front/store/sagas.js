import { take, put, select } from 'redux-saga/effects';
import uuid from 'uuid';
import axios from 'axios';

import { history } from "./history.js"
import * as mutations from "./mutations.js";
const url = process.env.NODE_ENV === 'dev' ? 'http://localhost:8080' : 'http://localhost:8080';

export function* taskCreationSaga(){
    while (true){
        const {groupID} = yield take(mutations.REQUEST_TASK_CREATION);
        const ownerID = yield select(state=>state.session.id);
        const taskID = uuid();
        let mutation = mutations.createTask(taskID, groupID, ownerID);
        const { res } = yield axios.post(url + `/task/new`,{task:{
            id:taskID,
            group: groupID,
            owner: ownerID,
            isComplete:false,
            name:"New task"
        }});
        yield put(mutation);
    }
}

export function* userAuthenticationSaga(){
    while (true){
        const {email, password} = yield take(mutations.REQUEST_AUTHENTICATE_USER);
        try {
            const { data } = yield axios.post(url + `/authenticate`, {email, password});
            yield put(mutations.setState(data.state));
            yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED, {
                //id:"U1", // todo... get ID from response
                token:data.token
            }));
            // history.push(`/dashboard`);
        } catch (e) {
            /* catch block handles failed login */
            yield put(mutations.processAuthenticateUser(mutations.NOT_AUTHENTICATED));
        }
    }
}

export function* userAccountCreationSaga(){
    while (true) {
        const {username, password } = yield take(mutations.REQUEST_USER_ACCOUNT_CREATION);
        try {
            const { data } = yield axios.post(url + `/user/create`, {username,password});
            console.log(data);

            yield put(mutations.setState({...data.state,session:{id:data.userID}}));
            yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED));

            history.push('/dashboard');

        } catch (e) {
            console.error("Error",e);
            yield put(mutations.processAuthenticateUser(mutations.USERNAME_RESERVED));
        }
    }
}