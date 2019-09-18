import {
    FETCH_ONE,
    UPDATE_ONE
} from '../_constants/userInfoConstants'

const INITIAL_STATE = {
    data : {},
    fetching: true,
    updating: null,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_ONE : 
           return {...state, data: action.data, fetching: action.fetching}
        case UPDATE_ONE :
            return {...state, data: action.data, updating: action.updating}
        case 'UPDATING' :
            return {...state, updating: action.updating}
        default :
            return state;
    }
}