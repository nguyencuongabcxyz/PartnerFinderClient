import {authServices} from '../_services/authServices';

export const login = (userName, password) => async (dispatch) => {
    const result = await authServices.login(userName, password);
    console.log(result);
    dispatch({
        type: 'LOGIN',
        payload: result
    });
};