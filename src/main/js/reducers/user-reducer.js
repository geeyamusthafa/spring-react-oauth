import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import serviceConfig from '../utils/serviceConfig';
import Cookies from 'js-cookie';

const GET_USER = 'GET_USER';
const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
const GET_USER_FAILURE = 'GET_USER_FAILURE';
const SIGN_OUT = 'SIGN_OUT';

export const getUserAction = () => ({
    type: GET_USER
});

export const signOutAction = () => ({
    type: SIGN_OUT
});

function* getUser(action) {
    try {
      const userAuthentication = yield call(getUserFromService);
      yield put({type: GET_USER_SUCCESS, userName: userAuthentication.principal});
    } catch(e) {
      yield put({type: GET_USER_FAILURE, message:e.message});
    }
};

const getUserFromService = () =>
    axios.get("/user", serviceConfig)
    .then(response => response.data)
    .catch(e => {
        throw e
    });

function* signOut(action) {
    try {
      yield call(signOutFromService);
      yield put({type: GET_USER_FAILURE});
    } catch(e) {
      yield put({type: GET_USER_FAILURE});
    }
};

const signOutFromService = () =>
    axios.post("/logout", {}, serviceConfig)
    .then(response => response.data)
    .catch(e => {
        throw e
    });

export const userSaga = function*() {
    yield takeLatest(GET_USER, getUser);
    yield takeLatest(SIGN_OUT, signOut);
};

const defaultState = {
    userName: '',
    authenticated: false
};

export const userReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GET_USER_SUCCESS: {
            return Object.assign({}, state, {userName: action.userName}, {authenticated: true});
        }
        case GET_USER_FAILURE: {
            Cookies.remove('XSRF-TOKEN');
            return Object.assign({}, state, {userName: ''}, {authenticated: false});
        }
        default: {
            return state;
        }
    }
};