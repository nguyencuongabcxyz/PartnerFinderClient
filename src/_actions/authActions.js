import { authServices } from '../_services/authServices';
import { removeModalBootstrap } from '../_helpers/uiHelper';
import { withToastManager } from 'react-toast-notifications';

const Demo = ({ content, toastManager }) => (
  <Button onClick={() => toastManager.add(content, {
    appearance: 'success',
    autoDismiss: true,
    pauseOnHover: false,
  })}>
    Add Toast
  </Button>
);

import history from '../history';
import {
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_BAD_REQUEST,
    LOGIN_FORBIDDEN,
    LOGIN_SERVER_ERROR,
    LOGOUT
} from '../_constants/authConstants'

const requestLogin = () => {
    return {
        type: LOGIN_REQUEST,
    }
}

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
    dispatch(requestLogin());
    const result = await authServices.login(userName, password);
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
            history.push('/dashboard');
            removeModalBootstrap();
            break;
        default:
            break;
    }
};

export const logoutUser = () => {
    authServices.logout();
    history.push('/');
    return {
        type: LOGOUT
    }
}