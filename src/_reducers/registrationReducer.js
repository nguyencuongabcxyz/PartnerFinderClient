import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_DUPLICATE,
    REGISTER_FAILURE,
} from '../_constants/registrationActions'

import {
    FAILED,
    SUCCESSFULL,
    DUPLICATE
} from '../_constants/registrationResult'
const INITIAL_STATE = {
    registrationResult: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case REGISTER_REQUEST: 
           return state;
        case REGISTER_DUPLICATE: 
           return {...state, registrationResult: DUPLICATE}
        case REGISTER_FAILURE:
           return {...state, registrationResult: FAILED}
        case REGISTER_SUCCESS: 
           return {...state, registrationResult: SUCCESSFULL}
        default:
            return state;
    }
}