import { authServices } from '../_services/authServices';

import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_DUPLICATE,
    REGISTER_FAILURE
}from '../_constants/registrationConstants'

import {
    FAILED,
    DUPLICATE,
    SUCCESSFULL
} from '../_constants/registrationResult'

const requestRegister = () => {
    return {
        type: REGISTER_REQUEST
    }
}

const registerFailureWithDuplicate = () => {
    return {
        type: REGISTER_DUPLICATE
    }
}

const registerFailure = () => {
    return {
        type: REGISTER_FAILURE
    }
}

const registerSuccess = () => {
    return {
        type: REGISTER_SUCCESS
    }
}

export const registerUser = (userInfo) => async (dispatch) => {
    dispatch(requestRegister());
    const result = await authServices.register(userInfo);
    switch(result.registrationResult){
        case FAILED:
            dispatch(registerFailure());
            break;
        case DUPLICATE: 
            dispatch(registerFailureWithDuplicate());
            break;
        case SUCCESSFULL:
            dispatch(registerSuccess());
            break;
        default: 
            dispatch(registerFailure());
    }
}