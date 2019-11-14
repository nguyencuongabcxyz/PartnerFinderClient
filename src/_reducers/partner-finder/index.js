import {
    FETCH_MANY,
    IGNORE
} from '../../_actions/partner-finder/type';

const INITIAL_STATE = {
    partnerFinders : [],
    count : 0
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_MANY :
            return {...state, partnerFinders: action.partnerFinders, count: action.count}
        default : 
        return state;
    }
}