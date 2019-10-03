import * as SessionApiUtil from '../utils/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

// action creators 
const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

//thunk actions

export const createNewUser = formUser => dispatch => SessionApiUtil.postUser(formUser)
.then(user => dispatch(receiveCurrentUser(user)));

export const login = formUser => dispatch => SessionApiUtil.postSession(formUser)
.then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => SessionApiUtil.deleteSession()
.then(() => dispatch(logoutCurrentUser()));