import { signUp, logIn, logOut } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const createNewUser = user => dispatch => {
    return signUp(user)
    .then(user => dispatch(receiveCurrentUser(user)), 
    errors => dispatch(receiveErrors(errors)));
}

export const createNewSession = user => dispatch => {
    return logIn(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors)));
}

export const deleteSession = () => dispatch => {
    return logOut()
    .then(() => dispatch(logoutCurrentUser()),
    errors => dispatch(receiveErrors(errors)));
}