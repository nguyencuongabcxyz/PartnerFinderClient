import { AuthService } from '../../_services/auth';
import { removeModalBootstrap } from '../../_helpers/uiHelper';

import history from '../../history';
import {
    LOGIN_SUCCESS,
    LOGIN_BAD_REQUEST,
    LOGIN_FORBIDDEN,
    LOGIN_SERVER_ERROR,
    LOGOUT,
} from './type'
import { UserService } from '../../_services/user';

const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        userId: data.userId,
        statusCode: 200
    }
}

const loginFailureWithBadRequest = () => {
    return {
        type: LOGIN_BAD_REQUEST,
        statusCode: 400
    }
}

const loginFailureWithForbidden = () => {
    return {
        type: LOGIN_FORBIDDEN,
        statusCode: 403
    }
}

const loginFailureWithServerError = () => {
    return {
        type: LOGIN_SERVER_ERROR,
        statusCode: 500
    }
}

export const loginUser = (userName, password) => async (dispatch) => {
    const result = await AuthService.login(userName, password);
    switch (result.statusCode) {
        case 400:
            dispatch(loginFailureWithBadRequest());
            break;
        case 403:
            dispatch(loginFailureWithForbidden());
            break;
        case 500:
            dispatch(loginFailureWithServerError());
            break;
        case 200:
            dispatch(loginSuccess(result))
            const checkUserInfoResult = await UserService.checkUserInfoAfterLogin();
            if (checkUserInfoResult.completedInfoPercentage !== 100 || !checkUserInfoResult.isHavingLevel) {
                history.push('/checkinfo');
            } else {
                history.push('/dashboard');
            }
            removeModalBootstrap();
            break;
        default:
            break;
    }
};

export const logoutUser = () => {
    AuthService.logout();
    history.push('/');
    return {
        type: LOGOUT
    }
}