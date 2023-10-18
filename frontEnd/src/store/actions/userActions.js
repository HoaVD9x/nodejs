import actionTypes from './actionTypes';

export const addUserSuccess = () => ({
    type: actionTypes.ADD_USER_SUCCESS
})

export const user_login_succss = (user_info) => ({
    type: actionTypes.USER_LOGIN_SUCCESS,
    user_info: user_info
})


export const user_login_fail = () => ({
    type: actionTypes.USER_LOGIN_FAIL
})

export const process_logout = () => ({
    type: actionTypes.PROCESS_LOGOUT
})