import { authService } from '../_services/authService';

import {
    REGISTER_SUCCESS,
    REGISTER_DUPLICATE,
    REGISTER_FAILURE
}from '../_constants/registrationConstants'

import {
    FAILED,
    DUPLICATE,
    SUCCESSFULL
} from '../_constants/registrationResult'

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
    const result = await authService.register(userInfo);
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