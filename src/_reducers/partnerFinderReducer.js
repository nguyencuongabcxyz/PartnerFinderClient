import {
    FETCH_MANY,
    FETCH_MANY_WITH_FILTER,
    IGNORE
} from '../_constants/partnerFinderConstants';

const INITIAL_STATE = {
    partnerFinders : [],
    count : 0
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_MANY :
            return {...state, partnerFinders: action.partnerFinders, count: action.count}
        case FETCH_MANY_WITH_FILTER:
            return {...state, partnerFinders: action.partnerFinders, count: action.count}
        default : 
        return state;
    }
}