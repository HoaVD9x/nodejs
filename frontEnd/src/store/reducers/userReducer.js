import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    user_info: null
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user_info: action.user_info
            }
        case actionTypes.USER_LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user_info: null
            }
        case actionTypes.PROCESS_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user_info: null
            }
        default:
            return state;
    }
}

export default appReducer;