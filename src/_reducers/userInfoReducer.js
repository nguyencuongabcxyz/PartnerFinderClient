import {
    FETCH_ONE
} from '../_constants/userInfoConstants'

const INITIAL_STATE = {
    userInfo : {}
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_ONE : 
           return {...state, ...action.userInfo}
        default:
            return state;
    }
}