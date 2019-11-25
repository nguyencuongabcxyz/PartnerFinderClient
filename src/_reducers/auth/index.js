import {
    LOGIN_SUCCESS,
    LOGIN_BAD_REQUEST,
    LOGIN_FORBIDDEN,
    LOGIN_SERVER_ERROR,
    LOGOUT
} from '../../_actions/auth/type'


const INITIAL_STATE = {
    isAuthenticated: null,
    statusCode: 0,
    userId: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, isAuthenticated: true, statusCode: action.statusCode, userId: action.userId };
        case LOGIN_BAD_REQUEST:
            return { ...state, isAuthenticated: false, statusCode: action.statusCode };
        case LOGIN_FORBIDDEN:
            return { ...state, isAuthenticated: false, statusCode: action.statusCode };
        case LOGIN_SERVER_ERROR:
            return { ...state, isAuthenticated: false, statusCode: action.statusCode };
        // case LOGOUT: 
        //     return {...INITIAL_STATE}
        default:
            return state;
    }
};