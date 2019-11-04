import {
    FETCH_MANY_COMMENTS,
    ADD_ONE_PARENT_COMMENT,
    ADD_ONE_SUB_COMMENT,
    SWITCH_PARENT_COMMENT_LIKE_REACTION,
    SWITCH_SUB_COMMENT_LIKE_REACTION
} from './type';

import {
    CommentService
 } from '../../_services/comment';

export const fetchManyComments = (postId) => async (dispatch) => {
    const data = await CommentService.getManyByPostId(postId);
    if (data){
        dispatch({
            type: FETCH_MANY_COMMENTS,
            comments: data,
        })
    }
}

export const addParentComment = (postId, content) => async (dispatch) => {
    const data = await CommentService.addParentComment(postId, content);
    if (data){
        dispatch({
            type: ADD_ONE_PARENT_COMMENT,
            comment: data,
        });
    }
}

export const addSubComment = (parentId, content) => async (dispatch) => {
    const data = await CommentService.addSubComment(parentId, content);
    if (data){
        dispatch({
            type: ADD_ONE_SUB_COMMENT,
            comment: data,
        });
    }
}

export const switchLikeReactionOfMainComment = (id) => async (dispatch) => {
    const data = await CommentService.switchLikeReaction(id);
    if (data){
        dispatch({
            type: SWITCH_PARENT_COMMENT_LIKE_REACTION,
            comment: data,
        });
    }
}

export const switchLikeReactionOfSubComment = (id) => async (dispatch) => {
    const data = await CommentService.switchLikeReaction(id);
    if (data){
        dispatch({
            type: SWITCH_SUB_COMMENT_LIKE_REACTION,
            comment: data,
        });
    }
}