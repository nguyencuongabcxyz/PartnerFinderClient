import {
    FETCH_MANY_PARTNER_REQUEST
} from '../../_actions/partner-request/type';

const INITIAL_STATE = {
    partnerRequests : [],
    count : 0
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_MANY_PARTNER_REQUEST:
            return {...state, partnerRequests: action.partnerRequests, count: action.count}
        default : 
        return state;
    }
}