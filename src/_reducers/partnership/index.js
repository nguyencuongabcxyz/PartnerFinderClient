import { ADD_ONE_PARTNER, FETCH_ALL_PARTNERS, REMOVE_ONE_PARTNER } from '../../_actions/partnership/type';
import _ from 'lodash';

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_ALL_PARTNERS:
            return {...state, ..._.mapKeys(action.partners, 'partnerId')};
        case ADD_ONE_PARTNER:
            return {...state, [action.partner.id]: action.partner};
        case REMOVE_ONE_PARTNER:
            return _.omit(state, action.partner)    
        default:
            return state;    
    }
}