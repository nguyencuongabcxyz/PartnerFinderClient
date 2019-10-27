import {
    FETCH_MANY_COMMENTS
} from '../../_actions/comment/type';

import _ from 'lodash';

const INITIAL_STATE = {
    comments: {}
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case FETCH_MANY_COMMENTS:
            return {
                ...state,
                comments: {..._.mapKeys(action.comments, 'id')}
            }
        default:
            return state;
    }
}