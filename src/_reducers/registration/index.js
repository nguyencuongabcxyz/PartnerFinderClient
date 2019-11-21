import {
    REGISTER_SUCCESS,
    REGISTER_DUPLICATE,
    REGISTER_FAILURE,
    RESET_REGISTER_RESULT,
} from '../../_actions/registration/type'

import {
    FAILED,
    SUCCESSFULL,
    DUPLICATE
} from '../../_constants/registrationResult'

export default (state = null, action) => {
    switch(action.type) {
        case REGISTER_DUPLICATE: 
           return DUPLICATE
        case REGISTER_FAILURE:
           return FAILED
        case REGISTER_SUCCESS: 
           return SUCCESSFULL
        case RESET_REGISTER_RESULT:
            return null
        default:
            return state;
    }
}