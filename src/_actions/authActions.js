import {authServices} from '../_services/authServices';

export const login = (userName, password) => async (dispatch) => {
    const userId = await authServices.login(userName, password);
    console.log("dsfalasf");
    dispatch({
        type: 'LOGIN',
        payload: userId
    });
};