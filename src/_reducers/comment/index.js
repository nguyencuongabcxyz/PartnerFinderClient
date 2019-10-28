import {
    FETCH_MANY_COMMENTS,
    ADD_ONE_PARENT_COMMENT,
    ADD_ONE_SUB_COMMENT,
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
        case ADD_ONE_PARENT_COMMENT:
            const preComments = state.comments;
            return {
                ...state,
                comments: {...preComments, [action.comment.id]: action.comment},
            }
        case ADD_ONE_SUB_COMMENT: 
            const preCommentsForSub = state.comments;
            const { parentId } = action.comment;
            const comment = state.comments[parentId];
            comment.subComments.push(action.comment);
            return {
                ...state,
                comments: {...preCommentsForSub, [parentId]: comment}
            }
        default:
            return state;
    }
}