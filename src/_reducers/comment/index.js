import {
    FETCH_MANY_COMMENTS,
    ADD_ONE_PARENT_COMMENT,
    ADD_ONE_SUB_COMMENT,
    SWITCH_PARENT_COMMENT_LIKE_REACTION,
    SWITCH_SUB_COMMENT_LIKE_REACTION,
} from '../../_actions/comment/type';

import _ from 'lodash';

const INITIAL_STATE = {
    comments: {}
}


export default (state = INITIAL_STATE, action) => {
    const preComments = state.comments;
    let parentId;
    if (action.comment) {
        parentId = action.comment.parentId;
    }
    const parentComment = state.comments[parentId];
    switch (action.type) {
      case FETCH_MANY_COMMENTS:
        return {
          ...state,
          comments: { ..._.mapKeys(action.comments, "id") }
        };
      case ADD_ONE_PARENT_COMMENT:
        return {
          ...state,
          comments: { ...preComments, [action.comment.id]: action.comment }
        };
      case ADD_ONE_SUB_COMMENT:
        parentComment.subComments.push(action.comment);
        return {
          ...state,
          comments: { ...preComments, [parentId]: parentComment }
        };
      case SWITCH_PARENT_COMMENT_LIKE_REACTION:
        return {
          ...state,
          comments: { ...preComments, [action.comment.id]: action.comment }
        };
      case SWITCH_SUB_COMMENT_LIKE_REACTION:
        const index = _.findIndex(parentComment.subComments, {id: action.comment.id});
        parentComment.subComments[index] = action.comment;
        return {
          ...state,
          comments: { ...preComments, [parentId]: parentComment }
        };
      default:
        return state;
    }
}